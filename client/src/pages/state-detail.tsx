import { Helmet } from "react-helmet";
import { Link, useRoute } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

// This is a simplified sample map for the testing phase
const stateInfo: Record<string, { image: string, description: string }> = {
  "Andhra-Pradesh": {
    image: "https://images.unsplash.com/photo-1626071420790-2da8b75c87a5?auto=format&fit=crop&q=80&w=1200",
    description: "Comprehensive citizen and business services for the state of Andhra Pradesh.",
    services: ["MeeSeva Services", "Birth & Death Registration", "Municipal Services", "Corporation Services", "Tax Compliance"]
  },
  "Telangana": {
    image: "https://images.unsplash.com/photo-1602143354857-490327f2f277?auto=format&fit=crop&q=80&w=1200",
    description: "Dedicated e-governance and business solutions for Telangana state.",
    services: ["MeeSeva Telangana", "T-App Folio Services", "Muncipal Administration", "Legal Documentation", "Financial Advisory"]
  },
  "Maharashtra": {
    image: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&q=80&w=1200",
    description: "Dedicated business solutions and legal compliance services in Maharashtra.",
    services: ["Aaple Sarkar Services", "Company Registration", "Tax Compliance", "Legal Documentation", "Financial Advisory"]
  },
  "Delhi": {
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&q=80&w=1200",
    description: "Premium government and corporate services in the National Capital Territory of Delhi."
  }
};

export default function StateDetail() {
  const [match, params] = useRoute("/services/all-states/:stateId");
  const stateId = params?.stateId || "";
  const stateName = stateId.split("-").join(" ");
  const info = stateInfo[stateId] || {
    image: "https://images.unsplash.com/photo-1532375811408-1699075822cc?auto=format&fit=crop&q=80&w=1200",
    description: `Comprehensive business and citizen services available for ${stateName}.`,
    services: ["CSC Services", "Tax Compliance", "Company Registration", "Legal Documentation", "Financial Advisory"]
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{stateName} Services | Lambana Solutions</title>
      </Helmet>
      <Header />
      
      <section className="relative min-h-[50vh] flex items-center justify-center text-white overflow-hidden bg-gray-900">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img 
          src={info.image} 
          alt={stateName} 
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 text-center">
          <Link href="/services/all-states">
            <Button variant="ghost" className="text-white hover:bg-white/20 mb-6 group">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to All States
            </Button>
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-2xl">{stateName}</h1>
          <p className="text-xl max-w-2xl mx-auto drop-shadow-lg">{info.description}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {info.services.map((service) => (
              <div key={service} className="p-8 border rounded-xl shadow-lg hover:shadow-2xl transition duration-300 border-t-4 border-blue-600">
                <CheckCircle2 className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">{service}</h3>
                <p className="text-gray-600 mb-4">Fast-tracked {service.toLowerCase()} specifically tailored for {stateName} regulations.</p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-200 transition-all">
                  Get Quote
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
