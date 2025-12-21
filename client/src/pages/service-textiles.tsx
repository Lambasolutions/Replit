import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";

export default function Textiles() {
  const services = [
    { name: "Khadi Products & Sarees", description: "Traditional handwoven khadi sarees and garments" },
    { name: "Handloom Collections", description: "Authentic handloom textiles from master weavers" },
    { name: "Machine Loom Textiles", description: "High-quality machine loom fabrics and materials" },
    { name: "Custom Textile Orders", description: "Customized textile solutions for bulk orders" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-400 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/services">
            <button className="text-white hover:text-gray-200 mb-4 flex items-center">
              ← Back to Services
            </button>
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Textiles</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl">
            Premium Khadi, Handloom, and Machine Loom textiles with traditional craftsmanship.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const images = [
                "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
                "https://images.unsplash.com/photo-1614599905316-f2d17b93f5f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
                "https://images.unsplash.com/photo-1586281380614-ba9ebca65ff8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
                "https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
              ];
              return (
                <Card key={index} className="shadow-lg hover:shadow-xl transition duration-300">
                  <div className="relative">
                    <img 
                      src={images[index]} 
                      alt={service.name} 
                      className="w-full h-48 object-cover rounded-t-xl"
                    />
                  </div>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.name}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <Button 
                      size="lg"
                      className="w-full bg-orange-600 text-white hover:bg-orange-700"
                      data-testid={`button-service-${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Interested in Our Textiles?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Order now and get premium quality textiles delivered to your doorstep.
          </p>
          <Button 
            size="lg" 
            className="bg-orange-600 text-white hover:bg-orange-700 px-8 py-4 text-lg font-semibold"
            data-testid="button-contact-expert"
          >
            Place Order
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
