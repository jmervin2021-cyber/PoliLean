export default function ResultsPage({ score, onReset }) {
  const tier = score < 0 ? "Center-Left Reformist" : score > 0 ? "Center-Right Pragmatist" : "Institutional Center";
  const description =
    score < 0
      ? "Your answers show a preference for stronger public oversight and collective economic safeguards."
      : score > 0
      ? "Your answers show a preference for market flexibility, individual choice, and practical national defense."
      : "Your answers show a balanced stance between civic institutions and personal freedom.";

  return (
    <div className="max-w-3xl mx-auto rounded-[32px] border border-slate-800 bg-slate-950/90 p-10 shadow-[0_32px_80px_rgba(0,0,0,0.35)] text-slate-100">
      <div className="space-y-6 text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-liberty">Audit complete</p>
        <h1 className="text-3xl font-semibold sm:text-4xl">Your placement on the spectrum</h1>
        <div className="mx-auto inline-flex rounded-full border border-liberty/30 bg-liberty/15 px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-liberty">
          {tier}
        </div>
        <p className="mx-auto max-w-2xl text-slate-400 leading-8">{description}</p>
      </div>
      <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-900/95 p-6 text-left text-slate-300 shadow-inner">
        <h2 className="text-sm uppercase tracking-[0.35em] text-slate-400">What this means</h2>
        <p className="mt-4 text-sm leading-7">
          This fast audit provides a high-level reflection of your views. It is designed for clarity and quick insight, not a detailed political classification.
        </p>
      </div>
      <button
        onClick={onReset}
        className="mt-10 w-full rounded-full bg-liberty px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-slate-950 transition hover:bg-blue-500"
      >
        Retake audit
      </button>
    </div>
  );
}
