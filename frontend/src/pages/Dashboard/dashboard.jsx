import React from "react";
import { Link } from "react-router-dom";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { User, FileText, Settings, Activity, Moon } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card1";
import { Button } from "../../components/ui/button";

const Dashboard = () => {
  const stepsData = [
    { name: "Mon", steps: 6000 },
    { name: "Tue", steps: 8000 },
    { name: "Wed", steps: 7500 },
    { name: "Thu", steps: 9000 },
    { name: "Fri", steps: 8500 },
    { name: "Sat", steps: 10000 },
    { name: "Sun", steps: 7000 },
  ];

  const sleepData = [
    { name: "Mon", hours: 7 },
    { name: "Tue", hours: 6.5 },
    { name: "Wed", hours: 8 },
    { name: "Thu", hours: 7.5 },
    { name: "Fri", hours: 6 },
    { name: "Sat", hours: 9 },
    { name: "Sun", hours: 8.5 },
  ];

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 p-6">
        <div className="flex items-center mb-8">
          <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-xl font-bold">
            CB
          </div>
          <div className="ml-4">
            <h2 className="font-semibold">Chetan Borkar</h2>
            <p className="text-sm text-gray-400">chetancc@gmail.com</p>
          </div>
        </div>
        <nav>
          <Link to="/dashboard">
            <Button variant="ghost" className="w-full justify-start mb-2">
              <Activity className="mr-2 h-4 w-4" />
              Dashboard
            </Button>
          </Link>

          <Link to="/health-report">
            <Button variant="ghost" className="w-full justify-start mb-2">
              <FileText className="mr-2 h-4 w-4" />
              Health Report
            </Button>
          </Link>

          <Link to="/settings">
            <Button variant="ghost" className="w-full justify-start">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Steps Card */}
          <Card className="bg-gray-800 border-blue-600">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Activity className="mr-2 text-blue-400" />
                Daily Steps
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={stepsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
                  <XAxis dataKey="name" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1F2937",
                      border: "none",
                    }}
                    labelStyle={{ color: "#F3F4F6" }}
                  />
                  <Bar dataKey="steps" fill="#3B82F6" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Sleep Card */}
          <Card className="bg-gray-800 border-blue-600">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Moon className="mr-2 text-blue-400" />
                Sleep Hours
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={sleepData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
                  <XAxis dataKey="name" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1F2937",
                      border: "none",
                    }}
                    labelStyle={{ color: "#F3F4F6" }}
                  />
                  <Line
                    type="monotone"
                    dataKey="hours"
                    stroke="#3B82F6"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Health Summary Card */}
        <Card className="bg-gray-800 border-blue-600 mt-6">
          <CardHeader>
            <CardTitle>Health Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300">
              Your overall health status is good. Keep up with your daily
              exercise routine and maintain a consistent sleep schedule for
              optimal health.
            </p>
            <Link to="/health-report">
              <Button className="mt-4 bg-blue-600 hover:bg-blue-700">
                View Full Report
              </Button>
            </Link>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Dashboard;
