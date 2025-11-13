import "./App.css";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Features from "./components/Features";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen text-white bg-gray-950 font-inter">
      <Nav />
      <section id="hero">
        <Hero />
      </section>

      <section id="services">
        <Features />
      </section>
      <section id="work">
        <Works />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

const additionalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
  
  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: #0f172a;
  }
  
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(45deg, #4f46e5, #7c3aed);
    border-radius: 4px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(45deg, #6366f1, #8b5cf6);
  }
  
  /* Smooth scrolling */
  html {
    scroll-behavior: smooth;
  }
  
  /* Glass morphism enhancement */
  .glass {
    backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(17, 25, 40, 0.75);
    border: 1px solid rgba(255, 255, 255, 0.125);
  }
`;

// Inject styles
if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.innerText = additionalStyles;
  document.head.appendChild(styleSheet);
}
