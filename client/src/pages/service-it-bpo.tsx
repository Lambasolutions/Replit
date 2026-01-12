import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";

export default function ITBPOSolutions() {
  const services = [
    { name: "IT Services", description: "Software development, web design, and digital solutions" },
    { name: "BPO Services", description: "Business process outsourcing and customer support" },
    { name: "Digital Transformation", description: "Modernizing business processes with technology" },
    { name: "Process Automation", description: "Streamlining operations through automation tools" },
    { name: "Cloud Solutions", description: "Scalable cloud infrastructure and hosting" },
    { name: "Cybersecurity", description: "Protecting business data and infrastructure" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>IT & BPO Solutions - Digital Transformation | Lambana Solutions</title>
        <meta name="description" content="Cutting-edge IT services and BPO solutions. From software development to process automation, we help your business thrive in the digital age." />
      </Helmet>
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-slate-700 to-slate-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/services">
            <button className="text-white hover:text-gray-200 mb-4 flex items-center">
              ← Back to Services
            </button>
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">IT & BPO Solutions</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl">
            Empowering your business with cutting-edge technology and efficient process outsourcing.
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
                    className="w-full bg-slate-700 text-white hover:bg-slate-800"
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready for Digital Transformation?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Consult with our technology experts to streamline your business operations.
          </p>
          <Button 
            size="lg" 
            className="bg-slate-700 text-white hover:bg-slate-800 px-8 py-4 text-lg font-semibold"
          >
            Schedule Consultation
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
