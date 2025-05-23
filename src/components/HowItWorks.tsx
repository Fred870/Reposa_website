import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Smart Calibration",
      description:
        "The phone can be placed anywhere on your body, like in your pocket, and uses a smart algorithm to learn your sleeping positions.",
      image: "/attached_assets/calibration.webp",
      alt: "smart position calibration in the users pocket.",
    },
    {
      number: 2,
      title: "Night Monitoring",
      description:
        "While you sleep, RePosa continuously monitors your position using advanced motion and position detection algorithms.",
      image: "/attached_assets/side_sleeping.webp",
      alt: "Sleep position detection active while sleeping.",
    },
    {
      number: 3,
      title: "Gentle Guidance",
      description:
        "When suboptimal positions are detected, RePosa provides subtle vibration cues or optional sound alerts that encourage repositioning without fully waking you.",
      image: "/attached_assets/nudging.webp",
      alt: "Wrong sleeping position alert when lying on back.",
    },
  ];

  return (
    <section
      className="py-16 bg-gradient-to-b from-white to-accent/30"
      id="how-it-works"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4 text-primary">
            How the Sleep Position Tracking Works
          </h2>
          <p className="text-gray-700">
            Using your smartphone's built-in sensors, RePosa monitors and
            optimizes your sleep position throughout the night with minimal
            setup and maximum results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="relative"
              variants={fadeIn("up", 0.2 * (index + 1))}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <div className="absolute -left-4 top-0 w-12 h-12 bg-primary rounded-full text-white flex items-center justify-center text-xl font-bold">
                {step.number}
              </div>
              <div className="pl-10">
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
                <img
                  src={step.image}
                  alt={step.alt}
                  className="rounded-xl shadow-md w-full object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
