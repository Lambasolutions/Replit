import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/modern_office_building_and_business_registration_concepts.png";

export default function CompanyRegistration() {
  const services = [
    { name: "Proprietorship", description: "Simple single-owner business structure" },
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
      
      <section className="py-8 bg-gradient-to-r from-blue-600 to-blue-400 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/services">
            <button className="text-white hover:text-gray-200 mb-4 flex items-center">
              ← Back to Services
            </button>
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Company Registration</h1>
              <p className="text-lg md:text-xl mb-6">
                Comprehensive business registration services for all types of corporate structures.
              </p>
            </div>
            <div className="lg:block">
              <img 
                src={heroImage}
                alt="Company Registration"
                className="rounded-2xl shadow-2xl border-4 border-white/20 w-full h-auto max-h-[250px] lg:max-h-[300px] object-cover mt-8 lg:mt-0"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition duration-300 border-t-4 border-blue-600">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.name}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Button 
                    variant="outline"
                    className="w-full border-blue-600 text-blue-700 hover:bg-blue-50"
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
