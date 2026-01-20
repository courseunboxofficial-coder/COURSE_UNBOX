import { MessageCircle, Send } from "lucide-react";

export default function CommunityCTA() {
  return (
    <section className="px-4 sm:px-8 lg:px-12 py-10 sm:py-14">
      <div
        className="
          relative overflow-hidden rounded-2xl
          bg-linear-to-br from-blue-900 via-blue-800 to-blue-900
          p-6 sm:p-10 lg:p-12
          flex flex-col lg:flex-row
          items-center justify-between
          gap-8 lg:gap-12
        "
      >
        {/* LEFT CONTENT */}
        <div className="max-w-xl text-center lg:text-left">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-100 leading-snug">
            Join Our Community & Get Access to <br />
            <span className="text-yellow-400">
              Latest Updates by Top Mentors
            </span>
          </h2>

          {/* CTA BUTTONS */}
          <div className="mt-6 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <button
              className="
                flex items-center justify-center gap-2
                rounded-lg border border-green-500 bg-white
                px-5 py-3 text-sm font-semibold text-green-600
                hover:bg-green-50 transition
              "
            >
              <MessageCircle size={18} />
              Join WhatsApp Group
            </button>

            <button
              className="
                flex items-center justify-center gap-2
                rounded-lg border border-blue-500 bg-white
                px-5 py-3 text-sm font-semibold text-blue-600
                hover:bg-blue-50 transition
              "
            >
              <Send size={18} />
              Join Telegram Channel
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
          <img
            src="/images/Student/c.svg"
            alt="Community illustration"
            className="w-full h-auto"
          />
        </div>

        {/* DECORATIVE DOTS */}
        <div className="absolute top-6 right-6 sm:right-10 w-3 h-3 rounded-full bg-blue-400/40" />
        <div className="absolute bottom-8 right-20 sm:right-32 w-4 h-4 rounded-full bg-blue-300/40" />
      </div>
    </section>
  );
}
