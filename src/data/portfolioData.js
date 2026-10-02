/**
 * AMAN.SYS — Master Portfolio Data
 * Central Source of Truth for Muhammed Aman Shaminas
 *
 * STRICT FACTUAL ACCURACY:
 * - Exactly 5 confirmed projects (AI-Based Blood Sugar, Machine Health Monitoring, EV Battery Safety, RF Row-Tracking Robot, DailyDine)
 * - Strictly confirmed, factually verified projects only
 */

export const personalInfo = {
  name: 'Muhammed Aman Shaminas',
  preferredName: 'Aman',
  wordmark: 'AMAN.',
  discipline: 'Artificial Intelligence & Machine Learning',
  currentRole: 'Final-year B.E. AI & ML student',
  institution: 'Srinivas Institute of Technology',
  tagline: 'Exploring the space between intelligent software and the physical world.',
  bio: {
    lead: 'I am an Artificial Intelligence & Machine Learning student interested in computer vision, software, embedded systems, and robotics.',
    paragraphs: []
  },
  contact: {
    headline: 'Let’s make something useful.',
    subtext: 'Reach out through the channels below.',
    email: 'Amanshamnas2@gmail.com',
    github: 'https://github.com/muhammed-aman77',
    linkedin: 'https://linkedin.com/in/muhammed-aman-809973383'
  }
};

export const projects = [
  {
    id: 'blood-sugar-prediction',
    number: '01',
    title: 'AI-Based High Blood Sugar Prediction from Eye Images',
    shortTitle: 'Eye Image Prediction',
    category: 'AI / Computer Vision',
    domainTag: 'AI / VISION',
    status: 'Academic project',
    summary: 'An academic AI and computer-vision project exploring high blood sugar prediction from eye images.',
    technologies: ['Python', 'OpenCV', 'MobileNetV2', 'CLAHE', 'Flask'],
    overview: 'This academic project explores high blood sugar prediction from eye images using a computer-vision approach.',
    purpose: 'Study an image-based approach to the project’s stated prediction task. This is not a diagnosis or a clinically validated medical tool.',
    approach: 'The confirmed technologies are Python, OpenCV, MobileNetV2, CLAHE, and Flask. No accuracy or clinical validation claim is made.',
    currentStatus: 'Academic AI/computer-vision project.',
    schematicType: 'vision-pipeline',
    highlights: [
      { label: 'Image processing', val: 'OpenCV · CLAHE' },
      { label: 'Model technology', val: 'MobileNetV2' },
      { label: 'Application technology', val: 'Flask' }
    ]
  },
  {
    id: 'machine-health-monitoring',
    number: '02',
    title: 'Smart Industrial Machine Health Monitoring System',
    shortTitle: 'Machine Health Monitoring',
    category: 'Embedded Systems',
    domainTag: 'EMBEDDED',
    status: 'Embedded prototype',
    summary: 'An embedded prototype that reads machine sensor data and classifies status using thresholds.',
    technologies: ['ESP32', 'ADXL345', 'DS18B20', 'MAX9814'],
    overview: 'The prototype uses sensor readings for machine-health monitoring.',
    purpose: 'Collect readings from vibration, temperature, and sound sensors for a machine-health monitoring prototype.',
    approach: 'An ESP32 works with the ADXL345, DS18B20, and MAX9814. The current implementation uses sensor readings and threshold-based classification, not a trained TinyML model.',
    currentStatus: 'Embedded machine-health monitoring prototype using threshold-based classification.',
    schematicType: 'sensor-telemetry',
    highlights: [
      { label: 'Controller', val: 'ESP32' },
      { label: 'Sensors', val: 'ADXL345 · DS18B20 · MAX9814' },
      { label: 'Classification', val: 'Threshold-based' }
    ]
  },
  {
    id: 'ev-fire-battery-safety',
    number: '03',
    title: 'Smart Fire Detection & Safety System for EV Vehicles',
    shortTitle: 'EV Fire Safety System',
    category: 'Proposed Safety System',
    domainTag: 'PROPOSED / SAFETY',
    status: 'Proposed academic system',
    summary: 'A proposed system concept for monitoring temperature and smoke around EV battery or electrical components.',
    technologies: [],
    overview: 'This academic project is a proposed system for early fire or overheating detection around EV battery and electrical components.',
    purpose: 'Monitor temperature and smoke around battery or electrical components, then provide an early warning of fire or overheating.',
    approach: 'The concept describes microcontroller/AI-based processing and a warning alarm. Automatic cutoff and GSM alerts are proposed features, not presented as implemented.',
    currentStatus: 'Proposed academic system. The cutoff and GSM alert are proposed features; implementation is not claimed.',
    schematicType: 'ev-safety',
    highlights: [
      { label: 'Monitoring concept', val: 'Temperature · Smoke' },
      { label: 'Warning concept', val: 'Alarm' },
      { label: 'Proposed features', val: 'Automatic cutoff · GSM alert' }
    ]
  },
  {
    id: 'rf-activity-robot',
    number: '04',
    title: 'STM32-Based Mobile Phone RF Activity Detection and Row-Tracking Robot',
    shortTitle: 'RF Row-Tracking Robot',
    category: 'Embedded Systems / Robotics',
    domainTag: 'ROBOTICS / RF',
    status: 'Academic prototype',
    summary: 'A mobile robot concept that tracks classroom rows and detects elevated, sustained RF activity by area.',
    technologies: ['STM32F103C8T6', 'AD8318', 'Wideband antenna', 'STM32 ADC', 'OLED SSD1306', 'TB6612FNG', 'TCRT5000', '2WD chassis'],
    overview: 'The academic prototype combines RF activity sensing with row/zone tracking on a mobile robot.',
    purpose: 'Detect elevated, sustained RF activity by row or area while the robot moves through classroom aisles.',
    approach: 'An antenna and AD8318 feed the STM32 ADC. Filtering, baseline calibration, and sustained-threshold detection support row/zone mapping; the system concept also includes an OLED, buzzer, LED, TB6612FNG, TCRT5000, and a 2WD chassis.',
    currentStatus: 'Academic/prototype concept for elevated RF activity by area. It does not identify people, decode or intercept communication, or guarantee an exact phone location.',
    schematicType: 'robotics-rf',
    highlights: [
      { label: 'RF front end', val: 'Wideband antenna · AD8318' },
      { label: 'Processing', val: 'STM32 ADC · filtering · baseline' },
      { label: 'Navigation', val: 'TCRT5000 · TB6612FNG · 2WD' },
      { label: 'Activity display', val: 'OLED · buzzer · LED' }
    ]
  },
  {
    id: 'dailydine',
    number: '05',
    title: 'DailyDine',
    shortTitle: 'DailyDine',
    category: 'Software',
    domainTag: 'SOFTWARE',
    status: 'Project',
    summary: 'A software project using Python and Django REST Framework.',
    technologies: ['Python', 'Django REST Framework'],
    overview: 'DailyDine is a project associated with Python and Django REST Framework.',
    purpose: 'Additional project details have not been provided.',
    approach: 'The confirmed technologies are Python and Django REST Framework.',
    currentStatus: 'Project details limited to the supplied name and technologies.',
    schematicType: 'backend-api',
    highlights: [
      { label: 'Language', val: 'Python' },
      { label: 'Framework', val: 'Django REST Framework' }
    ]
  }
];

export const skillsData = [
  {
    category: 'AI / Computer Vision',
    code: 'VISION',
    description: 'Technologies listed for the academic eye-image project.',
    skills: ['Python', 'OpenCV', 'MobileNetV2', 'CLAHE', 'Flask'],
    relatedProjects: ['blood-sugar-prediction']
  },
  {
    category: 'Embedded Monitoring',
    code: 'SENSORS',
    description: 'Hardware listed for the machine-health monitoring prototype.',
    skills: ['ESP32', 'ADXL345', 'DS18B20', 'MAX9814'],
    relatedProjects: ['machine-health-monitoring']
  },
  {
    category: 'Robotics / RF',
    code: 'ROBOTICS',
    description: 'Hardware and concepts listed for the RF row-tracking robot.',
    skills: ['STM32F103C8T6', 'AD8318', 'TB6612FNG', 'TCRT5000', 'OLED SSD1306'],
    relatedProjects: ['rf-activity-robot']
  },
  {
    category: 'Backend',
    code: 'SOFTWARE',
    description: 'Technologies listed for DailyDine.',
    skills: ['Python', 'Django REST Framework'],
    relatedProjects: ['dailydine']
  }
];

export const education = {
  degree: 'B.E. — Artificial Intelligence & Machine Learning',
  institution: 'Srinivas Institute of Technology',
  level: 'Final-year student',
  focus: 'Artificial Intelligence & Machine Learning'
};

export const labExperiments = [];
