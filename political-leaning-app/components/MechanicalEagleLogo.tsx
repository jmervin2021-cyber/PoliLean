'use client';

export default function MechanicalEagleLogo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      suppressHydrationWarning
    >
      {/* Background Outer Tech Shield/Glow Ring */}
      <circle cx="50" cy="50" r="46" fill="#0B132B" stroke="#3A86EF" strokeWidth="1.5" strokeDasharray="6 3" />
      <circle cx="50" cy="50" r="42" stroke="#1C2541" strokeWidth="2" />

      {/* ----------------- THE CIRCUIT NEST (WOVEN TECH BASE) ----------------- */}
      {/* Outer Woven Nest Layers */}
      <path d="M 18 64 C 28 82, 72 82, 82 64" stroke="#E9C46A" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 14 58 C 26 86, 74 86, 86 58" stroke="#3A86EF" strokeWidth="2" strokeLinecap="round" />
      <path d="M 22 70 C 32 88, 68 88, 78 70" stroke="#D90429" strokeWidth="1.75" strokeLinecap="round" />

      {/* Intersecting Mechanical Twigs / Circuit Traces */}
      <path d="M 20 62 L 40 76 L 60 74 L 80 62" stroke="#E9C46A" strokeWidth="1" strokeDasharray="3 2" />
      <path d="M 24 68 L 48 80 L 76 66" stroke="#3A86EF" strokeWidth="1.25" />
      <path d="M 16 56 L 36 72 L 64 72 L 84 56" stroke="#1C2541" strokeWidth="3" />

      {/* Circuit Nodes on Nest */}
      <circle cx="20" cy="62" r="2" fill="#E9C46A" />
      <circle cx="80" cy="62" r="2" fill="#E9C46A" />
      <circle cx="48" cy="80" r="2.5" fill="#3A86EF" />
      <circle cx="36" cy="72" r="1.5" fill="#D90429" />
      <circle cx="64" cy="72" r="1.5" fill="#D90429" />

      {/* ----------------- THE MECHANICAL EAGLE (NESTED) ----------------- */}
      {/* Eagle Body Base Shell */}
      <path d="M 50 36 L 62 52 L 50 68 L 38 52 Z" fill="#1C2541" stroke="#3A86EF" strokeWidth="2" />

      {/* Folded Wings (Mechanical Feather Plates) */}
      {/* Left Wing */}
      <path d="M 38 46 L 20 34 L 26 58 L 38 56 Z" fill="#070B19" stroke="#3A86EF" strokeWidth="1.75" />
      <path d="M 34 50 L 22 58 L 34 64 Z" fill="#1C2541" stroke="#E9C46A" strokeWidth="1.25" />

      {/* Right Wing */}
      <path d="M 62 46 L 80 34 L 74 58 L 62 56 Z" fill="#070B19" stroke="#3A86EF" strokeWidth="1.75" />
      <path d="M 66 50 L 78 58 L 66 64 Z" fill="#1C2541" stroke="#E9C46A" strokeWidth="1.25" />

      {/* Eagle Neck & Collar Plate */}
      <path d="M 42 38 L 50 44 L 58 38 L 50 32 Z" fill="#2B2D42" stroke="#F8F9FA" strokeWidth="1.5" />

      {/* Eagle Head & Sharp Beak */}
      {/* Helmet Shell */}
      <path d="M 50 18 L 60 28 L 50 34 L 40 28 Z" fill="#1C2541" stroke="#F8F9FA" strokeWidth="2" />
      {/* Curved Mechanical Beak */}
      <path d="M 50 28 L 63 32 L 50 37 Z" fill="#E9C46A" stroke="#E9C46A" strokeWidth="1" />

      {/* Optical Sensor Eyes */}
      <circle cx="46" cy="27" r="2" fill="#D90429" />
      <circle cx="46" cy="27" r="0.75" fill="#F8F9FA" />

      {/* Chest Arc Reactor / Civic Core */}
      <circle cx="50" cy="50" r="4" fill="#070B19" stroke="#D90429" strokeWidth="1.5" />
      <circle cx="50" cy="50" r="1.75" fill="#D90429" />

      {/* Crest Crown Feathers (Top Mechanical Antenna Pins) */}
      <path d="M 46 20 L 44 12" stroke="#3A86EF" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M 50 18 L 50 10" stroke="#E9C46A" strokeWidth="2" strokeLinecap="round" />
      <path d="M 54 20 L 56 12" stroke="#3A86EF" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}