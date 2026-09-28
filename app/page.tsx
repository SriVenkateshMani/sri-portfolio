import Navbar from "../components/Navbar";
import ExperienceCard from "../components/ExperienceCard";
import CodeRain from "../components/CodeRain";
import SkillsSection from "../components/Skillssection";
import { Anton } from "next/font/google";

const heroFont = Anton({ subsets: ["latin"], weight: ["400"], display: "swap" });
import AcademicCard from "../components/AcademicCard";
import ProjectCard from "../components/ProjectCard";
import ContactSection from "../components/ContactSection";


const EXPERIENCES = [
  {
    role: "Full-Stack Developer",
    company: "Rattlesnake Ramble ORG",
    location: "Boulder, CO",
    duration: "Aug 2025 – Aug 2026",
    responsibilities: [
      `I joined Rattlesnake Ramble to redesign a race registration platform that had been running on PHP for years. The fun part? It came with nearly 20 years of race history that absolutely could not disappear. 🫠`,
      `I led the move to a modern platform, rebuilding 20+ features and migrating 2,500+ historical records from MySQL to PostgreSQL while keeping all those years of racer data intact.`,
      `Payments made things interesting too. 💸 PayPal redirects sometimes left paid users marked unpaid, so I reworked the flow with webhooks, server-side verification, idempotency, and retries to keep payment state accurate.`,
      `And yes, I eventually put an LLM in the admin dashboard. 🤖 Why click through seven different workflows when you can just ask?`,
    ],
    tech: ["TypeScript", "Express", "React", "PostgreSQL", "AWS Lambda", "LLM Tool Calling", "MySQL", "Webhooks"],
    logo: "/logos/rattlesnake_logo.png",
  },
  {
    role: "Software Development Intern",
    company: "Biocollate",
    location: "Boulder, CO",
    duration: "Aug 2024 – May 2025",
    responsibilities: [
      `Turns out, a lot of scientific experiments still happens with notebooks, paperwork, and a whole lot of manual tracking. We thought software could help. 🧬`,
      `I worked directly with researchers and turned their very real, sometimes messy requirements into a LIMS/ELN'ishh platform, owning it from architecture and development to shipping.`,
      `Built it with React, FastAPI, PostgreSQL, Docker, and AWS, with 27 SBOL/LabOP APIs underneath. One of my favorite problems was dependency management: change one biological component and suddenly everything downstream matters.`,
      `Then came CatalystX 🤖, where I used LangChain, LangGraph, pgvector, and LLM tool calling to build RAG and agentic workflows for searching scientific data and tracing dependencies with natural language.`,
      `I thought switching to computer science in high school meant I was done with biology. Biology found its way back into my codebase. :)`,
    ],
    tech: ["React", "FastAPI", "PostgreSQL", "Docker", "AWS", "ECS Fargate", "SBOL", "LabOP", "LangChain", "LangGraph", "pgvector", "RAG"],
    logo: "/logos/biocollate_logo.png",
  },
  {
    role: "Graduate Teaching Assistant",
    company: "University of Colorado Boulder",
    location: "Boulder, CO",
    duration: "Aug 2024 – May 2025",
    responsibilities: [
      `Teaching people to code is surprisingly good at exposing how well you actually understand code yourself.`,
      `Worked with 100+ students in CSCI 1300, helping them go from “why is my code doing that?” to getting comfortable with C++ and core programming concepts.`,
      `Designed and graded assignments and exams, held office hours, debugged a lot of C++, ...and learned that sometimes explaining recursion and pointers clearly is harder than writing the code yourself.`,
    ],
    tech: ["C++", "Teaching", "Mentorship", "Grading"],
    logo: "/logos/cub_logo.png",
  },
  {
    role: "Software Development Intern",
    company: "ITJobxs.com",
    location: "Remote",
    duration: "May 2024 – Aug 2024",
    responsibilities: [
      `This one had me everywhere. Frontend, backend, databases, authentication, bot prevention, cloud, deployment... pretty much the whole map.`,
      `I worked on an interview-experiences platform using React, Node.js/Express, and MySQL, building across the application from the user-facing experience all the way down to the APIs and database.`,
      `Then there was everything around the application itself: keeping fake registrations out, getting it running on AWS, working with EC2, Route 53 and CloudFront, and configuring Nginx in front of the backend.`,
      `A full-stack internship in the very literal sense of the word.`,
    ],
    tech: ["React", "Node.js", "Express", "MySQL", "AWS", "EC2", "Route 53", "CloudFront", "Nginx"],
    logo: "/logos/itjobxs_logo.png",
  },
  {
    role: "Software Development Intern",
    company: "Techfidelite Solutions Pvt. Ltd.",
    location: "Chennai, India",
    duration: "May 2022 – Aug 2022",
    responsibilities: [
      `First software internship. First production APIs. First time realizing there’s a lot more to software engineering than getting the code to run. :)`,
      `Spent most of my time in Python and Flask, building and refining REST APIs, working with databases, and getting my hands dirty with authentication and JWTs.`,
      `Also got my first real look at how software gets built in a team: GitHub, Jira, sprints, documentation, debugging, and learning that shipping software is very much a team sport.`,
      `Walked in knowing how to code. Walked out knowing why that was only half the problem.`,
    ],
    tech: ["Python", "Flask", "JWT", "MySQL", "Jira", "GitHub"],
    logo: "/logos/tfe_logo.png",
  },
];

export default function Home() {
  return (
    <>
      <CodeRain />
      <Navbar />

      <main id="home" className="relative z-10 min-h-screen bg-black/30 text-blue-400 flex flex-col items-center px-6 pt-28 scroll-smooth">
        <div className="w-full max-w-5xl">
          {/* Hero */}
          <div className="mb-12 text-center">
            <div className="relative inline-block">
              <span
                className={`${heroFont.className} relative z-10 text-5xl md:text-7xl font-black uppercase tracking-[0.14em] bg-gradient-to-r from-[#8fd3ff] via-[#6fa3ff] to-[#a9a0ff] bg-clip-text text-transparent leading-tight drop-shadow-[0_10px_24px_rgba(111,163,255,0.55)]`}
              >
                Sri Venkatesha Mani
              </span>
            </div>
            <p className="mt-6 text-lg md:text-xl text-blue-200">Software Engineer</p>
          </div>

          {/* About */}
          <div className="relative border border-blue-500/60 rounded-2xl p-8 backdrop-blur-sm bg-black/70 shadow-[0_0_40px_#3b82f6]">
            <p className="text-blue-200 leading-relaxed text-lg md:text-xl text-justify">
              Hey there, I&apos;m Sri. I don&apos;t wanna sound like a cover letter, so here&apos;s the simpler version: I&apos;ve spent the last 2 years building AI-enabled full-stack applications end to end and deploying them in the cloud, mostly on AWS. Well, only on AWS. <strong>I LOVE AWS.</strong> Basically taking things from “we should probably build this” to something real people can actually use. <strong>SAY WHAT??</strong>
            </p>
            <p className="text-blue-200 leading-relaxed text-lg md:text-xl text-justify mt-4">
              During school, I worked one internship during my Bachelor&apos;s and another during my Master&apos;s. Then came BioCollate, a Boulder startup I worked with in the final year of my Master&apos;s, where I got to take a product from idea to working software and own it end to end. After graduation, I joined Rattlesnake Ramble and spent nearly a year helping migrate a legacy system into a modern full-stack application. I could tell you everything I built at each place, but that would completely ruin the Experience section below, wouldn&apos;t it? <strong>Scroll down 🔫 I dare you.</strong>
            </p>
            <p className="text-blue-200 leading-relaxed text-lg md:text-xl text-justify mt-4">
              Oh yeah, plot twist: I&apos;m an AI Engineer too. At BioCollate, I built CatalystX, a RAG-powered scientific assistant that could search lab data and trace dependencies through natural-language questions, and at Rattlesnake I added LLM tool calling into the admin side of the product. I really like building software end to end and then making it smarter with AI.
            </p>
            <p className="text-blue-200 leading-relaxed text-lg md:text-xl text-justify mt-4">
              <strong>Respected Reader</strong>, if you&apos;re short on time and just want the holy document... well, the button below literally says what it is. 👇
            </p>
            <div className="mt-6 flex justify-center">
              <a
                href="sri_venkatesha_mani_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-lg border border-blue-300/60 text-blue-50 text-sm font-semibold bg-blue-500/20 hover:bg-blue-500/30 hover:border-white shadow-[0_0_26px_rgba(99,179,237,0.55),0_0_12px_rgba(99,179,237,0.35)] transition duration-200 group"
              >
                <span className="text-base">&#128196;</span>
                <span>Here&apos;s the Boring Version :(</span>
                <span className="opacity-60 group-hover:opacity-100 transition-opacity text-xs">&#8595;</span>
              </a>
            </div>
          </div>

          {/* Experience */}
          <section id="experience" className="mt-32">
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-100 mb-12 tracking-wide text-center drop-shadow-[0_8px_28px_rgba(99,179,237,0.4)]">
              Experience
            </h2>

            <div className="relative">
              <div className="absolute left-1/2 top-0 h-full w-[2px] bg-blue-500/30 -translate-x-1/2" />

              {EXPERIENCES.map((exp, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <div
                    key={index}
                    className={`relative mb-20 flex ${
                      isLeft ? "justify-start" : "justify-end"
                    }`}
                  >
                    <div className={`w-1/2 ${isLeft ? "pr-10" : "pl-10"}`}>
                      <ExperienceCard {...exp} />
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Academics */}
          <section id="academics" className="mt-32">
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-100 mb-12 tracking-wide text-center drop-shadow-[0_8px_28px_rgba(99,179,237,0.4)]">
              Academics
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <AcademicCard
                degree="M.S. in Computer Science"
                university="University of Colorado Boulder"
                duration="Aug 2023 – May 2025"
                gpa="3.91 / 4.0"
                logo="/logos/cub_logo.png"
                image="/academics/Cub_aesthetic.png"
                borderColor="border-yellow-400"
                courses={[
                  "Foundations of Software Engineering",
                  "Natural Language Processing",
                  "Machine Learning",
                  "Neural Networks & Deep Learning",
                  "Data Mining",
                  "Database Systems",
                  "Numerical Linear Algebra",
                  "User Centered Design & Development"
                ]}
              />

              <AcademicCard
                degree="B.Tech in Computer Science & Engineering"
                university="SRM Institute of Science & Technology"
                duration="Jun 2019 – May 2023"
                gpa="9.29 / 10.0"
                logo="/logos/srm_logo.png"
                image="/academics/srm_pic.png"
                borderColor="border-blue-400"
                courses={[
                  "Data Structures & Algorithms",
                  "Object Oriented Design & Programming ",
                  "Operating Systems",
                  "Distributed Systems",
                  "Network Security",
                  "Network Design & Management",
                  "Artifical Intelligence",
                ]}
              />
            </div>
          </section>

          {/* Skills */}
          <div id="skills">
            <SkillsSection />
          </div>

          {/* Projects */}
          <section id="projects" className="mt-32">
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-100 mb-12 tracking-wide text-center drop-shadow-[0_8px_28px_rgba(99,179,237,0.4)]">
              Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-6">

              <ProjectCard
                title="RecipeRealm: Recipe Sharing Platform"
                institution="University of Colorado Boulder"
                description={[
                  `Built RecipeRealm, a full-stack recipe-sharing platform with JWT-secured user accounts and social interactions.`,
                  `Dockerized MERN services and deployed them on AWS EC2 with S3-backed image and video storage, achieving 85% Jest test coverage.`
                ]}
                tools={["MongoDB", "Express", "React", "Node.js", "JWT", "Docker", "AWS EC2", "Amazon S3", "Jest"]}
                github="https://github.com/SriVenkateshMani/Recipe-Realm"
              />
              <ProjectCard
                title="AI-Generated Text Detection"
                institution="University of Colorado Boulder"
                description={[
                  `Fine-tuned BERT, DistilBERT, and GPT-2 using PyTorch and Hugging Face to detect AI-generated text across complex, multisource datasets.`,
                  `Optimized hyperparameters and engineered a model pipeline that achieved 82.7% evaluation accuracy.`
                ]}
                tools={["BERT", "DistilBERT", "GPT-2", "PyTorch", "Hugging Face", "Hyperparameter Optimization"]}
                github="https://github.com/Manojdeep-Dakavaram/NLP_Shared_task"
              />

              <ProjectCard
                title="Local Hybrid RAG System"
                institution="Personal Project"
                description={[
                  `Built a local, end-to-end RAG system from scratch that ingests PDFs, chunks document text, generates embeddings, and indexes content in OpenSearch.`,
                  `Combined BM25 keyword retrieval with semantic k-NN search using reciprocal-rank fusion, then grounded local Llama 3.2 responses in the highest-ranked document chunks through Ollama.`
                ]}
                tools={["Python", "Streamlit", "OpenSearch", "Sentence Transformers", "BM25", "k-NN Vector Search", "Reciprocal-Rank Fusion", "Ollama", "Llama 3.2", "Docker"]}
              />

              <ProjectCard
                title="Hybrid Data Driven Similarity Measures Sentiment Prediction Using Deep Learning Models"
                institution="SRM Institute of Science & Technology"
                description={[
                  `Engineered an advanced stock price prediction model using machine learning techniques and sentiment analysis.`,
                  `Constructed few Deep Learning models written in Python, utilizing TensorFlow and Keras to enhance stock price prediction 
                  accuracy by analyzing sentiment data around 50,000 news.`,
                ]}
                tools={["Python", "Jupyter Notebook", "Pandas", "NumPy", "Scikit-learn", "Time Series Analysis", "Regression / Forecasting Models", "LSTM (Neural Networks)"]}
                github="https://github.com/SriVenkateshMani/Stock_prediction"
              />
            </div>
          </section>

          {/* Contact */}
          <div id="contact">
            <ContactSection />
          </div>

        </div>
      </main>
    </>
  );
}
