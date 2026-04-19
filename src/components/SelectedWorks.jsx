import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const headerAnimation = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] },
  viewport: { once: true, margin: "-100px" },
};

const CATEGORIES = ["All", "Robotics & Simulation", "Machine Learning", "Full-Stack Apps", "Fun", "Open Source"];

// Alternating bento layout pattern for each row pair
function getBentoLayout(index) {
  const pair = index % 4;
  if (pair === 0) return { className: "md:col-span-7", aspect: "16/10" };
  if (pair === 1) return { className: "md:col-span-5", aspect: "4/3" };
  if (pair === 2) return { className: "md:col-span-5", aspect: "4/3" };
  return { className: "md:col-span-7", aspect: "16/10" };
}

function getProjectImage(project) {
  if (project.image) return project.image;
  if (project.images && project.images.length > 0) return project.images[0];
  return null;
}

function getYouTubeId(embedUrl) {
  if (!embedUrl) return null;
  const parts = embedUrl.split('/');
  return parts[parts.length - 1];
}

function ProjectCard({ project, className, aspect }) {
  const image = getProjectImage(project);
  const youtubeId = project.video ? getYouTubeId(project.video) : null;
  const link = project.link || project.preview || '';

  const CardWrapper = link ? 'a' : 'div';
  const wrapperProps = link
    ? { href: link, target: '_blank', rel: 'noreferrer' }
    : {};

  return (
    <CardWrapper
      {...wrapperProps}
      className={`${className} relative group cursor-pointer overflow-hidden rounded-3xl bg-surface border border-stroke block`}
      style={{ aspectRatio: aspect }}
    >
      {/* Background content */}
      {project.preview ? (
        <iframe
          src={project.preview}
          title={project.title}
          className="absolute inset-0 w-full h-full border-0 pointer-events-none"
          loading="lazy"
        />
      ) : youtubeId ? (
        <img
          src={`https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
      ) : image ? (
        <img
          src={image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
      ) : (
        <div className="absolute inset-0 accent-gradient opacity-20" />
      )}

      {/* Halftone overlay */}
      <div className="absolute inset-0 halftone-overlay opacity-20 mix-blend-multiply" />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-bg/70 opacity-0 group-hover:opacity-100 backdrop-blur-lg transition-all duration-500 flex flex-col items-center justify-center gap-4 p-6">
        <div className="relative px-6 py-3 rounded-full">
          <div className="absolute inset-0 rounded-full accent-gradient animate-gradient-shift" />
          <div className="relative bg-foreground rounded-full px-6 py-3 flex items-center gap-2">
            <span className="text-bg text-sm font-medium">View — </span>
            <span className="text-bg text-sm font-display italic">{project.title}</span>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-2 max-w-xs">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="text-[10px] text-foreground/70 bg-surface/50 backdrop-blur px-2.5 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </CardWrapper>
  );
}

export default function SelectedWorks({ projects }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => Array.isArray(p.category) ? p.category.includes(activeCategory) : p.category === activeCategory);

  return (
    <section id="projects" className="bg-bg py-12 md:py-16">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <motion.div {...headerAnimation} className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-stroke" />
            <span className="text-xs text-muted uppercase tracking-[0.3em]">
              Selected Work
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-body font-light text-foreground">
            Featured <span className="font-display italic">projects</span>
          </h2>
          <p className="text-sm md:text-base text-muted mt-4 max-w-lg">
            A selection of projects I've worked on, from backend systems to machine learning models.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs rounded-full border transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-foreground text-bg border-foreground"
                  : "bg-transparent text-muted border-stroke hover:text-foreground hover:border-foreground/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Bento Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6"
          >
            {filteredProjects.map((project, index) => {
              const { className, aspect } = getBentoLayout(index);
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className={className}
                >
                  <ProjectCard
                    project={project}
                    className="w-full"
                    aspect={aspect}
                  />
                  {/* Description below card */}
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium text-foreground">{project.title}</h3>
                      <span className="text-xs text-muted">{project.date}</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="text-[10px] text-muted border border-stroke px-2 py-0.5 rounded-full">{tag}</span>
                      ))}
                    </div>
                    <ul className="space-y-1.5">
                      {project.bullets.map((bullet, idx) => (
                        <li key={idx} className="text-sm text-muted/80 flex gap-2 leading-relaxed">
                          <span className="text-stroke mt-1.5 flex-shrink-0">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs text-foreground/60 hover:text-foreground transition-colors mt-1">
                        View Project <span>↗</span>
                      </a>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
