import React from "react";
import { ArrowUpRight, MapPin, Globe } from "lucide-react";
import { useData } from "../context/DataContext";

const Footer = () => {
  const { contact } = useData();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-cream relative overflow-hidden">
      <div className="absolute -top-32 -left-32 blob bg-coral/30 w-96 h-96"></div>
      <div className="absolute -bottom-40 -right-20 blob bg-[#D4FF3A]/20 w-[500px] h-[500px]"></div>

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 pt-20 pb-10">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
          <div className="max-w-xl">
            <h3 className="font-display text-5xl md:text-6xl font-bold leading-[0.95] mb-8">
              Let’s build <span className="text-coral">something</span>{" "}
              <span className="italic" style={{ color: "#D4FF3A" }}>
                unforgettable.
              </span>
            </h3>
            <a
              href={contact.websiteUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mono text-sm uppercase tracking-wider border-b-2 border-coral pb-1 hover:text-coral transition-colors"
            >
              {contact.website} <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-10">
            <div>
              <div className="mono text-[11px] uppercase tracking-[0.2em] text-cream/50 mb-4">
                Company
              </div>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#work" className="hover:text-coral transition-colors">
                    Work
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-coral transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-coral transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#clients" className="hover:text-coral transition-colors">
                    Clients
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="mono text-[11px] uppercase tracking-[0.2em] text-cream/50 mb-4">
                Reach
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 mt-1 text-coral shrink-0" />
                  <span>
                    {contact.address}
                    <br />
                    <span className="text-cream/50">{contact.serviceArea}</span>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Globe className="w-3.5 h-3.5 mt-1 text-coral shrink-0" />
                  <a
                    href={contact.websiteUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-coral transition-colors"
                  >
                    {contact.website}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/15 pt-8 flex flex-col md:flex-row justify-between gap-4 items-start md:items-center">
          <div className="mono text-xs text-cream/50">
            © {year} ArgosMob Tech & AI — Built in Noida, serving Pan-India.
          </div>
          <div className="mono text-[10px] uppercase tracking-[0.25em] text-cream/40">
            React · React Native · Node.js · Express
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
