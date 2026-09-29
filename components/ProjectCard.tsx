"use client";

type ProjectCardProps = {
  title: string;
  description: string[];
  tools: string[];
  github?: string;
  className?: string;
};

export default function ProjectCard({
  title,
  description,
  tools,
  github,
  className = "",
}: ProjectCardProps) {
  return (
    <div className={`relative h-full min-w-0 rounded-2xl border border-blue-400/70 p-5 shadow-[0_0_55px_rgba(99,179,237,0.45)] flex flex-col bg-gradient-to-br from-[#0b1b33] via-[#0d2342] to-[#0f2d56] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_0_70px_rgba(99,179,237,0.6)] ${className}`}>
      
      {/* Header */}
      <div className="flex items-start gap-3 mb-3">
        <div>
          <h3 className="text-xl font-semibold text-blue-50 drop-shadow-[0_6px_18px_rgba(99,179,237,0.35)]">{title}</h3>
        </div>
      </div>

      {/* Description */}
      <div className="flex-1 space-y-3 text-blue-50 text-sm leading-relaxed mb-4">
        {description.map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </div>

      {/* Tools */}
      <div className="flex flex-wrap gap-2 mb-4">
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
            className="mt-auto flex justify-center pt-3"
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
