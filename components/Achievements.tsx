"use client";

import { motion } from "framer-motion";
import { ACHIEVEMENTS } from "@/lib/data";

export default function Achievements() {
  return (
    <section className="py-20 bg-navy-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">
            Impact
          </span>
          <h2 className="text-3xl font-bold mt-2">Numbers That Matter</h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {ACHIEVEMENTS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
              className="relative flex flex-col items-center text-center p-6 rounded-2xl bg-white/3 border border-white/8 hover:border-blue-500/30 transition-colors group"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-blue-600/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="text-4xl md:text-5xl font-bold text-blue-400 tracking-tight">
                {stat.value}
              </span>
              <span className="mt-2 text-sm font-semibold text-white leading-tight">
                {stat.label}
              </span>
              <span className="mt-1 text-xs text-slate-500">{stat.sub}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
