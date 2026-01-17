import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import taxImage from "@assets/generated_images/professional_tax_and_compliance_consulting.png";

export default function TaxCompliance() {
  const services = [
    { name: "GST Registration & Filing", description: "Complete GST registration, monthly/quarterly return filing (GSTR-1, 3B, 9), and reconciliation." },
    { name: "Income Tax Filing", description: "Personal and business income tax returns (ITR) filing services." },
    { name: "TDS Compliance", description: "Quarterly TDS return filing and certificate issuance." },
    { name: "Tax Audit", description: "Comprehensive tax audit services by qualified professionals." },
    { name: "Company Compliance", description: "ROC filings, board meetings, and statutory records maintenance." },
    { name: "Partnership Compliance", description: "Annual filings and regulatory requirements for partnership firms." },
    { name: "FSSAI Registration", description: "Food safety license and registration for food-related business entities." },
    { name: "Business Licensing", description: "Assistance with various industry-specific trade licenses and renewals." }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Tax & Business Compliance Services | Lambana Solutions</title>
        <meta name="description" content="Expert tax filing, TDS compliance, ROC filings, and business licensing services for complete peace of mind." />
      </Helmet>
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-emerald-700 to-emerald-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/services">
            <button className="text-white hover:text-gray-200 mb-4 flex items-center">
              ← Back to Services
            </button>
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Tax & Business Compliance</h1>
              <p className="text-xl md:text-2xl mb-8">
                Ensuring your business stays compliant with latest tax laws and regulatory requirements.
              </p>
              <Button size="lg" className="bg-white text-emerald-700 hover:bg-gray-100">
                Talk to Compliance Expert
              </Button>
            </div>
            <div className="lg:block">
              <img 
                src={taxImage}
                alt="Tax and Compliance Professional"
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
              <Card key={index} className="shadow-lg hover:shadow-xl transition duration-300 border-t-4 border-emerald-600">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.name}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Button 
                    variant="outline"
                    className="w-full border-emerald-600 text-emerald-700 hover:bg-emerald-50"
                  >
                    Get Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-emerald-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Stay Ahead of Deadlines</h2>
          <p className="text-xl text-gray-600 mb-8">
            Our automated compliance tracking ensures you never miss a filing date or pay late penalties.
          </p>
          <Button 
            size="lg" 
            className="bg-emerald-700 text-white hover:bg-emerald-800 px-8 py-4 text-lg font-semibold"
          >
            Start Compliance Check
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
