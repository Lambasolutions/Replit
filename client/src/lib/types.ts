import { LucideIcon } from "lucide-react";

export interface NavSublink {
  name: string;
  href: string;
  tagline?: string;
  description?: string;
}

export interface NavGroup {
  name: string;
  href?: string;
  icon?: LucideIcon;
  isHighlighted?: boolean;
  sublinks?: NavSublink[];
}

export interface NavMenu {
  name: string;
  href?: string;
  columns?: NavGroup[][];
}

export interface Service {
  slug: string;
  name: string;
  category: string;
  href?: string;
  icon?: LucideIcon;
  tagline?: string;
  description?: string;
  parentSlug?: string;
}
