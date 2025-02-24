import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Button1 from "../ui/Button1";
import {
  Home,
  Calendar,
  FileText,
  MessageCircle,
  ChevronDown,
  User,
  Activity,
  Menu,
  X,
} from "lucide-react";

const AIYogaItems = [
  {
    title: "Personalized Routines",
    href: "/ai-yoga/personalized-routines",
    icon: Activity,
  },
  { title: "Pose Analysis", href: "/ai-yoga/pose-analysis", icon: Activity },
  {
    title: "Virtual Instructor",
    href: "/ai-yoga/virtual-instructor",
    icon: Activity,
  },
  {
    title: "Progress Tracking",
    href: "/ai-yoga/progress-tracking",
    icon: Activity,
  },
];

const YogaExperimentalItems = [
  { title: "Mind & Meditation", href: "/yoga", icon: Activity },
  { title: "Strength & Balance", href: "/yoga", icon: Activity },
  { title: "Breathing & Energy", href: "/yoga", icon: Activity },
];

const Navbar = () => {
  const [aiYogaOpen, setAiYogaOpen] = useState(false);
  const [experimentalOpen, setExperimentalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const aiYogaRef = useRef(null);
  const experimentalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (aiYogaRef.current && !aiYogaRef.current.contains(event.target)) {
        setAiYogaOpen(false);
      }
      if (
        experimentalRef.current &&
        !experimentalRef.current.contains(event.target)
      ) {
        setExperimentalOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleAiYogaToggle = () => {
    setAiYogaOpen(!aiYogaOpen);
    setExperimentalOpen(false);
  };

  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
    if (!isLoggedIn) {
      window.location.href = "/dashboard";
    }
  };

  const handleExperimentalToggle = (e) => {
    e.stopPropagation();
    setExperimentalOpen(!experimentalOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-black/90 bg-opacity-90 backdrop-blur-md shadow-sm">
      <div className="w-full max-w-7xl mx-auto flex h-16 items-center justify-between px-2 sm:px-4 lg:px-8">
        {/* Logo on the left */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-[#4d53f8]">Well Nest</span>
          </Link>
        </div>

        {/* Navigation and hamburger menu */}
        <div className="flex items-center">
          <nav className="flex items-center mr-2">
            {/* Desktop navigation (hidden on mobile) */}
            <div className="hidden md:flex text-base font-medium">
              <ul className="flex space-x-6 lg:space-x-8">
                <li>
                  <Link
                    to="/"
                    className="flex items-center text-[#4d53f8] hover:text-yellow-100 transition-colors"
                  >
                    <Home className="w-5 h-5 mr-2" />
                    Home
                  </Link>
                </li>
                <li ref={aiYogaRef} className="relative">
                  <button
                    onClick={handleAiYogaToggle}
                    className="flex items-center text-[#4d53f8] hover:text-yellow-100 transition-colors cursor-pointer"
                  >
                    <Activity className="w-5 h-5 mr-2" />
                    AI Yoga
                    <ChevronDown className="w-4 h-4 ml-1" />
                  </button>
                  {aiYogaOpen && (
                    <ul className="absolute left-0 top-full mt-2 w-64 rounded-md bg-black/90 py-2 shadow-lg ring-1 ring-black ring-opacity-5">
                      {AIYogaItems.map((item) => (
                        <li key={item.title}>
                          <Link
                            to={item.href}
                            className="flex items-center px-4 py-3 text-sm text-[#4d53f8] hover:bg-gray-900"
                          >
                            <item.icon className="w-5 h-5 mr-2" />
                            {item.title}
                          </Link>
                        </li>
                      ))}
                      <li ref={experimentalRef}>
                        <button
                          onClick={handleExperimentalToggle}
                          className="flex items-center w-full px-4 py-3 text-sm text-[#4d53f8] hover:bg-gray-900 cursor-pointer"
                        >
                          <Activity className="w-5 h-5 mr-2" />
                          Specified Yoga
                          <ChevronDown className="w-4 h-4 ml-auto" />
                        </button>
                        {experimentalOpen && (
                          <ul className="absolute left-full top-0 mt-0 w-64 rounded-md bg-black/90 py-2 shadow-lg ring-1 ring-black ring-opacity-5">
                            {YogaExperimentalItems.map((item) => (
                              <li key={item.title}>
                                <Link
                                  to={item.href}
                                  className="flex items-center px-4 py-3 text-sm text-[#4d53f8] hover:bg-gray-900"
                                >
                                  <item.icon className="w-5 h-5 mr-2" />
                                  {item.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <Link
                    to="/start"
                    className="flex items-center text-[#4d53f8] hover:text-yellow-100 transition-colors"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    YOGA TRAINNING
                  </Link>
                </li>
                <li>
                  <Link
                    to="/flowchart"
                    className="flex items-center text-[#4d53f8] hover:text-yellow-100 transition-colors"
                  >
                    <FileText className="w-5 h-5 mr-2" />
                    AI MEAL PLANNER
                  </Link>
                </li>
              </ul>
            </div>

            {/* Hamburger menu (visible on mobile) */}
            <button
              className="md:hidden flex items-center p-2 text-[#4d53f8] hover:text-yellow-100 focus:outline-none"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </nav>

          {/* Login button (hidden on mobile) */}
          <Link to="/dashboard">
            <button onClick={handleLogin}>
              <Button1 label={isLoggedIn ? "DASHBOARD" : "LOGIN"} />
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile menu (dropdown) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/90">
          <ul className="flex flex-col text-base font-medium">
            <li>
              <Link
                to="/"
                className="flex items-center px-4 py-3 text-[#4d53f8] hover:text-yellow-100"
              >
                <Home className="w-5 h-5 mr-2" />
                Home
              </Link>
            </li>
            <li>
              <button
                onClick={handleAiYogaToggle}
                className="flex items-center w-full px-4 py-3 text-[#4d53f8] hover:text-yellow-100 cursor-pointer"
              >
                <Activity className="w-5 h-5 mr-2" />
                AI Yoga
                <ChevronDown className="w-4 h-4 ml-auto" />
              </button>
              {aiYogaOpen && (
                <ul className="bg-black/95">
                  {AIYogaItems.map((item) => (
                    <li key={item.title}>
                      <Link
                        to={item.href}
                        className="flex items-center px-8 py-3 text-sm text-[#4d53f8] hover:text-yellow-100"
                      >
                        <item.icon className="w-5 h-5 mr-2" />
                        {item.title}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <button
                      onClick={handleExperimentalToggle}
                      className="flex items-center w-full px-8 py-3 text-sm text-[#4d53f8] hover:text-yellow-100 cursor-pointer"
                    >
                      <Activity className="w-5 h-5 mr-2" />
                      Specified Yoga
                      <ChevronDown className="w-4 h-4 ml-auto" />
                    </button>
                    {experimentalOpen && (
                      <ul className="bg-black/95">
                        {YogaExperimentalItems.map((item) => (
                          <li key={item.title}>
                            <Link
                              to={item.href}
                              className="flex items-center px-12 py-3 text-sm text-[#4d53f8] hover:text-yellow-100"
                            >
                              <item.icon className="w-5 h-5 mr-2" />
                              {item.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link
                to="/start"
                className="flex items-center px-4 py-3 text-[#4d53f8] hover:text-yellow-100"
              >
                <Calendar className="w-5 h-5 mr-2" />
                AI Yoga Training
              </Link>
            </li>
            <li>
              <Link
                to="/flowchart"
                className="flex items-center px-4 py-3 text-[#4d53f8] hover:text-yellow-100"
              >
                <FileText className="w-5 h-5 mr-2" />
                Ai Meal Planner
              </Link>
            </li>
            <li>
              <Link to="/dashboard">
                <button onClick={handleLogin}>
                  <Button1 label={isLoggedIn ? "DASHBOARD" : "LOGIN"} />
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
