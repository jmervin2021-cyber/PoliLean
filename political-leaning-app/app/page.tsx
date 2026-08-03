"use client";

import QuizEngine from "../components/QuizEngine";
import ResultsPage from "../components/ResultsPage";
import { useState } from "react";

export default function Home() {
  const [screen, setScreen] = useState("welcome");
  const [score, setScore] = useState(0);

  return (
    <main className="min-h-screen bg-navy flex flex-col justify-between text-silver">
      <header className="py-6 px-6 border-b border-slate-800 bg-navy-dark/70 backdrop-blur-sm flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="w-3 h-3 rounded-full bg-vanguard shadow-glow"></span>
          <div>
            <p className="text-xs uppercase tracking-widest text-slate-400">CivicSpectrum</p>
            <h1 className="text-2xl font-extrabold text-silver">Political Leaning Audit</h1>
          </div>
        </div>
        <p className="text-sm text-slate-400 max-w-xl">
          A quick 5-question nonpartisan audit to help you explore where your views land on modern political and economic principles.
        </p>
      </header>

      <section className="flex-grow flex items-center justify-center p-6">
        {screen === "welcome" && (
          <div className="max-w-3xl rounded-[32px] border border-slate-800 bg-navy-dark/80 p-10 shadow-2xl shadow-slate-950/30">
            <div className="space-y-6 text-center">
              <p className="text-sm uppercase tracking-[0.35em] text-liberty">Start your audit</p>
              <h2 className="text-4xl font-extrabold text-silver sm:text-5xl">
                Discover your political leaning with a short civic audit.
              </h2>
              <p className="mx-auto max-w-2xl text-slate-400 text-base leading-8">
                Answer a handful of questions on policy, governance, social order, and foreign affairs to see where your values fall on the spectrum.
              </p>
              <button
                onClick={() => setScreen("quiz")}
                className="inline-flex items-center justify-center rounded-full bg-liberty px-10 py-4 text-sm font-bold uppercase tracking-widest text-silver transition hover:bg-blue-600"
              >
                Begin Audit
              </button>
            </div>
          </div>
        )}

        {screen === "quiz" && (
          <QuizEngine
            onComplete={(finalScore) => {
              setScore(finalScore);
              setScreen("results");
            }}
          />
        )}

        {screen === "results" && <ResultsPage score={score} onReset={() => setScreen("welcome")} />}
      </section>

      <footer className="py-5 text-center border-t border-slate-800 bg-navy-dark/70 text-xs uppercase tracking-widest text-slate-500">
        Secure Local Processing • Non-Partisan Civic Engine • Powered by your answers
      </footer>
    </main>
  );
}
