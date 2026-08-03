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
      <header className="py-4 px-6 border-b border-slate-800/80 bg-[#0B132B]/80 backdrop-blur-md flex items-center justify-between sticky top-0 z-50 shadow-lg">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-[#1C2541] border border-[#3A86EF]/40 shadow-inner flex items-center justify-center overflow-hidden p-0.5">
            <img src="/logo.png" alt="Find Your Flock Emblem" className="w-full h-full object-contain rounded-lg" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-black text-sm uppercase tracking-widest text-[#F8F9FA] block leading-none">
                Find Your Flock
              </span>
              <span className="bg-[#D90429]/20 text-[#D90429] text-[9px] font-bold px-1.5 py-0.5 rounded border border-[#D90429]/40 tracking-wider font-mono">
                CORE v1.0
              </span>
            </div>
            <span className="text-[10px] text-slate-400 uppercase tracking-widest font-mono">
              Americana Civic Engine // Nesting Protocol
            </span>
          </div>
        </div>
        <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider hidden sm:inline-block border border-slate-700/60 px-3 py-1 rounded-md bg-[#1C2541]/40 shadow-sm">
          SYSTEM: ONLINE
        </span>
      </header>

      {/* Main Hero Container */}
      <div className="flex-grow flex items-center justify-center p-4 md:p-6 w-full">
        {screen === 'welcome' && (
          <div className="max-w-2xl w-full mx-auto text-center space-y-8 py-8 flex flex-col items-center">
            
            {/* Hero Logo Emblem Showcase - Seamless Background Fade */}
            <div className="relative inline-block group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#3A86EF] via-[#E9C46A] to-[#D90429] opacity-30 blur-2xl group-hover:opacity-50 transition-opacity rounded-full"></div>
              <div className="relative w-52 h-52 md:w-64 md:h-64 mx-auto flex items-center justify-center">
                <img 
                  src="/logo.png" 
                  alt="Find Your Flock Emblem" 
                  className="w-full h-full object-contain [mask-image:radial-gradient(circle_at_center,black_55%,transparent_90%)] [-webkit-mask-image:radial-gradient(circle_at_center,black_55%,transparent_90%)] transform transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
            </div>

            <div className="space-y-4 w-full">
              <span className="text-xs font-mono uppercase tracking-widest text-[#E9C46A] bg-[#E9C46A]/10 border border-[#E9C46A]/30 px-4 py-1.5 rounded-full inline-block shadow-inner">
  Independent Civic Self-Discovery
</span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#F8F9FA] tracking-tight leading-tight">
                Discover Your Place. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3A86EF] via-[#F8F9FA] to-[#E9C46A]">
                  Find Your Flock.
                </span>
              </h1>
              <p className="text-slate-400 text-sm md:text-base max-w-lg mx-auto leading-relaxed font-sans">
                An advanced civic analysis platform designed to scan your core philosophical trade-offs and nest you within your true political alignment.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setScreen('quiz')}
                className="group relative inline-flex items-center justify-center px-8 py-4 text-sm font-black uppercase tracking-wider text-white bg-[#3A86EF] rounded-full overflow-hidden shadow-lg shadow-[#3A86EF]/30 hover:bg-blue-600 transition-all cursor-pointer border border-[#3A86EF]"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Initiate 15-Question Nesting Audit</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" suppressHydrationWarning>
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
      <footer className="py-4 text-center border-t border-slate-800/80 text-[11px] font-mono text-slate-500 uppercase tracking-widest bg-[#0B132B]/40">
        FIND YOUR FLOCK • ZERO-KNOWLEDGE LOCAL ANALYSIS • ALL RIGHTS RESERVED
      </footer>
    </main>
  );
}