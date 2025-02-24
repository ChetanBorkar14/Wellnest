import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import bgvideo from "/bgvideo.gif";
import Button1 from "../ui/Button1";

export default function HeroSection() {
  const phrases = [
    "Transform Your Health Journey",
    "Track Fitness & Wellness",
    "Your Personal Health Companion",
  ];
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseDuration = isDeleting ? 500 : 2000;

    const handleTyping = () => {
      if (!isDeleting && text.length === currentPhrase.length) {
        setTimeout(() => setIsDeleting(true), pauseDuration);
      } else if (isDeleting && text.length === 0) {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      } else {
        setText((prev) =>
          isDeleting
            ? prev.slice(0, -1)
            : currentPhrase.slice(0, prev.length + 1)
        );
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, phraseIndex, isDeleting]);

  return (
    <div
      className="relative py-20"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${bgvideo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container max-w-7xl mx-auto px-6 lg:px-8 relative grid min-h-[80vh] grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* Left Section */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl xl:text-6xl text-white">
              WellNest Health <span className="text-blue-500">Tracker</span>
            </h1>
            <p className="max-w-[600px] text-lg text-slate-300">
              {text}
              <span className="animate-pulse text-blue-500">|</span>
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button1 label="Start your journey">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2 mb-0.5 inline-block h-5 w-5"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Button1>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-500"
            >
              Learn More
            </Button>
          </div>
          <div className="flex flex-col gap-2 text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-blue-500" />
              <span>AI-Powered Yoga</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-blue-500" />
              <span>24/7 Access</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-blue-500" />
              <span>Secure Records</span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative">
          <div className="absolute -left-12 -top-12 -right-12 -bottom-12 bg-blue-500/10 blur-3xl rounded-full"></div>
          <Card className="relative overflow-hidden bg-slate-900/60 border-slate-800 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-full bg-blue-500 text-white flex items-center justify-center text-2xl">
                  🧘
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    AI Yoga Session
                  </h3>
                  <p className="text-sm text-slate-400">
                    Start your wellness journey
                  </p>
                </div>
              </div>
              <div className="h-32 rounded-lg bg-slate-800/50 flex items-center justify-center text-5xl text-slate-400">
                🧘
              </div>
              <div className="mt-4 flex justify-end">
                <Link to="/start">
                  <Button size="sm" className="bg-blue-500 hover:bg-blue-600">
                    Try NOW
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
