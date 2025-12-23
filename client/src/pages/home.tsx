import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import textileImage from "@assets/generated_images/professional_textile_and_handloom_fabrics.png";

export default function Home() {
  useEffect(() => {
    // Smooth scrolling for navigation links
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href')!;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-r from-primary to-secondary text-white">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&h=1080')"
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Trusted Partner for<br />
              <span className="text-accent">Complete Business Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              From government services to premium products, Lambana Solutions provides comprehensive business support across multiple industries with excellence and trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-accent text-white hover:bg-accent/90 px-8 py-3 text-lg"
                onClick={() => scrollToSection('services')}
                data-testid="button-explore-services"
              >
                <i className="fas fa-search mr-2"></i>
                Explore Our Services
              </Button>
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg"
                onClick={() => scrollToSection('contact')}
                data-testid="button-contact-us"
              >
                <i className="fas fa-phone mr-2"></i>
                Contact Us Today
              </Button>
            </div>
          </div>
        </div>
        
        {/* Service Category Quick Links */}
        <div className="relative bg-white/10 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { icon: "fas fa-landmark", text: "Government & Citizen Services" },
                { icon: "fas fa-chart-line", text: "Financial & Legal Solutions" },
                { icon: "fas fa-leaf", text: "Premium Food Products" },
                { icon: "fas fa-tshirt", text: "Textiles" },
                { icon: "fas fa-ship", text: "Import & Export Services" }
              ].map((item, index) => (
                <div key={index} className="text-center p-4 rounded-lg hover:bg-white/20 transition duration-300 cursor-pointer">
                  <i className={`${item.icon} text-2xl mb-2`}></i>
                  <p className="text-sm font-medium">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-neutral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Happy Clients" },
              { number: "12+", label: "Service Categories" },
              { number: "15+", label: "Years Experience" },
              { number: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Comprehensive<br />
              <span className="text-primary">Service Portfolio</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our wide range of professional services designed to meet all your business needs across multiple industries with unmatched quality and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Government & Citizen Services */}
            <Card className="shadow-lg hover:shadow-xl transition duration-300 border border-gray-100">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400" 
                  alt="Government services building" 
                  className="w-full h-48 object-cover rounded-t-xl"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <i className="fas fa-landmark text-2xl text-primary mr-3"></i>
                  <h3 className="text-xl font-bold">Government & Citizen Services</h3>
                </div>
                <p className="text-gray-600 mb-4">Complete business registration, GST services, Digital Signature Certificates, and comprehensive public service solutions.</p>
                <div className="space-y-2 mb-6">
                  {["Company Registration (All Types)", "GST Services", "Digital Signature Certificate (DSC)", "CSC Centre Services"].map((service, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <i className="fas fa-check text-green-500 mr-2"></i>
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full bg-primary text-white hover:bg-primary/90">
                  Learn More <i className="fas fa-arrow-right ml-2"></i>
                </Button>
              </CardContent>
            </Card>

            {/* Financial & Accounting Services */}
            <Card className="shadow-lg hover:shadow-xl transition duration-300 border border-gray-100">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400" 
                  alt="Financial consulting services" 
                  className="w-full h-48 object-cover rounded-t-xl"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <i className="fas fa-chart-line text-2xl text-primary mr-3"></i>
                  <h3 className="text-xl font-bold">Financial & Accounting Services</h3>
                </div>
                <p className="text-gray-600 mb-4">Professional financial solutions including loans, bookkeeping, project reports, and CA-related services.</p>
                <div className="space-y-2 mb-6">
                  {["Loans", "Bookkeeping Services", "Project Report Services", "CA-Related Services"].map((service, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <i className="fas fa-check text-green-500 mr-2"></i>
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full bg-primary text-white hover:bg-primary/90">
                  Learn More <i className="fas fa-arrow-right ml-2"></i>
                </Button>
              </CardContent>
            </Card>

            {/* Legal Services */}
            <Card className="shadow-lg hover:shadow-xl transition duration-300 border border-gray-100">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400" 
                  alt="Legal services consultation" 
                  className="w-full h-48 object-cover rounded-t-xl"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <i className="fas fa-gavel text-2xl text-primary mr-3"></i>
                  <h3 className="text-xl font-bold">Legal Services</h3>
                </div>
                <p className="text-gray-600 mb-4">Complete legal documentation support including digital stamping, rental agreements, and business contracts.</p>
                <div className="space-y-2 mb-6">
                  {["Digital Stamping", "Rental Agreement Drafting", "Legal Documentation", "Business Agreements"].map((service, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <i className="fas fa-check text-green-500 mr-2"></i>
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full bg-primary text-white hover:bg-primary/90">
                  Learn More <i className="fas fa-arrow-right ml-2"></i>
                </Button>
              </CardContent>
            </Card>

            {/* IT & BPO Solutions */}
            <Card className="shadow-lg hover:shadow-xl transition duration-300 border border-gray-100">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400" 
                  alt="IT and BPO solutions office" 
                  className="w-full h-48 object-cover rounded-t-xl"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <i className="fas fa-laptop-code text-2xl text-primary mr-3"></i>
                  <h3 className="text-xl font-bold">IT & BPO Solutions</h3>
                </div>
                <p className="text-gray-600 mb-4">Cutting-edge technology services and business process outsourcing solutions for modern enterprises.</p>
                <div className="space-y-2 mb-6">
                  {["IT Services", "BPO Services", "Digital Transformation", "Process Automation"].map((service, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <i className="fas fa-check text-green-500 mr-2"></i>
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full bg-primary text-white hover:bg-primary/90">
                  Learn More <i className="fas fa-arrow-right ml-2"></i>
                </Button>
              </CardContent>
            </Card>

            {/* Foods & Agri-Products */}
            <Card className="shadow-lg hover:shadow-xl transition duration-300 border border-gray-100">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400" 
                  alt="South Indian food products and spices" 
                  className="w-full h-48 object-cover rounded-t-xl"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <i className="fas fa-leaf text-2xl text-primary mr-3"></i>
                  <h3 className="text-xl font-bold">Foods & Agri-Products</h3>
                </div>
                <p className="text-gray-600 mb-4">Premium South Indian pickles, snacks, ready-to-eat meals, freeze-dried foods, and dairy products with authentic flavors.</p>
                <div className="space-y-2 mb-6">
                  {["South Indian Pickles & Snacks", "Ready-to-Eat Meals", "Freeze-Dried & Dehydrated Foods", "Dairy Products"].map((service, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <i className="fas fa-check text-green-500 mr-2"></i>
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full bg-primary text-white hover:bg-primary/90">
                  Learn More <i className="fas fa-arrow-right ml-2"></i>
                </Button>
              </CardContent>
            </Card>

            {/* E-commerce Solutions */}
            <Card className="shadow-lg hover:shadow-xl transition duration-300 border border-gray-100">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
                  alt="E-commerce and online shopping platform" 
                  className="w-full h-48 object-cover rounded-t-xl"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <i className="fas fa-shopping-cart text-2xl text-primary mr-3"></i>
                  <h3 className="text-xl font-bold">E-commerce Solutions</h3>
                </div>
                <p className="text-gray-600 mb-4">Complete online marketplace solutions for agri products, food items, and textiles with integrated payment systems.</p>
                <div className="space-y-2 mb-6">
                  {["Online Product Catalog", "Payment Gateway Integration", "Order Management", "Customer Support"].map((service, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <i className="fas fa-check text-green-500 mr-2"></i>
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full bg-primary text-white hover:bg-primary/90">
                  Learn More <i className="fas fa-arrow-right ml-2"></i>
                </Button>
              </CardContent>
            </Card>

            {/* Textiles */}
            <Card className="shadow-lg hover:shadow-xl transition duration-300 border border-gray-100">
              <div className="relative">
                <img 
                  src={textileImage}
                  alt="Traditional textile manufacturing and fabrics" 
                  className="w-full h-48 object-cover rounded-t-xl"
                  data-testid="image-textiles"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <i className="fas fa-tshirt text-2xl text-primary mr-3"></i>
                  <h3 className="text-xl font-bold">Textiles</h3>
                </div>
                <p className="text-gray-600 mb-4">Premium Khadi, Handloom, and Machine Loom textiles with traditional craftsmanship and export services.</p>
                <div className="space-y-2 mb-6">
                  {["Khadi Products & Sarees", "Handloom Collections", "Machine Loom Textiles", "Custom Textile Orders"].map((service, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <i className="fas fa-check text-green-500 mr-2"></i>
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full bg-primary text-white hover:bg-primary/90">
                  Learn More <i className="fas fa-arrow-right ml-2"></i>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Import & Export - Full Width */}
          <div className="mt-8">
            <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 lg:p-12">
                  <div className="flex items-center mb-6">
                    <i className="fas fa-ship text-3xl mr-4"></i>
                    <h3 className="text-2xl font-bold">Import & Export Services</h3>
                  </div>
                  <p className="text-lg mb-6 opacity-90">Global trade solutions including import services, export facilitation, and international product sourcing.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                    {[
                      { icon: "fas fa-download", text: "Import Services" },
                      { icon: "fas fa-upload", text: "Export Services" },
                      { icon: "fas fa-search", text: "Product Sourcing" }
                    ].map((item, index) => (
                      <div key={index} className="text-center">
                        <i className={`${item.icon} text-2xl mb-2`}></i>
                        <p className="font-medium">{item.text}</p>
                      </div>
                    ))}
                  </div>
                  <Button className="bg-accent text-white hover:bg-accent/90 px-8 py-3 font-semibold">
                    Learn More <i className="fas fa-arrow-right ml-2"></i>
                  </Button>
                </div>
                <div className="hidden lg:block">
                  <img 
                    src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600" 
                    alt="International shipping and global trade" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">Contact us today to discuss your specific requirements and discover how our comprehensive services can help your business grow and succeed.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent text-white hover:bg-accent/90 px-8 py-4 text-lg font-semibold">
              <i className="fas fa-calendar mr-2"></i>
              Schedule Consultation
            </Button>
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              <i className="fas fa-download mr-2"></i>
              Download Brochure
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-neutral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                About<br />
                <span className="text-primary">Lambana Solutions</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Your trusted partner for comprehensive business solutions across multiple industries. We combine expertise, innovation, and dedication to deliver excellence in every service we provide.
              </p>
              
              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h3>
                  <p className="text-gray-600">To provide comprehensive, reliable, and innovative business solutions that empower our clients to achieve their goals across diverse industries.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Our Values</h3>
                  <p className="text-gray-600">Integrity, excellence, customer-centricity, and innovation drive everything we do. We believe in building lasting relationships through trust and quality.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Our Excellence</h3>
                  <p className="text-gray-600">With over 15 years of experience, we have established ourselves as a trusted partner for businesses seeking quality and reliability.</p>
                </div>
              </div>
              
              <Button className="bg-primary text-white hover:bg-primary/90 px-8 py-3 font-semibold">
                Learn More About Us <i className="fas fa-arrow-right ml-2"></i>
              </Button>
            </div>
            
            <div className="space-y-6">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=500" 
                alt="Professional business team meeting" 
                className="w-full rounded-xl shadow-lg"
              />
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: "500+", label: "Satisfied Clients" },
                  { number: "10+", label: "Service Categories" },
                  { number: "15+", label: "Years of Experience" },
                  { number: "99%", label: "Client Satisfaction" }
                ].map((stat, index) => (
                  <Card key={index} className="p-6 text-center shadow-lg">
                    <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
          
          {/* Story Section */}
          <Card className="mt-16 shadow-lg p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h3>
            <p className="text-gray-600 mb-6">
              Founded with a vision to simplify business operations, Lambana Solutions has grown from a small startup to a comprehensive service provider spanning multiple industries. Our journey began with government services and has evolved to include financial solutions, legal services, premium food products, handloom textiles, and international trade.
            </p>
            <p className="text-gray-600 mb-8">
              What sets us apart is our commitment to understanding each client's unique needs and providing tailored solutions that drive real results. From small businesses to large enterprises, we've helped hundreds of clients achieve their objectives with our expertise and dedication.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {[
                "One-stop solution for all business needs",
                "Expert team with industry experience", 
                "Customized solutions for every client",
                "24/7 customer support availability",
                "Competitive pricing with transparent processes",
                "Quality assurance and timely delivery"
              ].map((feature, index) => (
                <div key={index} className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 text-xl mr-3"></i>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Ready to Partner With Us?</h4>
              <p className="text-gray-600 mb-6">Join hundreds of satisfied clients who trust Lambana Solutions for their business needs. Let's discuss how we can help your business thrive.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-primary text-white hover:bg-primary/90 px-8 py-3 font-semibold">
                  Get Started Today
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 font-semibold">
                  Contact Our Team
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Payment Options Section */}
      <section id="payment" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Secure Payment Options</h2>
            <p className="text-xl text-gray-600 mb-4">Choose from our trusted payment gateways for secure and fast transactions</p>
            <p className="text-gray-500">For assistance: <span className="font-semibold">+91 99860 00219</span> | <span className="font-semibold">d.phani.kumar@lambanasolutions.com</span></p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Stripe Payment */}
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <i className="fas fa-credit-card text-3xl text-blue-600 mr-4"></i>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Stripe</h3>
                    <p className="text-gray-600">Credit/Debit Cards, Digital Wallets</p>
                  </div>
                </div>
                <div className="mb-6">
                  {[
                    { icon: "fas fa-shield-alt", text: "Bank-level security" },
                    { icon: "fas fa-bolt", text: "Instant payment processing" },
                    { icon: "fas fa-globe", text: "International payments supported" }
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600 mb-2">
                      <i className={`${feature.icon} text-green-500 mr-2`}></i>
                      <span>{feature.text}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
                  Setup Stripe <i className="fas fa-arrow-right ml-2"></i>
                </Button>
              </CardContent>
            </Card>

            {/* PayPal Payment */}
            <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <i className="fab fa-paypal text-3xl text-blue-700 mr-4"></i>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">PayPal</h3>
                    <p className="text-gray-600">PayPal Account, Credit/Debit Cards</p>
                  </div>
                </div>
                <div className="mb-6">
                  {[
                    { icon: "fas fa-user-shield", text: "Buyer protection guarantee" },
                    { icon: "fas fa-users", text: "Trusted by millions worldwide" },
                    { icon: "fas fa-mobile-alt", text: "Mobile-friendly checkout" }
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600 mb-2">
                      <i className={`${feature.icon} text-green-500 mr-2`}></i>
                      <span>{feature.text}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full bg-blue-700 text-white hover:bg-blue-800">
                  Setup PayPal <i className="fas fa-arrow-right ml-2"></i>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Payment Security Features */}
          <div className="bg-gray-50 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Payment Security Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: "fas fa-lock", color: "text-green-600", title: "SSL Encryption", desc: "256-bit SSL encryption for all transactions" },
                { icon: "fas fa-certificate", color: "text-blue-600", title: "PCI Compliant", desc: "Industry standard security protocols" },
                { icon: "fas fa-tachometer-alt", color: "text-purple-600", title: "Instant Processing", desc: "Fast and reliable payment processing" }
              ].map((feature, index) => (
                <div key={index} className="text-center">
                  <i className={`${feature.icon} text-3xl ${feature.color} mb-4`}></i>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Accepted Payment Methods */}
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-6">We Accept</h3>
            <div className="flex flex-wrap justify-center items-center gap-6 opacity-70">
              <Badge variant="outline" className="text-blue-700 border-blue-200">
                <i className="fab fa-cc-visa text-2xl mr-2"></i>Visa
              </Badge>
              <Badge variant="outline" className="text-red-600 border-red-200">
                <i className="fab fa-cc-mastercard text-2xl mr-2"></i>Mastercard
              </Badge>
              <Badge variant="outline" className="text-green-600 border-green-200">
                <i className="fab fa-cc-amex text-2xl mr-2"></i>American Express
              </Badge>
              <Badge variant="outline" className="text-purple-600 border-purple-200">
                <i className="fas fa-mobile-alt text-2xl mr-2"></i>UPI
              </Badge>
              <Badge variant="outline" className="text-orange-600 border-orange-200">
                NetBanking
              </Badge>
              <Badge variant="outline" className="text-blue-800 border-blue-200">
                Digital Wallets
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-neutral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600">Ready to transform your business? Contact us today for a consultation.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  {[
                    { 
                      icon: "fas fa-map-marker-alt", 
                      title: "Address", 
                      content: "123 Business District\nChennai, Tamil Nadu 600001\nIndia" 
                    },
                    { 
                      icon: "fas fa-envelope", 
                      title: "Email", 
                      content: "info@lambanasolutions.com" 
                    },
                    { 
                      icon: "fas fa-clock", 
                      title: "Business Hours", 
                      content: "Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 9:00 AM - 2:00 PM\nSunday: Closed" 
                    }
                  ].map((info, index) => (
                    <div key={index} className="flex items-start">
                      <i className={`${info.icon} text-primary text-xl mt-1 mr-4`}></i>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                        <p className="text-gray-600 whitespace-pre-line">{info.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Why Choose Lambana Solutions?</h4>
                  <p className="text-gray-600 mb-4">We're committed to delivering excellence in every service we provide.</p>
                  <div className="space-y-3 mb-6">
                    {[
                      "Expert team with years of experience",
                      "Comprehensive service portfolio",
                      "Competitive pricing",
                      "Quick turnaround times", 
                      "24/7 customer support"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <i className="fas fa-check text-green-500 mr-3"></i>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* WhatsApp Chat Button */}
                  <div className="border-t pt-6">
                    <h5 className="font-semibold text-gray-900 mb-3">Need Immediate Help?</h5>
                    <a 
                      href="https://wa.me/+919986000219?text=Hello!%20I%20have%20a%20question%20about%20your%20services."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
                    >
                      <i className="fab fa-whatsapp text-xl mr-2"></i>
                      Chat on WhatsApp
                    </a>
                    <p className="text-sm text-gray-500 mt-2">Get instant responses to your queries</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
