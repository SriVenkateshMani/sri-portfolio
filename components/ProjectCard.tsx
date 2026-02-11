"use client";

import Image from "next/image";

type ProjectCardProps = {
  title: string;
  duration: string;
  institution: string;
  logo: string;
  description: string[];
  tools: string[];
  github: string;
};

export default function ProjectCard({
  title,
  duration,
  institution,
  logo,
  description,
  tools,
  github,
}: ProjectCardProps) {
  return (
    <div className="relative rounded-2xl border border-blue-400/70 p-6 shadow-[0_0_55px_rgba(99,179,237,0.45)] flex flex-col h-full bg-gradient-to-br from-[#0b1b33] via-[#0d2342] to-[#0f2d56] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_0_70px_rgba(99,179,237,0.6)]">
      
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 rounded-lg bg-black/60 border border-blue-300/60 flex items-center justify-center shrink-0 shadow-[0_0_14px_rgba(99,179,237,0.35)]">
          <Image
            src={logo}
            alt={institution}
            width={36}
            height={36}
            className="object-contain"
          />
        </div>

        <div>
          <h3 className="text-xl font-semibold text-blue-50 drop-shadow-[0_6px_18px_rgba(99,179,237,0.35)]">{title}</h3>
          <p className="text-sm md:text-base text-blue-100">{institution}</p>
          <p className="text-xs md:text-sm text-blue-200 mt-1">{duration}</p>
        </div>
      </div>

      {/* Description */}
      <ul className="space-y-3 text-blue-50 text-[15px] leading-relaxed mb-5">
        {description.map((point, idx) => (
          <li key={idx} className="flex gap-2">
            <span className="text-blue-300 mt-1">▸</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>

      {/* Tools */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tools.map((tool, idx) => (
          <span
            key={idx}
            className="text-xs px-3 py-1 rounded-md bg-black/30 text-blue-50 border border-blue-300/50 shadow-[0_4px_14px_rgba(99,179,237,0.25)]"
          >
            {tool}
          </span>
        ))}
      </div>

      {/* Codebase only */}
      {github && (
        <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto flex justify-center pt-4"
        >
            <div className="
            px-5 py-2
            rounded-md
            border border-blue-400/60
            text-blue-50
            text-sm font-semibold
            bg-blue-500/15
            hover:bg-blue-500/25
            hover:border-blue-200
            shadow-[0_0_18px_rgba(99,179,237,0.35)]
            transition
            ">
            Codebase
            </div>
        </a>
        )}

    </div>
  );
}
