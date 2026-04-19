import React from "react";
import { ArrowUpRight, MapPin, Globe } from "lucide-react";
import { useData } from "../context/DataContext";

const Contact = () => {
  const { contact } = useData();

  return (
    <section id="connect" className="relative bg-cream py-24 md:py-32 overflow-hidden">
      <div className="blob bg-coral/25 w-[500px] h-[500px] -top-32 left-1/4"></div>
      <div className="blob bg-[#D4FF3A]/30 w-[380px] h-[380px] bottom-0 right-0"></div>

      <div className="relative max-w-[1200px] mx-auto px-6 md:px-10 text-center">
        <div className="mono text-xs uppercase tracking-[0.25em] text-ink/50 mb-6">
          (05) — Let’s work together
        </div>
        <h2 className="font-display text-5xl md:text-8xl font-bold text-ink leading-[0.92] mb-8 max-w-4xl mx-auto">
          Have a project in{" "}
          <span className="italic text-coral">mind?</span>
        </h2>
        <p className="max-w-2xl mx-auto text-ink/70 text-lg md:text-xl leading-relaxed mb-12">
          We're a technology company based in Noida, building custom and scalable apps and
          websites for founders and companies across India. Explore our services and case studies
          on our website.
        </p>

        <a
          href={contact.websiteUrl}
          target="_blank"
          rel="noreferrer"
          className="btn-coral px-8 py-4 rounded-full text-base font-semibold inline-flex items-center gap-2"
        >
          Visit {contact.website} <ArrowUpRight className="w-5 h-5" />
        </a>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-6 md:gap-10">
          <div className="inline-flex items-center gap-3">
            <span className="w-10 h-10 rounded-full bg-ink text-cream flex items-center justify-center">
              <MapPin className="w-4 h-4" />
            </span>
            <div className="text-left">
              <div className="mono text-[10px] uppercase tracking-wider text-ink/50">
                Headquartered
              </div>
              <div className="text-ink font-medium">{contact.address}</div>
            </div>
          </div>
          <div className="inline-flex items-center gap-3">
            <span className="w-10 h-10 rounded-full bg-ink text-cream flex items-center justify-center">
              <Globe className="w-4 h-4" />
            </span>
            <div className="text-left">
              <div className="mono text-[10px] uppercase tracking-wider text-ink/50">
                Service Area
              </div>
              <div className="text-ink font-medium">Pan-India</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
