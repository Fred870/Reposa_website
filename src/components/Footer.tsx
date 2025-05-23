import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";
import { Instagram } from "lucide-react";

export default function Footer() {
  const footerLinks = [
    {
      title: "RePosa.",
      links: [
        { name: "About Us", href: "about" },
        { name: "How It Works", href: "/#how-it-works" },
        { name: "Scientific Research", href: "/#science" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "FAQs", href: "/#faq" },
        { name: "Contact Us", href: "mailto:info@reposa-sleep.rest" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "privacy" },
        { name: "Terms of Service", href: "terms" },
      ],
    },
  ];

  const socialLinks = [{ icon: <Instagram className="h-4 w-4" />, href: "#" }];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {footerLinks.map((column, index) => (
            <motion.div
              key={column.title}
              variants={fadeIn("up", 0.1 * (index + 1))}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-lg mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-primary transition-colors"
                      onClick={(e) => {
                        if (link.href.startsWith("#")) return;
                        if (link.href.startsWith("/")) {
                          e.preventDefault();
                          // Use proper hash-based navigation that works with our router
                          window.location.hash = link.href;
                        }
                      }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-lg mb-4">Connect</h3>
            <div className="flex mb-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} RePosa. All rights reserved.
          </p>
          <div className="flex items-center">
            <a href="https://apps.apple.com/us/app/reposa/id6744608500?itscg=30200&itsct=apps_box_badge&mttnsubad=6744608500">
              <img
                src="https://toolbox.marketingtools.apple.com/api/v2/badges/download-on-the-app-store/black/en-us?releaseDate=1746057600"
                alt="Download on the App Store"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
