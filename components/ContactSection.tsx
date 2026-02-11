"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaLinkedin } from "react-icons/fa";

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_avasc46",
        "template_9qypf3h",
        formRef.current,
        "nQFituz2o9w3rI3MH"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          formRef.current?.reset();
        },
        () => {
          alert("Failed to send message. Try again.");
        }
      );
  };

  return (
    <section className="mt-32 mb-20">
      <h2 className="text-4xl md:text-5xl font-extrabold text-blue-100 mb-12 tracking-wide text-center drop-shadow-[0_8px_28px_rgba(99,179,237,0.4)]">
        Let’s Connect
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border border-blue-400/70 rounded-2xl p-10 bg-gradient-to-br from-[#0b1b33] via-[#0d2342] to-[#0f2d56] backdrop-blur-sm shadow-[0_0_55px_rgba(99,179,237,0.45)]">

        {/* Left: Contact Info */}
        <div className="space-y-6 text-blue-50">
          <p className="text-xl">📧 srivenkateshmani@gmail.com</p>
          <p className="text-xl">🎓 sri.narayanan@colorado.edu</p>
          <p className="text-xl">📞 (720) 825-0829</p>

          <a
            href="https://www.linkedin.com/in/srivenkateshamani"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-blue-100 hover:text-blue-50 transition drop-shadow-[0_6px_18px_rgba(99,179,237,0.35)]"
          >
            <FaLinkedin size={28} />
            <span className="text-xl font-semibold">LinkedIn</span>
          </a>
        </div>

        {/* Right: Contact Form */}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="bg-black/30 border border-blue-300/60 rounded-lg px-4 py-3 text-blue-50 focus:outline-none focus:border-blue-200 shadow-[0_0_14px_rgba(99,179,237,0.25)]"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="bg-black/30 border border-blue-300/60 rounded-lg px-4 py-3 text-blue-50 focus:outline-none focus:border-blue-200 shadow-[0_0_14px_rgba(99,179,237,0.25)]"
          />

          <textarea
            name="message"
            rows={4}
            placeholder="Your Message"
            required
            className="bg-black/30 border border-blue-300/60 rounded-lg px-4 py-3 text-blue-50 focus:outline-none focus:border-blue-200 shadow-[0_0_14px_rgba(99,179,237,0.25)]"
          />

          <button
            type="submit"
            className="mt-2 self-start px-6 py-3 rounded-lg border border-blue-300/60 text-blue-50 bg-blue-500/15 hover:bg-blue-500/25 transition shadow-[0_0_24px_rgba(99,179,237,0.4)] font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
