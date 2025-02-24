import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";

import Home from "./pages/Home/Home.jsx";
import Yoga from "./pages/Yoga/Yoga.jsx";
import About from "./pages/About/About.jsx";
import Tutorials from "./pages/Tutorials/Tutorials.jsx";

import "./App.css";
import { MyPlugin } from "./components/test/test.jsx";
import WebcamTest from "./pages/Yoga/camera.jsx";
import YogaPoseTrainer from "./components/test/Nutrition.jsx";
import GoogleSignIn from "./components/Auth/GoogleSignIn.jsx";
import NutritionAi from "./pages/Nutrition/Nutrition.jsx";
import Flowchart from "./components/Flowchart/Flowchart.jsx";
import YogaListing from "./pages/YogaListing/YogaListing.jsx";
import Dashboard from "./pages/Dashboard/dashboard.jsx";
import SettingsPage from "./pages/Dashboard/settings.jsx";
import HealthReport from "./pages/Dashboard/health-report.jsx";

export default function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/yoga" element={<YogaListing />} />
        <Route path="/start" element={<Yoga />} />
        <Route path="/about" element={<About />} />
        <Route path="/tutorials" element={<Tutorials />} />
        <Route path="/camera" element={<WebcamTest></WebcamTest>} />
        <Route path="/nutrition" element={<NutritionAi />} />
        <Route path="/flowchart" element={<Flowchart />} />
        <Route path="/googlesignin" element={<GoogleSignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/health-report" element={<HealthReport />} />

        <Route
          path="/test"
          element={
            <div className="min-h-screen bg-neutral-900 text-white">
              <MyPlugin />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
