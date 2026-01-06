"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Who can attend this masterclass?",
    answer:
      "This masterclass is suitable for students, working professionals, entrepreneurs, and anyone interested in learning AI and Digital Marketing, regardless of prior experience.",
  },
  {
    question: "Is this masterclass really free?",
    answer:
      "Yes, the masterclass is completely free. There are no hidden charges or commitments.",
  },
  {
    question: "Will I get a recording if I miss the session?",
    answer:
      "Yes, registered participants will receive access to the session recording after the masterclass.",
  },
  {
    question: "How long is the masterclass?",
    answer:
      "The masterclass typically lasts between 60 to 90 minutes, including a live Q&A session.",
  },
  {
    question: "Will I receive a certificate?",
    answer:
      "Yes, participants who attend the full session will receive a certificate of participation.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      
      {/* Heading */}
      <div className="mb-10 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
          Frequently Asked <span className="text-blue-600">Questions</span>
        </h2>
        <p className="mt-3 text-gray-600">
          Everything you need to know before joining the masterclass
        </p>
      </div>

      {/* FAQ List */}
      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="
                rounded-xl border border-gray-100 bg-white
                shadow-md transition 
              "
            >
              <button
                onClick={() =>
                  setOpenIndex(isOpen ? null : index)
                }
                className="
                  w-full flex items-center justify-between gap-4
                  px-6 py-4 text-left cursor-pointer
                "
              >
                <span className="font-semibold text-gray-900">
                  {faq.question}
                </span>

                <span
                  className={`
                    flex h-8 w-8 items-center justify-center rounded-full
                    bg-blue-50 text-blue-600
                    transition-transform duration-300
                    ${isOpen ? "rotate-180" : ""}
                  `}
                >
                  <ChevronDown size={18} />
                </span>
              </button>

              {isOpen && (
                <div className="px-6 pb-4 text-sm leading-relaxed text-gray-600">
                  {faq.answer}
                </div>
              )}

              
              <div className="h-0.5 bg-linear-to-r from-blue-500 rounded-b-xl" />
            </div>
          );
        })}
      </div>
    </section>
  );
}
