import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";

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
      <Header />
      
      {/* Hero Section - More Engaging */}
      <section id="home" className="relative bg-gradient-to-r from-primary to-secondary text-white overflow-hidden">
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
              Everything Your Business<br />
              <span className="text-accent">Needs to Succeed</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              From government registrations to premium products, we've got all the solutions you need in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services">
                <Button 
                  size="lg" 
                  className="bg-accent text-white hover:bg-accent/90 px-8 py-3 text-lg"
                  data-testid="button-explore-services"
                >
                  Explore Services
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg"
                onClick={() => scrollToSection('contact')}
                data-testid="button-contact-us"
              >
                <i className="fas fa-phone mr-2"></i>
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
        
        {/* Quick Service Links */}
        <div className="relative bg-white/10 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { icon: "fas fa-landmark", text: "Government Services" },
                { icon: "fas fa-money-bill", text: "Financial Help" },
                { icon: "fas fa-gavel", text: "Legal Docs" },
                { icon: "fas fa-leaf", text: "Food & Agri" },
                { icon: "fas fa-tshirt", text: "Textiles" }
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

      {/* Stats Section - Simple & Direct */}
      <section className="py-16 bg-neutral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Happy Clients" },
              { number: "6", label: "Service Categories" },
              { number: "15+", label: "Years Active" },
              { number: "24/7", label: "Support" }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Cleaner Layout */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our range of services designed to help your business grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Company Registration */}
            <Link href="/services/company-registration">
              <Card className="shadow-lg hover:shadow-xl transition duration-300 border border-gray-100 cursor-pointer h-full">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400" 
                    alt="Company registration" 
                    className="w-full h-48 object-cover rounded-t-xl"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <i className="fas fa-building text-2xl text-blue-600 mr-3"></i>
                    <h3 className="text-xl font-bold">Company Registration</h3>
                  </div>
                  <p className="text-gray-600 mb-4">Register your business as Proprietorship, LLC, Partnership, or Company.</p>
                  <div className="space-y-2 mb-6">
                    {["All Business Types", "Fast Processing", "Government Approved"].map((service, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <i className="fas fa-check text-green-500 mr-2"></i>
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
                    Learn More →
                  </Button>
                </CardContent>
              </Card>
            </Link>

            {/* DSC */}
            <Link href="/services/digital-signature-certificate">
              <Card className="shadow-lg hover:shadow-xl transition duration-300 border border-gray-100 cursor-pointer h-full">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400" 
                    alt="Digital signatures" 
                    className="w-full h-48 object-cover rounded-t-xl"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <i className="fas fa-certificate text-2xl text-green-600 mr-3"></i>
                    <h3 className="text-xl font-bold">Digital Signature</h3>
                  </div>
                  <p className="text-gray-600 mb-4">Official digital certificates for signing documents online.</p>
                  <div className="space-y-2 mb-6">
                    {["Class 2 & 3", "E-tender Ready", "Quick Delivery"].map((service, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <i className="fas fa-check text-green-500 mr-2"></i>
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-green-600 text-white hover:bg-green-700">
                    Learn More →
                  </Button>
                </CardContent>
              </Card>
            </Link>

            {/* Financial */}
            <Link href="/services/financial-services">
              <Card className="shadow-lg hover:shadow-xl transition duration-300 border border-gray-100 cursor-pointer h-full">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400" 
                    alt="Financial services" 
                    className="w-full h-48 object-cover rounded-t-xl"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <i className="fas fa-coins text-2xl text-yellow-600 mr-3"></i>
                    <h3 className="text-xl font-bold">Financial Services</h3>
                  </div>
                  <p className="text-gray-600 mb-4">Get loans, financial planning, and accounting support.</p>
                  <div className="space-y-2 mb-6">
                    {["Personal Loans", "Business Loans", "Fast Approval"].map((service, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <i className="fas fa-check text-green-500 mr-2"></i>
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-yellow-600 text-white hover:bg-yellow-700">
                    Learn More →
                  </Button>
                </CardContent>
              </Card>
            </Link>

            {/* Legal */}
            <Link href="/services/legal-services">
              <Card className="shadow-lg hover:shadow-xl transition duration-300 border border-gray-100 cursor-pointer h-full">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400" 
                    alt="Legal services" 
                    className="w-full h-48 object-cover rounded-t-xl"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <i className="fas fa-gavel text-2xl text-red-600 mr-3"></i>
                    <h3 className="text-xl font-bold">Legal Services</h3>
                  </div>
                  <p className="text-gray-600 mb-4">Legal documents, agreements, and e-stamping services.</p>
                  <div className="space-y-2 mb-6">
                    {["E-Stamping", "Rental Agreements", "Business Contracts"].map((service, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <i className="fas fa-check text-green-500 mr-2"></i>
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-red-600 text-white hover:bg-red-700">
                    Learn More →
                  </Button>
                </CardContent>
              </Card>
            </Link>

            {/* Foods & Agriculture */}
            <Link href="/services/ecommerce-solutions">
              <Card className="shadow-lg hover:shadow-xl transition duration-300 border border-gray-100 cursor-pointer h-full">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400" 
                    alt="Food products" 
                    className="w-full h-48 object-cover rounded-t-xl"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <i className="fas fa-leaf text-2xl text-green-500 mr-3"></i>
                    <h3 className="text-xl font-bold">Food & Agriculture</h3>
                  </div>
                  <p className="text-gray-600 mb-4">Premium South Indian foods and agricultural products online.</p>
                  <div className="space-y-2 mb-6">
                    {["Authentic Foods", "Fresh Produce", "Worldwide Shipping"].map((service, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <i className="fas fa-check text-green-500 mr-2"></i>
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-green-500 text-white hover:bg-green-600">
                    Learn More →
                  </Button>
                </CardContent>
              </Card>
            </Link>

            {/* E-commerce */}
            <Link href="/services/ecommerce-solutions">
              <Card className="shadow-lg hover:shadow-xl transition duration-300 border border-gray-100 cursor-pointer h-full">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
                    alt="E-commerce" 
                    className="w-full h-48 object-cover rounded-t-xl"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <i className="fas fa-shopping-cart text-2xl text-indigo-600 mr-3"></i>
                    <h3 className="text-xl font-bold">E-commerce Solutions</h3>
                  </div>
                  <p className="text-gray-600 mb-4">Set up your online store with payment integration.</p>
                  <div className="space-y-2 mb-6">
                    {["Online Catalog", "Secure Payments", "Order Management"].map((service, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <i className="fas fa-check text-green-500 mr-2"></i>
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-indigo-600 text-white hover:bg-indigo-700">
                    Learn More →
                  </Button>
                </CardContent>
              </Card>
            </Link>
          </div>

          {/* View All Services Button */}
          <div className="text-center mt-12">
            <Link href="/services">
              <Button 
                size="lg" 
                className="bg-primary text-white hover:bg-primary/90 px-8 py-4 text-lg"
                data-testid="button-view-all-services"
              >
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Warmer Tone */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Work With Us?</h2>
            <p className="text-xl text-gray-600">We make doing business easier.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "fas fa-check-circle", title: "Quick & Easy", desc: "Simple processes, fast results" },
              { icon: "fas fa-headset", title: "Always Here to Help", desc: "24/7 support whenever you need it" },
              { icon: "fas fa-shield-alt", title: "Trusted & Reliable", desc: "Serving 500+ happy clients" },
              { icon: "fas fa-tag", title: "Fair Pricing", desc: "Transparent costs, no surprises" },
              { icon: "fas fa-rocket", title: "Expert Team", desc: "15+ years of experience" },
              { icon: "fas fa-handshake", title: "Your Success Matters", desc: "We're invested in helping you grow" }
            ].map((item, index) => (
              <Card key={index} className="shadow-lg border-0">
                <CardContent className="p-8 text-center">
                  <i className={`${item.icon} text-4xl text-primary mb-4`}></i>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Section */}
      <section id="payment" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Easy Payment Options</h2>
            <p className="text-xl text-gray-600 mb-4">Multiple ways to pay, all secure</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <i className="fas fa-credit-card text-3xl text-blue-600 mr-4"></i>
                  <div>
                    <h3 className="text-2xl font-bold">Stripe</h3>
                    <p className="text-gray-600">Cards & Digital Wallets</p>
                  </div>
                </div>
                <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
                  Setup Stripe →
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-yellow-50 border-yellow-200">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <i className="fab fa-paypal text-3xl text-blue-700 mr-4"></i>
                  <div>
                    <h3 className="text-2xl font-bold">PayPal</h3>
                    <p className="text-gray-600">PayPal & Cards</p>
                  </div>
                </div>
                <Button className="w-full bg-blue-700 text-white hover:bg-blue-800">
                  Setup PayPal →
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-6">We Accept</h3>
            <div className="flex flex-wrap justify-center items-center gap-6 opacity-70">
              <Badge variant="outline">Visa</Badge>
              <Badge variant="outline">Mastercard</Badge>
              <Badge variant="outline">Amex</Badge>
              <Badge variant="outline">UPI</Badge>
              <Badge variant="outline">NetBanking</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-neutral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600">Let's talk about what you need.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Contact</h3>
                <div className="space-y-6">
                  {[
                    { 
                      icon: "fas fa-phone", 
                      title: "Call Us", 
                      content: "+91 9986 000 219" 
                    },
                    { 
                      icon: "fas fa-envelope", 
                      title: "Email", 
                      content: "info@lambanasolutions.com" 
                    },
                    { 
                      icon: "fas fa-clock", 
                      title: "Hours", 
                      content: "Mon-Fri: 9AM-6PM\nSat: 9AM-2PM" 
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
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Need Quick Help?</h4>
                  <a 
                    href="https://wa.me/+919986000219?text=Hello!%20I%20have%20a%20question%20about%20your%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
                    data-testid="link-whatsapp-chat"
                  >
                    <i className="fab fa-whatsapp text-xl mr-2"></i>
                    Chat on WhatsApp
                  </a>
                  <p className="text-sm text-gray-500 mt-2">Get instant responses</p>
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
