"use client";

import { motion } from "framer-motion";
import { SKILLS } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

export default function SkillsStrip() {
  return (
    <section className="py-20 bg-navy-950 border-y border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">
            Technical Depth
          </span>
          <h2 className="text-3xl font-bold mt-2">What I Work With</h2>
        </motion.div>

        <div className="flex flex-col gap-8">
          {SKILLS.map((group, i) => (
            <motion.div
              key={group.category}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeUp}
              className="flex flex-col sm:flex-row sm:items-start gap-4"
            >
              <div className="flex items-center gap-2 sm:w-52 flex-shrink-0">
                <span className="text-xl" role="img" aria-label={group.category}>
                  {group.icon}
                </span>
                <span className="text-sm font-semibold text-slate-300 font-mono">
                  {group.category}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm px-3 py-1 rounded-md bg-white/5 border border-white/8 text-slate-300 hover:border-blue-500/40 hover:text-white transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
