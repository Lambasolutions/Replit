import { NavMenu, NavGroup } from "./types";
import { servicesByCategory, parentToChildrenMap } from "./service-cache";
import { allServices } from "./services-data";

// Helper to safely create sublinks, filtering out any with a missing href
const createSublinks = (parentSlug: string): NavGroup['sublinks'] => {
  const children = parentToChildrenMap.get(parentSlug) || [];
  return children
    .filter(s => s.href)
    .map(s => ({ name: s.name, href: s.href!, tagline: s.tagline }));
};

const companyRegistrationSublinks = createSublinks('company-registration');
const advisorySublinks = createSublinks('advisory-and-consultation');
const legalDocsSublinks = createSublinks('legal-services');
const itServicesSublinks = createSublinks('it-services');
const bpoServicesSublinks = createSublinks('bpo-services');
const agriProductsSublinks = createSublinks('agri-products');
const textilesSublinks = createSublinks('textiles');
const taxComplianceSublinks = createSublinks('taxes-and-compliance');
const loansSublinks = createSublinks('loans');
const importServicesSublinks = createSublinks('import-services');

const citizenServicesSublinks = allServices
  .filter(s => ['digital-signature-certificate', 'csc-services', 'all-state-services'].includes(s.slug) && s.href)
  .map(s => ({ name: s.name, href: s.href! }));

const financeSublinks = allServices
  .filter(s => ['digital-gold', 'bookkeeping', 'project-report'].includes(s.slug) && s.href)
  .map(s => ({ name: s.name, href: s.href! }));

const govAndCitizenServices = servicesByCategory['government-and-citizen-services'] || [];
const financialAndLegalServices = servicesByCategory['financial-and-legal'] || [];
const itAndBpoServices = servicesByCategory['it-and-bpo'] || [];
const ecommerceServices = servicesByCategory['ecommerce'] || [];
const importExportServices = servicesByCategory['import-and-export'] || [];

export const navMenu: NavMenu[] = [
  { name: "Home", href: "/" },
  {
    name: "Government & Citizen Services",
    columns: [
      [
        {
          name: "Business Registrations",
          href: "/services/company-registration",
          icon: govAndCitizenServices.find(s => s.slug === 'company-registration')?.icon,
          isHighlighted: true,
          sublinks: companyRegistrationSublinks,
        },
      ],
      [
        {
          name: "Citizen Services",
          href: "/services",
          icon: govAndCitizenServices.find(s => s.slug === 'all-state-services')?.icon,
          sublinks: citizenServicesSublinks,
        },
      ],
    ]
  },
  {
    name: "Financial & Legal",
    columns: [
      [ 
        {
          name: "Tax & Business Compliance",
          isHighlighted: true,
          icon: financialAndLegalServices.find(s => s.slug === 'taxes-and-compliance')?.icon,
          href: "/services/taxes-and-compliance",
          sublinks: taxComplianceSublinks,
        },
      ],
      [
        {
          name: "Advisory & Consultation",
          href: "/services/advisory-and-consultation",
          icon: financialAndLegalServices.find(s => s.slug === 'advisory-and-consultation')?.icon,
          sublinks: advisorySublinks
        },
      ],
      [
        {
          name: "Legal Agreements & Documents",
          href: "/services/legal-services",
          icon: financialAndLegalServices.find(s => s.slug === 'legal-services')?.icon,
          sublinks: legalDocsSublinks
        },
      ],
      [
        {
          name: "Business Finance",
          href: "/services/loans",
          icon: financialAndLegalServices.find(s => s.slug === 'loans')?.icon,
          sublinks: [...(loansSublinks || []), ...(financeSublinks || [])]
        },
      ]
    ]
  },
  {
    name: "IT & BPO Solutions",
    columns: [
      [
        {
          name: "IT Services",
          href: "/services/it-bpo-solutions/it-services",
          icon: itAndBpoServices.find(s => s.slug === 'it-services')?.icon,
          sublinks: itServicesSublinks,
        },
      ],
      [
        {
          name: "BPO Services",
          href: "/services/it-bpo-solutions/bpo-services",
          icon: itAndBpoServices.find(s => s.slug === 'bpo-services')?.icon,
          sublinks: bpoServicesSublinks,
        },
      ]
    ]
  },
  {
    name: "E-commerce",
    columns: [
      [
        {
          name: "Agri Products",
          href: "/services/ecommerce/agri-products",
          icon: ecommerceServices.find(s => s.slug === 'agri-products')?.icon,
          isHighlighted: true,
          sublinks: agriProductsSublinks
        },
      ],
      [
        {
          name: "Textiles",
          href: "/services/ecommerce/textiles",
          icon: ecommerceServices.find(s => s.slug === 'textiles')?.icon,
          sublinks: textilesSublinks
        }
      ]
    ]
  },
  {
    name: "Import & Export",
    columns: [
      [
        {
          name: "Import Services",
          href: "/services/import-export/import-services",
          icon: importExportServices.find(s => s.slug === 'import-services')?.icon,
          sublinks: importServicesSublinks,
        },
      ],
      [
        {
          name: "Export Services",
          href: "/services/import-export/export-services",
          icon: importExportServices.find(s => s.slug === 'export-services')?.icon,
          isHighlighted: true,
          sublinks: [
            { 
              name: 'Agri Products Export', 
              href: '/services/import-export/export-services/agri-products-export', 
              description: 'Grains, produce, and more.' 
            },
            { 
              name: 'Textiles Export', 
              href: '/services/import-export/export-services/textiles-export', 
              description: 'Khadi, Handloom, and Machine Loom textiles.' 
            },
          ]
        },
      ]
    ]
  },
  { 
    name: "Company", 
    href: "/company"
  },
];
