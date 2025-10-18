import { 
  Building2, FileText, Stamp, Receipt, TrendingUp, Scale, 
  FileCheck, Users, Briefcase, Code, Headphones, ShoppingBag, 
  Wheat, Shirt, Ship, Package, Home, Award, ClipboardCheck,
  Calculator, BookOpen, DollarSign, ShieldCheck, Laptop,
  Phone, MapPin
} from "lucide-react";
import { Service } from "./types";

export const allServices: Service[] = [
  // Government & Citizen Services
  {
    slug: "company-registration",
    name: "Business Registrations",
    category: "government-and-citizen-services",
    href: "/services/company-registration",
    icon: Building2,
    tagline: "Register your business with ease"
  },
  {
    slug: "private-limited-company",
    name: "Private Limited Company",
    category: "government-and-citizen-services",
    href: "/services/company-registration/private-limited",
    parentSlug: "company-registration",
    tagline: "Most popular choice for startups"
  },
  {
    slug: "one-person-company",
    name: "One Person Company (OPC)",
    category: "government-and-citizen-services",
    href: "/services/company-registration/one-person-company",
    parentSlug: "company-registration"
  },
  {
    slug: "limited-liability-partnership",
    name: "Limited Liability Partnership (LLP)",
    category: "government-and-citizen-services",
    href: "/services/company-registration/llp",
    parentSlug: "company-registration"
  },
  {
    slug: "partnership-firm",
    name: "Partnership Firm",
    category: "government-and-citizen-services",
    href: "/services/company-registration/partnership-firm",
    parentSlug: "company-registration"
  },
  {
    slug: "proprietorship",
    name: "Sole Proprietorship",
    category: "government-and-citizen-services",
    href: "/services/company-registration/proprietorship",
    parentSlug: "company-registration"
  },
  
  // Citizen Services
  {
    slug: "digital-signature-certificate",
    name: "Digital Signature Certificate (DSC)",
    category: "government-and-citizen-services",
    href: "/services/digital-signature",
    icon: Award,
    tagline: "Secure digital signatures"
  },
  {
    slug: "csc-services",
    name: "CSC Services",
    category: "government-and-citizen-services",
    href: "/services/csc",
    icon: Users,
    tagline: "Common Service Centers"
  },
  {
    slug: "all-state-services",
    name: "All State Services",
    category: "government-and-citizen-services",
    href: "/services/state-services",
    icon: MapPin,
    tagline: "State-specific citizen services"
  },

  // Financial & Legal - Tax & Compliance
  {
    slug: "taxes-and-compliance",
    name: "Tax & Business Compliance",
    category: "financial-and-legal",
    href: "/services/taxes-and-compliance",
    icon: Calculator,
    tagline: "Stay compliant with tax regulations"
  },
  {
    slug: "gst-registration",
    name: "GST Registration",
    category: "financial-and-legal",
    href: "/services/taxes-and-compliance/gst-registration",
    parentSlug: "taxes-and-compliance"
  },
  {
    slug: "gst-return-filing",
    name: "GST Return Filing",
    category: "financial-and-legal",
    href: "/services/taxes-and-compliance/gst-filing",
    parentSlug: "taxes-and-compliance"
  },
  {
    slug: "income-tax-filing",
    name: "Income Tax Filing",
    category: "financial-and-legal",
    href: "/services/taxes-and-compliance/income-tax",
    parentSlug: "taxes-and-compliance"
  },
  {
    slug: "tds-return",
    name: "TDS Return Filing",
    category: "financial-and-legal",
    href: "/services/taxes-and-compliance/tds-return",
    parentSlug: "taxes-and-compliance"
  },

  // Advisory & Consultation
  {
    slug: "advisory-and-consultation",
    name: "Advisory & Consultation",
    category: "financial-and-legal",
    href: "/services/advisory-and-consultation",
    icon: Users,
    tagline: "Expert business guidance"
  },
  {
    slug: "business-plan",
    name: "Business Plan Preparation",
    category: "financial-and-legal",
    href: "/services/advisory/business-plan",
    parentSlug: "advisory-and-consultation"
  },
  {
    slug: "financial-advisory",
    name: "Financial Advisory",
    category: "financial-and-legal",
    href: "/services/advisory/financial",
    parentSlug: "advisory-and-consultation"
  },
  {
    slug: "startup-consultation",
    name: "Startup Consultation",
    category: "financial-and-legal",
    href: "/services/advisory/startup",
    parentSlug: "advisory-and-consultation"
  },

  // Legal Services
  {
    slug: "legal-services",
    name: "Legal Agreements & Documents",
    category: "financial-and-legal",
    href: "/services/legal-services",
    icon: Scale,
    tagline: "Professional legal documentation"
  },
  {
    slug: "e-stamping",
    name: "E-Stamping",
    category: "financial-and-legal",
    href: "/services/legal/e-stamping",
    parentSlug: "legal-services"
  },
  {
    slug: "rental-agreement",
    name: "Rental Agreement",
    category: "financial-and-legal",
    href: "/services/legal/rental-agreement",
    parentSlug: "legal-services"
  },
  {
    slug: "business-agreement",
    name: "Business Agreement",
    category: "financial-and-legal",
    href: "/services/legal/business-agreement",
    parentSlug: "legal-services"
  },
  {
    slug: "nda-agreement",
    name: "Non-Disclosure Agreement",
    category: "financial-and-legal",
    href: "/services/legal/nda",
    parentSlug: "legal-services"
  },

  // Loans & Finance
  {
    slug: "loans",
    name: "Business Finance",
    category: "financial-and-legal",
    href: "/services/loans",
    icon: DollarSign,
    tagline: "Secure funding for your business"
  },
  {
    slug: "business-loan",
    name: "Business Loan",
    category: "financial-and-legal",
    href: "/services/loans/business-loan",
    parentSlug: "loans"
  },
  {
    slug: "msme-loan",
    name: "MSME Loan",
    category: "financial-and-legal",
    href: "/services/loans/msme-loan",
    parentSlug: "loans"
  },
  {
    slug: "working-capital-loan",
    name: "Working Capital Loan",
    category: "financial-and-legal",
    href: "/services/loans/working-capital",
    parentSlug: "loans"
  },
  {
    slug: "digital-gold",
    name: "Digital Gold Investment",
    category: "financial-and-legal",
    href: "/services/finance/digital-gold",
    icon: TrendingUp
  },
  {
    slug: "bookkeeping",
    name: "Bookkeeping Services",
    category: "financial-and-legal",
    href: "/services/finance/bookkeeping",
    icon: BookOpen
  },
  {
    slug: "project-report",
    name: "Project Report Preparation",
    category: "financial-and-legal",
    href: "/services/finance/project-report",
    icon: FileCheck
  },

  // IT & BPO Solutions
  {
    slug: "it-services",
    name: "IT Services",
    category: "it-and-bpo",
    href: "/services/it-bpo-solutions/it-services",
    icon: Laptop,
    tagline: "Comprehensive IT solutions"
  },
  {
    slug: "web-development",
    name: "Web Development",
    category: "it-and-bpo",
    href: "/services/it-bpo-solutions/it-services/web-development",
    parentSlug: "it-services"
  },
  {
    slug: "mobile-app-development",
    name: "Mobile App Development",
    category: "it-and-bpo",
    href: "/services/it-bpo-solutions/it-services/mobile-app",
    parentSlug: "it-services"
  },
  {
    slug: "software-development",
    name: "Software Development",
    category: "it-and-bpo",
    href: "/services/it-bpo-solutions/it-services/software",
    parentSlug: "it-services"
  },
  {
    slug: "cloud-services",
    name: "Cloud Services",
    category: "it-and-bpo",
    href: "/services/it-bpo-solutions/it-services/cloud",
    parentSlug: "it-services"
  },

  {
    slug: "bpo-services",
    name: "BPO Services",
    category: "it-and-bpo",
    href: "/services/it-bpo-solutions/bpo-services",
    icon: Headphones,
    tagline: "Outsourcing solutions"
  },
  {
    slug: "data-entry",
    name: "Data Entry Services",
    category: "it-and-bpo",
    href: "/services/it-bpo-solutions/bpo-services/data-entry",
    parentSlug: "bpo-services"
  },
  {
    slug: "call-center",
    name: "Call Center Services",
    category: "it-and-bpo",
    href: "/services/it-bpo-solutions/bpo-services/call-center",
    parentSlug: "bpo-services"
  },
  {
    slug: "back-office",
    name: "Back Office Support",
    category: "it-and-bpo",
    href: "/services/it-bpo-solutions/bpo-services/back-office",
    parentSlug: "bpo-services"
  },

  {
    slug: "customer-support",
    name: "Customer Support",
    category: "it-and-bpo",
    href: "/services/it-bpo-solutions/customer-support",
    icon: Phone,
    tagline: "24/7 customer assistance"
  },

  // E-commerce
  {
    slug: "agri-products",
    name: "Agri Products",
    category: "ecommerce",
    href: "/services/ecommerce/agri-products",
    icon: Wheat,
    tagline: "Fresh agricultural products"
  },
  {
    slug: "south-indian-foods",
    name: "South Indian Foods",
    category: "ecommerce",
    href: "/services/ecommerce/agri-products/south-indian-foods",
    parentSlug: "agri-products"
  },
  {
    slug: "ready-to-eat",
    name: "Ready-to-Eat Meals",
    category: "ecommerce",
    href: "/services/ecommerce/agri-products/ready-to-eat",
    parentSlug: "agri-products"
  },
  {
    slug: "freeze-dried",
    name: "Freeze-Dried Foods",
    category: "ecommerce",
    href: "/services/ecommerce/agri-products/freeze-dried",
    parentSlug: "agri-products"
  },
  {
    slug: "dehydrated-foods",
    name: "Dehydrated Foods",
    category: "ecommerce",
    href: "/services/ecommerce/agri-products/dehydrated",
    parentSlug: "agri-products"
  },
  {
    slug: "dairy-products",
    name: "Dairy Products",
    category: "ecommerce",
    href: "/services/ecommerce/agri-products/dairy",
    parentSlug: "agri-products"
  },

  {
    slug: "textiles",
    name: "Textiles",
    category: "ecommerce",
    href: "/services/ecommerce/textiles",
    icon: Shirt,
    tagline: "Quality textile products"
  },
  {
    slug: "khadi",
    name: "Khadi",
    category: "ecommerce",
    href: "/services/ecommerce/textiles/khadi",
    parentSlug: "textiles"
  },
  {
    slug: "handloom",
    name: "Handloom",
    category: "ecommerce",
    href: "/services/ecommerce/textiles/handloom",
    parentSlug: "textiles"
  },
  {
    slug: "machine-loom",
    name: "Machine Loom",
    category: "ecommerce",
    href: "/services/ecommerce/textiles/machine-loom",
    parentSlug: "textiles"
  },

  // Import & Export
  {
    slug: "import-services",
    name: "Import Services",
    category: "import-and-export",
    href: "/services/import-export/import-services",
    icon: Ship,
    tagline: "Global import solutions"
  },
  {
    slug: "import-license",
    name: "Import License & Registration",
    category: "import-and-export",
    href: "/services/import-export/import-services/license",
    parentSlug: "import-services"
  },
  {
    slug: "customs-clearance",
    name: "Customs Clearance",
    category: "import-and-export",
    href: "/services/import-export/import-services/customs",
    parentSlug: "import-services"
  },
  {
    slug: "import-documentation",
    name: "Import Documentation",
    category: "import-and-export",
    href: "/services/import-export/import-services/documentation",
    parentSlug: "import-services"
  },

  {
    slug: "export-services",
    name: "Export Services",
    category: "import-and-export",
    href: "/services/import-export/export-services",
    icon: Package,
    tagline: "Expand globally with exports"
  },

  // Company
  {
    slug: "company",
    name: "Our Company",
    category: "company",
    href: "/company",
    icon: Home,
    tagline: "Learn more about us"
  },
  {
    slug: "about-us",
    name: "About Us",
    category: "company",
    href: "/company/about",
    parentSlug: "company",
    description: "Our story and mission"
  },
  {
    slug: "our-team",
    name: "Our Team",
    category: "company",
    href: "/company/team",
    parentSlug: "company",
    description: "Meet our expert team"
  },
  {
    slug: "careers",
    name: "Careers",
    category: "company",
    href: "/company/careers",
    parentSlug: "company",
    description: "Join our growing team"
  },
  {
    slug: "contact-us",
    name: "Contact Us",
    category: "company",
    href: "/company/contact",
    parentSlug: "company",
    description: "Get in touch with us"
  }
];
