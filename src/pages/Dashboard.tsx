import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, AlertTriangle, Users, Radio } from "lucide-react";
import { generateDashboardData } from "@/lib/mockData";

export const Dashboard = () => {
  const [data, setData] = useState(generateDashboardData());

  useEffect(() => {
    const interval = setInterval(() => {
      setData(generateDashboardData());
    }, 45000);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    {
      title: "Active Drones",
      value: data.activeDrones,
      icon: Zap,
      color: "text-drone-active",
      bgColor: "bg-drone-active/10",
    },
    {
      title: "Detected Victims",
      value: data.detectedVictims,
      icon: Users,
      color: "text-emergency-critical",
      bgColor: "bg-emergency-critical/10",
    },
    {
      title: "Disaster Alerts",
      value: data.disasterAlerts,
      icon: AlertTriangle,
      color: "text-emergency-high",
      bgColor: "bg-emergency-high/10",
    },
    {
      title: "IoT Sensors",
      value: data.iotSensors,
      icon: Radio,
      color: "text-status-operational",
      bgColor: "bg-status-operational/10",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">
          ResQNet Dashboard
        </h1>
        <p className="text-muted-foreground">
          Real-time monitoring of autonomous disaster management systems
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title} className="relative overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`w-4 h-4 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className={`text-2xl font-bold ${stat.color}`}>
                {stat.value}
              </div>
              <div className="mt-2">
                <div className="flex items-center text-xs text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse" />
                  Live updates every 45s
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-emergency-high" />
              Recent Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {data.recentAlerts.map((alert, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg bg-muted/30 border border-border/50"
                >
                  <div className="flex items-center gap-3">
                    <div className="text-lg">{alert.icon}</div>
                    <div>
                      <p className="font-medium text-sm">{alert.type}</p>
                      <p className="text-xs text-muted-foreground">
                        {alert.location}
                      </p>
                    </div>
                  </div>
                  <div className={`px-2 py-1 rounded text-xs font-medium status-${alert.severity.toLowerCase()}`}>
                    {alert.severity}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-drone-active" />
              Drone Operations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {data.droneOperations.map((drone, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg bg-muted/30 border border-border/50"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full bg-${drone.status === 'Flying' ? 'drone-active' : drone.status === 'Idle' ? 'drone-idle' : drone.status === 'Charging' ? 'drone-charging' : 'drone-malfunction'}`} />
                    <div>
                      <p className="font-medium text-sm">{drone.id}</p>
                      <p className="text-xs text-muted-foreground">
                        {drone.zone}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">Battery</p>
                    <p className="font-medium text-sm">{drone.battery}%</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};