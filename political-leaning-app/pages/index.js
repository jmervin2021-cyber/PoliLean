import { useState } from 'react';
import QuizEngine from '../components/QuizEngine';
import ResultsPage from '../components/ResultsPage';

export default function Home() {
  const [screen, setScreen] = useState('welcome');
  const [score, setScore] = useState(0);

  return (
    <main className="min-h-screen bg-navy flex flex-col justify-between text-silver">
      <header className="py-4 px-6 border-b border-slate-800 bg-navy-dark/50 flex items-center space-x-2">
        <div className="w-3 h-3 rounded-full bg-vanguard"></div>
        <span className="font-extrabold text-sm uppercase tracking-widest text-silver">CivicSpectrum // Dashboard</span>
      </header>

      <div className="flex-grow flex items-center justify-center p-4">
        {screen === 'welcome' && (
          <div className="max-w-xl text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-silver tracking-tight">
              Discover Where You Stand. <br />
              <span className="text-liberty">Understand Where We're Headed.</span>
            </h1>
            <p className="text-slate-400 text-sm md:text-base">
              An institutional, non-partisan educational guide to modern political philosophy.
            </p>
            <button
              onClick={() => setScreen('quiz')}
              className="bg-liberty hover:bg-blue-600 text-silver font-extrabold px-8 py-4 rounded-full shadow-lg uppercase text-sm tracking-wider transition-all"
            >
              Start Free 15-Question Audit
            </button>
          </div>
        )}

        {screen === 'quiz' && (
          <QuizEngine onComplete={(finalScore) => { setScore(finalScore); setScreen('results'); }} />
        )}

        {screen === 'results' && (
          <ResultsPage score={score} onReset={() => setScreen('welcome')} />
        )}
      </div>

      <footer className="py-4 text-center border-t border-slate-800 text-xs text-slate-500 uppercase tracking-widest bg-navy-dark/30">
        Secure Local Processing • Non-Partisan Civic Engine
      </footer>
    </main>
  );