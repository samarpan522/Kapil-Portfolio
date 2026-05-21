import React from "react";
import { NAV_LINKS } from "../constants/data";
import { FaLinkedinIn, FaXTwitter, FaGithub } from "react-icons/fa6";
import { MdOutlineEmail, MdArrowUpward } from "react-icons/md";

const SOCIALS = [
  { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
  { icon: FaXTwitter, href: "#", label: "Twitter" },
  { icon: FaGithub, href: "#", label: "GitHub" },
  { icon: MdOutlineEmail, href: "mailto:kapil@archphaze.com", label: "Email" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white text-black pt-24 pb-12 overflow-hidden border-t border-black/10">
      {/* Subtle background glow for depth */}
      <div className="absolute top-0 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          {/* Identity Column */}
          <div className="md:col-span-6 space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-serif tracking-tight uppercase">
                KAPIL{" "}
                <span className="text-red-600 italic font-light">GAUTAM</span>
              </h2>
              <div className="flex items-center gap-3">
                <span className="h-[1px] w-12 bg-red-600"></span>
                <span className="text-[11px] uppercase tracking-[0.5em] text-black/40 font-medium">
                  CEO — Archphaze Global
                </span>
              </div>
            </div>

            <p className="text-black/60 text-base leading-relaxed max-w-md">
              Architecting the future through scalable systems and visionary
              leadership. Engineering momentum at the intersection of
              infrastructure and ecosystem.
            </p>

            {/* Social Icons - Boxed Style with New Tab Logic */}
            <div className="flex gap-2">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center border border-black/10 text-black/40 hover:border-red-600/50 hover:text-red-600 hover:bg-red-600/10 transition-all duration-500 ease-in-out"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Minimalist Index Column */}
          <div className="md:col-span-3">
            <h4 className="text-[12px] uppercase tracking-[0.4em] text-black/30 font-bold mb-8">
              Index
            </h4>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-black/60 hover:text-red-500 transition-all duration-300 tracking-wide uppercase inline-block hover:translate-x-1"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-3 space-y-10">
            <h4 className="text-[12px] uppercase tracking-[0.4em] text-black/30 font-bold mb-8">
              Contact
            </h4>
            <div className="space-y-8">
              <div>
                <p className="text-[10px] text-black/40 uppercase tracking-widest mb-2 font-bold">
                  Inquiries
                </p>
                <a
                  href="mailto:kapil@archphaze.com"
                  className="text-sm text-black/70 hover:text-red-500 transition-colors duration-300"
                >
                  kapil@archphaze.com
                </a>
              </div>
              <div>
                <p className="text-[10px] text-black/40 uppercase tracking-widest mb-2 font-bold">
                  Current Base
                </p>
                <p className="text-sm text-black/70">Lalitpur, Nepal</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-black/40 tracking-[0.2em] uppercase font-medium">
            © {currentYear} Kapil Gautam. All rights reserved.
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-4 text-[10px] text-black/40 uppercase tracking-[0.2em] group hover:text-black transition-all duration-300"
          >
            Scroll to Top
            <span className="w-9 h-9 rounded-full border border-black/10 flex items-center justify-center group-hover:border-red-600 group-hover:bg-red-600 transition-all duration-500">
              <MdArrowUpward className="group-hover:-translate-y-1 transition-transform duration-300 group-hover:text-white" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
