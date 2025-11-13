import React from "react";
import { useState, useEffect, useRef } from "react";

function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null); // Fixed: Added proper type

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gray-950"
    >
      {/* Advanced Cosmic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-950">
        {/* Animated Grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            transform: `translate(${mousePosition.x * 0.02}px, ${
              mousePosition.y * 0.02
            }px)`,
          }}
        ></div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Dynamic Nova Flare Effects */}
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 left-1/2 w-[800px] h-[800px] bg-indigo-500/10 blur-3xl animate-pulse-slow"
        style={{
          transform: `translate(calc(-50% + ${
            mousePosition.x * 0.1
          }px), calc(-50% + ${mousePosition.y * 0.1}px))`,
        }}
      ></div>
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 left-1/2 w-[600px] h-[600px] bg-purple-500/15 blur-2xl animate-spin-slow"
        style={{
          transform: `translate(calc(-50% + ${
            mousePosition.x * 0.05
          }px), calc(-50% + ${mousePosition.y * 0.05}px))`,
        }}
      ></div>

      {/* Central Content */}
      <div className="relative z-10 max-w-6xl px-6 mx-auto text-center">
        {/* Main Heading with Enhanced Typography */}
        <div className="mb-8">
          <h1 className="mb-6 text-6xl font-black leading-tight text-transparent md:text-8xl bg-gradient-to-r from-white via-indigo-200 to-purple-300 bg-clip-text">
            Where Wisdom
            <br />
            <span className="text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text">
              Meets Innovation
            </span>
          </h1>
        </div>

        {/* Enhanced Subtext */}
        <p className="max-w-4xl mx-auto mb-12 text-2xl font-light leading-relaxed text-gray-300 md:text-3xl">
          We are <span className="font-semibold text-indigo-300">OgmaNova</span>
          : Transforming cosmic visions into digital reality through
          cutting-edge web and mobile experiences.
        </p>

        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
          <button className="relative px-12 py-5 overflow-hidden text-xl font-bold text-white transition-all duration-500 transform shadow-2xl group bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl hover:scale-105 shadow-indigo-500/30 hover:shadow-indigo-500/50">
            <span className="relative z-10"> Launch Your Nova</span>
            <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-r from-purple-600 to-indigo-600 group-hover:opacity-100"></div>
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
          </button>

          <button className="px-10 py-5 text-xl font-semibold transition-all duration-500 border-2 border-gray-600 group rounded-2xl hover:border-indigo-400 backdrop-blur-xl bg-white/5 hover:bg-indigo-500/10">
            <span className="text-gray-300 group-hover:text-white">
              View Cosmic Work
            </span>
          </button>
        </div>

        {/* Stats Bar */}
        <div className="flex flex-wrap justify-center gap-8 mt-16">
          {[
            { number: "50+", label: "Projects Launched" },
            { number: "3.2M", label: "Users Reached" },
            { number: "99.9%", label: "Uptime" },
            { number: "24/7", label: "Cosmic Support" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-white md:text-3xl">
                {stat.number}
              </div>
              <div className="text-sm tracking-wider text-gray-400 uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute -translate-x-1/2 bottom-8 left-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm tracking-wider text-gray-400 uppercase">
            Explore
          </span>
          <div className="flex justify-center w-6 h-10 border-2 border-indigo-400 rounded-full">
            <div className="w-1 h-3 mt-2 bg-indigo-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;
