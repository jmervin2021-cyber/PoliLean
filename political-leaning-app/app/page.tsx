"use client";
import { useState } from "react";
import QuizEngine from "@/components/QuizEngine";
import ResultsPage from "@/components/ResultsPage";

export default function Home() {
  const [isQuizComplete, setIsQuizComplete] = useState(false);
  const [finalScore, setFinalScore] = useState(0);

  const handleQuizComplete = (score: number) => {
    setFinalScore(score);
    setIsQuizComplete(true);
  };

  return (
    <main className="min-h-screen bg-midnightNavy text-white flex flex-col justify-between selection:bg-libertyBlue selection:text-white">
      <div className="w-full flex-1 flex flex-col justify-center">
        {!isQuizComplete ? (
          <QuizEngine onComplete={handleQuizComplete} />
        ) : (
          <ResultsPage finalScore={finalScore} />
        )}
      </div>
    </main>
  );
}