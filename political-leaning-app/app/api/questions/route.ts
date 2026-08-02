import { NextResponse } from 'next/server';

export async function GET() {
  const freeTierQuestions = [
    {
      id: 1,
      category: "Economy",
      text: "When balancing economic growth and environmental protection, the government should prioritize:",
      options: [
        { text: "Strict environmental protections, even if it slows economic growth significantly.", value: -2 },
        { text: "A balanced approach with moderate regulations to protect the environment.", value: -1 },
        { text: "A case-by-case pragmatic approach based on local impact data.", value: 0 },
        { text: "Economic growth and deregulation, trusting the free market to innovate solutions.", value: 2 }
      ]
    },
    {
      id: 2,
      category: "Healthcare",
      text: "The healthcare system in our country should ideally function as:",
      options: [
        { text: "A fully public, decommodified system run by the state (Medicare for All).", value: -2 },
        { text: "A hybrid system with a strong public option alongside private insurance.", value: -1 },
        { text: "A regulated private market with targeted subsidies for low-income citizens.", value: 1 },
        { text: "A fully free-market system with minimal state intervention.", value: 2 }
      ]
    },
    {
      id: 3,
      category: "Trade & Globalism",
      text: "Regarding international trade and alliances, our nation should:",
      options: [
        { text: "Prioritize global equity and open borders to foster international unity.", value: -2 },
        { text: "Engage heavily in global institutions and international trade agreements.", value: -1 },
        { text: "Prioritize national sovereignty and strict economic protectionism.", value: 2 }
      ]
    }
  ];

  return NextResponse.json({ questions: freeTierQuestions });
}