"use client";

import QuizEngine from "../components/QuizEngine";
import ResultsPage from "../components/ResultsPage";
import { useState } from "react";

export default function Home() {
  const [screen, setScreen] = useState("welcome");
  const [score, setScore] = useState(0);

  return (
    <main className="min-h-screen bg-[#09121c] text-slate-100">
      <header className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-6 rounded-[32px] border border-slate-800 bg-slate-950/80 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.35em] text-slate-400">CivicSpectrum Audit</p>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-100 sm:text-5xl">
              A clear, modern assessment of your political perspective.
            </h1>
            <p className="max-w-2xl text-slate-400 leading-8">
              A concise five-question survey that uses everyday language to reflect your views on economy, government, personal freedom, and global engagement.
            </p>
          </div>
          <div className="rounded-[28px] border border-slate-800 bg-slate-900/95 p-6 text-slate-200 shadow-lg">
            <p className="text-xs uppercase tracking-[0.35em] text-liberty">Why it works</p>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
              <li>• Neutral wording for honest answers.</li>
              <li>• Fast completion in under a minute.</li>
              <li>• Results designed for self-reflection, not persuasion.</li>
            </ul>
          </div>
        </div>
      </header>

      <section className="mx-auto flex max-w-7xl flex-col gap-8 px-6 pb-12 sm:px-8 lg:px-12">
        {screen === "welcome" ? (
          <div className="rounded-[32px] border border-slate-800 bg-slate-950/80 p-10 shadow-xl">
            <div className="space-y-8 text-center">
              <p className="text-sm uppercase tracking-[0.35em] text-liberty">Quick civic audit</p>
              <h2 className="text-3xl font-semibold text-slate-100 sm:text-4xl">
                Understand where your priorities line up with a fast, balanced assessment.
              </h2>
              <p className="mx-auto max-w-2xl text-slate-400 leading-8">
                This short survey is built to capture your views with straightforward statements and easy-to-understand response options.
              </p>
              <button
                onClick={() => setScreen("quiz")}
                className="inline-flex rounded-full bg-liberty px-10 py-4 text-sm font-semibold uppercase tracking-widest text-slate-950 transition hover:bg-blue-500"
              >
                Start the audit
              </button>
            </div>
          </div>
        ) : screen === "quiz" ? (
          <QuizEngine
            onComplete={(finalScore) => {
              setScore(finalScore);
              setScreen("results");
            }}
          />
        ) : (
          <ResultsPage score={score} onReset={() => setScreen("welcome")} />
        )}
      </section>

      <footer className="border-t border-slate-800 bg-slate-950/90 py-6 text-center text-xs uppercase tracking-[0.3em] text-slate-500">
        Your answers stay local — this is a self-reflection tool, not political advocacy.
      </footer>
    </main>
  );
}
