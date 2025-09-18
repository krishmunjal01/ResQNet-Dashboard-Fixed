// Mock data generators for ResQNet dashboard

export const generateDashboardData = () => {
  return {
    activeDrones: Math.floor(Math.random() * 15) + 8, // 8-22
    detectedVictims: Math.floor(Math.random() * 25) + 5, // 5-29
    disasterAlerts: Math.floor(Math.random() * 8) + 2, // 2-9
    iotSensors: Math.floor(Math.random() * 50) + 85, // 85-134
    recentAlerts: [
      {
        type: "Earthquake",
        icon: "🌍",
        location: "Zone Alpha-7",
        severity: "Critical",
      },
      {
        type: "Flood",
        icon: "🌊",
        location: "Zone Beta-3",
        severity: "High",
      },
      {
        type: "Wildfire",
        icon: "🔥",
        location: "Zone Gamma-1",
        severity: "Medium",
      },
    ],
    droneOperations: [
      {
        id: "DRN-001",
        status: "Flying",
        battery: Math.floor(Math.random() * 30) + 70,
        zone: "Severe Zone Alpha",
      },
      {
        id: "DRN-005",
        status: "Charging",
        battery: Math.floor(Math.random() * 20) + 15,
        zone: "Moderate Zone Beta",
      },
      {
        id: "DRN-012",
        status: "Idle",
        battery: Math.floor(Math.random() * 15) + 85,
        zone: "Minor Zone Gamma",
      },
    ],
  };
};

export const generateDronesData = () => {
  const statuses = ["Flying", "Idle", "Charging", "Malfunction"];
  const zones = ["Severe", "Moderate", "Minor"];
  
  return Array.from({ length: 12 }, (_, i) => ({
    id: `DRN-${String(i + 1).padStart(3, "0")}`,
    status: statuses[Math.floor(Math.random() * statuses.length)],
    battery: Math.floor(Math.random() * 100),
    assignedZone: zones[Math.floor(Math.random() * zones.length)],
    altitude: Math.floor(Math.random() * 200) + 50,
    lastSignal: Math.floor(Math.random() * 30) + 1,
  }));
};

export const generateAlertsData = () => {
  const types = ["Earthquake", "Flood", "Wildfire", "Cyclone", "Landslide"];
  const severities = ["Critical", "High", "Medium", "Low"];
  const locations = [
    "Zone Alpha-7", "Zone Beta-3", "Zone Gamma-1", "Zone Delta-5", 
    "Zone Echo-9", "Zone Foxtrot-2", "Zone Golf-8", "Zone Hotel-4"
  ];
  
  return Array.from({ length: 8 }, (_, i) => ({
    id: `ALT-${String(i + 1).padStart(3, "0")}`,
    type: types[Math.floor(Math.random() * types.length)],
    severity: severities[Math.floor(Math.random() * severities.length)],
    location: locations[Math.floor(Math.random() * locations.length)],
    time: new Date(Date.now() - Math.random() * 3600000).toLocaleTimeString(),
    description: "Automated detection from sensor network and satellite imagery analysis.",
    dronesDispatched: Math.floor(Math.random() * 5) + 1,
  }));
};

export const generateVictimsData = () => {
  const labels = [
    "Person Detected", "Injured Individual", "Trapped Victim", 
    "Group of People", "Child Detected", "Elderly Person"
  ];
  const locations = [
    "Building Collapse Site", "Flood Zone", "Forest Area", 
    "Residential Area", "Highway Section", "Industrial Zone"
  ];
  
  const detections = Array.from({ length: 6 }, (_, i) => ({
    id: `VIC-${String(i + 1).padStart(3, "0")}`,
    label: labels[Math.floor(Math.random() * labels.length)],
    confidence: Math.floor(Math.random() * 30) + 70, // 70-99%
    timestamp: new Date(Date.now() - Math.random() * 1800000).toLocaleTimeString(),
    location: locations[Math.floor(Math.random() * locations.length)],
    droneId: `DRN-${String(Math.floor(Math.random() * 12) + 1).padStart(3, "0")}`,
  }));

  return {
    totalDetected: detections.length + Math.floor(Math.random() * 10),
    highConfidence: detections.filter(d => d.confidence >= 90).length,
    avgConfidence: Math.floor(detections.reduce((acc, d) => acc + d.confidence, 0) / detections.length),
    activeCameras: Math.floor(Math.random() * 8) + 12,
    detections,
  };
};

export const generateSensorData = () => {
  const generateTimeSeriesData = (baseValue: number, variance: number, points: number = 12) => {
    return Array.from({ length: points }, (_, i) => ({
      time: `${String(12 + i).padStart(2, "0")}:00`,
      value: Math.floor(baseValue + (Math.random() - 0.5) * variance),
    }));
  };

  return {
    current: {
      temperature: Math.floor(Math.random() * 20) + 25, // 25-44°C
      humidity: Math.floor(Math.random() * 30) + 40, // 40-69%
      vibration: Math.floor(Math.random() * 10) + 1, // 1-10
      activeSensors: Math.floor(Math.random() * 20) + 95, // 95-114
    },
    temperature: generateTimeSeriesData(35, 20),
    humidity: generateTimeSeriesData(55, 40),
    vibration: generateTimeSeriesData(3, 8),
  };
};

export const generatePathfindingData = () => {
  const meshConnections = Array.from({ length: 6 }, (_, i) => ({
    id: `MESH-${i + 1}`,
    from: `DRN-${String(Math.floor(Math.random() * 12) + 1).padStart(3, "0")}`,
    to: `DRN-${String(Math.floor(Math.random() * 12) + 1).padStart(3, "0")}`,
    strength: Math.floor(Math.random() * 40) + 60, // 60-99%
    distance: Math.floor(Math.random() * 500) + 100, // 100-599m
  }));

  const flightPaths = Array.from({ length: 5 }, (_, i) => ({
    id: `PATH-${i + 1}`,
    droneId: `DRN-${String(Math.floor(Math.random() * 12) + 1).padStart(3, "0")}`,
    startPoint: `WP-${Math.floor(Math.random() * 10) + 1}`,
    endPoint: `WP-${Math.floor(Math.random() * 10) + 11}`,
    progress: Math.floor(Math.random() * 100),
  }));

  return {
    activeRoutes: Math.floor(Math.random() * 8) + 5,
    meshNodes: Math.floor(Math.random() * 15) + 10,
    avgSignalStrength: Math.floor(Math.random() * 20) + 75,
    totalWaypoints: Math.floor(Math.random() * 25) + 45,
    meshConnections,
    flightPaths,
  };
};