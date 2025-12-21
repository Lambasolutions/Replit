import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";

export default function CompanyRegistration() {
  const services = [
    { 
      name: "Proprietorship", 
      description: "Simple single-owner business structure",
      icon: "fas fa-user-tie",
      features: ["Quick setup", "Low cost", "Full control"]
    },
    { 
      name: "One Person Company (OPC)", 
      description: "Corporate structure for single entrepreneurs",
      icon: "fas fa-briefcase",
      features: ["Corporate status", "Limited liability", "Professional image"]
    },
    { 
      name: "Partnership Firm", 
      description: "Multiple partner business registration",
      icon: "fas fa-handshake",
      features: ["Joint ownership", "Shared responsibility", "Easy formation"]
    },
    { 
      name: "Limited Liability Partnership (LLP)", 
      description: "Flexible partnership with limited liability",
      icon: "fas fa-building",
      features: ["Liability protection", "Tax benefits", "Flexibility"]
    },
    { 
      name: "Private Limited Company", 
      description: "Most popular corporate structure",
      icon: "fas fa-corporation",
      features: ["Limited liability", "Professional growth", "Funding options"]
    },
    { 
      name: "Public Limited Company", 
      description: "Large-scale corporate structure",
      icon: "fas fa-landmark",
      features: ["Public shares", "Credibility", "Capital raising"]
    },
    { 
      name: "NGO / Trust / Society", 
      description: "Non-profit organization registration",
      icon: "fas fa-heart",
      features: ["Tax exemption", "Social impact", "Governance"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Enhanced Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=600" 
            alt="Business" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/services">
            <button className="text-white hover:text-blue-200 mb-6 flex items-center transition">
              ← Back to Services
            </button>
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Company Registration</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl leading-relaxed">
            Register your business today with our expert guidance. Choose the right structure for your business goals and grow with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg font-semibold"
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
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: "fas fa-clock", title: "Quick Processing", desc: "Get registered in days, not weeks" },
              { icon: "fas fa-check-circle", title: "Government Approved", desc: "100% legal compliance assured" },
              { icon: "fas fa-headset", title: "Expert Support", desc: "Dedicated team guidance throughout" },
              { icon: "fas fa-shield-alt", title: "Complete Protection", desc: "Secure your business interests" }
            ].map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm">
                <i className={`${benefit.icon} text-4xl text-blue-600 mb-4`}></i>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Registration Options</h2>
            <p className="text-xl text-gray-600">Choose the business structure that fits your needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="shadow-lg hover:shadow-2xl transition duration-300 border-0 overflow-hidden group">
                <div className="h-2 bg-gradient-to-r from-blue-600 to-blue-800"></div>
                <CardContent className="p-8">
                  <div className="mb-6">
                    <i className={`${service.icon} text-5xl text-blue-600`}></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.name}</h3>
                  <p className="text-gray-600 mb-6 text-lg">{service.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-700">
                        <i className="fas fa-check text-blue-600 mr-3"></i>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    size="lg"
                    className="w-full bg-blue-600 text-white hover:bg-blue-700 transition duration-300"
                    data-testid={`button-service-${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    Get Started →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">Simple 4-Step Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "1", title: "Choose Structure", desc: "Select the right registration type for your business" },
              { number: "2", title: "Provide Details", desc: "Share your business information and documents" },
              { number: "3", title: "Submit & Process", desc: "We handle all government submissions and paperwork" },
              { number: "4", title: "Get Registered", desc: "Receive your registration certificate and login access" }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-lg p-8 shadow-lg text-center h-full">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <i className="fas fa-arrow-right text-blue-400 text-2xl"></i>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Register Your Business?</h2>
          <p className="text-xl mb-10 opacity-90">Join 500+ successful businesses registered with us. Get expert support every step of the way.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold"
              data-testid="button-start-registration"
            >
              Start Registration
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/20 px-8 py-4 text-lg font-semibold"
            >
              <i className="fas fa-phone mr-2"></i>
              Call Us Now
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
