'use client';

import { useState } from 'react';
import Image from 'next/image';
import QuizEngine from '@/components/QuizEngine';
import ResultsPage from '@/components/ResultsPage';

export default function Home() {
  const [selectedTier, setSelectedTier] = useState<null | 'free' | 'paid'>(null);
  const [quizScore, setQuizScore] = useState<number | null>(null);
  const [showPaidTooltip, setShowPaidTooltip] = useState(false);

  const handleReset = () => {
    setSelectedTier(null);
    setQuizScore(null);
  };

  return (
    <main className="relative min-h-screen text-white flex flex-col items-center justify-between p-6 overflow-hidden bg-[#0A0F1D]">
      
      {/* Patriotic Red, White, and Blue Flag Wave Background Effect */}
      <style jsx>{`
        @keyframes patrioticFlagWave {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .patriotic-flag-bg {
          background: linear-gradient(
            120deg, 
            rgba(15, 23, 42, 0.88) 0%, 
            rgba(29, 53, 87, 0.78) 25%, 
            rgba(255, 255, 255, 0.08) 50%, 
            rgba(168, 50, 50, 0.35) 75%, 
            rgba(15, 23, 42, 0.88) 100%
          );
          background-size: 300% 300%;
          animation: patrioticFlagWave 10s ease-in-out infinite;
        }
      `}</style>

      {/* Patriotic Background Layer */}
      <div className="absolute inset-0 patriotic-flag-bg pointer-events-none z-0"></div>

      {/* Content Layer */}
      <div className="relative z-10 w-full max-w-xl mx-auto pt-6 pb-2 text-center space-y-4">
        
        {/* Extremely Large Logo - Still / Non-Rotating */}
        <div className="flex justify-center mb-1 py-1">
          <div className="p-4 rounded-3xl bg-[#0B132B]/80 border-2 border-[#E9C46A]/60 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-md">
            <Image 
              src="/logo.png" 
              alt="App Logo" 
              width={300} 
              height={300} 
              className="w-64 h-64 md:w-72 md:h-72 object-contain mx-auto drop-shadow-2xl rounded-2xl"
              priority
            />
          </div>
        </div>

        {/* Catchphrases */}
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-white to-red-400 bg-clip-text text-transparent drop-shadow-sm">
          Find Your Flock
        </h1>
        <p className="text-xs md:text-sm text-slate-200 font-medium">
          Determine your political ideological perch with precision. No fluff, just facts.
        </p>
      </div>

      <div className="relative z-10 w-full flex-1 flex items-center justify-center py-2">
        {quizScore !== null ? (
          <ResultsPage score={quizScore} tier={selectedTier || 'free