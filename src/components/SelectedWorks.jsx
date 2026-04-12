import { motion } from 'framer-motion';

const headerAnimation = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] },
  viewport: { once: true, margin: "-100px" },
};

const bentoItems = [
  { id: "proj-0", className: "md:col-span-7", aspect: "16/10" },
  { id: "proj-2", className: "md:col-span-5", aspect: "4/3" },
  { id: "proj-0b", className: "md:col-span-5", aspect: "4/3" },
  { id: "proj-ascensio", className: "md:col-span-7", aspect: "16/10" },
  { id: "proj-1", className: "md:col-span-7", aspect: "16/10" },
  { id: "proj-4", className: "md:col-span-5", aspect: "4/3" },
  { id: "proj-5", className: "md:col-span-7", aspect: "16/10" },
];

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
  const remainingProjects = projects.filter(
    (p) => !bentoItems.find((b) => b.id === p.id)
  );

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

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {bentoItems.map(({ id, className, aspect }) => {
            const project = projects.find((p) => p.id === id);
            if (!project) return null;

            return (
              <motion.div
                key={id}
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
        </div>

        {/* Remaining projects as pills */}
        {remainingProjects.length > 0 && (
          <div className="mt-8 space-y-3">
            {remainingProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between gap-6 p-4 sm:p-5 bg-surface/30 hover:bg-surface border border-stroke rounded-[40px] sm:rounded-full transition-colors group"
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      <div className="w-10 h-10 rounded-full accent-gradient flex-shrink-0 flex items-center justify-center">
                        <span className="text-bg text-xs font-bold">
                          {project.title.charAt(0)}
                        </span>
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-foreground font-medium truncate">
                          {project.title}
                        </h4>
                        <p className="text-xs text-muted truncate">
                          {project.tags.join(' · ')}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs text-muted group-hover:text-foreground transition-colors flex-shrink-0">
                      View →
                    </span>
                  </a>
                ) : (
                  <div className="flex items-center justify-between gap-6 p-4 sm:p-5 bg-surface/30 border border-stroke rounded-[40px] sm:rounded-full">
                    <div className="flex items-center gap-4 min-w-0">
                      <div className="w-10 h-10 rounded-full accent-gradient flex-shrink-0 flex items-center justify-center">
                        <span className="text-bg text-xs font-bold">
                          {project.title.charAt(0)}
                        </span>
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-foreground font-medium truncate">
                          {project.title}
                        </h4>
                        <p className="text-xs text-muted truncate">
                          {project.tags.join(' · ')}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs text-muted flex-shrink-0">
                      {project.date}
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
