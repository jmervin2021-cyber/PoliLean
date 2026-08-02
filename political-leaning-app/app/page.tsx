"use client";
import { useState } from "react";
import QuizEngine from "../components/QuizEngine";
import ResultsPage from "../components/ResultsPage";

export default function Home() {
  const [isQuizComplete, setIsQuizComplete] = useState(false);
  const [finalScore, setFinalScore] = useState(0);

  const handleQuizComplete = (score: number) => {
    setFinalScore(score);
    setIsQuizComplete(true);
  };

  return (
    <main className="bg-midnightNavy min-h-screen">
      {!isQuizComplete ? (
        <QuizEngine onComplete={handleQuizComplete} />
      ) : (
        <ResultsPage finalScore={finalScore} />
      )}
    </main>
  );
}