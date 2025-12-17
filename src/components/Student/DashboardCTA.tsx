import { MessageCircle, Send } from "lucide-react";

export default function CommunityCTA() {
  return (
    <section className="px-6 sm:px-12 py-12 shadow-sm rounded-lg">
      <div className="relative overflow-hidden rounded-2xl bg-blue-50 p-8 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-8">
        
        {/* Left Content */}
        <div className="max-w-xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-snug">
            Join Our Community & Get Access to <br />
            <span className="text-blue-600">Latest Updates by Top Mentors</span>
          </h2>

          <div className="mt-6 flex flex-wrap gap-4">
            <button className="flex items-center gap-2 rounded-lg border border-green-500
             bg-white px-5 py-3 text-sm font-semibold text-green-600 hover:bg-green-50 transition cursor-pointer">
              <MessageCircle size={18} />
              Join WhatsApp Group
            </button>

            <button className="flex items-center gap-2 rounded-lg border border-blue-500 
            bg-white px-5 py-3 text-sm font-semibold text-blue-600 hover:bg-blue-50 transition cursor-pointer">
              <Send size={18} />
              Join Telegram Channel
            </button>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="relative w-full max-w-sm">
          <img
            src="/images/Student/c.svg"
            alt="Community illustration"
            className="w-full h-auto"
          />
        </div>

        {/* Soft Decorative Shapes */}
        <div className="absolute top-6 right-10 w-3 h-3 rounded-full bg-blue-400/40" />
        <div className="absolute bottom-10 right-32 w-4 h-4 rounded-full bg-blue-300/40" />
      </div>
    </section>
  );
}
