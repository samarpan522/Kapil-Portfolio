import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import hero from "../assets/videos/hero.mp4";

const FLIP_WORDS = ["FUTURE.", "LEGACY.", "CULTURE.", "EMPIRE.", "VISION."];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % FLIP_WORDS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const scrollToVision = () => {
    const target = document.getElementById("vision");
    if (target) {
      window.scrollTo({ top: target.offsetTop - 80, behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative bg-[#0A0A0A] w-full min-h-screen overflow-hidden flex items-center"
    >
      {/* ── BACKGROUND VIDEO ── */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src={hero} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent z-[1]" />
      </div>

      {/* ── TEXT CONTENT ── */}
      <div className="relative z-10 w-full px-6 md:px-10 lg:px-12 xl:px-16">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="flex flex-col gap-6"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-[1px] bg-red-600" />
            <span className="text-[10px] tracking-[0.5em] font-bold text-red-600 uppercase">
              FOUNDER & CEO · ARCH
            </span>
          </div>

          {/* Headline with flipping word */}
          <h1
            className="text-white font-serif leading-[0.85] tracking-tighter"
            style={{ fontSize: "clamp(40px, 6vw, 90px)" }}
          >
            BUILDING SYSTEMS <br /> THAT SHAPE THE <br />
            {/* Flip container — fixed height so layout doesn't jump */}
            <span
              className="inline-block"
              style={{
                perspective: "600px",
                height: "1.1em",
                overflow: "hidden",
                verticalAlign: "bottom",
              }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={FLIP_WORDS[index]}
                  className="text-red-600 italic inline-block"
                  initial={{ rotateX: -90, opacity: 0, y: "30%" }}
                  animate={{ rotateX: 0, opacity: 1, y: "0%" }}
                  exit={{ rotateX: 90, opacity: 0, y: "-30%" }}
                  transition={{
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{ transformOrigin: "50% 50%", display: "inline-block" }}
                >
                  {FLIP_WORDS[index]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>

          {/* Subtext */}
          <p
            className="text-white/40 font-light max-w-sm"
            style={{ fontSize: "clamp(14px, 1.1vw, 17px)" }}
          >
            Founder of Arch — building scalable ecosystems, digital ventures,
            and real-world experiences designed for long-term impact.
          </p>

          {/* CTA */}
          <div className="flex items-center gap-10 mt-4">
            <button
              onClick={scrollToVision}
              className="bg-red-600 text-white font-bold uppercase py-4 px-10 text-[11px] tracking-widest hover:bg-red-700 transition-all"
            >
              Explore Vision
            </button>

            <div className="flex flex-col border-l border-white/10 pl-6">
              <span className="text-white font-serif text-2xl">2026</span>
              <span className="text-white/20 uppercase text-[9px] tracking-widest">
                Strategic Horizon
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}