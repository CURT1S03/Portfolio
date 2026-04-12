import { useRef } from "react";
import { useScroll } from "framer-motion";
import WordsPullUpMultiStyle from "./WordsPullUpMultiStyle";
import AnimatedLetter from "./AnimatedLetter";

const BODY_TEXT =
  "Over the last seven years, I have worked with Parallax, a Berlin-based production house that crafts cinema, series, and Noir Studio in Paris. Together, we have created work that has earned international acclaim at several major festivals.";

export default function About() {
  const textRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const chars = BODY_TEXT.split("");

  return (
    <section className="bg-black py-20 sm:py-28 md:py-36 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-[#101010] rounded-2xl md:rounded-[2rem] px-6 py-16 sm:px-10 sm:py-20 md:px-16 md:py-28 text-center">
          {/* Label */}
          <span className="text-primary text-[10px] sm:text-xs tracking-widest uppercase block mb-6">
            Visual arts
          </span>

          {/* Multi-style heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-3xl mx-auto leading-[0.95] sm:leading-[0.9] mb-10 sm:mb-14">
            <WordsPullUpMultiStyle
              segments={[
                { text: "I am Marcus Chen,", className: "font-normal" },
                {
                  text: "a self-taught director.",
                  className: "italic font-serif",
                },
                {
                  text: "I have skills in color grading, visual effects, and narrative design.",
                  className: "font-normal",
                },
              ]}
              containerClassName="text-primary"
            />
          </h2>

          {/* Scroll-animated paragraph */}
          <p
            ref={textRef}
            className="text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
            style={{ color: "#DEDBC8" }}
          >
            {chars.map((char, i) => (
              <AnimatedLetter
                key={i}
                char={char}
                index={i}
                totalChars={chars.length}
                scrollProgress={scrollYProgress}
              />
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
