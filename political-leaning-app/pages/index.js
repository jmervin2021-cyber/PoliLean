import { useState } from 'react';
import QuizEngine from '../components/QuizEngine';
import ResultsPage from '../components/ResultsPage';

export default function Home() {
  const [screen, setScreen] = useState('welcome'); // 'welcome' | 'quiz' | 'results'
  const [finalScore, setFinalScore] = useState(0);

  const handleQuizComplete = (score) => {
    setFinalScore(score);
    setScreen('results');
  };

  return (
    <main className="min-h-screen bg-navy flex flex-col justify-between text-silver">
      {/* Top Navigation / Institutional Monogram Header */}
      <header className="w-full border-b border-slate-800 py-4 px-6 flex justify-between items-center bg-navy-dark/50 backdrop-blur-md">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-vanguard"></div>
          <span className="font-extrabold tracking-widest text-sm uppercase text-silver">CivicSpectrum // Audit Hub</span>
        </div>
        <span className="text-xs uppercase tracking-wider text-slate-400">Institutional Non-Partisan Edition</span>
      </header>

      {/* Dynamic Screen Container */}
      <div className="flex-grow flex items-center justify-center p-4">
        {screen === 'welcome' && (
          <div className="max-w-xl mx-auto text-center space-y-6 py-12 animate-fade-in">
            <div className="inline-block p-3 rounded-2xl bg-liberty/10 border border-liberty/30 text-liberty mb-2">
              <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-silver tracking-tight">
              Discover Where You Stand. <br />
              <span className="text-liberty">Understand Where We're Headed.</span>
            </h1>
            <p className="text-slate-400 text-base md:text-lg max-w-lg mx-auto leading-relaxed">
              An objective, non-partisan educational guide to modern political philosophy and institutional trade-offs. Built with zero-knowledge local privacy.
            </p>
            <div className="pt-4">
              <button
                onClick={() => setScreen('quiz')}
                className="bg-liberty hover:bg-blue-600 text-silver font-extrabold px-8 py-4 rounded-full shadow-lg hover:shadow-liberty/25 transition-all uppercase tracking-wider text-sm"
              >
                Start Free 15-Question Audit
              </button>
            </div>
          </div>
        )}

        {screen === 'quiz' && (
          <QuizEngine onComplete={handleQuizComplete} />
        )}

        {screen === 'results' && (
          <ResultsPage score={finalScore} onReset={() => setScreen('welcome')} />
        )}
      </div>

      {/* Footer */}
      <footer className="w-full text-center py-6 border-t border-slate-800 text-xs text-slate-500 uppercase tracking-widest bg-navy-dark/30">
        Secure Local Processing • Zero Data Retention • Non-Partisan Civic Engine
      </footer>
    </main>
  );
}