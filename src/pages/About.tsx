// src/pages/About.tsx

import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import AnimatedSection from "@/components/AnimatedSection";
import PersonalPhotoOne from "@/Images/FarLeft.jpeg";
import PersonalPhotoTwo from "@/Images/LeftOfCenter.jpeg";
import MainPhoto from "@/Images/Center.jpeg";
import PersonalPhotoFour from "@/Images/RightOfCenter.jpeg";
import PersonalPhotoFive from "@/Images/FarRight.jpg";
import AtlantaImg from "@/Images/Atlanta-1.jpg";
import AtlantaImg1 from "@/Images/Atlanta-2.jpg";

const About = () => {
  const [animationStarted, setAnimationStarted] = useState(false);
  const picturesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animationStarted) {
          setAnimationStarted(true);
        }
      },
      { threshold: 0.3 }
    );
    if (picturesRef.current) observer.observe(picturesRef.current);
    return () => {
      if (picturesRef.current) observer.unobserve(picturesRef.current);
    };
  }, [animationStarted]);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="min-h-screen bg-white font-switzer">
      <Navbar />

      {/* About Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">

          {/* Five Photos */}
          <div ref={picturesRef} className="mb-16">
            <div
              className="
                flex 
                flex-col      /* stack on mobile */
                md:flex-row   /* row on md+ */
                items-center 
                md:justify-center 
                gap-y-4       /* vertical gap on mobile */
                md:gap-y-0 
                md:gap-x-4    /* horizontal gap on md+ */
                mb-8
                relative
              "
            >
              {/* Far Left */}
              <div
                className={`w-40 h-52 rounded-lg overflow-hidden transition-all duration-700 ease-out ${
                  animationStarted
                    ? "opacity-100 translate-y-0 rotate-[-5deg] md:-translate-x-14"
                    : "opacity-0 translate-y-5"
                }`}
                style={{ transitionDelay: animationStarted ? "0ms" : "0ms" }}
              >
                <img
                  src={AtlantaImg}
                  alt="Far left portrait"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>

              {/* Left of Center */}
              <div
                className={`w-36 h-48 overflow-hidden rounded-lg transition-all duration-700 ease-out ${
                  animationStarted
                    ? "opacity-100 translate-y-0 rotate-3 md:-translate-x-6"
                    : "opacity-0 translate-y-5"
                }`}
                style={{ transitionDelay: animationStarted ? "100ms" : "0ms" }}
              >
                <img
                  src={PersonalPhotoOne}
                  alt="Left of center portrait"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Center */}
              <div
                className={`w-44 h-56 rounded-lg overflow-hidden transition-all duration-700 ease-out ${
                  animationStarted
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }`}
                style={{ transitionDelay: animationStarted ? "200ms" : "0ms" }}
              >
                <img
                  src={PersonalPhotoTwo}
                  alt="Center headshot"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Right of Center */}
              <div
                className={`w-36 h-48 rounded-lg overflow-hidden transition-all duration-700 ease-out ${
                  animationStarted
                    ? "opacity-100 translate-y-0 rotate-[-3deg] md:translate-x-6"
                    : "opacity-0 translate-y-5"
                }`}
                style={{ transitionDelay: animationStarted ? "300ms" : "0ms" }}
              >
                <img
                  src={PersonalPhotoFour}
                  alt="Right of center portrait"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>

              {/* Far Right */}
              <div
                className={`w-40 h-52 rounded-lg overflow-hidden transition-all duration-700 ease-out ${
                  animationStarted
                    ? "opacity-100 translate-y-0 rotate-3 md:translate-x-14"
                    : "opacity-0 translate-y-5"
                }`}
                style={{ transitionDelay: animationStarted ? "400ms" : "0ms" }}
              >
                <img
                  src={AtlantaImg1}
                  alt="Far right portrait"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Heading */}
          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl font-bold text-heading text-center mb-8">
              Hi, I'm Andrew!
            </h1>
          </AnimatedSection>

          {/* Bio Text */}
          <div className="space-y-6 text-lg text-paragraph max-w-3xl mx-auto text-center">
            <AnimatedSection delay={200}>
              <p>
                I'm a designer at heart. My passion lies in bringing clarity and simplicity to complex problems.
                I began my journey in healthcare, where I saw firsthand how thoughtful design can transform patient outcomes and streamline systems. 
                Since then, I've expanded into a range of industries, applying those same principles to solve challenges beyond healthcare.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={400}>
              <p>
                I see design as more than just visuals. It's about people, empathy, and solving real problems.
                Whether it's integrating AI into TeleHealth or leading global teams across different sectors, 
                I've spent over 15 years crafting user-centered solutions that make a difference.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={600}>
              <p>
                I'm a curious mind and a builder of better ways. I lead with data, am driven by user insight, 
                and always look for the next big challenge.
                I believe in elevating experiences through design and compassion.
              </p>
            </AnimatedSection>
          </div>

          {/* Contact */}
          <div className="mt-20 text-center">
            <AnimatedSection delay={800}>
              <p className="text-paragraph mb-2">LET'S BE FRIENDS!</p>
              <a
                href="mailto:andrewseymour77@gmail.com"
                className="text-2xl font-medium text-heading hover:text-blue-600 transition-colors"
              >
                andrewseymour77@gmail.com
              </a>
            </AnimatedSection>
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center mt-16 text-sm text-paragraph">
            <AnimatedSection delay={1000}>
              <button
                onClick={scrollToTop}
                className="hover:text-heading transition-colors cursor-pointer"
              >
                Back to top ↑
              </button>
            </AnimatedSection>
            <AnimatedSection delay={1200}>
              <span>MADE WITH ❤️ AND ☕ IN 🇺🇸 🇨🇦</span>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
