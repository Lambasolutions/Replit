import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";

export default function Legal() {
  const services = [
    { 
      name: "E-Stamping", 
      description: "Non-judicial stamp papers online",
      icon: "fas fa-stamp",
      features: ["Instant delivery", "Government verified", "Legally valid"]
    },
    { 
      name: "Rental Agreement", 
      description: "Comprehensive rental documentation",
      icon: "fas fa-home",
      features: ["Customizable templates", "Legal compliance", "Fast execution"]
    },
    { 
      name: "Business Agreement", 
      description: "Commercial contract preparation",
      icon: "fas fa-file-contract",
      features: ["Expert drafted", "Legally binding", "Customizable"]
    },
    { 
      name: "Legal Documentation", 
      description: "Various legal document services",
      icon: "fas fa-gavel",
      features: ["Professional help", "Quick turnaround", "Affordable"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Enhanced Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-red-600 to-red-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1554224311-beab60ae8629?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=600" 
            alt="Legal" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/services">
            <button className="text-white hover:text-red-200 mb-6 flex items-center transition">
              ← Back to Services
            </button>
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Legal Services</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl leading-relaxed">
            Professional legal documentation and agreement services. Get expert guidance for all your legal needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-white text-red-600 hover:bg-red-50 px-8 py-3 text-lg font-semibold"
            >
              Get Legal Help
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
      <section className="py-16 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: "fas fa-shield-alt", title: "Legally Safe", desc: "100% legally compliant documents" },
              { icon: "fas fa-users", title: "Expert Team", desc: "Professional legal consultants" },
              { icon: "fas fa-clock", title: "Fast Turnaround", desc: "Quick document preparation" },
              { icon: "fas fa-tag", title: "Affordable", desc: "Competitive transparent pricing" }
            ].map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm">
                <i className={`${benefit.icon} text-4xl text-red-600 mb-4`}></i>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Legal Services</h2>
            <p className="text-xl text-gray-600">Expert documentation for all your legal requirements</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="shadow-lg hover:shadow-2xl transition duration-300 border-0 overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-red-600 to-red-800"></div>
                <CardContent className="p-8">
                  <div className="mb-6">
                    <i className={`${service.icon} text-5xl text-red-600`}></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.name}</h3>
                  <p className="text-gray-600 mb-6 text-lg">{service.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-700">
                        <i className="fas fa-check text-red-600 mr-3"></i>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    size="lg"
                    className="w-full bg-red-600 text-white hover:bg-red-700 transition duration-300"
                    data-testid={`button-service-${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    Get Service →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">Simple Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "1", title: "Consult", desc: "Discuss your legal requirements" },
              { number: "2", title: "Prepare", desc: "We draft your documents" },
              { number: "3", title: "Review", desc: "You review and provide feedback" },
              { number: "4", title: "Execute", desc: "Finalize and get certified" }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-lg p-8 shadow-lg text-center h-full">
                  <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <i className="fas fa-arrow-right text-red-400 text-2xl"></i>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Protect Your Interests</h2>
          <p className="text-xl mb-10 opacity-90">Get professional legal documentation from our expert team. Secure your documents today.</p>
          <Button 
            size="lg" 
            className="bg-white text-red-600 hover:bg-red-50 px-8 py-4 text-lg font-semibold"
            data-testid="button-get-legal-help"
          >
            Get Legal Help
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
