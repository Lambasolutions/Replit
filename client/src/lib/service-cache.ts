import { allServices } from "./services-data";
import { Service } from "./types";

// Group services by category
export const servicesByCategory: Record<string, Service[]> = {};
allServices.forEach(service => {
  if (!servicesByCategory[service.category]) {
    servicesByCategory[service.category] = [];
  }
  servicesByCategory[service.category].push(service);
});

// Create parent-to-children mapping
export const parentToChildrenMap = new Map<string, Service[]>();
allServices.forEach(service => {
  if (service.parentSlug) {
    if (!parentToChildrenMap.has(service.parentSlug)) {
      parentToChildrenMap.set(service.parentSlug, []);
    }
    parentToChildrenMap.get(service.parentSlug)!.push(service);
  }
});
