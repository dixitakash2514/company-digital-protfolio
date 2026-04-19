import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink, ArrowUpRight } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useData } from "../context/DataContext";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { projects } = useData();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="font-display text-5xl font-bold mb-4">Project not found</h1>
          <button onClick={() => navigate("/")} className="btn-coral px-6 py-3 rounded-full font-semibold">
            Back home
          </button>
        </div>
      </div>
    );
  }

  const related = projects.filter((p) => p.id !== project.id).slice(0, 2);

  return (
    <div className="bg-cream min-h-screen">
      <Header />
      <main className="pt-28 pb-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <Link
            to="/"
            className="mono text-xs uppercase tracking-wider inline-flex items-center gap-2 text-ink/60 hover:text-coral mb-10"
          >
            <ArrowLeft className="w-4 h-4" /> Back to work
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="mono text-[10px] uppercase tracking-[0.2em] bg-ink text-cream px-3 py-1.5 rounded-full">
              {project.category}
            </span>
          </div>

          <h1 className="font-display font-bold text-ink text-5xl md:text-7xl leading-[0.95] mb-8 max-w-4xl">
            {project.title}
          </h1>

          <p className="text-ink/70 text-xl leading-relaxed max-w-3xl mb-10">
            {project.tagline}
          </p>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-coral px-6 py-3 rounded-full text-sm font-semibold inline-flex items-center gap-2 mb-12"
            >
              Visit live site <ExternalLink className="w-4 h-4" />
            </a>
          )}

          <div className="rounded-3xl overflow-hidden border-2 border-ink aspect-[16/9] mb-16">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          </div>

          <div className="grid md:grid-cols-3 gap-10 mb-20">
            <div className="md:col-span-2">
              <div className="mono text-xs uppercase tracking-[0.25em] text-ink/50 mb-4">
                Overview
              </div>
              <p className="text-ink text-lg leading-relaxed">{project.description}</p>
            </div>
            <div>
              <div className="mono text-xs uppercase tracking-[0.25em] text-ink/50 mb-4">
                Tech stack
              </div>
              <div className="flex flex-wrap gap-2">
                {(project.tech || []).map((t) => (
                  <span
                    key={t}
                    className="mono text-xs uppercase tracking-wider bg-white border border-ink px-3 py-1.5 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {related.length > 0 && (
            <div className="border-t border-ink/15 pt-12">
              <div className="mono text-xs uppercase tracking-[0.25em] text-ink/50 mb-6">
                More work
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {related.map((p) => (
                  <Link
                    key={p.id}
                    to={`/project/${p.id}`}
                    className="project-card group relative rounded-2xl overflow-hidden border-2 border-ink bg-white"
                  >
                    <div className="img-wrap aspect-[16/10]">
                      <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-6 flex items-center justify-between gap-4">
                      <div>
                        <div className="mono text-[10px] uppercase tracking-[0.2em] text-ink/50 mb-1">
                          {p.category}
                        </div>
                        <h3 className="font-display text-2xl font-bold text-ink group-hover:text-coral transition-colors">
                          {p.title}
                        </h3>
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-ink group-hover:rotate-45 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
