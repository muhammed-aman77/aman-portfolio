import React from 'react';

export default function ProjectSchematic({ type, title }) {
  if (type === 'vision-pipeline') {
    return (
      <div className="schematic-wrapper" aria-label="Computer Vision Pipeline Schematic">
        <svg viewBox="0 0 700 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="schematic-svg">
          {/* Subtle Grid Background */}
          <defs>
            <pattern id="grid-pattern-1" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="700" height="320" fill="url(#grid-pattern-1)" />

          {/* Pipeline Stage 01: Image Input & CLAHE Enhancement */}
          <rect x="40" y="50" width="160" height="220" rx="8" fill="#0d1017" stroke="rgba(0, 229, 255, 0.3)" strokeWidth="1.5" />
          <text x="55" y="80" fill="#00e5ff" fontFamily="var(--font-mono)" fontSize="11" letterSpacing="0.08em">// STAGE 01: INPUT</text>
          <text x="55" y="105" fill="#f5f6f8" fontFamily="var(--font-display)" fontSize="13" fontWeight="600">Ocular Image Array</text>
          
          {/* Ocular Reticle Focal Graphic */}
          <circle cx="120" cy="170" r="45" stroke="rgba(0, 229, 255, 0.4)" strokeWidth="1.5" strokeDasharray="4 4" />
          <circle cx="120" cy="170" r="25" stroke="#00e5ff" strokeWidth="1.5" />
          <line x1="120" y1="115" x2="120" y2="225" stroke="rgba(0, 229, 255, 0.2)" strokeWidth="1" />
          <line x1="65" y1="170" x2="175" y2="170" stroke="rgba(0, 229, 255, 0.2)" strokeWidth="1" />
          <text x="120" y="245" fill="#9da3b0" fontFamily="var(--font-mono)" fontSize="10" textAnchor="middle">CLAHE Equalization</text>

          {/* Connection Vector 1 */}
          <path d="M 200 160 L 260 160" stroke="#00e5ff" strokeWidth="1.5" strokeDasharray="3 3" />
          <polygon points="260,160 252,156 252,164" fill="#00e5ff" />

          {/* Pipeline Stage 02: MobileNetV2 Convolutional Backbone */}
          <rect x="270" y="50" width="180" height="220" rx="8" fill="#0d1017" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1.5" />
          <text x="285" y="80" fill="#9da3b0" fontFamily="var(--font-mono)" fontSize="11" letterSpacing="0.08em">// STAGE 02: CNN</text>
          <text x="285" y="105" fill="#f5f6f8" fontFamily="var(--font-display)" fontSize="13" fontWeight="600">MobileNetV2 Backbone</text>
          
          {/* Depthwise Separable Conv Blocks */}
          <rect x="290" y="130" width="140" height="22" rx="4" fill="#141923" stroke="rgba(255, 255, 255, 0.08)" />
          <text x="360" y="145" fill="#f5f6f8" fontFamily="var(--font-mono)" fontSize="9" textAnchor="middle">Depthwise Conv (3×3)</text>

          <rect x="290" y="160" width="140" height="22" rx="4" fill="#141923" stroke="rgba(0, 229, 255, 0.25)" />
          <text x="360" y="175" fill="#00e5ff" fontFamily="var(--font-mono)" fontSize="9" textAnchor="middle">Pointwise Bottleneck (1×1)</text>

          <rect x="290" y="190" width="140" height="22" rx="4" fill="#141923" stroke="rgba(255, 255, 255, 0.08)" />
          <text x="360" y="205" fill="#f5f6f8" fontFamily="var(--font-mono)" fontSize="9" textAnchor="middle">Global Avg Pooling</text>

          <text x="360" y="245" fill="#9da3b0" fontFamily="var(--font-mono)" fontSize="10" textAnchor="middle">Feature Vector Space</text>

          {/* Connection Vector 2 */}
          <path d="M 450 160 L 500 160" stroke="#00e5ff" strokeWidth="1.5" strokeDasharray="3 3" />
          <polygon points="500,160 492,156 492,164" fill="#00e5ff" />

          {/* Pipeline Stage 03: Flask Inference Service */}
          <rect x="510" y="50" width="150" height="220" rx="8" fill="#0d1017" stroke="rgba(16, 185, 129, 0.35)" strokeWidth="1.5" />
          <text x="525" y="80" fill="#10b981" fontFamily="var(--font-mono)" fontSize="11" letterSpacing="0.08em">// STAGE 03: SERVING</text>
          <text x="525" y="105" fill="#f5f6f8" fontFamily="var(--font-display)" fontSize="13" fontWeight="600">Flask Service</text>

          {/* Endpoint Output Mock */}
          <rect x="525" y="135" width="120" height="60" rx="4" fill="#111622" stroke="rgba(16, 185, 129, 0.2)" />
          <text x="535" y="155" fill="#10b981" fontFamily="var(--font-mono)" fontSize="9">POST /predict_sugar</text>
          <text x="535" y="172" fill="#9da3b0" fontFamily="var(--font-mono)" fontSize="8">status: 200 OK</text>
          <text x="535" y="185" fill="#00e5ff" fontFamily="var(--font-mono)" fontSize="8">output: index_class</text>

          <text x="585" y="245" fill="#9da3b0" fontFamily="var(--font-mono)" fontSize="10" textAnchor="middle">Local Model Inference</text>
        </svg>
      </div>
    );
  }

  if (type === 'sensor-telemetry') {
    return (
      <div className="schematic-wrapper" aria-label="Machine Health Monitoring Telemetry Schematic">
        <svg viewBox="0 0 700 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="schematic-svg">
          <defs>
            <pattern id="grid-pattern-2" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="700" height="320" fill="url(#grid-pattern-2)" />

          {/* Sensor Transducers Column */}
          {/* Sensor 1: ADXL345 */}
          <rect x="40" y="40" width="170" height="65" rx="6" fill="#0e1118" stroke="rgba(0, 229, 255, 0.35)" strokeWidth="1.5" />
          <text x="55" y="65" fill="#00e5ff" fontFamily="var(--font-mono)" fontSize="10">// VIBRATION [I2C]</text>
          <text x="55" y="85" fill="#f5f6f8" fontFamily="var(--font-display)" fontSize="12" fontWeight="600">ADXL345 3-Axis Accel</text>

          {/* Sensor 2: DS18B20 */}
          <rect x="40" y="125" width="170" height="65" rx="6" fill="#0e1118" stroke="rgba(245, 158, 11, 0.35)" strokeWidth="1.5" />
          <text x="55" y="150" fill="#f59e0b" fontFamily="var(--font-mono)" fontSize="10">// THERMAL [1-WIRE]</text>
          <text x="55" y="170" fill="#f5f6f8" fontFamily="var(--font-display)" fontSize="12" fontWeight="600">DS18B20 Digital Probe</text>

          {/* Sensor 3: MAX9814 */}
          <rect x="40" y="210" width="170" height="65" rx="6" fill="#0e1118" stroke="rgba(16, 185, 129, 0.35)" strokeWidth="1.5" />
          <text x="55" y="235" fill="#10b981" fontFamily="var(--font-mono)" fontSize="10">// ACOUSTIC [ANALOG/ADC]</text>
          <text x="55" y="255" fill="#f5f6f8" fontFamily="var(--font-display)" fontSize="12" fontWeight="600">MAX9814 Mic with AGC</text>

          {/* Bus Wiring Traces to Microcontroller */}
          <path d="M 210 72 L 290 72 L 320 130" stroke="#00e5ff" strokeWidth="1.5" fill="none" />
          <path d="M 210 157 L 320 157" stroke="#f59e0b" strokeWidth="1.5" fill="none" />
          <path d="M 210 242 L 290 242 L 320 185" stroke="#10b981" strokeWidth="1.5" fill="none" />

          {/* Processing Hub: ESP32 */}
          <rect x="320" y="80" width="190" height="155" rx="8" fill="#0f1420" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1.5" />
          <text x="340" y="110" fill="#00e5ff" fontFamily="var(--font-mono)" fontSize="11" letterSpacing="0.08em">// CENTRAL HUB</text>
          <text x="340" y="135" fill="#f5f6f8" fontFamily="var(--font-display)" fontSize="15" fontWeight="700">ESP32 Dual-Core</text>
          
          <rect x="340" y="150" width="150" height="24" rx="4" fill="#171d2b" />
          <text x="415" y="166" fill="#9da3b0" fontFamily="var(--font-mono)" fontSize="9" textAnchor="middle">Continuous I2C / 1-Wire Polling</text>

          <rect x="340" y="180" width="150" height="24" rx="4" fill="#171d2b" />
          <text x="415" y="196" fill="#00e5ff" fontFamily="var(--font-mono)" fontSize="9" textAnchor="middle">Threshold Calibration Logic</text>

          {/* Connection to Serial Out */}
          <path d="M 510 157 L 560 157" stroke="#00e5ff" strokeWidth="1.5" strokeDasharray="3 3" />
          <polygon points="560,157 552,153 552,161" fill="#00e5ff" />

          {/* Telemetry Stream Output */}
          <rect x="560" y="95" width="110" height="125" rx="6" fill="#0a0d14" stroke="rgba(0, 229, 255, 0.3)" />
          <text x="575" y="125" fill="#9da3b0" fontFamily="var(--font-mono)" fontSize="9">// TELEMETRY</text>
          <text x="575" y="145" fill="#f5f6f8" fontFamily="var(--font-mono)" fontSize="10">X/Y/Z Accel</text>
          <text x="575" y="165" fill="#f59e0b" fontFamily="var(--font-mono)" fontSize="10">Temp (°C)</text>
          <text x="575" y="185" fill="#10b981" fontFamily="var(--font-mono)" fontSize="10">Sound Amp</text>
          <text x="575" y="205" fill="#00e5ff" fontFamily="var(--font-mono)" fontSize="8">Serial 115200</text>
        </svg>
      </div>
    );
  }

  if (type === 'ev-safety') {
    return (
      <div className="schematic-wrapper" aria-label="EV Battery Fire & Safety Schematic">
        <svg viewBox="0 0 700 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="schematic-svg">
          <defs>
            <pattern id="grid-pattern-3" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="700" height="320" fill="url(#grid-pattern-3)" />

          {/* Battery Pack Sensor Node */}
          <rect x="40" y="60" width="160" height="195" rx="8" fill="#11151e" stroke="rgba(239, 68, 68, 0.35)" strokeWidth="1.5" />
          <text x="55" y="90" fill="#ef4444" fontFamily="var(--font-mono)" fontSize="10">// BATTERY PACK SENSING</text>
          <text x="55" y="115" fill="#f5f6f8" fontFamily="var(--font-display)" fontSize="13" fontWeight="600">Li-ion Cells &amp; Bus</text>

          <rect x="55" y="135" width="130" height="30" rx="4" fill="#191f2c" stroke="rgba(255, 255, 255, 0.08)" />
          <text x="65" y="154" fill="#9da3b0" fontFamily="var(--font-mono)" fontSize="9">DS18B20 Temp Array</text>

          <rect x="55" y="175" width="130" height="30" rx="4" fill="#191f2c" stroke="rgba(255, 255, 255, 0.08)" />
          <text x="65" y="194" fill="#9da3b0" fontFamily="var(--font-mono)" fontSize="9">ACS712 Current Shunt</text>

          <text x="120" y="235" fill="#ef4444" fontFamily="var(--font-mono)" fontSize="9" textAnchor="middle">Thermal Runaway Guard</text>

          {/* Connection to Arduino */}
          <path d="M 200 157 L 270 157" stroke="#00e5ff" strokeWidth="1.5" />
          <polygon points="270,157 262,153 262,161" fill="#00e5ff" />

          {/* Arduino Safety Logic */}
          <rect x="270" y="60" width="180" height="195" rx="8" fill="#0f1422" stroke="rgba(0, 229, 255, 0.3)" strokeWidth="1.5" />
          <text x="285" y="90" fill="#00e5ff" fontFamily="var(--font-mono)" fontSize="10">// CORE CONTROLLER</text>
          <text x="285" y="115" fill="#f5f6f8" fontFamily="var(--font-display)" fontSize="14" fontWeight="600">Arduino UNO Logic</text>

          <rect x="285" y="135" width="150" height="24" rx="4" fill="#171d2d" />
          <text x="360" y="151" fill="#f5f6f8" fontFamily="var(--font-mono)" fontSize="9" textAnchor="middle">Thermal Ramp Rate Monitor</text>

          <rect x="285" y="165" width="150" height="24" rx="4" fill="#171d2d" />
          <text x="360" y="181" fill="#ef4444" fontFamily="var(--font-mono)" fontSize="9" textAnchor="middle">Overcurrent Threshold Trigger</text>

          <text x="360" y="235" fill="#9da3b0" fontFamily="var(--font-mono)" fontSize="9" textAnchor="middle">Sub-second Logic Loop</text>

          {/* Dual Action Outputs */}
          {/* Action 1: High Current Relay Cutoff */}
          <path d="M 450 120 L 510 100" stroke="#ef4444" strokeWidth="1.5" />
          <rect x="510" y="60" width="150" height="85" rx="6" fill="#1a1215" stroke="rgba(239, 68, 68, 0.45)" />
          <text x="525" y="85" fill="#ef4444" fontFamily="var(--font-mono)" fontSize="9">// POWER ISOLATION</text>
          <text x="525" y="105" fill="#f5f6f8" fontFamily="var(--font-display)" fontSize="12" fontWeight="600">Relay Power Cutoff</text>
          <text x="525" y="125" fill="#9da3b0" fontFamily="var(--font-mono)" fontSize="8">Isolates Traction Pack</text>

          {/* Action 2: SIM800L GSM Alert */}
          <path d="M 450 195 L 510 215" stroke="#00e5ff" strokeWidth="1.5" />
          <rect x="510" y="170" width="150" height="85" rx="6" fill="#0d141e" stroke="rgba(0, 229, 255, 0.35)" />
          <text x="525" y="195" fill="#00e5ff" fontFamily="var(--font-mono)" fontSize="9">// EMERGENCY DISPATCH</text>
          <text x="525" y="215" fill="#f5f6f8" fontFamily="var(--font-display)" fontSize="12" fontWeight="600">SIM800L GSM Alert</text>
          <text x="525" y="235" fill="#9da3b0" fontFamily="var(--font-mono)" fontSize="8">SMS Alert to Vehicle Owner</text>
        </svg>
      </div>
    );
  }

  if (type === 'robotics-rf') {
    return (
      <div className="schematic-wrapper" aria-label="STM32 RF Activity Robot Schematic">
        <svg viewBox="0 0 700 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="schematic-svg">
          <defs>
            <pattern id="grid-pattern-4" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="700" height="320" fill="url(#grid-pattern-4)" />

          {/* RF Subsystem: SMA Antenna + AD8318 */}
          <rect x="40" y="50" width="180" height="220" rx="8" fill="#111624" stroke="rgba(0, 229, 255, 0.35)" strokeWidth="1.5" />
          <text x="55" y="80" fill="#00e5ff" fontFamily="var(--font-mono)" fontSize="10">// RF SENSING FRONTEND</text>
          <text x="55" y="105" fill="#f5f6f8" fontFamily="var(--font-display)" fontSize="13" fontWeight="600">AD8318 Log Detector</text>
          
          {/* Antenna Diagram */}
          <path d="M 130 120 L 130 150 M 115 120 L 130 135 L 145 120" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" />
          <text x="130" y="170" fill="#9da3b0" fontFamily="var(--font-mono)" fontSize="9" textAnchor="middle">Wideband Antenna</text>
          <text x="130" y="185" fill="#9da3b0" fontFamily="var(--font-mono)" fontSize="8" textAnchor="middle">700–2700 MHz Range</text>

          <rect x="55" y="205" width="150" height="35" rx="4" fill="#181f32" />
          <text x="130" y="222" fill="#00e5ff" fontFamily="var(--font-mono)" fontSize="9" textAnchor="middle">1 MHz–8 GHz Dynamic Range</text>
          <text x="130" y="234" fill="#9da3b0" fontFamily="var(--font-mono)" fontSize="8" textAnchor="middle">Logarithmic VOUT to ADC</text>

          {/* Connection to STM32 */}
          <path d="M 220 160 L 270 160" stroke="#00e5ff" strokeWidth="1.5" />
          <polygon points="270,160 262,156 262,164" fill="#00e5ff" />

          {/* Processing Hub: STM32F103C8T6 (Blue Pill) */}
          <rect x="270" y="50" width="190" height="220" rx="8" fill="#0f1422" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1.5" />
          <text x="285" y="80" fill="#10b981" fontFamily="var(--font-mono)" fontSize="10">// PROCESSING NODE</text>
          <text x="285" y="105" fill="#f5f6f8" fontFamily="var(--font-display)" fontSize="14" fontWeight="600">STM32 Blue Pill</text>

          <rect x="285" y="125" width="160" height="24" rx="4" fill="#182033" />
          <text x="365" y="141" fill="#f5f6f8" fontFamily="var(--font-mono)" fontSize="9" textAnchor="middle">12-Bit ADC Baseline Sampling</text>

          <rect x="285" y="155" width="160" height="24" rx="4" fill="#182033" />
          <text x="365" y="171" fill="#00e5ff" fontFamily="var(--font-mono)" fontSize="9" textAnchor="middle">Sustained Threshold Filter</text>

          <rect x="285" y="185" width="160" height="24" rx="4" fill="#182033" />
          <text x="365" y="201" fill="#10b981" fontFamily="var(--font-mono)" fontSize="9" textAnchor="middle">Differential 2WD Control</text>

          <text x="365" y="245" fill="#9da3b0" fontFamily="var(--font-mono)" fontSize="9" textAnchor="middle">ARM Cortex-M3 (72 MHz)</text>

          {/* Robotics Platform Output */}
          <path d="M 460 160 L 510 160" stroke="#00e5ff" strokeWidth="1.5" />
          <polygon points="510,160 502,156 502,164" fill="#00e5ff" />

          {/* Mobile Chassis Hub */}
          <rect x="510" y="50" width="150" height="220" rx="8" fill="#111624" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="1.5" />
          <text x="525" y="80" fill="#9da3b0" fontFamily="var(--font-mono)" fontSize="10">// CHASSIS &amp; DISPLAY</text>
          <text x="525" y="105" fill="#f5f6f8" fontFamily="var(--font-display)" fontSize="13" fontWeight="600">Row Navigation</text>

          <rect x="525" y="125" width="120" height="30" rx="4" fill="#182033" />
          <text x="585" y="144" fill="#9da3b0" fontFamily="var(--font-mono)" fontSize="8" textAnchor="middle">TB6612FNG Motor Driver</text>

          <rect x="525" y="165" width="120" height="30" rx="4" fill="#182033" />
          <text x="585" y="184" fill="#9da3b0" fontFamily="var(--font-mono)" fontSize="8" textAnchor="middle">TCRT5000 IR Line Sensor</text>

          <rect x="525" y="205" width="120" height="45" rx="4" fill="#090c12" stroke="rgba(0, 229, 255, 0.3)" />
          <text x="585" y="224" fill="#00e5ff" fontFamily="var(--font-mono)" fontSize="8" textAnchor="middle">OLED SSD1306 Display</text>
          <text x="585" y="240" fill="#10b981" fontFamily="var(--font-mono)" fontSize="8" textAnchor="middle">ROW_ID + RF STATUS</text>
        </svg>
      </div>
    );
  }

  // Fallback / Project 05: DailyDine Backend Architecture
  return (
    <div className="schematic-wrapper" aria-label="Backend REST API Architecture Schematic">
      <svg viewBox="0 0 700 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="schematic-svg">
        <defs>
          <pattern id="grid-pattern-5" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="700" height="320" fill="url(#grid-pattern-5)" />

        {/* Client Request Layer */}
        <rect x="40" y="60" width="160" height="195" rx="8" fill="#10141f" stroke="rgba(0, 229, 255, 0.3)" strokeWidth="1.5" />
        <text x="55" y="90" fill="#00e5ff" fontFamily="var(--font-mono)" fontSize="10">// CLIENT CONSUMERS</text>
        <text x="55" y="115" fill="#f5f6f8" fontFamily="var(--font-display)" fontSize="13" fontWeight="600">HTTP / REST Client</text>

        <rect x="55" y="135" width="130" height="30" rx="4" fill="#171e2e" />
        <text x="120" y="154" fill="#9da3b0" fontFamily="var(--font-mono)" fontSize="9" textAnchor="middle">GET /api/menu</text>

        <rect x="55" y="175" width="130" height="30" rx="4" fill="#171e2e" />
        <text x="120" y="194" fill="#9da3b0" fontFamily="var(--font-mono)" fontSize="9" textAnchor="middle">POST /api/orders</text>

        <text x="120" y="235" fill="#9da3b0" fontFamily="var(--font-mono)" fontSize="9" textAnchor="middle">JSON Payload Stream</text>

        {/* Router Flow */}
        <path d="M 200 157 L 270 157" stroke="#00e5ff" strokeWidth="1.5" />
        <polygon points="270,157 262,153 262,161" fill="#00e5ff" />

        {/* Django REST Framework Core */}
        <rect x="270" y="60" width="190" height="195" rx="8" fill="#0f1524" stroke="rgba(16, 185, 129, 0.35)" strokeWidth="1.5" />
        <text x="285" y="90" fill="#10b981" fontFamily="var(--font-mono)" fontSize="10">// SERVICE LAYER</text>
        <text x="285" y="115" fill="#f5f6f8" fontFamily="var(--font-display)" fontSize="14" fontWeight="600">Django REST Framework</text>

        <rect x="285" y="135" width="160" height="24" rx="4" fill="#172236" />
        <text x="365" y="151" fill="#00e5ff" fontFamily="var(--font-mono)" fontSize="9" textAnchor="middle">URL Route Dispatcher</text>

        <rect x="285" y="165" width="160" height="24" rx="4" fill="#172236" />
        <text x="365" y="181" fill="#f5f6f8" fontFamily="var(--font-mono)" fontSize="9" textAnchor="middle">ModelViewSets &amp; Serializers</text>

        <rect x="285" y="195" width="160" height="24" rx="4" fill="#172236" />
        <text x="365" y="211" fill="#10b981" fontFamily="var(--font-mono)" fontSize="9" textAnchor="middle">Authentication &amp; Permissions</text>

        {/* Database Persistence Layer */}
        <path d="M 460 157 L 510 157" stroke="#00e5ff" strokeWidth="1.5" />
        <polygon points="510,157 502,153 502,161" fill="#00e5ff" />

        <rect x="510" y="60" width="150" height="195" rx="8" fill="#10141f" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="1.5" />
        <text x="525" y="90" fill="#9da3b0" fontFamily="var(--font-mono)" fontSize="10">// PERSISTENCE</text>
        <text x="525" y="115" fill="#f5f6f8" fontFamily="var(--font-display)" fontSize="13" fontWeight="600">Relational Database</text>

        <rect x="525" y="135" width="120" height="26" rx="4" fill="#171e2e" />
        <text x="585" y="152" fill="#9da3b0" fontFamily="var(--font-mono)" fontSize="8" textAnchor="middle">MenuItems Table</text>

        <rect x="525" y="168" width="120" height="26" rx="4" fill="#171e2e" />
        <text x="585" y="185" fill="#9da3b0" fontFamily="var(--font-mono)" fontSize="8" textAnchor="middle">Orders &amp; Items Table</text>

        <rect x="525" y="201" width="120" height="26" rx="4" fill="#171e2e" />
        <text x="585" y="218" fill="#9da3b0" fontFamily="var(--font-mono)" fontSize="8" textAnchor="middle">Tables / State</text>
      </svg>
    </div>
  );
}
