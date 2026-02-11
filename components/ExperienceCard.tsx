"use client";

import { useState } from "react";
import Image from "next/image";

type Props = {
  role: string;
  company: string;
  location: string;
  duration: string;
  responsibilities: string[];
  tech: string[];
  logo?: string;
};

export default function ExperienceCard({
  role,
  company,
  location,
  duration,
  responsibilities,
  tech,
  logo,
}: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative border border-blue-500/60 rounded-2xl p-6 md:p-8 bg-[#0b142a] shadow-[0_0_40px_#3b82f6]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top Row: Logo Left + Text Right */}
      <div className="flex items-start gap-4">
        {logo && (
          <div className=" relative w-14 h-14 flex-shrink-0 rounded-lg bg-black/60 border border-blue-500/40 flex items-center justify-center overflow-hidden">
            <Image
                src={logo}
                alt={`${company} logo`}
                fill
                className="object-contain p-1"
            />
            </div>

        )}

        <div className="flex-1">
          <h3 className="text-xl md:text-2xl text-blue-100 font-semibold">
            {role}
          </h3>
          <p className="text-sm md:text-base text-blue-200 mt-1">
            {company} • {location}
          </p>
          <p className="text-xs md:text-sm text-blue-400 mt-1">{duration}</p>
        </div>
      </div>

      {/* Hover Content */}
      <div
        className={`mt-4 transition-all duration-300 ${
          hovered ? "max-h-[1200px] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <ul className="list-disc list-outside pl-6 text-blue-100 text-[15px] leading-relaxed space-y-3 mb-4 marker:text-blue-400">
          {responsibilities.map((r, i) => (
            <li key={i} className="pl-1">{r}</li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {tech.map((t, i) => (
            <span
              key={i}
              className="text-xs border border-blue-500/40 px-2 py-1 rounded-full text-blue-300"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
