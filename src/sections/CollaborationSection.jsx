import React from "react";
import { motion } from "framer-motion";
import { useReveal } from "../hooks/useReveal";

const PARTNERS = [
  {
    name: "Om shree guidance",
    desc: "Your outer world—your business, your results, and how life reacts to you—is closely tied to what’s happening inside you. When your inner state is calm and clear, everything starts to flow naturally.",
    link: "https://omshreeguidance.com/shreeweb/home",
  },
  {
    name: "Unleash Nepal",
    desc: "Providing personalized journeys shaped around your needs and interests. Whether exploring mountain culture or ancient heritage, the priority is making every traveler feel welcomed like family.",
    link: "https://unleashnepaladventure.com",
  },
];

const ArrowIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
  >
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

export function CollaborationSection() {
  const { ref, isInView } = useReveal();

  return (
    <section
      id="collaboration"
      ref={ref}
      className="py-20 md:py-32 bg-white text-black overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-12">
        {/* INTRO */}
        <motion.p
          initial={{ opacity: 0, x: -10 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          className="text-black/60 text-xs md:text-sm uppercase tracking-widest border-l border-red-600 pl-4 mb-12 max-w-md font-medium"
        >
          Archphaze collaborates with select partners to scale digital
          ecosystems.
        </motion.p>

        {/* HEADER */}
        <div className="grid lg:grid-cols-12 gap-10 items-start mb-20">
          <div className="lg:col-span-9">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-10 bg-red-600" />
              <span className="text-red-600 text-[10px] tracking-[0.4em] uppercase font-bold">
                The Network
              </span>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[0.9] text-black tracking-tighter"
            >
              STRATEGIC <br />
              <span className="italic font-serif text-black/10">PARTNERS.</span>
            </motion.h2>

            <p className="mt-6 text-black/50 text-base md:text-lg max-w-xl leading-relaxed">
              A curated ecosystem of specialized entities engineered for
              precision, impact, and long-term stability.
            </p>
          </div>

          {/* STATS */}
          <div className="lg:col-span-3 flex flex-row lg:flex-col gap-10 lg:gap-14 lg:items-end">
            <div className="text-right">
              <div className="text-4xl md:text-6xl font-serif italic text-black">
                02<span className="text-red-600">.</span>
              </div>
              <p className="text-[10px] text-black/40 tracking-[0.3em] uppercase font-bold">
                Active Ventures
              </p>
            </div>

            <div className="text-right">
              <div className="text-4xl md:text-6xl font-serif italic text-black">
                ∞<span className="text-red-600">.</span>
              </div>
              <p className="text-[10px] text-black/40 tracking-[0.3em] uppercase font-bold">
                Potential
              </p>
            </div>
          </div>
        </div>

        {/* PARTNERS */}
        <div className="grid sm:grid-cols-2 gap-6 md:gap-10">
          {PARTNERS.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 }}
              className="group relative p-8 md:p-12 rounded-3xl border border-black/5 bg-gray-50/40 hover:bg-white hover:shadow-2xl hover:shadow-black/5 hover:border-red-600/30 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between mb-10">
                  <span className="text-red-600 text-[10px] tracking-[0.3em] font-black">
                    VENTURE 0{i + 1}
                  </span>
                  <div className="h-px w-12 bg-black/10 group-hover:w-24 group-hover:bg-red-600 transition-all duration-500" />
                </div>

                <h3 className="text-3xl md:text-4xl font-serif mb-6 group-hover:text-red-600 transition-colors text-black leading-tight">
                  {p.name}
                </h3>

                <p className="text-black/60 text-sm md:text-base leading-relaxed font-light">
                  {p.desc}
                </p>
              </div>

              {/* CTA */}
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-12 flex items-center gap-4 text-xs tracking-[0.3em] uppercase text-black/40 group-hover:text-black font-bold transition-all duration-300"
              >
                Explore
                <div className="w-12 h-12 flex items-center justify-center rounded-full border border-black/10 group-hover:border-red-600 group-hover:bg-red-600 group-hover:text-white transition-all duration-500">
                  <ArrowIcon />
                </div>
              </a>

              {/* WATERMARK NUMBER */}
              <div className="absolute right-6 bottom-6 text-7xl md:text-9xl font-serif italic text-black/[0.02] pointer-events-none group-hover:text-red-600/[0.03] transition-colors duration-500">
                0{i + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
