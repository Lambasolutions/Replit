import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";

export default function Financial() {
  const services = [
    { name: "Personal Loan", description: "Quick personal financing solutions" },
    { name: "Business Loan", description: "Capital for business growth" },
    { name: "Loan Against Property", description: "Secure loan against real estate" },
    { name: "Home Loan", description: "Financing for your dream home" },
    { name: "Educational Loan", description: "Funding for higher education and professional courses" },
    { name: "Project Finance", description: "Large project funding assistance" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-yellow-600 to-yellow-400 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/services">
            <button className="text-white hover:text-gray-200 mb-4 flex items-center">
              ← Back to Services
            </button>
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Financial Services</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl">
            Comprehensive financial solutions and lending options for individuals and businesses.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.name}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Button 
                    size="lg"
                    className="w-full bg-yellow-600 text-white hover:bg-yellow-700"
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to Grow?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Talk to our financial experts about the best solution for your needs.
          </p>
          <Button 
            size="lg" 
            className="bg-yellow-600 text-white hover:bg-yellow-700 px-8 py-4 text-lg font-semibold"
            data-testid="button-contact-expert"
          >
            Consult Expert
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
