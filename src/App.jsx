import { useState } from 'react';
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
      id: "proj-0a",
      title: "Full-Stack RL Training Environment for Quadrupeds",
      date: "Apr 2026",
      category: ["Robotics & Simulation", "Machine Learning"],
      tags: ["React", "FastAPI", "NVIDIA Isaac Sim", "Reinforcement Learning", "PPO"],
      link: "https://github.com/CURT1S03/quadruped-drl-platform",
      video: "https://www.youtube.com/embed/Xhlh6Zme6dA",
      bullets: [
        "Developed a full-stack web platform for training quadruped robots using deep reinforcement learning, integrating NVIDIA Isaac Sim/Isaac Lab for GPU-accelerated physics simulation with real-time visualized training and metric dashboards.",
        "Developed a React/FastAPI platform to configure, launch, and monitor Isaac Sim RL training with live WebSocket metrics, incorporating a custom URDF/USD and terrain upload pipeline for user-defined assets.",
        "Trained quadruped locomotion policies using Proximal Policy Optimization (PPO) with GPU-parallelized reinforcement learning across up to 4,096 simultaneous environments, tuning reward shaping, learning rate, and episode parameters to optimize gait stability over rough and obstacle-filled terrains."
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
        "Directed product strategy by conducting customer discovery interviews with shop floor mechanics, identifying critical workflow bottlenecks to inform the MVP's focus on mobile accessibility.",
        "Streamlined equipment record retrieval, eliminating manual data entry for mechanics on the floor, by designing a mobile-first application featuring integrated QR code scanning and large-text search capabilities.",
        "Accelerated the safety risk and issue reporting process to under 30 seconds per instance\u2014requiring fewer than 3 screen taps\u2014by developing a highly accessible, glove-friendly user interface with quick-toggle statuses.",
        "Improved diagnostic clarity and cross-team communication for maintenance technicians by implementing a photo-attachment feature within the issue-logging pipeline, providing immediate visual context for future repairs.",
        "Delivered measurable real-world impact during initial testing by reducing average issue logging time by over 50%, validating the application's ability to drive operational efficiency and safety compliance."
      ]
    },
 
    {
      id: "proj-2",
      title: "Vision Augmented Race Strategy Engine",
      date: "2025 – Present",
      category: "Robotics & Simulation",
      tags: ["InfluxDB", "NVIDIA Jetson", "YOLOv8", "U-Net", "MiDaS"],
      link: "",
      image: `${import.meta.env.BASE_URL}srsim.png`,
      bullets: [
        "Improved in race lap prediction accuracy from 29% to 78% by fusing real time InfluxDB telemetry, Solcast solar irradiance forecasts, and onboard computer vision into a unified energy model across a 14 kWh battery budget.",
        "Designed an edge CV pipeline on Nvidia Jetson Orin Nano that runs U-Net cloud segmentation on a sky facing camera and YOLOv8 nano object detection with MiDaS monocular depth estimation on a forward facing global shutter camera, publishing structured state vectors to InfluxDB at 2 Hz over cellular backhaul.",
        "Integrated CV outputs directly into a physics based speed optimizer: cloud cover fraction applies a real time derate to the solar power model, detected lead vehicle distance dynamically caps the 36 mph sweep space, and surface classification adjusts the rolling resistance coefficient, reducing strategy decision latency from minutes to sub second.",
        "Engineered the live prediction model as a constrained energy-balance optimizer that fuses Solcast forecasts with real time camera derived cloud cover to derate array power, caps the 36 speed sweep to the lead vehicle distance detected by MiDaS, and adjusts rolling resistance from surface classification while accounting for aerodynamic drag, lift augmented tire loads, and per corner braking losses."
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
        "Engineered a Pandas pipeline to ingest, clean, and merge 5 years of disparate time-series data; implemented preprocessing steps to handle more than 15% missing values via temporal interpolation and normalized features (pH, temp) using Scikit-learn's MinMaxScaler, creating a feature-ready dataset.",
        "Engineered 10+ new features, including 7-day rolling averages and lag variables, to capture temporal dependencies in sensor data. Trained, iterated, and compared multiple Scikit-learn models (Random Forest, GBR) to predict Phycocyanin (HAB) concentrations.",
        "Deployed GridSearchCV for systematic hyperparameter tuning, improving the final model's predictive accuracy (RMSE) by 18% over baseline. Performed data mining by extracting feature importances to identify dissolved oxygen and temperature as the key drivers of algae blooms."
      ]
    },
    {
      id: "proj-1",
      title: "Robotics Digital Twin Application",
      date: "Nov 2025",
      category: "Robotics & Simulation",
      tags: ["NVIDIA Omniverse", "Streamlit", "FastAPI", "ROS 2", "Oracle DB"],
      link: "",
      image: `${import.meta.env.BASE_URL}RoboticsDigitwin.png`,
      bullets: [
        "Architected a full-stack digital twin framework using NVIDIA Omniverse to validate robotic planning algorithms.",
        "Developed RESTful API endpoints with FastAPI that interfaced with a core ROS 2 pub/sub system.",
        "Engineered a data pipeline where ROS 2 nodes published real-time performance metrics persisted to an Oracle Database.",
        "Created endpoints to enable Streamlit dashboards to visualize historical experiment data."
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
        "Designed and implemented core gameplay mechanics—including a coin collection system, interactive environmental elements (bouncy leaves, elevator clouds), and a safe-point respawn system—by writing modular C# scripts in Unity.",
        "Optimized player navigation and spatial awareness by developing a responsive third-person camera anchor system and integrating foundational character movement controls.",
        "Spearheaded a complete redesign of the main playable level by seamlessly integrating complex 3D assets (villages, beanstalks, bridges) and managing large binary files via Git LFS to maintain optimal project performance."
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
        "Built an automated maze-solving application in Python using OpenCV to detect and visualize solution paths through perfect maze images.",
        "Implemented a multi-stage image processing pipeline leveraging grayscale conversion, binary thresholding, contour detection, and morphological transformations (dilation/erosion).",
        "Applied mathematical morphology techniques to extract maze solution paths without traditional graph-based pathfinding algorithms.",
        "Engineered bitwise masking and channel manipulation to overlay computed solution paths onto original maze images.",
        "Designed the pipeline to output intermediate processing steps for visual debugging and analysis of each transformation stage.",
        "Tested across multiple maze complexities (5×5, 20×20, 50×50) to validate solver accuracy and robustness."
      ]
    },
    {
      id: "proj-oss",
      title: "Open Source Contributor | Career-Ops",
      date: "Apr 2026",
      category: "Open Source",
      tags: ["Open Source", "LaTeX", "Node.js", "pdflatex", "36k+ Stars in 10 Days"],
      link: "https://github.com/santifer/career-ops",
      images: [ `${import.meta.env.BASE_URL}careerops_firstPR.png`],
      bullets: [
        "Contributed to Career-Ops, a rapidly trending open-source project that amassed over 36,000 GitHub stars within 10 days of launch, delivering a major feature enhancement merged into the main branch.",
        "Engineered a LaTeX and Overleaf CV export feature, integrating pdflatex compilation directly into the application's core architecture.",
        "Resolved a major community request (Issue #47) by delivering the end-to-end PDF generation pipeline, successfully merged into the main branch (PR #362)."
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
      <Navbar email={d.personal.email} />
      <HeroSection data={d.personal} />
      <ExperienceSection experience={d.experience} education={d.education} />
      <DeepThinkSection onRevealProjects={() => setShowProjects(true)} />
      {showProjects && <SelectedWorks projects={d.projects} />}
      <SkillsSection skills={d.skills} />
      <FooterSection data={d.personal} />
    </div>
  );
}
