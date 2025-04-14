import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";
import { Microscope } from "lucide-react";

export default function Science() {
  const researchTopics = [
    {
      title: "Sleep Position & Respiratory Health",
      description: "Current research on how different sleep positions affect breathing patterns, oxygen levels, and severity of snoring and sleep apnea.",
    },
    {
      title: "Positional Therapy Efficacy",
      description: "Studies exploring the effectiveness of position-based interventions for sleep-disordered breathing compared to traditional treatments.",
    },
    {
      title: "Technology in Sleep Monitoring",
      description: "Advancements in smartphone and wearable technology for accurate sleep position tracking and intervention.",
    },
    {
      title: "Long-term Benefits of Position Training",
      description: "Research on how consistent sleep position training can lead to sustained improvements in sleep quality and health outcomes.",
    }
  ];

  return (
    <section id="science" className="py-16 bg-gray-50">
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
              <Microscope className="h-6 w-6 text-primary" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The Science Behind RePosa</h2>
          <p className="text-gray-600">
            Our approach is grounded in scientific research on sleep positioning and its effects on breathing and sleep quality.
          </p>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto"
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm mb-8">
            <h3 className="text-xl font-bold mb-4 text-primary">Research Foundation</h3>
            <p className="text-gray-700 mb-6">
              Sleep science has established clear connections between body positioning during sleep and respiratory 
              function. Supine (back) sleeping has been shown to worsen snoring and sleep apnea in many individuals, 
              while lateral (side) positioning can significantly reduce these symptoms.
            </p>
            <p className="text-gray-700">
              RePosa's technology builds on this research, using smartphone sensors to detect sleep position with 
              high accuracy and delivering timely interventions that encourage healthier positioning without 
              disturbing deep sleep cycles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {researchTopics.map((topic, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm"
                variants={fadeIn('up', 0.3 + (index * 0.1))}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold mb-2 text-primary">{topic.title}</h3>
                <p className="text-gray-700">{topic.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Our commitment to scientific validity means we're constantly refining the RePosa 
              algorithm based on the latest research and user feedback.
            </p>
            <p className="text-gray-500 text-sm italic">
              Note: RePosa is designed as a supportive tool for better sleep positioning and is not intended 
              to diagnose or treat medical conditions. Always consult healthcare providers for medical concerns.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}