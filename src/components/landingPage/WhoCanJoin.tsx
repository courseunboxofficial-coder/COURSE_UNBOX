import React from 'react';

export function WhoCanJoin() {
  const targets = [
    {
      icon: "campaign",
      title: "Working professionals",
      desc: "Automate your team's workflow and focus on high-level strategy.",
    },
    {
      icon: "business_center",
      title: "Business Owners",
      desc: "Reduce overhead costs and deliver 10x results for your clients.",
    },
    {
      icon: "book",
      title: "Students",
      desc: "Start shaping your Career in Digital Marketing with modern AI skills",
    },
  ];

  return (
    <section className="py-16 px-6 md:rounded-2xl md:px-12 bg-primary my-16 max-w-7xl lg:mx-auto">
      <h2 className="font-headline font-bold text-3xl tracking-tight mb-8 text-white text-center md:text-left">
        Who Should <span className="text-secondary">Enroll</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {targets.map((target, idx) => (
           <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
            <span className="material-symbols-outlined text-secondary text-3xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>{target.icon}</span>
            <h3 className="font-headline font-bold text-white text-xl mb-2">{target.title}</h3>
            <p className="text-white/70 text-sm leading-relaxed">{target.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
