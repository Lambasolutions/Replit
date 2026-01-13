import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/digital_security_and_electronic_signature_concepts.png";

export default function DSC() {
  const services = [
    { name: "Class 2 DSC", description: "For individual use and filing returns" },
    { name: "Class 3 DSC", description: "For organizations and e-tenders" },
    { name: "DGFT DSC", description: "For export-import documentation" },
    { name: "DSC Renewal", description: "Renewal of existing certificates" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-400 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/services">
            <button className="text-white hover:text-gray-200 mb-4 flex items-center">
              ← Back to Services
            </button>
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Digital Signature Certificate (DSC)</h1>
              <p className="text-xl md:text-2xl mb-8">
                Secure digital signatures for online transactions and official documentation.
              </p>
            </div>
            <div className="hidden lg:block">
              <img 
                src={heroImage}
                alt="Digital Signature Certificate"
                className="rounded-2xl shadow-2xl border-4 border-white/20"
              />
            </div>
          </div>
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
                    className="w-full bg-green-600 text-white hover:bg-green-700"
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
            Contact our experts today to get your Digital Signature Certificate.
          </p>
          <Button 
            size="lg" 
            className="bg-green-600 text-white hover:bg-green-700 px-8 py-4 text-lg font-semibold"
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
