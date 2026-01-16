import { Helmet } from "react-helmet";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import heroImage from "@assets/generated_images/all_state_services_hero_image.png";

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

export default function AllStates() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>All State Services - India | Lambana Solutions</title>
        <meta name="description" content="Comprehensive citizen and business services across all states and union territories of India." />
      </Helmet>
      <Header />
      
      <section className="relative h-[350px] md:h-[500px] flex items-center justify-center text-white overflow-hidden bg-gray-900">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img 
          src={heroImage} 
          alt="Indian government and state services" 
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
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
              <Card key={index} className="shadow-md hover:shadow-xl transition duration-300 border-t-4 border-blue-600 group">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{state}</h3>
                  <p className="text-sm text-gray-500 mt-2">Available Services</p>
                  <Button variant="outline" className="w-full mt-4 border-blue-600 text-blue-700 hover:bg-blue-50">
                    View Services
                  </Button>
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
