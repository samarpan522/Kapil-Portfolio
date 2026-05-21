import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useReveal } from "../hooks/useReveal";
import { STORY_CONTENT } from "../constants/data";
import { fadeUpVariants } from "../constants/animations";

export function PhilosophySection() {
  const { ref, isInView } = useReveal();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const PHILOSOPHY_TRUTHS = [
    "Complexity is a distraction; simplicity is the highest standard of sophistication.",
    "True innovation isn't just about what you build, but what you have the courage to leave out.",
    "Reliability is the only foundation upon which a digital legacy can be scaled.",
  ];

  return (
    <section
      id="philosophy"
      ref={ref}
      className="py-32 md:py-48 bg-white selection:bg-accent-red selection:text-white relative font-sans overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Main Statement */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-7 space-y-10"
          >
            <motion.div
              custom={0}
              variants={fadeUpVariants}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-[1px] bg-accent-red"></div>
              <span className="text-[11px] font-bold tracking-[0.3em] text-accent-red uppercase">
                The Founder's Philosophy
              </span>
            </motion.div>

            <motion.h2
              custom={1}
              variants={fadeUpVariants}
              className="font-serif text-black leading-[1.1] tracking-tight"
              style={{ fontSize: "clamp(48px, 5vw, 84px)" }}
            >
              The Architecture of <br />
              <span className="italic text-accent-red">Logic.</span>
            </motion.h2>

            <motion.p
              custom={2}
              variants={fadeUpVariants}
              className="font-light text-black/70 leading-relaxed text-xl max-w-xl"
            >
              I believe that the most powerful systems are those where technical
              precision meets human intuition. At Archphaze, my mission is to
              build digital environments that are structural, intentional, and
              enduring.
            </motion.p>

            <motion.div custom={3} variants={fadeUpVariants}>
              <motion.button
                onClick={() => setIsModalOpen(true)}
                className="group relative px-10 py-4 border border-white/10 text-white font-medium tracking-widest text-xs uppercase hover:border-accent-red transition-all duration-500 overflow-hidden"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Read My Story —</span>
                <div className="absolute inset-0 bg-accent-red scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Truths */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-5 flex flex-col pt-12 lg:pt-32"
          >
            {PHILOSOPHY_TRUTHS.map((truth, index) => (
              <motion.div
                key={index}
                custom={index + 2}
                variants={fadeUpVariants}
                className={`group flex flex-col gap-6 ${index < PHILOSOPHY_TRUTHS.length - 1 ? "mb-16" : ""}`}
              >
                <span className="text-accent-red font-serif text-6xl leading-none opacity-40 group-hover:opacity-100 transition-all duration-500">
                  “
                </span>
                <p className="font-light italic text-black/70 group-hover:text-black transition-colors duration-500 text-xl leading-relaxed -mt-8">
                  {truth}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* --- REDESIGNED BENTO MODAL (CEO LEVEL) --- */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/98 backdrop-blur-2xl p-4 md:p-8"
            onClick={() => setIsModalOpen(false)}
          >
            {/* Minimalist Close Icon */}
            <button
              className="absolute top-8 right-10 text-white/40 hover:text-white text-5xl font-light transition-colors z-[110]"
              onClick={() => setIsModalOpen(false)}
            >
              ×
            </button>

            <motion.div
              initial={{ scale: 0.92, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-[auto,auto,auto] gap-5 max-w-7xl w-full max-h-[90vh] p-2 overflow-y-auto scrollbar-hide"
              onClick={(e) => e.stopPropagation()}
            >
              {/* CARD 1: THE ANCHOR - The Main Journey (Full Width) */}
              <div className="md:col-span-4 bg-white p-10 md:p-16 flex flex-col justify-center relative overflow-hidden group">
                <span className="text-accent-red font-bold tracking-[0.4em] text-[10px] uppercase mb-8 block">
                  THE FOUNDER'S JOURNEY
                </span>
                <h2 className="text-4xl md:text-7xl font-serif text-black leading-[1.1] mb-8">
                  Architecting{" "}
                  <span className="italic text-accent-red">Momentum.</span>
                </h2>
                <p className="text-black/70 text-lg md:text-2xl font-light leading-relaxed max-w-4xl">
                  {STORY_CONTENT.main}
                </p>
              </div>

              {/* CARD 2: EXPERTISE (Red Accent) */}
              <div className="md:col-span-1 bg-accent-red p-10 flex flex-col justify-between aspect-square md:aspect-auto">
                <span className="font-mono text-[10px] uppercase tracking-widest text-white/60">
                  01 // Expertise
                </span>
                <h3 className="text-2xl font-serif text-white leading-tight">
                  {STORY_CONTENT.tech}
                </h3>
              </div>

              {/* CARD 3: LEGACY (Dark Contrast) */}
              <div className="md:col-span-2 bg-black border border-black/10 p-10 flex flex-col justify-between">
                <span className="text-accent-red font-bold text-[10px] tracking-widest uppercase">
                  02 // Legacy
                </span>
                <p className="text-xl md:text-2xl font-serif italic text-white/90 leading-relaxed">
                  {STORY_CONTENT.legacy}
                </p>
              </div>

              {/* CARD 4: TAGLINE (Minimalist) */}
              <div className="md:col-span-1 bg-white p-10 flex flex-col justify-center items-center text-center border-l-4 border-accent-red">
                <p className="text-black font-bold text-xs uppercase tracking-[0.2em] leading-relaxed">
                  Leading with Intent. <br /> Building with Logic.
                </p>
              </div>

              {/* CARD 5: VALUES (Wide Dark) */}
              <div className="md:col-span-3 bg-gray-50 border border-black/10 p-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div className="max-w-xl">
                  <span className="text-accent-red font-bold text-[10px] tracking-widest uppercase mb-4 block">
                    03 // Philosophy
                  </span>
                  <p className="text-xl text-black/70 font-light leading-relaxed">
                    {STORY_CONTENT.values}
                  </p>
                </div>
              </div>

              {/* CARD 6: CLOSE ACTION */}
              <div
                className="md:col-span-1 bg-accent-red p-10 flex items-center justify-center cursor-pointer group transition-all duration-500 hover:bg-red-700"
                onClick={() => setIsModalOpen(false)}
              >
                <span className="text-white font-bold tracking-[0.3em] text-[10px] uppercase group-hover:scale-110 transition-transform">
                  Back to Site —
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
