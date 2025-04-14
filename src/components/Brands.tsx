import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";

export default function Brands() {
  const brands = [
    {
      name: "Apple",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png"
    },
    {
      name: "The New York Times",
      logo: "https://1000logos.net/wp-content/uploads/2021/05/The-New-York-Times-logo.png"
    },
    {
      name: "Forbes",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Forbes_Logo.svg/2560px-Forbes_Logo.svg.png"
    },
    {
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png"
    },
    {
      name: "MIT",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/MIT_logo.svg/1280px-MIT_logo.svg.png"
    }
  ];

  return (
    <section className="py-8 bg-accent/50">
      <div className="container mx-auto px-4">
        <motion.p 
          className="text-center text-gray-500 mb-6 text-sm"
          variants={fadeIn('up', 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          FEATURED IN
        </motion.p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {brands.map((brand, index) => (
            <motion.div 
              key={brand.name}
              className="grayscale opacity-70 hover:opacity-100 transition-opacity"
              variants={fadeIn('up', 0.1 * (index + 1))}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <img src={brand.logo} alt={brand.name} className="h-6 md:h-8" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
