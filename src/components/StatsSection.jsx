import { motion } from 'framer-motion';

const stats = [
  { value: "5+", label: "Production Microservices" },
  { value: "100K+", label: "Records Processed" },
  { value: "99.9%", label: "Pipeline Uptime" },
];

export default function StatsSection() {
  return (
    <section className="bg-bg py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl lg:text-7xl font-display italic text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted uppercase tracking-[0.2em]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
