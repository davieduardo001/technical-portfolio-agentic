"use client";

import { motion } from "framer-motion";
import { LINKS } from "@/lib/data";

const contactLinks = [
  {
    label: "Email",
    value: "davieduardocosta.miranda@gmail.com",
    href: `mailto:davieduardocosta.miranda@gmail.com`,
    icon: "✉️",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/davi-eduardo-costa",
    href: LINKS.linkedin,
    icon: "🔗",
    external: true,
  },
  {
    label: "Fiverr",
    value: "fiverr.com/s/yvKPKbb",
    href: LINKS.fiverr,
    icon: "🟢",
    external: true,
  },
  {
    label: "GitHub",
    value: "github.com/davieduardo001",
    href: LINKS.github,
    icon: "⚡",
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-navy-900">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Let&apos;s automate and scale your vision.
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto mb-12">
            Whether you need a Technical PM, DevOps consulting, or a full-stack
            engineer — I&apos;m open to conversations.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 text-left mb-12">
            {contactLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/3 border border-white/8 hover:border-blue-500/30 hover:bg-white/5 transition-all group"
              >
                <span className="text-xl">{link.icon}</span>
                <div>
                  <p className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                    {link.label}
                  </p>
                  <p className="text-sm text-slate-300 group-hover:text-white transition-colors break-all">
                    {link.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>

          <p className="text-slate-600 text-sm font-mono">
            📍 Brasília, DF · Remote worldwide
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <a
              href={LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-green-600 hover:bg-green-500 text-white font-medium text-sm transition-colors"
            >
              💬 Chat on WhatsApp
            </a>
            <a
              href={LINKS.fiverr}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-colors"
            >
              Hire Me on Fiverr
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
