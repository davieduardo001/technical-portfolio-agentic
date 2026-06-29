"use client";

import { motion } from "framer-motion";
import { CERTIFICATIONS } from "@/lib/data";

export default function Certifications() {
  return (
    <section className="py-24 bg-navy-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">
            Validated Expertise
          </span>
          <h2 className="text-3xl font-bold mt-2">Global Certifications</h2>
        </motion.div>

        {/* Primary certs */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {CERTIFICATIONS.primary.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="flex items-start gap-3 p-4 rounded-xl bg-white/3 border border-white/8 hover:border-blue-500/25 transition-colors"
            >
              <span className="text-xl flex-shrink-0 mt-0.5">🏆</span>
              <div>
                <p className="text-sm font-semibold text-white leading-tight">{cert.name}</p>
                <p className="text-xs text-slate-500 mt-0.5">
                  {cert.issuer} · {cert.year}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional certs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {CERTIFICATIONS.additional.map((cert) => (
            <div
              key={cert.name}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/3 border border-white/8 text-sm text-slate-400"
            >
              <span>📌</span>
              <span>{cert.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
