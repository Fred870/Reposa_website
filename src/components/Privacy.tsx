import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";
import { LockKeyhole } from "lucide-react";

export default function Privacy() {
  return (
    <section id="privacy" className="py-16 bg-gray-50">
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
              <LockKeyhole className="h-6 w-6 text-primary" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Privacy Policy</h2>
          <p className="text-gray-600">
            Your privacy is our priority. All data stays on your device, always.
          </p>
        </motion.div>

        <motion.div 
          className="max-w-3xl mx-auto bg-white rounded-xl p-6 md:p-8 shadow-sm"
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="mb-4 text-right text-sm text-gray-500">
            Effective Date: Apr 13, 2025
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">1. No Data Collection</h3>
              <p className="text-gray-600">
                We do not collect, store, or transmit any personal data. RePosa works completely offline and all data stays on your device.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">2. Local Data Storage</h3>
              <p className="text-gray-600">
                Your sleep data is only stored locally on your device. It is never uploaded or shared.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">3. No Analytics or Tracking</h3>
              <p className="text-gray-600">
                RePosa does not use analytics tools, advertising trackers, or third-party SDKs.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">4. Device Permissions</h3>
              <p className="text-gray-600">
                We use device motion data to detect your sleep position. This data is only processed locally and never leaves your device.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">5. Your Control</h3>
              <p className="text-gray-600">
                You can delete all data at any time from the Settings. Removing the app also deletes all data.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">6. Contact</h3>
              <p className="text-gray-600">
                If you have questions, you can contact us at <a href="mailto:info@reposa-sleep.rest" className="text-primary hover:underline">info@reposa-sleep.rest</a>.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}