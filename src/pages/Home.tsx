// src/pages/Home.tsx

import { useState } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import AnimatedSection from "@/components/AnimatedSection";
import CaseStudyImgOne from "@/Images/CaseStudyOneImg.svg";
import CaseStudyImgTwo from "@/Images/CaseStudyImgTwo.svg";

const Home = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Ambient AI for Clinical Notes",
      image: CaseStudyImgOne,
      link: "/case-study/ambient-ai",
    },
    {
      id: 2,
      title: "Medora Health",
      image: CaseStudyImgTwo,
      link: "/case-study/medora-health",
    },
  ];

  const scrollToCaseStudies = () => {
    document
      .getElementById("case-studies")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openResume = () => {
    window.open("/resume.pdf", "_blank");
  };

  return (
    <div className="min-h-screen bg-white font-switzer">
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-200 via-pink-100 to-purple-200" />
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-orange-100/30 to-transparent" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <AnimatedSection delay={200}>
            <h1 className="text-5xl md:text-7xl font-bold text-heading mb-6 leading-tight">
              Strategic Design Leader Focused on UX Innovation and AI Solutions
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={600}>
            <div
              className="absolute top-36 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
              onClick={scrollToCaseStudies}
            >
              <ArrowDown className="w-8 h-8 text-heading/70 mx-auto animate-bounce" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-heading text-center mb-16">
              Featured Work
            </h2>
          </AnimatedSection>

          <div className="space-y-16">
            {caseStudies.map((study, idx) => (
              <AnimatedSection key={study.id} delay={idx * 200}>
                <CaseStudyCard study={study} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-paragraph mb-2">LET’S BE FRIENDS!</p>
            <a
              href="mailto:andrewseymour77@gmail.com"
              className="text-2xl font-medium text-heading hover:text-blue-600 transition-colors"
            >
              andrewseymour77@gmail.com
            </a>
          </AnimatedSection>

          <div className="flex justify-between items-center mt-16 text-sm text-paragraph">
            <AnimatedSection delay={200}>
              <button
                onClick={scrollToTop}
                className="hover:text-heading transition-colors cursor-pointer"
              >
                Back to top ↑
              </button>
            </AnimatedSection>
            <AnimatedSection delay={400}>
              <span>MADE WITH ❤️ AND ☕ IN 🇺🇸 🇨🇦</span>
            </AnimatedSection>
            <AnimatedSection delay={600}>
              <button
                onClick={openResume}
                className="hover:text-heading transition-colors cursor-pointer"
              >
                Resume →
              </button>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

interface CaseStudyCardProps {
  study: {
    id: number;
    title: string;
    image: string;
    link: string;
  };
}

const CaseStudyCard = ({ study }: CaseStudyCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to={study.link}>
      <div
        className="group cursor-pointer transition-transform duration-500 ease-out hover:scale-[1.02]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image card (taller now) */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg">
          <div
            className="h-[40rem] w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${study.image})` }}
          />

          {/* Hover overlay */}
          <div
            className={`absolute inset-0 bg-black/50 flex items-end justify-start p-6 rounded-2xl transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="bg-white px-6 py-3 rounded-full flex items-center gap-2 hover:scale-105 transition-transform">
              <span className="text-heading font-medium">Read More</span>
              <ArrowRight className="w-4 h-4 text-heading" />
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="mt-6 px-1">
          <h3 className="text-3xl font-bold text-heading">{study.title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Home;
