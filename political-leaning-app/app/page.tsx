'use client';

import { useState } from 'react';
import MechanicalEagleLogo from '../components/MechanicalEagleLogo';
import QuizEngine from '../components/QuizEngine';
import ResultsPage from '../components/ResultsPage';

export default function Home() {
  const [screen, setScreen] = useState<'welcome' | 'quiz' | 'results'>('welcome');
  const [score, setScore] = useState<number>(0);

  return (
    <main className="min-h-screen bg-[#070B19] flex flex-col justify-between text-[#F8F9FA] selection:bg-[#3A86EF] selection:text-white">
      {/* Header */}
      <header className="py-4 px-6 border-b border-slate-800/80 bg-[#0B132B]/70 backdrop-blur-md flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center space-x-3.5">
          <div className="p-1.5 rounded-xl bg-[#1C2541] border border-[#3A86EF]/30 shadow-md">
            <MechanicalEagleLogo className="w-7 h-7" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-black text-base uppercase tracking-widest text-[#F8F9FA] block leading-none">
                Find Your Flock
              </span>
              <span className="bg-[#D90429]/20 text-[#D90429] text-[9px] font-bold px-1.5 py-0.5 rounded border border-[#D90429]/40 tracking-wider">
                SYSTEM V1.0
              </span>
            </div>
            <span className="text-[10px] text-slate-400 uppercase tracking-widest font-mono">
              Americana Civic Engine // Nesting Protocol
            </span>
          </div>
        </div>
        <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider hidden sm:inline-block border border-slate-700/60 px-3 py-1 rounded-md bg-[#1C2541]/40">
          STATUS: ONLINE
        </span>
      </header>

      {/* Main Container */}
      <div className="flex-grow flex items-center justify-center p-4 md:p-6">
        {screen === 'welcome' && (
          <div className="max-w-2xl mx-auto text-center space-y-8 py-8">
            
            {/* Center Hero Logo Badge */}
            <div className="relative inline-block">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#3A86EF] via-[#E9C46A] to-[#D90429] opacity-30 blur-lg"></div>
              <div className="relative p-6 rounded-3xl bg-[#0B132B] border-2 border-[#3A86EF]/40 shadow-2xl inline-flex items-center justify-center">
                <MechanicalEagleLogo className="w-20 h-20" />
              </div>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#E9C46A] bg-[#E9C46A]/10 border border-[#E9C46A]/30 px-3.5 py-1 rounded-full">
                Non-Partisan Ideological Mapping
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#F8F9FA] tracking-tight leading-tight">
                Discover Your Place. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3A86EF] via-[#F8F9FA] to-[#D90429]">
                  Find Your Flock.
                </span>
              </h1>
              <p className="text-slate-400 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
                An advanced civic analysis platform designed to map your core philosophical values and nest you within your true political alignment.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setScreen('quiz')}
                className="group relative inline-flex items-center justify-center px-8 py-4 text-sm font-black uppercase tracking-wider text-white bg-[#3A86EF] rounded-full overflow-hidden shadow-lg shadow-[#3A86EF]/25 hover:bg-blue-600 transition-all cursor-pointer border border-[#3A86EF]"
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