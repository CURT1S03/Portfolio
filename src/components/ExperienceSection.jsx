import { motion } from 'framer-motion';

const headerAnimation = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] },
  viewport: { once: true, margin: "-100px" },
};

export default function ExperienceSection({ experience, education }) {
  return (
    <section id="experience" className="bg-bg py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <motion.div {...headerAnimation} className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-stroke" />
            <span className="text-xs text-muted uppercase tracking-[0.3em]">
              Background
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-body font-light text-foreground">
            Experience &amp; Education
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Work Experience — 2 cols */}
          <div className="lg:col-span-2 space-y-6">
            {experience.map((job, i) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-surface/30 border border-stroke rounded-2xl"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                  <div>
                    <h4 className="text-lg text-foreground font-medium">{job.role}</h4>
                    <p className="text-sm text-muted">
                      {job.company} &middot; {job.location}
                    </p>
                  </div>
                  <span className="text-xs text-muted bg-stroke/50 px-3 py-1 rounded-full whitespace-nowrap">
                    {job.date}
                  </span>
                </div>

                <ul className="space-y-2.5">
                  {job.bullets.map((bullet, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-muted/80 flex gap-2.5 leading-relaxed"
                    >
                      <span className="text-stroke mt-1.5 flex-shrink-0">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {job.images && job.images.length > 0 && (
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    {job.images.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt={`${job.company} ${idx + 1}`}
                        className="rounded-xl border border-stroke w-full h-auto object-cover"
                      />
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Education — 1 col */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-5 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.2em]">
                Education
              </span>
            </div>

            {education.map((edu, i) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-surface/30 border border-stroke rounded-2xl"
              >
                <h4 className="text-base text-foreground font-medium leading-snug">
                  {edu.degree}
                </h4>
                <p className="text-sm text-muted mt-1">{edu.school}</p>
                <p className="text-xs text-muted/60 mt-2">{edu.date}</p>
                {edu.bullets.length > 0 && (
                  <div className="mt-3 pt-3 border-t border-stroke">
                    {edu.bullets.map((b, idx) => (
                      <p key={idx} className="text-xs text-muted/70 leading-relaxed">
                        {b}
                      </p>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
