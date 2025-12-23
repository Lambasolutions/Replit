import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";

export default function Ecommerce() {
  const services = [
    { name: "Agri Products", description: "Fresh agricultural produce online" },
    { name: "South Indian Foods", description: "Authentic regional cuisine" },
    { name: "Textiles", description: "Khadi, handloom, and machine loom products" },
    { name: "Export Services", description: "International trade facilitation" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-indigo-400 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/services">
            <button className="text-white hover:text-gray-200 mb-4 flex items-center">
              ← Back to Services
            </button>
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">E-commerce Solutions</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl">
            Complete e-commerce solutions for products and export services.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.name}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Button 
                    size="lg"
                    className="w-full bg-indigo-600 text-white hover:bg-indigo-700"
                    data-testid={`button-service-${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Expand Your Reach</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join our e-commerce platform and reach customers worldwide.
          </p>
          <Button 
            size="lg" 
            className="bg-indigo-600 text-white hover:bg-indigo-700 px-8 py-4 text-lg font-semibold"
            data-testid="button-contact-expert"
          >
            Get Started
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
