'use client';

import { useState } from 'react';

export default function Home() {
  const [result, setResult] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Send data to your Next.js backend
    const response = await fetch('/api/evaluate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sampleAnswer: 'Yes' }) 
    });

    const data = await response.json();
    setResult(data.leaning);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">PoliLean Assessment</h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <p className="text-gray-600">Do you believe in standard policy approach X?</p>
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
          >
            Calculate Leaning
          </button>
        </form>

        {result && (
          <div className="mt-6 p-4 bg-gray-100 rounded text-center">
            <h2 className="font-semibold text-gray-700">Estimated Result:</h2>
            <p className="text-xl font-bold text-blue-600">{result}</p>
          </div>
        )}
      </div>
    </main>
  );
}