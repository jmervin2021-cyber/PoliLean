// app/page.tsx
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
          <ResultsPage score={quizScore} tier={selectedTier || 'free'} onReset={handleReset} />
        ) : selectedTier === null ? (
          <div className="max-w-md w-full p-8 rounded-2xl bg-[#0B132B]/95 border border-slate-700/80 shadow-2xl backdrop-blur-md text-center space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] font-mono text-[#E9C46A] uppercase tracking-widest bg-[#E9C46A]/10 px-3 py-1 rounded-full border border-[#E9C46A]/20">
                Ideological Assessment
              </span>
              <h2 className="text-2xl font-bold text-white">Select Your Analysis Tier</h2>
              <p className="text-xs text-slate-300 leading-relaxed">
                Choose a rapid 10-question quick scan or unlock the comprehensive 50-question deep-dive analysis.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <button
                onClick={() => setSelectedTier('free')}
                className="w-full py-3.5 px-4 rounded-xl bg-[#3A86EF] hover:bg-[#3A86EF]/80 text-white font-semibold text-sm transition-all shadow-lg cursor-pointer flex items-center justify-between"
              >
                <span>Free Tier (10 Questions)</span>
                <span className="text-xs font-mono opacity-90">Quick Scan →</span>
              </button>

              {/* Paid Tier Container with Hover Pop-up Detail Window */}
              <div 
                className="relative"
                onMouseEnter={() => setShowPaidTooltip(true)}
                onMouseLeave={() => setShowPaidTooltip(false)}
              >
                <button
                  onClick={() => setSelectedTier('paid')}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#1C2541] hover:bg-[#232F52] border border-slate-600 text-[#E9C46A] font-semibold text-sm transition-all shadow-md cursor-pointer flex items-center justify-between"
                >
                  <span>Paid Tier (50 Questions)</span>
                  <span className="text-xs font-mono opacity-90 flex items-center space-x-1">
                    <span>Pro Analysis</span> <span>🔒</span>
                  </span>
                </button>

                {/* HOVER POP-UP WINDOW SHOWING ALL ADVANTAGES */}
                {showPaidTooltip && (
                  <div className="absolute left-0 right-0 bottom-full mb-3 z-30 p-4 rounded-xl bg-[#070B19]/95 border border-[#E9C46A]/60 shadow-2xl backdrop-blur-md text-left space-y-2.5 animate-in fade-in zoom-in-95 duration-150 pointer-events-none">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-1.5">
                      <span className="text-[10px] font-mono text-[#E9C46A] uppercase tracking-wider font-bold">
                        💎 Pro Tier Feature Breakdown
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">Hover to Preview</span>
                    </div>
                    
                    <ul className="space-y-1.5 text-[11px] text-slate-200 font-medium">
                      <li className="flex items-center space-x-2">
                        <span className="text-[#E9C46A]">✓</span>
                        <span><strong>50 Granular Policy Items:</strong> Deep multi-axis tracking.</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="text-[#E9C46A]">✓</span>
                        <span><strong>Historical Archetypes:</strong> Match with statesmen & thinkers.</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="text-[#E9C46A]">✓</span>
                        <span><strong>Global Country Mappings:</strong> See international policy peers.</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="text-[#E9C46A]">✓</span>
                        <span><strong>11 Sub-Ideology Tiers:</strong> Hyper-precise political classification.</span>
                      </li>
                    </ul>

                    <div className="text-[10px] text-slate-400 italic pt-1 border-t border-slate-800/80 text-center">
                      Click to unlock with password access.
                    </div>
                  </div>
                )}
              </div>

            </div>
          </div>
        ) : (
          <QuizEngine tier={selectedTier} onComplete={(score:number) => setQuizScore(score)} />
        )}
      </div>

      <footer className="relative z-10 text-center text-[10px] text-slate-300 py-4">
        Political Alignment Engine &copy; 2026
      </footer>
    </main>
  );
}