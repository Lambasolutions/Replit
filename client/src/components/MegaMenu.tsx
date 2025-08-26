import { useState } from "react";
import { Link } from "wouter";
import { ChevronDown, ChevronRight } from "lucide-react";

interface MenuItemProps {
  title: string;
  items: string[];
  href?: string;
}

interface MenuCategoryProps {
  category: string;
  items: MenuItemProps[];
}

export default function MegaMenu() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const menuData: MenuCategoryProps[] = [
    {
      category: "Services",
      items: [
        {
          title: "Government Services",
          items: [
            "Company Registration",
            "Digital Signature Certificate (DSC)", 
            "CSC Services",
            "Other Public Services"
          ]
        },
        {
          title: "Financial Services", 
          items: [
            "Loans",
            "Bookkeeping Services",
            "Project Report Services", 
            "CA-Related Services"
          ]
        },
        {
          title: "Legal Services",
          items: [
            "E-Stamping (Non-Judicial Stamp Papers)",
            "Rental Agreement",
            "Business Agreement",
            "Other Legal Agreements"
          ]
        }
      ]
    },
    {
      category: "E-commerce",
      items: [
        {
          title: "Agri Products",
          items: [
            "South Indian Foods",
            "Ready-to-Eat Meals", 
            "Freeze-Dried Foods",
            "Dehydrated Foods",
            "Dairy Products"
          ]
        },
        {
          title: "Textiles",
          items: [
            "Khadi",
            "Handloom", 
            "Machine Loom"
          ]
        }
      ]
    }
  ];

  const singleItems = [
    { name: "IT & BPO Solutions", href: "/it-bpo" },
    { name: "Import & Export", href: "/import-export" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" }
  ];

  return (
    <nav className="bg-white shadow-lg border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <h1 className="text-2xl font-bold text-primary cursor-pointer">
                Lambana Solutions
              </h1>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8">
            <Link href="/">
              <button className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition duration-300">
                Home
              </button>
            </Link>

            {/* Mega Menu Categories */}
            {menuData.map((category) => (
              <div
                key={category.category}
                className="relative"
                onMouseEnter={() => setActiveMenu(category.category)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition duration-300 flex items-center">
                  {category.category}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>

                {/* Mega Menu Dropdown */}
                {activeMenu === category.category && (
                  <div className="absolute top-full left-0 w-screen max-w-4xl bg-white shadow-2xl border border-gray-200 rounded-lg mt-1 z-50">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
                      {category.items.map((item, index) => (
                        <div key={index} className="space-y-4">
                          <h3 className="font-bold text-gray-900 text-lg border-b border-gray-200 pb-2">
                            {item.title}
                          </h3>
                          <ul className="space-y-2">
                            {item.items.map((subItem, subIndex) => (
                              <li key={subIndex}>
                                <Link href={`/${category.category.toLowerCase()}/${item.title.toLowerCase().replace(/\s+/g, '-')}/${subItem.toLowerCase().replace(/\s+/g, '-')}`}>
                                  <button 
                                    className="text-gray-600 hover:text-primary text-sm transition duration-300 text-left w-full py-1"
                                    data-testid={`menu-item-${subItem.toLowerCase().replace(/\s+/g, '-')}`}
                                  >
                                    <ChevronRight className="inline h-3 w-3 mr-2" />
                                    {subItem}
                                  </button>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Single Menu Items */}
            {singleItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <button className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition duration-300">
                  {item.name}
                </button>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              className="text-gray-700 hover:text-primary"
              onClick={() => setActiveMenu(activeMenu ? null : 'mobile')}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {activeMenu === 'mobile' && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-6 space-y-4">
              <Link href="/">
                <button className="block w-full text-left text-gray-700 hover:text-primary py-2 text-base font-medium">
                  Home
                </button>
              </Link>
              
              {menuData.map((category) => (
                <div key={category.category}>
                  <h3 className="font-bold text-gray-900 py-2 border-b border-gray-200">
                    {category.category}
                  </h3>
                  {category.items.map((item, index) => (
                    <div key={index} className="ml-4 mt-2">
                      <h4 className="font-semibold text-gray-800 py-1">{item.title}</h4>
                      {item.items.map((subItem, subIndex) => (
                        <Link 
                          key={subIndex} 
                          href={`/${category.category.toLowerCase()}/${item.title.toLowerCase().replace(/\s+/g, '-')}/${subItem.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          <button className="block w-full text-left ml-4 text-gray-600 hover:text-primary py-1 text-sm">
                            {subItem}
                          </button>
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
              
              {singleItems.map((item) => (
                <Link key={item.name} href={item.href}>
                  <button className="block w-full text-left text-gray-700 hover:text-primary py-2 text-base font-medium">
                    {item.name}
                  </button>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}