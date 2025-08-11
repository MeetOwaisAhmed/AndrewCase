// src/pages/CaseStudyAmbientAI.tsx
import { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import Logo                   from "@/Images/MedoraHealthLogo.svg";

import OverviewImg            from "@/Images/Overview.svg";
import ProblemImg             from "@/Images/ProblemMedora.svg";
import ChallengeImg           from "@/Images/MedoraChallengeImg.svg";
import ResearchImg            from "@/Images/MedoraResearchImg.svg";
import MedoraUserStoryImg     from "@/Images/MedoraUserStoriesImg.svg";
import MedoraUserFlowOneImg   from "@/Images/MedoraUserFlowOne.svg";
import MedoraUserFlowTwoImg   from "@/Images/MedoraUserFlowTwo.svg";
import MedoraUserFlowThreeImg from "@/Images/MedoraUserFlowThree.svg";
import MedoraUserFlowFourImg  from "@/Images/MedoraUserFlowFour.svg";
import WireframesImg          from "@/Images/MedoraWireframeImg.svg";
import HifiDesignOne          from "@/Images/MedoraHifiDesignOne.svg";
import HifiDesignTwo          from "@/Images/MedoraHifiDesignTwo.svg";
import HifiDesignThree        from "@/Images/MedoraHifiDesignThree.svg";
import HifiDesignFour         from "@/Images/MedoraHifiDesignFour.svg";
import ResultImgOne           from "@/Images/MedoraResultsImgOne.svg";
import ResultImgTwo           from "@/Images/MedoraResultsImgTwo.svg";

import HeroImg from "@/Images/CaseStudyImgTwo.svg";

/** Fade-in hook */
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

  /** highlight sidebar link */
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

  /** scroll to a section by id */
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${HeroImg})` }}
      >
        {/* scroll arrow */}
        <div
          onClick={() => scrollTo("problem")}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
        >
          <ArrowDown className="w-8 h-8 text-white animate-bounce" />
        </div>
      </section>

      {/* Main Content */}
      <div className="relative">
        <div className="max-w-full mx-auto flex">
          {/* Sidebar (xl+) */}
          <div className="hidden xl:flex w-80 sticky top-20 h-screen flex-col justify-between px-6 pb-24">
            <img src={Logo} alt="Medora Health Logo" />
            <nav className="space-y-4">
              {/* Problem */}
              <button
                onClick={() => scrollTo("problem")}
                className={`flex items-center gap-3 w-full py-3 px-4 rounded-lg ${
                  activeSection === 0 ? "bg-blue-100" : "hover:bg-blue-50"
                }`}
              >
                <span>➡️</span>
                <span>Problem</span>
              </button>
              {/* User Stories */}
              <button
                onClick={() => scrollTo("user-stories")}
                className={`flex items-center gap-3 w-full py-3 px-4 rounded-lg ${
                  activeSection === 1 ? "bg-blue-100" : "hover:bg-blue-50"
                }`}
              >
                <span>➡️</span>
                <span>User Stories</span>
              </button>
              {/* Solution */}
              <button
                onClick={() => scrollTo("wireframes")}
                className={`flex items-center gap-3 w-full py-3 px-4 rounded-lg ${
                  activeSection === 2 ? "bg-blue-100" : "hover:bg-blue-50"
                }`}
              >
                <span>➡️</span>
                <span>Solution</span>
              </button>
              {/* Back to top */}
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="flex items-center gap-3 w-full py-3 px-4 rounded-lg hover:bg-blue-50"
              >
                <span>⬆️</span>
                <span>Back to top</span>
              </button>
            </nav>
          </div>

          {/* Scrollable right */}
          <div className="flex-1 xl:pl-4 px-6 xl:px-0 xl:pr-12">
            {/* ── Four-column grid ─────────────────────────────────────────────── */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
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
                  <li>13 Months</li>
                  <li>Jan 2023 – Feb 2024</li>
                </ul>
              </div>
            </div>

            {/* ── Overview ───────────────────────────────────────────────────────── */}
            <div className="mb-12 fade-in-section opacity-0 translate-y-6">
              <p className="text-sm uppercase tracking-wider">Overview</p>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold">
                Simplifying healthcare communication, one campaign at a time.
              </h2>
              <p className="mt-4 text-lg leading-relaxed">
                Medora Health is a healthcare growth platform designed to help teams launch targeted campaigns, track engagement, and turn complex data into actionable insights.
                <br/>
                As the Director of Design, I led a 13 month redesign initiative with the goal of simplifying workflows, making data storytelling effortless, and building trust through a clean, modern interface.
              </p>
            </div>
            <div className="fade-in-section opacity-0 translate-y-6 mb-16">
              <LazyLoadImage
                src={OverviewImg}
                alt="Overview illustration"
                className="w-full object-cover rounded-2xl shadow-sm"
                effect="blur"
              />
            </div>

            {/* ── The Problem ─────────────────────────────────────────────────────── */}
            <div
              id="problem"
              className="mb-6 fade-in-section opacity-0 translate-y-6 content-section"
            >
              <p className="text-sm uppercase tracking-wider">The Problem</p>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold">
                Healthcare teams are overwhelmed by data and fragmented workflows.
              </h2>
              <p className="mt-4 text-lg leading-relaxed">
                Medora Health’s earlier platform had powerful features but lacked clarity. Data was scattered across complex dashboards, requiring too much time to interpret. Campaign creation was tedious, with no clear flow or guidance for non-marketing users.
                <br/><br/>
                We discovered that healthcare teams needed more than just data—they needed actionable insights, an interface that felt intuitive, and a system that guided them every step of the way.
              </p>
            </div>
            <div className="fade-in-section opacity-0 translate-y-6 mb-12">
              <img
                src={ProblemImg}
                alt="Problem illustration"
                className="w-full rounded-2xl shadow-sm"
              />
            </div>

            {/* ── The Challenge ────────────────────────────────────────────────────── */}
            <div className="mb-20 fade-in-section opacity-0 translate-y-6">
              <p className="text-sm uppercase tracking-wider">The Challenge</p>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold">
                How can we make healthcare data and communication tools feel simple, human, and actionable?
              </h2>
              <p className="mt-4 text-lg leading-relaxed">
                Healthcare teams spent nearly 75% of their time wrestling with manual workflows, jumping between spreadsheets, outdated tools, and disconnected systems—just to launch a single campaign. This inefficiency created bottlenecks, missed opportunities, and frustration.
                <br/><br/>
                Our challenge was to <span className="font-semibold text-heading">replace manual, fragmented tasks with a streamlined, guided experience that not only saves time but also turns complex healthcare data into actionable insights.</span>
              </p>
            </div>
            <div className="fade-in-section opacity-0 translate-y-6 mb-20">
              <img
                src={ChallengeImg}
                alt="Challenge illustration"
                className="w-full rounded-2xl shadow-sm"
              />
            </div>

            {/* ── Research & Discovery ───────────────────────────────────────────────── */}
            <div className="mb-16">
              <div className="mb-8 fade-in-section opacity-0 translate-y-6">
                <p className="text-sm uppercase tracking-wider">Research & Discovery</p>
                <h2 className="mt-2 text-3xl md:text-4xl font-bold">
                  Real stories from healthcare teams shaped our design vision.
                </h2>
                <p className="mt-4 text-lg leading-relaxed">
                  To deeply understand the challenges, we conducted user interviews, on-site observations, and usability tests with clinic managers, patient outreach coordinators, and healthcare marketers. We uncovered key pain points:
                </p>
              </div>
              <div className="space-y-8">
                <div className="fade-in-section opacity-0 translate-y-6">
                  <img src={ResearchImg} alt="Research illustration" className="w-full rounded-2xl shadow-sm" />
                </div>
                <p className="mt-4 text-lg leading-relaxed">
                  These findings set the stage for a design strategy centered on clarity, efficiency, and trust, turning a chaotic workflow into a seamless journey.
                </p>
              </div>
            </div>

            {/* ── User Stories ─────────────────────────────────────────────────────── */}
            <div
              id="user-stories"
              className="mb-16 fade-in-section opacity-0 translate-y-6 content-section"
            >
              <div className="mb-8">
                <p className="text-sm uppercase tracking-wider">User Stories</p>
                <h2 className="mt-2 text-3xl md:text-4xl font-bold">
                  Understanding the people behind the product.
                </h2>
                <p className="mt-4 text-lg leading-relaxed">
                  To design a platform that truly meets the needs of healthcare teams, we created user personas based on in-depth interviews, shadowing sessions, and real-world feedback from practitioners. These personas helped us empathize with user pain points, uncover workflow challenges, and prioritize solutions that make the biggest impact.
                </p>
              </div>
              <div className="fade-in-section opacity-0 translate-y-6">
                <img src={MedoraUserStoryImg} alt="User stories illustration" className="w-full rounded-2xl shadow-sm" />
              </div>
            </div>

            {/* ── User Flows ───────────────────────────────────────────────────────── */}
            <div className="mb-16">
              <div className="mb-8 fade-in-section opacity-0 translate-y-6">
                <p className="text-sm uppercase tracking-wider">User Flows</p>
                <h2 className="mt-2 text-3xl md:text-4xl font-bold">
                  Designing the path of least resistance.
                </h2>
                <p className="mt-4 text-lg leading-relaxed">
                  We mapped the entire journey of a healthcare team member, from logging in to launching a campaign, removing unnecessary steps and making key actions like campaign creation just a few clicks away. This step helped visualize pain points and opportunities for simplification.
                </p>
              </div>
              <div className="fade-in-section opacity-0 translate-y-6"><img src={MedoraUserFlowOneImg} alt="" className="w-full rounded-2xl shadow-sm" /></div>
              <div className="fade-in-section opacity-0 translate-y-6"><img src={MedoraUserFlowTwoImg} alt="" className="w-full rounded-2xl shadow-sm" /></div>
              <div className="fade-in-section opacity-0 translate-y-6"><img src={MedoraUserFlowThreeImg} alt="" className="w-full rounded-2xl shadow-sm" /></div>
              <div className="fade-in-section opacity-0 translate-y-6"><img src={MedoraUserFlowFourImg} alt="" className="w-full rounded-2xl shadow-sm" /></div>
            </div>

            {/* ── Wireframes ──────────────────────────────────────────────────────── */}
            <div
              id="wireframes"
              className="mb-16 fade-in-section opacity-0 translate-y-6 content-section"
            >
              <div className="mb-8">
                <p className="text-sm uppercase tracking-wider">Wireframes</p>
                <h2 className="mt-2 text-3xl md:text-4xl font-bold">
                  Turning ideas into structure.
                </h2>
                <p className="mt-4 text-lg leading-relaxed">
                  Low-fidelity wireframes were developed to test core layouts and ensure that data visualization, campaign creation, and navigation were intuitive. Early testing with healthcare teams allowed us to refine the structure before moving into high-fidelity designs.
                </p>
              </div>
              <div className="fade-in-section opacity-0 translate-y-6">
                <img src={WireframesImg} alt="Wireframes" className="w-full shadow-sm" />
              </div>
            </div>

            {/* ── Hi-fi Designs ─────────────────────────────────────────────────────── */}
            <div className="mb-12">
              <div className="mb-4 fade-in-section opacity-0 translate-y-6">
                <p className="text-sm uppercase tracking-wider">Hi-fi designs</p>
                <h2 className="mt-2 text-3xl md:text-4xl font-bold">
                  From Concept to Reality.
                </h2>
                <p className="mt-4 text-lg leading-relaxed">
                  After validating the wireframes and user flows, we moved to high-fidelity designs. Our focus was on creating a clean, modern interface that balances data visualization, user guidance, and seamless navigation. Each element of the design emphasizes clarity and efficiency, reducing the cognitive load for healthcare professionals.
                </p>
              </div>
              <div className="space-y-8">
                <div className="fade-in-section opacity-0 translate-y-6"><img src={HifiDesignOne} alt="Hi-fi 1" className="w-full rounded-2xl shadow-sm" /></div>
                <div className="fade-in-section opacity-0 translate-y-6"><img src={HifiDesignTwo} alt="Hi-fi 2" className="w-full rounded-2xl shadow-sm" /></div>
                <div className="fade-in-section opacity-0 translate-y-6"><img src={HifiDesignThree} alt="Hi-fi 3" className="w-full rounded-2xl shadow-sm" /></div>
                <div className="fade-in-section opacity-0 translate-y-6"><img src={HifiDesignFour} alt="Hi-fi 4" className="w-full rounded-2xl shadow-sm" /></div>
              </div>
            </div>

            {/* ── Results & Learnings ───────────────────────────────────────────────── */}
            <div className="mb-16 fade-in-section opacity-0 translate-y-6">
              <div className="mb-8">
                <p className="text-sm uppercase tracking-wider">Results & Learnings</p>
                <h2 className="mt-2 text-3xl md:text-4xl font-bold">
                  Delivering measurable impact for healthcare teams.
                </h2>
                <p className="mt-4 text-lg leading-relaxed">
                  Our redesigned platform transformed how healthcare teams manage campaigns, track performance, and interact with data. By simplifying complex workflows, we helped teams save time, reduce frustration, and focus more on patient care rather than navigating tools.
                </p>
              </div>
              <div className="fade-in-section opacity-0 translate-y-6 -mx-6 xl:mx-0 mb-8">
                <img src={ResultImgOne} alt="Results 1" className="w-full max-w-none shadow-sm" />
              </div>
              <p className="mt-8 mb-8 text-lg leading-relaxed">
                Users found the tool more intuitive and less overwhelming.
              </p>
              <div className="fade-in-section opacity-0 translate-y-6 -mx-6 xl:mx-0">
                <img src={ResultImgTwo} alt="Results 2" className="w-full max-w-none shadow-sm" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyAmbientAI;
