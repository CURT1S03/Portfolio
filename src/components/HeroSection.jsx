import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Hls from 'hls.js';

const roles = ["Backend Engineer", "ML Developer", "Data Engineer", "Problem Solver"];

export default function HeroSection({ data }) {
  const videoRef = useRef(null);
  const [roleIndex, setRoleIndex] = useState(0);

  // HLS video setup
  useEffect(() => {
    const video = videoRef.current;
    const src = 'https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8';

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);
      return () => hls.destroy();
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src;
    }
  }, []);

  // Role cycling
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // GSAP entrance animation
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo(
      '.name-reveal',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, delay: 0.1 }
    ).fromTo(
      '.blur-in',
      { opacity: 0, filter: 'blur(10px)', y: 20 },
      { opacity: 1, filter: 'blur(0px)', y: 0, duration: 1, stagger: 0.1 },
      '-=0.9'
    );
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="blur-in text-xs text-muted uppercase tracking-[0.3em] mb-8" style={{ opacity: 0 }}>
          PORTFOLIO &apos;26
        </p>

        <h1
          className="name-reveal text-6xl md:text-8xl lg:text-9xl font-display italic leading-[0.9] tracking-tight text-foreground mb-6"
          style={{ opacity: 0 }}
        >
          {data.name}
        </h1>

        <p className="blur-in text-base md:text-lg text-muted mb-4" style={{ opacity: 0 }}>
          A{' '}
          <span
            key={roleIndex}
            className="font-display italic text-foreground animate-role-fade-in inline-block"
          >
            {roles[roleIndex]}
          </span>{' '}
          based in {data.location}.
        </p>

        <p className="blur-in text-sm md:text-base text-muted max-w-md mx-auto mb-12" style={{ opacity: 0 }}>
          {data.about}
        </p>

        <div className="blur-in inline-flex flex-wrap justify-center gap-4" style={{ opacity: 0 }}>
          <a
            href="#projects"
            className="group relative rounded-full text-sm px-7 py-3.5 bg-foreground text-bg hover:bg-bg hover:text-foreground transition-all duration-300 hover:scale-105"
          >
            <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            See Works
          </a>
          <a
            href={`mailto:${data.email}`}
            className="group relative rounded-full text-sm px-7 py-3.5 border-2 border-stroke bg-bg text-foreground hover:border-transparent transition-all duration-300 hover:scale-105"
          >
            <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            Reach out...
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-xs text-muted uppercase tracking-[0.2em]">Scroll</span>
        <div className="w-px h-10 bg-stroke relative overflow-hidden">
          <div className="w-full h-3 accent-gradient animate-scroll-down" />
        </div>
      </div>
    </section>
  );
}
