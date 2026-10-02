import React from 'react';
import { ArrowRight } from 'lucide-react';
import '../styles/projectDiagram.css';

const diagrams = {
  'vision-pipeline': {
    legend: 'ACADEMIC IMAGE PIPELINE',
    steps: [
      ['Eye image', 'Input'],
      ['OpenCV', 'Preprocessing'],
      ['Green channel', 'Extraction'],
      ['CLAHE', 'Contrast processing'],
      ['MobileNetV2', 'Model technology'],
      ['Prediction task', 'Academic concept'],
      ['Flask', 'Application technology']
    ]
  },
  'sensor-telemetry': {
    legend: 'THRESHOLD-BASED CLASSIFICATION',
    steps: [
      ['ADXL345', 'Vibration'],
      ['DS18B20', 'Temperature'],
      ['MAX9814', 'Sound'],
      ['ESP32', 'Readings'],
      ['Thresholds', 'Classification'],
      ['Status', 'Output']
    ]
  },
  'ev-safety': {
    legend: 'PROPOSED SYSTEM CONCEPT',
    steps: [
      ['Temperature', 'Monitoring concept'],
      ['Smoke', 'Monitoring concept'],
      ['Processing', 'Microcontroller / AI concept'],
      ['Early warning', 'Fire / overheating'],
      ['Alarm', 'Warning concept'],
      ['Cutoff · GSM', 'Proposed features']
    ]
  },
  'robotics-rf': {
    legend: 'RF ACTIVITY / ROW-ZONE CONCEPT',
    steps: [
      ['Wideband antenna', 'RF input'],
      ['AD8318', 'RF detector'],
      ['STM32 ADC', 'Sampling'],
      ['Filter · baseline', 'Calibration'],
      ['Sustained threshold', 'Activity detection'],
      ['Row / zone', 'Area mapping'],
      ['OLED · buzzer · LED', 'Local indication']
    ]
  },
  'backend-api': {
    legend: 'CONFIRMED PROJECT TECHNOLOGIES',
    steps: [
      ['DailyDine', 'Project'],
      ['Python', 'Language'],
      ['Django REST Framework', 'Framework']
    ]
  }
};

export default function ProjectDiagram({ type, title }) {
  const diagram = diagrams[type] || diagrams['backend-api'];

  return (
    <figure className="project-diagram">
      <figcaption className="diagram-topline"><span>{title} / {diagram.legend}</span><span>{String(diagram.steps.length).padStart(2, '0')} STAGES</span></figcaption>
      <ol className="diagram-flow" aria-label={`${diagram.legend} stages`}>
        {diagram.steps.map(([label, detail], index) => (
          <React.Fragment key={`${label}-${index}`}>
            <li className={`diagram-step ${type === 'ev-safety' && index > 3 ? 'is-proposed' : ''}`}>
              <span className="diagram-index">{String(index + 1).padStart(2, '0')}</span>
              <strong>{label}</strong>
              <span>{detail}</span>
              {type === 'ev-safety' && index > 3 && <small>PROPOSED</small>}
            </li>
            {index < diagram.steps.length - 1 && <ArrowRight className="diagram-arrow" size={15} aria-hidden="true" />}
          </React.Fragment>
        ))}
      </ol>
      <figcaption className="diagram-footnote">Conceptual visualization · no measured results shown</figcaption>
    </figure>
  );
}