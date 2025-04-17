import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "How does RePosa detect my sleep position?",
      answer:
        "RePosa uses your smartphone's built-in gyroscope sensors to detect your sleep position. Once calibrated to your sleeping style and phone placement, it can accurately identify when you're sleeping on your back, side, or stomach, and track position changes throughout the night.",
    },
    {
      question: "How do I stop sleeping on my back?",
      answer:
        "The optional nudging feature of the app lets you decide which positions are unfavorable. When the sleep position tracker detects these positions it can gently remind you to turn around.",
    },
    {
      question: "Will the vibrations wake me up?",
      answer:
        "RePosa is designed to provide gentle guidance without fully waking you. The app starts with very subtle vibrations that gradually increase only if necessary. You can add sound alerts in the app settings to find what works best for you.",
    },
    {
      question: "Is RePosa a replacement for medical devices like CPAP?",
      answer:
        "RePosa is not intended to replace prescribed medical devices like CPAP for severe sleep apnea. However, it can be an effective complementary solution and may help some users with mild to moderate positional sleep apnea. Always consult with your healthcare provider before making changes to your sleep apnea treatment plan.",
    },
    {
      question: "Will RePosa drain my phone battery overnight?",
      answer:
        "RePosa is optimized for low power consumption and typically uses about 10% of battery over an 8-hour sleep session.",
    },
  ];

  return (
    <section className="py-16 bg-white" id="faq">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4 text-primary">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-700">
            Get answers to common questions about RePosa and how it can help
            improve your sleep.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={`faq-${index}`}
                variants={fadeIn("up", 0.2 * (index + 1))}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <AccordionItem
                  value={`faq-${index}`}
                  className="border border-gray-200 rounded-xl overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 text-left bg-white hover:bg-accent/50 transition-colors">
                    <span className="font-semibold">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
