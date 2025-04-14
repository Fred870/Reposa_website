import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";
import { FileText } from "lucide-react";

export default function Terms() {
  return (
    <section id="terms" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-12"
          variants={fadeIn('up', 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <FileText className="h-6 w-6 text-primary" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Terms of Use</h2>
          <p className="text-gray-600">
            Please read these terms carefully before using RePosa.
          </p>
        </motion.div>

        <motion.div 
          className="max-w-3xl mx-auto bg-white rounded-xl p-6 md:p-8 shadow-sm"
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="space-y-6">
            <div>
              <p className="text-gray-600 mb-4">
                By using this app, you agree to use it for informational and personal purposes only.
              </p>
              <p className="text-gray-600 mb-4">
                The app provides sleep position tracking as a supportive tool and does not replace medical advice.
              </p>
              <p className="text-gray-600 mb-4">
                The developer is not responsible for any consequences resulting from the use or misuse of the app.
              </p>
              <p className="text-gray-600 mb-4">
                Usage of the app is at your own risk. You may stop using the app at any time.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}