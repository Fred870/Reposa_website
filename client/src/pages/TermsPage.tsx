import { useEffect } from "react";
import Header from "@/components/Header";
import Terms from "@/components/Terms";
import Footer from "@/components/Footer";

export default function TermsPage() {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans text-text bg-white">
      <Header />
      <div className="pt-24">
        <Terms />
      </div>
      <Footer />
    </div>
  );
}