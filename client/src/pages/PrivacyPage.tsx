import { useEffect } from "react";
import Header from "@/components/Header";
import Privacy from "@/components/Privacy";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans text-text bg-white">
      <Header />
      <div className="pt-24">
        <Privacy />
      </div>
      <Footer />
    </div>
  );
}