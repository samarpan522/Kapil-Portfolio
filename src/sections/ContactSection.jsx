import React from "react";
import { Mail, MapPin, Send, Globe } from "lucide-react";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export const ContactSection = () => {
  return (
    <section id="contact" className="bg-white py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="text-red-600 font-semibold tracking-widest uppercase text-sm">
            Contact
          </p>

          <h2 className="text-5xl md:text-6xl font-black text-black mt-3 leading-tight">
            Let’s Build Something{" "}
            <span className="text-red-600">Meaningful.</span>
          </h2>

          <p className="text-gray-600 mt-5 max-w-2xl text-lg">
            I’m open to collaborations, product design, and high-impact digital
            experiences. Let’s create something exceptional together.
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-12 gap-10">
          {/* INFO PANEL (LEFT on desktop) */}
          <div className="lg:col-span-4 lg:order-1 flex flex-col gap-6">
            <div className="bg-gray-100 rounded-3xl p-8 border border-gray-200">
              <Mail className="text-red-600" size={28} />
              <p className="text-black font-semibold mt-4">Email</p>
              <p className="text-gray-600">kapil@archphaze.com</p>
            </div>

            <div className="bg-gray-100 rounded-3xl p-8 border border-gray-200">
              <MapPin className="text-red-600" size={28} />
              <p className="text-black font-semibold mt-4">Location</p>
              <p className="text-gray-600">Chabhail , Kathmandu</p>
            </div>

            <div className="bg-gray-100 rounded-3xl p-8 flex justify-between items-center border border-black/10">
              <a
                href="https://www.linkedin.com/in/kapil-gautam-416a74134/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black/60 hover:text-red-600 transition"
              >
                <FaLinkedin size={20} />
              </a>
              <a className="text-black/60 hover:text-red-600 transition">
                <FaInstagram size={20} />
              </a>
              <a className="text-black/60 hover:text-red-600 transition">
                <FaTwitter size={20} />
              </a>
              <Globe className="text-black/40" size={20} />
            </div>

            <p className="text-sm text-gray-500 leading-relaxed">
              I typically respond within 24–48 hours. For urgent collaborations,
              mention it in the subject line.
            </p>
          </div>

          {/* FORM (RIGHT on desktop) */}
          <div className="lg:col-span-8 lg:order-2 bg-gray-50 rounded-3xl p-10 ml-20 md:p-14 shadow-2xl border border-black/10">
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="bg-transparent border-b border-black/10 py-4 text-black outline-none focus:border-red-600 transition"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="bg-transparent border-b border-black/10 py-4 text-black outline-none focus:border-red-600 transition"
                />
              </div>

              <input
                type="text"
                placeholder="Subject"
                className="w-full bg-transparent border-b border-black/10 py-4 text-black outline-none focus:border-red-600 transition"
              />

              <textarea
                rows="5"
                placeholder="Tell me about your project..."
                className="w-full bg-transparent border-b border-black/10 py-4 text-black outline-none focus:border-red-600 transition resize-none"
              />

              <button
                type="submit"
                className="flex items-center gap-3 bg-red-600 hover:bg-white hover:text-black text-white font-bold px-10 py-5 rounded-full transition-all duration-300"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
