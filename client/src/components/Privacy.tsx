import { motion } from "framer-motion";
import { Shield, Lock, Database } from "lucide-react";
import { fadeIn, slideInFromLeft } from "@/lib/motion";

export default function Privacy() {
  const privacyPoints = [
    {
      icon: <Shield className="text-white h-5 w-5" />,
      title: "Complete Privacy",
      description: "No user data is ever collected or transmitted to our servers. Your sleep data remains 100% private."
    },
    {
      icon: <Database className="text-white h-5 w-5" />,
      title: "On-Device Storage",
      description: "All your sleep data is stored securely on your device, giving you complete control over your information."
    },
    {
      icon: <Lock className="text-white h-5 w-5" />,
      title: "No Accounts Required",
      description: "RePosa works without requiring account creation or registration, minimizing your digital footprint."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-accent/30 to-white" id="privacy">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4 text-primary">Your Privacy Matters</h2>
          <p className="text-gray-700">
            RePosa is built with privacy as a core principle. We believe your sleep data
            belongs to you alone.
          </p>
        </motion.div>
        
        <motion.div 
          className="bg-primary rounded-2xl overflow-hidden"
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-3 gap-8">
              {privacyPoints.map((point, index) => (
                <motion.div 
                  key={point.title}
                  className="flex flex-col"
                  variants={slideInFromLeft(0.2 + (index * 0.1))}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      {point.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{point.title}</h4>
                    <p className="text-white/80">{point.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              className="mt-10 pt-8 border-t border-white/20 text-center"
              variants={fadeIn('up', 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <p className="mb-4">
                We designed RePosa with the belief that your sleep health can be improved without
                compromising your privacy. No internet connection is required for the core functionality
                of the app.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}