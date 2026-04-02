import React from 'react';
import { 
  Mail, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  Calendar, 
  ChevronRight, 
  Code,
  ExternalLink
} from 'lucide-react';

const Github = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const Linkedin = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

// ==========================================
// PORTFOLIO DATA (EDIT THIS TO UPDATE YOUR SITE)
// ==========================================
const portfolioData = {
  personal: {
    name: "Curtis Cao",
    title: "Computer Science Student & Software Engineer",
    phone: "(401) 430-0384",
    email: "curtiswencao@gmail.com",
    location: "Atlanta, GA",
    linkedin: "https://linkedin.com/in/curtiscao/",
    github: "https://github.com/Cwcao",
    citizenship: "U.S. Citizen",
    about: "I am a Computer Science student at Georgia Tech with a strong focus on backend engineering, data pipelines, and machine learning. Experienced in building robust APIs, deploying microservices, and architecting complex applications from RAG chatbots to digital twins."
  },
  skills: {
    languages: ["C", "C++", "Java", "JavaScript", "Python", "HTML", "CSS"],
    technologies: ["Power BI", "Excel", "SQL Developer", "GitHub", "Docker", "Kubernetes", "Oracle Database", "Azure", "FAISS", "LangChain", "Streamlit", "REST APIs", "FastAPI", "CI/CD", "InfluxDB", "PyTorch"]
  },
  experience: [
    {
      id: "exp-1",
      role: "R&D Intern",
      company: "LSPediA",
      location: "Bloomfield Hills, MI",
      date: "May 2025 - Aug 2025",
      type: "work",
      bullets: [
        "Architected and deployed a production-ready RAG chatbot using LangChain, FAISS, and Azure OpenAI, enabling non-technical users to query a 5GB+ FDA compliance dataset, abstracting complex SQL joins and reducing retrieval times from hours to seconds.",
        "Engineered an NLP data pipeline using Python and OpenAI to perform entity extraction and normalization on 100,000+ unstructured recall records.",
        "Engineered and containerized over 5 distinct Python microservices, each exposing a RESTful API to automate data integration from HubSpot, Freshdesk, and QuickBooks.",
        "Orchestrated 10+ automated ETL workflows using Kubernetes CronJobs, leveraging Datadog monitoring for 99.9% uptime for business-critical data synchronization.",
        "Developed and maintained a robust CI/CD pipeline using GitHub Actions for a containerized legacy process."
      ]
    }
  ],
  education: [
    {
      id: "edu-1",
      degree: "Master of Science in Computer Science",
      school: "Georgia Institute of Technology",
      location: "Atlanta, GA",
      date: "Fall 2026 - Fall 2027",
      type: "education",
      bullets: []
    },
    {
      id: "edu-2",
      degree: "Bachelor of Science in Computer Science",
      school: "Georgia Institute of Technology",
      location: "Atlanta, GA",
      date: "Fall 2023 - Spring 2026",
      type: "education",
      bullets: [
        "Coursework: Data Structures & Algorithms, Object-Oriented Design, Machine Learning, Computer Vision, Probability & Statistics, Operating Systems"
      ]
    }
  ],
  projects: [
    {
      id: "proj-0",
      title: "EquipLog",
      date: "Mar 2026",
      tags: ["Mobile-First", "QR Code", "UX Design", "Customer Discovery"],
      link: "https://equiplog.netlify.app/",
      bullets: [
        "Directed product strategy by conducting customer discovery interviews with shop floor mechanics, identifying critical workflow bottlenecks to inform the MVP's focus on mobile accessibility.",
        "Streamlined equipment record retrieval, eliminating manual data entry for mechanics on the floor, by designing a mobile-first application featuring integrated QR code scanning and large-text search capabilities.",
        "Accelerated the safety risk and issue reporting process to under 30 seconds per instance—requiring fewer than 3 screen taps—by developing a highly accessible, glove-friendly user interface with quick-toggle statuses.",
        "Improved diagnostic clarity and cross-team communication for maintenance technicians by implementing a photo-attachment feature within the issue-logging pipeline, providing immediate visual context for future repairs.",
        "Delivered measurable real-world impact during initial testing by reducing average issue logging time by over 50%, validating the application's ability to drive operational efficiency and safety compliance."
      ]
    },
    {
      id: "proj-0b",
      title: "Algae Bloom (HAB) Predictive Model",
      date: "Mar 2025",
      tags: ["Python", "Pandas", "Scikit-learn"],
      link: "https://github.com/CURT1S03/Algae-ML",
      bullets: [
        "Engineered a Pandas pipeline to ingest, clean, and merge 5 years of disparate time-series data; implemented preprocessing steps to handle more than 15% missing values via temporal interpolation and normalized features (pH, temp) using Scikit-learn's MinMaxScaler, creating a feature-ready dataset.",
        "Engineered 10+ new features, including 7-day rolling averages and lag variables, to capture temporal dependencies in sensor data. Trained, iterated, and compared multiple Scikit-learn models (Random Forest, GBR) to predict Phycocyanin (HAB) concentrations.",
        "Deployed GridSearchCV for systematic hyperparameter tuning, improving the final model's predictive accuracy (RMSE) by 18% over baseline. Performed data mining by extracting feature importances to identify dissolved oxygen and temperature as the key drivers of algae blooms."
      ]
    },
    {
      id: "proj-1",
      title: "Robotics Digital Twin Application",
      date: "Feb 2025",
      tags: ["NVIDIA Omniverse", "Streamlit", "FastAPI", "ROS 2", "Oracle DB"],
      link: "https://github.com/Cwcao",
      bullets: [
        "Architected a full-stack digital twin framework using NVIDIA Omniverse to validate robotic planning algorithms.",
        "Developed RESTful API endpoints with FastAPI that interfaced with a core ROS 2 pub/sub system.",
        "Engineered a data pipeline where ROS 2 nodes published real-time performance metrics persisted to an Oracle Database.",
        "Created endpoints to enable Streamlit dashboards to visualize historical experiment data."
      ]
    },
    {
      id: "proj-2",
      title: "Solar Racing Strategy Simulator",
      date: "2025 - Present",
      tags: ["InfluxDB", "BoTorch/GPyTorch", "Flask", "React", "Docker"],
      link: "https://github.com/Cwcao",
      bullets: [
        "Improved race-day lap prediction accuracy from 29% to 78% by building a pace-based telemetry pipeline.",
        "Optimized speed profiles across a 24-dimensional continuous search space maximizing FSGP competition score using Bayesian optimization.",
        "Delivered a full-stack race operations platform serving 11,000+ lines of code across a Flask REST API, React dashboard, and Dockerized deployment."
      ]
    },
    {
      id: "proj-3",
      title: "Bottling Plant Digital Twin",
      date: "2024 - 2025",
      tags: ["NVIDIA Omniverse", "USD", "Simulation"],
      link: "",
      bullets: [
        "Led the design and development of a digital twin for a bottling plant using Nvidia Omniverse, enabling real-time visualization.",
        "Implemented physics-based simulations to replicate conveyor belt dynamics and bottleneck issues.",
        "Collaborated with cross-functional teams using Universal Scene Description (USD) for interoperability."
      ]
    },
    {
      id: "proj-4",
      title: "Maze Solver With Image Detection",
      date: "Nov 2023",
      tags: ["Python", "OpenCV", "Algorithms"],
      link: "",
      image: "/Maze.png",
      bullets: [
        "Developed a console program capable of analyzing black-and-white maze images and computing optimal navigation solutions.",
        "Employed OpenCV to accurately transform maze images into RGB coordinates within a 2D-NumPy array.",
        "Integrated and optimized Dijkstra's algorithm for efficient and accurate maze navigation."
      ]
    },
    {
      id: "proj-5",
      title: "JavaFX Music Player",
      date: "Aug 2023",
      tags: ["Java", "Eclipse", "JavaFX"],
      link: "https://sites.google.com/view/secondproject/our-app?authuser=0",
      bullets: [
        "Utilized JavaFX to craft a dynamic and visually appealing user interface for music playback.",
        "Implemented comprehensive music playback functionalities (play, pause, stop, track selection).",
        "Developed a robust library management system allowing users to organize music collections."
      ]
    }
  ]
};

// ==========================================
// MAIN APPLICATION COMPONENT
// ==========================================
export default function App() {
  const projects = portfolioData.projects;

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-blue-500/30">
      
      {/* HEADER & HERO */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-tight text-white">
            {portfolioData.personal.name}<span className="text-blue-500">.</span>
          </h1>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-400">
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#education" className="hover:text-white transition-colors">Education</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 md:py-20 space-y-24">
        
        {/* HERO SECTION */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">{portfolioData.personal.name}</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-400 max-w-3xl">
              {portfolioData.personal.title}
            </p>
          </div>
          
          <p className="text-lg leading-relaxed text-slate-300 max-w-3xl">
            {portfolioData.personal.about}
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a href={portfolioData.personal.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-white transition-all text-sm font-medium">
              <Github size={18} /> GitHub
            </a>
            <a href={portfolioData.personal.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-blue-600/10 hover:bg-blue-600/20 text-blue-400 rounded-lg transition-all text-sm font-medium">
              <Linkedin size={18} /> LinkedIn
            </a>
            <a href={`mailto:${portfolioData.personal.email}`} className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-white transition-all text-sm font-medium">
              <Mail size={18} /> Email
            </a>
            <div className="flex items-center gap-2 px-4 py-2 text-slate-400 text-sm">
              <MapPin size={18} /> {portfolioData.personal.location}
            </div>
          </div>
        </section>

        {/* TIMELINE SECTION (EXPERIENCE & EDUCATION) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Work Experience */}
          <section id="experience" className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                <Briefcase size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Work Experience</h3>
            </div>
            
            <div className="space-y-8 border-l-2 border-slate-800 ml-3 pl-8 relative">
              {portfolioData.experience.map((job) => (
                <div key={job.id} className="relative">
                  <div className="absolute w-4 h-4 bg-slate-900 border-2 border-blue-500 rounded-full -left-[39px] top-1"></div>
                  <div className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                      <h4 className="text-xl font-bold text-white">{job.role}</h4>
                      <span className="text-sm font-medium text-blue-400 flex items-center gap-1">
                        <Calendar size={14} /> {job.date}
                      </span>
                    </div>
                    <div className="text-slate-400 font-medium">{job.company} &bull; {job.location}</div>
                    <ul className="mt-4 space-y-2 text-slate-300">
                      {job.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex gap-2">
                          <ChevronRight size={16} className="text-blue-500 flex-shrink-0 mt-1" />
                          <span className="text-sm leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section id="education" className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>
            
            <div className="space-y-8 border-l-2 border-slate-800 ml-3 pl-8 relative">
              {portfolioData.education.map((edu) => (
                <div key={edu.id} className="relative">
                  <div className="absolute w-4 h-4 bg-slate-900 border-2 border-emerald-500 rounded-full -left-[39px] top-1"></div>
                  <div className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                      <h4 className="text-xl font-bold text-white leading-tight">{edu.degree}</h4>
                      <span className="text-sm font-medium text-emerald-400 flex items-center gap-1 shrink-0">
                        <Calendar size={14} /> {edu.date}
                      </span>
                    </div>
                    <div className="text-slate-400 font-medium">{edu.school} &bull; {edu.location}</div>
                    {edu.bullets.length > 0 && (
                      <ul className="mt-3 space-y-2 text-slate-300">
                        {edu.bullets.map((bullet, idx) => (
                          <li key={idx} className="flex gap-2">
                            <ChevronRight size={16} className="text-emerald-500 flex-shrink-0 mt-1" />
                            <span className="text-sm leading-relaxed">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* PROJECTS SECTION */}
        <section id="projects" className="space-y-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
                <Code size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Featured Projects</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="bg-slate-800/40 border border-slate-800 hover:border-slate-700 rounded-xl p-6 transition-all group flex flex-col h-full">
                {project.image && (
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                )}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex flex-col gap-1">
                    <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{project.title}</h4>
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noreferrer" className="text-sm text-blue-400 hover:text-blue-300 flex items-center gap-1 w-fit">
                        <ExternalLink size={14} /> View Project
                      </a>
                    )}
                  </div>
                  <span className="text-xs font-medium text-slate-400 bg-slate-900 px-2 py-1 rounded whitespace-nowrap ml-4 mt-1">
                    {project.date}
                  </span>
                </div>
                
                <ul className="space-y-2 mb-6 flex-grow">
                  {project.bullets.map((bullet, idx) => (
                    <li key={idx} className="text-slate-300 text-sm flex gap-2">
                      <span className="text-purple-500 mt-1">&bull;</span>
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs font-medium bg-blue-500/10 text-blue-300 px-2.5 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="space-y-8 pb-12">
          <div className="flex items-center gap-3">
            <h3 className="text-2xl font-bold text-white">Technical Skills</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-800">
              <h4 className="text-lg font-medium text-white mb-4">Languages</h4>
              <div className="flex flex-wrap gap-2">
                {portfolioData.skills.languages.map((skill, idx) => (
                  <span key={idx} className="bg-slate-700/50 hover:bg-slate-700 text-slate-200 px-3 py-1.5 rounded-lg text-sm transition-colors cursor-default border border-slate-600/50">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-800">
              <h4 className="text-lg font-medium text-white mb-4">Technologies & Frameworks</h4>
              <div className="flex flex-wrap gap-2">
                {portfolioData.skills.technologies.map((skill, idx) => (
                  <span key={idx} className="bg-slate-700/50 hover:bg-slate-700 text-slate-200 px-3 py-1.5 rounded-lg text-sm transition-colors cursor-default border border-slate-600/50">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>
      
      {/* FOOTER */}
      <footer className="border-t border-slate-800 py-8 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Curtis Cao. All rights reserved.</p>
      </footer>
    </div>
  );
}
