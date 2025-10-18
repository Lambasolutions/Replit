import { useState } from "react";
import { Link } from "wouter";
import { ChevronDown, Menu, X } from "lucide-react";
import { navMenu } from "@/lib/nav-menu";
import { NavMenu } from "@/lib/types";

export default function MegaMenu() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer">
                Lambana Solutions
              </h1>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-1">
            {navMenu.map((menuItem) => (
              <MenuItemDesktop
                key={menuItem.name}
                item={menuItem}
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}
              />
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              className="text-gray-700 hover:text-primary p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 max-h-screen overflow-y-auto">
            <div className="px-4 py-6 space-y-4">
              {navMenu.map((menuItem) => (
                <MenuItemMobile key={menuItem.name} item={menuItem} />
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function MenuItemDesktop({ 
  item, 
  activeMenu, 
  setActiveMenu 
}: { 
  item: NavMenu; 
  activeMenu: string | null; 
  setActiveMenu: (menu: string | null) => void;
}) {
  // Simple link without dropdown
  if (!item.columns && item.href) {
    return (
      <Link href={item.href}>
        <button 
          className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition duration-300"
          data-testid={`link-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
        >
          {item.name}
        </button>
      </Link>
    );
  }

  // Dropdown menu
  return (
    <div
      className="relative"
      onMouseEnter={() => setActiveMenu(item.name)}
      onMouseLeave={() => setActiveMenu(null)}
    >
      <button 
        className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition duration-300 flex items-center"
        data-testid={`button-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
      >
        {item.name}
        <ChevronDown className="ml-1 h-4 w-4" />
      </button>

      {/* Mega Menu Dropdown */}
      {activeMenu === item.name && item.columns && (
        <div className="absolute top-full left-0 bg-white shadow-2xl border border-gray-200 rounded-lg mt-1 z-50 min-w-[600px]">
          <div className={`grid gap-6 p-8 ${item.columns.length === 1 ? 'grid-cols-1' : item.columns.length === 2 ? 'grid-cols-2' : item.columns.length === 3 ? 'grid-cols-3' : 'grid-cols-4'}`}>
            {item.columns.map((column, colIndex) => (
              <div key={colIndex} className="space-y-6">
                {column.map((group, groupIndex) => (
                  <div key={groupIndex} className="space-y-3">
                    {/* Group Header */}
                    <Link href={group.href || '#'}>
                      <div 
                        className={`flex items-center space-x-2 group cursor-pointer pb-2 border-b ${
                          group.isHighlighted 
                            ? 'border-blue-500' 
                            : 'border-gray-200'
                        }`}
                        data-testid={`group-${group.name.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {group.icon && (
                          <group.icon className={`h-5 w-5 ${
                            group.isHighlighted 
                              ? 'text-blue-600' 
                              : 'text-gray-600 group-hover:text-blue-600'
                          }`} />
                        )}
                        <h3 className={`font-bold text-sm ${
                          group.isHighlighted 
                            ? 'text-blue-600' 
                            : 'text-gray-900 group-hover:text-blue-600'
                        } transition-colors`}>
                          {group.name}
                        </h3>
                      </div>
                    </Link>

                    {/* Sublinks */}
                    {group.sublinks && group.sublinks.length > 0 && (
                      <ul className="space-y-2">
                        {group.sublinks.map((sublink, sublinkIndex) => (
                          <li key={sublinkIndex}>
                            <Link href={sublink.href}>
                              <div 
                                className="text-gray-600 hover:text-blue-600 text-sm transition-colors cursor-pointer group/item"
                                data-testid={`link-${sublink.name.toLowerCase().replace(/\s+/g, '-')}`}
                              >
                                <div className="flex items-start">
                                  <span className="text-blue-500 mr-2 group-hover/item:translate-x-1 transition-transform">›</span>
                                  <div>
                                    <div className="font-medium">{sublink.name}</div>
                                    {sublink.tagline && (
                                      <div className="text-xs text-gray-500 mt-0.5">{sublink.tagline}</div>
                                    )}
                                    {sublink.description && (
                                      <div className="text-xs text-gray-500 mt-0.5">{sublink.description}</div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function MenuItemMobile({ item }: { item: NavMenu }) {
  const [expanded, setExpanded] = useState(false);

  // Simple link without dropdown
  if (!item.columns && item.href) {
    return (
      <Link href={item.href}>
        <button 
          className="block w-full text-left text-gray-700 hover:text-primary py-2 text-base font-medium"
          data-testid={`mobile-link-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
        >
          {item.name}
        </button>
      </Link>
    );
  }

  // Expandable menu
  return (
    <div>
      <button
        className="flex items-center justify-between w-full text-left text-gray-900 font-bold py-2 border-b border-gray-200"
        onClick={() => setExpanded(!expanded)}
        data-testid={`mobile-button-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
      >
        {item.name}
        <ChevronDown className={`h-4 w-4 transition-transform ${expanded ? 'rotate-180' : ''}`} />
      </button>

      {expanded && item.columns && (
        <div className="mt-2 ml-4 space-y-4">
          {item.columns.map((column, colIndex) => (
            <div key={colIndex} className="space-y-4">
              {column.map((group, groupIndex) => (
                <div key={groupIndex} className="space-y-2">
                  {/* Group Header */}
                  <Link href={group.href || '#'}>
                    <div 
                      className="flex items-center space-x-2 cursor-pointer"
                      data-testid={`mobile-group-${group.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {group.icon && (
                        <group.icon className={`h-4 w-4 ${group.isHighlighted ? 'text-blue-600' : 'text-gray-600'}`} />
                      )}
                      <h4 className={`font-semibold text-sm ${group.isHighlighted ? 'text-blue-600' : 'text-gray-800'}`}>
                        {group.name}
                      </h4>
                    </div>
                  </Link>

                  {/* Sublinks */}
                  {group.sublinks && group.sublinks.length > 0 && (
                    <ul className="ml-6 space-y-1">
                      {group.sublinks.map((sublink, sublinkIndex) => (
                        <li key={sublinkIndex}>
                          <Link href={sublink.href}>
                            <button 
                              className="block w-full text-left text-gray-600 hover:text-primary py-1 text-sm"
                              data-testid={`mobile-link-${sublink.name.toLowerCase().replace(/\s+/g, '-')}`}
                            >
                              {sublink.name}
                            </button>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
