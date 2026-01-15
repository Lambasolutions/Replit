import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/legal_consultation_and_law_concepts.png";

export default function Legal() {
  const services = [
    { name: "E-Stamping", description: "Non-judicial stamp papers online" },
    { name: "Rental Agreement", description: "Comprehensive rental documentation" },
    { name: "Business Agreement", description: "Commercial contract preparation" },
    { name: "Legal Documentation", description: "Various legal document services" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-400 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/services">
            <button className="text-white hover:text-gray-200 mb-4 flex items-center">
              ← Back to Services
            </button>
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Legal Services</h1>
              <p className="text-xl md:text-2xl mb-8">
                Professional legal documentation and agreement services for your business.
              </p>
            </div>
            <div className="hidden lg:block">
              <img 
                src={heroImage}
                alt="Legal Services"
                className="rounded-2xl shadow-2xl border-4 border-white/20"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition duration-300 border-t-4 border-red-600">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.name}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Button 
                    variant="outline"
                    className="w-full border-red-600 text-red-700 hover:bg-red-50"
                  >
                    Get Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Legal Guidance Needed?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Get professional legal documentation support from our experts.
          </p>
          <Button 
            size="lg" 
            className="bg-red-600 text-white hover:bg-red-700 px-8 py-4 text-lg font-semibold"
            data-testid="button-contact-expert"
          >
            Get Legal Help
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
