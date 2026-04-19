import React from "react";
import { ArrowUpRight } from "lucide-react";
import { useData } from "../context/DataContext";

const Services = () => {
  const { services } = useData();

  return (
    <section id="services" className="relative bg-cream py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <div className="mono text-xs uppercase tracking-[0.25em] text-ink/50 mb-4">
              (01) — What we do
            </div>
            <h2 className="font-display text-5xl md:text-7xl font-bold text-ink leading-[0.95] max-w-3xl">
              Services built for <span className="italic text-coral">bold</span> teams.
            </h2>
          </div>
          <p className="max-w-sm text-ink/70 text-lg">
            We partner end-to-end — from discovery to launch and beyond. Every engagement
            is shaped around the outcome you want to ship.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <article
              key={s.id}
              className="group relative bg-white border-2 border-ink rounded-2xl p-8 hover:bg-coral hover:text-cream transition-colors duration-300 cursor-pointer"
            >
              <div className="flex justify-between items-start mb-12">
                <span className="mono text-xs uppercase tracking-[0.2em] opacity-60">
                  0{i + 1}
                </span>
                <ArrowUpRight className="w-6 h-6 transform group-hover:rotate-45 transition-transform duration-300" />
              </div>
              <h3 className="font-display text-3xl font-bold leading-tight mb-3">
                {s.title}
              </h3>
              <p className="text-sm opacity-80 leading-relaxed">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
