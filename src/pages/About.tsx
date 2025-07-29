import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import AnimatedSection from "@/components/AnimatedSection";

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

    if (picturesRef.current) {
      observer.observe(picturesRef.current);
    }

    return () => {
      if (picturesRef.current) {
        observer.unobserve(picturesRef.current);
      }
    };
  }, [animationStarted]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const openResume = () => {
    window.open('/resume.pdf', '_blank');
  };

  return (
    <div className="min-h-screen bg-white font-switzer">
      <Navbar />
      
      {/* About Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Five Pictures with Staggered Animation */}
          <div ref={picturesRef} className="mb-16">
            <div className="flex justify-center items-center gap-4 mb-8 relative">
              {/* Picture 1 */}
              <div 
                className={`w-32 h-40 bg-gray-200 rounded-lg overflow-hidden transition-all duration-700 ease-out ${
                  animationStarted 
                    ? 'opacity-100 translate-y-0 translate-x-0' 
                    : 'opacity-0 translate-y-5 translate-x-0'
                }`}
                style={{ 
                  transitionDelay: animationStarted ? '0ms' : '0ms',
                  transform: animationStarted 
                    ? 'translateY(0px) translateX(-60px) rotate(-5deg)' 
                    : 'translateY(20px) translateX(0px) rotate(0deg)'
                }}
              >
                <img 
                  src="/lovable-uploads/41ee9c2c-d3df-4dd8-b3e2-24e3d93e0776.png" 
                  alt="Personal photo 1" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Picture 2 */}
              <div 
                className={`w-28 h-36 bg-gray-200 rounded-lg overflow-hidden transition-all duration-700 ease-out ${
                  animationStarted 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-5'
                }`}
                style={{ 
                  transitionDelay: animationStarted ? '100ms' : '0ms',
                  transform: animationStarted 
                    ? 'translateY(-20px) translateX(-30px) rotate(3deg)' 
                    : 'translateY(20px) translateX(0px) rotate(0deg)'
                }}
              >
                <img 
                  src="/lovable-uploads/7fad426d-ac95-4057-aeb5-7807e1e83c8c.png" 
                  alt="Personal photo 2" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Picture 3 - Center (main) */}
              <div 
                className={`w-36 h-44 bg-gray-200 rounded-lg overflow-hidden transition-all duration-700 ease-out ${
                  animationStarted 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-5'
                }`}
                style={{ 
                  transitionDelay: animationStarted ? '200ms' : '0ms',
                  transform: animationStarted 
                    ? 'translateY(-10px) translateX(0px) rotate(0deg)' 
                    : 'translateY(20px) translateX(0px) rotate(0deg)'
                }}
              >
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-green-400 flex items-center justify-center text-white">
                  <span className="text-sm font-medium">Main Photo</span>
                </div>
              </div>
              
              {/* Picture 4 */}
              <div 
                className={`w-28 h-36 bg-gray-200 rounded-lg overflow-hidden transition-all duration-700 ease-out ${
                  animationStarted 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-5'
                }`}
                style={{ 
                  transitionDelay: animationStarted ? '300ms' : '0ms',
                  transform: animationStarted 
                    ? 'translateY(-15px) translateX(30px) rotate(-3deg)' 
                    : 'translateY(20px) translateX(0px) rotate(0deg)'
                }}
              >
                <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white">
                  <span className="text-xs font-medium">Photo 4</span>
                </div>
              </div>
              
              {/* Picture 5 */}
              <div 
                className={`w-32 h-40 bg-gray-200 rounded-lg overflow-hidden transition-all duration-700 ease-out ${
                  animationStarted 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-5'
                }`}
                style={{ 
                  transitionDelay: animationStarted ? '400ms' : '0ms',
                  transform: animationStarted 
                    ? 'translateY(5px) translateX(60px) rotate(5deg)' 
                    : 'translateY(20px) translateX(0px) rotate(0deg)'
                }}
              >
                <div className="w-full h-full bg-gradient-to-br from-orange-400 to-red-400 flex items-center justify-center text-white">
                  <span className="text-xs font-medium">Photo 5</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl font-bold text-heading text-center mb-8">
              Hi, I'm Andrew!
            </h1>
          </AnimatedSection>

          {/* About Text */}
          <div className="space-y-6 text-lg text-paragraph max-w-3xl mx-auto text-center">
            <AnimatedSection delay={200}>
              <p>
              I'm a designer at heart — my passion lies in bringing clarity and simplicity to complex problems. My journey started in healthcare, where I discovered the power of thoughtful design in transforming patient outcomes and streamlining systems. I’ve been obsessed ever since!
              </p>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <p>
              I see design as more than just visuals — it’s about people, empathy, and solving real problems. Whether it's integrating AI into TeleHealth or leading global teams, I’ve spent over 15 years crafting user-centered solutions that truly make a difference. From workflows to wireframes, I love creating products that are not only efficient but beautifully intuitive.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={600}>
              <p>
              I'm a curious mind and a builder of better ways — leading with data, driven by user insight, and always searching for the next big challenge. Whether I’m refining a product lifecycle or coaching a team of 15, I believe in elevating experiences through design and compassion.
              </p>
            </AnimatedSection>
          </div>

          {/* Contact Section */}
          <div className="mt-20 text-center">
            <AnimatedSection delay={800}>
              <p className="text-paragraph mb-2">LET'S BE FRIENDS!</p>
              <a 
                href="mailto:erk004@ucsd.edu" 
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
            <AnimatedSection delay={1400}>
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

export default About;