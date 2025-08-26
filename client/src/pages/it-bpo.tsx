import MegaMenu from "@/components/MegaMenu";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ITBPOSolutions() {
  const itServices = [
    {
      title: "Web Development",
      description: "Custom websites and web applications",
      features: ["Responsive Design", "E-commerce Solutions", "CMS Integration", "SEO Optimization"],
      technologies: ["React", "Node.js", "PHP", "WordPress"],
      price: "Starting ₹15,000",
      icon: "fas fa-code",
      color: "bg-blue-500"
    },
    {
      title: "Mobile App Development", 
      description: "Native and cross-platform mobile applications",
      features: ["iOS & Android", "Cross-platform", "UI/UX Design", "App Store Deployment"],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
      price: "Starting ₹25,000",
      icon: "fas fa-mobile-alt",
      color: "bg-green-500"
    },
    {
      title: "Cloud Solutions",
      description: "Cloud infrastructure and migration services",
      features: ["Cloud Migration", "Server Management", "Data Backup", "Security Solutions"],
      technologies: ["AWS", "Azure", "Google Cloud", "Docker"],
      price: "Starting ₹10,000/month",
      icon: "fas fa-cloud",
      color: "bg-purple-500"
    },
    {
      title: "Digital Marketing",
      description: "Complete digital marketing solutions",
      features: ["SEO/SEM", "Social Media", "Content Marketing", "Analytics"],
      technologies: ["Google Ads", "Facebook Ads", "Analytics", "SEMrush"],
      price: "Starting ₹8,000/month", 
      icon: "fas fa-chart-bar",
      color: "bg-orange-500"
    }
  ];

  const bpoServices = [
    {
      title: "Customer Support",
      description: "24/7 multilingual customer support services",
      features: ["Phone Support", "Email Support", "Live Chat", "Ticket Management"],
      languages: ["English", "Hindi", "Tamil", "Telugu"],
      price: "Starting ₹12,000/month",
      icon: "fas fa-headset",
      color: "bg-indigo-500"
    },
    {
      title: "Data Entry Services",
      description: "Accurate and efficient data processing",
      features: ["Data Mining", "Data Conversion", "Document Processing", "Quality Assurance"],
      accuracy: "99.95% Accuracy",
      price: "Starting ₹5,000/month",
      icon: "fas fa-keyboard",
      color: "bg-teal-500"
    },
    {
      title: "Content Writing",
      description: "Professional content creation services", 
      features: ["Blog Writing", "Website Content", "Technical Writing", "SEO Content"],
      delivery: "24-48 hours",
      price: "Starting ₹2/word",
      icon: "fas fa-pen",
      color: "bg-red-500"
    },
    {
      title: "Virtual Assistance",
      description: "Remote administrative and business support",
      features: ["Email Management", "Scheduling", "Research", "Lead Generation"],
      availability: "Business Hours",
      price: "Starting ₹15,000/month",
      icon: "fas fa-user-cog", 
      color: "bg-yellow-500"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <MegaMenu />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white opacity-10 rounded-full"></div>
          <div className="absolute top-32 right-20 w-32 h-32 bg-white opacity-5 rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-white opacity-10 rounded-full"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="flex justify-center space-x-4 mb-6">
              <div className="bg-white bg-opacity-20 p-4 rounded-full">
                <i className="fas fa-laptop-code text-4xl"></i>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded-full">
                <i className="fas fa-headset text-4xl"></i>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              IT & BPO Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
              Transform your business with cutting-edge technology solutions and efficient business process outsourcing services.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {[
              { number: "500+", label: "Projects Delivered" },
              { number: "50+", label: "Expert Developers" },
              { number: "24/7", label: "Support Available" },
              { number: "99%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold mb-1">{stat.number}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold shadow-xl"
              data-testid="button-get-quote"
            >
              Get Free Quote
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold"
              data-testid="button-view-portfolio"
            >
              View Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* IT Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">IT Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions to drive your business forward with modern, scalable, and secure applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {itServices.map((service, index) => (
              <Card key={index} className="shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 overflow-hidden">
                <CardContent className="p-0">
                  <div className={`${service.color} text-white p-6`}>
                    <div className="flex items-center mb-4">
                      <div className="bg-white bg-opacity-20 p-3 rounded-full mr-4">
                        <i className={`${service.icon} text-2xl`}></i>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{service.title}</h3>
                        <Badge variant="secondary" className="bg-white bg-opacity-20 text-white border-0 mt-1">
                          {service.price}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-lg opacity-90">{service.description}</p>
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, fIndex) => (
                          <div key={fIndex} className="flex items-center text-sm">
                            <i className="fas fa-check text-green-500 mr-2"></i>
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, tIndex) => (
                          <Badge key={tIndex} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button 
                      className={`w-full ${service.color} text-white hover:opacity-90`}
                      data-testid={`button-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      Get Started
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* BPO Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">BPO Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Streamline your operations with our reliable business process outsourcing solutions, enabling you to focus on core business activities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {bpoServices.map((service, index) => (
              <Card key={index} className="shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 overflow-hidden">
                <CardContent className="p-0">
                  <div className={`${service.color} text-white p-6`}>
                    <div className="flex items-center mb-4">
                      <div className="bg-white bg-opacity-20 p-3 rounded-full mr-4">
                        <i className={`${service.icon} text-2xl`}></i>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{service.title}</h3>
                        <Badge variant="secondary" className="bg-white bg-opacity-20 text-white border-0 mt-1">
                          {service.price}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-lg opacity-90">{service.description}</p>
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Service Features:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {service.features.map((feature, fIndex) => (
                          <div key={fIndex} className="flex items-center text-sm">
                            <i className="fas fa-check text-green-500 mr-2"></i>
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <div className="grid grid-cols-1 gap-3">
                        {service.languages && (
                          <div className="text-center bg-blue-50 p-3 rounded-lg">
                            <span className="text-sm font-semibold text-blue-800">Languages: {service.languages.join(", ")}</span>
                          </div>
                        )}
                        {service.accuracy && (
                          <div className="text-center bg-green-50 p-3 rounded-lg">
                            <span className="text-sm font-semibold text-green-800">{service.accuracy}</span>
                          </div>
                        )}
                        {service.delivery && (
                          <div className="text-center bg-purple-50 p-3 rounded-lg">
                            <span className="text-sm font-semibold text-purple-800">Delivery: {service.delivery}</span>
                          </div>
                        )}
                        {service.availability && (
                          <div className="text-center bg-orange-50 p-3 rounded-lg">
                            <span className="text-sm font-semibold text-orange-800">{service.availability}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <Button 
                      className={`w-full ${service.color} text-white hover:opacity-90`}
                      data-testid={`button-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      Start Service
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Our IT & BPO Solutions?</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              We combine technical expertise with business understanding to deliver solutions that truly make a difference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "fas fa-rocket",
                title: "Fast Delivery",
                description: "Quick turnaround times without compromising quality"
              },
              {
                icon: "fas fa-shield-alt", 
                title: "Secure & Reliable",
                description: "Enterprise-grade security and 99.9% uptime guarantee"
              },
              {
                icon: "fas fa-users",
                title: "Expert Team",
                description: "Certified professionals with years of industry experience"
              },
              {
                icon: "fas fa-clock",
                title: "24/7 Support",
                description: "Round-the-clock technical support and maintenance"
              },
              {
                icon: "fas fa-chart-line",
                title: "Scalable Solutions",
                description: "Solutions that grow with your business requirements"
              },
              {
                icon: "fas fa-dollar-sign",
                title: "Cost Effective",
                description: "Competitive pricing with transparent cost structure"
              }
            ].map((benefit, index) => (
              <Card key={index} className="bg-white bg-opacity-10 backdrop-blur-sm border-0 text-white">
                <CardContent className="p-8 text-center">
                  <i className={`${benefit.icon} text-4xl mb-4 text-blue-300`}></i>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="opacity-90">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get a free consultation and discover how our IT & BPO solutions can accelerate your growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold"
              data-testid="button-free-consultation"
            >
              <i className="fas fa-phone mr-2"></i>
              Free Consultation
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold"
              data-testid="button-request-proposal"
            >
              <i className="fas fa-file-alt mr-2"></i>
              Request Proposal
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}