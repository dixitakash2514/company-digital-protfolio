import React from "react";
import { Quote } from "lucide-react";
import { useData } from "../context/DataContext";

const Testimonials = () => {
  const { testimonials } = useData();

  return (
    <section id="clients" className="relative bg-sand py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <div className="mono text-xs uppercase tracking-[0.25em] text-ink/50 mb-4">
              (04) — Client stories
            </div>
            <h2 className="font-display text-5xl md:text-7xl font-bold text-ink leading-[0.95] max-w-3xl">
              Words from the{" "}
              <span className="italic text-coral">founders</span> we build with.
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <figure
              key={t.id}
              className="relative bg-cream border-2 border-ink rounded-2xl p-8 flex flex-col justify-between"
            >
              <Quote className="w-8 h-8 text-coral mb-4" />
              <blockquote className="text-ink text-base leading-relaxed mb-6 flex-1">
                “{t.quote}”
              </blockquote>
              <figcaption>
                <div className="font-semibold text-ink text-lg">{t.name}</div>
                <div className="mono text-xs uppercase tracking-wider text-ink/60 mt-0.5">
                  {t.role}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
