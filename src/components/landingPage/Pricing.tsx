"use client";
import React from 'react';
import { useCheckout } from '../contexts/CheckoutContext';

export function Pricing() {
  const { openCheckout } = useCheckout();
  return (
    <section className="py-24 bg-surface-container-low" id="pricing">
      <div className="max-w-4xl mx-auto px-8">
        <div className="bg-surface-container-lowest rounded-xl editorial-shadow overflow-hidden flex flex-col md:flex-row">
          <div className="p-10 md:p-12 flex-1">
            <h2 className="font-headline text-3xl font-bold mb-4">Elite Marketer <span className="text-primary">Pro</span></h2>
            <p className="font-body text-on-surface-variant mb-8">Access the complete AI mastery curriculum, tool stack, and mentorship network.</p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                <span className="font-body text-sm">Full 5-Day Intensive AI Workshop</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                <span className="font-body text-sm">AI Marketing Tool Suite (Worth ₹45k)</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                <span className="font-body text-sm">Lifetime Community Access</span>
              </li>
            </ul>
            <div className="bg-primary-fixed/20 p-4 rounded-lg flex items-center justify-between">
              <div>
                <div className="font-label text-[10px] uppercase font-bold text-primary">Limited Time Offer</div>
                <div className="font-headline text-3xl font-bold">₹99 <span className="text-sm font-normal text-outline line-through">₹4,999</span></div>
              </div>
              <span className="bg-secondary-fixed px-3 py-1 text-[10px] font-bold uppercase rounded-sm">98% OFF</span>
            </div>
          </div>
          <div className="bg-primary p-12 md:w-80 flex flex-col justify-center items-center text-center">
            <div className="text-white/60 font-label text-xs uppercase mb-4">Secure your spot</div>
            <button 
              onClick={openCheckout}
              className="bg-secondary-fixed text-on-secondary-fixed w-full py-4 font-headline font-bold rounded-lg mb-4 hover:scale-105 transition-transform"
            >
              Claim Offer Now
            </button>
            <p className="text-white/40 text-[10px]">Secure 256-bit SSL encrypted payment</p>
            <div className="mt-8 flex gap-2">
              <img alt="Visa" className="h-4 opacity-50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCad5ZvcYK1ziUZ7Ky_LU-8laOOeGpgF95pyXZZeJ00JqFi490t9B3CuHVTUhZ-3olCPjzFETk9LSTQcpXxKgPBNwFTCm6EnhJ_oRNzA1jCS505cVL_K02oAAndTFxmrhzsTHsNgIGOFfBcdHZkHsdtePJfi9gE6E-LuXbzPbqejY0A0p7vRUonbgiiDGfBHo04z4mxZ3Y7CCFZ6egNADlNbPB0scVO_MczhaCJxtih1T0iUAtXbYCInwFuvlJAshE3qgV8aha2GmD8"/>
              <img alt="Mastercard" className="h-4 opacity-50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqXMb-NgMRBjEr9RbE-qFxWGhhtpunOq_GVShD_NKmMGPDfouTcUNAuIL4A5haX0OsmZ1gE2A2YgZmxDNKEY-s9uJMkY6LpQlknSgPfCXEFBlA3OM9SN3HuEoidW_Qb8ZAvcLwSy-i9XFzA2YakxVdiB8QirxdklkxRWBEBb56fZLDT5Dl1cujJbF7C4zGmAvVkdf2NxQfrmvjyre8i6JxxDWJ6GzyxOvjm3pffaDBlCuCF1BlwApJ8KgTzj1BaYhJkQHnFhIFKNxH"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
