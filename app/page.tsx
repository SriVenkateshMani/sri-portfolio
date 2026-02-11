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
    company: "Rattlesnake Ramble Charity Trail Race",
    location: "Boulder, CO",
    duration: "Aug 2025 – Present",
    responsibilities: [
      `Improved race registration reliability by preventing unpaid sign-ups and adding automatic payment validation with
      email notifications, eliminating manual reconciliation errors by 100% through the Ruby on Rails MVC architecture.`,
      `Enhanced the admin dashboard by implementing sortable entrant views, automatic bib assignment, and on-demand
      check-in sheet generation using PostgreSQL-backed data models for over 100 race participants.`,
      `Strengthened system maintainability by cleaning up PayPal integration, adding Venmo payment support, and upgrading
      the Rails environment for the 2026 season.`,
    ],
    tech: ["Ruby on Rails", "JavaScript", "HTML", "CSS", "PostgreSQL", "REST APIs", "PayPal API", "Venmo API"],
    logo: "/logos/rattlesnake_logo.png",
  },
  {
    role: "Software Development Intern",
    company: "Biocollate",
    location: "Boulder, CO",
    duration: "Aug 2024 – May 2025",
    responsibilities: [
      `Designed and debugged a React-based frontend for login, authentication, and project creation pages, enabling secure
      user access and seamless experiment management through REST API integration, improving user experience by 70%.`,
      `Developed high-performance backend web services using Go and PostgreSQL, improving system efficiency and reducing
      SBOL processing time by 20% while supporting integration with hardware data pipelines.`,
      `Implemented a Flask-based web server for SBOL metadata management and JSON data streaming, enhancing trace-
      ability by 50%, improving project reproducibility by 40% and cutting manual metadata entry time by 60%.`,
    ],
    tech: ["Go", "Python", "React", "Flask", "PostgreSQL", "REST APIs", "SBOL"],
    logo: "/logos/biocollate_logo.png",
  },
  {
    role: "Graduate Teaching Assistant",
    company: "University of Colorado Boulder",
    location: "Boulder, CO",
    duration: "Aug 2024 – May 2025",
    responsibilities: [
      `Authored and graded the coursework for CSCI 1300: Computational Problem Solving, mentoring over 200 students in
      C++11, C++14, C++23 programming concepts during office hours, increasing assignment completion rates by 40%.`,
      `Ensured academic integrity for over 500 students by maintaining a seamless, violation-free examination process.`,
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
      `Developed user friendly web components, enhancing UX and navigation based on 200+ feedback responses.`,
      `Removed 1200+ fake accounts in 2 months by building PHP based bot detection logic using behavior pattern analysis.`,
      `Deployed reCAPTCHA based validation, reducing monthly spam entries by 150+ through automated filtering.`
    ],
    tech: ["PHP", "JavaScript", "HTML", "CSS", "Bootstrap", "MySQL"],
    logo: "/logos/itjobxs_logo.png",
  },
  {
    role: "Software Development Intern",
    company: "Techfidelite Solutions Pvt. Ltd.",
    location: "Chennai, India",
    duration: "May 2022 – Aug 2022",
    responsibilities: [
      `Refined backend API framework, improving response time by 30% by refining database queries and request handling.`,
      `Implemented JWT authentication for RESTful APIs, reducing unauthorised access to fewer than 5 incidents per month 
      by enforcing secure token based authentication.`,
      `Streamlined sprint planning using Jira, Microsoft Teams, and GitHub Wiki, cutting turnaround by 20 hours per 
      month through improved task tracking and team collaboration.`,
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

      <main id="home" className="relative z-10 min-h-screen bg-black/50 text-blue-400 flex flex-col items-center px-6 pt-28 scroll-smooth">
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
            <p className="mt-6 text-lg md:text-xl text-blue-200">AI Software Engineer</p>
          </div>

          {/* About */}
          <div className="relative border border-blue-500/60 rounded-2xl p-8 backdrop-blur-sm bg-black/70 shadow-[0_0_40px_#3b82f6]">
            <h2 className="text-sm uppercase tracking-widest text-blue-400 mb-4">
              About Me
            </h2>
            <p className="text-blue-200 leading-relaxed text-lg md:text-xl text-justify">
              Hey there, I’m Sri. I want to introduce myself without sounding like a cover letter, so here’s the simpler version: Rewind to May 2025, 
              I wrapped up my Master’s in Computer Science at University of Colorado Boulder. Currently, I’m doing a small Full-Stack Engineer gig in a 
              charity called “The Rattlesnake Ramble Charity Trail Race”. Somewhere between the chaos of Bachelors and Grad school, 
              I squeezed in 3 internships whewww!!! And I spent two whole semesters as a Graduate Teaching Assistant. Along the way, 
              I’ve built a strong hands on experience across full stack development, API design, cloud & deployment and databases through 
              real production work. I've also developed deep expertise in Machine Learning and Deep Learning through coursework and projects, thanks 
              to my Grad school and Bachelors. I absolutely enjoy building machine learning powered systems that go beyond notebooks 
              and actually ship as real, full stack products.
            </p>
            <div className="mt-6 flex justify-center">
              <a
                href="sri_venkatesha_mani_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-blue-200 text-blue-50 text-sm font-semibold bg-blue-500/20 hover:bg-blue-500/30 hover:border-white shadow-[0_0_26px_rgba(99,179,237,0.55),0_0_12px_rgba(99,179,237,0.35)] transition duration-200"
              >
                <span>Resume</span>
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 auto-rows-fr">

              <ProjectCard
                title="Recipe Realm Web Application"
                duration="Jan 2024 – May 2024"
                institution="University of Colorado Boulder"
                logo="/logos/cub_logo.png"
                description={[
                  `Recipe Realm is a MERN stack web application I developed to manage recipes.With user authentication and full CRUD operations, 
                  users can effortlessly manage and share their culinary creations.`,
                  `The application features interactive elements such as likes, comments, save posts and an intuitive search functionality, 
                  fostering a vibrant community of food enthusiasts.`,
                  `Deployed on GCP and Netlify, Recipe Realm is accessible and scalable, offering a seamless user experience across devices.`
                ]}
                tools={["MongoDb", "Express", "React", "Node", "HTML", "CSS", "Github", "Postman", "Rest APIs", "Netlify", "Dcoker", "GCP", "Third Party APIs"]}
                github="https://github.com/SriVenkateshMani/Recipe-Realm"
              />

              <ProjectCard
                title="Image Style Transfer Using Neural Networks"
                duration="Jan 2024 – May 2024"
                institution="University of Colorado Boulder"
                logo="/logos/cub_logo.png"
                description={[
                  `Conducted research on neural style transfer (NST) using the ResNet50 model to blend the artistic style of one image with the content of another.`,
                  `The study demonstrated that ResNet50 compared to the traditional VGG-based approaches, enhances feature representation and improves style fidelity.`,
                ]}
                tools={["Python", "TensorFlow", "Keras", "ResNet50", "VGG19", "Neural Style Transfer", "CNNs", 
                  "Transfer Learning", "Computer Vision", "Google Colab"]}
              />

              <ProjectCard
                title="AI-Generated Text Detection Using NLP"
                duration="Aug 2023 – Dec 2023"
                institution="University of Colorado Boulder"
                logo="/logos/cub_logo.png"
                description={[
                  `I built a sophisticated classifier to detect AI-generated text, achieving an 85% accuracy rate. 
                  Using models such as BERT, DistilBERT, and GPT-2, I explored the intersection of AI and linguistics.`,
                  `This project highlights the growing need to discern authenticity in the age of machine-generated content.`,
                  `By integrating PyTorch, Pandas, and Scikit-learn, I enhanced the model’s performance, 
                  making it a reliable tool for text classification.`
                ]}
                tools={["BERT", "DistilBERT", "PyTorch", "GPT-2", "Pandas", "Scikit-learn", "Kaggle Notebooks", "Git"]}
                github="https://github.com/Manojdeep-Dakavaram/NLP_Shared_task"
              />

              <ProjectCard
                title="Hybrid Data Driven Similarity Measures Sentiment Prediction Using Deep Learning Models"
                duration="Dec 2022 – May 2023"
                institution="SRM Institute of Science & Technology"
                logo="/logos/srm_logo.png"
                description={[
                  `Engineered an advanced stock price prediction model using machine learning techniques and sentiment analysis.`,
                  `Constructed few Deep Learning models written in Python, utilizing TensorFlow and Keras to enhance stock price prediction 
                  accuracy by analyzing sentiment data around 50,000 news.`,
                ]}
                tools={["Python", "Jupyter Notebook", "Pandas", "NumPy", "Scikit-learn", "Time Series Analysis", "Regression / Forecasting Models", "LSTM (Neural Networks)"]}
                github="https://github.com/SriVenkateshMani/Stock_prediction"
              />

              <div className="md:col-span-2 flex justify-center">
              <div className="w-full md:w-1/2">
                <ProjectCard
                  title="Imparting Gestures Through Voice Communication"
                  duration="Aug 2022 – Dec 2022"
                  institution="SRM Institute of Science & Technology"
                  logo="/logos/srm_logo.png"
                  description={[
                    `Bridged the communication gap for speechless individuals by creating a wearable system that translates 
                    hand movements into synthesized text and speech.`,
                    `Practiced and trained with algorithms such as SVM, Random Forest, Decision Trees, Naïve Bayes, 
                    and Neural Networks to map sensor values to speech.`,
                  ]}
                tools={[
                  "Python",
                  "Machine Learning",
                  "Neural Networks",
                  "SVM",
                  "Decision Trees",
                  "Random Forest",
                  "Naïve Bayes",
                ]}
              />
              </div>
            </div>
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
