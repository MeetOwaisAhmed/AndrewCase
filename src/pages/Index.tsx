import { useState, useEffect } from "react";
import { ArrowRight, ArrowDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import HeroImg from "@/Images/HeroImg1.svg";
import Logo from "@/Images/Logo.svg";
import ProblemImg from "@/Images/ProblemImg.svg";
import CompAnalysisImg from "@/Images/CompAnalysisImg.svg";
import EHRImg from "@/Images/EHRImg.svg";
import VoiceImg from "@/Images/VoiceImg.svg";
import AmbientImg from "@/Images/AmbientImg.svg";
import ThreeCardImg from "@/Images/ThreeCrdImg.svg";
import ChallengesImg from "@/Images/ChallengesGrid.svg";
import FocusIllustration from "@/Images/FocusIllustration.svg";
import ConstraintsImg from "@/Images/ConstraintsGrid.svg";
import BigChallengeImg from "@/Images/BigChallengeImg.svg";
import UserStoriesImg from "@/Images/UserStoriesImg.svg";
import CorePrinciplesImg from "@/Images/CorePrinciplesImg.svg";
import KeyFlowsImg  from "@/Images/KeyFlowsImg.svg";
import OurSolutionImg  from "@/Images/OurSolutionImg.svg";
import AmbientStartImg from "@/Images/AmbientStartImg.svg";
import AmbientListeningImg from "@/Images/AmbientListeningImg.svg";
import VisitNoteImg from "@/Images/VisitNoteImg.svg";
import NoteCompleteImg from "@/Images/NoteCompleteImg.svg";
import WhatChangedImg  from "@/Images/WhatChangedImg.svg";
import DrPatelImg from "@/Images/DrPatelImg.svg";
import JamieLinImg from "@/Images/JamieLinImg.svg";


/**
 * Custom hook that uses an Intersection Observer to fade in elements
 * with the `.fade-in-section` class when they scroll into view.
 */
function useFadeInOnScroll() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-6");
            entry.target.classList.add(
              "opacity-100",
              "translate-y-0",
              "animate-fade-in-up"
            );
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    document.querySelectorAll(".fade-in-section").forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
}

const Index = () => {
  const [activeSection, setActiveSection] = useState(0);

  useFadeInOnScroll();

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".content-section");
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section, index) => {
        const element = section as HTMLElement;
        if (
          scrollPosition >= element.offsetTop &&
          scrollPosition < element.offsetTop + element.offsetHeight
        ) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (index: number) => {
    const section = document.querySelectorAll(".content-section")[index];
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Navbar />

      {/* ─────────────────────────────────────────────────────────────────────────────
          Hero Section
      ───────────────────────────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center justify-center px-6 py-20 pt-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${HeroImg})`,
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div
            onClick={() => scrollToSection(0)}
            className="absolute top-96 left-1/2 transform -translate-x-1/2 cursor-pointer"
          >
            <ArrowDown className="w-8 h-8 text-blue/70 animate-bounce" />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────────────
          Main Content Area (Sidebar + Scrollable Right)
      ───────────────────────────────────────────────────────────────────────────── */}
      <div className="relative">
        <div className="max-w-full mx-auto flex">

          {/* ─────────────────────────────────────────────────────────────────────────────
              Sidebar (only visible on xl and larger screens)
          ───────────────────────────────────────────────────────────────────────────── */}
          <div className="hidden xl:flex w-80 sticky top-20 h-screen flex-col justify-between pl-6 pr-4 pb-24">
            {/* Top: Logo */}
            <div>
              <img src={Logo} alt="Ambient AI Logo" className="" />
            </div>

            {/* Bottom: Section Links */}
            <nav className="space-y-4">
              {["Challenge", "Solution", "MVP"].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(index)}
                  className="flex items-center gap-3 w-full text-left py-3 px-4 rounded-lg text-gray-600 hover:bg-blue-100"
                >
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  {item}
                </button>
              ))}
              <button
                onClick={scrollToTop}
                className="flex items-center gap-3 w-full text-left py-3 px-4 rounded-lg text-gray-600 hover:bg-blue-100"
              >
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                Back to top
              </button>
            </nav>
          </div>

          {/* ─────────────────────────────────────────────────────────────────────────────
              Scrollable Right Content
          ───────────────────────────────────────────────────────────────────────────── */}
          <div className="flex-1 xl:pl-4 px-6 xl:px-0 xl:pr-12">

            {/* ─────────────────────────────────────────────────────────────────
                Four‐column grid at top
            ───────────────────────────────────────────────────────────────── */}
            <div className="content-section grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
              <div className="fade-in-section opacity-0 translate-y-6 mt-10">
                <p className="text-sm heading-font uppercase tracking-wider ">
                  Role
                </p>
                <ul className="mt-2 space-y-1">
                  <li className="para-font">Director of Design</li>
                  <li className="para-font">Lead UX Strategist</li>
                </ul>
              </div>

              <div
                className="fade-in-section opacity-0 translate-y-6 mt-10"
                style={{ animationDelay: "0.2s" }}
              >
                <p className="text-sm heading-font uppercase tracking-wider">
                  Collaborators
                </p>
                <ul className="mt-2 space-y-1">
                  <li className="para-font">Product Manager</li>
                  <li className="para-font">Engineering Team</li>
                  <li className="para-font">Clinical Advisors</li>
                  <li className="para-font">UX Researcher</li>
                  <li className="para-font">Design Ops</li>
                </ul>
              </div>

              <div
                className="fade-in-section opacity-0 translate-y-6 mt-10"
                style={{ animationDelay: "0.3s" }}
              >
                <p className="text-sm heading-font uppercase tracking-wider">
                  Skills
                </p>
                <ul className="mt-2 space-y-1">
                  <li className="para-font">UX Strategy</li>
                  <li className="para-font">Interaction Design</li>
                  <li className="para-font">Visual Design</li>
                  <li className="para-font">Prototyping</li>
                </ul>
              </div>

              <div
                className="fade-in-section opacity-0 translate-y-6 mt-10"
                style={{ animationDelay: "0.4s" }}
              >
                <p className="text-sm heading-font uppercase tracking-wider">
                  Timeline
                </p>
                <ul className="mt-2 space-y-1">
                  <li className="para-font">6 Months</li>
                  <li className="para-font">Mar–Aug 2024</li>
                </ul>
              </div>
            </div>

            {/* ─────────────────────────────────────────────────────────────────
                “The Problem” Section
            ───────────────────────────────────────────────────────────────── */}
            <div className="mb-12 fade-in-section opacity-0 translate-y-6">
              <span className="text-sm para-font uppercase tracking-wider">
                The Problem
              </span>
              <h2 className="mt-2 text-3xl md:text-4xl text-m heading-font">
                Clinical documentation is a growing burden for providers.
              </h2>
              <p className="mt-4 text-lg para-font leading-relaxed">
                Today, clinicians spend more time clicking through EHRs than
                connecting with their patients. Despite advances in AI, tools
                still feel clunky, interruptive, or reduce clinical autonomy.
                We set out to design a new kind of experience — one that listens
                quietly and helps in the background.
                <br />
                <br />
                We explored how ambient listening and intelligent design can help
                reduce documentation load while preserving the integrity and
                flow of in-person care.
              </p>
            </div>

            {/* ─────────────────────────────────────────────────────────────────
                Full‐width Problem Illustration
            ───────────────────────────────────────────────────────────────── */}
            <div className="fade-in-section opacity-0 translate-y-6 mb-16">
              <img
                src={ProblemImg}
                alt="Illustration of clinician using ambient AI device"
                className="w-full rounded-2xl shadow-sm"
              />
            </div>

            {/* ─────────────────────────────────────────────────────────────────
                Competitive Analysis Section
            ───────────────────────────────────────────────────────────────── */}
            <div className="mb-6 fade-in-section opacity-0 translate-y-6">
              <p className="text-sm para-font uppercase tracking-wider">
                COMPETITIVE ANALYSIS
              </p>
              <h2 className="mt-2 text-3xl md:text-4xl text-m heading-font">
                Existing solutions were built for compliance, not for connection.
              </h2>
              <p className="mt-4 text-lg para-font leading-relaxed">
                As part of the discovery process, I conducted a competitive
                analysis of ambient documentation tools, mobile EHRs, and
                AI-assisted note apps. While many promised automation, few
                delivered a seamless, empathetic experience that aligned with
                how providers actually work.
              </p>
            </div>

            <div className="fade-in-section opacity-0 translate-y-6 mb-12">
              <img
                src={CompAnalysisImg}
                alt="Competitive analysis grid: DeepScribe, Athena Health, Augmedix, Dragon Medical One"
                className="w-full rounded-2xl shadow-sm"
              />
            </div>

            {/* ─────────────────────────────────────────────────────────────────
                “What We Observed” Subheading
            ───────────────────────────────────────────────────────────────── */}
            <div className="mb-6 fade-in-section opacity-0 translate-y-6">
              <h3 className="text-2xl text-m heading-font">
                What We Observed
              </h3>
            </div>

            {/* ─────────────────────────────────────────────────────────────────
                Three Observation Cards in a Row
            ───────────────────────────────────────────────────────────────── */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
  {/* Card 1: EHR Mobile Apps (as a single image) */}
  <div
    className="fade-in-section opacity-0 translate-y-6"
  >
    <img
      src={EHRImg}
      alt="EHR Mobile Apps card"
      className="w-full rounded-2xl shadow-sm"
    />
  </div>

  {/* Card 2: Voice Dictation Tools (as a single image) */}
  <div
    className="fade-in-section opacity-0 translate-y-6"
  >
    <img
      src={VoiceImg}
      alt="Voice Dictation Tools card"
      className="w-full rounded-2xl shadow-sm"
    />
  </div>

  {/* Card 3: Ambient AI Assistants (as a single image) */}
  <div
    className="fade-in-section opacity-0 translate-y-6"
  >
    <img
      src={AmbientImg}
      alt="Ambient AI Assistants card"
      className="w-full rounded-2xl shadow-sm"
    />
  </div>
</div>


{/* ─────────────────────────────────────────────────────────────────
    Narrowing It Down Section (using a single image)
───────────────────────────────────────────────────────────────── */}  
<div className="mb-6 fade-in-section opacity-0 translate-y-6">
  <p className="text-sm para-font uppercase tracking-wider">
    Narrowing It Down
  </p>
  <h2 className="mt-2 text-3xl md:text-4xl text-m heading-font">
    We mapped out breakdowns in the documentation experience — but from
    the provider’s POV
  </h2>
  <p className="mt-4 text-lg para-font leading-relaxed ">
    We analyzed the clinical documentation journey through three key
    stages and uncovered a repeating pattern: providers were doing too
    much, with too little support, at every point in the workflow. Each
    phase exposed a different kind of friction — cognitive, emotional,
    or operational.
  </p>
</div>

{/* ─────────────────────────────────────────────────────────────────
    Instead of building three separate cards, embed the pre-made image
───────────────────────────────────────────────────────────────── */}
<div className="fade-in-section opacity-0 translate-y-6 mb-20">
  <img
    src={ThreeCardImg}
    alt="Before the visit / During the visit / After the visit"
    className="w-full rounded-2xl shadow-sm"
  />
</div>

{/* ─────────────────────────────────────────────────────────────────
    Focusing on Who Matters Most Section
───────────────────────────────────────────────────────────────── */}
<div className="mb-16">
  {/* ─── Header + Paragraphs ─── */}
  <div className="mb-8 fade-in-section opacity-0 translate-y-6">
    <p className="text-sm para-font uppercase tracking-wider">
      Focusing on who matters most
    </p>
    <h2 className="mt-2 text-3xl md:text-4xl heading-font">
      We narrowed in on physicians and nurse practitioners in primary care — 
      because documentation pressure hits them hardest.
    </h2>
    <p className="mt-4 text-lg para-font leading-relaxed">
      Although documentation is a widespread challenge across healthcare, we 
      chose to focus specifically on providers in primary care settings — 
      particularly physicians and NPs responsible for direct, ongoing patient 
      relationships.
    </p>
    <p className="mt-4 text-lg para-font leading-relaxed ">
      By understanding their daily friction points, we were able to design an 
      ambient AI solution that integrated naturally into the flow of care — 
      not just the flow of data.
    </p>
    <p className="mt-4 text-lg para-font leading-relaxed">
       We conducted user interviews, shadowing sessions, and feedback loops with
       clinicians balancing patient care and admin work. Many saw 60–70 patients daily,
       and a large number were aged 50–70, often uneasy with complex tech.
       This highlighted the need for a tool that fit naturally into their workflow,
       shaping everything from our privacy approach to the timing of suggestions.
    </p>
  </div>

  {/* ─── Two Images: Challenges Grid & Illustration ─── */}
  <div className="space-y-8">
    {/* 1) Challenges Grid Image */}
    <div className="fade-in-section opacity-0 translate-y-6">
      <img
        src={ChallengesImg}
        alt="Four challenges: High patient volume; Short appointment windows; Emotional and cognitive fatigue; Little time for post-visit cleanup"
        className="w-full rounded-2xl shadow-sm"
      />
    </div>

    {/* 2) Large Focus Illustration */}
    <div className="fade-in-section opacity-0 translate-y-6">
      <img
        src={FocusIllustration}
        alt="Illustration of clinician with patients, representing focus on primary care providers"
        className="w-full rounded-2xl shadow-sm"
      />
    </div>
  </div>
</div>


{/* ─────────────────────────────────────────────────────────────────
    Constraints Section
───────────────────────────────────────────────────────────────── */}
<div className="mb-16">
  {/* ─── Label + Heading + Paragraph ─── */}
  <div className="mb-8 fade-in-section opacity-0 translate-y-6">
    <p className="text-sm para-font uppercase tracking-wider">
      Constraints
    </p>
    <h2 className="mt-2 text-3xl md:text-4xl heading-font ">
      Working with providers and clinical teams helped us identify crucial 
      constraints early.
    </h2>
    <p className="mt-4 text-lg para-font leading-relaxed">
      As we designed for primary care physicians and nurse practitioners, 
      we uncovered important design, environmental, and ethical constraints 
      that directly impacted the solution. These weren’t just technical — 
      they were emotional, behavioral, and deeply tied to trust.
    </p>
  </div>

  {/* ─── Full‐width Constraints Image ─── */}
  <div className="fade-in-section opacity-0 translate-y-6">
    <img
      src={ConstraintsImg}
      alt="Constraints overview: Time pressure; Distraction sensitivity; Consent complexity; Audio environment noise; Device fragmentation; Privacy and HIPAA compliance; Clinical autonomy"
      className="w-full rounded-2xl shadow-sm"
    />
  </div>
</div>



{/* ─────────────────────────────────────────────────────────────────
    The Big Challenge Section
───────────────────────────────────────────────────────────────── */}
<div className="mb-16">
  {/* ─── Label, Heading, and Paragraphs ─── */}
  <div className="mb-8 fade-in-section opacity-0 translate-y-6">
    <p className="text-sm para-font uppercase tracking-wider">
      The Big Challenge
    </p>
    <h2 className="mt-2 text-3xl md:text-4xl heading-font ">
      How might we reduce documentation burden without removing the provider’s voice or clinical autonomy?
    </h2>
    <p className="mt-4 text-lg para-font leading-relaxed">
      In modern healthcare, documentation is essential — but it often comes
      at the cost of human connection. The big challenge we faced was
      designing a tool that could support the clinical conversation, not
      interrupt it.
    </p>
    <p className="mt-4 text-lg para-font leading-relaxed">
      We weren’t just solving for speed. We were solving for trust, privacy,
      and provider control. The question became:
    </p>

    {/* ─── Callout Text ─── */}
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
      <p className="text-lg para-font">
        How do we use AI to listen, understand, and assist — without ever
        speaking over the human in the room?
      </p>
    </div>

    <p className="mt-4 text-lg para-font leading-relaxed">
      This guiding challenge shaped every aspect of our product design —
      from ambient listening logic to consent flows, from AI suggestions to
      final note ownership.
    </p>
  </div>

  {/* ─── Full‐width Illustration ─── */}
  <div className="fade-in-section opacity-0 translate-y-6">
    <img
      src={BigChallengeImg}
      alt="Illustration of a doctor using an AI device in a conversation with a patient"
      className="w-full rounded-2xl shadow-sm"
    />
  </div>
</div>



{/* ─────────────────────────────────────────────────────────────────
    User Stories Section
───────────────────────────────────────────────────────────────── */}
<div className="mb-16">
  {/* ─── Label + Heading + Subtext ─── */}
  <div className="mb-8 fade-in-section opacity-0 translate-y-6">
    <p className="text-sm para-font uppercase tracking-wider">
      User Stories
    </p>
    <h2 className="mt-2 text-3xl md:text-4xl heading-font">
      We designed with real providers in mind — not just personas.
    </h2>
    <p className="mt-4 text-lg para-font leading-relaxed">
      Through interviews, shadowing, and feedback sessions, we surfaced three
      common provider mindsets. Each reflected the tension between caring for
      patients and completing documentation — and each became a lens through
      which we designed the solution.
    </p>
  </div>

  {/* ─── Full‐width “User Stories” Illustration ─── */}
  <div className="fade-in-section opacity-0 translate-y-6">
    <img
      src={UserStoriesImg}
      alt="Three user story cards showing providers with quotes"
      className="w-full rounded-2xl shadow-sm"
    />
  </div>
</div>


{/* ─────────────────────────────────────────────────────────────────
    Core Principles Section
───────────────────────────────────────────────────────────────── */}
<div className="mb-16">
  {/* ─── Label + Heading ─── */}
  <div className="mb-8 fade-in-section opacity-0 translate-y-6">
    <p className="text-sm para-font uppercase tracking-wider">
      Core Principles
    </p>
    <h2 className="mt-2 text-3xl md:text-4xl heading-font">
      The values that guided every design decision — from strategy to UI
    </h2>
  </div>

  {/* ─── Full‐width “Core Principles” Image ─── */}
  <div className="fade-in-section opacity-0 translate-y-6">
    <img
      src={CorePrinciplesImg}
      alt="Four cards representing core principles: Support Without Distraction; Respect Clinical Judgment; Design for Trust; Feel Invisible When It Needs To"
      className="w-full rounded-2xl shadow-sm"
    />
  </div>
</div>

{/* ─────────────────────────────────────────────────────────────────
    Key Flows Section
───────────────────────────────────────────────────────────────── */}
<div className="mb-16">
  {/* ─── Label + Heading ─── */}
  <div className="mb-8 fade-in-section opacity-0 translate-y-6">
    <p className="text-sm para-font uppercase tracking-wider">
      Key Flows
    </p>
    <h2 className="mt-2 text-3xl md:text-4xl heading-font">
      The values that guided every design decision — from strategy to UI
    </h2>
  </div>

  {/* ─── Full‐width Flow Diagram Image ─── */}
  <div className="fade-in-section opacity-0 translate-y-6">
    <img
      src={KeyFlowsImg}
      alt="Diagram showing Sign Up and Visit Note Creation flows"
      className="w-full rounded-2xl shadow-sm"
    />
  </div>
</div>

{/* ─────────────────────────────────────────────────────────────────
    Our Solution Section
───────────────────────────────────────────────────────────────── */}
<div className="mb-16">
  {/* ─── Label + Heading + Subtext ─── */}
  <div className="mb-8 fade-in-section opacity-0 translate-y-6">
    <p className="text-sm para-font uppercase tracking-wider">
      Our Solution
    </p>
    <h2 className="mt-2 text-3xl md:text-4xl heading-font">
      Designing an AI-First, Human-Centered Mobile Experience
    </h2>
    <p className="mt-4 text-lg para-font leading-relaxed">
      To reduce cognitive and administrative load, we designed an app experience that
      stays quiet in the background, aligns with clinical workflows,
      and reinforces trust through clarity and consent. Each screen was thoughtfully
      crafted to support minimal interaction while delivering high utility during the care process.
    </p>
  </div>

  {/* ─── Full‐width Our Solution Image ─── */}
  <div className="fade-in-section opacity-0 translate-y-6">
    <img
      src={OurSolutionImg}
      alt="Screenshots of the ambient AI documentation app"
      className="w-full rounded-2xl shadow-sm"
    />
  </div>
</div>



{/* ─────────────────────────────────────────────────────────────────
    Key Interfaces Section
───────────────────────────────────────────────────────────────── */}
<div className="mb-16">
  {/* ─── Label + Heading ─── */}
  <div className="mb-8 fade-in-section opacity-0 translate-y-6">
    <p className="text-sm para-font uppercase tracking-wider text-gray-400">
      Key Interfaces
    </p>
    <h2 className="mt-2 text-3xl md:text-4xl heading-font">
      Ambient Listening Begins
    </h2>
  </div>

  {/* ─── Four Interface Screens (stacked vertically) ─── */}
  <div className="space-y-12">
    {/* 1) Calibration / Start Recording Screen */}
    <div className="fade-in-section opacity-0 translate-y-6">
      <img
        src={AmbientStartImg}
        alt="Calibration screen with callouts"
        className="w-full rounded-2xl shadow-sm"
      />
    </div>

    {/* 2) Listening Screen */}
    <div className="fade-in-section opacity-0 translate-y-6" style={{ animationDelay: "0.1s" }}>
      <img
        src={AmbientListeningImg}
        alt="Listening screen with callouts"
        className="w-full rounded-2xl shadow-sm"
      />
    </div>

    {/* 3) Visit Note Creation Screen */}
    <div className="fade-in-section opacity-0 translate-y-6" style={{ animationDelay: "0.2s" }}>
      <img
        src={VisitNoteImg}
        alt="Visit note interface with callouts"
        className="w-full rounded-2xl shadow-sm"
      />
    </div>

    {/* 4) Note Completed Screen */}
    <div className="fade-in-section opacity-0 translate-y-6" style={{ animationDelay: "0.3s" }}>
      <img
        src={NoteCompleteImg}
        alt="Note completed screen with callouts"
        className="w-full rounded-2xl shadow-sm"
      />
    </div>
  </div>
</div>



{/* ─────────────────────────────────────────────────────────────────
    Results & Learnings Section
───────────────────────────────────────────────────────────────── */}
<div className="mb-16">
  {/* 1) Section label, heading, subtext */}
  <div className="mb-6 fade-in-section opacity-0 translate-y-6">
    <p className="text-sm para-font uppercase tracking-wider text-gray-400">
      Results & Learnings
    </p>
    <h2 className="mt-2 text-3xl md:text-4xl heading-font">
      What Changed?
    </h2>
    <p className="mt-2 text-lg para-font leading-relaxed max-w-prose">
      Key outcomes of our solution’s implementation.
    </p>
  </div>

  {/* 2) Three-card outcome image */}
  <div className="fade-in-section opacity-0 translate-y-6 mb-12">
    <img
      src={WhatChangedImg}
      alt="Reduced documentation burden; Increased patient focus; High consent compliance"
      className="w-full rounded-2xl shadow-sm"
    />
  </div>

  {/* 3) Feedback heading */}
  <div className="mb-6 fade-in-section opacity-0 translate-y-6">
    <h2 className="mt-2 text-3xl md:text-4xl heading-font">
     Feedback We Received
    </h2>
    <p className="mt-2 text-lg para-font leading-relaxed max-w-prose">
     Feedback from clinicians and users.
    </p>
  </div>

  {/* 4) Two testimonial images */}
  <div className="space-y-12">
    <div className="fade-in-section opacity-0 translate-y-6">
      <img
        src={DrPatelImg}
        alt="Dr. Patel testimonial"
        className="w-full rounded-2xl shadow-sm"
      />
    </div>
    <div
      className="fade-in-section opacity-0 translate-y-6"
      style={{ animationDelay: "0.1s" }}
    >
      <img
        src={JamieLinImg}
        alt="Jamie Lin testimonial"
        className="w-full rounded-2xl shadow-sm"
      />
    </div>
  </div>

  {/* 5) “What We Learned” heading */}
  <div className="mt-12 mb-6 fade-in-section opacity-0 translate-y-6">
    <h2 className="mt-2 text-3xl md:text-4xl heading-font">
     What We Learned
    </h2>
    <p className="mt-2 text-lg para-font leading-relaxed max-w-prose">
     Lessons that informed our design process.
    </p>
  </div>

  {/* 6) Lessons‐learned custom blocks */}
<div className="space-y-4">
  {/* Lesson 1 */}
  <div
    className="fade-in-section opacity-0 translate-y-6 w-full rounded-2xl p-4"
    style={{ backgroundColor: "#AA7F29" }}
  >
    <p className="text-[#FFEDC9] text-lg">
      Simple, calm UI was more valued than flashy interactions in clinical settings.
    </p>
  </div>

  {/* Lesson 2 */}
  <div
    className="fade-in-section opacity-0 translate-y-6 w-full rounded-2xl p-4"
    style={{ backgroundColor: "#195C6D" }}
  >
    <p className="text-[#DBF8FF] text-lg">
      Trust-building required transparency at every step especially around AI and consent.
    </p>
  </div>

  {/* Lesson 3 */}
  <div
    className="fade-in-section opacity-0 translate-y-6 w-full rounded-2xl p-4"
    style={{ backgroundColor: "#196C6D" }}
  >
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

export default Index;
