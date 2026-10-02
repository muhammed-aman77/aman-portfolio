/**
 * AMAN.SYS — Master Portfolio Data
 * Central Source of Truth for Muhammed Aman Shaminas
 *
 * STRICT FACTUAL ACCURACY:
 * - Exactly 5 confirmed projects (AI-Based Blood Sugar, Machine Health Monitoring, EV Battery Safety, RF Row-Tracking Robot, DailyDine)
 * - Strictly confirmed, factually verified projects only
 */

export const personalInfo = {
  name: "Muhammed Aman Shaminas",
  preferredName: "Aman",
  wordmark: "AMAN.",
  sysId: "AMAN.SYS // WORKSPACE",
  discipline: "Artificial Intelligence & Machine Learning",
  currentRole: "3rd-Year B.E. AI & ML Student",
  institution: "Srinivas Institute of Technology",
  location: "Kannur, Kerala, India",
  coordinates: "11.8745° N, 75.3704° E",
  statusBadge: "SYSTEM ONLINE",
  availabilityNotice: "Available for Internships & Engineering Collaborations",
  tagline: "Building practical intelligent systems across software, computer vision, embedded systems and applied AI.",
  bio: {
    lead: "I am a 3rd-year Artificial Intelligence & Machine Learning engineering student at Srinivas Institute of Technology, building at the convergence of algorithmic intelligence, real-world sensing, and clean software architecture.",
    paragraphs: [
      "My work is grounded in practical systems engineering rather than isolated theory. I focus on developing functional prototypes that bridge the physical and computational realms—from non-invasive computer vision pipelines and sensor-based machine health telemetry to autonomous RF-sensing robotics and structured backend APIs.",
      "I prioritize clean codebase structure, measurable engineering constraints, and thoughtful hardware-software co-design. When tackling technical challenges, I value methodical problem decomposition, modularity, and reproducible results."
    ]
  },
  contact: {
    headline: "Let's build something useful.",
    subtext: "Open to discussions on AI/ML internships, embedded systems engineering, and collaborative technical projects.",
    email: "Amanshamnas2@gmail.com",
    github: "https://github.com/muhammed-aman77",
    linkedin: "https://linkedin.com/in/muhammed-aman-809973383",
    resumeStatus: "Resume — Coming Soon (PDF Ready)"
  }
};

export const projects = [
  {
    id: "blood-sugar-prediction",
    number: "01",
    title: "AI-Based High Blood Sugar Prediction from Eye Images",
    shortTitle: "Eye Image Blood Sugar Prediction",
    category: "AI & Computer Vision",
    domainTag: "VISION / AI",
    status: "Academic Research Prototype",
    summary: "A computer vision and deep learning pipeline analyzing ocular images for physiological biomarkers associated with elevated blood glucose levels, utilizing CLAHE preprocessing and MobileNetV2 feature extraction.",
    technologies: ["Python", "OpenCV", "MobileNetV2", "CLAHE", "Flask"],
    overview: "This project explores non-invasive screening methodologies by examining high-resolution ocular images. By identifying retinal and conjunctival microvascular patterns linked to glycemic variability, the system explores automated visual assessment without invasive finger pricks.",
    theProblem: "Traditional blood glucose monitoring depends on invasive capillary blood draws (finger-prick lancets) or continuous subcutaneous sensor implants. These procedures present discomfort, ongoing disposable costs, and barriers for frequent screening in remote clinics.",
    approach: "The image pipeline applies Contrast Limited Adaptive Histogram Equalization (CLAHE) to amplify subtle microvascular contours and eliminate uneven illumination artifacts across eye images. The enhanced representations are fed into a MobileNetV2 convolutional backbone for high-dimensional feature extraction. A lightweight Flask microservice handles local model inference.",
    myContribution: "Designed and implemented the end-to-end Python image preprocessing workflow with OpenCV and CLAHE; structured the MobileNetV2 feature extraction pipeline; and encapsulated the model inside a local Flask inference service for rapid test evaluation.",
    currentStatus: "Academic project & computer vision pipeline evaluated on held-out test datasets. (Exploratory screening prototype; not a clinically certified medical device).",
    repositoryStatus: "GitHub — Coming Soon",
    schematicType: "vision-pipeline",
    highlights: [
      { label: "Preprocessing", val: "CLAHE Contrast Normalization" },
      { label: "Backbone", val: "MobileNetV2 Feature Extractor" },
      { label: "Serving", val: "Flask Local Microservice" },
      { label: "Domain", val: "Ocular Biomarker Detection" }
    ]
  },
  {
    id: "machine-health-monitoring",
    number: "02",
    title: "Smart Industrial Machine Health Monitoring System",
    shortTitle: "Industrial Machine Health Monitoring",
    category: "Embedded Systems & IoT",
    domainTag: "EMBEDDED / TELEMETRY",
    status: "Hardware Sensor Prototype",
    summary: "An integrated embedded telemetry rig centered on an ESP32 microcontroller, continuously gathering vibrational, thermal, and acoustic signals from rotating machinery to detect abnormal operating states.",
    technologies: ["ESP32", "ADXL345", "DS18B20", "MAX9814", "IoT", "C/C++"],
    overview: "Industrial motors and rotating machinery experience mechanical degradation from misalignment, bearing wear, and thermal stress. This project implements a dedicated sensor telemetry node capturing three critical physical axes—vibration, temperature, and acoustic frequency—for localized health tracking.",
    theProblem: "Unplanned industrial machinery downtime results in catastrophic production losses and severe safety risks. Traditional maintenance schedules rely either on manual periodic inspection or costly proprietary monitoring suites that are prohibitively complex for small-scale machinery.",
    approach: "Designed a multi-sensor embedded hardware rig orchestrated by an ESP32. An ADXL345 digital 3-axis accelerometer captures high-frequency mechanical vibrations; a DS18B20 waterproof digital sensor tracks casing thermal gradients; and a MAX9814 microphone with automatic gain control monitors abnormal acoustic emissions. Firmware performs continuous bus sampling and telemetry formatting.",
    myContribution: "Configured and calibrated the multi-sensor hardware array over I2C and 1-Wire buses; authored the ESP32 firmware for multi-channel data acquisition; and formatted serial telemetry output for machine condition tracking.",
    currentStatus: "Functional physical hardware sensor rig for machinery condition monitoring. (Operates on direct sensor telemetry and calibrated threshold logic; not running a trained TinyML model).",
    repositoryStatus: "GitHub — Coming Soon",
    schematicType: "sensor-telemetry",
    highlights: [
      { label: "Controller", val: "ESP32 Dual-Core SoC" },
      { label: "Vibration Sensing", val: "ADXL345 3-Axis Digital Accelerometer" },
      { label: "Thermal Sensing", val: "DS18B20 1-Wire Temperature Probe" },
      { label: "Acoustic Sensing", val: "MAX9814 Mic with Auto Gain Control" }
    ]
  },
  {
    id: "ev-fire-battery-safety",
    number: "03",
    title: "Smart Fire Detection & Safety System for EV Vehicles",
    shortTitle: "EV Battery Fire & Safety System",
    category: "Automotive Safety & Sensor Systems",
    domainTag: "SAFETY / AUTOMOTIVE",
    status: "Proposed System & Research Prototype",
    summary: "A safety architecture and hardware prototype designed to detect early thermal runaway and electrical fault indicators in electric vehicle battery compartments, triggering relay power isolation, onboard alarms, and GSM owner alerts.",
    technologies: ["Arduino UNO", "DS18B20", "ACS712", "SIM800L GSM", "Relay Module", "LCD"],
    overview: "Formulated through an extensive analysis of 10 research papers and patents regarding Li-ion thermal runaway mechanisms. The system addresses gaps in contemporary EV battery safety by coupling real-time multi-point thermal and current sensing with immediate physical power isolation and remote cellular alert dispatch.",
    theProblem: "Lithium-ion cells within electric vehicle traction packs are susceptible to rapid thermal runaway induced by cell defects, overcurrent, or overheating. Without sub-second threshold detection and immediate electrical isolation, localized heating can trigger catastrophic pack-level fire propagation.",
    approach: "The proposed architecture monitors critical battery parameters using distributed DS18B20 temperature probes and an ACS712 current sensor. When abnormal thermal or current thresholds are breached, an Arduino UNO executes automated relay cut-off commands to isolate battery power, triggers localized audiovisual alarms (buzzer, warning LEDs, LCD), and transmits emergency SMS notifications via a SIM800L GSM modem.",
    myContribution: "Researched and synthesized safety methodologies from 10 academic papers and patent disclosures; architected the proposed multi-sensor safety pipeline; and developed the Arduino-based prototype circuit with automated relay isolation logic and GSM alert routines.",
    currentStatus: "Proposed safety system architecture and academic hardware prototype. (Developed and tested in a benchtop prototyping environment; not deployed or tested in production electric vehicles).",
    repositoryStatus: "GitHub — Coming Soon",
    schematicType: "ev-safety",
    highlights: [
      { label: "Research Base", val: "10 Research Papers & Patents Analyzed" },
      { label: "Current Monitoring", val: "ACS712 Hall-Effect Sensor" },
      { label: "Power Isolation", val: "Automated High-Current Relay Cutoff" },
      { label: "Remote Telemetry", val: "SIM800L GSM Emergency Cellular Dispatch" }
    ]
  },
  {
    id: "rf-activity-robot",
    number: "04",
    title: "STM32-Based Mobile Phone RF Activity Detection and Row-Tracking Robot",
    shortTitle: "STM32 RF Detection & Row-Tracking Robot",
    category: "Embedded Systems / Robotics / RF Sensing",
    domainTag: "ROBOTICS / RF",
    status: "Prototype / Academic Robotics Project",
    summary: "An autonomous 2WD mobile classroom monitoring robot that navigates along defined seating rows while measuring sustained radio frequency energy to identify zones of elevated mobile phone activity.",
    technologies: ["STM32F103C8T6", "AD8318 RF Detector", "TB6612FNG", "TCRT5000", "OLED SSD1306", "C / Embedded"],
    overview: "In examination halls and secured academic halls, detecting active mobile device usage is traditionally hindered by static detectors that cannot isolate location. This system introduces an autonomous mobile robot that traverses defined row pathways, continuously logging ambient RF power to flag active wireless transmission zones.",
    theProblem: "Fixed RF detectors in large halls suffer from path-loss attenuation and cannot pinpoint which row or aisle an active wireless signal originates from. Manual inspection is intrusive and inconsistent, creating a need for automated, localized RF activity mapping.",
    approach: "Constructed on a 2WD differential-drive robotic chassis with BO motors and a TB6612FNG dual motor driver. Autonomous row traversal is guided by TCRT5000 infrared reflectance sensors. Ambient RF signals are captured via a wideband SMA antenna (700–2700 MHz) fed into an AD8318 logarithmic RF detector (1 MHz–8 GHz). The analog voltage output is sampled by the 12-bit ADC of an STM32F103C8T6 (Blue Pill), which performs baseline calibration, noise filtering, and threshold analysis. Detections are logged by row on an OLED SSD1306 display with buzzer/LED alerts.",
    myContribution: "Wrote the embedded C firmware for the STM32F103C8T6 microcontroller; implemented TCRT5000 line-tracking differential steering with TB6612FNG; calibrated the AD8318 logarithmic RF detector output; and structured the real-time row-mapping telemetry and OLED display interface.",
    currentStatus: "Academic robotics prototype designed to detect elevated RF energy by classroom row. (Identifies elevated RF field intensity by area; does NOT decode cellular/Wi-Fi/Bluetooth communications, intercept calls, or identify specific individuals/phones).",
    repositoryStatus: "GitHub — Coming Soon",
    schematicType: "robotics-rf",
    highlights: [
      { label: "Controller", val: "STM32F103C8T6 ARM Cortex-M3 (Blue Pill)" },
      { label: "RF Detection", val: "AD8318 Logarithmic Detector (1 MHz–8 GHz)" },
      { label: "Navigation", val: "TCRT5000 IR Reflectance Array & TB6612FNG" },
      { label: "Display", val: "OLED SSD1306 128×64 I2C Graphic Display" }
    ]
  },
  {
    id: "dailydine",
    number: "05",
    title: "DailyDine",
    shortTitle: "DailyDine REST API",
    category: "Backend Architecture & REST APIs",
    domainTag: "SOFTWARE / BACKEND",
    status: "Backend Architecture / Project",
    summary: "A robust, structured backend REST API service built with Django REST Framework to manage restaurant operations, dynamic digital menu catalogs, table availability, and customer order processing.",
    technologies: ["Django REST Framework", "Python", "REST APIs", "Relational Database"],
    overview: "DailyDine provides the centralized business logic and API service layer for digital restaurant management. It delivers consistent, secure endpoints enabling front-end interfaces to query menu items, track table allocations, and submit dining orders without state conflicts.",
    theProblem: "Hospitality services require backend APIs that ensure strict schema validation, reliable order state persistence, and clean separation between business logic, transactional database tables, and customer-facing interfaces.",
    approach: "Designed a clean, normalized relational database architecture in Django. Built RESTful API endpoints utilizing Django REST Framework model viewsets, custom serializers, field-level validators, and pagination. Endpoints support structured CRUD operations for culinary items, pricing categories, dining orders, and table availability status.",
    myContribution: "Architected the relational database schema; implemented serializers and viewsets using Django REST Framework; and designed and validated REST API endpoints for menu catalogs and ordering transactions.",
    currentStatus: "Functional backend REST API service architecture.",
    repositoryStatus: "GitHub — Coming Soon",
    schematicType: "backend-api",
    highlights: [
      { label: "Framework", val: "Django REST Framework (DRF)" },
      { label: "Language", val: "Python 3.x" },
      { label: "Architecture", val: "RESTful Service with Model Viewsets" },
      { label: "Data Integrity", val: "Relational Normalization & Serializers" }
    ]
  }
];

export const skillsData = [
  {
    category: "Programming",
    code: "LANG",
    description: "Foundational and systems languages for software, algorithms, and hardware firmware.",
    skills: ["Python", "C", "Java", "HTML"],
    relatedProjects: ["blood-sugar-prediction", "dailydine", "rf-activity-robot", "machine-health-monitoring"]
  },
  {
    category: "AI / ML",
    code: "INTELLIGENCE",
    description: "Deep learning models, computer vision pipelines, and mathematical feature extractors.",
    skills: ["Machine Learning", "Computer Vision", "OpenCV", "TensorFlow", "YOLO", "MobileNetV2"],
    relatedProjects: ["blood-sugar-prediction"]
  },
  {
    category: "Development",
    code: "SOFTWARE",
    description: "Backend web frameworks, service architectures, and collaborative version control.",
    skills: ["Flask", "Django REST Framework", "Git", "GitHub"],
    relatedProjects: ["dailydine", "blood-sugar-prediction"]
  },
  {
    category: "IoT / Embedded",
    code: "HARDWARE",
    description: "Microcontroller platforms, real-time bus protocols, and physical sensor networks.",
    skills: ["ESP32", "STM32", "Sensors"],
    relatedProjects: ["machine-health-monitoring", "rf-activity-robot", "ev-fire-battery-safety"]
  },
  {
    category: "Other",
    code: "SYSTEMS",
    description: "Decentralized storage, analytical modeling, and smart contract protocols.",
    skills: ["Solidity", "Blockchain", "IPFS", "Excel"],
    relatedProjects: []
  }
];

export const education = {
  degree: "B.E. — Artificial Intelligence & Machine Learning",
  institution: "Srinivas Institute of Technology",
  level: "3rd-Year Undergraduate Student",
  focus: "Core emphasis on neural networks, computer vision, embedded systems, linear algebra, data structures, and algorithmic systems engineering.",
  notes: "Coursework and laboratory projects bridging machine learning theory with physical microcontrollers and software services."
};

export const labExperiments = [
  {
    id: "exp-01",
    title: "AD8318 Logarithmic RF Response Calibration",
    category: "RF Instrumentation",
    description: "Characterizing analog voltage versus RF power response curve across 700 MHz–2.4 GHz bands on STM32 ADC channels to establish ambient noise thresholds.",
    status: "Benchtop Calibration Phase",
    tags: ["AD8318", "STM32", "RF Sensing"]
  },
  {
    id: "exp-02",
    title: "CLAHE Hyperparameter Tuning on Retinal Vessels",
    category: "Computer Vision",
    description: "Analyzing contrast clip limits and grid tile sizes (4×4 vs 8×8) in OpenCV to maximize microvascular edge preservation while attenuating illumination noise.",
    status: "Algorithm Exploration",
    tags: ["OpenCV", "CLAHE", "Image Processing"]
  },
  {
    id: "exp-03",
    title: "ESP32 Multi-Sensor Bus Concurrency & Polling",
    category: "Embedded Telemetry",
    description: "Evaluating I2C bus latency and non-blocking 1-Wire thermal polling cycles to prevent vibrational sample drops from ADXL345 during motor spin-up.",
    status: "Firmware Optimization",
    tags: ["ESP32", "ADXL345", "DS18B20"]
  },
  {
    id: "exp-04",
    title: "Li-ion Thermal Runaway Hazard Mitigation Survey",
    category: "Safety Research",
    description: "Comparative synthesis of 10 research papers analyzing early warning indicators (gas venting, thermal ramp rates, overcurrent) for battery pack isolation.",
    status: "Research Documentation",
    tags: ["Li-ion Safety", "BMS", "Thermal Runaway"]
  }
];
