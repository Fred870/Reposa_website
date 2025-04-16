
import { useEffect } from "react";
import Header from "@/components/Header";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans text-text bg-white">
      <Header />
      <div className="pt-24">
        <About />
      </div>
      <Footer />
    </div>
  );
}
