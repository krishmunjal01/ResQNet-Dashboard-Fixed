import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Zap, Battery, MapPin } from "lucide-react";
import { generateDronesData } from "@/lib/mockData";

export const Drones = () => {
  const [drones, setDrones] = useState(generateDronesData());

  useEffect(() => {
    const interval = setInterval(() => {
      setDrones(generateDronesData());
    }, 45000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "flying":
        return "drone-flying";
      case "idle":
        return "drone-idle";
      case "charging":
        return "drone-charging";
      case "malfunction":
        return "drone-malfunction";
      default:
        return "drone-idle";
    }
  };

  const getZoneSeverity = (zone: string) => {
    switch (zone.toLowerCase()) {
      case "severe":
        return "status-critical";
      case "moderate":
        return "status-medium";
      case "minor":
        return "status-low";
      default:
        return "status-low";
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Drone Fleet Management
        </h1>
        <p className="text-muted-foreground">
          Monitor and control autonomous rescue drones in real-time
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {drones.map((drone) => (
          <Card key={drone.id} className="relative overflow-hidden">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  <span className="text-lg font-bold">{drone.id}</span>
                </div>
                <Badge className={getStatusColor(drone.status)}>
                  {drone.status}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Battery Level */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Battery className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm font-medium">Battery</span>
                  </div>
                  <span className="text-sm font-bold">{drone.battery}%</span>
                </div>
                <Progress
                  value={drone.battery}
                  className="h-2"
                />
              </div>

              {/* Assigned Zone */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Assigned Zone</span>
                </div>
                <Badge className={getZoneSeverity(drone.assignedZone)}>
                  {drone.assignedZone} Zone
                </Badge>
              </div>

              {/* Additional Info */}
              <div className="pt-2 border-t border-border/50">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Altitude</p>
                    <p className="font-medium">{drone.altitude}m</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Last Signal</p>
                    <p className="font-medium">{drone.lastSignal}s ago</p>
                  </div>
                </div>
              </div>

              {/* Status Indicator */}
              <div className="absolute top-4 right-4">
                <div className={`w-3 h-3 rounded-full ${
                  drone.status === 'Flying' ? 'bg-drone-active' : 
                  drone.status === 'Idle' ? 'bg-drone-idle' : 
                  drone.status === 'Charging' ? 'bg-drone-charging' : 
                  'bg-drone-malfunction'
                } ${drone.status === 'Flying' ? 'animate-pulse' : ''}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};