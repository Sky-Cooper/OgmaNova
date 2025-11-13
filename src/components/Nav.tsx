import { useState, useEffect } from "react";

function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Work", href: "#work" },
    { name: "About", href: "#features" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-xl py-3 border-b border-indigo-500/20"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container flex items-center justify-between px-6 mx-auto">
        {/* Logo */}
        <div className="relative group">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="absolute inset-0 transition-all duration-500 opacity-0 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-2xl group-hover:opacity-20 blur-sm"></div>
            </div>

            <div className="text-2xl font-bold">
              <span className="text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text">
                Ogma
              </span>
              <span className="text-white">Nova</span>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden space-x-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative font-medium text-gray-300 transition-all duration-300 hover:text-white group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* CTA */}
        <button className="relative px-8 py-3 overflow-hidden font-semibold text-white transition-all duration-500 transform rounded-full shadow-2xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:shadow-indigo-500/40 hover:scale-105 group">
          <span className="relative z-10">Start Project</span>
          <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-r from-purple-600 to-indigo-600 group-hover:opacity-100"></div>
          <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col space-y-1.5 z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isMobileMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-2xl md:hidden transition-all duration-500 ${
            isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-2xl font-bold text-white transition-colors duration-300 hover:text-indigo-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
