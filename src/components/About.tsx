import { motion } from "framer-motion";
import { Stethoscope, Brain, Heart, CheckCircle } from "lucide-react";
import { fadeIn, slideInFromLeft, slideInFromRight } from "@/lib/motion";

export default function About() {
  const infoCards = [
    {
      icon: <Stethoscope className="text-primary h-6 w-6" />,
      title: "Reduced Airway Obstruction",
      description: "Proper sleep positioning helps maintain open airways, reducing the likelihood of obstruction that causes snoring and sleep apnea episodes."
    },
    {
      icon: <Brain className="text-primary h-6 w-6" />,
      title: "Improved Brain Function",
      description: "Better sleep positioning reduces sleep interruptions, leading to deeper sleep cycles and improved cognitive function during waking hours."
    },
    {
      icon: <Heart className="text-primary h-6 w-6" />,
      title: "Enhanced Heart Health",
      description: "By reducing sleep apnea episodes, optimal sleep positioning helps maintain healthy oxygen levels and reduces strain on your cardiovascular system."
    }
  ];

  const benefits = [
    "Continuously improved with user data",
    "Non-invasive alternative to traditional treatments"
  ];

  return (
    <section className="py-16 bg-white" id="about">
      <div className="container mx-auto px-4">
        

        <div className="grid md:grid-cols-3 gap-8">
          {infoCards.map((card, index) => (
            <motion.div 
              key={card.title}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-gray-100"
              variants={fadeIn('up', 0.2 * (index + 1))}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <div className="bg-accent w-12 h-12 rounded-full flex items-center justify-center mb-4">
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 bg-accent rounded-2xl overflow-hidden"
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row">
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
              <div className="mb-6">
                {benefits.map((benefit, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center mb-2"
                    variants={slideInFromRight(0.3 + (index * 0.1))}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="text-primary mr-2 h-5 w-5" />
                    <span className="font-medium">{benefit}</span>
                  </motion.div>
                ))}
              </div>
              <motion.a 
                href="#" 
                className="text-primary font-medium flex items-center hover:underline"
                variants={slideInFromRight(0.6)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                Learn about relevant research <i className="fas fa-arrow-right ml-1"></i>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}