// app/page.tsx
'use client';

import { useState } from 'react';
import QuizEngine from '../components/QuizEngine';
import ResultsPage from '../components/ResultsPage';

export default function Home() {
  const [screen, setScreen] = useState<'welcome' | 'quiz' | 'results'>('welcome');
  const [score, setScore] = useState<number>(0);
  const [selectedTier, setSelectedTier] = useState<string>('free');

  return (
    <main className="min-h-screen bg-[#070B19] flex flex-col justify-between text-[#F8F9FA] selection:bg-[#3A86EF] selection:text-white">
      {/* Header */}
      <header className="py-3 px-6 md:px-12 border-b border-slate-800/60 bg-[#0B132B]/60 backdrop-blur-md flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-xl bg-[#1C2541]/80 border border-slate-700/80 flex items-center justify-center overflow-hidden p-0.5 shadow-sm">
            <img src="/logo.png" alt="Find Your Flock Emblem" className="w-full h-full object-contain rounded-lg" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-bold text-sm tracking-wide text-[#F8F9FA] block leading-tight">
                Find Your Flock
              </span>
              <span className="bg-[#3A86EF]/15 text-[#3A86EF] text-[10px] font-semibold px-2 py-0.5 rounded-full border border-[#3A86EF]/30 tracking-wide">
                v1.0
              </span>
            </div>
            <span className="text-[11px] text-slate-400 font-medium tracking-normal block">
              Independent Civic Self-Discovery
            </span>
          </div>
        </div>
        <span className="text-xs font-medium text-slate-400 tracking-wide hidden sm:inline-block border border-slate-800 px-3.5 py-1.5 rounded-full bg-[#1C2541]/30">
          Secure & Private
        </span>
      </header>

      {/* Main Hero Container */}
      <div className="flex-grow flex items-center justify-center p-4 md:p-6 w-full">
        {screen === 'welcome' && (
          <div className="max-w-xl w-full mx-auto text-center space-y-5 py-4 flex flex-col items-center">
            
            {/* Seamless Logo Fade Showcase */}
            <div className="relative inline-block group -mb-2">
              <div className="absolute inset-0 bg-gradient-to-r from-[#3A86EF]/20 via-[#E9C46A]/20 to-[#D90429]/20 opacity-40 blur-2xl rounded-full"></div>
              <div className="relative w-36 h-36 md:w-44 md:h-44 mx-auto flex items-center justify-center">
                <img 
                  src="/logo.png" 
                  alt="Find Your Flock Emblem" 
                  className="w-full h-full object-contain [mask-image:radial-gradient(circle_at_center,black_60%,transparent_90%)] [-webkit-mask-image:radial-gradient(circle_at_center,black_60%,transparent_90%)] transform transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
            </div>

            <div className="space-y-3 w-full">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#1C2541]/60 border border-slate-700/60 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#3A86EF]"></span>
                <span className="text-xs font-medium text-slate-300 tracking-wide">
                  Independent Civic Self-Discovery
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F8F9FA] tracking-tight leading-[1.15]">
                Chart Your Path. <br />
                <span className="text-[#F8F9FA]">
                  Build Your Perch.
                </span>
              </h1>
              
              <p className="text-slate-300 text-sm md:text-base max-w-md mx-auto leading-relaxed font-normal">
                Help map your core political values, economic stances, and social perspectives by choosing your depth of analysis.
              </p>
            </div>

            {/* Tier Selection Card CTAs on Welcome Screen */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full pt-1">
              {/* Free Tier Action */}
              <button
                onClick={() => { setSelectedTier('free'); setScreen('quiz'); }}
                className="group p-4 rounded-2xl bg-[#0B132B]/90 border border-slate-700/70 hover:border-[#3A86EF] transition-all text-left space-y-2 cursor-pointer shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[10px] font-semibold text-[#3A86EF] uppercase tracking-wider bg-[#3A86EF]/10 px-2 py-0.5 rounded border border-[#3A86EF]/20">
                      Free Tier
                    </span>
                    <span className="text-xs font-bold text-white">7 Questions</span>
                  </div>
                  <p className="text-xs text-slate-400">Covers 5 core political belief systems with a fast baseline scan.</p>
                </div>
                <div className="text-xs font-semibold text-[#3A86EF] flex items-center space-x-1 pt-1">
                  <span>Start Quick Assessment</span>
                  <span>→</span>
                </div>
              </button>

              {/* Paid Tier Action */}
              <button
                onClick={() => { setSelectedTier('paid'); setScreen('quiz'); }}
                className="group p-4 rounded-2xl bg-[#0B132B]/90 border border-[#E9C46A]/40 hover:border-[#E9C46A] transition-all text-left space-y-2 cursor-pointer shadow-md relative overflow-hidden flex flex-col justify-between"
              >
                <div className="absolute top-0 right-0 bg-[#E9C46A] text-[#070B19] text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-bl">
                  Deep Dive
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[10px] font-semibold text-[#E9C46A] uppercase tracking-wider bg-[#E9C46A]/10 px-2 py-0.5 rounded border border-[#E9C46A]/20">
                      Paid Tier
                    </span>
                    <span className="text-xs font-bold text-white">50 Questions</span>
                  </div>
                  <p className="text-xs text-slate-400">11 systems, historical counterparts, origins, & global mapping.</p>
                </div>
                <div className="text-xs font-semibold text-[#E9C46A] flex items-center space-x-1 pt-1">
                  <span>Unlock Full Audit</span>
                  <span>→</span>
                </div>
              </button>
            </div>
          </div>
        )}

        {screen === 'quiz' && (
          <QuizEngine tier={selectedTier} onComplete={(finalScore) => { setScore(finalScore); setScreen('results'); }} />
        )}

        {screen === 'results' && (
          <ResultsPage score={score} tier={selectedTier} onReset={() => setScreen('welcome')} />
        )}
      </div>

      {/* Footer */}
      <footer className="py-4 text-center border-t border-slate-800/60 text-xs text-slate-400 tracking-normal bg-[#0B132B]/30 font-medium">
        Find Your Flock • Zero Data Retention • Independent Civic Self-Discovery
      </footer>
    </main>
  );
}