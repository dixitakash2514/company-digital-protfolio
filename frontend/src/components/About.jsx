import React from "react";
import { aboutImage } from "../mock/mock";
import { Check } from "lucide-react";

const About = () => {
  const points = [
    "Product-led engineering with startup velocity",
    "Battle-tested AI & LLM architectures",
    "Design systems that scale with your brand",
    "Launch, iterate, measure — repeat",
  ];

  return (
    <section id="about" className="relative bg-cream py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="relative rounded-3xl overflow-hidden border-2 border-ink aspect-[4/5]">
            <img
              src={aboutImage}
              alt="ArgosMob team working"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-5 left-5 mono text-[10px] uppercase tracking-[0.25em] bg-cream text-ink px-3 py-1.5 rounded-full">
              Est. 2020
            </div>
          </div>
          <div className="absolute -bottom-8 -right-4 md:-right-10 bg-coral text-cream border-2 border-ink rounded-2xl p-6 md:p-7 max-w-[260px] shadow-[8px_8px_0_#0F0E0C]">
            <div className="font-display text-5xl font-bold leading-none mb-2">100%</div>
            <div className="text-sm leading-snug">
              Product-obsessed — we treat your roadmap like ours.
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="mono text-xs uppercase tracking-[0.25em] text-ink/50 mb-4">
            (03) — Who we are
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-ink leading-[0.95] mb-8">
            A technology company with a{" "}
            <span className="italic text-coral">big</span> appetite for shipping.
          </h2>
          <p className="text-ink/70 text-lg leading-relaxed mb-6">
            ArgosMob Tech & AI is a technology company headquartered in Noida, building custom and
            scalable apps and websites for founders and businesses Pan-India — across EdTech, AI,
            Healthcare, Marketplaces and E-commerce.
          </p>
          <p className="text-ink/70 text-lg leading-relaxed mb-10">
            We believe great software is a craft. Thoughtful design, clean engineering, real
            user empathy, shipped with conviction.
          </p>
          <ul className="space-y-3">
            {points.map((p, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-ink text-cream flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </span>
                <span className="text-ink font-medium">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
