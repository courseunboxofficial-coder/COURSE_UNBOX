import React from 'react';

export function TrustStats() {
  return (
    /* Mobile: horizontal snap-scroll | Desktop: 3-col grid */
    <div className="
      flex overflow-x-auto snap-x snap-mandatory gap-4 px-6 mt-12 mb-16 pb-2
      lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:snap-none lg:pb-0
      relative z-20
      [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
    ">
      {/* Card 1: 3 Live Projects */}
      <div className="snap-start shrink-0 w-64 lg:w-auto bg-surface-container-lowest h-full py-10 lg:py-3 px-6 rounded-xl border border-outline-variant/20 editorial-shadow flex flex-col items-center justify-center text-center transition-all duration-300 ease-out hover:border-transparent hover:shadow-lg hover:-translate-y-2 cursor-default">
        <span className="material-symbols-outlined text-primary !text-[60px] lg:!text-[80px] mb-4">
          school
        </span>
        <h4 className="font-bold text-lg">3 Live Projects</h4>
      </div>

      {/* Card 2: 200+ Tools */}
      <div className="snap-start shrink-0 w-64 lg:w-auto bg-surface-container-lowest h-full py-10 lg:py-3 px-6 rounded-xl border border-outline-variant/20 editorial-shadow flex flex-col items-center justify-center text-center transition-all duration-300 ease-out hover:border-transparent hover:shadow-lg hover:-translate-y-2 cursor-default">
        <span className="material-symbols-outlined text-primary !text-[60px] lg:!text-[80px] mb-4">
          construction
        </span>
        <h4 className="font-bold text-lg">200+ Tools</h4>
      </div>

      {/* Card 3: 100% Placement Support */}
      <div className="snap-start shrink-0 w-64 lg:w-auto bg-surface-container-lowest h-full py-10 lg:py-3 px-6 rounded-xl border border-outline-variant/20 editorial-shadow flex flex-col items-center justify-center text-center transition-all duration-300 ease-out hover:border-transparent hover:shadow-lg hover:-translate-y-2 cursor-default">
        <span className="material-symbols-outlined text-primary !text-[60px] lg:!text-[80px] mb-4">
          workspace_premium
        </span>
        <h4 className="font-bold text-lg leading-snug">
          100% Placement Guarantee
        </h4>
      </div>
    </div>
  );
}

