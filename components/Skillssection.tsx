"use client";

type SkillGroup = {
  title: string;
  skills: string[];
};

const SKILLS: SkillGroup[] = [
  {
    title: "Languages",
    skills: ["Python", "JavaScript", "TypeScript", "Ruby", "Java", "SQL", "HTML", "CSS"],
  },
  {
    title: "Frameworks & APIs",
    skills: ["FastAPI", "Flask", "Node.js", "Express.js", "Next.js", "React.js", "Rails", "REST APIs", "GraphQL", "WebSockets"],
  },
  {
    title: "AI / ML",
    skills: ["AWS Bedrock", "LangChain", "LangGraph", "Model Context Protocol (MCP)", "RAG", "Vector Search", "Agentic Workflows"],
  },
  {
    title: "Database & Messaging",
    skills: ["PostgreSQL / pgvector", "MySQL", "MongoDB", "Redis", "Kafka", "Snowflake"],
  },
  {
    title: "Cloud & Infrastructure",
    skills: ["AWS (EC2, Lambda, ECS, Fargate, S3, SQS, RDS, EKS)", "Docker", "Kubernetes", "Terraform", "Ansible"],
  },
  {
    title: "DevOps",
    skills: ["CI/CD", "GitHub Actions", "Jenkins", "CloudWatch", "Prometheus", "Grafana"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="mt-32">
      <h2 className="text-4xl md:text-5xl font-extrabold text-blue-100 mb-12 tracking-wide text-center drop-shadow-[0_8px_28px_rgba(99,179,237,0.4)]">
        Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SKILLS.map((group) => (
          <div
            key={group.title}
            className="relative border border-blue-400/70 rounded-2xl p-6 md:p-8 bg-gradient-to-br from-[#0b1b33] via-[#0d2342] to-[#0f2d56] backdrop-blur-sm shadow-[0_0_55px_rgba(99,179,237,0.45)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_0_70px_rgba(99,179,237,0.6)]"
          >
            <h3 className="text-2xl text-blue-50 font-semibold mb-4 drop-shadow-[0_6px_18px_rgba(99,179,237,0.35)]">
              {group.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-sm px-3 py-1 rounded-full border border-blue-300/50 text-blue-50 bg-black/30 shadow-[0_4px_14px_rgba(99,179,237,0.25)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
