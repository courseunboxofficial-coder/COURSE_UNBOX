import React from 'react';

export function PlacementStats() {
  return (
    <section className="py-24 bg-surface-container-low overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative">
        <div className="absolute -right-20 -top-20 text-[12rem] font-bold text-primary-fixed/30 select-none">STATS</div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-headline text-[1.75rem] font-bold text-on-surface mb-8">Engineering Career Outcomes</h2>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="font-headline text-[3.5rem] font-bold text-primary leading-tight">94%</div>
                <div className="font-label text-xs uppercase tracking-widest text-outline">Placement Success Rate</div>
              </div>
              <div>
                <div className="font-headline text-[3.5rem] font-bold text-primary leading-tight">1.2Cr</div>
                <div className="font-label text-xs uppercase tracking-widest text-outline">Highest Package Offered</div>
              </div>
              <div>
                <div className="font-headline text-[3.5rem] font-bold text-primary leading-tight">450+</div>
                <div className="font-label text-xs uppercase tracking-widest text-outline">Hiring Partners</div>
              </div>
              <div>
                <div className="font-headline text-[3.5rem] font-bold text-primary leading-tight">6.5L</div>
                <div className="font-label text-xs uppercase tracking-widest text-outline">Average Starting Salary</div>
              </div>
            </div>
            <div className="mt-12 flex flex-wrap items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all">
              <img alt="Google" className="h-6" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Google_Ads_logo.svg/1280px-Google_Ads_logo.svg.png"/>
              <img alt="LinkedIn" className="h-6" src="https://yt3.googleusercontent.com/i6KNxiy3gME-BulL4WnuGkTGqHuSYF8jl1WRn0rXftcJdSYK7dHKcJ3gLAaPc-KfhmLSYPwf824=s900-c-k-c0x00ffffff-no-rj"/>
              <img alt="TCS" className="h-8" src="data:image/png;base64,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"/>
              <img alt="Microsoft" className="h-6" src="https://yt3.googleusercontent.com/UNxiZXILPC64OgmT6gbzBpTxXU87q1MGV7JTLWg4WgT2xddKTFmJBI_23ukLMPRRcV8VK-RzbrA=s900-c-k-c0x00ffffff-no-rj"/>
            </div>
          </div>
          <div className="relative">
            <div className="bg-surface-container-lowest p-8 rounded-xl editorial-shadow relative z-10 border border-outline-variant/10">
              <div className="flex items-center gap-4 mb-6">
                <img className="w-16 h-16 rounded-full object-cover" alt="Ananya Sharma" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-zlYzKBHt7JzOMjhfh_LW94ErQurAfi8veG_fAG-4zm10R7qtqgGFtxYGHx0zKtDCR2_9KX5yqdGavrkzv7u_pMiDx3q4NkWlVeC5p2fZ9SLrSe58sHwMiqxScndIfyjr2L_Etdtot1aP0ZUZTzs7R0GqusqQU0W5Z99JPbeXoXzpGHPFu6J-L23FJTC8eYbJkII8kHH467QuI168ZnPnYK8T7-LvVAn3NlzxIQ2QwKlg8ogAILimqru6SuStjIaT7ckJg9TqiBOU"/>
                <div>
                  <div className="font-headline font-bold">Ananya Sharma</div>
                  <div className="font-body text-sm text-on-surface-variant">Digital Architect @ Google</div>
                </div>
              </div>
              <p className="font-body text-lg italic leading-relaxed text-on-surface-variant mb-6">
                &quot;The focus on AI systems rather than just social media buttons changed how I view marketing. I went from a junior role to a lead architect position within 8 months of finishing the curriculum.&quot;
              </p>
              <div className="flex gap-1 text-secondary">
                <span className="material-symbols-outlined text-secondary font-bold" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-secondary font-bold" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-secondary font-bold" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-secondary font-bold" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-secondary font-bold" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
