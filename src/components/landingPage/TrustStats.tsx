import React from 'react';

export function TrustStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-7xl mx-auto px-6 mt-12 relative z-20">
      {/* Card 1: 3 Live Projects */}
      <div className="bg-surface-container-lowest h-full py-10 md:py-3 px-6 rounded-xl border border-outline-variant/20 editorial-shadow flex flex-col items-center justify-center text-center">
        <span className="material-symbols-outlined text-primary !text-[60px] md:!text-[80px] mb-4">
          school
        </span>
        <h4 className="font-bold text-lg">3 Live Projects</h4>
      </div>

      {/* Card 2: 200+ Tools */}
      <div className="bg-surface-container-lowest h-full py-10 md:py-3 px-6 rounded-xl border border-outline-variant/20 editorial-shadow flex flex-col items-center justify-center text-center">
        <span className="material-symbols-outlined text-primary !text-[60px] md:!text-[80px] mb-4">
          construction
        </span>
        <h4 className="font-bold text-lg">200+ Tools</h4>
      </div>

      {/* Card 3: 100% Placement Support */}
      <div className="bg-surface-container-lowest h-full py-10 md:py-3 px-6 rounded-xl border border-outline-variant/20 editorial-shadow flex flex-col items-center justify-center text-center">
        <span className="material-symbols-outlined text-primary !text-[60px] md:!text-[80px] mb-4">
          workspace_premium
        </span>
        <h4 className="font-bold text-lg leading-snug">
          100% Placement Gaurantee
        </h4>
      </div>
    </div>
  );
}
