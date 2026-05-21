import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS } from "../constants/data";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
      setScrolled(scrollTop > 20);

      // Update active section based on scroll position
      const sections = NAV_LINKS.map((link) => link.toLowerCase());
      const scrollPosition = scrollTop + 100; // Offset for navbar height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    // Debounced scroll handler for performance
    let scrollTimer;
    const debouncedHandleScroll = () => {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        handleScroll();
      }, 100);
    };

    window.addEventListener("scroll", debouncedHandleScroll);
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
      clearTimeout(scrollTimer);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    // Special case for ARCHPHAZE - scroll to top
    if (sectionId === "archphaze") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setIsOpen(false);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for fixed navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setIsOpen(false); // Close mobile menu
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 w-full h-0.5 bg-accent-red z-[101] origin-left"
        style={{ scaleX: scrollProgress / 100 }}
        transition={{ duration: 0.1 }}
      />

      <nav
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-black/10 py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 flex items-center justify-between">
          {/* Left: Logo Section */}
          <div className="flex items-center gap-3 shrink-0 group cursor-pointer">
            <div className="relative flex items-center justify-center">
              <div className="w-9 h-9 bg-accent-red rounded-sm rotate-45 group-hover:rotate-[135deg] transition-transform duration-700 ease-in-out" />
              <span className="absolute text-black font-bold text-xs">K</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span
                onClick={() => scrollToSection("hero")}
                className="text-lg font-bold tracking-tighter text-black"
              >
                KAPIL <span className="text-accent-red">GAUTAM</span>
              </span>
              <span className="text-[9px] uppercase tracking-[0.15em] text-black/60 font-medium">
                FOUNDER OF ARCHPHAZE
              </span>
            </div>
          </div>

          {/* Center: Navigation Links - Enhanced with active states */}
          <div className="hidden xl:flex items-center gap-x-6 2xl:gap-x-8">
            {NAV_LINKS.map((link) => {
              const linkId = link.toLowerCase();
              const isActive = activeSection === linkId;

              return (
                <motion.button
                  key={link}
                  onClick={() => scrollToSection(linkId)}
                  className={`relative text-[10px] 2xl:text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300 ${
                    isActive
                      ? "text-accent-red"
                      : "text-black/60 hover:text-accent-red"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent-red rounded-full"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Right: Action & Mobile Toggle */}
          <div className="flex items-center gap-4 lg:gap-8 shrink-0">
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#b91c1c" }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block bg-accent-red text-white px-7 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-accent-red/20"
              onClick={() => scrollToSection("contact")}
            >
              Let's Talk
            </motion.button>

            {/* Mobile Menu Toggle - visible below XL (1280px) to prevent link crowding */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="xl:hidden flex flex-col gap-1.5 p-2 z-[110]"
            >
              <span
                className={`h-0.5 bg-black transition-all duration-300 ${isOpen ? "w-6 rotate-45 translate-y-2" : "w-8"}`}
              />
              <span
                className={`h-0.5 bg-black transition-all duration-300 ${isOpen ? "opacity-0" : "w-6"}`}
              />
              <span
                className={`h-0.5 bg-black transition-all duration-300 ${isOpen ? "w-6 -rotate-45 -translate-y-2" : "w-8"}`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Overlay - Updated for more links */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-0 bg-white z-[105] flex items-center justify-center xl:hidden"
            >
              <div className="flex flex-col gap-6 text-center py-20 overflow-y-auto">
                {NAV_LINKS.map((link, i) => {
                  const linkId = link.toLowerCase();
                  const isActive = activeSection === linkId;

                  return (
                    <motion.button
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      key={link}
                      onClick={() => scrollToSection(linkId)}
                      className={`text-3xl font-serif italic transition-colors ${
                        isActive
                          ? "text-accent-red"
                          : "text-black hover:text-accent-red"
                      }`}
                    >
                      {link}
                    </motion.button>
                  );
                })}
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  onClick={() => scrollToSection("contact")}
                  className="mt-4 bg-accent-red text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs"
                >
                  Let's Talk
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
