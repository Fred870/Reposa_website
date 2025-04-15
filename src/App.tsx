import { Switch, Route, useLocation } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { useEffect, useState } from "react";
import Home from "@/pages/Home";
import PrivacyPage from "@/pages/PrivacyPage";
import TermsPage from "@/pages/TermsPage";
import SciencePage from "@/pages/SciencePage";
import NotFound from "@/pages/not-found";

// Custom hash-based location hook for wouter
function useHashLocation() {
  const [location, setLocation] = useState(() =>
    window.location.hash ? window.location.hash.replace("#", "") : "/",
  );

  useEffect(() => {
    // Handle hash changes
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      setLocation(hash || "/");
    };

    window.addEventListener("hashchange", handleHashChange);
    // Handle initial hash on mount
    handleHashChange();

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const navigate = (to: string) => {
    window.location.hash = to;
  };

  return [location, navigate];
}

function Router() {
  return (
    <Switch hook={useHashLocation}>
      <Route path="/" component={Home} />
      <Route path="privacy" component={PrivacyPage} />
      <Route path="/terms" component={TermsPage} />
      <Route path="/science" component={SciencePage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <>
      <Router />
      <Toaster />
    </>
  );
}

export default App;
