import MegaMenu from "@/components/MegaMenu";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function CompanyRegistration() {
  const registrationTypes = [
    {
      title: "Proprietorship",
      description: "Simple single-owner business structure",
      features: ["Easy setup", "Minimal compliance", "Direct tax benefits", "Full control"],
      price: "Starting ₹2,999",
      timeframe: "7-10 days",
      icon: "fas fa-user"
    },
    {
      title: "One Person Company (OPC)", 
      description: "Corporate structure for single entrepreneurs",
      features: ["Limited liability", "Separate legal entity", "Easy compliance", "Perpetual succession"],
      price: "Starting ₹8,999",
      timeframe: "15-20 days",
      icon: "fas fa-user-tie"
    },
    {
      title: "Partnership Firm",
      description: "Multiple partner business registration", 
      features: ["Shared responsibility", "Tax benefits", "Easy formation", "Flexible management"],
      price: "Starting ₹4,999",
      timeframe: "7-15 days",
      icon: "fas fa-handshake"
    },
    {
      title: "Limited Liability Partnership (LLP)",
      description: "Flexible partnership with limited liability",
      features: ["Limited liability", "Tax benefits", "Flexible structure", "No audit requirement"],
      price: "Starting ₹7,999", 
      timeframe: "20-25 days",
      icon: "fas fa-shield-alt"
    },
    {
      title: "Private Limited Company",
      description: "Most popular corporate structure",
      features: ["Limited liability", "Credibility", "Fund raising", "Tax benefits"],
      price: "Starting ₹12,999",
      timeframe: "15-20 days", 
      icon: "fas fa-building"
    },
    {
      title: "Public Limited Company",
      description: "Large-scale corporate structure",
      features: ["Public funding", "Share trading", "High credibility", "Growth potential"],
      price: "Starting ₹25,999",
      timeframe: "30-45 days",
      icon: "fas fa-chart-line"
    },
    {
      title: "NGO / Trust / Society", 
      description: "Non-profit organization registration",
      features: ["Tax exemption", "Donation benefits", "Social impact", "Legal recognition"],
      price: "Starting ₹9,999",
      timeframe: "30-40 days",
      icon: "fas fa-heart"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <MegaMenu />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Company Registration</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Choose the right business structure for your venture. We handle all legal formalities and compliance requirements.
          </p>
          <Button 
            size="lg" 
            className="bg-accent text-white hover:bg-accent/90 px-8 py-4 text-lg font-semibold"
            data-testid="button-get-started-registration"
          >
            Get Started Today
          </Button>
        </div>
      </section>

      {/* Registration Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Business Registration Types</h2>
            <p className="text-xl text-gray-600">Select the perfect business structure for your specific needs and goals.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {registrationTypes.map((type, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition duration-300 border border-gray-100">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="bg-primary text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <i className={`${type.icon} text-2xl`}></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{type.title}</h3>
                    <p className="text-gray-600 mb-4">{type.description}</p>
                    <div className="flex justify-center space-x-4 mb-4">
                      <Badge variant="outline" className="text-green-600 border-green-200">
                        {type.price}
                      </Badge>
                      <Badge variant="outline" className="text-blue-600 border-blue-200">
                        {type.timeframe}
                      </Badge>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {type.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <i className="fas fa-check text-green-500 mr-3"></i>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    className="w-full bg-primary text-white hover:bg-primary/90"
                    data-testid={`button-register-${type.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    Register {type.title}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-neutral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Registration Process</h2>
            <p className="text-xl text-gray-600">Simple, transparent, and efficient business registration in 4 easy steps.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Consultation",
                description: "Free consultation to choose the right business structure",
                icon: "fas fa-comments"
              },
              {
                step: "2", 
                title: "Documentation",
                description: "Prepare and verify all required documents",
                icon: "fas fa-file-alt"
              },
              {
                step: "3",
                title: "Registration",
                description: "Submit application and handle government procedures",
                icon: "fas fa-clipboard-check"
              },
              {
                step: "4",
                title: "Delivery",
                description: "Receive your registration certificate and documents",
                icon: "fas fa-certificate"
              }
            ].map((process, index) => (
              <Card key={index} className="text-center shadow-lg">
                <CardContent className="p-8">
                  <div className="bg-primary text-white rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center font-bold text-lg">
                    {process.step}
                  </div>
                  <i className={`${process.icon} text-3xl text-primary mb-4`}></i>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{process.title}</h3>
                  <p className="text-gray-600 text-sm">{process.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Register Your Business?</h2>
          <p className="text-xl mb-8">
            Get expert guidance and complete your business registration with full legal compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-accent text-white hover:bg-accent/90 px-8 py-4 text-lg font-semibold"
              data-testid="button-start-registration"
            >
              Start Registration
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold"
              data-testid="button-free-consultation"
            >
              Free Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}