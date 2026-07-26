import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const terminalLines = [
  {
    command: 'whoami',
    output: 'Curtis Cao',
    threshold: 14,
  },
  {
    command: 'cat about.md',
    output: 'Backend systems, machine learning, and robotics software.',
    threshold: 34,
  },
  {
    command: 'ls experience/',
    output: 'Georgia Tech Solar Racing | CMS Energy | LSPediA  ',
    threshold: 58,
  },
  {
    command: 'open portfolio.app',
    output: 'Launching portfolio experience...',
    threshold: 84,
  },
];

export default function LoadingScreen({ onComplete }) {
  const [count, setCount] = useState(0);
  const startRef = useRef(null);

  useEffect(() => {
    const duration = 3000;
    let rafId;

    const animate = (timestamp) => {
      if (!startRef.current) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(progress * 100));

      if (progress < 1) {
        rafId = requestAnimationFrame(animate);
      } else {
        setTimeout(() => onComplete(), 220);
      }
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [onComplete]);

  const visibleLines = terminalLines.filter((line) => count >= line.threshold);
  const quickProgress = Math.min(100, Math.floor(100 * (1 - Math.pow(1 - count / 100, 2.4))));

  return (
    <div className="fixed inset-0 z-[9999] terminal-loader-overlay flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 12, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.42, ease: 'easeOut' }}
        className="terminal-loader-shell"
      >
        <div className="terminal-loader-titlebar">
          <div className="terminal-loader-dots" aria-hidden="true">
            <span className="terminal-dot terminal-dot-red" />
            <span className="terminal-dot terminal-dot-yellow" />
            <span className="terminal-dot terminal-dot-green" />
          </div>
          <span className="terminal-loader-title">curtis@portfolio - zsh</span>
          <span className="terminal-loader-percent">{String(count).padStart(3, '0')}%</span>
        </div>

        <div className="terminal-loader-body">
          {visibleLines.map((line, idx) => (
            <div key={line.command} className="terminal-line" style={{ animationDelay: `${idx * 0.13}s` }}>
              <div className="terminal-command-row">
                <span className="terminal-prompt">$</span>
                <span className="terminal-command-text">{line.command}</span>
                {idx === visibleLines.length - 1 && count < 100 ? <span className="terminal-cursor" /> : null}
              </div>
              <div className="terminal-output-row">{line.output}</div>
            </div>
          ))}

          {count < 100 ? (
            <div className="terminal-command-row terminal-idle-row">
              <span className="terminal-prompt">$</span>
              <span className="terminal-cursor" />
            </div>
          ) : null}

          <div className="terminal-progress-wrap">
            <div className="terminal-progress-track">
              <div className="terminal-progress-fill" style={{ transform: `scaleX(${count / 100})` }} />
            </div>
          </div>
        </div>
      </motion.div>

      <div className="terminal-bottom-quick" aria-hidden="true">
        <div className="terminal-bottom-label-row">
          <span className="terminal-prompt">$</span>
          <span className="terminal-bottom-label">boot sequence</span>
          <span className="terminal-bottom-percent">{String(quickProgress).padStart(3, '0')}%</span>
        </div>
        <div className="terminal-bottom-track">
          <div className="terminal-bottom-fill" style={{ transform: `scaleX(${quickProgress / 100})` }} />
        </div>
      </div>
    </div>
  );
}
