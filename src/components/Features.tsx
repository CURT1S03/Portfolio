import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import WordsPullUpMultiStyle from "./WordsPullUpMultiStyle";

const FEATURE_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4";

const CARD_ICON_1 =
  "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85";
const CARD_ICON_2 =
  "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85";
const CARD_ICON_3 =
  "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85";

interface FeatureCardData {
  number: string;
  title: string;
  icon: string;
  items: string[];
}

const CARDS: FeatureCardData[] = [
  {
    number: "01",
    title: "Project Storyboard.",
    icon: CARD_ICON_1,
    items: [
      "Visual timeline editing",
      "Scene breakdown tools",
      "Team collaboration",
      "Export to PDF & share",
    ],
  },
  {
    number: "02",
    title: "Smart Critiques.",
    icon: CARD_ICON_2,
    items: [
      "AI-powered analysis",
      "Creative notes & feedback",
      "Tool integrations",
    ],
  },
  {
    number: "03",
    title: "Immersion Capsule.",
    icon: CARD_ICON_3,
    items: [
      "Notification silencing",
      "Ambient soundscapes",
      "Schedule syncing",
    ],
  },
];

function FeatureCard({
  card,
  index,
}: {
  card: FeatureCardData;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="bg-[#212121] rounded-2xl md:rounded-[1.5rem] p-5 sm:p-6 flex flex-col justify-between h-full"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{
        delay: index * 0.15,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div>
        <img
          src={card.icon}
          alt=""
          className="w-10 h-10 sm:w-12 sm:h-12 rounded mb-5"
        />
        <h3
          className="text-base sm:text-lg font-medium mb-1"
          style={{ color: "#E1E0CC" }}
        >
          {card.title}
        </h3>
        <span className="text-gray-500 text-xs">{card.number}</span>

        <ul className="mt-4 space-y-2.5">
          {card.items.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-gray-400 text-xs sm:text-sm">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <a
        href="#"
        className="inline-flex items-center gap-1.5 text-gray-400 text-xs sm:text-sm mt-6 hover:text-primary transition-colors group"
      >
        Learn more
        <ArrowRight
          className="w-3.5 h-3.5 -rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
        />
      </a>
    </motion.div>
  );
}

function VideoCard() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="relative rounded-2xl md:rounded-[1.5rem] overflow-hidden h-full min-h-[280px]"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={FEATURE_VIDEO} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <p
        className="absolute bottom-5 left-5 text-sm sm:text-base font-medium"
        style={{ color: "#E1E0CC" }}
      >
        Your creative canvas.
      </p>
    </motion.div>
  );
}

export default function Features() {
  return (
    <section className="min-h-screen bg-black relative px-4 md:px-6 py-20 sm:py-28">
      {/* Noise background */}
      <div className="bg-noise absolute inset-0 opacity-[0.15] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 sm:mb-16 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal">
            <WordsPullUpMultiStyle
              segments={[
                {
                  text: "Studio-grade workflows for visionary creators.",
                  className: "text-primary",
                },
              ]}
            />
          </h2>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal mt-2">
            <WordsPullUpMultiStyle
              segments={[
                {
                  text: "Built for pure vision. Powered by art.",
                  className: "text-gray-500",
                },
              ]}
            />
          </h2>
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-2 md:gap-1 lg:h-[480px]">
          <VideoCard />
          {CARDS.map((card, i) => (
            <FeatureCard key={card.number} card={card} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
