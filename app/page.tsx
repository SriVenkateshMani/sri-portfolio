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
      `Found a sneaky bug where legit PayPal payment confirmations were getting silently blocked by our own auth system, 
      the security check meant to stop bad actors was accidentally stopping real users too. Fixed it by carving out a safe exception path, 
      recovering 15+ missing registrations per race without weakening security anywhere else.`,
      `Built an automated email system using Gmail SMTP that handles confirmations and reminders (a week out and a day out) for 100+ runners per race, 
      so nobody's left wondering if their registration actually went through.`,
      `Rebuilt the entire checkout flow from a basic PayPal redirect into a proper server-side integration using PayPal's Orders API, 
      which opened the door to 4 payment options including Venmo, card, and Pay Later instead of just one rigid path`,
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
      `Designed a 3-tier permission system (private, org, public) for shared lab data. The tricky part was making sure changing one component's 
      access level couldn't accidentally lock other components out of data they depended on, so I built guardrails to catch that 
      before it broke anything.`,
      `Built a drag-and-drop interface in React (using react-dnd) that let researchers visually build out lab protocols instead of manually writing 
      structured data by hand, then connected it to a typed backend API so it actually worked end to end.`,
      `Built 8 API endpoints in Flask to convert biological lab data back and forth between two formats (SBOL3 and JSON), 
      supporting 9 different nested data types so researchers could actually create and manage real protocols. 
      5 lab researchers used it and it held up.`,
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
      `Mentored 200+ students through C++11/14/23 concepts as a TA for CSCI 1300, holding office hours and grading coursework, 
      helped bump assignment completion rates up by 40% along the way.`,
      `Kept exams running clean and violation-free for 500+ students, basically the unglamorous but important work of making sure the academic 
      integrity side of things never broke down.`,
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
      `Killed 20 to 50 fake bot signups a day by building a smarter validation check at registration instead of cleaning up fake accounts after the fact`,
      `Layered in Google reCAPTCHA on top of that so bots couldn't just dodge the fix by switching email domains, basically closing the loophole that was left open.`,
      `Built a responsive listing page for interview experiences from scratch, hand-rolling the layout with custom CSS and Bootstrap's grid so it looked right on both desktop and mobile.`
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
      `Dug into the backend API and cleaned up slow database queries and request handling, 
      knocked response times down by 30% without touching the actual features.`,
      `Locked down the RESTful APIs with JWT-based token authentication, which cut unauthorized access 
      down to fewer than 5 incidents a month instead of letting it run loose..`,
      `Tightened up sprint planning by getting Jira, Microsoft Teams, and GitHub Wiki actually talking to each other properly, 
      saved the team about 20 hours a month that used to get lost in disorganized task tracking.`,
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
              Hey there, I&apos;m Sri. I don&apos;t wanna be sounding like a cover letter, so here&apos;s the simpler version: Alright so, I wrapped up my Master&apos;s in Computer Science at the University of Colorado Boulder in May 2025. Right now, I&apos;m doing a Full-Stack Engineer gig for a charity called &quot;The Rattlesnake Ramble Charity Trail Race.&quot;
            </p>
            <p className="text-blue-200 leading-relaxed text-lg md:text-xl text-justify mt-4">
              Somewhere between the chaos of Bachelors and Grad school, I squeezed in 3 internships whewww!!! And I spent two whole semesters as a Graduate Teaching Assistant. Along the way, I&apos;ve built strong hands-on experience across full-stack development, API design, cloud &amp; deployment, and databases through real production work.
            </p>
            <p className="text-blue-200 leading-relaxed text-lg md:text-xl text-justify mt-4">
              I&apos;ve also developed deep expertise in Machine Learning and Deep Learning through coursework and projects. I absolutely love building full-stack features end to end from the ground up, all the way to shipping a real working product. And doing it with AI? Oh yeah, THAT&apos;S WHAT I LIVE FOR.
            </p>
            <div className="mt-6 flex justify-center">
              <a
                href="sri_venkatesha_mani_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-lg border border-blue-300/60 text-blue-50 text-sm font-semibold bg-blue-500/20 hover:bg-blue-500/30 hover:border-white shadow-[0_0_26px_rgba(99,179,237,0.55),0_0_12px_rgba(99,179,237,0.35)] transition duration-200 group"
              >
                <span className="text-base">&#128196;</span>
                <span>That One Doc Everyone Asks For</span>
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 auto-rows-fr">

              <ProjectCard
                title="Recipe Realm Web Application"
                duration="Jan 2024 – May 2024"
                institution="University of Colorado Boulder"
                logo="/logos/cub_logo.png"
                description={[
                  `Recipe Realm is a MERN stack web application I developed to manage recipes. With user authentication and full CRUD operations, 
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
