import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Menu, ChevronDown } from "lucide-react";
import { Link, useLocation } from "wouter";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location !== '/') {
      // If not on home page, navigate to home first then scroll
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const serviceCategories = [
    { name: "Company Registration", href: "/services#company-registration" },
    { name: "Digital Signature Certificate", href: "/services#dsc" },
    { name: "CSC Services", href: "/services#csc" },
    { name: "Financial Services", href: "/services#financial" },
    { name: "Legal Services", href: "/services#legal" },
    { name: "E-commerce Solutions", href: "/services#ecommerce" },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-primary">Lambana Solutions</h1>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/">
                <button className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition duration-300">
                  Home
                </button>
              </Link>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition duration-300 flex items-center">
                    Services
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-64">
                  <Link href="/services">
                    <DropdownMenuItem className="cursor-pointer">
                      <i className="fas fa-th-large mr-2"></i>
                      All Services
                    </DropdownMenuItem>
                  </Link>
                  <DropdownMenuSeparator />
                  {serviceCategories.map((service, index) => (
                    <Link key={index} href={service.href}>
                      <DropdownMenuItem className="cursor-pointer">
                        {service.name}
                      </DropdownMenuItem>
                    </Link>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition duration-300"
              >
                About
              </button>
              
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition duration-300"
              >
                Contact
              </button>
              
              <Button 
                onClick={() => scrollToSection('payment')}
                className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90"
                data-testid="button-payment-portal"
              >
                Payment Portal
              </Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  <Link href="/">
                    <button className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-base font-medium text-left w-full">
                      Home
                    </button>
                  </Link>
                  <Link href="/services">
                    <button className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-base font-medium text-left w-full">
                      Services
                    </button>
                  </Link>
                  <button
                    onClick={() => scrollToSection('about')}
                    className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-base font-medium text-left"
                  >
                    About
                  </button>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-base font-medium text-left"
                  >
                    Contact
                  </button>
                  <Button 
                    onClick={() => scrollToSection('payment')}
                    className="bg-primary text-white px-3 py-2 rounded-md text-base font-medium"
                    data-testid="button-payment-portal-mobile"
                  >
                    Payment Portal
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
