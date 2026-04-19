import React from "react";
import { ArrowUpRight } from "lucide-react";
import { useData } from "../context/DataContext";

const Hero = () => {
  const { stats, contact, techStack } = useData();

  return (
    <section className="relative min-h-screen bg-cream overflow-hidden pt-28 pb-16">
      {/* Decorative blobs */}
      <div className="blob bg-coral/30 w-[500px] h-[500px] -top-40 -right-20"></div>
      <div className="blob bg-[#D4FF3A]/40 w-[400px] h-[400px] top-1/3 -left-20"></div>
      <div className="absolute inset-0 grain"></div>

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex items-center gap-2 mb-8 mono text-xs uppercase tracking-[0.25em] text-ink/70">
          <span className="w-2 h-2 rounded-full bg-coral animate-pulse"></span>
          Based in Noida · {contact.serviceArea}
        </div>

        <h1 className="font-display font-bold text-ink leading-[0.92] tracking-tight">
          <span className="block text-[clamp(3rem,10vw,9rem)]">Digital products</span>
          <span className="block text-[clamp(3rem,10vw,9rem)]">
            that feel{" "}
            <span className="italic text-coral">alive.</span>
          </span>
        </h1>

        <div className="mt-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          <p className="max-w-xl text-lg md:text-xl text-ink/70 leading-relaxed">
            We are{" "}
            <span className="font-semibold text-ink">ArgosMob Tech & AI</span>{" "}
            — a technology company building custom, scalable apps and websites
            for founders and businesses across India.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="btn-coral px-7 py-3.5 rounded-full text-sm font-semibold inline-flex items-center gap-2"
            >
              See our work <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href={contact.websiteUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost px-7 py-3.5 rounded-full text-sm font-semibold inline-flex items-center gap-2"
            >
              {contact.website} <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-ink/10 pt-10">
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col">
              <div className="font-display font-bold text-ink text-4xl md:text-6xl leading-none">
                {s.value}
              </div>
              <div className="mono text-[11px] uppercase tracking-[0.2em] text-ink/50 mt-3">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scrolling tech stack marquee */}
      <div className="mt-20 bg-ink text-cream py-5 overflow-hidden relative">
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {Array(2)
            .fill(null)
            .map((_, k) => (
              <div key={k} className="flex gap-12 items-center">
                {techStack.map((t, j) => (
                  <span key={j} className="font-display text-3xl md:text-5xl font-medium">
                    {t} <span className="text-coral">•</span>
                  </span>
                ))}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
