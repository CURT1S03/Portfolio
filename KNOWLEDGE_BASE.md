# Curtis Cao — Resume Knowledge Base

> **Purpose:** A structured reference for AI tools to tailor resumes to specific job descriptions. Contains all quantifiable experience, technical skills, project details, and keywords extracted from Curtis's portfolio.

---

## 1. Personal Information

| Field        | Value                                  |
| ------------ | -------------------------------------- |
| Name         | Curtis Cao                             |
| Title        | Computer Science Student & Software Engineer |
| Phone        | (401) 430-0384                         |
| Email        | curtiswencao@gmail.com                 |
| Location     | Atlanta, GA                            |
| LinkedIn     | https://linkedin.com/in/curtiscao/     |
| GitHub       | https://github.com/Cwcao              |
| Citizenship  | U.S. Citizen                           |

### Elevator Pitch
Computer Science student at Georgia Tech specializing in machine learning, full-stack architecture, and robotics software. Proven track record of engineering end-to-end systems—from deploying cloud-based NLP pipelines and LLM chatbots to building edge-deployed computer vision models for autonomous systems.

### Role Archetypes (use to match job titles)
- Backend Engineer
- ML Developer / Machine Learning Engineer
- Data Engineer
- Full-Stack Software Engineer
- Robotics Software Engineer
- DevOps / Infrastructure Engineer

---

## 2. Education

### Georgia Institute of Technology — M.S. in Computer Science
- **Dates:** Fall 2026 – Fall 2027
- **Location:** Atlanta, GA

### Georgia Institute of Technology — B.S. in Computer Science
- **Dates:** Fall 2023 – Spring 2026
- **Location:** Atlanta, GA
- **Relevant Coursework:** Data Structures & Algorithms, Object-Oriented Design, Machine Learning, Computer Vision, Probability & Statistics, Operating Systems

---

## 3. Technical Skills

### Programming Languages
C, C++, Java, JavaScript, Python, HTML, CSS

### Technologies & Frameworks
Power BI, Excel, SQL Developer, GitHub, Docker, Kubernetes, Oracle Database, Azure, FAISS, LangChain, Streamlit, REST APIs, FastAPI, CI/CD, InfluxDB, PyTorch

### Additional Skills Demonstrated in Projects (not explicitly listed but proven)
- React, Node.js, Vite (portfolio + EquipLog)
- NVIDIA Isaac Sim / Isaac Lab, NVIDIA Omniverse (robotics projects)
- ROS 2 (digital twin)
- YOLOv8, U-Net, MiDaS (computer vision)
- NVIDIA Jetson (edge deployment)
- Scikit-learn, Pandas (ML pipeline)
- Unity, C# (game dev)
- OpenCV (image processing)
- LaTeX, pdflatex (open source)
- Grafana (telemetry dashboards)
- Solcast API (solar irradiance data)
- Git LFS
- WebSocket (real-time metrics)
- GridSearchCV, Random Forest, Gradient Boosted Regression
- Reinforcement Learning, PPO (Proximal Policy Optimization)
- HubSpot, Freshdesk, QuickBooks API integrations
- Datadog (monitoring)
- GitHub Actions (CI/CD)

---

## 4. Work Experience

### R&D Intern — LSPediA
**Bloomfield Hills, MI | May 2025 – Aug 2025**

| Bullet | Keywords / Skills |
| ------ | ----------------- |
| Architected and deployed a **production-ready RAG chatbot** using LangChain, FAISS, and Azure OpenAI, enabling non-technical users to query a **5GB+ FDA compliance dataset**, abstracting complex SQL joins and reducing retrieval times from **hours to seconds**. | RAG, LangChain, FAISS, Azure OpenAI, NLP, SQL, FDA, compliance, chatbot |
| Engineered an **NLP data pipeline** using Python and OpenAI to perform entity extraction and normalization on **100,000+ unstructured recall records**. | NLP, entity extraction, data normalization, Python, OpenAI, data pipeline |
| Engineered and containerized **over 5 distinct Python microservices**, each exposing a RESTful API to automate data integration from HubSpot, Freshdesk, and QuickBooks. | Microservices, Docker, REST API, Python, HubSpot, Freshdesk, QuickBooks, containerization |
| Orchestrated **10+ automated ETL workflows** using Kubernetes CronJobs, leveraging Datadog monitoring for **99.9% uptime** for business-critical data synchronization. | ETL, Kubernetes, CronJobs, Datadog, monitoring, uptime, data synchronization |
| Developed and maintained a robust **CI/CD pipeline** using GitHub Actions for a containerized legacy process. | CI/CD, GitHub Actions, DevOps, containerization |

**Quantifiable Metrics:**
- 5GB+ dataset queried via RAG
- 100,000+ records processed via NLP pipeline
- 5+ microservices containerized
- 10+ ETL workflows automated
- 99.9% uptime achieved

---

### Data Subteam Member — Georgia Tech Solar Racing
**Atlanta, GA | 2025 – Present**

| Bullet | Keywords / Skills |
| ------ | ----------------- |
| Integrated real-time environmental data into energy forecasting models using the **Solcast API** to query solar irradiance (GHI) and temperature metrics at **30-minute intervals across 1,500+ mile routes**. | Solcast API, solar irradiance, energy forecasting, real-time data, GHI |
| Engineered an automated **geospatial data pipeline** using Python that converted KML route files into structured DataFrames, identifying critical race segments based on custom distance and **3.5% elevation thresholds**. | Geospatial, Python, KML, DataFrames, data pipeline, automation |
| Streamlined live race operations during the **Formula Sun Grand Prix** by configuring **real-time Grafana dashboards** to monitor incoming telemetry data, immediately alerting the chase car team to electric trips and State of Charge (SOC) anomalies. | Grafana, dashboards, telemetry, real-time monitoring, Formula Sun Grand Prix |
| Supported dynamic route planning and mock race strategy by analyzing track similarities, local speed limits, and elevation changes. | Race strategy, data analysis, route planning |

**Quantifiable Metrics:**
- 1,500+ mile routes analyzed
- 30-minute data query intervals
- 3.5% elevation threshold for segment identification

---

## 5. Projects

### Full-Stack RL Training Environment for Quadrupeds
**Apr 2026 | Categories: Robotics & Simulation, Machine Learning**
**Tech:** React, FastAPI, NVIDIA Isaac Sim, Reinforcement Learning, PPO
**Link:** https://github.com/CURT1S03/quadruped-drl-platform

- Developed a full-stack web platform for training quadruped robots using deep reinforcement learning, integrating NVIDIA Isaac Sim/Isaac Lab for GPU-accelerated physics simulation with real-time visualized training and metric dashboards.
- Developed a React/FastAPI platform to configure, launch, and monitor Isaac Sim RL training with live WebSocket metrics, incorporating a custom URDF/USD and terrain upload pipeline for user-defined assets.
- Trained quadruped locomotion policies using PPO with GPU-parallelized RL across up to **4,096 simultaneous environments**, tuning reward shaping, learning rate, and episode parameters to optimize gait stability over rough and obstacle-filled terrains.

**Key Metrics:** 4,096 parallel RL environments
**Buzzwords:** Deep RL, PPO, NVIDIA Isaac Sim, GPU-parallelized, physics simulation, URDF/USD, React, FastAPI, WebSocket

---

### EquipLog
**Mar 2026 | Category: Full-Stack Apps**
**Tech:** Mobile-First, QR Code, UX Design, Customer Discovery
**Link:** https://portfolio-21md.vercel.app/

- Directed product strategy via customer discovery interviews with shop floor mechanics, identifying critical workflow bottlenecks to inform the MVP.
- Designed a mobile-first application with integrated QR code scanning and large-text search, eliminating manual data entry for mechanics.
- Reduced issue-logging process to **under 30 seconds** per instance (**fewer than 3 screen taps**) with a glove-friendly UI.
- Implemented photo-attachment feature for visual context in the issue-logging pipeline.
- Reduced average issue logging time by **over 50%** during initial testing.

**Key Metrics:** 50%+ reduction in logging time, <30 seconds per issue, <3 taps
**Buzzwords:** Product strategy, customer discovery, mobile-first, QR code, UX design, MVP, operational efficiency, safety compliance

---

### Vision Augmented Race Strategy Engine
**2025 – Present | Category: Robotics & Simulation**
**Tech:** InfluxDB, NVIDIA Jetson, YOLOv8, U-Net, MiDaS

- Improved in-race lap prediction accuracy from **29% to 78%** by fusing real-time InfluxDB telemetry, Solcast solar irradiance forecasts, and onboard computer vision into a unified energy model across a **14 kWh battery budget**.
- Designed an edge CV pipeline on **NVIDIA Jetson Orin Nano** running U-Net cloud segmentation (sky-facing camera) and YOLOv8 nano object detection with MiDaS monocular depth estimation (forward-facing camera), publishing structured state vectors to InfluxDB at **2 Hz** over cellular backhaul.
- Integrated CV outputs into a physics-based speed optimizer: cloud cover fraction derates solar power model, lead vehicle distance caps 36 mph sweep, surface classification adjusts rolling resistance coefficient—reducing strategy decision latency from **minutes to sub-second**.
- Engineered live prediction model as a constrained energy-balance optimizer fusing Solcast forecasts with real-time camera-derived cloud cover.

**Key Metrics:** 29% → 78% prediction accuracy, 14 kWh battery, 2 Hz publish rate, sub-second decision latency
**Buzzwords:** Edge computing, computer vision, NVIDIA Jetson, YOLOv8, U-Net, MiDaS, monocular depth, InfluxDB, real-time telemetry, energy optimization, physics-based modeling

---

### Algae Bloom (HAB) Predictive Model
**Dec 2025 | Category: Machine Learning**
**Tech:** Python, Pandas, Scikit-learn
**Link:** https://github.com/CURT1S03/Algae-ML

- Engineered a Pandas pipeline to ingest, clean, and merge **5 years** of disparate time-series data; handled **15%+ missing values** via temporal interpolation; normalized features using MinMaxScaler.
- Engineered **10+ features** including 7-day rolling averages and lag variables to capture temporal dependencies. Trained and compared Random Forest and GBR models.
- Deployed GridSearchCV for hyperparameter tuning, improving predictive accuracy (RMSE) by **18% over baseline**. Identified dissolved oxygen and temperature as key drivers.

**Key Metrics:** 5 years of data, 15%+ missing values handled, 10+ features engineered, 18% RMSE improvement
**Buzzwords:** Time-series, Scikit-learn, Pandas, Random Forest, GBR, GridSearchCV, feature engineering, data mining, temporal interpolation

---

### Robotics Digital Twin Application
**Nov 2025 | Category: Robotics & Simulation**
**Tech:** NVIDIA Omniverse, Streamlit, FastAPI, ROS 2, Oracle DB

- Architected a full-stack digital twin framework using NVIDIA Omniverse to validate robotic planning algorithms.
- Developed RESTful API endpoints with FastAPI interfacing with a core ROS 2 pub/sub system.
- Engineered a data pipeline where ROS 2 nodes published real-time performance metrics persisted to Oracle Database.
- Created Streamlit dashboards to visualize historical experiment data.

**Buzzwords:** Digital twin, NVIDIA Omniverse, ROS 2, FastAPI, Oracle DB, robotics, real-time metrics, Streamlit

---

### Ascensio (3D Platformer Game)
**Feb 2025 | Category: Fun**
**Tech:** Unity, C#, Game Design, Git LFS, 3D
**Link:** https://github.com/CURT1S03/Ascensio

- Designed and implemented core gameplay mechanics (coin collection, interactive environmental elements, safe-point respawn) via modular C# scripts in Unity.
- Developed a responsive third-person camera anchor system with foundational character movement controls.
- Spearheaded level redesign integrating complex 3D assets and managing large binary files via Git LFS.

**Buzzwords:** Unity, C#, game design, 3D, modular scripting, Git LFS

---

### Maze Solver With Image Detection
**Nov 2023 | Category: Fun**
**Tech:** Python, OpenCV
**Link:** https://github.com/CURT1S03/MazeSolver

- Built automated maze-solving application using OpenCV to detect and visualize solution paths.
- Implemented multi-stage image processing pipeline: grayscale conversion, binary thresholding, contour detection, morphological transformations (dilation/erosion).
- Applied mathematical morphology to extract solutions without traditional graph-based pathfinding.
- Tested across multiple maze complexities (5×5 to 50×50).

**Buzzwords:** OpenCV, image processing, morphological operations, computer vision, Python

---

### Open Source Contributor — Career-Ops
**Apr 2026 | Category: Open Source**
**Tech:** Open Source, LaTeX, Node.js, pdflatex
**Link:** https://github.com/santifer/career-ops

- Contributed to Career-Ops, a trending open-source project with **36,000+ GitHub stars within 10 days** of launch.
- Engineered a LaTeX and Overleaf CV export feature, integrating pdflatex compilation into the app's core architecture.
- Resolved a major community request (Issue #47) with full end-to-end PDF generation pipeline, merged as PR #362.

**Key Metrics:** 36,000+ stars, merged PR into main
**Buzzwords:** Open source, LaTeX, pdflatex, Node.js, community contribution, PDF generation

---

## 6. Key Metrics Summary (for quick ATS/resume matching)

| Metric | Value |
| ------ | ----- |
| Production microservices built | 5+ |
| Records processed (NLP pipeline) | 100,000+ |
| Pipeline uptime | 99.9% |
| ETL workflows automated | 10+ |
| RAG dataset size | 5GB+ |
| Parallel RL environments | 4,096 |
| Lap prediction accuracy improvement | 29% → 78% |
| Edge CV publish rate | 2 Hz |
| Issue logging time reduction | 50%+ |
| ML RMSE improvement | 18% |
| Open source project stars contributed to | 36,000+ |
| Time-series data processed | 5 years |
| Features engineered (ML) | 10+ |
| Race route distance analyzed | 1,500+ miles |

---

## 7. Keyword Cloud (for ATS optimization)

**Languages:** Python, C, C++, Java, JavaScript, HTML, CSS, C#, SQL, LaTeX

**ML/AI:** Machine Learning, Deep Learning, Reinforcement Learning, PPO, NLP, RAG, LLM, Computer Vision, Object Detection, Semantic Segmentation, Monocular Depth Estimation, Feature Engineering, Hyperparameter Tuning, GridSearchCV, Random Forest, Gradient Boosted Regression, PyTorch, Scikit-learn, FAISS, LangChain, OpenAI, YOLOv8, U-Net, MiDaS

**Robotics/Simulation:** NVIDIA Isaac Sim, NVIDIA Omniverse, NVIDIA Jetson, ROS 2, URDF, USD, Digital Twin, Edge Computing, Physics Simulation, GPU-Accelerated

**Backend/Infrastructure:** FastAPI, REST APIs, Docker, Kubernetes, CI/CD, GitHub Actions, Microservices, ETL, CronJobs, Datadog, Azure, Oracle Database, InfluxDB, SQL

**Frontend/Full-Stack:** React, Streamlit, Vite, WebSocket, Mobile-First, QR Code, UX Design

**Data:** Pandas, Power BI, Excel, SQL Developer, Grafana, Time-Series, Data Pipeline, Geospatial, KML, Solcast API

**Methodologies:** Agile, Customer Discovery, Product Strategy, Open Source Contribution

---

## 8. Usage Instructions for AI Resume Tailoring

1. **Match keywords:** Cross-reference the job description's required/preferred skills against Section 7 (Keyword Cloud) and Section 3 (Technical Skills). Prioritize exact matches.
2. **Select relevant experience bullets:** Pull the most relevant bullets from Sections 4–5 that demonstrate the required skills. Prefer bullets with quantifiable metrics.
3. **Reorder projects by relevance:** Place the project most aligned with the target role first in the projects section.
4. **Adapt the title/summary:** Use the role archetypes in Section 1 as a starting point; blend with the job title from the posting.
5. **Quantify everything:** Use the metrics table in Section 6 to inject numbers into every bullet where possible.
6. **Category mapping for common roles:**
   - **Backend/SWE roles** → LSPediA experience, EquipLog, Digital Twin, Career-Ops
   - **ML/AI roles** → Quadruped RL, HAB Predictive Model, Vision Race Engine, LSPediA RAG chatbot
   - **Robotics roles** → Quadruped RL, Digital Twin, Vision Race Engine, Solar Racing
   - **Data Engineering roles** → LSPediA (ETL, pipelines), Solar Racing (geospatial, telemetry), HAB model
   - **DevOps/Infra roles** → LSPediA (Docker, K8s, CI/CD, Datadog), Digital Twin (ROS 2, FastAPI)
   - **Full-Stack roles** → EquipLog, Quadruped RL platform, Digital Twin, Career-Ops
