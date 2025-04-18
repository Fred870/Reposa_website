import { motion } from "framer-motion";
import { Heart, Brain, Weight, Smile, Users, Battery } from "lucide-react";
import { fadeIn, slideInFromLeft, slideInFromRight } from "@/lib/motion";

export default function Benefits() {
  const healthBenefits = [
    {
      icon: <Heart className="text-white h-5 w-5" />,
      title: "Reduce Sleep Apnea Episodes",
      description:
        "Sleeping in side or stomach positions significantly reduces the frequency and severity of obstructive sleep apnea by preventing the airway from collapsing during sleep.",
    },
    {
      icon: <Brain className="text-white h-5 w-5" />,
      title: "Less Snoring, Deeper Sleep",
      description:
        "RePosa helps you stay off your back — a key trigger for snoring — resulting in quieter nights and more restorative sleep for both you and your partner.",
    },
    {
      icon: <Weight className="text-white h-5 w-5" />,
      title: "Relieve Neck and Back Pain",
      description:
        "Promoting side sleeping helps reduce pressure on the spine, alleviating chronic neck and lower back pain over time.",
    },
  ];

  const lifestyleBenefits = [
    {
      icon: <Smile className="text-white h-5 w-5" />,
      title: "Wake Up Refreshed",
      description:
        "By helping you avoid positions that impair breathing or increase pain, RePosa enables more continuous sleep and fewer awakenings.",
    },
    {
      icon: <Users className="text-white h-5 w-5" />,
      title: "No More Elbow Nudges",
      description:
        "Partners of snorers often sleep better too — RePosa promotes quieter nights for everyone in the room.",
    },
    {
      icon: <Battery className="text-white h-5 w-5" />,
      title: "Sustain Energy Throughout the Day",
      description:
        "More oxygen and deeper sleep cycles mean your body can restore itself properly, reducing daytime fatigue.",
    },
  ];

  const keyPoints = [
    "Non-invasive alternative to CPAP",
    "No special equipment required",
    "Adaptive to your unique sleeping style",
  ];

  return (
    <section className="py-16 bg-white" id="benefits">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4 text-primary">
            Benefits Beyond Better Sleep
          </h2>
          <p className="text-gray-700">
            RePosa doesn't just provide positional therapy for sleep apnea — it
            actively helps reduce snoring, relieves pain, and leads to better
            sleep for you and those around you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            className="bg-accent/30 p-8 rounded-2xl"
            variants={slideInFromLeft(0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-primary">
              Health Improvements
            </h3>

            <div className="space-y-6">
              {healthBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  className="flex"
                  variants={fadeIn("up", 0.2 * (index + 1))}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      {benefit.icon}
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold mb-1">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="bg-accent/30 p-8 rounded-2xl"
            variants={slideInFromRight(0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-primary">
              Lifestyle Benefits
            </h3>

            <div className="space-y-6">
              {lifestyleBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  className="flex"
                  variants={fadeIn("up", 0.2 * (index + 1))}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      {benefit.icon}
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold mb-1">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-16"
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="bg-primary rounded-2xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center text-white">
                <motion.h3
                  className="text-2xl font-bold mb-4"
                  variants={slideInFromLeft(0.2)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  What makes RePosa Sleep Position Tracker Great
                </motion.h3>
                <motion.p
                  className="mb-6"
                  variants={slideInFromLeft(0.3)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  Sleeping on your back often worsens airway obstruction,
                  contributing to snoring and sleep apnea. RePosa takes the
                  guess work out of which sleeping positions your body favors
                  and gently encourages healthier positions throughout the night
                  — reducing risks and improving rest.
                </motion.p>
                <div className="mb-6">
                  {keyPoints.map((point, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center mb-2"
                      variants={slideInFromLeft(0.3 + index * 0.1)}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                    >
                      <i className="fas fa-check-circle mr-2"></i>
                      <span>{point}</span>
                    </motion.div>
                  ))}
                </div>
                <motion.a
                  href="#app-store"
                  className="bg-white text-primary px-6 py-3 rounded-full font-medium inline-flex items-center justify-center hover:bg-accent transition-colors"
                  variants={slideInFromLeft(0.6)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  Start Sleeping Better
                </motion.a>
              </div>
              <div className="md:w-1/2">
                <img
                  src="attached_assets/whyitworks.webp"
                  alt="Research behind the Position detection."
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
