"use client";
import React, { useState } from "react";

export function CourseContent() {
  const modules = [
    {
      title: "Introduction to AI-Powered Digital Marketing",
      details: "6 lectures • 45 min",
      moduleInfo: "Module 01",
      points: [
        "Digital marketing ecosystem",
        "AI in modern marketing",
        "Career paths in Noida & remote jobs",
        "Funnel psychology",
        "AI marketing stack overview",
      ],
    },
    {
      title: "Prompt Engineering for Marketers",
      details: " 8 lectures • 1 hr 20 min",
      moduleInfo: "Module 02",
      points: [
        "Prompt frameworks for ads",
        "Blog & SEO prompt systems",
        "Sales copy prompts",
        "Reels & script generation",
        "AI content personalization",
      ],
    },
    {
      title: "Website Creation & Landing Page Optimization",
      details: "10 lectures • 2 hr",
      moduleInfo: "Module 03",
      points: [
        "WordPress setup",
        "AI website builders",
        "Landing page CRO",
        "Forms & lead capture",
        "Core Web Vitals basics",
      ],
    },
    {
      title: "SEO + GEO + AI Search Optimization",
      details: "12 lectures • 3 hr",
      moduleInfo: "Module 04",
      points: [
        "AI keyword clustering",
        "Semantic SEO",
        "Topical authority",
        "Voice search SEO",
        "Search Generative Experience optimization",
      ],
    },
    {
      title: "Performance Marketing (Google + Meta Ads)",
      details: "14 lectures • 4 hr",
      moduleInfo: "Module 05",
      points: [
        "Google Ads setup",
        "Meta campaign architecture",
        "AI audience targeting",
        "Budget optimization",
        "Retargeting workflows",
      ],
    },
    {
      title: "Agentic AI & Marketing Automation",
      details: "10 lectures • 2 hr 30 min",
      moduleInfo: "Module 06",
      points: [
        "AI agents for lead qualification",
        "WhatsApp chatbot flows",
        "CRM automation",
        "Email drip systems",
        "Multi-channel workflow automation",
      ],
    },
    {
      title: "Social Media Growth with AI",
      details: "10 lectures • 2 hr",
      moduleInfo: "Module 07",
      points: [
        "Instagram growth systems",
        "Reel scripting AI",
        "AI content calendars",
        "Hashtag intelligence",
        "Personal branding workflows",
      ],
    },
    {
      title: "AI in E-commerce & Marketplace Growth",
      details: "8 lectures • 1 hr 45 min",
      moduleInfo: "Module 08",
      points: [
        "Amazon & Flipkart growth",
        "Product research AI",
        "Listing optimization",
        "Marketplace ads",
        "Conversion optimization",
      ],
    },
    {
      title: "Freelancing, Internship & Placement Mastery",
      details: "6 lectures • 50 min",
      moduleInfo: "Module 09",
      points: [
        "Client acquisition systems",
        "Proposal prompts",
        "LinkedIn optimization",
        "Interview preparation",
        "Internship roadmap",
      ],
    },
  ];

  const [expanded, setExpanded] = useState<number | null>(null);

  const toggle = (index: number) => {
    if (expanded === index) {
      setExpanded(null);
    } else {
      setExpanded(index);
    }
  };

  return (
    <section className="mb-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-headline font-bold">
          Course <span className="text-primary">Content</span>
        </h2>
      </div>

      <div className="space-y-4">
        {modules.map((mod, index) => (
          <div
            key={index}
            className="border border-outline-variant/20 rounded-lg overflow-hidden transition-all"
          >
            <div
              className="bg-surface-container-high md:bg-white md:border-b md:border-slate-100 p-4 flex items-center justify-between cursor-pointer"
              onClick={() => toggle(index)}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
                <span className="md:hidden text-[10px] font-headline font-bold text-primary uppercase tracking-widest">
                  {mod.moduleInfo}
                </span>
                <div className="flex items-center gap-3">
                  <span
                    className={`material-symbols-outlined transition-transform duration-300 ${expanded === index ? "rotate-180" : ""}`}
                  >
                    expand_more
                  </span>
                  <span className="font-bold font-headline md:text-lg">
                    {mod.title}
                  </span>
                </div>
              </div>
              <span className="hidden md:block text-sm text-on-surface-variant font-medium">
                {mod.details}
              </span>
            </div>

            {/* Expandable content area */}
            <div
              className={`bg-white transition-all duration-300 ease-in-out overflow-hidden ${expanded === index ? "max-h-96" : "max-h-0"}`}
            >
              <div className="py-4 px-6 border-t border-outline-variant/20">
                <ul className="list-disc pl-5 space-y-2 text-on-surface-variant">
                  {mod.points.map((point, pointIndex) => (
                    <li key={pointIndex}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
