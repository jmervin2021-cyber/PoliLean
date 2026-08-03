export default function handler(req, res) {
  const questions = [
    {
      id: 1,
      category: "Economic Structure",
      prompt: "When large companies gain too much power, the government should act to keep markets fair.",
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
      category: "Economic Structure",
      prompt: "Wealthy people and large corporations should pay higher taxes to support essential public services.",
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
      category: "Governance",
      prompt: "During a national emergency, the federal government should have clear authority to set rules that apply across all states.",
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
      category: "Personal Freedom",
      prompt: "Adults should generally be free to make their own personal choices, as long as they do not harm others.",
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
      category: "Foreign Policy",
      prompt: "A strong defense and close international partnerships help maintain global stability.",
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
