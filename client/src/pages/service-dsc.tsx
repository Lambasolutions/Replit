import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";

export default function DSC() {
  const services = [
    { 
      name: "Class 2 DSC", 
      description: "For individual use and filing returns",
      icon: "fas fa-user-circle",
      features: ["Individual certification", "Tax filing ready", "2 year validity"]
    },
    { 
      name: "Class 3 DSC", 
      description: "For organizations and e-tenders",
      icon: "fas fa-building",
      features: ["Organization certified", "E-tender eligible", "2 year validity"]
    },
    { 
      name: "DGFT DSC", 
      description: "For export-import documentation",
      icon: "fas fa-globe",
      features: ["Export certified", "Import eligible", "International use"]
    },
    { 
      name: "DSC Renewal", 
      description: "Renewal of existing certificates",
      icon: "fas fa-sync-alt",
      features: ["Quick renewal", "No data loss", "Instant activation"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Enhanced Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-700 to-green-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1554224311-beab60ae8629?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=600" 
            alt="Security" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/services">
            <button className="text-white hover:text-green-200 mb-6 flex items-center transition">
              ← Back to Services
            </button>
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">Digital Signature Certificate (DSC)</h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl leading-relaxed drop-shadow-md">
            Secure your digital identity with government-approved digital signatures. Get instant authentication for all your online transactions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-white text-green-600 hover:bg-green-50 px-8 py-3 text-lg font-semibold"
            >
              Get DSC Now
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
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: "fas fa-lock", title: "Secure & Safe", desc: "Bank-level encryption protection" },
              { icon: "fas fa-lightning-bolt", title: "Instant Activation", desc: "Get certified in minutes" },
              { icon: "fas fa-certificate", title: "Govt Approved", desc: "Official digital certification" },
              { icon: "fas fa-globe", title: "Global Valid", desc: "Accepted worldwide" }
            ].map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm">
                <i className={`${benefit.icon} text-4xl text-green-600 mb-4`}></i>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">DSC Types & Services</h2>
            <p className="text-xl text-gray-600">Choose the certificate class that suits your needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="shadow-lg hover:shadow-2xl transition duration-300 border-0 overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-green-600 to-green-800"></div>
                <CardContent className="p-8">
                  <div className="mb-6">
                    <i className={`${service.icon} text-5xl text-green-600`}></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.name}</h3>
                  <p className="text-gray-600 mb-6 text-lg">{service.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-700">
                        <i className="fas fa-check text-green-600 mr-3"></i>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    size="lg"
                    className="w-full bg-green-600 text-white hover:bg-green-700 transition duration-300"
                    data-testid={`button-service-${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    Order Now →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">What You Need</h2>
              <div className="space-y-6">
                {[
                  { title: "Valid ID Proof", desc: "Passport, Aadhar, or PAN card" },
                  { title: "Address Proof", desc: "Recent utility bill or bank statement" },
                  { title: "Email & Mobile", desc: "Active email and phone number" },
                  { title: "Digital Photo", desc: "Recent passport-sized photograph" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start p-6 bg-white rounded-lg shadow-sm">
                    <i className="fas fa-check-circle text-green-600 text-2xl mr-4 mt-1"></i>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1554224311-beab60ae8629?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Requirements" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Secure Your Digital Identity Today</h2>
          <p className="text-xl mb-10 opacity-90">Get your DSC certificate in minutes and sign documents securely online. 100% Government Approved.</p>
          <Button 
            size="lg" 
            className="bg-white text-green-600 hover:bg-green-50 px-8 py-4 text-lg font-semibold"
            data-testid="button-get-dsc"
          >
            Get DSC Certificate
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
