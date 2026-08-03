// components/QuizEngine.js
'use client';

import { useState } from 'react';

export default function QuizEngine({ tier = 'free', onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isUnlocked, setIsUnlocked] = useState(tier === 'free');
  const [passwordInput, setPasswordInput] = useState('');
  const [errorMsg, setErrorMsg] = useState(false);

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (passwordInput === 'perch2026') {
      setIsUnlocked(true);
      setErrorMsg(false);
    } else {
      setErrorMsg(true);
    }
  };

  if (tier === 'paid' && !isUnlocked) {
    return (
      <div className="max-w-md w-full mx-auto p-6 md:p-8 rounded-2xl bg-[#0B132B]/90 border border-[#E9C46A]/40 shadow-xl space-y-6 text-center">
        <div className="space-y-2">
          <span className="text-[10px] font-mono text-[#E9C46A] uppercase tracking-wider bg-[#E9C46A]/10 px-2.5 py-1 rounded border border-[#E9C46A]/20">
            Locked Tier
          </span>
          <h2 className="text-xl font-bold text-white">50-Question Audit Access</h2>
          <p className="text-xs text-slate-400 leading-relaxed">
            This comprehensive tier is currently restricted. Enter the access password to proceed.
          </p>
        </div>

        <form onSubmit={handlePasswordSubmit} className="space-y-4">
          <div>
            <input 
              type="password"
              placeholder="Enter Access Password..."
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[#1C2541]/80 border border-slate-700 text-sm text-white focus:outline-none focus:border-[#E9C46A] transition-colors text-center font-mono"
            />
            {errorMsg && (
              <p className="text-[11px] text-red-400 mt-1.5">Incorrect password. Please try again.</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 text-sm font-semibold text-[#070B19] bg-[#E9C46A] hover:bg-[#d9b459] rounded-xl transition-all cursor-pointer shadow-md"
          >
            Unlock Paid Audit
          </button>
        </form>

        <div className="pt-2">
          <button 
            onClick={() => window.location.reload()} 
            className="text-xs text-slate-400 hover:text-white transition-colors underline cursor-pointer"
          >
            ← Back to Welcome Screen
          </button>
        </div>
      </div>
    );
  }

  // 7 Free Tier Questions (Single-focus, plain-English everyday choices)
  const freeQuestions = [
    { id: 1, text: "Should the government heavily regulate private corporations to protect consumers and workers?" },
    { id: 2, text: "Should individual personal liberties always take precedence over collective public safety measures?" },
    { id: 3, text: "Do government safety net programs (like public aid and healthcare assistance) do more good than harm?" },
    { id: 4, text: "Is preserving traditional cultural values and long-standing institutions more important than rapid social reform?" },
    { id: 5, text: "Should national borders feature very tight, strictly enforced controls on all incoming migration?" },
    { id: 6, text: "Is active participation in international alliances and global treaties beneficial for national strength?" },
    { id: 7, text: "Should wealthy individuals and major corporations pay a significantly higher tax percentage than middle-income earners?" }
  ];

  // 50 Deep Paid Tier Questions (Granular political, economic, and civic trade-offs)
  const paidQuestions = [
    // Economics & Markets (1-12)
    { id: 1, text: "Should central banks prioritize full employment over strict inflation control during economic downturns?" },
    { id: 2, text: "To what extent should domestic key industries receive direct government subsidies or protectionist tariffs?" },
    { id: 3, text: "Should a universal basic income (UBI) replace traditional means-tested welfare assistance programs?" },
    { id: 4, text: "Should private healthcare systems be completely replaced or heavily counterbalanced by a single-payer public model?" },
    { id: 5, text: "Should labor unions have legal protections that mandate closed-shop agreements in critical industrial sectors?" },
    { id: 6, text: "Are aggressive corporate antitrust regulations essential to prevent monopolistic control over digital and physical markets?" },
    { id: 7, text: "Should public utilities, energy grids, and mass transit systems be exclusively government-owned rather than privatized?" },
    { id: 8, text: "Should national tax codes shift primarily toward consumption/sales taxes rather than progressive income taxes?" },
    { id: 9, text: "Should sovereign wealth funds be established using natural resource revenues to pay direct dividends to citizens?" },
    { id: 10, text: "Should public infrastructure projects prioritize local union labor over lowest-cost private bidding?" },
    { id: 11, text: "Should minimum wage laws be adjusted automatically based on regional cost-of-living indexes rather than fixed legislative acts?" },
    { id: 12, text: "Should venture capital and private equity gains be taxed at standard ordinary income rates rather than lower capital gains rates?" },

    // Governance & Civil Liberties (13-25)
    { id: 13, text: "Should executive branches possess emergency powers to bypass legislative approval during prolonged economic or public health crises?" },
    { id: 14, text: "Should surveillance capabilities of national intelligence agencies be expanded to counter domestic extremist threats?" },
    { id: 15, text: "Should digital speech platforms be regulated as public utilities with strict free-speech protections preventing content moderation?" },
    { id: 16, text: "Should federal constitutional rights strictly override local municipal or state legislation on social matters?" },
    { id: 17, text: "Should voting be legally mandatory for all eligible adult citizens, similar to jury duty?" },
    { id: 18, text: "Should campaign financing rely entirely on public taxpayer funding while banning private and corporate political donations?" },
    { id: 19, text: "Should the structural size and authority of federal regulatory agencies be systematically reduced?" },
    { id: 20, text: "Should judicial review permit courts to strike down passed legislation based on evolving contemporary constitutional interpretations?" },
    { id: 21, text: "Should local police departments be fundamentally restructured, defunded, or replaced with specialized civilian response units?" },
    { id: 22, text: "Should qualified immunity protections for public law enforcement officials be entirely eliminated?" },
    { id: 23, text: "Should personal privacy rights regarding digital data encryption outweigh law enforcement decryption requests?" },
    { id: 24, text: "Should federal term limits be constitutionally mandated for all members of the legislative and judicial branches?" },
    { id: 25, text: "Should the electoral college system be abolished in favor of a direct national popular vote for presidential elections?" },

    // Social Structure & Culture (26-37)
    { id: 26, text: "Should public educational curricula explicitly incorporate historical systemic injustices and equity frameworks?" },
    { id: 27, text: "Should parents hold absolute authority over public school reading lists, health curricula, and educational content?" },
    { id: 28, text: "Should federally funded scientific research institutions prioritize projects aligned with defined national strategic goals?" },
    { id: 29, text: "Should faith-based organizations retain broad exemptions from federal anti-discrimination mandates based on religious freedom?" },
    { id: 30, text: "Should recreational drug possession and consumption be fully decriminalized and regulated under commercial markets?" },
    { id: 31, text: "Should capital punishment remain an authorized legal penalty for heinous federal and state criminal offenses?" },
    { id: 32, text: "Should higher education tuition at public state universities be completely free funded through progressive taxation?" },
    { id: 33, text: "Should zoning laws be nationally preempted to allow multi-family housing development in historically single-family suburbs?" },
    { id: 34, text: "Should historic monuments and public statues commemorating controversial historical figures be permanently removed from public spaces?" },
    { id: 35, text: "Should public media broadcasting networks receive guaranteed government funding independent of political cycles?" },
    { id: 36, text: "Should biometric identification tracking be deployed across public transit and urban centers for enhanced security?" },
    { id: 37, text: "Should affirmative action metrics be utilized in corporate hiring and university admissions to correct historical disparities?" },

    // Foreign Policy, Defense & Environment (38-50)
    { id: 38, text: "Should national defense spending be significantly expanded to maintain dominant global military superiority?" },
    { id: 39, text: "Should foreign military aid be strictly conditioned on verifiable human rights compliance by recipient governments?" },
    { id: 40, text: "Should international climate change agreements impose legally binding carbon emission caps on developing industrial nations?" },
    { id: 41, text: "Should domestic fossil fuel extraction be phased out rapidly through heavy taxation regardless of short-term energy cost spikes?" },
    { id: 42, text: "Should nuclear energy be massively expanded as a primary baseline solution for zero-emission electricity generation?" },
    { id: 43, text: "Should economic sanctions be utilized as the primary foreign policy tool rather than direct military intervention?" },
    { id: 44, text: "Should national borders feature militarized defense infrastructure alongside automated surveillance systems?" },
    { id: 45, text: "Should international trade pacts include mandatory labor and environmental standards enforceable via punitive tariffs?" },
    { id: 46, text: "Should foreign aid budgets prioritize direct humanitarian relief over strategic military partnerships?" },
    { id: 47, text: "Should domestic agricultural subsidies prioritize regenerative and organic farming methods over industrial scale output?" },
    { id: 48, text: "Should multilateral global organizations (such as the UN or WHO) hold overriding authority during international health or security crises?" },
    { id: 49, text: "Should cyber-warfare capabilities be integrated as an official branch of the national armed forces with independent tactical autonomy?" },
    { id: 50, text: "Should space exploration and celestial resource development be governed strictly by international treaties rather than commercial sovereignty?" }
  ];

  const activeQuestions = tier === 'paid' ? paidQuestions : freeQuestions;

  const handleSelect = (optionValue) => {
    const updatedAnswers = { ...answers, [currentIndex]: optionValue };
    setAnswers(updatedAnswers);

    if (currentIndex + 1 < activeQuestions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      onComplete(Object.keys(updatedAnswers).length * (tier === 'paid' ? 2 : 10));
    }
  };

  const currentQ = activeQuestions[currentIndex];
  const progressPercent = ((currentIndex + 1) / activeQuestions.length) * 100;

  return (
    <div className="max-w-xl w-full mx-auto space-y-6 py-4">
      {/* Progress & Header */}
      <div className="space-y-2">
        <div className="flex justify-between text-xs font-medium text-slate-400">
          <span>Question {currentIndex + 1} of {activeQuestions.length}</span>
          <span className="capitalize text-[#3A86EF] font-semibold">{tier} Tier Audit</span>
        </div>
        <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden border border-slate-700/50">
          <div className="h-full bg-gradient-to-r from-[#3A86EF] to-[#E9C46A] transition-all duration-300" style={{ width: `${progressPercent}%` }}></div>
        </div>
      </div>

      {/* Question Card */}
      <div className="p-6 md:p-8 rounded-2xl bg-[#0B132B]/90 border border-slate-800 shadow-xl space-y-6">
        <h2 className="text-lg md:text-xl font-bold text-[#F8F9FA] leading-snug">
          {currentQ.text}
        </h2>

        <div className="space-y-3">
          {[
            { label: "Strongly Agree", val: 5 },
            { label: "Somewhat Agree", val: 4 },
            { label: "Neutral / Undecided", val: 3 },
            { label: "Somewhat Disagree", val: 2 },
            { label: "Strongly Disagree", val: 1 }
          ].map((choice, idx) => (
            <button
              key={idx}
              onClick={() => handleSelect(choice.val)}
              className="w-full text-left px-4 py-3.5 rounded-xl bg-[#1C2541]/60 hover:bg-[#3A86EF]/20 border border-slate-700/60 hover:border-[#3A86EF] text-sm font-medium text-slate-200 transition-all cursor-pointer flex items-center justify-between group"
            >
              <span>{choice.label}</span>
              <span className="w-4 h-4 rounded-full border border-slate-600 group-hover:border-[#3A86EF] group-hover:bg-[#3A86EF] transition-all flex items-center justify-center"></span>
            </button>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-between items-center text-xs text-slate-400">
        <button 
          onClick={() => window.location.reload()} 
          className="hover:text-white transition-colors underline cursor-pointer"
        >
          ← Return to Welcome
        </button>
        {currentIndex > 0 && (
          <button 
            onClick={() => setCurrentIndex(currentIndex - 1)} 
            className="hover:text-white transition-colors cursor-pointer"
          >
            Previous Question
          </button>
        )}
      </div>
    </div>
  );
}