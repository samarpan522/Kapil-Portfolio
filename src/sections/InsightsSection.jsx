import React from "react";
import { motion } from "framer-motion";
import { useReveal } from "../hooks/useReveal";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.215, 0.61, 0.355, 1],
      delay: i * 0.1,
    },
  }),
};

export function InsightsSection() {
  const { ref, isInView } = useReveal();

  const insights = [
    {
      title: "WHY REMOTE-FIRST TEAMS OUTPERFORM TRADITIONAL STRUCTURES",
      excerpt:
        "Remote organizations succeed not because of location independence, but because they enforce clarity, accountability, and structured communication at scale.",
      date: "March 2026",
    },
    {
      title: "AI IS NOT AUTOMATION — IT IS DECISION AUGMENTATION",
      excerpt:
        "The real transformation of AI is not replacing human work, but enhancing how decisions are made inside systems, products, and organizations.",
      date: "February 2026",
    },
    {
      title: "SCALE FAILS WITHOUT SYSTEM DESIGN",
      excerpt:
        "Sustainable growth is not driven by speed alone, but by the architecture that supports reliability, performance, and continuous iteration.",
      date: "January 2026",
    },
  ];

  return (
    <section
      id="insights"
      ref={ref}
      className="py-32 md:py-48 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Section Header */}
          <div className="space-y-6">
            <motion.div
              custom={0}
              variants={fadeUpVariants}
              className="flex items-center gap-4"
            >
              <div className="w-10 h-px bg-red-600"></div>
              <span className="text-[10px] uppercase tracking-[0.4em] text-red-600 font-bold">
                Thought Leadership
              </span>
            </motion.div>

            <motion.h2
              custom={1}
              variants={fadeUpVariants}
              className="font-serif text-black text-5xl md:text-7xl lg:text-8xl font-light leading-[0.9] tracking-tighter"
            >
              INSIGHTS <br />
              <span className="italic text-black/20">& IDEAS.</span>
            </motion.h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
            {insights.map((insight, i) => (
              <motion.div
                key={insight.title}
                custom={i + 2}
                variants={fadeUpVariants}
                className="group relative p-8 md:p-10 border border-black/10 bg-gray-50 hover:bg-white transition-all duration-500"
              >
                <div className="flex justify-between items-start mb-12">
                  <span className="text-red-600 text-[10px] tracking-[0.3em] font-bold">
                    {insight.date}
                  </span>
                  <div className="w-2 h-2 border-t border-r border-black/10 group-hover:border-red-600 transition-colors" />
                </div>

                <h3 className="font-serif text-black text-xl md:text-2xl leading-tight mb-6 group-hover:text-red-500 transition-colors duration-300">
                  {insight.title}
                </h3>

                {/* Excerpt with improved tracking and leading for readability */}
                <p className="text-black/60 font-light text-sm leading-relaxed tracking-wide">
                  {insight.excerpt}
                </p>

                {/* Background Watermark Index */}
                <div className="absolute right-6 bottom-8 text-6xl font-serif italic text-black/[0.02] pointer-events-none group-hover:text-red-600/[0.03] transition-colors duration-500">
                  0{i + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
