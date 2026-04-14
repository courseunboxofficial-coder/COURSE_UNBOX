import React from 'react';

export function FAQ() {
  const faqs = [
    {
      q: "Is this course suitable for beginners?",
      a: "Absolutely. This course is designed for students, freshers, freelancers, business owners, and working professionals. We start from digital marketing fundamentals and gradually move into AI tools, Prompt Engineering, Agentic AI, SEO, paid ads, and automation workflows.",
    },
    {
      q: "Will I learn AI tools like Prompt Engineering and Agentic AI?",
      a: "Yes. This is an AI-first digital marketing course, where you’ll learn Prompt Engineering, ChatGPT workflows, Agentic AI systems, chatbot automation, WhatsApp automation, AI SEO, and AI-powered ad optimization with practical projects.",
    },
    {
      q: "Do you provide internship and placement support?",
      a: "Yes, Course Unbox provides live projects, internship opportunities, freelancing guidance, interview preparation, and placement assistance to help you become job-ready in the digital marketing industry.",
    },
    {
      q: "Is this course useful for freelancing or growing my business?",
      a: "Definitely. Along with job skills, this course teaches client acquisition, sales funnels, lead generation systems, WhatsApp automation, e-commerce growth, and performance marketing, making it ideal for freelancers and business owners.",
    },
    {
      q: "Why should I choose Course Unbox in Noida?",
      a: "Course Unbox offers a practical AI-powered curriculum, live mentorship by Jugal Chauhan, real campaign execution, internship support, certifications, and career guidance, making it one of the most future-ready digital marketing programs for learners in Noida and Delhi NCR.",
    },
  ];

  return (
    <section className="py-16 px-6 md:rounded-2xl md:px-12 bg-slate-50 my-16 max-w-7xl lg:mx-auto">
      <h2 className="font-headline font-bold text-3xl md:text-center tracking-tight mb-12">
        Course <span className="text-primary">FAQs</span>
      </h2>
      <div className="space-y-4 max-w-3xl mx-auto">
        {faqs.map((faq, idx) => (
          <div key={idx} className="p-6 rounded-2xl bg-white editorial-shadow transition-transform hover:-translate-y-1 duration-300">
            <h4 className="font-headline font-bold text-slate-900 mb-2">{faq.q}</h4>
            <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
