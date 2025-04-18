import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`fixed w-full ${scrolled ? "bg-white/95" : "bg-white"} backdrop-blur-sm shadow-sm z-50 transition-all duration-300`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img
              src="/assets/logo.png"
              alt="RePosa Sleep Position App"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-xl font-bold text-primary">RePosa.</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="about"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            About
          </a>
          <a
            href="/#how-it-works"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            How It Works
          </a>
          <a
            href="/#benefits"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Benefits
          </a>
          <a
            href="/#science"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Science
          </a>
          <a
            href="/#faq"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            FAQ
          </a>
          <a
            href="#app-store"
            className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Download App
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-text"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <i className={`fas ${isOpen ? "fa-times" : "fa-bars"} text-xl`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
              <a
                href="about"
                className="text-sm font-medium py-2 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <a
                href="/#how-it-works"
                className="text-sm font-medium py-2 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                How It Works
              </a>
              <a
                href="/#benefits"
                className="text-sm font-medium py-2 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Benefits
              </a>
              <a
                href="/#science"
                className="text-sm font-medium py-2 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Science
              </a>
              <a
                href="/#faq"
                className="text-sm font-medium py-2 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </a>
              <a
                href="#app-store"
                className="bg-primary text-white px-4 py-2 rounded-full text-center text-sm font-medium hover:bg-primary/90 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Download App
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
