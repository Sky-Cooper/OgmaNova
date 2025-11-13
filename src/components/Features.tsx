import {
  LuRocket,
  LuBolt,
  LuTimerReset,
  LuWallet,
  LuWrench,
} from "react-icons/lu";

import { FaPauseCircle } from "react-icons/fa";

function Features() {
  const features = [
    {
      title: "Launch with Ease",
      description:
        "Start today with our seamless installation process and rapid deployment for web and mobile platforms.",
      icon: LuRocket,
    },
    {
      title: "Unlimited Requests",
      description:
        "Scale without limits with our flexible request system designed for growing businesses.",
      icon: LuBolt,
    },
    {
      title: "Launch Fast",
      description:
        "Accelerate your time-to-market with our optimized development and deployment pipelines.",
      icon: LuTimerReset,
    },
    {
      title: "Pause Or Cancel Any time",
      description:
        "Maintain full control with flexible subscription models that adapt to your business needs.",
      icon: FaPauseCircle,
    },
    {
      title: "Affordable Pricing",
      description:
        "Premium quality at accessible prices with transparent, scalable pricing structures.",
      icon: LuWallet,
    },
    {
      title: "Full-Stack Expertise",
      description:
        "End-to-end solutions from frontend to backend, ensuring seamless integration and performance.",
      icon: LuWrench,
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-gray-900/50">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>

      <div className="container px-6 mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold text-transparent md:text-5xl bg-gradient-to-r from-white to-indigo-200 bg-clip-text">
            Our Capabilities
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-400">
            Harness the power of cutting-edge technology with our comprehensive
            suite of digital services
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="p-8 transition-all duration-300 border border-gray-700 group bg-gray-800/30 backdrop-blur-sm rounded-2xl hover:border-indigo-500/50 hover:transform hover:-translate-y-2"
              >
                <div className="mb-4 text-3xl transition-transform duration-300 group-hover:scale-110">
                  <Icon />
                </div>
                <h3 className="mb-4 text-xl font-bold text-white transition-colors duration-300 group-hover:text-indigo-300">
                  {feature.title}
                </h3>
                <p className="leading-relaxed text-gray-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;
