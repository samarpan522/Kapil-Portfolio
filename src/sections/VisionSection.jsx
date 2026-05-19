import React from "react";
import { motion } from "framer-motion";
import { useReveal } from "../hooks/useReveal";
import { fadeUpVariants } from "../constants/animations";

export function VisionSection() {
  const { ref, isInView } = useReveal();

  const visionItems = [
    {
      title: "PRODUCT INNOVATION",
      desc: "Driving the creation of transformative digital products that solve real-world problems and unlock new market opportunities.",
    },
    {
      title: "ELITE SERVICES",
      desc: "Delivering world-class solutions that empower businesses with reliability, performance, and strategic advantage.",
    },
    {
      title: "STRATEGIC SCALE",
      desc: "Building scalable ecosystems that align technology with long-term business growth and global expansion.",
    },
  ];

  return (
    <section id="vision" ref={ref} className="py-32 md:py-40 bg-dark-bg">
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
            <span className="label-caps text-accent-red">OUR DIRECTION</span>
          </motion.div>

          <motion.h2
            custom={1}
            variants={fadeUpVariants}
            className="title-serif text-white text-5xl md:text-6xl"
          >
            Designing What’s Next
          </motion.h2>

          <motion.p
            custom={2}
            variants={fadeUpVariants}
            className="font-sans font-light text-text-gray leading-relaxed max-w-2xl text-lg"
          >
            At Archphaze, we build technology that connects human needs with
            intelligent systems. We focus on creating scalable, reliable, and
            future-ready digital solutions that enable businesses to innovate,
            grow, and lead with confidence in a rapidly evolving digital world.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUpVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          >
            {visionItems.map((item, i) => (
              <div
                key={item.title}
                className="border border-white border-opacity-10 p-8 rounded-lg"
              >
                <h3 className="font-serif font-bold text-accent-red text-xl mb-3">
                  {item.title}
                </h3>
                <p className="text-text-gray font-light">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
