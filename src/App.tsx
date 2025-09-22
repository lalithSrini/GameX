import React from 'react';
import { Brain, Gamepad2, Sparkles, Zap } from 'lucide-react';
import {
  Routes,
  Route,
  NavLink,
  Navigate,
  useNavigate,
  useLocation,
  BrowserRouter
} from "react-router-dom";


function App() {

  return (
    <BrowserRouter basename="/GameX">


      <Routes  >
        <Route path="/" element={<MyApp />} />
      </Routes>

    </BrowserRouter>

  );

}


function MyApp() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-pink-900">

      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-pink-600/20 animate-pulse"></div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full opacity-20 animate-float-slow"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-25 animate-float-medium"></div>
        <div className="absolute bottom-32 left-32 w-40 h-40 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full opacity-15 animate-float-fast"></div>
        <div className="absolute bottom-40 right-20 w-28 h-28 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full opacity-20 animate-float-slow"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 transform rotate-45 opacity-30 animate-spin-slow"></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 transform rotate-12 opacity-25 animate-bounce-slow"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4 text-center">
        {/* GAMEX Header */}
        <div className="mb-16">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-4 tracking-wider">
            <span className="bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 to-blue-500 bg-clip-text text-transparent animate-gradient-x">
              GAMEX
            </span>
          </h1>
          <div className="flex items-center justify-center gap-2 text-lg sm:text-xl text-white/80 font-medium">
            <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
            <span>Gamified Online Examination & Learning System</span>
            <Zap className="w-6 h-6 text-blue-400 animate-pulse" />
          </div>
        </div>

        {/* Quiz Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 w-full max-w-2xl">
          {/* Normal Quiz Button */}
          <a
            href="https://lalithsrini.github.io/ONE-HEALTH/"
            className="group relative flex-1 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Normal Quiz</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Test your knowledge with our comprehensive quiz featuring various topics and difficulty levels
              </p>
              <div className="mt-4 flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-100"></div>
                <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse delay-200"></div>
              </div>
            </div>
          </a>

          {/* Gaming Quiz Button */}
          <a
            href="https://lalithsrini.github.io/kidlearn/"
            className="group relative flex-1 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/25"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-orange-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="bg-gradient-to-r from-pink-500 to-orange-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Gamepad2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Gaming Quiz</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Challenge yourself with gaming trivia, esports knowledge, and video game history questions
              </p>
              <div className="mt-4 flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse delay-100"></div>
                <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse delay-200"></div>
              </div>
            </div>
          </a>
        </div>

        {/* Additional Interactive Elements */}
        <div className="mt-12 text-white/60 text-sm">
          <p className="mb-2">Choose your adventure and start your quiz journey</p>
          <div className="flex items-center justify-center gap-4">
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
            <span>✨</span>
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Custom Styles for Animations */}
      <style >{`
        @keyframes gradient-x {
          0%, 100% { background-size: 200% 200%; background-position: left center; }
          50% { background-size: 200% 200%; background-position: right center; }
        }
        @keyframes float-slow { 0%,100%{transform:translateY(0) rotate(0deg);}50%{transform:translateY(-20px) rotate(180deg);} }
        @keyframes float-medium { 0%,100%{transform:translateY(0) rotate(0deg);}50%{transform:translateY(-15px) rotate(90deg);} }
        @keyframes float-fast { 0%,100%{transform:translateY(0) rotate(0deg);}50%{transform:translateY(-10px) rotate(270deg);} }
        @keyframes spin-slow { from{transform:rotate(45deg);}to{transform:rotate(405deg);} }
        @keyframes bounce-slow { 0%,100%{transform:rotate(12deg) translateY(0);}50%{transform:rotate(12deg) translateY(-10px);} }
      `}</style>
    </div>
  );
}

export default MyApp;
