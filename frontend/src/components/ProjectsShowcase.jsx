import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { useData } from "../context/DataContext";

const ProjectsShowcase = () => {
  const { projects } = useData();

  return (
    <section id="work" className="relative bg-ink text-cream py-24 md:py-32 overflow-hidden">
      <div className="blob bg-coral/20 w-[600px] h-[600px] -top-40 -right-40"></div>
      <div className="absolute inset-0 grain opacity-[0.15]"></div>

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <div className="mono text-xs uppercase tracking-[0.25em] text-cream/50 mb-4">
              (02) — Selected work
            </div>
            <h2 className="font-display text-5xl md:text-7xl font-bold leading-[0.95] max-w-3xl">
              Projects we’re <span className="italic text-coral">proud</span> of.
            </h2>
          </div>
          <p className="max-w-sm text-cream/70 text-lg">
            A snapshot of the products we’ve helped ship across EdTech, AI, Marketplaces
            and E-commerce.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((p, i) => (
            <article
              key={p.id}
              className={`project-card group relative rounded-3xl overflow-hidden border border-cream/10 bg-[#1a1816] ${
                i % 3 === 0 ? "md:col-span-2" : ""
              }`}
            >
              <Link to={`/project/${p.id}`} className="block">
                <div className="img-wrap aspect-[16/10] relative">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-5 left-5 flex gap-2">
                    <span className="mono text-[10px] uppercase tracking-[0.2em] bg-cream text-ink px-3 py-1.5 rounded-full">
                      {p.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 md:p-8 flex items-start justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="font-display text-2xl md:text-4xl font-bold leading-tight mb-2 group-hover:text-coral transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-cream/70 text-sm md:text-base leading-relaxed mb-4">
                      {p.tagline}
                    </p>
                    {p.liveUrl && (
                      <span
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          window.open(p.liveUrl, "_blank", "noreferrer");
                        }}
                        className="mono text-[11px] uppercase tracking-wider text-cream/60 hover:text-coral inline-flex items-center gap-1.5 cursor-pointer"
                      >
                        Visit live <ExternalLink className="w-3.5 h-3.5" />
                      </span>
                    )}
                  </div>
                  <div className="w-12 h-12 rounded-full border-2 border-cream flex items-center justify-center group-hover:bg-coral group-hover:border-coral group-hover:rotate-45 transition-all duration-300 shrink-0">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
