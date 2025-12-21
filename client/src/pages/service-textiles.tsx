import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";

export default function Textiles() {
  const services = [
    { 
      name: "Khadi Products & Sarees", 
      description: "Traditional handwoven khadi sarees and garments",
      icon: "fas fa-sari",
      images: [
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
      ],
      features: ["Hand-spun fabric", "Traditional weaving", "Eco-friendly"]
    },
    { 
      name: "Handloom Collections", 
      description: "Authentic handloom textiles from master weavers",
      icon: "fas fa-webs",
      features: ["Master-woven", "Unique designs", "Cultural heritage"]
    },
    { 
      name: "Machine Loom Textiles", 
      description: "High-quality machine loom fabrics and materials",
      icon: "fas fa-industry",
      features: ["Modern quality", "Bulk orders", "Customizable"]
    },
    { 
      name: "Custom Textile Orders", 
      description: "Customized textile solutions for bulk orders",
      icon: "fas fa-palette",
      features: ["Bulk pricing", "Custom designs", "Fast delivery"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Enhanced Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-orange-600 to-orange-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1586281380614-ba9ebca65ff8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=600" 
            alt="Textiles" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/services">
            <button className="text-white hover:text-orange-200 mb-6 flex items-center transition">
              ← Back to Services
            </button>
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Premium Textiles</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl leading-relaxed">
            Traditional Khadi, Handloom, and Machine Loom textiles with authentic craftsmanship. Experience quality and heritage in every thread.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-3 text-lg font-semibold"
            >
              Shop Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/20 px-8 py-3 text-lg font-semibold"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: "fas fa-leaf", title: "Eco-Friendly", desc: "Sustainable and organic materials" },
              { icon: "fas fa-hands", title: "Handcrafted", desc: "Made by skilled artisans" },
              { icon: "fas fa-heart", title: "Heritage", desc: "Preserving traditional crafts" },
              { icon: "fas fa-truck", title: "Fast Shipping", desc: "Worldwide delivery available" }
            ].map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm">
                <i className={`${benefit.icon} text-4xl text-orange-600 mb-4`}></i>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Textile Collections</h2>
            <p className="text-xl text-gray-600">Explore our premium collection of traditional and modern textiles</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const images = [
                "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
                "https://images.unsplash.com/photo-1614599905316-f2d17b93f5f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
                "https://images.unsplash.com/photo-1586281380614-ba9ebca65ff8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
                "https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
              ];
              return (
                <Card key={index} className="shadow-lg hover:shadow-2xl transition duration-300 border-0 overflow-hidden">
                  <div className="relative h-48 bg-gray-200">
                    <img 
                      src={images[index]} 
                      alt={service.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="h-1 bg-gradient-to-r from-orange-600 to-orange-800"></div>
                  <CardContent className="p-8">
                    <div className="mb-4">
                      <i className={`${service.icon} text-4xl text-orange-600`}></i>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.name}</h3>
                    <p className="text-gray-600 mb-6 text-lg">{service.description}</p>
                    
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-gray-700">
                          <i className="fas fa-check text-orange-600 mr-3"></i>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      size="lg"
                      className="w-full bg-orange-600 text-white hover:bg-orange-700 transition duration-300"
                      data-testid={`button-service-${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      View Collection →
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">Why Choose Our Textiles?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                number: "100%", 
                title: "Authentic", 
                desc: "Genuine handwoven and traditionally made textiles"
              },
              { 
                number: "50+", 
                title: "Designs", 
                desc: "Wide variety of styles and patterns to choose from"
              },
              { 
                number: "99%", 
                title: "Satisfied", 
                desc: "Customer satisfaction guaranteed with every purchase"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 text-center">
                <h3 className="text-4xl font-bold text-orange-600 mb-4">{item.number}</h3>
                <p className="text-xl font-bold text-gray-900 mb-2">{item.title}</p>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Discover Premium Textiles</h2>
          <p className="text-xl mb-10 opacity-90">Shop our exclusive collection of authentic Khadi, Handloom, and Machine Loom textiles. Worldwide shipping available.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg font-semibold"
            >
              Shop Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/20 px-8 py-4 text-lg font-semibold"
            >
              Custom Orders
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
