"use client";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-blue-500/30">
      <nav className="max-w-6xl mx-auto flex flex-col items-center px-6 py-4">
        <div className="flex gap-8 text-base md:text-lg text-blue-300 tracking-wide">
          <a href="#home" className="hover:text-blue-400 transition hover:drop-shadow-[0_0_6px_#3b82f6]">
            Home
          </a>
          <a href="#experience" className="hover:text-blue-400 transition hover:drop-shadow-[0_0_6px_#3b82f6]">
            Experience
          </a>
          <a href="#academics" className="hover:text-blue-400 transition hover:drop-shadow-[0_0_6px_#3b82f6]">
            Academics
          </a>
          <a href="#skills" className="hover:text-blue-400 transition hover:drop-shadow-[0_0_6px_#3b82f6]">
            Skills
          </a>
          <a href="#projects" className="hover:text-blue-400 transition hover:drop-shadow-[0_0_6px_#3b82f6]">
            Projects
          </a>
          <a href="#contact" className="hover:text-blue-400 transition hover:drop-shadow-[0_0_6px_#3b82f6]">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
