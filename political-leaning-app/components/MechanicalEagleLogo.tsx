'use client';

export default function MechanicalEagleLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 64 64" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      suppressHydrationWarning
    >
      {/* Circuit Nest Base Layer */}
      <path d="M 12 48 C 20 58, 44 58, 52 48" stroke="#E9C46A" strokeWidth="2" strokeDasharray="3 2" />
      <path d="M 8 44 C 20 54, 44 54, 56 44" stroke="#3A86EF" strokeWidth="1.5" />
      <path d="M 16 52 C 24 60, 40 60, 48 52" stroke="#D90429" strokeWidth="1.5" />
      
      {/* Nest Circuit Nodes */}
      <circle cx="12" cy="48" r="1.5" fill="#E9C46A" />
      <circle cx="52" cy="48" r="1.5" fill="#E9C46A" />
      <circle cx="20" cy="54" r="1.5" fill="#3A86EF" />
      <circle cx="44" cy="54" r="1.5" fill="#3A86EF" />

      {/* Mechanical Eagle Body & Armor Shield */}
      <path d="M 32 20 L 40 32 L 32 46 L 24 32 Z" fill="#1C2541" stroke="#3A86EF" strokeWidth="1.75" />
      
      {/* Mechanical Wings (Left & Right - Angular Chevron Plates) */}
      <path d="M 24 28 L 8 20 L 14 36 L 24 34 Z" fill="#0B132B" stroke="#3A86EF" strokeWidth="1.5" />
      <path d="M 40 28 L 56 20 L 50 36 L 40 34 Z" fill="#0B132B" stroke="#3A86EF" strokeWidth="1.5" />
      
      <path d="M 22 34 L 10 38 L 18 44 L 24 40 Z" fill="#0B132B" stroke="#E9C46A" strokeWidth="1.25" />
      <path d="M 42 34 L 54 38 L 46 44 L 40 40 Z" fill="#0B132B" stroke="#E9C46A" strokeWidth="1.25" />

      {/* Eagle Head & Beak (Geometric Tech Sharp Angles) */}
      <path d="M 32 10 L 37 18 L 32 22 L 27 18 Z" fill="#1C2541" stroke="#F8F9FA" strokeWidth="1.5" />
      {/* Beak */}
      <path d="M 32 16 L 39 20 L 32 22 Z" fill="#E9C46A" stroke="#E9C46A" strokeWidth="0.5" />

      {/* Mechanical Eye Core */}
      <circle cx="30" cy="16" r="1" fill="#D90429" />
      
      {/* Internal Chest Reactor Node */}
      <circle cx="32" cy="32" r="2.5" fill="#D90429" stroke="#F8F9FA" strokeWidth="0.75" />
    </svg>
  );
}