import emailjs from "emailjs-com";
import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    project: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form, "YOUR_PUBLIC_KEY")
      .then(() => {
        alert("Message sent successfully!");
      })
      .catch(() => {
        alert("Failed to send message.");
      });
  };

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>

      <div className="container px-6 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6 text-4xl font-bold text-transparent md:text-5xl bg-gradient-to-r from-white to-indigo-200 bg-clip-text">
            Ready to Launch?
          </h2>
          <p className="max-w-2xl mx-auto mb-12 text-xl text-gray-400">
            Let's transform your vision into a stellar digital experience.
          </p>

          <form
            onSubmit={sendEmail}
            className="p-8 border border-gray-700 bg-gray-800/30 backdrop-blur-sm rounded-2xl md:p-12"
          >
            <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                onChange={handleChange}
                className="px-4 py-3 border border-gray-600 bg-gray-700/50 rounded-xl"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                onChange={handleChange}
                className="px-4 py-3 border border-gray-600 bg-gray-700/50 rounded-xl"
              />

              <input
                type="text"
                name="company"
                placeholder="Company"
                onChange={handleChange}
                className="px-4 py-3 border border-gray-600 bg-gray-700/50 rounded-xl"
              />

              <input
                type="text"
                name="project"
                placeholder="Project Type"
                onChange={handleChange}
                className="px-4 py-3 border border-gray-600 bg-gray-700/50 rounded-xl"
              />
            </div>

            <textarea
              name="message"
              placeholder="Tell us about your cosmic vision..."
              rows={4}
              onChange={handleChange}
              className="w-full px-4 py-3 mb-6 border border-gray-600 bg-gray-700/50 rounded-xl"
            ></textarea>

            <button className="w-full px-12 py-4 text-lg font-bold text-white transition-all bg-indigo-600 rounded-full hover:bg-indigo-700 md:w-auto">
              Launch Project
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
