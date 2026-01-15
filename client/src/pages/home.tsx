import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import textileImage from "@assets/generated_images/professional_textile_and_handloom_fabrics.png";
import importExportImage from "@assets/generated_images/international_shipping_and_global_trade.png";
import bpoImage from "@assets/generated_images/professional_bpo_customer_support_team.png";
import taxImage from "@assets/generated_images/professional_tax_and_compliance_consulting.png";

export default function Home() {
  useEffect(() => {
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
      <Helmet>
        <title>Lambana Solutions - Comprehensive Business Services & Products</title>
        <meta name="description" content="Lambana Solutions offers expert company registration, financial services, legal documentation, premium food products, and e-commerce solutions. He upon whom all depends." />
        <meta property="og:title" content="Lambana Solutions - Your Business Growth Partner" />
        <meta property="og:description" content="Professional services for government compliance, financial growth, and premium product sourcing." />
      </Helmet>
      <Header />
      
      {/* Hero Section */}
      <section id="home" className="relative text-white overflow-hidden min-h-[80vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-10000"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&h=1080')"
          }}
        ></div>
        
        {/* Modern Frosted Glass Overlay - Light & Classy */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block px-4 py-1.5 mb-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-semibold tracking-wider uppercase text-accent animate-fade-in">
              Professional Business Excellence
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight leading-tight">
              <span className="block drop-shadow-2xl">Your Trusted Partner for</span>
              <span className="text-accent drop-shadow-lg relative inline-block">
                Complete Business Solutions
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-accent/50 rounded-full"></span>
              </span>
            </h1>
            <p className="text-xl md:text-3xl mb-12 max-w-4xl mx-auto font-light leading-relaxed text-gray-100 drop-shadow-md">
              From government services to premium products, Lambana Solutions provides comprehensive business support across multiple industries with excellence and trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-accent text-white hover:bg-accent/90 px-10 py-4 text-xl shadow-[0_0_20px_rgba(255,191,0,0.3)] transition-all hover:scale-105 rounded-xl font-bold"
                onClick={() => scrollToSection('services')}
              >
                <i className="fas fa-search mr-3"></i>
                Explore Our Services
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 backdrop-blur-md border-2 border-white text-white hover:bg-white hover:text-primary px-10 py-4 text-xl transition-all hover:scale-105 rounded-xl font-bold"
                onClick={() => scrollToSection('contact')}
              >
                <i className="fas fa-phone mr-3"></i>
                Contact Us Today
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative elements for class */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
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
            <Card className="shadow-lg hover:shadow-xl transition duration-300 border-t-4 border-blue-600">
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
                  {["Company Registration", "GST Services", "Digital Signature (DSC)", "CSC Centre Services"].map((service, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <i className="fas fa-check text-green-500 mr-2"></i>
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
                <Link href="/services/company-registration">
                  <Button className="w-full bg-primary text-white hover:bg-primary/90">
                    Get Quote <i className="fas fa-arrow-right ml-2"></i>
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Financial & Accounting Services */}
            <Card className="shadow-lg hover:shadow-xl transition duration-300 border-t-4 border-yellow-600">
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
                  {["Loans", "Bookkeeping Services", "Project Reports", "CA-Related Services"].map((service, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <i className="fas fa-check text-green-500 mr-2"></i>
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
                <Link href="/services/financial-services">
                  <Button className="w-full bg-primary text-white hover:bg-primary/90">
                    Get Quote <i className="fas fa-arrow-right ml-2"></i>
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Legal Services */}
            <Card className="shadow-lg hover:shadow-xl transition duration-300 border-t-4 border-red-600">
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
                  {["Digital Stamping", "Rental Agreements", "Legal Documentation", "Business Agreements"].map((service, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <i className="fas fa-check text-green-500 mr-2"></i>
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
                <Link href="/services/legal-services">
                  <Button className="w-full bg-primary text-white hover:bg-primary/90">
                    Get Quote <i className="fas fa-arrow-right ml-2"></i>
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* IT Solutions */}
            <Card className="shadow-lg hover:shadow-xl transition duration-300 border-t-4 border-blue-700">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
                  alt="IT solutions office" 
                  className="w-full h-48 object-cover rounded-t-xl"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <i className="fas fa-laptop-code text-2xl text-primary mr-3"></i>
                  <h3 className="text-xl font-bold">IT Solutions</h3>
                </div>
                <p className="text-gray-600 mb-4">Cutting-edge technology services and digital transformation for modern enterprises.</p>
                <div className="space-y-2 mb-6">
                  {["Software Development", "Cloud Solutions", "Cybersecurity", "Mobile Development"].map((service, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <i className="fas fa-check text-green-500 mr-2"></i>
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
                <Link href="/services/it-solutions">
                  <Button className="w-full bg-primary text-white hover:bg-primary/90">
                    Get Quote <i className="fas fa-arrow-right ml-2"></i>
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* BPO Services */}
            <Card className="shadow-lg hover:shadow-xl transition duration-300 border-t-4 border-slate-700">
              <div className="relative">
                <img 
                  src={bpoImage} 
                  alt="BPO services customer support team" 
                  className="w-full h-48 object-cover rounded-t-xl"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <i className="fas fa-headset text-2xl text-primary mr-3"></i>
                  <h3 className="text-xl font-bold">BPO Services</h3>
                </div>
                <p className="text-gray-600 mb-4">Efficient business process outsourcing and customer support solutions.</p>
                <div className="space-y-2 mb-6">
                  {["Customer Support", "Data Processing", "Back Office Ops", "Process Automation"].map((service, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <i className="fas fa-check text-green-500 mr-2"></i>
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
                <Link href="/services/bpo-services">
                  <Button className="w-full bg-primary text-white hover:bg-primary/90">
                    Get Quote <i className="fas fa-arrow-right ml-2"></i>
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Foods & Agri-Products */}
            <Card className="shadow-lg hover:shadow-xl transition duration-300 border-t-4 border-green-600">
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
                  {["Pickles & Snacks", "Ready-to-Eat Meals", "Freeze-Dried Foods", "Dairy Products"].map((service, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <i className="fas fa-check text-green-500 mr-2"></i>
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
                <Link href="/services/ecommerce-solutions">
                  <Button className="w-full bg-primary text-white hover:bg-primary/90">
                    Get Quote <i className="fas fa-arrow-right ml-2"></i>
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* E-commerce Solutions */}
            <Card className="shadow-lg hover:shadow-xl transition duration-300 border-t-4 border-indigo-600">
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
                  {["Online Catalog", "Payment Gateways", "Order Management", "Customer Support"].map((service, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <i className="fas fa-check text-green-500 mr-2"></i>
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
                <Link href="/services/ecommerce-solutions">
                  <Button className="w-full bg-primary text-white hover:bg-primary/90">
                    Get Quote <i className="fas fa-arrow-right ml-2"></i>
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Tax & Compliance */}
            <Card className="shadow-lg hover:shadow-xl transition duration-300 border-t-4 border-emerald-600">
              <div className="relative">
                <img 
                  src={taxImage}
                  alt="Tax and compliance services professional" 
                  className="w-full h-48 object-cover rounded-t-xl"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <i className="fas fa-file-invoice-dollar text-2xl text-primary mr-3"></i>
                  <h3 className="text-xl font-bold">Tax & Business Compliance</h3>
                </div>
                <p className="text-gray-600 mb-4">Complete tax and regulatory compliance solutions for businesses and individuals.</p>
                <div className="space-y-2 mb-6">
                  {["GST Services", "Income Tax Filing", "TDS Returns", "FSSAI Registration"].map((service, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <i className="fas fa-check text-green-500 mr-2"></i>
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
                <Link href="/services/tax-compliance">
                  <Button className="w-full bg-primary text-white hover:bg-primary/90">
                    Get Quote <i className="fas fa-arrow-right ml-2"></i>
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Textiles */}
            <Card className="shadow-lg hover:shadow-xl transition duration-300 border-t-4 border-indigo-600">
              <div className="relative">
                <img 
                  src={textileImage}
                  alt="Traditional textile manufacturing and fabrics" 
                  className="w-full h-48 object-cover rounded-t-xl"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <i className="fas fa-tshirt text-2xl text-primary mr-3"></i>
                  <h3 className="text-xl font-bold">Textiles</h3>
                </div>
                <p className="text-gray-600 mb-4">Premium Khadi, Handloom, and Machine Loom textiles with traditional craftsmanship and export services.</p>
                <div className="space-y-2 mb-6">
                  {["Khadi Products", "Handloom Collections", "Machine Loom", "Custom Orders"].map((service, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <i className="fas fa-check text-green-500 mr-2"></i>
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
                <Link href="/services/ecommerce-solutions">
                  <Button className="w-full bg-primary text-white hover:bg-primary/90">
                    Get Quote <i className="fas fa-arrow-right ml-2"></i>
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Import & Export - Full Width */}
          <div className="mt-8">
            <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-xl shadow-lg overflow-hidden border-t-4 border-blue-600">
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
                  <Link href="/services/import-export">
                    <Button className="bg-accent text-white hover:bg-accent/90 px-8 py-3 font-semibold">
                      Get Quote <i className="fas fa-arrow-right ml-2"></i>
                    </Button>
                  </Link>
                </div>
                <div className="hidden lg:block">
                  <img 
                    src={importExportImage}
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
              Get Free Quote
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
        </div>
      </section>

      {/* Payment Portal Section */}
      <section id="payment" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-neutral rounded-2xl p-8 md:p-12 shadow-inner">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Secure Payment Portal</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">Quick and secure payment processing for all your service fees and product purchases.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Service Fees", icon: "fas fa-file-invoice-dollar", desc: "Pay for registration, legal, or consulting services." },
                { title: "Product Purchase", icon: "fas fa-shopping-bag", desc: "Secure payments for food and textile orders." },
                { title: "AMC Payments", icon: "fas fa-sync-alt", desc: "Annual maintenance and renewal service fees." }
              ].map((item, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center border border-gray-100 hover:border-primary transition duration-300">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary text-2xl">
                    <i className={item.icon}></i>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-600 mb-6">{item.desc}</p>
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                    Proceed to Pay
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-lg text-gray-600 mb-8">Have questions or ready to start your next business venture? Our experts are here to help you every step of the way.</p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mr-4 flex-shrink-0">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">Office Address</h4>
                    <p className="text-gray-600">Lambana Solutions Hub, Business Center, City, State, ZIP</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mr-4 flex-shrink-0">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">Call Us</h4>
                    <p className="text-gray-600">+91 [Phone Number]</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mr-4 flex-shrink-0">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">Email Us</h4>
                    <p className="text-gray-600">info@lambanasolutions.com</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h4 className="text-lg font-bold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {[
                    "fab fa-facebook-f",
                    "fab fa-twitter",
                    "fab fa-linkedin-in",
                    "fab fa-instagram"
                  ].map((icon, index) => (
                    <a key={index} href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition duration-300">
                      <i className={icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
