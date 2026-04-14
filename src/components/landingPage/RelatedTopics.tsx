import React from 'react';

export function RelatedTopics() {
  const topics = [
    { label: "AI Marketing", active: true },
    { label: "Digital Strategy", active: false },
    { label: "AI SEO", active: false },
    { label: "Content AI", active: false },
    { label: "Growth Hacking", active: false },
  ];

  return (
    <section className="mb-16 md:py-8 border-t border-slate-100 max-w-7xl mx-auto pt-12 mt-12 px-6 lg:px-0">
      <h2 className="text-xl md:text-2xl font-headline font-bold mb-8 text-center md:text-left">
        Explore <span className="text-primary">Related Topics</span>
      </h2>
      <div className="flex flex-wrap gap-3 justify-center md:justify-start">
        {topics.map((topic, idx) => (
          <a 
            key={idx}
            href="#"
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors
              ${topic.active 
                ? 'bg-primary text-on-primary hover:bg-primary-container' 
                : 'border border-primary text-primary hover:bg-primary-fixed'
              }`}
          >
            {topic.label}
          </a>
        ))}
      </div>
    </section>
  );
}
