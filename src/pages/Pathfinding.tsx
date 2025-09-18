import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation, Wifi, Route, MapPin } from "lucide-react";
import { generatePathfindingData } from "@/lib/mockData";

export const Pathfinding = () => {
  const [pathData, setPathData] = useState(generatePathfindingData());

  useEffect(() => {
    const interval = setInterval(() => {
      setPathData(generatePathfindingData());
    }, 45000);

    return () => clearInterval(interval);
  }, []);

  const getConnectionStrength = (strength: number) => {
    if (strength >= 80) return "status-operational";
    if (strength >= 60) return "status-warning";
    return "status-error";
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Mesh Network & Pathfinding
        </h1>
        <p className="text-muted-foreground">
          Autonomous drone swarm navigation and mesh network coordination
        </p>
      </div>

      {/* Network Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Routes</p>
                <p className="text-2xl font-bold">{pathData.activeRoutes}</p>
              </div>
              <div className="p-2 rounded-lg bg-primary/10">
                <Route className="w-4 h-4 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Mesh Nodes</p>
                <p className="text-2xl font-bold">{pathData.meshNodes}</p>
              </div>
              <div className="p-2 rounded-lg bg-drone-active/10">
                <Wifi className="w-4 h-4 text-drone-active" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg Signal</p>
                <p className="text-2xl font-bold">{pathData.avgSignalStrength}%</p>
              </div>
              <div className="p-2 rounded-lg bg-status-operational/10">
                <Navigation className="w-4 h-4 text-status-operational" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Waypoints</p>
                <p className="text-2xl font-bold">{pathData.totalWaypoints}</p>
              </div>
              <div className="p-2 rounded-lg bg-emergency-medium/10">
                <MapPin className="w-4 h-4 text-emergency-medium" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Live Drone Mesh Network Map - Enhanced */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Navigation className="w-5 h-5 text-primary" />
            Live Drone Mesh Network Map
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative bg-gradient-to-br from-muted/10 to-muted/30 rounded-lg border border-border/50 h-96 overflow-hidden">
            {/* Grid Background */}
            <div className="absolute inset-0 opacity-20">
              <svg width="100%" height="100%" className="text-muted-foreground">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>

            {/* Simulated Drone Positions */}
            <div className="absolute top-16 left-20">
              <div className="relative">
                <div className="w-4 h-4 rounded-full bg-drone-active animate-pulse shadow-lg border-2 border-background" />
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                  <span className="text-xs bg-background/90 px-2 py-1 rounded border text-foreground">DRN-001</span>
                </div>
                <div className="absolute top-2 left-2 w-8 h-8 rounded-full bg-drone-active/20 animate-ping" />
              </div>
            </div>

            <div className="absolute top-32 right-24">
              <div className="relative">
                <div className="w-4 h-4 rounded-full bg-emergency-high animate-pulse shadow-lg border-2 border-background" />
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                  <span className="text-xs bg-background/90 px-2 py-1 rounded border text-foreground">DRN-005</span>
                </div>
                <div className="absolute top-2 left-2 w-8 h-8 rounded-full bg-emergency-high/20 animate-ping" />
              </div>
            </div>

            <div className="absolute bottom-20 left-32">
              <div className="relative">
                <div className="w-4 h-4 rounded-full bg-primary animate-pulse shadow-lg border-2 border-background" />
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                  <span className="text-xs bg-background/90 px-2 py-1 rounded border text-foreground">DRN-012</span>
                </div>
                <div className="absolute top-2 left-2 w-8 h-8 rounded-full bg-primary/20 animate-ping" />
              </div>
            </div>

            <div className="absolute top-24 left-1/2 transform -translate-x-1/2">
              <div className="relative">
                <div className="w-4 h-4 rounded-full bg-status-operational animate-pulse shadow-lg border-2 border-background" />
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                  <span className="text-xs bg-background/90 px-2 py-1 rounded border text-foreground">DRN-008</span>
                </div>
                <div className="absolute top-2 left-2 w-8 h-8 rounded-full bg-status-operational/20 animate-ping" />
              </div>
            </div>

            {/* Mesh Network Connections */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {/* Connection lines */}
              <line x1="80" y1="64" x2="50%" y2="96" stroke="hsl(var(--drone-active))" strokeWidth="2" strokeDasharray="5,5" opacity="0.6">
                <animate attributeName="stroke-dashoffset" values="10;0" dur="2s" repeatCount="indefinite"/>
              </line>
              <line x1="50%" y1="96" x2="calc(100% - 96px)" y2="128" stroke="hsl(var(--emergency-high))" strokeWidth="2" strokeDasharray="5,5" opacity="0.6">
                <animate attributeName="stroke-dashoffset" values="10;0" dur="2s" repeatCount="indefinite"/>
              </line>
              <line x1="128" y1="calc(100% - 80px)" x2="50%" y2="96" stroke="hsl(var(--primary))" strokeWidth="2" strokeDasharray="5,5" opacity="0.6">
                <animate attributeName="stroke-dashoffset" values="10;0" dur="2s" repeatCount="indefinite"/>
              </line>
            </svg>

            {/* Flight Paths */}
            <div className="absolute top-16 left-20 w-48 h-1 bg-gradient-to-r from-drone-active to-transparent rounded transform rotate-45 animate-pulse" />
            <div className="absolute bottom-20 right-24 w-32 h-1 bg-gradient-to-l from-emergency-high to-transparent rounded transform -rotate-12" />

            {/* Waypoints */}
            <div className="absolute top-12 right-12">
              <div className="w-2 h-2 rounded-full bg-muted-foreground animate-pulse" />
            </div>
            <div className="absolute bottom-12 left-12">
              <div className="w-2 h-2 rounded-full bg-muted-foreground animate-pulse" />
            </div>
            <div className="absolute top-1/2 right-16">
              <div className="w-2 h-2 rounded-full bg-muted-foreground animate-pulse" />
            </div>

            {/* Legend */}
            <div className="absolute bottom-4 left-4 bg-background/90 p-3 rounded-lg border border-border/50">
              <div className="flex items-center gap-4 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-drone-active animate-pulse" />
                  <span>Active Drones</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-1 bg-drone-active/60 rounded" />
                  <span>Mesh Links</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-muted-foreground" />
                  <span>Waypoints</span>
                </div>
              </div>
            </div>

            {/* Live Status Indicator */}
            <div className="absolute top-4 right-4 flex items-center gap-2 bg-background/90 px-3 py-2 rounded-lg border border-border/50">
              <div className="w-2 h-2 rounded-full bg-status-operational animate-pulse" />
              <span className="text-xs text-foreground">Live Tracking</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Network Status */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wifi className="w-5 h-5 text-drone-active" />
              Mesh Network Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {pathData.meshConnections.map((connection) => (
                <div
                  key={connection.id}
                  className="flex items-center justify-between p-3 rounded-lg bg-muted/30 border border-border/50"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${
                      connection.strength >= 80 ? 'bg-status-operational' :
                      connection.strength >= 60 ? 'bg-status-warning' :
                      'bg-status-error'
                    } animate-pulse`} />
                    <div>
                      <p className="font-medium text-sm">{connection.from} ↔ {connection.to}</p>
                      <p className="text-xs text-muted-foreground">
                        Distance: {connection.distance}m
                      </p>
                    </div>
                  </div>
                  <Badge className={getConnectionStrength(connection.strength)}>
                    {connection.strength}%
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Route className="w-5 h-5 text-primary" />
              Active Flight Paths
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {pathData.flightPaths.map((path) => (
                <div
                  key={path.id}
                  className="flex items-center justify-between p-3 rounded-lg bg-muted/30 border border-border/50"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Navigation className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{path.droneId}</p>
                      <p className="text-xs text-muted-foreground">
                        {path.startPoint} → {path.endPoint}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">Progress</p>
                    <p className="font-medium text-sm">{path.progress}%</p>
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