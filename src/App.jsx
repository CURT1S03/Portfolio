import { useState } from 'react';
import { motion } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SelectedWorks from './components/SelectedWorks';
import ExperienceSection from './components/ExperienceSection';
import DeepThinkSection from './components/DeepThinkSection';
import SkillsSection from './components/SkillsSection';

import FooterSection from './components/FooterSection';

/* ============================================
   Portfolio Data
   ============================================ */

const portfolioData = {
  base: import.meta.env.BASE_URL,
  personal: {
    name: "Curtis Cao",
    title: "Computer Science Student & Software Engineer",
    phone: "(401) 430-0384",
    email: "curtiswencao@gmail.com",
    location: "Atlanta, GA",
    linkedin: "https://linkedin.com/in/curtiscao/",
    github: "https://github.com/Cwcao",
    citizenship: "U.S. Citizen",
    about: "I am a Computer Science student at Georgia Tech specializing in machine learning, full-stack architecture, and robotics software. I have a proven track record of engineering end-to-end systems, from deploying cloud-based NLP pipelines and LLM chatbots to building edge-deployed computer vision models for autonomous systems."
  },
  skills: {
    languages: ["C", "C++", "Java", "JavaScript", "Python", "HTML", "CSS"],
    technologies: ["Power BI", "Excel", "SQL Developer", "GitHub", "Docker", "Kubernetes", "Oracle Database", "Azure", "FAISS", "LangChain", "Streamlit", "REST APIs", "FastAPI", "CI/CD", "InfluxDB", "PyTorch"]
  },
  experience: [
    {
      id: "exp-2",
      role: "SDE Intern",
      company: "CMS Energy",
      location: "Jackson, MI",
      date: "May 2026 - Aug 2026",
      type: "work",
      bullets: [
        "Designed a custom API integration layer for an AI incident management agent to handle unique data requirements unsupported by standard connectors, securely routing REST payloads between ServiceNow and Moveworks to save an estimated 250 hours in manual triage.",
        "Engineered secure data pipelines leveraging OAuth 2.0 and HTTPS to extract CMDB records and incident metrics from ServiceNow ITSM, synchronizing state vectors with Moveworks' internal ITSM and Conversation Services to correlate alerts and reduce false pages.",
        "Deployed conversational workflows within the Microsoft Teams M365 environment via AzureBot, integrating Active Directory via LDAPS for secure user identity resolution and enabling natural language execution of custom runbooks.",
        "Architected a semantic search fallback mechanism by connecting ServiceNow Knowledge Base endpoints directly to the Moveworks Answers Service, establishing an intelligent cache to automatically retrieve historical ITSM resolutions and prevent recurring outages."
      ]
    },
    {
      id: "exp-1",
      role: "SDE Intern",
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
      id: "exp-3",
      role: "Data Subteam Member",
      company: "Georgia Tech Solar Racing",
      location: "Atlanta, GA",
      date: "2025 - Present",
      type: "work",
      images: [`${import.meta.env.BASE_URL}solar1.png`, `${import.meta.env.BASE_URL}unnamed.png`],
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
      date: "Fall 2026 - (Expected) Fall 2027",
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
      id: "proj-oss",
      title: "Open Source Contributor | Career-Ops",
      date: "Apr 2026",
      category: "Open Source",
      tags: ["Open Source", "LaTeX", "Node.js", "pdflatex", "36k+ Stars in 10 Days"],
      link: "https://github.com/santifer/career-ops",
      images: [ `${import.meta.env.BASE_URL}careerops_firstPR.png`],
      bullets: [
        "A feature contribution to Career-Ops, a rapidly trending open-source project that gained over 36,000 GitHub stars within 10 days of launch.",
        "Implements a full LaTeX and Overleaf CV export feature, integrating pdflatex compilation directly into the application's existing architecture.",
        "Resolved Issue #47, a high-demand community request, delivering the end-to-end PDF generation pipeline as a merged pull request (PR #362)."
      ]
    },
    {
      id: "proj-0a",
      title: "Full-Stack RL Training Environment for Quadrupeds",
      date: "Apr 2026",
      category: ["Robotics & Simulation", "Machine Learning"],
      tags: ["React", "FastAPI", "NVIDIA Isaac Sim", "Reinforcement Learning", "PPO"],
      link: "https://github.com/CURT1S03/quadruped-drl-platform",
      video: "https://www.youtube.com/embed/Xhlh6Zme6dA",
      bullets: [
        "A comprehensive web platform designed to streamline and visualize the training of quadruped robots using GPU-parallelized deep reinforcement learning in NVIDIA Isaac Sim.",
        "Features a custom React and FastAPI dashboard that allows users to seamlessly upload URDF models and custom terrains, configure complex training parameters, and launch Isaac Sim environments dynamically.",
        "Includes real-time WebSocket integrations to stream training metrics and dynamically monitor Proximal Policy Optimization (PPO) algorithms as policies learn gait stability and obstacle traversal across thousands of parallel environments."
      ]
    },
    {
      id: "proj-0",
      title: "EquipLog",
      date: "Mar 2026",
      category: "Full-Stack Apps",
      tags: ["Mobile-First", "QR Code", "UX Design", "Customer Discovery"],
      link: "https://portfolio-21md.vercel.app/",
      preview: "https://portfolio-21md.vercel.app/",
      bullets: [
        "A mobile-first workflow solution designed directly from customer discovery interviews to address the critical friction points shop floor mechanics face during equipment maintenance.",
        "The application entirely eliminates manual data entry by incorporating large-text search features and integrated QR code scanning for instantaneous equipment record retrieval.",
        "It drastically accelerates safety risk and fault reporting through a highly accessible, glove-friendly interface, enabling technicians to log issues and attach contextual diagnostic photos in under 30 seconds."
      ]
    },
    {
      id: "proj-sentiment-robustness",
      title: "Robustness Analysis of Sentiment Classifiers",
      date: "Jan 2026",
      category: "Machine Learning",
      tags: ["Python", "HuggingFace Transformers", "scikit-learn", "GloVe", "NLP", "Robustness Evaluation", "Pandas", "Matplotlib"],
      link: "https://github.com/CURT1S03/NLPProject",
      image: `${import.meta.env.BASE_URL}per_class_accuracy.png`,
      bullets: [
        "Designed a severity-controlled text perturbation framework covering spelling errors, word deletion, word order shuffling, and punctuation removal — applied individually and in combination across three severity levels — to investigate how real-world noise affects sentiment classification.",
        "Evaluated Logistic Regression (TF-IDF), Neural Bag-of-Words (GloVe-100d), and DistilBERT on SST-2 (in-distribution), IMDB, and Yelp Polarity (OOD), reporting accuracy, F1, per-class accuracy, prediction flip rate, and model confidence across all conditions.",
        "Key finding: DistilBERT leads clean-text performance by +11pp over LR on SST-2 but degrades fastest under noise, falling below LR's accuracy at high-severity perturbations — a reversal attributed to subword tokenizer fragility to character-level corruption, establishing TF-IDF bag-of-words as the most robust approach for noisy deployment environments."
      ]
    },
    {
      id: "proj-2",
      title: "Vision Augmented Race Strategy Engine",
      date: "2025 – Present",
      category: "Robotics & Simulation",
      tags: ["InfluxDB", "NVIDIA Jetson", "YOLOv8", "U-Net", "MiDaS", "Docker", "AWS EC2"],
      link: "",
      image: `${import.meta.env.BASE_URL}srsim.png`,
      bullets: [
        "An advanced, edge-deployed race strategy platform built for the Georgia Tech Solar Racing team, fusing real-time telemetry, irradiance forecasting, and onboard computer vision to optimize the vehicle's 14 kWh energy budget.",
        "Runs a sophisticated CV pipeline on an NVIDIA Jetson Orin Nano, executing U-Net sky segmentation alongside YOLOv8 object detection and MiDaS depth estimation, streaming structured state data over cellular backhaul.",
        "Continuously dynamically adjusts physics-based speed models by using cloud-cover to derate array power, automatically capping speed sweeps based on detected lead vehicles, and adapting rolling resistance calculations to current surface classifications.",
        "The strategy backend and data ingestion services are fully containerized with Docker and deployed to AWS EC2, enabling remote updates to race models without physical access to the chase vehicle."
      ]
    },
       {
      id: "proj-0b",
      title: "Algae Bloom (HAB) Predictive Model",
      date: "Dec 2025",
      category: "Machine Learning",
      tags: ["Python", "Pandas", "Scikit-learn"],
      link: "https://github.com/CURT1S03/Algae-ML",
      images: [`${import.meta.env.BASE_URL}ml1.png`, `${import.meta.env.BASE_URL}ml2.png`],
      bullets: [
        "A machine learning pipeline designed to reliably predict Harmful Algal Bloom (HAB) concentrations by analyzing and mapping five years of complex, disparate environmental time-series sensor data.",
        "Features a highly engineered Pandas data pipeline that cleans data, handles missing values via temporal interpolation, and engineers complex lagging variables to capture crucial aquatic temporal dependencies.",
        "Leverages systematically tuned regression models—including Random Forests and Gradient Boosting—to effectively establish dissolved oxygen and temperature profiles as key predictive drivers of phycocyanin concentrations."
      ]
    },
    {
      id: "proj-1",
      title: "Robotics Digital Twin Application",
      date: "Nov 2025",
      category: "Robotics & Simulation",
      tags: ["NVIDIA Isaac Sim", "Isaac Lab", "FastAPI", "ROS 2", "Oracle DB", "Streamlit", "WebSocket"],
      link: "https://github.com/CURT1S03/robotics-digital-twin",
      image: `${import.meta.env.BASE_URL}package-lock.png`,
      bullets: [
        "A digital twin framework for evaluating quadruped navigation algorithms in NVIDIA Isaac Sim before deploying to physical hardware, enabling rapid and reproducible iteration on planning strategies without risking hardware.",
        "Configures Waypoint and RRT path planners for a Unitree Go2 robot and runs multi-trial experiments through a FastAPI backend with real-time WebSocket streaming of simulation telemetry.",
        "Persists telemetry and performance metrics to an Oracle-schema database via a ROS 2 asyncio pub/sub pipeline, and visualizes cross-planner comparisons through interactive Streamlit dashboards powered by Plotly."
      ]
    },
    {
      id: "proj-ascensio",
      title: "Ascensio (3D Platformer Game)",
      date: "Feb 2025",
      category: "Fun",
      tags: ["Unity", "C#", "Game Design", "Git LFS", "3D"],
      link: "https://github.com/CURT1S03/Ascensio",
      video: "https://www.youtube.com/embed/-l6dTUsGWe0",
      bullets: [
        "An engaging 3D platformer game developed in Unity featuring complex navigational challenges, integrated environmental puzzles, and a diverse collection-based gameplay loop.",
        "Features polished C# control architectures with responsive third-person camera anchoring, seamless respawn networks, and interactive physics elements like bouncy foliage and elevating clouds.",
        "Showcases intricate 3D level design involving expansive, vertical environments woven together with complex assets, carefully managed via Git LFS to maintain optimal asset performance."
      ]
    },
    {
      id: "proj-4",
      title: "Maze Solver With Image Detection",
      date: "Nov 2023",
      category: "Fun",
      tags: ["Python", "OpenCV"],
      link: "https://github.com/CURT1S03/MazeSolver",
      image: `${import.meta.env.BASE_URL}Maze.png`,
      bullets: [
        "An automated computer vision utility written in Python that instantly maps and visually overlays solution paths through standard perfect-maze images.",
        "Executes a multi-stage OpenCV processing pipeline applying advanced techniques such as binary thresholding, morphological dilations, and precise contour detection.",
        "Solves complex structures entirely through spatial mathematics and channel manipulations, successfully isolating paths without relying on traditional algorithmic graph traversal or recursive pathfinding."
      ]
    }
  ]
};

/* ============================================
   Main App
   ============================================ */

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showProjects, setShowProjects] = useState(false);
  const d = portfolioData;

  return (
    <div className="bg-bg text-foreground font-body">
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {!isLoading && (
        <motion.main
          initial={{ opacity: 0, y: 22, scale: 0.995 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <Navbar email={d.personal.email} />
          <HeroSection data={d.personal} />
          <ExperienceSection experience={d.experience} education={d.education} />
          <DeepThinkSection onRevealProjects={() => setShowProjects(true)} />
          {showProjects && <SelectedWorks projects={d.projects} />}
          <SkillsSection skills={d.skills} />
          <FooterSection data={d.personal} />
        </motion.main>
      )}
    </div>
  );
}
