import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";

export default function CSC() {
  const services = [
    { 
      name: "Aadhaar Services", 
      description: "Aadhaar enrollment and updates",
      icon: "fas fa-id-card",
      features: ["Instant enrollment", "Easy updates", "Digital records"]
    },
    { 
      name: "PAN Card Services", 
      description: "New PAN and corrections",
      icon: "fas fa-credit-card",
      features: ["Quick processing", "Instant approval", "Free corrections"]
    },
    { 
      name: "Passport Services", 
      description: "Application and renewal assistance",
      icon: "fas fa-passport",
      features: ["Document guidance", "Form assistance", "Fast approval"]
    },
    { 
      name: "Banking Services", 
      description: "Account opening and banking support",
      icon: "fas fa-university",
      features: ["Multiple banks", "Zero balance accounts", "Expert guidance"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Enhanced Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-purple-600 to-purple-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=600" 
            alt="Services" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/services">
            <button className="text-white hover:text-purple-200 mb-6 flex items-center transition">
              ← Back to Services
            </button>
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">CSC Services</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl leading-relaxed">
            Access all government services at your local CSC center. From Aadhaar to banking, we handle it all with expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-3 text-lg font-semibold"
            >
              Visit CSC
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
      <section className="py-16 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: "fas fa-location-dot", title: "Nearby Location", desc: "Find your nearest CSC" },
              { icon: "fas fa-clock", title: "Quick Service", desc: "Fast & efficient processing" },
              { icon: "fas fa-check-circle", title: "Official", desc: "Government authorized" },
              { icon: "fas fa-headset", title: "Support", desc: "Expert guidance available" }
            ].map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm">
                <i className={`${benefit.icon} text-4xl text-purple-600 mb-4`}></i>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Available Services</h2>
            <p className="text-xl text-gray-600">One-stop solution for all government services</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="shadow-lg hover:shadow-2xl transition duration-300 border-0 overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-purple-600 to-purple-800"></div>
                <CardContent className="p-8">
                  <div className="mb-6">
                    <i className={`${service.icon} text-5xl text-purple-600`}></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.name}</h3>
                  <p className="text-gray-600 mb-6 text-lg">{service.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-700">
                        <i className="fas fa-check text-purple-600 mr-3"></i>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    size="lg"
                    className="w-full bg-purple-600 text-white hover:bg-purple-700 transition duration-300"
                    data-testid={`button-service-${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    Learn More →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">Why Choose Our CSC?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "10,000+", title: "Satisfied Citizens", desc: "Trusted by thousands across regions" },
              { number: "50+", title: "Services Available", desc: "Complete government service suite" },
              { number: "99%", title: "Success Rate", desc: "Efficient processing & approval" }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 text-center">
                <h3 className="text-4xl font-bold text-purple-600 mb-4">{feature.number}</h3>
                <p className="text-xl font-bold text-gray-900 mb-2">{feature.title}</p>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Visit Our CSC Center Today</h2>
          <p className="text-xl mb-10 opacity-90">Get all your government services done in one place. Fast, reliable, and official.</p>
          <Button 
            size="lg" 
            className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg font-semibold"
            data-testid="button-visit-csc"
          >
            Find Location
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
