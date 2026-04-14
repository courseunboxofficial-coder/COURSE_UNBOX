"use client"
import { useCheckout } from "@/context/CheckoutContext";

const FooterLandingPage = () => {
    const { openEnrollment } = useCheckout();
  return (
    <div className="max-w-5xl mx-auto px-4 mt-20 mb-12 relative z-20">
      <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 editorial-shadow">
        {/* Text Section */}
        <div className="text-center md:text-left">
          <h3 className="text-xl md:text-2xl font-bold mb-1 text-on-surface">
            Your next big career move starts here.
          </h3>
          <p className="text-sm text-on-surface-variant">
            Don't wait—secure your spot in the upcoming batch today.
          </p>
        </div>

        {/* Button Section */}
        <button onClick={openEnrollment} className="shrink-0 w-full md:w-auto px-8 py-3.5 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all active:scale-95 shadow-lg shadow-primary/20">
          Enroll Now
        </button>
      </div>
    </div>
  );
}

export default FooterLandingPage