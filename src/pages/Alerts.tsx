import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Clock, MapPin } from "lucide-react";
import { generateAlertsData } from "@/lib/mockData";

export const Alerts = () => {
  const [alerts, setAlerts] = useState(generateAlertsData());

  useEffect(() => {
    const interval = setInterval(() => {
      setAlerts(generateAlertsData());
    }, 45000);

    return () => clearInterval(interval);
  }, []);

  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case "critical":
        return "status-critical";
      case "high":
        return "status-high";
      case "medium":
        return "status-medium";
      case "low":
        return "status-low";
      default:
        return "status-low";
    }
  };

  const getDisasterIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case "earthquake":
        return "🌍";
      case "flood":
        return "🌊";
      case "wildfire":
        return "🔥";
      case "cyclone":
        return "🌪️";
      case "landslide":
        return "⛰️";
      default:
        return "⚠️";
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Disaster Alert System
        </h1>
        <p className="text-muted-foreground">
          Real-time monitoring of emergency situations and disaster events
        </p>
      </div>

      {/* Alert Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {["Critical", "High", "Medium", "Low"].map((severity) => {
          const count = alerts.filter(alert => alert.severity === severity).length;
          return (
            <Card key={severity}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{severity} Alerts</p>
                    <p className="text-2xl font-bold">{count}</p>
                  </div>
                  <div className={`p-2 rounded-lg ${getSeverityColor(severity).replace('text-', 'bg-')}/10`}>
                    <AlertTriangle className={`w-4 h-4 ${getSeverityColor(severity)}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Alert List */}
      <div className="space-y-4">
        {alerts.map((alert) => (
          <Card key={alert.id} className="relative overflow-hidden">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{getDisasterIcon(alert.type)}</div>
                  <div>
                    <h3 className="text-lg font-bold">{alert.type}</h3>
                    <p className="text-sm text-muted-foreground font-normal">
                      Alert ID: {alert.id}
                    </p>
                  </div>
                </div>
                <Badge className={getSeverityColor(alert.severity)}>
                  {alert.severity}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">{alert.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Time</p>
                    <p className="font-medium">{alert.time}</p>
                  </div>
                </div>
              </div>

              {alert.description && (
                <div className="pt-2 border-t border-border/50">
                  <p className="text-sm text-muted-foreground">
                    {alert.description}
                  </p>
                </div>
              )}

              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${
                    alert.severity === 'Critical' ? 'bg-emergency-critical' :
                    alert.severity === 'High' ? 'bg-emergency-high' :
                    alert.severity === 'Medium' ? 'bg-emergency-medium' :
                    'bg-emergency-low'
                  } animate-pulse`} />
                  <span className="text-xs text-muted-foreground">Active Alert</span>
                </div>
                <div className="text-xs text-muted-foreground">
                  Drones dispatched: {alert.dronesDispatched}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};