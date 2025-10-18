import { Card, CardContent } from "@/components/ui/card";
import MegaMenu from "@/components/MegaMenu";
import Footer from "@/components/Footer";
import { Building2, Target, Eye, Users, Award, TrendingUp } from "lucide-react";

export default function Company() {
  const companyValues = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To provide comprehensive, reliable, and innovative business solutions that empower entrepreneurs and businesses to achieve their goals efficiently."
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "To be the leading business solutions platform, recognized for excellence, innovation, and commitment to customer success across all service domains."
    },
    {
      icon: Users,
      title: "Our Team",
      description: "A dedicated team of professionals with expertise in legal, financial, IT, and e-commerce domains, committed to delivering exceptional service."
    },
    {
      icon: Award,
      title: "Our Commitment",
      description: "We are committed to maintaining the highest standards of quality, transparency, and professionalism in all our business operations."
    }
  ];

  const statistics = [
    { number: "500+", label: "Happy Clients" },
    { number: "1000+", label: "Projects Completed" },
    { number: "50+", label: "Expert Team Members" },
    { number: "10+", label: "Years of Experience" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <MegaMenu />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <Building2 className="h-20 w-20 mx-auto mb-6 animate-pulse" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6" data-testid="text-company-heading">
            About Lambana Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Your trusted partner for comprehensive business solutions across government services, finance, legal, IT, and e-commerce.
          </p>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Who We Are
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Lambana Solutions is a comprehensive business solutions platform offering a wide range of services from government registrations to e-commerce solutions. We specialize in making business operations seamless, efficient, and compliant.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {companyValues.map((value, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-blue-400"
                data-testid={`card-${value.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl group-hover:scale-110 transition-transform">
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <div 
                key={index} 
                className="text-center"
                data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="flex items-center justify-center mb-3">
                  <TrendingUp className="h-8 w-8 mr-2" />
                  <div className="text-4xl md:text-5xl font-bold">{stat.number}</div>
                </div>
                <div className="text-lg md:text-xl opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A comprehensive suite of business solutions designed to meet all your organizational needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Government & Citizen Services",
                description: "Complete business registration, DSC services, and citizen support solutions.",
                features: ["Company Registration", "Digital Signatures", "CSC Services"]
              },
              {
                title: "Financial & Legal Services",
                description: "Tax compliance, legal documentation, and financial advisory services.",
                features: ["Tax & Compliance", "Legal Agreements", "Business Finance"]
              },
              {
                title: "IT & BPO Solutions",
                description: "Cutting-edge technology services and business process outsourcing.",
                features: ["Web Development", "Mobile Apps", "BPO Services"]
              },
              {
                title: "E-commerce Platform",
                description: "Quality agricultural products and premium textile solutions.",
                features: ["Agri Products", "Textiles", "Online Marketplace"]
              },
              {
                title: "Import & Export",
                description: "Global trade facilitation with complete import-export support.",
                features: ["Import Services", "Export Solutions", "Trade Documentation"]
              },
              {
                title: "Advisory & Consultation",
                description: "Expert business guidance and strategic planning services.",
                features: ["Business Planning", "Financial Advisory", "Startup Consultation"]
              }
            ].map((offering, index) => (
              <Card 
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                data-testid={`offering-${offering.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {offering.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {offering.description}
                  </p>
                  <ul className="space-y-2">
                    {offering.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center text-sm text-gray-700">
                        <span className="text-blue-600 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Lambana Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Team",
                description: "Highly qualified professionals with years of industry experience"
              },
              {
                title: "Quality Service",
                description: "Commitment to excellence in every project we undertake"
              },
              {
                title: "Timely Delivery",
                description: "On-time completion with attention to detail and accuracy"
              },
              {
                title: "Competitive Pricing",
                description: "Affordable solutions without compromising on quality"
              },
              {
                title: "Customer Support",
                description: "24/7 dedicated support for all your business needs"
              },
              {
                title: "Compliance Focused",
                description: "Ensuring all services meet regulatory requirements"
              }
            ].map((reason, index) => (
              <div 
                key={index} 
                className="text-center p-6 rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 hover:shadow-lg transition-shadow"
                data-testid={`reason-${reason.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-600">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
