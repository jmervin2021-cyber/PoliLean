'use client';

import { useState } from 'react';
import QuizEngine from '../components/QuizEngine';
import ResultsPage from '../components/ResultsPage';

export default function Home() {
  const [screen, setScreen] = useState('welcome');
  const [score, setScore] = useState(0);

  return (
    <main className="min-h-screen bg-[#0B132B] flex flex-col justify-between text-[#F8F9FA]">
      {/* Header with Eagle & Nest Motif */}
      <header className="py-4 px-6 border-b border-slate-800 bg-[#070B19]/50 backdrop-blur-md flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full bg-[#3A86EF]/10 border border-[#3A86EF]/30 flex items-center justify-center text-[#3A86EF]">
            {/* Eagle / Civic Crest Icon */}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" suppressHydrationWarning>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
          </div>
          <div>
            <span className="font-black text-sm uppercase tracking-widest text-[#F8F9FA] block leading-none">Find Your Flock</span>
            <span className="text-[10px] text-slate-400 uppercase tracking-wider">Civic Alignment & Nesting Engine</span>
          </div>
        </div>
        <span className="text-[11px] uppercase tracking-wider text-slate-400 hidden sm:inline">Non-Partisan Edition</span>
      </header>

      {/* Main Container */}
      <div className="flex-grow flex items-center justify-center p-4">
        {screen === 'welcome' && (
          <div className="max-w-xl mx-auto text-center space-y-6 py-8">
            <div className="inline-block p-4 rounded-3xl bg-[#3A86EF]/10 border border-[#3A86EF]/30 text-[#3A86EF] mb-2 shadow-inner">
              {/* Sovereign Eagle Feather / Nest Badge Icon */}
              <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24" suppressHydrationWarning>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#F8F9FA] tracking-tight leading-tight">
              Discover Your Alignment. <br />
              <span className="text-[#3A86EF]">Find Your Flock.</span>
            </h1>
            <p className="text-slate-400 text-sm md:text-base max-w-md mx-auto leading-relaxed">
              An objective, data-driven educational assessment mapping your ideological home among the broader American political spectrum.
            </p>
            <div className="pt-2">
              <button
                onClick={() => setScreen('quiz')}
                className="bg-[#3A86EF] hover:bg-blue-600 text-white font-extrabold px-8 py-4 rounded-full shadow-lg transition-all uppercase text-sm tracking-wider cursor-pointer border border-[#3A86EF]/40"
              >
                Start Free 15-Question Audit
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
      <footer className="py-4 text-center border-t border-slate-800 text-[11px] text-slate-500 uppercase tracking-widest bg-[#070B19]/30">
        Find Your Flock • Zero Data Retention • Non-Partisan Civic Engine
      </footer>
    </main>
  );
}