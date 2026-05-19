import React from "react";
import { motion } from "framer-motion";
import { useReveal } from "../hooks/useReveal";
import { INITIATIVES } from "../constants/data";

function InitiativeCard({ initiative, index }) {
  const { ref, isInView } = useReveal();
  const isSecond = index === 1;

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.9,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative overflow-hidden rounded-[40px] border border-black/[0.04] bg-[#F9F9F9] p-8 md:p-14 min-h-[520px] flex flex-col justify-between shadow-[0_10px_40px_rgba(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
    >
      {/* Ghost Number */}
      <span className="absolute bottom-[-25px] right-2 select-none pointer-events-none text-[180px] md:text-[220px] font-serif italic leading-none text-black/[0.03]">
        0{index + 1}
      </span>

      {/* Soft Gradient Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-accent-red/[0.03] via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10">
        {/* Top */}
        <div className="flex items-start justify-between mb-12">
          <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-accent-red font-bold">
            Venture 0{index + 1}
          </span>

          <div
            className={`h-px w-20 transition-all duration-500 ${
              isSecond
                ? "bg-accent-red"
                : "bg-black/10 group-hover:bg-black/25"
            }`}
          />
        </div>

        {/* Title */}
        <h3
          className={`text-4xl md:text-5xl font-serif leading-[1.05] tracking-tight mb-8 transition-colors duration-500 ${
            isSecond
              ? "text-accent-red"
              : "text-black group-hover:text-black/80"
          }`}
        >
          {initiative.title}
        </h3>

        {/* Description */}
        <p className="max-w-md text-[17px] md:text-lg leading-relaxed text-black/55 font-light">
          {initiative.description}
        </p>
      </div>

      {/* Bottom */}
      <div className="relative z-10 mt-14 flex items-center justify-between">
        <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-black/70">
          Explore
        </span>

        <a
          href={initiative.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${initiative.title}`}
          className={`w-14 h-14 rounded-full flex items-center justify-center border transition-all duration-500 group/button hover:scale-105 active:scale-95 ${
            isSecond
              ? "bg-accent-red border-accent-red text-white hover:bg-black hover:border-black"
              : "bg-transparent border-black/10 text-black hover:border-black hover:bg-black hover:text-white"
          }`}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform duration-500 group-hover/button:rotate-45"
          >
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </a>
      </div>
    </motion.article>
  );
}

export function LegacySection() {
  const { ref } = useReveal();

  return (
    <section
      id="legacy"
      ref={ref}
      className="relative overflow-hidden bg-white py-24 md:py-40"
    >
      {/* Background Blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-accent-red/[0.02] blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-16">
        {/* Header */}
        <header className="mb-20 md:mb-24">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-px bg-accent-red" />

            <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-accent-red">
              Portfolio
            </span>
          </div>

          <div className="max-w-4xl">
            <h2 className="text-5xl md:text-7xl lg:text-[88px] leading-[0.95] tracking-tight font-serif text-black">
              Our Initiatives
            </h2>

            <p className="mt-8 text-black/50 text-lg md:text-xl max-w-2xl leading-relaxed font-light">
              A curated portfolio of ventures, systems, and long-term initiatives
              engineered to create measurable impact across industries,
              infrastructure, and digital transformation.
            </p>
          </div>
        </header>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {INITIATIVES.map((initiative, index) => (
            <InitiativeCard
              key={initiative.id}
              initiative={initiative}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}