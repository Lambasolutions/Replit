import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/e-commerce_and_global_logistics_concepts.png";
import agriImage from "@assets/generated_images/fresh_agricultural_products_and_farm_produce.png";
import textileImage from "@assets/generated_images/professional_textile_and_handloom_fabrics.png";

export default function Ecommerce() {
  const services = [
    { 
      name: "Agri Products", 
      description: "Fresh agricultural produce online",
      image: agriImage
    },
    { 
      name: "South Indian Foods", 
      description: "Authentic regional cuisine",
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
    },
    { 
      name: "Textiles", 
      description: "Khadi, handloom, and machine loom products",
      image: textileImage
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>E-commerce Solutions - Agri, Textiles & Global Trade | Lambana Solutions</title>
        <meta name="description" content="Comprehensive e-commerce platform for agricultural products, premium textiles, and international trade services." />
      </Helmet>
      <Header />
      
      <section className="py-12 bg-gradient-to-r from-indigo-600 to-indigo-400 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/services">
            <button className="text-white hover:text-gray-200 mb-4 flex items-center">
              ← Back to Services
            </button>
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">E-commerce Solutions</h1>
              <p className="text-xl md:text-2xl mb-8">
                Complete e-commerce solutions for products and export services.
              </p>
            </div>
            <div className="lg:block">
              <img 
                src={heroImage}
                alt="E-commerce Solutions"
                className="rounded-2xl shadow-2xl border-4 border-white/20 w-full h-auto max-h-[300px] lg:max-h-[400px] object-cover mt-8 lg:mt-0"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition duration-300 overflow-hidden border-t-4 border-indigo-600">
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <img 
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                    data-testid={`image-${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                  />
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.name}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Button 
                    variant="outline"
                    className="w-full border-indigo-600 text-indigo-700 hover:bg-indigo-50"
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
