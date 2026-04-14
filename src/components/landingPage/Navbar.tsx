"use client";
import React from 'react';
import { useCheckout } from '../contexts/CheckoutContext';

export function Navbar() {
  const { openCheckout } = useCheckout();
  return (
    <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl shadow-sm">
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
        <div className="text-xl font-bold tracking-tighter text-blue-900">Course <span className="text-secondary-container">UNBOX</span></div>
        <nav className="hidden md:flex items-center space-x-8">
          <a className="font-headline font-semibold tracking-tight text-blue-900 border-b-2 border-blue-900 pb-1" href="#curriculum">Curriculum</a>
          <a className="font-headline font-semibold tracking-tight text-slate-600 hover:text-blue-900 transition-colors" href="#mentors">Mentors</a>
          <a className="font-headline font-semibold tracking-tight text-slate-600 hover:text-blue-900 transition-colors" href="#testimonials">Success Stories</a>
          <a className="font-headline font-semibold tracking-tight text-slate-600 hover:text-blue-900 transition-colors" href="#tools">AI Tools</a>
        </nav>
        <button 
          onClick={openCheckout}
          className="bg-secondary-container text-on-secondary-fixed px-6 py-2.5 font-headline font-bold rounded-lg hover:scale-105 active:scale-95 transition-transform"
        >
          Apply Now
        </button>
      </div>
    </header>
  );
}
