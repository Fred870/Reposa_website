import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";

export default function About() {
  return (
    <section className="py-16 bg-white" id="about">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4 text-primary">About RePosa</h2>
          <p className="text-gray-700">
            Using RePosa doesn't just improve your sleep—it transforms your overall health and daily life quality.
          </p>
        </motion.div>
      </div>
    </section>
  );
}