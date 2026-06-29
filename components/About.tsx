"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function About() {
  return (
    <section id="about" className="py-24 bg-navy-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="grid lg:grid-cols-5 gap-12 items-center"
        >
          {/* Photo column */}
          <div className="lg:col-span-2 flex justify-center">
            <div className="relative w-64 h-64 lg:w-72 lg:h-72">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/15 to-transparent blur-xl" />
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10">
                <div className="absolute inset-0 flex items-center justify-center bg-navy-800 text-slate-500 text-sm font-mono rounded-2xl">
                  photo.jpg
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/photo.jpg"
                  alt="Davi Eduardo"
                  className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>
            </div>
          </div>

          {/* Text column */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <div>
              <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">
                Professional Summary
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 tracking-tight">
                Engineering Scalable Systems
              </h2>
            </div>

            <p className="text-slate-400 leading-relaxed">
              I&apos;m a Technical Product Owner with 3+ years delivering complex digital
              products in high-stakes GovTech environments — including a national
              registry serving <span className="text-white font-medium">1.2M+ regulated professionals</span> and an
              internal voting platform redesigned for accessibility at scale.
            </p>

            <p className="text-slate-400 leading-relaxed">
              I&apos;m also an engineer.{" "}
              <span className="text-white font-medium">AWS Certified</span>, with
              hands-on experience in Docker, Kubernetes, CI/CD, FastAPI, Next.js,
              and PostgreSQL. I can own the roadmap and deploy the infrastructure
              behind it — which means less back-and-forth, fewer hand-off gaps,
              and faster delivery.
            </p>

            <p className="text-slate-400 leading-relaxed">
              Currently based in{" "}
              <span className="text-white font-medium">Brasília, Brazil.</span>
              <br />
              Available remotely worldwide.
              <br />
              Working in <span className="text-white font-medium">English and Portuguese.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
