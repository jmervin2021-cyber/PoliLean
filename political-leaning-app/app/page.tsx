'use client';

import { useState } from 'react';
import QuizEngine from '../components/QuizEngine';
import ResultsPage from '../components/ResultsPage';

export default function Home() {
  const [screen, setScreen] = useState<'welcome' | 'quiz' | 'results'>('welcome');
  const [score, setScore] = useState<number>(0);

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
            
            {/* Seamless Logo Fade Showcase (Compact Height) */}
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
                Answer 15 targeted questions to map your core political values, economic stances, and social perspectives.
              </p>
            </div>

            <div className="pt-1 w-full max-w-xs">
              <button
                onClick={() => setScreen('quiz')}
                className="w-full group relative inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold tracking-wide text-white bg-[#3A86EF] rounded-2xl overflow-hidden shadow-lg shadow-[#3A86EF]/25 hover:bg-blue-600 transition-all cursor-pointer border border-blue-400/30"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Start 15-Question Audit</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" suppressHydrationWarning>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        )}

        {screen === 'quiz' && (
          <QuizEngine onComplete={(finalScore) => { setScore(finalScore); setScreen('results'); }} />
        )}

        {screen === 'results' && (
          <ResultsPage score={score} onReset={() => setScreen('welcome')} />
        )}
      </div>

      {/* Footer */}
      <footer className="py-4 text-center border-t border-slate-800/60 text-xs text-slate-400 tracking-normal bg-[#0B132B]/30 font-medium">
        Find Your Flock • Zero Data Retention • Independent Civic Self-Discovery
      </footer>
    </main>
  );
}