import { useState } from "react";

import qMed1 from "../assets/projects/qreeblikmedicalscreenshot1.png";
import qMed2 from "../assets/projects/qreeblikmedicalscreenshot2.png";
import qMed3 from "../assets/projects/qreeblikmedicalScreenshot3.png";
import qMed4 from "../assets/projects/qreeblikmedicalScreenshot4.png";
import qMed5 from "../assets/projects/qreeblikmedicaalScreenshot5.png";
import qMed6 from "../assets/projects/qreeblikmedicalscreenshot6.png";
import qMed7 from "../assets/projects/qreeblikmedicalscreenshot7.png";

import qMobile1 from "../assets/projects/qreeblikmobilscreesnshot1.jpg";
import qMobile2 from "../assets/projects/qreeblikmobilescreenshot3.jpg";
import qMobile3 from "../assets/projects/qreeblikmobileScreenshot4.jpg";
import qMobile4 from "../assets/projects/qreeblikmobileScreenshot5.jpg";
import qMobile5 from "../assets/projects/qreeblikmobileScresenshot6.jpg";
import qMobile6 from "../assets/projects/qreeblikmobilescreessnhot2.jpg";

import qMarket1 from "../assets/projects/qreeblikmarketplace1.png";
import qMarket2 from "../assets/projects/qreeblikmarketplace2.png";
import qMarket3 from "../assets/projects/qreeblikmarketplace3.png";
import qMarket4 from "../assets/projects/qreeblikmarketplce4.png";
import qMarket5 from "../assets/projects/qreeblikmarketplace5.png";

type ProjectMedia = {
  src: string;
  alt?: string;
};

type ShowcaseProject = {
  key: string;
  title: string;
  subtitle: string;
  summary: string;
  highlights: string[]; // bullets like challenge/impact
  tech: string[];
  media: ProjectMedia[];
};

const projects: ShowcaseProject[] = [
  {
    key: "qmed-doctor",
    title: "Qreeblik Medical — Doctor Dashboard",
    subtitle: "Clinical intelligence & workflow orchestration",
    summary:
      "A web dashboard built for clinicians to manage patient flows, teleconsults, and diagnostics. The design focuses on rapid triage, clear patient timelines and integrated decision support.",
    highlights: [
      "Challenge: messy patient context across apps — improved single-pane clinical view",
      "Solution: consolidated timeline, quick actions, and inline diagnostics",
      "Impact: reduced average consult prep time by ~40% (prototype metric)",
    ],
    tech: ["React", "TypeScript", "TailwindCSS", "Node/Express", "Postgres"],
    media: [
      { src: qMed1, alt: "Doctor Dashboard — Overview" },
      { src: qMed2, alt: "Doctor Dashboard — Teleconsult panel" },
      { src: qMed3, alt: "Doctor Dashboard — Patient timeline" },
      { src: qMed4, alt: "Doctor Dashboard — Charts & vitals" },
      { src: qMed5, alt: "Doctor Dashboard — Clinical notes" },
      { src: qMed6, alt: "Doctor Dashboard — Scheduling" },
      { src: qMed7, alt: "Doctor Dashboard — Messaging" },
    ],
  },
  {
    key: "qmed-patient",
    title: "Qreeblik Medical — Patient Mobile App",
    subtitle: "Patient-centric care, on the go",
    summary:
      "A mobile-first application that empowers patients to book appointments, access teleconsults, track prescriptions, and share health data with providers securely.",
    highlights: [
      "Challenge: fragmented patient engagement causing missed appointments",
      "Solution: intuitive booking, in-app reminders and secure document sharing",
      "Impact: increased engagement and adherence in pilot cohorts",
    ],
    tech: [
      "React Native",
      "Expo",
      "Secure Storage",
      "Stripe",
      "Push Notifications",
    ],
    media: [
      { src: qMobile1, alt: "Patient App — Home" },
      { src: qMobile2, alt: "Patient App — Booking flow" },
      { src: qMobile3, alt: "Patient App — Teleconsult screen" },
      { src: qMobile4, alt: "Patient App — Prescription" },
      { src: qMobile5, alt: "Patient App — Records viewer" },
      { src: qMobile6, alt: "Patient App — Notifications" },
    ],
  },
  {
    key: "qmarket",
    title: "Qreeblik Marketplace",
    subtitle: "Marketplace optimized for trust & discovery",
    summary:
      "A multi-vendor marketplace emphasizing discovery, visual storytelling and transparent seller workflows. The product unites structured catalogs with media-rich listings.",
    highlights: [
      "Challenge: low conversion from generic listings",
      "Solution: visual-first product pages, curated collections and strong seller UX",
      "Impact: higher session time and conversion lift in A/B tests",
    ],
    tech: ["Next.js", "GraphQL", "Stripe", "Cloudinary", "Redis"],
    media: [
      { src: qMarket1, alt: "Marketplace — Home / Collections" },
      { src: qMarket2, alt: "Marketplace — Product detail" },
      { src: qMarket3, alt: "Marketplace — Seller dashboard" },
      { src: qMarket4, alt: "Marketplace — Checkout" },
      { src: qMarket5, alt: "Marketplace — Mobile listings" },
    ],
  },
];

export default function Works() {
  const [open, setOpen] = useState(false);
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  const [activeMediaIdx, setActiveMediaIdx] = useState(0);

  const openLightbox = (projectIndex: number, mediaIndex = 0) => {
    setActiveProjectIdx(projectIndex);
    setActiveMediaIdx(mediaIndex);
    setOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setOpen(false);
    document.body.style.overflow = "";
  };

  const prevMedia = () => {
    const media = projects[activeProjectIdx].media;
    setActiveMediaIdx((s) => (s - 1 + media.length) % media.length);
  };

  const nextMedia = () => {
    const media = projects[activeProjectIdx].media;
    setActiveMediaIdx((s) => (s + 1) % media.length);
  };

  return (
    <section id="projects" className="py-24 bg-gray-950">
      <div className="container px-6 mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-extrabold text-transparent md:text-5xl bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300">
            Portfolio — Selected Case Studies
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-gray-400">
            We turn ideas to products that solve real problems — here are three
            projects that represent our cross-disciplinary approach: design,
            engineering and product.
          </p>
        </div>

        <div className="space-y-20">
          {projects.map((p, idx) => (
            <article
              key={p.key}
              className="grid items-center grid-cols-1 gap-8 lg:grid-cols-12"
            >
              {/* Left: visual cluster */}
              <div className="lg:col-span-7">
                <div className="relative overflow-hidden border shadow-2xl rounded-2xl border-white/8 bg-gradient-to-br from-gray-900 to-gray-800">
                  {/* large preview */}
                  {/* LARGE PREVIEW — DESKTOP VS MOBILE LOGIC */}
                  <div className="relative flex items-center justify-center bg-black">
                    {/* Desktop mockup (default) */}
                    {p.key !== "qmed-patient" && (
                      <div className="aspect-[16/9] w-full flex items-center justify-center">
                        <img
                          src={p.media[0].src}
                          alt={p.media[0].alt || p.title}
                          className="object-cover object-center w-full h-full"
                        />
                      </div>
                    )}

                    {/* Mobile mockup (Patient App) */}
                    {p.key === "qmed-patient" && (
                      <div className="w-[260px] md:w-[300px] mx-auto py-10">
                        <div className="relative rounded-[2.5rem] border border-white/10 bg-black shadow-2xl overflow-hidden aspect-[9/19] mx-auto">
                          <img
                            src={p.media[0].src}
                            alt={p.media[0].alt || p.title}
                            className="object-cover w-full h-full"
                          />
                        </div>

                        {/* Mobile notch simulation */}
                        <div className="absolute top-[1.05rem] left-1/2 -translate-x-1/2 w-28 h-5 bg-black/70 rounded-full"></div>
                      </div>
                    )}

                    {/* subtle badge */}
                    <div className="absolute px-3 py-1 text-sm font-medium border rounded-full top-6 left-6 bg-black/40 backdrop-blur-sm border-white/6">
                      {p.subtitle}
                    </div>
                  </div>

                  {/* thumbnails */}
                  <div className="flex items-center gap-3 p-4 overflow-x-auto">
                    {p.media.map((m, i) => (
                      <button
                        key={i}
                        onClick={() => openLightbox(idx, i)}
                        className={`flex-shrink-0 overflow-hidden transition-transform duration-300 border rounded-lg border-white/6 hover:scale-105 
      ${p.key === "qmed-patient" ? "h-32 w-16 rounded-2xl" : "h-16 w-28"}`}
                        aria-label={`Open ${p.title} image ${i + 1}`}
                      >
                        <img
                          src={m.src}
                          alt={m.alt || `${p.title} ${i + 1}`}
                          className="object-cover w-full h-full"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: narrative */}
              <div className="lg:col-span-5">
                <div className="p-8 border shadow-lg glass rounded-2xl border-white/6">
                  <h3 className="mb-2 text-2xl font-bold text-white">
                    {p.title}
                  </h3>
                  <p className="mb-4 font-medium text-indigo-300">
                    {p.subtitle}
                  </p>

                  <p className="mb-4 text-gray-300">{p.summary}</p>

                  <ul className="mb-4 space-y-2">
                    {p.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-gray-300"
                      >
                        <span className="mr-2 font-semibold text-indigo-300">
                          •
                        </span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 text-xs text-gray-200 border rounded-full border-white/6"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => openLightbox(idx, 0)}
                      className="px-4 py-2 font-semibold text-white transition-transform duration-200 rounded-full shadow-md bg-gradient-to-r from-indigo-600 to-purple-600 hover:scale-105"
                    >
                      Open Gallery
                    </button>

                    <a
                      className="px-4 py-2 text-gray-200 transition-colors border rounded-full border-white/6 hover:border-indigo-400"
                      href="#contact"
                      aria-label={`Contact about ${p.title}`}
                    >
                      Discuss this project
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Lightbox / modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/70 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-4xl">
            <button
              onClick={closeLightbox}
              className="absolute z-20 p-2 text-white border rounded-full top-3 right-3 bg-black/50 border-white/10"
              aria-label="Close gallery"
            >
              ✕
            </button>

            <div className="overflow-hidden bg-gray-900 border shadow-2xl rounded-2xl border-white/6">
              {/* image */}
              <div className="aspect-[16/9] bg-black flex items-center justify-center">
                <img
                  src={projects[activeProjectIdx].media[activeMediaIdx].src}
                  alt={
                    projects[activeProjectIdx].media[activeMediaIdx].alt ||
                    projects[activeProjectIdx].title
                  }
                  className="object-contain w-full h-full"
                />
              </div>

              {/* controls */}
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  <button
                    onClick={prevMedia}
                    className="px-3 py-2 text-white border rounded-md bg-black/30 border-white/8"
                    aria-label="Previous image"
                  >
                    ‹ Prev
                  </button>
                  <button
                    onClick={nextMedia}
                    className="px-3 py-2 text-white border rounded-md bg-black/30 border-white/8"
                    aria-label="Next image"
                  >
                    Next ›
                  </button>
                </div>

                <div className="text-sm text-gray-300">
                  {activeMediaIdx + 1} /{" "}
                  {projects[activeProjectIdx].media.length}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
