import { motion } from "framer-motion";
import { fadeIn, slideInFromLeft } from "@/lib/motion";


export default function DownloadCTA() {
  return (
    <section className="py-16 bg-primary" id="app-store">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-white"
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            Download RePosa Today
          </motion.h2>
          <motion.p 
            className="text-xl text-white/80 mb-8 max-w-2xl mx-auto"
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            Try our sleep position monitor for yourself.
          </motion.p>
          
          <motion.div 
            className="mb-12"
            variants={slideInFromLeft(0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <a 
              href="#" 
              className="inline-block bg-white text-primary px-8 py-4 rounded-full font-medium text-lg hover:bg-accent transition-colors"
              onClick={(e) => {
                e.preventDefault();
                alert("Coming soon! The app will be available shortly.");
              }}
            >
              <i className="fab fa-apple mr-2"></i> Download on App Store
            </a>
            <p className="text-white/70 mt-3 text-sm">Early access - Free for a limited time</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
