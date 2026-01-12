import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";

export default function CompanyRegistration() {
  const proprietorshipServices = [
    { 
      name: "Udyam Registration", 
      price: "₹2,000", 
      description: "MSME registration for small business benefits and government schemes." 
    },
    { 
      name: "GST Registration", 
      price: "₹2,000", 
      description: "Mandatory tax registration for businesses exceeding turnover limits." 
    }
  ];

  const services = [
    { name: "One Person Company (OPC)", description: "Corporate structure for single entrepreneurs" },
    { name: "Partnership Firm", description: "Multiple partner business registration" },
    { name: "Limited Liability Partnership (LLP)", description: "Flexible partnership with limited liability" },
    { name: "Private Limited Company", description: "Most popular corporate structure" },
    { name: "Public Limited Company", description: "Large-scale corporate structure" },
    { name: "NGO / Trust / Society", description: "Non-profit organization registration" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Company Registration - Proprietorship, LLP, Pvt Ltd | Lambana Solutions</title>
        <meta name="description" content="Register your business with ease. We handle Proprietorship, LLP, OPC, and Private Limited Company registrations with full compliance." />
      </Helmet>
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-400 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/services">
            <button className="text-white hover:text-gray-200 mb-4 flex items-center">
              ← Back to Services
            </button>
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Company Registration</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl">
            Comprehensive business registration services for all types of corporate structures.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Proprietorship Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b pb-4">Proprietorship Registration</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {proprietorshipServices.map((service, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition duration-300 border-2 border-blue-50">
                  <CardContent className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">{service.name}</h3>
                      <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                    </div>
                    <p className="text-gray-600 mb-8">{service.description}</p>
                    
                    <div className="grid grid-cols-1 gap-3">
                      <div className="flex gap-3">
                        <Button className="flex-1 bg-blue-600 hover:bg-blue-700">Buy Now</Button>
                        <Button variant="outline" className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-50">Add to Cart</Button>
                      </div>
                      <Button variant="secondary" className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900">Enquire Now</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b pb-4">Other Registration Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.name}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Button 
                    size="lg"
                    className="w-full bg-blue-600 text-white hover:bg-blue-700"
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Need Help?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact our experts today to get started with your business registration.
          </p>
          <Button 
            size="lg" 
            className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 text-lg font-semibold"
            data-testid="button-contact-expert"
          >
            Contact Expert
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
