import { motion } from "framer-motion";
import { fadeIn, slideInFromLeft } from "@/lib/motion";
import { Apple } from "lucide-react";

export default function DownloadCTA() {
  const stats = [
    { value: "98%", label: "Reduction in Snoring" },
    { value: "84%", label: "Improved Sleep Quality" },
    { value: "91%", label: "Would Recommend" }
  ];

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
            Transform your sleep quality and reduce snoring with our science-backed 
            sleep position monitoring technology.
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
            >
              <Apple className="inline-block mr-2 h-5 w-5" /> Download on App Store
            </a>
            <p className="text-white/70 mt-3 text-sm">Early access - Free for a limited time</p>
          </motion.div>
          
          <div className="flex flex-wrap justify-center items-center gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="bg-white/10 backdrop-blur-sm p-4 rounded-xl text-white text-center w-36"
                variants={fadeIn('up', 0.4 + (index * 0.1))}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <div className="text-3xl font-bold">{stat.value}</div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
