import React from "react";
import { motion } from "framer-motion";
import { useReveal } from "../hooks/useReveal";
import { fadeUpVariants } from "../constants/animations";

export function LeadershipSection() {
  const { ref, isInView } = useReveal();

  const leadershipItems = [
    {
      title: "STRATEGIC ARCHITECTURE",
      desc: "Designing scalable systems that align technology with business growth",
    },
    {
      title: "ENGINEERING CULTURE",
      desc: "Building high-performance teams focused on execution and ownership",
    },
    {
      title: "SYSTEMS THINKING",
      desc: "Solving complex problems through structured, scalable approaches",
    },
    {
      title: "GLOBAL EXECUTION",
      desc: "Leading distributed teams to deliver consistent results at scale",
    },
  ];

  return (
    <section id="leadership" ref={ref} className="py-32 md:py-40 bg-light-bg">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-8"
        >
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            className="flex items-center gap-4"
          >
            <div className="w-9 h-px bg-accent-red"></div>
            <span className="label-caps text-accent-red">
              LEADERSHIP PHILOSOPHY
            </span>
          </motion.div>

          <motion.h2
            custom={1}
            variants={fadeUpVariants}
            className="title-serif text-black text-5xl md:text-6xl"
          >
            LEADING WITH PURPOSE
          </motion.h2>

          <motion.p
            custom={2}
            variants={fadeUpVariants}
            className="font-sans font-light text-black text-opacity-70 leading-relaxed max-w-2xl text-lg"
          >
            At Archphaze, my approach to leadership is rooted in systems
            thinking and execution clarity. I focus on architecting scalable
            technology and empowering teams to bridge the gap between
            engineering excellence and measurable business impact.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUpVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16"
          >
            {leadershipItems.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                variants={fadeUpVariants}
                className="border-l-4 border-accent-red pl-8 py-4"
              >
                <h3 className="font-serif font-bold text-black text-xl mb-2">
                  {item.title}
                </h3>
                <p className="text-black text-opacity-70 font-light">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
