import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, slideInFromLeft, slideInFromRight } from "@/lib/motion";

export default function Hero() {
  const [rating, setRating] = useState(0);
  const [reviewCount, setReviewCount] = useState(0);

  useEffect(() => {
    async function fetchAppRating() {
      try {
        const APP_ID = "6744608500"; // your App Store ID
        const res = await fetch(
          `https://itunes.apple.com/lookup?id=${APP_ID}&country=us`,
        );
        const data = await res.json();
        if (data.results?.length) {
          const info = data.results[0];
          setRating(
            info.averageUserRatingForCurrentVersion || info.averageUserRating,
          );
          setReviewCount(
            info.userRatingCountForCurrentVersion || info.userRatingCount,
          );
        }
      } catch (err) {
        console.error("Failed to load App Store rating", err);
      }
    }
    fetchAppRating();
  }, []);

  const renderStars = (value: number) => {
    return Array.from({ length: 5 }, (_, i) => {
      const starNum = i + 1;
      const isFull = value >= starNum;
      const isHalf = !isFull && value >= starNum - 0.5;
      const iconClass = isFull
        ? "fas fa-star"
        : isHalf
          ? "fas fa-star-half-alt"
          : "far fa-star";
      return <i key={i} className={`${iconClass} text-yellow-400`} />;
    });
  };

  return (
    <section className="pt-24 pb-16 hero-gradient" id="hero">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 md:pr-8 mb-8 md:mb-0"
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-primary">
              Track and Optimize Your Sleep Position
            </h1>
            <p className="text-lg mb-6 text-gray-700">
              RePosa uses your smartphone sensors to monitor and improve your
              posture during sleep, reducing snoring and sleep apnea symptoms
              for better rest.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <motion.a
                href="https://apps.apple.com/us/app/reposa/id6744608500?ppid=fa0b9ed5-ec82-47da-95a7-a431c4b9b4f1"
                className="bg-primary text-white px-6 py-3 rounded-full font-medium flex items-center justify-center hover:bg-primary/90 transition-colors"
                variants={slideInFromLeft(0.5)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <i className="fab fa-apple mr-2"></i> Download on App Store
              </motion.a>
              <motion.a
                href="#how-it-works"
                className="bg-white text-primary px-6 py-3 rounded-full font-medium flex items-center justify-center border border-primary hover:bg-accent transition-colors"
                variants={slideInFromLeft(0.7)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                Learn How It Works
              </motion.a>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-2">
                {[
                  "bg-gray-300",
                  "bg-gray-200",
                  "bg-gray-400",
                  "bg-gray-300",
                ].map((bg, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full ${bg} border-2 border-white`}
                  />
                ))}
              </div>
              <div className="text-sm">
                <div className="flex items-center">
                  {renderStars(rating)}
                  <span className="ml-1 font-medium">{rating.toFixed(1)}</span>
                </div>
                <p className="text-gray-600">
                  from {reviewCount.toLocaleString()} reviews
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="md:w-1/2 relative"
            variants={slideInFromRight(0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className="relative mx-auto md:ml-auto md:mr-0 w-full max-w-xs">
              <img
                src="/attached_assets/hero_image.webp"
                alt="RePosa sleep position monitor showing sleep position graphs and alerts"
                className="rounded-3xl app-shadow"
              />
              <motion.div
                className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
              >
                <div className="bg-accent p-1 rounded-full">
                  <i className="fas fa-moon text-primary text-xl"></i>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
