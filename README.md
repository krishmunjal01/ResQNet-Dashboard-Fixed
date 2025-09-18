# ResQNet: Autonomous Disaster Management & Rescue System

A professional web dashboard for **Smart India Hackathon 2025** showcasing an autonomous disaster management and rescue system.

## 🚁 Features

### Dashboard Overview
- **Real-time Statistics**: Active drones, detected victims, disaster alerts, and IoT sensors
- **Live Data Updates**: All metrics update automatically with realistic simulated data
- **Modern Dark Theme**: Professional SaaS-style interface with emergency-appropriate color coding

### Core Modules

#### 🛩️ Drone Fleet Management
- Real-time drone status monitoring (Flying, Idle, Charging, Malfunction)
- Battery level tracking with visual progress bars
- Zone assignment and operational status
- Individual drone telemetry data

#### 🚨 Alert System
- Multi-disaster type monitoring (Earthquake, Flood, Wildfire, Cyclone, Landslide)
- Severity-based classification (Critical, High, Medium, Low)
- Real-time alert feed with location and time data
- Emergency response tracking

#### 👥 Victim Detection
- AI-powered YOLO detection system interface
- Confidence scoring for victim identification
- Detection history and statistics
- Live camera feed placeholder integration

#### 📡 IoT Sensor Network
- Environmental monitoring dashboard
- Real-time charts for Temperature, Humidity, and Seismic Activity
- Multi-sensor data visualization with Recharts
- Network status and sensor health monitoring

#### 🗺️ Pathfinding & Mesh Network
- Drone swarm coordination visualization
- Mesh network topology and signal strength
- Flight path planning and progress tracking
- Interactive map placeholder for route visualization

## 🛠️ Technology Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui with custom variants
- **Charts**: Recharts for data visualization
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **State Management**: React Query (TanStack Query)

## 🎨 Design System

### Color Palette
- **Emergency Critical**: `hsl(0 91% 71%)` - For critical alerts and errors
- **Emergency High**: `hsl(25 95% 53%)` - For high-priority warnings
- **Emergency Medium**: `hsl(48 96% 53%)` - For medium-priority alerts
- **Emergency Low**: `hsl(142 69% 58%)` - For low-priority or safe status
- **Drone Active**: `hsl(210 100% 56%)` - For active operational status
- **Dark Theme**: Professional dark background with high contrast

### Key Features
- Semantic color tokens for consistent theming
- Custom status indicators and badges
- Responsive grid layouts
- Real-time data animations
- Professional card-based interface

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Modern web browser

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd resqnet-dashboard

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## 📊 Mock Data

The dashboard uses realistic mock data generators that simulate:

- **Dynamic Drone Operations**: Battery levels, status changes, zone assignments
- **Disaster Alert Feeds**: Various disaster types with severity levels
- **Victim Detection Results**: AI confidence scores and detection metadata
- **IoT Sensor Readings**: Environmental data with time-series charts
- **Network Topology**: Mesh connections and signal strength data

All data updates automatically to demonstrate real-time functionality.

## 🏗️ Architecture

### Component Structure
```
src/
├── components/
│   ├── layouts/DashboardLayout.tsx
│   ├── navigation/Navbar.tsx
│   └── navigation/Sidebar.tsx
├── pages/
│   ├── Dashboard.tsx
│   ├── Drones.tsx
│   ├── Alerts.tsx
│   ├── Victims.tsx
│   ├── Sensors.tsx
│   └── Pathfinding.tsx
├── lib/
│   └── mockData.ts
└── index.css (Design System)
```

### Design System
All styling is centralized in `src/index.css` and `tailwind.config.ts` using:
- HSL color values for theme consistency
- Custom CSS properties for design tokens
- Utility classes for status indicators
- Responsive breakpoints

## 📱 Responsive Design

The dashboard is fully responsive and optimized for:
- **Desktop**: Full feature access with multi-column layouts
- **Tablet**: Adaptive grid layouts with touch-friendly interactions
- **Projector/Presentation**: High contrast and large text for demonstrations

## 🎯 SIH 2025 Demo Ready

This dashboard is production-ready for Smart India Hackathon presentations with:
- **Professional Appearance**: Enterprise-grade UI/UX
- **Realistic Data**: Believable metrics and statistics
- **Live Updates**: Simulated real-time data flows
- **Comprehensive Coverage**: All major disaster management aspects
- **Interactive Elements**: Engaging user interface components

## 📄 License

Built for Smart India Hackathon 2025 - Educational and demonstration purposes.

---

**ResQNet Dashboard** - Autonomous Disaster Management & Rescue System  
*Smart India Hackathon 2025*