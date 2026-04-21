import { useState, useEffect } from 'react';

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
];

export default function Navbar({ email, onProjectsClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4">
      <div
        className={`inline-flex items-center rounded-full backdrop-blur-md border border-white/10 bg-surface px-2 py-2 transition-shadow duration-300 ${
          scrolled ? 'shadow-md shadow-black/10' : ''
        }`}
      >
        {/* Logo */}
        <a href="#home" className="group relative w-9 h-9 rounded-full p-[2px] flex-shrink-0">
          <div className="absolute inset-0 rounded-full accent-gradient group-hover:[background:linear-gradient(270deg,#89AACC_0%,#4E85BF_100%)] transition-all" />
          <div className="relative w-full h-full rounded-full bg-bg flex items-center justify-center">
            <span className="font-display italic text-[13px] text-foreground">CC</span>
          </div>
        </a>

        {/* Divider */}
        <div className="w-px h-5 bg-stroke mx-1 hidden sm:block" />

        {/* Nav Links */}
        <div className="hidden sm:flex items-center">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(event) => {
                setActive(link.label);
                if (link.label === 'Projects') {
                  event.preventDefault();
                  onProjectsClick?.();
                }
              }}
              className={`text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-colors ${
                active === link.label
                  ? 'text-foreground bg-stroke/50'
                  : 'text-muted hover:text-foreground hover:bg-stroke/50'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-px h-5 bg-stroke mx-1 hidden sm:block" />

        {/* Say hi button */}
        <a
          href={`mailto:${email}`}
          className="relative group text-xs sm:text-sm rounded-full"
        >
          <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity" />
          <span className="relative flex items-center gap-1.5 bg-surface rounded-full px-3 sm:px-4 py-1.5 sm:py-2 backdrop-blur-md text-foreground">
            Say hi <span className="text-xs">↗</span>
          </span>
        </a>
      </div>
    </nav>
  );
}
