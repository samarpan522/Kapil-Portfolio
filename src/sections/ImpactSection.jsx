import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useReveal } from "../hooks/useReveal";
import { IMPACT_DOMAINS } from "../constants/data";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
  exit: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.4 },
  },
};

function ImpactCard({ domain, index }) {
  const { ref, isInView } = useReveal();

  return (
    <motion.div
      ref={ref}
      layout
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      exit="exit"
      variants={fadeUp}
      custom={index % 3}
      whileHover="hover"
      className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white p-8 shadow-sm transition-all duration-500 hover:border-red-600/40 hover:bg-red-50"
    >
      {/* Top Accent */}
      <motion.span
        initial={{ width: "0%" }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.5 }}
        className="absolute left-0 top-0 h-[2px] bg-red-600"
      />

      {/* Glow */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -top-24 right-0 h-40 w-40 rounded-full bg-red-600/10 blur-3xl" />
      </div>

      {/* Index */}
      <span className="absolute right-8 top-6 font-mono text-[10px] tracking-[0.25em] text-black/10">
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Header */}
      <div className="relative z-10 mb-8 flex items-center gap-4">
        <div className="flex h-11 w-11 items-center justify-center border border-red-600/30 bg-red-600/5 text-red-500">
          {domain.icon}
        </div>

        <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-red-500">
          {domain.tag}
        </span>
      </div>

      {/* Title */}
      <h3 className="relative z-10 mb-4 font-serif text-2xl text-black group-hover:text-red-500 transition-colors">
        {domain.title}
      </h3>

      {/* Divider */}
      <div className="mb-6 h-[1px] w-12 bg-black/10 transition-all duration-700 group-hover:w-full group-hover:bg-red-600/20" />

      {/* Description */}
      <p className="relative z-10 mb-8 text-sm font-light leading-relaxed text-black/60">
        {domain.description}
      </p>

      {/* Link */}
      {domain.link && (
        <a
          href={domain.link}
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 flex w-fit items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.25em] text-red-600/80 group-hover:text-red-500 transition-colors">
            Explore
          </span>

          <motion.span whileHover={{ x: 4 }} transition={{ duration: 0.3 }}>
            <svg
              width="14"
              height="14"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="text-red-600/60"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </motion.span>
        </a>
      )}
    </motion.div>
  );
}

export default function ImpactSection() {
  const { ref, isInView } = useReveal();
  const [showAll, setShowAll] = useState(false);

  const visibleDomains = showAll ? IMPACT_DOMAINS : IMPACT_DOMAINS.slice(0, 3);

  return (
    <section id="impact" className="relative overflow-hidden bg-white py-32">
      {/* Background Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(#DC2626 0.5px, transparent 0.5px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-red-600/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-8">
        {/* Header */}
        <div className="mb-24 grid gap-16 lg:grid-cols-12">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-7"
          >
            <motion.div
              variants={fadeUp}
              className="mb-8 flex items-center gap-4"
            >
              <div className="h-[1px] w-12 bg-red-600" />
              <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-red-600">
                Systems That Scale Businesses
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="mb-10 font-serif text-5xl leading-[0.9] tracking-tight text-black md:text-7xl"
            >
              IMPACT <br />
              <span className="italic text-black/20">DOMAINS.</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="max-w-xl text-lg text-black/40"
            >
              Five core disciplines powering Archphaze — engineered for clarity,
              precision, and long-term scalability.
            </motion.p>
          </motion.div>

          {/* Stats */}
          <motion.div className="flex flex-col justify-end lg:col-span-5">
            <div className="flex gap-12">
              {[
                { num: "05", label: "Core Domains" },
                { num: "∞", label: "Potential" },
                { num: "01", label: "Vision" },
              ].map((s, i) => (
                <motion.div key={s.label} variants={fadeUp} custom={i + 2}>
                  <div className="font-serif text-4xl text-black">
                    {s.num}
                    <span className="text-red-600">.</span>
                  </div>
                  <div className="mt-2 text-[9px] uppercase tracking-[0.25em] text-black/40">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Cards */}
        <motion.div
          layout
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="sync">
            {visibleDomains.map((domain, index) => (
              <ImpactCard key={domain.id} domain={domain} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Footer */}
        <motion.div className="mt-20 flex flex-col items-center gap-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="border border-black/10 px-10 py-4 text-[10px] uppercase tracking-[0.3em] text-black/60 transition-all hover:border-red-600 hover:text-red-500"
          >
            {showAll ? "Collapse Strategy" : "View All Domains"}
          </button>

          <div className="flex w-full items-center justify-between opacity-80">
            <div className="h-[1px] flex-1 bg-white/10" />
            <span className="px-8 text-[9px] tracking-[0.5em] text-black/40">
              ARCHPHAZE — 2026
            </span>
            <div className="h-[1px] flex-1 bg-white/10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
