"use client";
import React from "react";
import { EnrollmentForm } from "./EnrollmentForm";

export function EnrollmentModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden relative animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        <div className="p-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Enroll Now</h2>
          <p className="text-slate-500 mb-6 text-sm">
            Start your journey to becoming a digital marketing expert.
          </p>
          <EnrollmentForm />
        </div>
      </div>
    </div>
  );
}
