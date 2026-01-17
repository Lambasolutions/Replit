import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/community_service_center_and_public_services_concept.png";

export default function CSC() {
  const services = [
    { name: "Aadhaar Services", description: "Aadhaar enrollment and updates" },
    { name: "PAN Card Services", description: "New PAN and corrections" },
    { name: "Passport Services", description: "Application and renewal assistance" },
    { name: "Banking Services", description: "Account opening and banking support" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-400 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/services">
            <button className="text-white hover:text-gray-200 mb-4 flex items-center">
              ← Back to Services
            </button>
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">CSC Services</h1>
              <p className="text-xl md:text-2xl mb-8">
                Government-approved services for citizen documentation and banking needs.
              </p>
            </div>
            <div className="lg:block">
              <img 
                src={heroImage}
                alt="CSC Services"
                className="rounded-2xl shadow-2xl border-4 border-white/20 w-full h-auto max-h-[300px] lg:max-h-none object-cover mt-8 lg:mt-0"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition duration-300 border-t-4 border-purple-600">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.name}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Button 
                    variant="outline"
                    className="w-full border-purple-600 text-purple-700 hover:bg-purple-50"
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
            Visit our center for government services assistance.
          </p>
          <Button 
            size="lg" 
            className="bg-purple-600 text-white hover:bg-purple-700 px-8 py-4 text-lg font-semibold"
            data-testid="button-contact-expert"
          >
            Visit Center
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
