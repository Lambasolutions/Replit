import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";

export default function Ecommerce() {
  const services = [
    { 
      name: "Agri Products", 
      description: "Fresh agricultural produce online",
      icon: "fas fa-leaf",
      features: ["Farm fresh quality", "Direct from farmers", "Organic certified"]
    },
    { 
      name: "South Indian Foods", 
      description: "Authentic regional cuisine",
      icon: "fas fa-utensils",
      features: ["Traditional recipes", "Quality ingredients", "Fast delivery"]
    },
    { 
      name: "Textiles", 
      description: "Khadi, handloom, and textiles",
      icon: "fas fa-tshirt",
      features: ["Handwoven quality", "Eco-friendly", "Customizable"]
    },
    { 
      name: "Export Services", 
      description: "International trade facilitation",
      icon: "fas fa-globe",
      features: ["Global shipping", "Documentation help", "Custom logistics"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Enhanced Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-indigo-600 to-indigo-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=600" 
            alt="Ecommerce" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/services">
            <button className="text-white hover:text-indigo-200 mb-6 flex items-center transition">
              ← Back to Services
            </button>
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">E-commerce Solutions</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl leading-relaxed">
            Complete e-commerce platform for Indian products. Reach customers globally with secure payments and logistics support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-white text-indigo-600 hover:bg-indigo-50 px-8 py-3 text-lg font-semibold"
            >
              Get Started
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
      <section className="py-16 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: "fas fa-shopping-cart", title: "Easy Setup", desc: "Start selling in minutes" },
              { icon: "fas fa-lock", title: "Secure Payments", desc: "Multiple payment options" },
              { icon: "fas fa-truck", title: "Logistics", desc: "Nationwide shipping included" },
              { icon: "fas fa-chart-line", title: "Growth Tools", desc: "Analytics and marketing" }
            ].map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm">
                <i className={`${benefit.icon} text-4xl text-indigo-600 mb-4`}></i>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Product Categories</h2>
            <p className="text-xl text-gray-600">Sell your products to customers worldwide</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="shadow-lg hover:shadow-2xl transition duration-300 border-0 overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-indigo-600 to-indigo-800"></div>
                <CardContent className="p-8">
                  <div className="mb-6">
                    <i className={`${service.icon} text-5xl text-indigo-600`}></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.name}</h3>
                  <p className="text-gray-600 mb-6 text-lg">{service.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-700">
                        <i className="fas fa-check text-indigo-600 mr-3"></i>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    size="lg"
                    className="w-full bg-indigo-600 text-white hover:bg-indigo-700 transition duration-300"
                    data-testid={`button-service-${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    Start Selling →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">Why Sellers Choose Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Complete Control", 
                desc: "Manage inventory, pricing, and orders from one dashboard",
                icon: "fas fa-sliders-h"
              },
              { 
                title: "Multiple Payment Methods", 
                desc: "Accept credit cards, UPI, net banking, and digital wallets",
                icon: "fas fa-credit-card"
              },
              { 
                title: "Smart Analytics", 
                desc: "Track sales, customer behavior, and business growth metrics",
                icon: "fas fa-chart-bar"
              },
              { 
                title: "Marketing Tools", 
                desc: "Built-in SEO, social media integration, and promotional tools",
                icon: "fas fa-megaphone"
              },
              { 
                title: "24/7 Support", 
                desc: "Expert team available round the clock for assistance",
                icon: "fas fa-headset"
              },
              { 
                title: "Zero Commission", 
                desc: "Transparent pricing with minimal platform fees",
                icon: "fas fa-wallet"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 text-center">
                <i className={`${feature.icon} text-4xl text-indigo-600 mb-4`}></i>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-indigo-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Expand Your Reach?</h2>
          <p className="text-xl mb-10 opacity-90">Join hundreds of sellers already successfully selling their products online. No commission, full support.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-indigo-600 hover:bg-indigo-50 px-8 py-4 text-lg font-semibold"
            >
              Start Selling Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/20 px-8 py-4 text-lg font-semibold"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
