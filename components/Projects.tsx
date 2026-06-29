"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-navy-950">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">High-Impact Projects</h2>
          <p className="text-slate-400 mt-3 max-w-xl">
            Real work, real stakes. Every project below shipped to production and had
            measurable organizational impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {PROJECTS.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: (i % 2) * 0.1, duration: 0.5, ease: "easeOut" }}
              className="group relative flex flex-col gap-4 p-6 rounded-2xl bg-navy-800 border border-white/8 hover:border-blue-500/30 transition-all duration-300"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Confidential badge */}
              {project.confidential && (
                <span className="absolute top-4 right-4 text-xs font-mono px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400">
                  NDA
                </span>
              )}

              <div className="relative">
                {/* Client + Role */}
                <div className="flex flex-col gap-0.5 mb-3">
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                    {project.client}
                  </span>
                  <span className="text-xs text-blue-400 font-medium">{project.role}</span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                  {project.title}
                </h3>

                <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Stack chips */}
              <div className="relative flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-0.5 rounded font-mono bg-blue-950/60 border border-blue-900/50 text-blue-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Tags */}
              <div className="relative flex flex-wrap gap-1.5 pt-1 border-t border-white/5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
