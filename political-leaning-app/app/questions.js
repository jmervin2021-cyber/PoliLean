export default function handler(req, res) {
  const questions = [
    {
      id: 1,
      category: "Economic Structure & Markets",
      prompt: "To ensure fair competition and protect consumer welfare, the government should actively regulate private enterprise and market practices.",
      options: [
        { label: "Strongly Disagree", score: -2 },
        { label: "Disagree", score: -1 },
        { label: "Neutral", score: 0 },
        { label: "Agree", score: 1 },
        { label: "Strongly Agree", score: 2 }
      ]
    },
    {
      id: 2,
      category: "Economic Structure & Markets",
      prompt: "Tax systems should be heavily progressive, utilizing higher tax brackets on accumulated wealth and corporate revenue to fund robust public social safety nets.",
      options: [
        { label: "Strongly Disagree", score: -2 },
        { label: "Disagree", score: -1 },
        { label: "Neutral", score: 0 },
        { label: "Agree", score: 1 },
        { label: "Strongly Agree", score: 2 }
      ]
    },
    {
      id: 3,
      category: "Economic Structure & Markets",
      prompt: "Economic protectionism—such as tariffs and domestic manufacturing incentives—is more beneficial for national security and workers than unfettered global free trade.",
      options: [
        { label: "Strongly Disagree", score: -2 },
        { label: "Disagree", score: -1 },
        { label: "Neutral", score: 0 },
        { label: "Agree", score: 1 },
        { label: "Strongly Agree", score: 2 }
      ]
    },
    {
      id: 4,
      category: "Economic Structure & Markets",
      prompt: "Healthcare, higher education, and basic housing security are fundamental rights that the government has a moral obligation to guarantee for all citizens.",
      options: [
        { label: "Strongly Disagree", score: -2 },
        { label: "Disagree", score: -1 },
        { label: "Neutral", score: 0 },
        { label: "Agree", score: 1 },
        { label: "Strongly Agree", score: 2 }
      ]
    },
    {
      id: 5,
      category: "Governance & Federal Power",
      prompt: "Solving major national crises requires centralized federal authority and uniform federal mandates, superseding local or state legislation.",
      options: [
        { label: "Strongly Disagree", score: -2 },
        { label: "Disagree", score: -1 },
        { label: "Neutral", score: 0 },
        { label: "Agree", score: 1 },
        { label: "Strongly Agree", score: 2 }
      ]
    },
    {
      id: 6,
      category: "Governance & Federal Power",
      prompt: "Established governmental and social institutions should be preserved and reformed cautiously, as radical overhauls often introduce unforeseen instability.",
      options: [
        { label: "Strongly Disagree", score: -2 },
        { label: "Disagree", score: -1 },
        { label: "Neutral", score: 0 },
        { label: "Agree", score: 1 },
        { label: "Strongly Agree", score: 2 }
      ]
    },
    {
      id: 7,
      category: "Governance & Federal Power",
      prompt: "Constitutional and legal texts should be interpreted strictly according to their original public meaning at the time of enactment, rather than evolving as a 'living document'.",
      options: [
        { label: "Strongly Disagree", score: -2 },
        { label: "Disagree", score: -1 },
        { label: "Neutral", score: 0 },
        { label: "Agree", score: 1 },
        { label: "Strongly Agree", score: 2 }
      ]
    },
    {
      id: 8,
      category: "Governance & Federal Power",
      prompt: "National security agencies should be granted robust surveillance and enforcement powers, even if it requires placing some limitations on individual privacy rights.",
      options: [
        { label: "Strongly Disagree", score: -2 },
        { label: "Disagree", score: -1 },
        { label: "Neutral", score: 0 },
        { label: "Agree", score: 1 },
        { label: "Strongly Agree", score: 2 }
      ]
    },
    {
      id: 9,
      category: "Social Order & Individual Liberty",
      prompt: "Adult individuals should have absolute personal autonomy in their lifestyle choices and personal behavior, provided their actions do not directly harm others.",
      options: [
        { label: "Strongly Disagree", score: -2 },
        { label: "Disagree", score: -1 },
        { label: "Neutral", score: 0 },
        { label: "Agree", score: 1 },
        { label: "Strongly Agree", score: 2 }
      ]
    },
    {
      id: 10,
      category: "Social Order & Individual Liberty",
      prompt: "Adherence to traditional cultural values, shared heritage, and social norms is vital for maintaining a stable and unified national identity.",
      options: [
        { label: "Strongly Disagree", score: -2 },
        { label: "Disagree", score: -1 },
        { label: "Neutral", score: 0 },
        { label: "Agree", score: 1 },
        { label: "Strongly Agree", score: 2 }
      ]
    },
    {
      id: 11,
      category: "Social Order & Individual Liberty",
      prompt: "Aggressive government regulations and green energy mandates are necessary to combat climate change, even if they impose immediate financial costs on traditional energy sectors.",
      options: [
        { label: "Strongly Disagree", score: -2 },
        { label: "Disagree", score: -1 },
        { label: "Neutral", score: 0 },
        { label: "Agree", score: 1 },
        { label: "Strongly Agree", score: 2 }
      ]
    },
    {
      id: 12,
      category: "Social Order & Individual Liberty",
      prompt: "A nation-state has a primary moral imperative to strictly enforce secure borders and tightly manage immigration quotas to protect domestic workers and civic cohesion.",
      options: [
        { label: "Strongly Disagree", score: -2 },
        { label: "Disagree", score: -1 },
        { label: "Neutral", score: 0 },
        { label: "Agree", score: 1 },
        { label: "Strongly Agree", score: 2 }
      ]
    },
    {
      id: 13,
      category: "Foreign Policy & Global Standing",
      prompt: "Maintaining overwhelming global military dominance and participating actively in international alliances (like NATO) is essential for preserving global stability.",
      options: [
        { label: "Strongly Disagree", score: -2 },
        { label: "Disagree", score: -1 },
        { label: "Neutral", score: 0 },
        { label: "Agree", score: 1 },
        { label: "Strongly Agree", score: 2 }
      ]
    },
    {
      id: 14,
      category: "Foreign Policy & Global Standing",
      prompt: "Global challenges like pandemics, economic shocks, and climate change are best addressed through empowered international bodies and multilateral treaties rather than unilateral national action.",
      options: [
        { label: "Strongly Disagree", score: -2 },
        { label: "Disagree", score: -1 },
        { label: "Neutral", score: 0 },
        { label: "Agree", score: 1 },
        { label: "Strongly Agree", score: 2 }
      ]
    },
    {
      id: 15,
      category: "Foreign Policy & Global Standing",
      prompt: "Foreign aid and international economic policies should primarily serve as strategic leverage to advance national geopolitical interests rather than unconditional humanitarian relief.",
      options: [
        { label: "Strongly Disagree", score: -2 },
        { label: "Disagree", score: -1 },
        { label: "Neutral", score: 0 },
        { label: "Agree", score: 1 },
        { label: "Strongly Agree", score: 2 }
      ]
    }
  ];

  res.status(200).json(questions);
}