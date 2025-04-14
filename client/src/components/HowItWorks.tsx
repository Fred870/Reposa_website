import { motion } from "framer-motion";
import { fadeIn, slideInFromLeft, slideInFromRight } from "@/lib/motion";

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Smart Calibration",
      description: "Place your phone on your mattress and follow the simple setup process to calibrate the app to your specific bed and sleeping environment.",
      image: "https://images.unsplash.com/photo-1575990322357-b770ded7166e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
      alt: "Phone calibration on mattress"
    },
    {
      number: 2,
      title: "Night Monitoring",
      description: "While you sleep, RePosa continuously monitors your position using advanced motion and position detection algorithms.",
      image: "https://images.unsplash.com/photo-1580046124913-5be15a910817?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
      alt: "Sleep monitoring visualization"
    },
    {
      number: 3,
      title: "Gentle Guidance",
      description: "When suboptimal positions are detected, RePosa provides subtle vibration cues that encourage repositioning without fully waking you.",
      image: "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
      alt: "Person changing sleep position"
    }
  ];

  const stats = [
    { value: "87%", label: "Reduction in snoring events" },
    { value: "53%", label: "Fewer position changes" },
    { value: "2.1h", label: "More deep sleep" }
  ];

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
          <h2 className="text-3xl font-bold mb-4 text-primary">How RePosa Works</h2>
          <p className="text-gray-700">
            Using your smartphone's built-in sensors, RePosa monitors and optimizes your sleep position
            throughout the night with minimal setup and maximum results.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <motion.div 
              key={step.number}
              className="relative"
              variants={fadeIn('up', 0.2 * (index + 1))}
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
                  className="rounded-xl shadow-md"
                />
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-20 bg-white rounded-2xl shadow-lg overflow-hidden"
          variants={fadeIn('up', 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 md:pr-8 mb-8 md:mb-0">
                <motion.h3 
                  className="text-2xl font-bold mb-4 text-primary"
                  variants={slideInFromLeft(0.2)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  Smart Sleep Analytics
                </motion.h3>
                <motion.p 
                  className="mb-6 text-gray-700"
                  variants={slideInFromLeft(0.3)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  Beyond real-time guidance, RePosa provides comprehensive sleep data and personalized
                  insights to help you understand and improve your sleep patterns over time.
                </motion.p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {stats.map((stat, index) => (
                    <motion.div 
                      key={index}
                      className="bg-accent p-4 rounded-lg"
                      variants={slideInFromLeft(0.3 + (index * 0.1))}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                    >
                      <div className="font-bold text-3xl text-primary">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <motion.div 
                className="md:w-1/3"
                variants={slideInFromRight(0.4)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1563306406-e66174fa3787?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80" 
                  alt="Sleep analytics dashboard" 
                  className="rounded-xl shadow-md"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
