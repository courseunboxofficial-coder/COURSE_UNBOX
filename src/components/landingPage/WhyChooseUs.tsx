import React from 'react';

const REASONS = [
  { id: '01', title: 'Architect-Led Mentorship', desc: 'Direct access to industry leads who manage $1M+ monthly ad spends.' },
  { id: '02', title: 'Live Real-Time Projects', desc: 'No dummy data. You work on live client campaigns with real budgets.' },
  { id: '03', title: 'AI-Tool Stack Access', desc: 'Free access to premium AI marketing tools worth ₹45,000.' },
  { id: '04', title: 'Dedicated Career Cell', desc: 'End-to-end support from resume building to final offer negotiation.' },
  { id: '05', title: 'Global Certification', desc: 'Get certified by Google, HubSpot, and our exclusive AI Institute.' },
  { id: '06', title: 'Hybrid Learning Flex', desc: 'Switch between online live sessions and physical lab access anytime.' },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="font-headline text-[1.75rem] font-bold text-on-surface mb-2">#Why we are Best in Digital Marketing Training Institute PAN INDIA</h2>
          <p className="font-body text-on-surface-variant">Redefining the standard of marketing education.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-16">
          {REASONS.map((reason) => (
            <div key={reason.id} className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-secondary-fixed rounded-sm flex items-center justify-center font-headline font-extrabold text-on-secondary-fixed">
                {reason.id}
              </div>
              <div>
                <h4 className="font-headline font-bold mb-2">{reason.title}</h4>
                <p className="font-body text-sm text-on-surface-variant">{reason.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
