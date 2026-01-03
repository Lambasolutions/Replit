import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, X, Send, Bot, User, Loader2 } from "lucide-react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

type Message = {
  id: number;
  role: "user" | "assistant";
  content: string;
};

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [conversationId, setConversationId] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const queryClient = useQueryClient();

  // Create conversation if not exists
  const createConversation = useMutation({
    mutationFn: async () => {
      const res = await apiRequest("POST", "/api/conversations", { title: "New Support Chat" });
      return res.json();
    },
    onSuccess: (data) => {
      setConversationId(data.id);
    }
  });

  // Fetch messages
  const { data: messages = [], isLoading: isLoadingMessages } = useQuery<Message[]>({
    queryKey: ["/api/conversations", conversationId, "messages"],
    enabled: !!conversationId,
    queryFn: async () => {
      const res = await fetch(`/api/conversations/${conversationId}`);
      const data = await res.json();
      return data.messages || [];
    }
  });

  // Send message
  const sendMessage = useMutation({
    mutationFn: async (content: string) => {
      if (!conversationId) return;
      const res = await fetch(`/api/conversations/${conversationId}/messages`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content }),
      });
      
      const reader = res.body?.getReader();
      const decoder = new TextDecoder();
      let assistantMessage = "";

      // Add optimistic user message
      queryClient.setQueryData<Message[]>(["/api/conversations", conversationId, "messages"], (old = []) => [
        ...old,
        { id: Date.now(), role: "user", content }
      ]);

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          const chunk = decoder.decode(value);
          const lines = chunk.split("\n\n");
          for (const line of lines) {
            if (line.startsWith("data: ")) {
              try {
                const data = JSON.parse(line.slice(6));
                if (data.content) {
                  assistantMessage += data.content;
                  // Update message list with streaming content
                  queryClient.setQueryData<Message[]>(["/api/conversations", conversationId, "messages"], (old = []) => {
                    const last = old[old.length - 1];
                    if (last?.role === "assistant") {
                      return [...old.slice(0, -1), { ...last, content: assistantMessage }];
                    }
                    return [...old, { id: Date.now() + 1, role: "assistant", content: assistantMessage }];
                  });
                }
              } catch (e) {
                console.error("Error parsing SSE", e);
              }
            }
          }
        }
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/conversations", conversationId, "messages"] });
    }
  });

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleOpen = () => {
    setIsOpen(true);
    if (!conversationId) {
      createConversation.mutate();
    }
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || sendMessage.isPending) return;
    const content = message.trim();
    setMessage("");
    sendMessage.mutate(content);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen ? (
        <Card className="w-[350px] sm:w-[400px] h-[500px] flex flex-col shadow-2xl border-primary/20 animate-in slide-in-from-bottom-5">
          <CardHeader className="bg-primary text-white py-4 flex flex-row items-center justify-between rounded-t-lg">
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5" />
              <CardTitle className="text-lg">Lambana AI Assistant</CardTitle>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-white hover:bg-white/20">
              <X className="h-5 w-5" />
            </Button>
          </CardHeader>
          <CardContent className="flex-1 overflow-hidden p-0 flex flex-col">
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                <div className="flex gap-2">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Bot className="h-4 w-4 text-primary" />
                  </div>
                  <div className="bg-gray-100 rounded-2xl p-3 text-sm max-w-[80%]">
                    Hello! How can Lambana Solutions help you today with registration, loans, or e-commerce?
                  </div>
                </div>
                {messages.map((msg) => (
                  <div key={msg.id} className={`flex gap-2 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                    <div className={`h-8 w-8 rounded-full flex items-center justify-center ${msg.role === "user" ? "bg-primary text-white" : "bg-primary/10 text-primary"}`}>
                      {msg.role === "user" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                    </div>
                    <div className={`${msg.role === "user" ? "bg-primary text-white" : "bg-gray-100 text-gray-800"} rounded-2xl p-3 text-sm max-w-[80%] whitespace-pre-wrap`}>
                      {msg.content}
                    </div>
                  </div>
                ))}
                <div ref={scrollRef} />
              </div>
            </ScrollArea>
            <form onSubmit={handleSend} className="p-4 border-t flex gap-2">
              <Input 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your question..."
                className="flex-1"
                disabled={sendMessage.isPending}
              />
              <Button type="submit" size="icon" disabled={!message.trim() || sendMessage.isPending}>
                {sendMessage.isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
              </Button>
            </form>
          </CardContent>
        </Card>
      ) : (
        <Button 
          onClick={handleOpen}
          className="h-14 w-14 rounded-full shadow-lg hover:scale-110 transition-transform bg-primary"
          size="icon"
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </Button>
      )}
    </div>
  );
}
