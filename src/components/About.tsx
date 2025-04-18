import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";

export default function About() {
  return (
    <section className="py-16 bg-white" id="about">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h1 className="text-3xl font-bold mb-4 text-primary">
            About RePosa – The Smart Sleep Position Tracker
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            RePosa is a minimal, sensor-based <strong>sleep position tracker</strong> that uses your smartphone to monitor and improve how you sleep. Unlike bulky wearables or expensive sleep position trainers, RePosa lets you simply place your phone in your pocket or anywhere else on your body. From there, it tracks whether you're on your back, side, or stomach—helping reduce <strong>snoring</strong> and <strong>position-dependent sleep apnea</strong>.
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto space-y-8 text-left text-gray-700"
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div>
            <h2 className="text-xl font-semibold mb-2">What is a Sleep Position Monitor?</h2>
            <p>
              A <strong>sleep position monitor</strong> helps track the positions you sleep in—like whether you're on your back, side, or stomach. Studies show that back-sleeping often worsens <strong>snoring</strong> and <strong>obstructive sleep apnea</strong> (OSA). RePosa helps by identifying these positions and gently nudging you to shift when needed.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">How RePosa Works</h2>
            <p>
              RePosa uses your phone’s built-in motion sensors to monitor your position. After a short calibration, it runs quietly in the background. If you stay in a position known to worsen symptoms—like sleeping on your back—it will gently vibrate or play a subtle sound to encourage side-sleeping. In the morning, you get a detailed report showing your <strong>sleep position timeline</strong> and how many nudges occurred.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Who is RePosa For?</h2>
            <p>
              RePosa is ideal for people with <strong>positional sleep apnea</strong>, chronic <strong>snorers</strong>, and anyone interested in improving sleep quality naturally. It’s a great option for those who can’t tolerate CPAP machines or want a <strong>non-invasive alternative</strong>.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">How is RePosa Different?</h2>
            <p>
              Unlike other <strong>sleep position trainers</strong> like Night Shift or SleepSense, RePosa is 100% app-based. No wearables or neck straps needed. Compared to apps like SomnoPose or Torena, your phone does not need to be taped to your body in the perfect orientation. Instead, RePosas algorithm learns from any phone placement and calibrates its tracking algorithm. It is <strong>free during beta</strong>, easy to test, and designed with privacy and simplicity in mind.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
            <p>
              We believe sleep solutions should be affordable and accessible. RePosa was created to give people better sleep without invasive tech, subscriptions, or high costs—just smarter use of what’s already in your pocket.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}