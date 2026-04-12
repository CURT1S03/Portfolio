import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const thinkingSteps = [
  "Scanning professional experience...",
  "Cross-referencing: LSPediA • Georgia Tech Solar Racing...",
  "Analyzing backend systems → RAG chatbot, microservices, ETL pipelines...",
  "Evaluating ML expertise → PyTorch, Scikit-learn, computer vision...",
  "Assessing full-stack capabilities → FastAPI, Docker, Kubernetes...",
  "Synthesizing key differentiators...",
  "Generating results ✦",
];

const finalResult =
  "Curtis is a strong candidate because he bridges backend engineering and machine learning with real production experience — from deploying containerized microservices at scale, to building RAG chatbots over 5GB+ datasets, to architecting digital twins with NVIDIA Omniverse. His work at LSPediA and Georgia Tech Solar Racing demonstrates he can ship end-to-end systems that solve real problems.";

export default function DeepThinkSection() {
  const [phase, setPhase] = useState('idle'); // idle | thinking | done
  const [visibleSteps, setVisibleSteps] = useState(0);
  const [typedResult, setTypedResult] = useState('');
  const intervalRef = useRef(null);

  function startThinking() {
    if (phase !== 'idle') return;
    setPhase('thinking');
    setVisibleSteps(0);
    setTypedResult('');
  }

  // Step-by-step reveal
  useEffect(() => {
    if (phase !== 'thinking') return;

    intervalRef.current = setInterval(() => {
      setVisibleSteps((prev) => {
        if (prev >= thinkingSteps.length) {
          clearInterval(intervalRef.current);
          setPhase('done');
          return prev;
        }
        return prev + 1;
      });
    }, 600);

    return () => clearInterval(intervalRef.current);
  }, [phase]);

  // Typewriter for final result
  useEffect(() => {
    if (phase !== 'done') return;
    let i = 0;
    const timer = setInterval(() => {
      i++;
      setTypedResult(finalResult.slice(0, i));
      if (i >= finalResult.length) {
        clearInterval(timer);
      }
    }, 12);
    return () => clearInterval(timer);
  }, [phase]);

  function scrollToProjects() {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <section className="bg-bg py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-stroke" />
            <span className="text-xs text-muted uppercase tracking-[0.3em]">
              Deep Dive
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-body font-light text-foreground">
            What I&apos;ve <span className="font-display italic">built.</span>
          </h2>
        </motion.div>

        {/* Chat card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative rounded-3xl border border-stroke bg-surface/50 p-6 md:p-8 max-w-3xl"
        >
          {/* Question */}
          <p className="text-foreground/90 text-lg md:text-xl font-display italic mb-6">
            &ldquo;Why is Curtis a good candidate?&rdquo;
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-3 mb-6">
            <button
              onClick={startThinking}
              disabled={phase !== 'idle'}
              className={`inline-flex items-center gap-2 text-sm px-5 py-2.5 rounded-full transition-all duration-300 ${
                phase === 'idle'
                  ? 'bg-foreground text-bg hover:scale-105 cursor-pointer'
                  : 'bg-foreground/20 text-foreground/40 cursor-default'
              }`}
            >
              <span className="text-base">✦</span> Deep Think
            </button>
            <button
              onClick={scrollToProjects}
              className="inline-flex items-center gap-2 text-sm px-5 py-2.5 rounded-full border border-stroke text-foreground/80 hover:text-foreground hover:border-foreground/30 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              Show his work <span>→</span>
            </button>
          </div>

          {/* Thinking animation */}
          <AnimatePresence>
            {phase !== 'idle' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="border-t border-stroke pt-5 space-y-1"
              >
                {/* Thinking label */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4E85BF] animate-pulse" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4E85BF] animate-pulse [animation-delay:150ms]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4E85BF] animate-pulse [animation-delay:300ms]" />
                  </span>
                  <span className="text-xs text-muted uppercase tracking-[0.15em] font-mono">
                    Thinking...
                  </span>
                </div>

                {/* Steps */}
                <div className="space-y-1.5 font-mono text-sm">
                  {thinkingSteps.map((step, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -8 }}
                      animate={
                        i < visibleSteps
                          ? { opacity: 1, x: 0 }
                          : { opacity: 0, x: -8 }
                      }
                      transition={{ duration: 0.3 }}
                      className={
                        i < visibleSteps ? 'text-muted' : 'text-transparent'
                      }
                    >
                      {step}
                    </motion.div>
                  ))}
                </div>

                {/* Final result */}
                {phase === 'done' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mt-5 pt-4 border-t border-stroke"
                  >
                    <p className="text-foreground/90 text-sm md:text-base leading-relaxed">
                      {typedResult}
                      <span className="inline-block w-[2px] h-[1em] bg-[#4E85BF] ml-0.5 align-middle animate-pulse" />
                    </p>
                    {typedResult.length >= finalResult.length && (
                      <motion.button
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        onClick={scrollToProjects}
                        className="mt-6 inline-flex items-center gap-2 text-sm px-5 py-2.5 rounded-full bg-foreground text-bg hover:scale-105 transition-all duration-300 cursor-pointer"
                      >
                        See the proof <span>↓</span>
                      </motion.button>
                    )}
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
