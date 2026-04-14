import React from 'react';

export function WhatYouWillLearn() {
  const items = [
"AI-first digital marketing mastery from strategy to execution",
"Prompt engineering for ads, SEO, content, and campaign automation",
"Agentic AI systems for lead nurturing and customer journeys",
"AI-powered SEO, voice search, and technical optimization",
"Smart paid ads with predictive targeting and budget automation",
"Sales funnels, CRO, and landing page optimization using AI",
"CRM, chatbot, WhatsApp, and email automation workflows",
"Freelancing, placements, and business growth frameworks"


  ];

  return (
    <section className="bg-surface-container-low p-6 md:p-8 rounded-xl border border-outline-variant/10 mb-16">
      <h2 className="text-2xl font-headline font-bold mb-8">
        What <span className="text-primary">You'll Learn</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
        {items.map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="flex-shrink-0 w-6 h-6 md:w-auto md:h-auto md:bg-transparent rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
              <span className="material-symbols-outlined text-primary text-sm md:text-base">check</span>
            </div>
            <span className="text-sm font-medium md:font-normal text-slate-700 md:text-on-surface">{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
