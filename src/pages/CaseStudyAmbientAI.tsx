// src/pages/CaseStudyAmbientAI.tsx
import { useState, useEffect } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import AnimatedSection from "@/components/AnimatedSection";

import Logo                from "@/Images/Logo.svg";
import HeroTopLeft         from "@/Images/Top-Left.svg";
import HeroTopRight        from "@/Images/Top-Right.svg";
import HeroBottomLeft      from "@/Images/Bottom-Left.svg";
import HeroBottomRight     from "@/Images/Bottom-Right.svg";
import BottomCenter        from "@/Images/Bottom-Centre.svg";

import ProblemImg          from "@/Images/ProblemImg.svg";
import CompAnalysisImg     from "@/Images/CompAnalysisImg.svg";
import EHRImg              from "@/Images/EHRImg.svg";
import VoiceImg            from "@/Images/VoiceImg.svg";
import AmbientImg          from "@/Images/AmbientImg.svg";
import ThreeCardImg        from "@/Images/ThreeCrdImg.svg";
import ChallengesImg       from "@/Images/ChallengesGrid.svg";
import FocusIllustration   from "@/Images/FocusIllustration.svg";
import ConstraintsImg      from "@/Images/ConstraintsGrid.svg";
import BigChallengeImg     from "@/Images/BigChallengeImg.svg";
import UserStoriesImg      from "@/Images/UserStoriesImg.svg";
import CorePrinciplesImg   from "@/Images/CorePrinciplesImg.svg";
import KeyFlowsImg         from "@/Images/KeyFlowsImg.svg";
import OurSolutionImg      from "@/Images/OurSolutionImg.svg";
import AmbientStartImg     from "@/Images/AmbientStartImg.svg";
import AmbientListeningImg from "@/Images/AmbientListeningImg.svg";
import VisitNoteImg        from "@/Images/VisitNoteImg.svg";
import NoteCompleteImg     from "@/Images/NoteCompleteImg.svg";
import WhatChangedImg      from "@/Images/WhatChangedImg.svg";
import DrPatelImg          from "@/Images/DrPatelImg.svg";
import JamieLinImg         from "@/Images/JamieLinImg.svg";

/** Fade‑in hook */
function useFadeInOnScroll() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.remove("opacity-0", "translate-y-6");
            e.target.classList.add("opacity-100", "translate-y-0", "animate-fade-in-up");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".fade-in-section").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

const CaseStudyAmbientAI = () => {
  const [activeSection, setActiveSection] = useState(0);
  useFadeInOnScroll();

  /** highlight sidebar link (optional) */
  useEffect(() => {
    const onScroll = () => {
      const pos = window.scrollY + 200;
      document.querySelectorAll<HTMLElement>(".content-section").forEach((sec, i) => {
        if (pos >= sec.offsetTop && pos < sec.offsetTop + sec.offsetHeight) {
          setActiveSection(i);
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /** scroll to a numbered `.content-section` */
  const scrollToSection = (idx: number) => {
    const sec = document.querySelectorAll<HTMLElement>(".content-section")[idx];
    sec?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ─── Hero Section ───────────────────────────────────────────────────── */}
      <section className="relative min-h-screen overflow-hidden bg-[#FFF0D1]">
        {/* Top decorations */}
        <img
          src={HeroTopLeft}
          aria-hidden
          className="hidden lg:block absolute top-0 left-0 w-32 md:w-48 lg:w-64"
        />
        <img
          src={HeroTopRight}
          aria-hidden
          className="hidden lg:block absolute top-0 right-0 w-28 md:w-44 lg:w-60"
        />

        {/* Bottom mobiles */}
        <img
          src={HeroBottomLeft}
          aria-hidden
          className="hidden lg:block absolute bottom-0 sm:bottom-[-4rem] md:bottom-[-6rem] lg:bottom-[-8rem] -left-8 md:-left-16 w-[30rem] md:w-[34rem] lg:w-[38rem]" 
        />
        <img
          src={HeroBottomRight}
          aria-hidden
          className="hidden lg:block absolute bottom-0 sm:bottom-[-4rem] md:bottom-[-6rem] lg:bottom-[-8rem] -right-8 md:-right-16 w-[30rem] md:w-[34rem] lg:w-[38rem]" 
        />

        {/* Center “U” */}
        <img
          src={BottomCenter}
          aria-hidden
          className="absolute left-1/2 bottom-20 md:bottom-28 lg:bottom-32 transform -translate-x-1/2 w-48 md:w-64 lg:w-80" 
        />

        {/* Hero copy */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center transform -translate-y-36">
          <span className="felx items-center justify-center gap-2 bg-[#ECD4B0] text-[#362705] px-6 py-4 rounded-full whitespace-nowrap text-base sm:text-xl md:text-2xl lg:text-[36px] font-normal mb-8 leading-normal tracking-[-0.3px">
            Mobile app case study
          </span>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-[#1F313B] mb-6">
            Ambient AI for<br/>Clinical Notes
          </h1>
          <p className="max-w-md sm:max-w-lg lg:max-w-none text-xl md:text-2xl lg:text-3xl text-[#1D2E35] font-normal whitespace-normal lg:whitespace-nowrap">
            A mobile app to reduce documentation burden for physicians
          </p>
        </div>

        {/* Scroll arrow */}
        <div
          onClick={() => scrollToSection(0)}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer"
        >
          <ArrowDown className="w-8 h-8 text-blue/70 animate-bounce" />
        </div>
      </section>

      {/* ─── Main Content ───────────────────────────────────────────────────── */}
      <div className="relative">
        <div className="max-w-full mx-auto flex">
          {/* Sidebar (xl+) */}
          <div className="hidden xl:flex w-80 sticky top-20 h-screen flex-col justify-between px-6 pb-24">
            <img src={Logo} alt="Ambient AI Logo" />
            <nav className="space-y-4">
              {["Challenge", "Solution", "MVP"].map((label, i) => (
                <button
                  key={label}
                  onClick={() => scrollToSection(i)}
                  className={`flex items-center gap-3 w-full text-left py-3 px-4 rounded-lg ${
                    activeSection === i ? "bg-blue-100" : "hover:bg-blue-50"
                  }`}
                >
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  {label}
                </button>
              ))}
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="flex items-center gap-3 w-full text-left py-3 px-4 rounded-lg hover:bg-blue-50"
              >
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                Back to top
              </button>
            </nav>
          </div>

          {/* Scrollable right */}
          <div className="flex-1 xl:pl-4 px-6 xl:px-0 xl:pr-12">
            {/* ── Four‑column grid */}
            <div className="content-section grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
              <div className="fade-in-section opacity-0 translate-y-6 mt-10">
                <p className="text-sm uppercase tracking-wider">Role</p>
                <ul className="mt-2 space-y-1">
                  <li>Director of Design</li>
                  <li>Lead UX Strategist</li>
                </ul>
              </div>
              <div className="fade-in-section opacity-0 translate-y-6 mt-10" style={{ animationDelay: "0.2s" }}>
                <p className="text-sm uppercase tracking-wider">Collaborators</p>
                <ul className="mt-2 space-y-1">
                  <li>Product Manager</li>
                  <li>Engineering Team</li>
                  <li>Clinical Advisors</li>
                  <li>UX Researcher</li>
                  <li>Design Ops</li>
                </ul>
              </div>
              <div className="fade-in-section opacity-0 translate-y-6 mt-10" style={{ animationDelay: "0.4s" }}>
                <p className="text-sm uppercase tracking-wider">Skills</p>
                <ul className="mt-2 space-y-1">
                  <li>UX Strategy</li>
                  <li>Interaction Design</li>
                  <li>Visual Design</li>
                  <li>Prototyping</li>
                </ul>
              </div>
              <div className="fade-in-section opacity-0 translate-y-6 mt-10" style={{ animationDelay: "0.6s" }}>
                <p className="text-sm uppercase tracking-wider">Timeline</p>
                <ul className="mt-2 space-y-1">
                  <li>6 Months</li>
                  <li>Mar–Aug 2024</li>
                </ul>
              </div>
            </div>

            {/* ── “The Problem” */}
            <div className="mb-12 fade-in-section opacity-0 translate-y-6">
              <p className="text-sm uppercase tracking-wider">The Problem</p>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold">
                Clinical documentation is a growing burden for providers.
              </h2>
              <p className="mt-4 text-lg leading-relaxed">
                Today, clinicians spend more time clicking through EHRs than connecting with their patients. Despite advances in AI, tools still feel clunky, interruptive, or reduce clinical autonomy. We set out to design a new kind of experience — one that listens quietly and helps in the background.
                <br/><br/>
                We explored how ambient listening and intelligent design can help reduce documentation load while preserving the integrity and flow of in-person care.
              </p>
            </div>

            {/* ── Problem Illustration */}
            <div className="fade-in-section opacity-0 translate-y-6 mb-16">
              <img
                src={ProblemImg}
                alt="Illustration of clinician using ambient AI device"
                className="w-full rounded-2xl shadow-sm"
              />
            </div>

            {/* ── Competitive Analysis */}
            <div className="mb-6 fade-in-section opacity-0 translate-y-6">
              <p className="text-sm uppercase tracking-wider">COMPETITIVE ANALYSIS</p>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold">
                Existing solutions were built for compliance, not for connection.
              </h2>
              <p className="mt-4 text-lg leading-relaxed">
                As part of the discovery process, I conducted a competitive analysis of ambient documentation tools, mobile EHRs, and AI-assisted note apps. While many promised automation, few delivered a seamless, empathetic experience that aligned with how providers actually work.
              </p>
            </div>
            <div className="fade-in-section opacity-0 translate-y-6 mb-12">
              <img
                src={CompAnalysisImg}
                alt="Competitive analysis grid"
                className="w-full rounded-2xl shadow-sm"
              />
            </div>

            {/* ── “What We Observed” */}
            <div className="mb-6 fade-in-section opacity-0 translate-y-6">
              <h3 className="text-2xl font-semibold">What We Observed</h3>
            </div>

            {/* ── Observation cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
              <div className="fade-in-section opacity-0 translate-y-6">
                <img src={EHRImg} alt="EHR Apps" className="w-full rounded-2xl shadow-sm" />
              </div>
              <div className="fade-in-section opacity-0 translate-y-6">
                <img src={VoiceImg} alt="Voice Dictation Tools" className="w-full rounded-2xl shadow-sm" />
              </div>
              <div className="fade-in-section opacity-0 translate-y-6">
                <img src={AmbientImg} alt="Ambient AI Assistants" className="w-full rounded-2xl shadow-sm" />
              </div>
            </div>

            {/* ── Narrowing It Down */}
            <div className="mb-6 fade-in-section opacity-0 translate-y-6">
              <p className="text-sm uppercase tracking-wider">Narrowing It Down</p>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold">
                We mapped out breakdowns in the documentation experience — but from the provider’s POV
              </h2>
              <p className="mt-4 text-lg leading-relaxed">
                We analyzed the clinical documentation journey through three key stages and uncovered a repeating pattern: providers were doing too much, with too little support, at every point in the workflow. Each phase exposed a different kind of friction — cognitive, emotional, or operational.
              </p>
            </div>
            <div className="fade-in-section opacity-0 translate-y-6 mb-20">
              <img
                src={ThreeCardImg}
                alt="Before / During / After visit"
                className="w-full rounded-2xl shadow-sm"
              />
            </div>

            {/* ── Focusing on Who Matters Most */}
            <div className="mb-16">
              <div className="mb-8 fade-in-section opacity-0 translate-y-6">
                <p className="text-sm uppercase tracking-wider">Focusing on who matters most</p>
                <h2 className="mt-2 text-3xl md:text-4xl font-bold">
                  We narrowed in on physicians and nurse practitioners in primary care — because documentation pressure hits them hardest.
                </h2>
                <p className="mt-4 text-lg leading-relaxed">
                  Although documentation is a widespread challenge across healthcare, we chose to focus specifically on providers in primary care settings — particularly physicians and NPs responsible for direct, ongoing patient relationships.
                </p>
                <p className="mt-4 text-lg leading-relaxed">
                  By understanding their daily friction points, we were able to design an ambient AI solution that integrated naturally into the flow of care — not just the flow of data.
                </p>
                <p className="mt-4 text-lg leading-relaxed">
                  We conducted user interviews, shadowing sessions, and feedback loops with clinicians balancing patient care and admin work. Many saw 60–70 patients daily, and a large number were aged 50–70, often uneasy with complex tech. This highlighted the need for a tool that fit naturally into their workflow, shaping everything from our privacy approach to the timing of suggestions.
                </p>
              </div>
              <div className="space-y-8">
                <div className="fade-in-section opacity-0 translate-y-6">
                  <img src={ChallengesImg} alt="Challenges grid" className="w-full rounded-2xl shadow-sm" />
                </div>
                <div className="fade-in-section opacity-0 translate-y-6">
                  <img src={FocusIllustration} alt="Focus illustration" className="w-full rounded-2xl shadow-sm" />
                </div>
              </div>
            </div>

            {/* ── Constraints */}
            <div className="mb-16">
              <div className="mb-8 fade-in-section opacity-0 translate-y-6">
                <p className="text-sm uppercase tracking-wider">Constraints</p>
                <h2 className="mt-2 text-3xl md:text-4xl font-bold">
                  Working with providers and clinical teams helped us identify crucial constraints early.
                </h2>
                <p className="mt-4 text-lg leading-relaxed">
                  As we designed for primary care physicians and nurse practitioners, we uncovered important design, environmental, and ethical constraints that directly impacted the solution. These weren’t just technical — they were emotional, behavioral, and deeply tied to trust.
                </p>
              </div>
              <div className="fade-in-section opacity-0 translate-y-6">
                <img src={ConstraintsImg} alt="Constraints overview" className="w-full rounded-2xl shadow-sm" />
              </div>
            </div>

            {/* ── The Big Challenge */}
            <div className="mb-16">
              <div className="mb-8 fade-in-section opacity-0 translate-y-6">
                <p className="text-sm uppercase tracking-wider">The Big Challenge</p>
                <h2 className="mt-2 text-3xl md:text-4xl font-bold">
                  How might we reduce documentation burden without removing the provider’s voice or clinical autonomy?
                </h2>
                <p className="mt-4 text-lg leading-relaxed">
                  In modern healthcare, documentation is essential — but it often comes at the cost of human connection. The big challenge we faced was designing a tool that could support the clinical conversation, not interrupt it.
                </p>
                <p className="mt-4 text-lg leading-relaxed">
                  We weren’t just solving for speed. We were solving for trust, privacy, and provider control. The question became:
                </p>
                <div
                  className="mt-4 inline-block rounded-md px-4 py-3"
                  style={{
                    backgroundColor: "rgba(100, 106, 121, 0.12)",
                    borderLeft: "6px solid #535966",
                    borderTop: "2px solid rgba(100, 106, 121, 0.12)",
                    borderRight: "2px solid rgba(100, 106, 121, 0.12)",
                    borderBottom: "2px solid rgba(100, 106, 121, 0.12)",
                  }}
                >
                  <p className="text-lg">
                    How do we use AI to listen, understand, and assist — without ever speaking over the human in the room?
                  </p>
                </div>
                <p className="mt-4 text-lg leading-relaxed">
                  This guiding challenge shaped every aspect of our product design — from ambient listening logic to consent flows, from AI suggestions to final note ownership.
                </p>
              </div>
              <div className="fade-in-section opacity-0 translate-y-6">
                <img src={BigChallengeImg} alt="Big challenge illustration" className="w-full rounded-2xl shadow-sm" />
              </div>
            </div>

            {/* ── User Stories */}
            <div className="mb-16">
              <div className="mb-8 fade-in-section opacity-0 translate-y-6">
                <p className="text-sm uppercase tracking-wider">User Stories</p>
                <h2 className="mt-2 text-3xl md:text-4xl font-bold">
                  We designed with real providers in mind — not just personas.
                </h2>
                <p className="mt-4 text-lg leading-relaxed">
                  Through interviews, shadowing, and feedback sessions, we surfaced three common provider mindsets. Each reflected the tension between caring for patients and completing documentation — and each became a lens through which we designed the solution.
                </p>
              </div>
              <div className="fade-in-section opacity-0 translate-y-6">
                <img src={UserStoriesImg} alt="User story cards" className="w-full rounded-2xl shadow-sm" />
              </div>
            </div>

            {/* ── Core Principles */}
            <div className="mb-16">
              <div className="mb-8 fade-in-section opacity-0 translate-y-6">
                <p className="text-sm uppercase tracking-wider">Core Principles</p>
                <h2 className="mt-2 text-3xl md:text-4xl font-bold">
                  The values that guided every design decision — from strategy to UI
                </h2>
              </div>
              <div className="fade-in-section opacity-0 translate-y-6">
                <img src={CorePrinciplesImg} alt="Core principles cards" className="w-full rounded-2xl shadow-sm" />
              </div>
            </div>

            {/* ── Key Flows */}
            <div className="mb-16">
              <div className="mb-8 fade-in-section opacity-0 translate-y-6">
                <p className="text-sm uppercase tracking-wider">Key Flows</p>
                <h2 className="mt-2 text-3xl md:text-4xl font-bold">
                  The values that guided every design decision — from strategy to UI
                </h2>
              </div>
              <div className="fade-in-section opacity-0 translate-y-6">
                <img src={KeyFlowsImg} alt="Key flows diagram" className="w-full rounded-2xl shadow-sm" />
              </div>
            </div>

            {/* ── Our Solution */}
            <div className="mb-16">
              <div className="mb-8 fade-in-section opacity-0 translate-y-6">
                <p className="text-sm uppercase tracking-wider">Our Solution</p>
                <h2 className="mt-2 text-3xl md:text-4xl font-bold">
                  Designing an AI-First, Human-Centered Mobile Experience
                </h2>
                <p className="mt-4 text-lg leading-relaxed">
                  To reduce cognitive and administrative load, we designed an app experience that stays quiet in the background, aligns with clinical workflows, and reinforces trust through clarity and consent. Each screen was thoughtfully crafted to support minimal interaction while delivering high utility during the care process.
                </p>
              </div>
              <div className="fade-in-section opacity-0 translate-y-6">
                <img src={OurSolutionImg} alt="Our solution screenshots" className="w-full rounded-2xl shadow-sm" />
              </div>
            </div>

            {/* ── Interfaces */}
            <div className="mb-16">
              <div className="mb-8 fade-in-section opacity-0 translate-y-6">
                <p className="text-sm uppercase tracking-wider text-gray-400">Key Interfaces</p>
                <h2 className="mt-2 text-3xl md:text-4xl font-bold">Ambient Listening Begins</h2>
              </div>
              <div className="space-y-12">
                <div className="fade-in-section opacity-0 translate-y-6">
                  <img src={AmbientStartImg} alt="Calibration screen" className="w-full rounded-2xl shadow-sm" />
                </div>
                <div className="fade-in-section opacity-0 translate-y-6" style={{ animationDelay: "0.1s" }}>
                  <img src={AmbientListeningImg} alt="Listening screen" className="w-full rounded-2xl shadow-sm" />
                </div>
                <div className="fade-in-section opacity-0 translate-y-6" style={{ animationDelay: "0.2s" }}>
                  <img src={VisitNoteImg} alt="Visit note interface" className="w-full rounded-2xl shadow-sm" />
                </div>
                <div className="fade-in-section opacity-0 translate-y-6" style={{ animationDelay: "0.3s" }}>
                  <img src={NoteCompleteImg} alt="Note completed screen" className="w-full rounded-2xl shadow-sm" />
                </div>
              </div>
            </div>

            {/* ── Results & Learnings */}
            <div className="mb-16">
              <div className="mb-6 fade-in-section opacity-0 translate-y-6">
                <p className="text-sm uppercase tracking-wider text-gray-400">Results & Learnings</p>
                <h2 className="mt-2 text-3xl md:text-4xl font-bold">What Changed?</h2>
                <p className="mt-2 text-lg leading-relaxed max-w-prose">
                  Key outcomes of our solution’s implementation.
                </p>
              </div>
              <div className="fade-in-section opacity-0 translate-y-6 mb-12">
                <img src={WhatChangedImg} alt="Outcome cards" className="w-full rounded-2xl shadow-sm" />
              </div>
              <div className="mb-6 fade-in-section opacity-0 translate-y-6">
                <h2 className="mt-2 text-3xl md:text-4xl font-bold">Feedback We Received</h2>
                <p className="mt-2 text-lg leading-relaxed max-w-prose">Feedback from clinicians and users.</p>
              </div>
              <div className="space-y-12">
                <div className="fade-in-section opacity-0 translate-y-6">
                  <img src={DrPatelImg} alt="Dr. Patel testimonial" className="w-full rounded-2xl shadow-sm" />
                </div>
                <div className="fade-in-section opacity-0 translate-y-6" style={{ animationDelay: "0.1s" }}>
                  <img src={JamieLinImg} alt="Jamie Lin testimonial" className="w-full rounded-2xl shadow-sm" />
                </div>
              </div>
              <div className="mt-12 mb-6 fade-in-section opacity-0 translate-y-6">
                <h2 className="mt-2 text-3xl md:text-4xl font-bold">What We Learned</h2>
                <p className="mt-2 text-lg leading-relaxed max-w-prose">Lessons that informed our design process.</p>
              </div>
              <div className="space-y-4">
                <div className="fade-in-section opacity-0 translate-y-6 p-4 rounded-2xl" style={{ backgroundColor: "#AA7F29" }}>
                  <p className="text-[#FFEDC9] text-lg">
                    Simple, calm UI was more valued than flashy interactions in clinical settings.
                  </p>
                </div>
                <div className="fade-in-section opacity-0 translate-y-6 p-4 rounded-2xl" style={{ backgroundColor: "#195C6D" }}>
                  <p className="text-[#DBF8FF] text-lg">
                    Trust-building required transparency at every step especially around AI and consent.
                  </p>
                </div>
                <div className="fade-in-section opacity-0 translate-y-6 p-4 rounded-2xl" style={{ backgroundColor: "#196C6D" }}>
                  <p className="text-[#E2FFFF] text-lg">
                    Prototyping early with real providers surfaced edge cases we hadn’t anticipated.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyAmbientAI;
