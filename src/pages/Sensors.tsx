import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, BarChart, Bar } from "recharts";
import { Thermometer, Droplets, Activity, Radio } from "lucide-react";
import { generateSensorData } from "@/lib/mockData";

export const Sensors = () => {
  const [sensorData, setSensorData] = useState(generateSensorData());

  useEffect(() => {
    const interval = setInterval(() => {
      setSensorData(generateSensorData());
    }, 45000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">
          IoT Sensor Network
        </h1>
        <p className="text-muted-foreground">
          Real-time environmental monitoring from distributed sensor network
        </p>
      </div>

      {/* Sensor Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Temperature</p>
                <p className="text-2xl font-bold">{sensorData.current.temperature}°C</p>
              </div>
              <div className="p-2 rounded-lg bg-emergency-high/10">
                <Thermometer className="w-4 h-4 text-emergency-high" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Humidity</p>
                <p className="text-2xl font-bold">{sensorData.current.humidity}%</p>
              </div>
              <div className="p-2 rounded-lg bg-drone-active/10">
                <Droplets className="w-4 h-4 text-drone-active" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Vibration</p>
                <p className="text-2xl font-bold">{sensorData.current.vibration}</p>
              </div>
              <div className="p-2 rounded-lg bg-emergency-critical/10">
                <Activity className="w-4 h-4 text-emergency-critical" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Sensors</p>
                <p className="text-2xl font-bold">{sensorData.current.activeSensors}</p>
              </div>
              <div className="p-2 rounded-lg bg-status-operational/10">
                <Radio className="w-4 h-4 text-status-operational" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Temperature Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Thermometer className="w-5 h-5 text-emergency-high" />
            Temperature Monitoring (Last 24 Hours)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={sensorData.temperature}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="hsl(var(--emergency-high))"
                  strokeWidth={2}
                  dot={{ fill: "hsl(var(--emergency-high))", strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Humidity Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Droplets className="w-5 h-5 text-drone-active" />
              Humidity Levels
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={sensorData.humidity}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Bar dataKey="value" fill="hsl(var(--drone-active))" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Vibration Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-emergency-critical" />
              Seismic Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={sensorData.vibration}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="hsl(var(--emergency-critical))"
                    strokeWidth={2}
                    dot={{ fill: "hsl(var(--emergency-critical))", strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};