import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Services() {
  const serviceCategories = [
    {
      title: "Company Registration",
      icon: "fas fa-building",
      color: "bg-blue-500",
      services: [
        { name: "Proprietorship", description: "Simple single-owner business structure" },
        { name: "One Person Company (OPC)", description: "Corporate structure for single entrepreneurs" },
        { name: "Partnership Firm", description: "Multiple partner business registration" },
        { name: "Limited Liability Partnership (LLP)", description: "Flexible partnership with limited liability" },
        { name: "Private Limited Company", description: "Most popular corporate structure" },
        { name: "Public Limited Company", description: "Large-scale corporate structure" },
        { name: "NGO / Trust / Society", description: "Non-profit organization registration" }
      ]
    },
    {
      title: "Digital Signature Certificate (DSC)",
      icon: "fas fa-certificate",
      color: "bg-green-500",
      services: [
        { name: "Class 2 DSC", description: "For individual use and filing returns" },
        { name: "Class 3 DSC", description: "For organizations and e-tenders" },
        { name: "DGFT DSC", description: "For export-import documentation" },
        { name: "DSC Renewal", description: "Renewal of existing certificates" }
      ]
    },
    {
      title: "CSC Services",
      icon: "fas fa-users",
      color: "bg-purple-500",
      services: [
        { name: "Aadhaar Services", description: "Aadhaar enrollment and updates" },
        { name: "PAN Card Services", description: "New PAN and corrections" },
        { name: "Passport Services", description: "Application and renewal assistance" },
        { name: "Banking Services", description: "Account opening and banking support" }
      ]
    },
    {
      title: "Financial Services",
      icon: "fas fa-chart-line",
      color: "bg-yellow-500",
      services: [
        { name: "Personal Loan", description: "Quick personal financing solutions" },
        { name: "Business Loan", description: "Capital for business growth" },
        { name: "Loan Against Property", description: "Secure loan against real estate" },
        { name: "Project Finance", description: "Large project funding assistance" }
      ]
    },
    {
      title: "Legal Services",
      icon: "fas fa-gavel",
      color: "bg-red-500",
      services: [
        { name: "E-Stamping", description: "Non-judicial stamp papers online" },
        { name: "Rental Agreement", description: "Comprehensive rental documentation" },
        { name: "Business Agreement", description: "Commercial contract preparation" },
        { name: "Legal Documentation", description: "Various legal document services" }
      ]
    },
    {
      title: "Tax & Business Compliance",
      icon: "fas fa-file-invoice-dollar",
      color: "bg-emerald-600",
      services: [
        { name: "Income Tax Filing", description: "Personal and business ITR filing" },
        { name: "TDS Returns", description: "Quarterly compliance and certificates" },
        { name: "ROC Filings", description: "Statutory compliance for companies" },
        { name: "FSSAI Registration", description: "Food safety license for business" }
      ]
    },
    {
      title: "E-commerce Solutions",
      icon: "fas fa-shopping-cart",
      color: "bg-indigo-500",
      services: [
        { name: "Agri Products", description: "Fresh agricultural produce online" },
        { name: "South Indian Foods", description: "Authentic regional cuisine" },
        { name: "Textiles", description: "Khadi, handloom, and machine loom products" },
        { name: "Export Services", description: "International trade facilitation" }
      ]
    },
    {
      title: "IT Solutions",
      icon: "fas fa-laptop-code",
      color: "bg-blue-600",
      services: [
        { name: "Software Development", description: "Custom software tailored to your business needs" },
        { name: "Web Design & Development", description: "Professional websites and web applications" },
        { name: "Cloud Solutions", description: "Scalable cloud infrastructure and hosting" },
        { name: "Cybersecurity", description: "Protecting business data and infrastructure" }
      ]
    },
    {
      title: "BPO Services",
      icon: "fas fa-headset",
      color: "bg-slate-600",
      services: [
        { name: "Customer Support", description: "24/7 multi-channel customer service solutions" },
        { name: "Data Entry & Processing", description: "Accurate and efficient data management services" },
        { name: "Back Office Operations", description: "Streamlining administrative processes" },
        { name: "Process Automation", description: "Increasing efficiency through automated workflows" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Comprehensive business solutions across multiple industries with expertise and reliability.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {serviceCategories.map((category, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className={`${category.color} text-white p-3 rounded-lg mr-4`}>
                      <i className={`${category.icon} text-2xl`}></i>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    {category.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-start justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition duration-300">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-1">{service.name}</h3>
                          <p className="text-sm text-gray-600">{service.description}</p>
                        </div>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="ml-4 text-primary border-primary hover:bg-primary hover:text-white"
                          data-testid={`button-service-${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          Learn More
                        </Button>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className="w-full bg-primary text-white hover:bg-primary/90"
                    data-testid={`button-category-${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    View All {category.title} Services
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-neutral">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Need a Custom Solution?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Don't see exactly what you're looking for? We offer customized business solutions tailored to your specific needs.
          </p>
          <Button 
            size="lg" 
            className="bg-primary text-white hover:bg-primary/90 px-8 py-4 text-lg font-semibold"
            data-testid="button-custom-consultation"
          >
            <i className="fas fa-phone mr-2"></i>
            Schedule Consultation
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}