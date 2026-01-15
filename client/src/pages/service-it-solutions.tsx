import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/modern_it_workspace_and_digital_code.png";

export default function ITSolutions() {
  const services = [
    { name: "Software Development", description: "Custom software tailored to your business needs" },
    { name: "Web Design & Development", description: "Professional websites and web applications" },
    { name: "Cloud Solutions", description: "Scalable cloud infrastructure and hosting" },
    { name: "Cybersecurity", description: "Protecting business data and infrastructure" },
    { name: "Digital Transformation", description: "Modernizing business processes with technology" },
    { name: "Mobile App Development", description: "High-performance apps for iOS and Android" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>IT Solutions - Digital Transformation | Lambana Solutions</title>
        <meta name="description" content="Cutting-edge IT services from software development to cloud solutions. We help your business thrive in the digital age." />
      </Helmet>
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-blue-700 to-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/services">
            <button className="text-white hover:text-gray-200 mb-4 flex items-center">
              ← Back to Services
            </button>
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">IT Solutions</h1>
              <p className="text-xl md:text-2xl mb-8">
                Empowering your business with cutting-edge technology and innovative digital solutions.
              </p>
            </div>
            <div className="hidden lg:block">
              <img 
                src={heroImage}
                alt="IT Solutions"
                className="rounded-2xl shadow-2xl border-4 border-white/20"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition duration-300 border-t-4 border-blue-700">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.name}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Button 
                    variant="outline"
                    className="w-full border-blue-700 text-blue-800 hover:bg-blue-50"
                  >
                    Get Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
