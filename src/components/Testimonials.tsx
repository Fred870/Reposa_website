import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Michael T.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      quote: "My wife was considering sleeping in another room because of my snoring. After using RePosa for just two weeks, she says it's like sleeping next to a different person. We're both getting better sleep now!"
    },
    {
      name: "Sarah K.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 4.5,
      quote: "I was skeptical that my phone could help with my mild sleep apnea, but the difference is remarkable. I wake up with more energy and my morning headaches are completely gone. The app is so easy to use too!"
    },
    {
      name: "David M.",
      avatar: "https://randomuser.me/api/portraits/men/67.jpg",
      rating: 5,
      quote: "My doctor recommended trying positional therapy before considering a CPAP machine. RePosa has been the perfect solution. My sleep quality scores from my smartwatch have improved by over 40%!"
    }
  ];

  return (
    <section className="py-16 bg-accent/30">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4 text-primary">What Our Users Say</h2>
          <p className="text-gray-700">
            Real stories from real people who have transformed their sleep with RePosa.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.name}
              className="bg-white p-6 rounded-2xl shadow-md"
              variants={fadeIn('up', 0.2 * (index + 1))}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <div className="flex text-yellow-400">
                    {Array(Math.floor(testimonial.rating)).fill(0).map((_, i) => (
                      <i key={`star-${testimonial.name}-${i}`} className="fas fa-star"></i>
                    ))}
                    {testimonial.rating % 1 === 0.5 && (
                      <i className="fas fa-star-half-alt"></i>
                    )}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
