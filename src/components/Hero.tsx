import { motion } from "framer-motion";
import { Apple } from "lucide-react";
import { fadeIn, slideInFromLeft, slideInFromRight } from "@/lib/motion";

export default function Hero() {
  return (
    <section className="pt-24 pb-16 hero-gradient" id="hero">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 md:pr-8 mb-8 md:mb-0"
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-primary">
              Optimize Your Sleep Position
            </h1>
            <p className="text-lg mb-6 text-gray-700">
              RePosa utilizes your smartphone sensors to monitor and improve sleeping positions, 
              reducing snoring and sleep apnea symptoms for better rest.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <motion.a 
                href="#app-store" 
                className="bg-primary text-white px-6 py-3 rounded-full font-medium flex items-center justify-center hover:bg-primary/90 transition-colors"
                variants={slideInFromLeft(0.5)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <Apple className="mr-2 h-5 w-5" /> Download on App Store
              </motion.a>
              <motion.a 
                href="#how-it-works" 
                className="bg-white text-primary px-6 py-3 rounded-full font-medium flex items-center justify-center border border-primary hover:bg-accent transition-colors"
                variants={slideInFromLeft(0.7)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                Learn How It Works
              </motion.a>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-2">
                {[
                  { bg: "bg-gray-300" },
                  { bg: "bg-gray-200" },
                  { bg: "bg-gray-400" },
                  { bg: "bg-gray-300" }
                ].map((item, index) => (
                  <div 
                    key={`avatar-${index}`}
                    className={`w-8 h-8 rounded-full ${item.bg} border-2 border-white`}
                  />
                ))}
              </div>
              <div className="text-sm">
                <div className="flex items-center">
                  {Array(4).fill(0).map((_, index) => (
                    <i key={`star-full-${index}`} className="fas fa-star text-yellow-400"></i>
                  ))}
                  <i className="fas fa-star-half-alt text-yellow-400"></i>
                  <span className="ml-1 font-medium">4.8/5</span>
                </div>
                <p className="text-gray-600">from 2,000+ reviews</p>
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="md:w-1/2 relative"
            variants={slideInFromRight(0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className="relative mx-auto md:ml-auto md:mr-0 w-full max-w-xs">
              <img 
                src="/attached_assets/appstore_image_03.jpeg" 
                alt="Smartphone with RePosa app showing sleep tracking interface" 
                className="rounded-3xl app-shadow"
              />
              <motion.div 
                className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
              >
                <div className="bg-accent p-1 rounded-full">
                  <i className="fas fa-moon text-primary text-xl"></i>
                </div>
              </motion.div>
              <motion.div 
                className="absolute -bottom-4 -left-4 bg-white rounded-full py-1 px-3 shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: "spring", stiffness: 200 }}
              >
                <div className="flex items-center">
                  <i className="fas fa-chart-line text-primary mr-1"></i>
                  <span className="text-sm font-medium">98% Less Snoring</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
