import { motion } from "framer-motion";
import { fadeIn, slideInFromLeft, slideInFromRight } from "@/lib/motion";

export default function HowItWorks() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-accent/30" id="how-it-works">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4 text-primary">Why It Works</h2>
          <p className="text-gray-700">
            Positional therapy has been clinically demonstrated to reduce apnea events by 
            20-50% in clinical studies. RePosa takes this proven approach and makes it 
            accessible to everyone.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row bg-accent rounded-2xl overflow-hidden">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1573897683562-5395916b856a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Person sleeping peacefully" 
              className="h-full w-full object-cover"
            />
          </div>
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <motion.h3 
              className="text-2xl font-bold mb-4 text-primary"
              variants={slideInFromRight(0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              Research-Based Approach
            </motion.h3>
            <motion.p 
              className="mb-4 text-gray-700"
              variants={slideInFromRight(0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              RePosa's technology is based on clinical studies demonstrating that positional therapy
              can reduce apnea-hypopnea index (AHI) by up to 60% in position-dependent sleep apnea patients.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}