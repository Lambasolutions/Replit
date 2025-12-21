import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";

export default function Financial() {
  const services = [
    { 
      name: "Personal Loan", 
      description: "Quick personal financing solutions",
      icon: "fas fa-user",
      features: ["Instant approval", "Low interest rates", "Flexible repayment"]
    },
    { 
      name: "Business Loan", 
      description: "Capital for business growth",
      icon: "fas fa-chart-line",
      features: ["Higher amounts", "Business friendly", "Quick disbursement"]
    },
    { 
      name: "Loan Against Property", 
      description: "Secure loan against real estate",
      icon: "fas fa-home",
      features: ["Low rates", "High amount", "Long tenure"]
    },
    { 
      name: "Project Finance", 
      description: "Large project funding assistance",
      icon: "fas fa-building",
      features: ["Large amounts", "Structured terms", "Expert guidance"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Enhanced Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-amber-600 to-amber-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=600" 
            alt="Finance" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/services">
            <button className="text-white hover:text-amber-200 mb-6 flex items-center transition">
              ← Back to Services
            </button>
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Financial Services</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl leading-relaxed">
            Get affordable financing solutions tailored to your business and personal needs. Fast approvals, competitive rates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-white text-amber-600 hover:bg-amber-50 px-8 py-3 text-lg font-semibold"
            >
              Apply Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/20 px-8 py-3 text-lg font-semibold"
            >
              Check Eligibility
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: "fas fa-bolt", title: "Fast Approval", desc: "Get approved in 24-48 hours" },
              { icon: "fas fa-percent", title: "Best Rates", desc: "Competitive interest rates" },
              { icon: "fas fa-file-contract", title: "Easy Process", desc: "Minimal documentation" },
              { icon: "fas fa-handshake", title: "Expert Support", desc: "Dedicated loan officer" }
            ].map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm">
                <i className={`${benefit.icon} text-4xl text-amber-600 mb-4`}></i>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Loan Options</h2>
            <p className="text-xl text-gray-600">Choose the financing solution that fits your needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="shadow-lg hover:shadow-2xl transition duration-300 border-0 overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-amber-600 to-amber-800"></div>
                <CardContent className="p-8">
                  <div className="mb-6">
                    <i className={`${service.icon} text-5xl text-amber-600`}></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.name}</h3>
                  <p className="text-gray-600 mb-6 text-lg">{service.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-700">
                        <i className="fas fa-check text-amber-600 mr-3"></i>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    size="lg"
                    className="w-full bg-amber-600 text-white hover:bg-amber-700 transition duration-300"
                    data-testid={`button-service-${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    Apply Now →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">Quick Comparison</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg">
              <thead className="bg-amber-600 text-white">
                <tr>
                  <th className="px-8 py-4 text-left">Loan Type</th>
                  <th className="px-8 py-4 text-left">Amount</th>
                  <th className="px-8 py-4 text-left">Interest Rate</th>
                  <th className="px-8 py-4 text-left">Tenure</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: "Personal Loan", amount: "₹1-50 Lakhs", rate: "8-12%", tenure: "1-7 years" },
                  { type: "Business Loan", amount: "₹5-5 Crores", rate: "6-10%", tenure: "2-10 years" },
                  { type: "Property Loan", amount: "₹10-1 Crore", rate: "5-9%", tenure: "5-15 years" },
                  { type: "Project Finance", amount: "₹1 Crore+", rate: "Custom", tenure: "Custom" }
                ].map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-amber-50"}>
                    <td className="px-8 py-4 font-semibold text-gray-900">{row.type}</td>
                    <td className="px-8 py-4 text-gray-600">{row.amount}</td>
                    <td className="px-8 py-4 text-gray-600">{row.rate}</td>
                    <td className="px-8 py-4 text-gray-600">{row.tenure}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Grow Your Business?</h2>
          <p className="text-xl mb-10 opacity-90">Get the capital you need with flexible terms and competitive rates. Quick approval, hassle-free process.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-amber-600 hover:bg-amber-50 px-8 py-4 text-lg font-semibold"
            >
              Check Eligibility
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/20 px-8 py-4 text-lg font-semibold"
            >
              <i className="fas fa-phone mr-2"></i>
              Speak to Expert
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
