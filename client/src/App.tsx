import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import Services from "@/pages/services";
import CompanyRegistration from "@/pages/service-company-registration";
import DSC from "@/pages/service-dsc";
import CSC from "@/pages/service-csc";
import Financial from "@/pages/service-financial";
import Legal from "@/pages/service-legal";
import Ecommerce from "@/pages/service-ecommerce";
import ImportExport from "@/pages/service-import-export";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/services/company-registration" component={CompanyRegistration} />
      <Route path="/services/digital-signature-certificate" component={DSC} />
      <Route path="/services/csc-services" component={CSC} />
      <Route path="/services/financial-services" component={Financial} />
      <Route path="/services/legal-services" component={Legal} />
      <Route path="/services/ecommerce-solutions" component={Ecommerce} />
      <Route path="/services/import-export" component={ImportExport} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
