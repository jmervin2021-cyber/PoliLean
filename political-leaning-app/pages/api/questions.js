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
      id: 4,
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
      id: 5,
      category: "Foreign Policy & Global Standing",
      prompt: "Maintaining overwhelming global military dominance and participating actively in international alliances (like NATO) is essential for preserving global stability.",
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