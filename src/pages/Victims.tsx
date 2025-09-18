import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, Users, Eye, Percent } from "lucide-react";
import { generateVictimsData } from "@/lib/mockData";

export const Victims = () => {
  const [victimsData, setVictimsData] = useState(generateVictimsData());

  useEffect(() => {
    const interval = setInterval(() => {
      setVictimsData(generateVictimsData());
    }, 45000);

    return () => clearInterval(interval);
  }, []);

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 90) return "status-operational";
    if (confidence >= 70) return "status-warning";
    return "status-error";
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Victim Detection System
        </h1>
        <p className="text-muted-foreground">
          AI-powered YOLO detection for identifying and tracking disaster victims
        </p>
      </div>

      {/* Detection Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Detected</p>
                <p className="text-2xl font-bold">{victimsData.totalDetected}</p>
              </div>
              <div className="p-2 rounded-lg bg-primary/10">
                <Users className="w-4 h-4 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">High Confidence</p>
                <p className="text-2xl font-bold">{victimsData.highConfidence}</p>
              </div>
              <div className="p-2 rounded-lg bg-status-operational/10">
                <Eye className="w-4 h-4 text-status-operational" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg Confidence</p>
                <p className="text-2xl font-bold">{victimsData.avgConfidence}%</p>
              </div>
              <div className="p-2 rounded-lg bg-status-warning/10">
                <Percent className="w-4 h-4 text-status-warning" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Cameras</p>
                <p className="text-2xl font-bold">{victimsData.activeCameras}</p>
              </div>
              <div className="p-2 rounded-lg bg-drone-active/10">
                <Camera className="w-4 h-4 text-drone-active" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Enhanced YOLO Detection Feed */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Camera className="w-5 h-5 text-primary" />
            Latest YOLO Detection Feed
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative bg-gradient-to-br from-muted/5 to-muted/20 rounded-lg border border-border/50 h-80 overflow-hidden">
            {/* Mock Camera Feed Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-muted/10 via-muted/5 to-muted/15" />
            
            {/* Simulated Video Feed Grid */}
            <div className="absolute inset-0 opacity-10">
              <svg width="100%" height="100%" className="text-muted-foreground">
                <defs>
                  <pattern id="video-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#video-grid)" />
              </svg>
            </div>

            {/* Simulated YOLO Detection Boxes */}
            <div className="absolute top-16 left-20 w-24 h-32 border-2 border-emergency-critical rounded">
              <div className="absolute -top-6 left-0 bg-emergency-critical text-white px-2 py-1 rounded text-xs font-medium">
                Person 97%
              </div>
              <div className="absolute inset-2 bg-emergency-critical/10 rounded animate-pulse" />
            </div>

            <div className="absolute top-32 right-24 w-20 h-28 border-2 border-status-operational rounded">
              <div className="absolute -top-6 left-0 bg-status-operational text-white px-2 py-1 rounded text-xs font-medium">
                Child 89%
              </div>
              <div className="absolute inset-2 bg-status-operational/10 rounded animate-pulse" />
            </div>

            <div className="absolute bottom-20 left-1/3 w-28 h-20 border-2 border-status-warning rounded">
              <div className="absolute -top-6 left-0 bg-status-warning text-white px-2 py-1 rounded text-xs font-medium">
                Group 76%
              </div>
              <div className="absolute inset-2 bg-status-warning/10 rounded animate-pulse" />
            </div>

            {/* Mock Terrain/Debris Elements */}
            <div className="absolute bottom-8 left-8 w-16 h-8 bg-muted/40 rounded transform rotate-12" />
            <div className="absolute top-12 right-12 w-12 h-6 bg-muted/30 rounded transform -rotate-6" />
            <div className="absolute bottom-16 right-16 w-20 h-4 bg-muted/35 rounded" />

            {/* Detection Overlay Info */}
            <div className="absolute top-4 left-4 bg-background/90 p-3 rounded-lg border border-border/50">
              <div className="text-xs space-y-1">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emergency-critical animate-pulse" />
                  <span className="text-foreground">3 Active Detections</span>
                </div>
                <div className="text-muted-foreground">
                  Model: YOLOv8 | FPS: 30
                </div>
              </div>
            </div>

            {/* Camera Info */}
            <div className="absolute top-4 right-4 bg-background/90 p-3 rounded-lg border border-border/50">
              <div className="text-xs space-y-1">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-status-operational animate-pulse" />
                  <span className="text-foreground">DRN-001 CAM</span>
                </div>
                <div className="text-muted-foreground">
                  Alt: 120m | Zone: Alpha-7
                </div>
              </div>
            </div>

            {/* Processing Status */}
            <div className="absolute bottom-4 left-4 bg-background/90 p-3 rounded-lg border border-border/50">
              <div className="flex items-center gap-3 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-foreground">Processing: Real-time</span>
                </div>
                <div className="text-muted-foreground">
                  Last Update: {new Date().toLocaleTimeString()}
                </div>
              </div>
            </div>

            {/* Scanning Line Effect */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60 animate-pulse">
                <div className="w-full h-full bg-primary/20 animate-pulse" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Detection Results */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-5 h-5 text-primary" />
            Recent Detection Results
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {victimsData.detections.map((detection) => (
              <div
                key={detection.id}
                className="flex items-center justify-between p-4 rounded-lg bg-muted/30 border border-border/50"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">{detection.label}</h4>
                    <p className="text-sm text-muted-foreground">
                      Detected at {detection.timestamp}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Location: {detection.location}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge className={getConfidenceColor(detection.confidence)}>
                    {detection.confidence}% confidence
                  </Badge>
                  <p className="text-xs text-muted-foreground mt-1">
                    Drone: {detection.droneId}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};