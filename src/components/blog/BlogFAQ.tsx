"use client"
import { useState } from "react";
export default function BlogFAQ(){
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const FAQs = [
    {
      question: "How long does it take to master DSA?",
      answer:
        "Mastering DSA depends on consistency. With daily practice, most learners take 6–9 months to become confident.",
    },
  ];

   
    return (
        <section className="max-w-6xl  px-36 mt-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {FAQs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm"
            >
              <button
                onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                className="w-full flex justify-between items-center text-left"
              >
                <span className="font-medium text-slate-800">
                  {faq.question}
                </span>
                <span className="text-blue-600">
                  {openFAQ === idx ? "−" : "+"}
                </span>
              </button>

              {openFAQ === idx && (
                <p className="mt-3 text-sm text-slate-600 leading-relaxed animate-fadeIn">
                  {faq.answer}
                </p>
              )}

            </div>
          ))}
        </div>
      </section>
    )
}