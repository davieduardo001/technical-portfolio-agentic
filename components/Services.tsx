"use client";

import { motion } from "framer-motion";
import { SERVICES } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="py-24 bg-navy-950">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">
            Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">How I Can Help</h2>
          <p className="text-slate-400 mt-3 max-w-xl">
            Available for consulting, contracts, and freelance engagements worldwide.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`relative flex flex-col gap-4 p-6 rounded-2xl border transition-all ${
                service.live
                  ? "bg-navy-800 border-blue-500/30 glow-blue-sm"
                  : "bg-white/2 border-white/6"
              }`}
            >
              {service.live && (
                <span className="absolute top-4 right-4 text-xs font-mono px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400">
                  live
                </span>
              )}

              <h3 className="text-lg font-bold text-white">{service.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed flex-1">
                {service.description}
              </p>

              {service.live && service.href ? (
                <a
                  href={service.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-colors"
                >
                  {service.cta} →
                </a>
              ) : (
                <span className="mt-auto inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-white/5 border border-white/8 text-slate-500 text-sm font-medium cursor-not-allowed">
                  {service.cta}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
