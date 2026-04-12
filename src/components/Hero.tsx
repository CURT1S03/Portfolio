import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import WordsPullUp from "./WordsPullUp";

const NAV_ITEMS = ["Our story", "Collective", "Workshops", "Programs", "Inquiries"];
const HERO_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Hero() {
  return (
    <section className="h-screen p-4 md:p-6">
      <div className="relative w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden">
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>

        {/* Noise overlay */}
        <div className="noise-overlay absolute inset-0 opacity-[0.7] mix-blend-overlay pointer-events-none" />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

        {/* Navbar */}
        <nav className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
          <div className="bg-black rounded-b-2xl md:rounded-b-3xl px-4 py-2 md:px-8">
            <ul className="flex items-center gap-3 sm:gap-6 md:gap-12 lg:gap-14">
              {NAV_ITEMS.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[10px] sm:text-xs md:text-sm transition-colors"
                    style={{ color: "rgba(225, 224, 204, 0.8)" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#E1E0CC")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "rgba(225, 224, 204, 0.8)")
                    }
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Hero content – bottom aligned */}
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-4 sm:px-6 sm:pb-6 md:px-10 md:pb-10">
          <div className="grid grid-cols-12 gap-4 items-end">
            {/* Left: heading */}
            <div className="col-span-12 lg:col-span-8">
              <h1
                className="text-[26vw] sm:text-[24vw] md:text-[22vw] lg:text-[20vw] xl:text-[19vw] 2xl:text-[20vw] font-medium leading-[0.85] tracking-[-0.07em]"
                style={{ color: "#E1E0CC" }}
              >
                <WordsPullUp text="Prisma" showAsterisk />
              </h1>
            </div>

            {/* Right: description + button */}
            <div className="col-span-12 lg:col-span-4 flex flex-col gap-4 pb-2">
              <motion.p
                className="text-primary/70 text-xs sm:text-sm md:text-base"
                style={{ lineHeight: 1.2 }}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.5}
              >
                Prisma is a worldwide network of visual artists, filmmakers and
                storytellers bound not by place, status or labels but by passion
                and hunger to unlock potential through our unique perspectives.
              </motion.p>

              <motion.a
                href="#"
                className="group inline-flex items-center gap-1.5 hover:gap-3 bg-primary rounded-full pl-5 pr-1.5 py-1.5 transition-all w-fit"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.7}
              >
                <span className="text-black font-medium text-sm sm:text-base">
                  Join the lab
                </span>
                <span className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ArrowRight
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    style={{ color: "#E1E0CC" }}
                  />
                </span>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
