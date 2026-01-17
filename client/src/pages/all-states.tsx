import { Helmet } from "react-helmet";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import generatedHero from "@assets/generated_images/wide-angle_landscape_of_indian_parliament_building.png";

const states = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
  "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
  "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
];

// Mapping of state names to representative images
const stateImages: Record<string, string> = {
  "Andhra Pradesh": "https://images.unsplash.com/photo-1626071420790-2da8b75c87a5?auto=format&fit=crop&q=80&w=400",
  "Arunachal Pradesh": "https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&q=80&w=400",
  "Assam": "https://images.unsplash.com/photo-1594639233454-07d042968ec9?auto=format&fit=crop&q=80&w=400",
  "Bihar": "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&q=80&w=400",
  "Chhattisgarh": "https://images.unsplash.com/photo-1623053524316-37c8ef9ec98f?auto=format&fit=crop&q=80&w=400",
  "Goa": "https://images.unsplash.com/photo-1512789146564-8bd59273150a?auto=format&fit=crop&q=80&w=400",
  "Gujarat": "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&q=80&w=400",
  "Haryana": "https://images.unsplash.com/photo-1595231712325-9fdec20aa197?auto=format&fit=crop&q=80&w=400",
  "Himachal Pradesh": "https://images.unsplash.com/photo-1581005898864-4e78a635848f?auto=format&fit=crop&q=80&w=400",
  "Jharkhand": "https://images.unsplash.com/photo-1620050854426-3685c2901962?auto=format&fit=crop&q=80&w=400",
  "Karnataka": "https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&q=80&w=400",
  "Kerala": "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&q=80&w=400",
  "Madhya Pradesh": "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&q=80&w=400",
  "Maharashtra": "https://images.unsplash.com/photo-1562158074-21143899451a?auto=format&fit=crop&q=80&w=400",
  "Manipur": "https://images.unsplash.com/photo-1610408542911-37d38398b187?auto=format&fit=crop&q=80&w=400",
  "Meghalaya": "https://images.unsplash.com/photo-1515514210620-df7036499878?auto=format&fit=crop&q=80&w=400",
  "Mizoram": "https://images.unsplash.com/photo-1610408542911-37d38398b187?auto=format&fit=crop&q=80&w=400",
  "Nagaland": "https://images.unsplash.com/photo-1610408542911-37d38398b187?auto=format&fit=crop&q=80&w=400",
  "Odisha": "https://images.unsplash.com/photo-1589118949245-7d38baf380d6?auto=format&fit=crop&q=80&w=400",
  "Punjab": "https://images.unsplash.com/photo-1588096344316-f702346b31a1?auto=format&fit=crop&q=80&w=400",
  "Rajasthan": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=400",
  "Sikkim": "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&q=80&w=400",
  "Tamil Nadu": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=400",
  "Telangana": "https://images.unsplash.com/photo-1602143354857-490327f2f277?auto=format&fit=crop&q=80&w=400",
  "Tripura": "https://images.unsplash.com/photo-1610408542911-37d38398b187?auto=format&fit=crop&q=80&w=400",
  "Uttar Pradesh": "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=400",
  "Uttarakhand": "https://images.unsplash.com/photo-1584502833334-92ef2741969e?auto=format&fit=crop&q=80&w=400",
  "West Bengal": "https://images.unsplash.com/photo-1558431382-27e39cbef4bc?auto=format&fit=crop&q=80&w=400",
  "Delhi": "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&q=80&w=400",
  "Jammu and Kashmir": "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80&w=400",
  "Ladakh": "https://images.unsplash.com/photo-1614093851021-4d7629fc305e?auto=format&fit=crop&q=80&w=400",
  "Puducherry": "https://images.unsplash.com/photo-1589793907316-f94025b46850?auto=format&fit=crop&q=80&w=400",
};

export default function AllStates() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>All State Services - India | Lambana Solutions</title>
        <meta name="description" content="Comprehensive citizen and business services across all states and union territories of India." />
      </Helmet>
      <Header />
      
      <section className="relative min-h-[50vh] md:min-h-[85vh] flex items-center justify-center text-white overflow-hidden bg-gray-900">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img 
          src={generatedHero} 
          alt="Indian Parliament" 
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ objectPosition: 'center 20%' }}
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/services">
            <Button variant="ghost" className="text-white hover:bg-white/20 mb-6 group">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Services
            </Button>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">All State Services</h1>
          <p className="text-xl max-w-3xl mx-auto drop-shadow-md opacity-90">
            Dedicated support for citizen and business services across every state and union territory in India.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {states.map((state, index) => (
              <Card key={index} className="shadow-md hover:shadow-xl transition duration-300 border-t-4 border-blue-600 group overflow-hidden">
                <div className="h-40 overflow-hidden relative bg-gray-100">
                  {stateImages[state] ? (
                    <img 
                      src={stateImages[state]} 
                      alt={state}
                      key={state}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://images.unsplash.com/photo-1532375811408-1699075822cc?auto=format&fit=crop&q=80&w=400";
                      }}
                    />
                  ) : (
                    <div className="w-full h-full bg-blue-50 flex items-center justify-center">
                      <span className="text-blue-200 font-bold text-4xl">{state.charAt(0)}</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white drop-shadow-lg">{state}</h3>
                </div>
                <CardContent className="p-6">
                  <p className="text-sm text-gray-500 mb-4">Available Services</p>
                  <Link href={`/services/all-states/${state.split(" ").join("-")}`}>
                    <Button variant="outline" className="w-full border-blue-600 text-blue-700 hover:bg-blue-50">
                      View Services
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
