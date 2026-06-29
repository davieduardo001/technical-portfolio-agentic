"use client";

import { motion } from "framer-motion";
import { LINKS } from "@/lib/data";

const badges = [
  { label: "🟢 AWS Certified" },
  { label: "CSPO" },
  { label: "3+ Years GovTech" },
  { label: "1.2M+ Users Served" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: "easeOut" },
  }),
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left content */}
        <div className="flex flex-col gap-6">
          {/* Badge strip */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="flex flex-wrap gap-2"
          >
            {badges.map((b) => (
              <span
                key={b.label}
                className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300"
              >
                {b.label}
              </span>
            ))}
          </motion.div>

          {/* Headline */}
          <motion.h1
            custom={1}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]"
          >
            I ship products{" "}
            <span className="text-blue-400">and the infrastructure</span>{" "}
            behind them.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            custom={2}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="text-lg text-slate-400 leading-relaxed max-w-lg"
          >
            Technical Product Owner &amp; DevOps Engineer based in{" "}
            <span className="text-slate-200">Brasília, Brazil.</span>
            <br />
            Available for remote work worldwide.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            custom={3}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="flex flex-wrap gap-3 pt-2"
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-white/10 hover:bg-white/15 border border-white/10 text-white font-medium transition-all"
            >
              See My Work
            </a>
            <a
              href={LINKS.fiverr}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors shadow-lg shadow-blue-600/20"
            >
              Hire Me on Fiverr
            </a>
            <a
              href={LINKS.cv}
              download
              className="px-6 py-3 rounded-lg border border-white/15 hover:border-white/30 text-slate-300 hover:text-white font-medium transition-all"
            >
              Download CV
            </a>
          </motion.div>
        </div>

        {/* Right — photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-transparent blur-2xl" />
            <div className="absolute inset-2 rounded-full border border-blue-500/20" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/10 glow-blue">
              {/* Placeholder sits below the image; visible only when image fails */}
              <div className="absolute inset-0 flex items-center justify-center bg-navy-800 text-slate-500 text-sm font-mono">
                photo.jpg
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/photo.jpg"
                alt="Davi Eduardo"
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600"
      >
        <span className="text-xs font-mono">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent" />
      </motion.div>
    </section>
  );
}
