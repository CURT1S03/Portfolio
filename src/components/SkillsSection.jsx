import { motion } from 'framer-motion';

const headerAnimation = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] },
  viewport: { once: true, margin: "-100px" },
};

export default function SkillsSection({ skills }) {
  return (
    <section id="skills" className="bg-bg py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <motion.div {...headerAnimation} className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-stroke" />
            <span className="text-xs text-muted uppercase tracking-[0.3em]">
              Expertise
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-body font-light text-foreground">
            Technical <span className="font-display italic">skills</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-6 md:p-8 bg-surface/30 border border-stroke rounded-2xl"
          >
            <h4 className="text-sm text-muted uppercase tracking-[0.2em] mb-5">
              Languages
            </h4>
            <div className="flex flex-wrap gap-2">
              {skills.languages.map((skill, i) => (
                <span
                  key={i}
                  className="text-sm text-foreground/80 border border-stroke px-4 py-2 rounded-full hover:border-foreground/30 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="p-6 md:p-8 bg-surface/30 border border-stroke rounded-2xl"
          >
            <h4 className="text-sm text-muted uppercase tracking-[0.2em] mb-5">
              Technologies &amp; Frameworks
            </h4>
            <div className="flex flex-wrap gap-2">
              {skills.technologies.map((skill, i) => (
                <span
                  key={i}
                  className="text-sm text-foreground/80 border border-stroke px-4 py-2 rounded-full hover:border-foreground/30 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
