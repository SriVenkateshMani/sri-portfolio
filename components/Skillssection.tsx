"use client";

type SkillGroup = {
  title: string;
  skills: string[];
};

const SKILLS: SkillGroup[] = [
  {
    title: "Programming Languages",
    skills: ["Python", "Ruby", "C/C++", "Go", "JavaScript", "TypeScript", "Java", "PHP", "HTML", "CSS"],
  },
  {
    title: "Frameworks & Technologies",
    skills: ["Node", "Express", "Next", "Rails", "Flask", "Django", "React", "Angular", "REST APIs", "GraphQL", "Linux/Unix"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "SQLite", "Oracle", "Snowflake", "MongoDB", "Redis"],
  },
  {
    title: "AI / ML",
    skills: ["TensorFlow", "Keras", "Pandas", "PyTorch", "Scikit-Learn", "PowerBI", "RAG", "LLM", "LangChain", "Gen-AI", "BERT", "DistilBERT"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Azure", "GCP", "CI/CD", "Kubernetes", "Docker", "Terraform", "Kafka", "Ansible", "Jenkins"],
  },
  {
    title: "Observability & Other Tools",
    skills: ["Grafana", "Prometheus", "Splunk", "Datadog", "Elasticsearch", "CloudWatch", "Alerting", "Git", "GitHub", "Postman", "Agile", "Jira", "VSCode"],
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
