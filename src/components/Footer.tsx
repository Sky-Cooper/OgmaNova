import React from "react";

function Footer() {
  return (
    <footer className="py-12 border-t border-gray-800 bg-black/80 backdrop-blur-md">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-6 text-2xl font-bold md:mb-0">
            <span className="text-indigo-400">Ogma</span>Nova
          </div>

          <div className="flex mb-6 space-x-6 md:mb-0">
            {["Twitter", "LinkedIn", "GitHub", "Dribbble"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-gray-400 transition-colors duration-300 hover:text-white"
              >
                {social}
              </a>
            ))}
          </div>

          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} OgmaNova. Cosmic digital experiences.
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
