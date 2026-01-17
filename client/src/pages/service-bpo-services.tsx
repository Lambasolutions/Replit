import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import bpoHeroImage from "@assets/generated_images/professional_bpo_customer_support_team.png";

export default function BPOServices() {
  const services = [
    { name: "Customer Support", description: "24/7 multi-channel customer service solutions" },
    { name: "Data Entry & Processing", description: "Accurate and efficient data management services" },
    { name: "Technical Support", description: "Expert technical assistance for your products" },
    { name: "Back Office Operations", description: "Streamlining your administrative business processes" },
    { name: "Telemarketing", description: "Professional lead generation and sales support" },
    { name: "Process Automation", description: "Increasing efficiency through automated workflows" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>BPO Services - Business Process Outsourcing | Lambana Solutions</title>
        <meta name="description" content="Professional BPO services to streamline your operations. From customer support to back-office management." />
      </Helmet>
      <Header />
      
      <section className="py-12 bg-gradient-to-r from-slate-700 to-slate-500 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/services">
            <button className="text-white hover:text-gray-200 mb-4 flex items-center">
              ← Back to Services
            </button>
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">BPO Services</h1>
              <p className="text-xl md:text-2xl mb-8">
                Reliable business process outsourcing solutions to enhance your operational efficiency.
              </p>
            </div>
            <div className="lg:block">
              <img 
                src={bpoHeroImage}
                alt="BPO Services"
                className="rounded-2xl shadow-2xl border-4 border-white/20 w-full h-auto max-h-[300px] lg:max-h-[400px] object-cover mt-8 lg:mt-0"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition duration-300 border-t-4 border-slate-700">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.name}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Button 
                    variant="outline"
                    className="w-full border-slate-700 text-slate-800 hover:bg-slate-50"
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
