import React from "react";
import { Link } from "react-router-dom";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { FileText, Activity, Utensils, Settings } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card1";
import { Button } from "../../components/ui/button";

const HealthReport = () => {
  const yogaData = [
    { name: "Mon", minutes: 30 },
    { name: "Tue", minutes: 45 },
    { name: "Wed", minutes: 60 },
    { name: "Thu", minutes: 30 },
    { name: "Fri", minutes: 45 },
    { name: "Sat", minutes: 90 },
    { name: "Sun", minutes: 60 },
  ];

  const mealData = [
    { name: "Protein", value: 30 },
    { name: "Carbs", value: 45 },
    { name: "Fats", value: 25 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

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
        <h1 className="text-3xl font-bold mb-8">Health Report</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Yoga Report Card */}
          <Card className="bg-gray-800 border-blue-600">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Activity className="mr-2 text-blue-400" />
                Yoga Report
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={yogaData}>
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
                  <Bar dataKey="minutes" fill="#3B82F6" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Meal Tracker Report Card */}
          <Card className="bg-gray-800 border-blue-600">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Utensils className="mr-2 text-blue-400" />
                Meal Tracker Report
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={mealData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {mealData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1F2937",
                      border: "none",
                    }}
                    labelStyle={{ color: "#F3F4F6" }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex justify-center mt-4">
                {mealData.map((entry, index) => (
                  <div
                    key={`legend-${index}`}
                    className="flex items-center mr-4"
                  >
                    <div
                      className="w-3 h-3 mr-1"
                      style={{ backgroundColor: COLORS[index % COLORS.length] }}
                    ></div>
                    <span>{entry.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Overall Health Assessment Card */}
        <Card className="bg-gray-800 border-blue-600 mt-6">
          <CardHeader>
            <CardTitle>Overall Health Assessment</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300">
              Based on your yoga practice and meal tracking, your overall health
              is improving. Your consistent yoga routine is helping with
              flexibility and stress reduction. Your meal composition is
              well-balanced, but consider slightly increasing your protein
              intake for optimal muscle health.
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default HealthReport;
