import React from 'react';
import {
  Mail,
  MapPin,
  Briefcase,
  GraduationCap,
  Calendar,
  ChevronRight,
  Code,
  ExternalLink,
  ArrowUpRight,
  Sparkles,
  Zap,
  Award,
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

/* ============================================
   Decorative Components
   ============================================ */

const DiamondDivider = () => (
  <div className="flex items-center gap-3 my-8">
    <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gold-300/40" />
    <div className="w-2 h-2 rotate-45 border border-gold-300/60" />
    <div className="w-1.5 h-1.5 rotate-45 bg-gold-300/60" />
    <div className="w-2 h-2 rotate-45 border border-gold-300/60" />
    <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gold-300/40" />
  </div>
);

const SectionHeading = ({ icon: Icon, iconColor, title, subtitle }) => (
  <div className="text-center space-y-3 mb-12">
    <div className="flex items-center justify-center gap-3 mb-2">
      <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold-300/50" />
      <div className={`p-2.5 rounded-lg border border-gold-300/20 ${iconColor}`}>
        <Icon size={22} />
      </div>
      <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold-300/50" />
    </div>
    <h3 className="font-heading text-3xl md:text-4xl font-bold text-gold-100 tracking-wide">
      {title}
    </h3>
    {subtitle && (
      <p className="text-sm font-accent text-gold-300/70 tracking-[0.2em] uppercase">{subtitle}</p>
    )}
  </div>
);

/* ============================================
   Portfolio Data
   ============================================ */

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
    },
    {
      id: "exp-2",
      role: "Data Subteam Member",
      company: "Georgia Tech Solar Racing",
      location: "Atlanta, GA",
      date: "2025 - Present",
      type: "work",
      images: ["/solar1.png", "/unnamed.png"],
      bullets: [
        "Integrated real-time environmental data into the team's energy forecasting models by utilizing the Solcast API to query solar irradiance (GHI) and temperature metrics at 30-minute intervals across 1,500+ mile routes.",
        "Engineered an automated geospatial data pipeline using Python that converted KML route files into structured DataFrames, identifying critical race segments based on custom distance and 3.5% elevation thresholds.",
        "Streamlined live race operations during the Formula Sun Grand Prix by configuring real-time Grafana dashboards to monitor incoming telemetry data, immediately alerting the chase car team to electric trips and State of Charge (SOC) anomalies.",
        "Supported dynamic route planning and mock race strategy by analyzing track similarities, local speed limits, and elevation changes to evaluate potential test routes."
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
        "Accelerated the safety risk and issue reporting process to under 30 seconds per instance\u2014requiring fewer than 3 screen taps\u2014by developing a highly accessible, glove-friendly user interface with quick-toggle statuses.",
        "Improved diagnostic clarity and cross-team communication for maintenance technicians by implementing a photo-attachment feature within the issue-logging pipeline, providing immediate visual context for future repairs.",
        "Delivered measurable real-world impact during initial testing by reducing average issue logging time by over 50%, validating the application's ability to drive operational efficiency and safety compliance."
      ]
    },
 
     {
      id: "proj-2",
      title: "Solar Racing Strategy Simulator",
      date: "Present",
      tags: ["InfluxDB", "BoTorch/GPyTorch", "Flask", "React", "Docker"],
      link: "",
      images: ["/simoutput1.png", "/simoutput2.png", "/simoutput3.png"],
      bullets: [
        "Improved race-day lap prediction accuracy from 29% to 78% by building a pace-based telemetry pipeline.",
        "Optimized speed profiles across a 24-dimensional continuous search space maximizing FSGP competition score using Bayesian optimization.",
        "Delivered a full-stack race operations platform serving 11,000+ lines of code across a Flask REST API, React dashboard, and Dockerized deployment."
      ]
    },
       {
      id: "proj-0b",
      title: "Algae Bloom (HAB) Predictive Model",
      date: "Dec 2025",
      tags: ["Python", "Pandas", "Scikit-learn"],
      link: "https://github.com/CURT1S03/Algae-ML",
      bullets: [
        "Engineered a Pandas pipeline to ingest, clean, and merge 5 years of disparate time-series data; implemented preprocessing steps to handle more than 15% missing values via temporal interpolation and normalized features (pH, temp) using Scikit-learn's MinMaxScaler, creating a feature-ready dataset.",
        "Engineered 10+ new features, including 7-day rolling averages and lag variables, to capture temporal dependencies in sensor data. Trained, iterated, and compared multiple Scikit-learn models (Random Forest, GBR) to predict Phycocyanin (HAB) concentrations.",
        "Deployed GridSearchCV for systematic hyperparameter tuning, improving the final model's predictive accuracy (RMSE) by 18% over baseline. Performed data mining by extracting feature importances to identify dissolved oxygen and temperature as the key drivers of algae blooms."
      ]
    },
    {
      id: "proj-ascensio",
      title: "Ascensio (3D Platformer Game)",
      date: "Nov 2025",
      tags: ["Unity", "C#", "Game Design", "Git LFS", "3D"],
      link: "https://github.com/CURT1S03/Ascensio",
      video: "https://www.youtube.com/embed/-l6dTUsGWe0",
      bullets: [
        "Designed and implemented core gameplay mechanics—including a coin collection system, interactive environmental elements (bouncy leaves, elevator clouds), and a safe-point respawn system—by writing modular C# scripts in Unity.",
        "Optimized player navigation and spatial awareness by developing a responsive third-person camera anchor system and integrating foundational character movement controls.",
        "Spearheaded a complete redesign of the main playable level by seamlessly integrating complex 3D assets (villages, beanstalks, bridges) and managing large binary files via Git LFS to maintain optimal project performance."
      ]
    },
     
   
   
    {
      id: "proj-1",
      title: "Robotics Digital Twin Application",
      date: "Feb 2025",
      tags: ["NVIDIA Omniverse", "Streamlit", "FastAPI", "ROS 2", "Oracle DB"],
      link: "",
      image: "/RoboticsDigitwin.png",
      bullets: [
        "Architected a full-stack digital twin framework using NVIDIA Omniverse to validate robotic planning algorithms.",
        "Developed RESTful API endpoints with FastAPI that interfaced with a core ROS 2 pub/sub system.",
        "Engineered a data pipeline where ROS 2 nodes published real-time performance metrics persisted to an Oracle Database.",
        "Created endpoints to enable Streamlit dashboards to visualize historical experiment data."
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

/* ============================================
   Main App
   ============================================ */

export default function App() {
  const projects = portfolioData.projects;
  const d = portfolioData;

  return (
    <div className="min-h-screen bg-navy-950 text-gold-100/80 font-body selection:bg-gold-300/20 chevron-bg">

      {/* ─── HEADER ─── */}
      <header className="border-b border-gold-300/10 bg-navy-950/90 backdrop-blur-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="group flex items-center gap-1.5">
            <span className="font-heading text-xl font-bold tracking-wide text-gold-100">
              {d.personal.name}
            </span>
            <span className="text-gold-300 text-2xl leading-none group-hover:text-gold-200 transition-colors">.</span>
          </a>
          <nav className="hidden md:flex items-center gap-1">
            {["Experience", "Education", "Projects", "Skills"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="px-4 py-2 text-sm font-medium tracking-wide text-gold-300/60 hover:text-gold-200 transition-all duration-300 relative group"
              >
                {item}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-gold-300/50 group-hover:w-2/3 transition-all duration-300" />
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6">

        {/* ─── HERO ─── */}
        <section className="pt-20 md:pt-32 pb-16 sunburst relative">
          <div className="animate-fade-up space-y-8">
            {/* Decorative top line */}
            <div className="flex items-center gap-4 mb-2">
              <div className="h-px w-16 bg-gold-300/30" />
              <span className="text-xs font-accent tracking-[0.3em] uppercase text-gold-300/50">Portfolio</span>
            </div>

            <div className="space-y-4">
              <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.95]">
                <span className="text-gold-50">Hi, I'm</span>
                <br />
                <span className="text-gold-gradient">{d.personal.name}</span>
              </h1>
              <p className="font-accent text-xl md:text-2xl text-gold-300/70 tracking-wide max-w-2xl italic">
                {d.personal.title}
              </p>
            </div>

            <div className="deco-line max-w-md" />

            <p className="text-base md:text-lg leading-relaxed text-gold-100/60 max-w-3xl font-light">
              {d.personal.about}
            </p>

            {/* Contact buttons */}
            <div className="flex flex-wrap gap-3 pt-4 stagger-children">
              <a href={d.personal.github} target="_blank" rel="noreferrer"
                className="flex items-center gap-2.5 px-5 py-2.5 border border-gold-300/20 hover:border-gold-300/50 hover:bg-gold-300/5 rounded-sm text-gold-200 transition-all duration-300 text-sm tracking-wide group">
                <Github size={16} />
                <span>GitHub</span>
                <ArrowUpRight size={14} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </a>
              <a href={d.personal.linkedin} target="_blank" rel="noreferrer"
                className="flex items-center gap-2.5 px-5 py-2.5 border border-gold-300/20 hover:border-gold-300/50 hover:bg-gold-300/5 rounded-sm text-gold-200 transition-all duration-300 text-sm tracking-wide group">
                <Linkedin size={16} />
                <span>LinkedIn</span>
                <ArrowUpRight size={14} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </a>
              <a href={`mailto:${d.personal.email}`}
                className="flex items-center gap-2.5 px-5 py-2.5 bg-gold-300/10 border border-gold-300/30 hover:bg-gold-300/20 rounded-sm text-gold-100 transition-all duration-300 text-sm tracking-wide">
                <Mail size={16} />
                <span>Get in Touch</span>
              </a>
              <div className="flex items-center gap-2 px-4 py-2.5 text-gold-300/40 text-sm">
                <MapPin size={14} /> {d.personal.location}
              </div>
            </div>
          </div>
        </section>

        <DiamondDivider />

        {/* ─── EXPERIENCE & EDUCATION ─── */}
        <section id="experience" className="py-16">
          <SectionHeading
            icon={Briefcase}
            iconColor="text-gold-300"
            title="Experience"
            subtitle="Professional Journey"
          />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Work Experience - takes 3 cols */}
            <div className="lg:col-span-3 space-y-10">
              {d.experience.map((job, i) => (
                <div key={job.id} className="relative group">
                  {/* Connector line */}
                  {i < d.experience.length - 1 && (
                    <div className="absolute left-[11px] top-12 bottom-0 w-px bg-gradient-to-b from-gold-300/30 to-transparent" />
                  )}
                  <div className="flex gap-6">
                    {/* Timeline dot */}
                    <div className="flex-shrink-0 mt-1.5">
                      <div className="w-6 h-6 rounded-full border-2 border-gold-300/50 bg-navy-950 flex items-center justify-center timeline-dot">
                        <div className="w-2 h-2 rounded-full bg-gold-300/70" />
                      </div>
                    </div>
                    {/* Content */}
                    <div className="flex-1 space-y-3 pb-2">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                        <div>
                          <h4 className="text-lg font-heading font-bold text-gold-50 tracking-wide">{job.role}</h4>
                          <p className="text-gold-300/60 font-accent text-base tracking-wide">{job.company} &bull; {job.location}</p>
                        </div>
                        <span className="text-xs font-medium text-gold-300/50 border border-gold-300/15 px-3 py-1 rounded-sm tracking-wider whitespace-nowrap mt-1">
                          {job.date}
                        </span>
                      </div>
                      <ul className="space-y-2.5">
                        {job.bullets.map((bullet, idx) => (
                          <li key={idx} className="flex gap-3 text-gold-100/55 text-sm leading-relaxed">
                            <ChevronRight size={14} className="text-gold-300/40 flex-shrink-0 mt-1" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                      {job.images && job.images.length > 0 && (
                        <div className="mt-4 grid grid-cols-2 gap-3">
                          {job.images.map((img, idx) => (
                            <img key={idx} src={img} alt={`${job.company} ${idx + 1}`}
                              className="rounded-sm border border-gold-300/10 w-full h-auto object-cover hover:border-gold-300/30 transition-all" />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Education - takes 2 cols */}
            <div id="education" className="lg:col-span-2">
              <div className="sticky top-24">
                <div className="flex items-center gap-2 mb-8">
                  <GraduationCap size={18} className="text-gold-300/60" />
                  <h4 className="font-heading text-lg font-bold text-gold-100 tracking-wide">Education</h4>
                </div>

                <div className="space-y-6">
                  {d.education.map((edu) => (
                    <div key={edu.id} className="relative deco-corner p-5 border border-gold-300/10 bg-gold-300/[0.02]">
                      <div className="space-y-2">
                        <h5 className="font-heading text-base font-bold text-gold-50 leading-snug">{edu.degree}</h5>
                        <p className="text-gold-300/60 font-accent text-sm tracking-wide">{edu.school}</p>
                        <div className="flex items-center gap-1.5 text-xs text-gold-300/40">
                          <Calendar size={12} /> {edu.date}
                        </div>
                        {edu.bullets.length > 0 && (
                          <div className="mt-3 pt-3 border-t border-gold-300/10">
                            {edu.bullets.map((b, i) => (
                              <p key={i} className="text-xs text-gold-100/45 leading-relaxed">{b}</p>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <DiamondDivider />

        {/* ─── PROJECTS ─── */}
        <section id="projects" className="py-16">
          <SectionHeading
            icon={Code}
            iconColor="text-gold-300"
            title="Featured Projects"
            subtitle="Selected Works"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 stagger-children">
            {projects.map((project) => (
              <div key={project.id}
                className="card-glow relative border border-gold-300/10 bg-gold-300/[0.02] p-6 flex flex-col h-full group">

                {/* YouTube video embed */}
                {project.video && (
                  <div className="mb-5 -mx-6 -mt-6 overflow-hidden">
                    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                      <iframe
                        src={project.video}
                        title={`${project.title} demo`}
                        className="absolute inset-0 w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                    <div className="h-px bg-gradient-to-r from-gold-300/20 via-gold-300/40 to-gold-300/20" />
                  </div>
                )}

                {/* Single image */}
                {project.image && !project.video && (
                  <div className="mb-5 -mx-6 -mt-6 overflow-hidden">
                    <img src={project.image} alt={project.title}
                      className="w-full h-48 object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="h-px bg-gradient-to-r from-gold-300/20 via-gold-300/40 to-gold-300/20" />
                  </div>
                )}

                {/* Multiple images */}
                {project.images && project.images.length > 0 && (
                  <div className="mb-5 -mx-6 -mt-6">
                    <div className={`grid gap-px ${project.images.length === 3 ? 'grid-cols-3' : 'grid-cols-2'}`}>
                      {project.images.map((img, idx) => (
                        <img key={idx} src={img} alt={`${project.title} ${idx + 1}`}
                          className="w-full h-36 object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                      ))}
                    </div>
                    <div className="h-px bg-gradient-to-r from-gold-300/20 via-gold-300/40 to-gold-300/20" />
                  </div>
                )}

                {/* Header */}
                <div className="flex justify-between items-start mb-4 gap-4">
                  <div className="space-y-1.5">
                    <h4 className="font-heading text-xl font-bold text-gold-50 tracking-wide group-hover:text-gold-200 transition-colors">
                      {project.title}
                    </h4>
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-gold-300/60 hover:text-gold-200 transition-colors tracking-wide">
                        <ExternalLink size={12} /> View Project
                      </a>
                    )}
                  </div>
                  <span className="text-xs text-gold-300/40 border border-gold-300/10 px-2.5 py-1 rounded-sm whitespace-nowrap tracking-wider">
                    {project.date}
                  </span>
                </div>

                {/* Bullets */}
                <ul className="space-y-2.5 mb-6 flex-grow">
                  {project.bullets.map((bullet, idx) => (
                    <li key={idx} className="text-sm flex gap-2.5 text-gold-100/50 leading-relaxed">
                      <span className="text-gold-300/40 mt-0.5">&loz;</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gold-300/8">
                  {project.tags.map((tag, idx) => (
                    <span key={idx}
                      className="text-[11px] font-medium tracking-wider uppercase text-gold-300/50 border border-gold-300/15 px-2.5 py-1 hover:border-gold-300/40 hover:text-gold-200 transition-all cursor-default">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <DiamondDivider />

        {/* ─── SKILLS ─── */}
        <section id="skills" className="py-16 pb-24">
          <SectionHeading
            icon={Zap}
            iconColor="text-gold-300"
            title="Technical Skills"
            subtitle="Tools & Technologies"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative deco-corner p-8 border border-gold-300/10 bg-gold-300/[0.02]">
              <h4 className="font-heading text-lg font-bold text-gold-100 mb-5 tracking-wide">Languages</h4>
              <div className="flex flex-wrap gap-2">
                {d.skills.languages.map((skill, idx) => (
                  <span key={idx}
                    className="skill-tag border border-gold-300/15 text-gold-100/50 px-4 py-2 text-sm tracking-wide cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative deco-corner p-8 border border-gold-300/10 bg-gold-300/[0.02]">
              <h4 className="font-heading text-lg font-bold text-gold-100 mb-5 tracking-wide">Technologies &amp; Frameworks</h4>
              <div className="flex flex-wrap gap-2">
                {d.skills.technologies.map((skill, idx) => (
                  <span key={idx}
                    className="skill-tag border border-gold-300/15 text-gold-100/50 px-4 py-2 text-sm tracking-wide cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-gold-300/10">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-accent text-sm text-gold-300/30 tracking-wide">
            &copy; {new Date().getFullYear()} Curtis Cao. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href={d.personal.github} target="_blank" rel="noreferrer" className="text-gold-300/30 hover:text-gold-200 transition-colors">
              <Github size={18} />
            </a>
            <a href={d.personal.linkedin} target="_blank" rel="noreferrer" className="text-gold-300/30 hover:text-gold-200 transition-colors">
              <Linkedin size={18} />
            </a>
            <a href={`mailto:${d.personal.email}`} className="text-gold-300/30 hover:text-gold-200 transition-colors">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
