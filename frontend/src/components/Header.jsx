import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { LOGO_URL } from "../mock/mock";
import { useData } from "../context/DataContext";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Clients", href: "#clients" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { contact } = useData();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleAnchor = (e, href) => {
    if (location.pathname !== "/") {
      e.preventDefault();
      navigate("/" + href);
      return;
    }
    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-md border-b border-sand"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-xl bg-ink flex items-center justify-center overflow-hidden shrink-0">
            <img
              src={LOGO_URL}
              alt="ArgosMob logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="leading-tight">
            <div className="font-display font-bold text-ink text-lg tracking-tight">
              ArgosMob
            </div>
            <div className="mono text-[10px] uppercase tracking-[0.2em] text-ink/60">
              Tech & AI
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={(e) => handleAnchor(e, n.href)}
              className="nav-link text-ink/80 hover:text-ink text-sm font-medium"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={contact.websiteUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-coral px-5 py-2.5 rounded-full text-sm font-semibold inline-flex items-center gap-1.5"
          >
            {contact.website} <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <button
          className="md:hidden p-2 text-ink"
          onClick={() => setOpen(!open)}
          aria-label="menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-cream border-t border-sand">
          <div className="px-6 py-6 flex flex-col gap-5">
            {navItems.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={(e) => handleAnchor(e, n.href)}
                className="text-ink text-lg font-medium"
              >
                {n.label}
              </a>
            ))}
            <a
              href={contact.websiteUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-coral px-5 py-3 rounded-full text-sm font-semibold inline-flex items-center gap-1.5 w-fit"
            >
              {contact.website} <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
