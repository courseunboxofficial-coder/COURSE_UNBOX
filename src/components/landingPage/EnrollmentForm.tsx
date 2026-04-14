"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export function EnrollmentForm() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("Missing EmailJS environment variables.");
      setErrorMessage("System configuration error. Please contact support.");
      setStatus("error");
      return;
    }
    console.log(form.current)
    setIsSubmitting(true);
    setStatus(null);
    setErrorMessage("");

    try {
      await emailjs.sendForm(serviceId, templateId, form.current, publicKey);

      setStatus("success");
      form.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
      setErrorMessage(
        "Failed to send message. Please check your connection and try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
      <div>
        <label htmlFor="name" className="sr-only">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="first_name"
          required
          placeholder="Full Name"
          className="w-full px-4 py-3 bg-surface-container-high border border-outline-variant/30 rounded-lg focus:ring-primary focus:border-primary transition-colors"
        />
      </div>

      <div>
        <label htmlFor="email" className="sr-only">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="Email Address"
          className="w-full px-4 py-3 bg-surface-container-high border border-outline-variant/30 rounded-lg focus:ring-primary focus:border-primary transition-colors"
        />
      </div>

      <div>
        <label htmlFor="phone" className="sr-only">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          placeholder="Phone Number"
          className="w-full px-4 py-3 bg-surface-container-high border border-outline-variant/30 rounded-lg focus:ring-primary focus:border-primary transition-colors"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary hover:bg-primary/90 disabled:opacity-50 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
      >
        {isSubmitting ? "Enrolling..." : "Enroll Now"}
      </button>

      {status === "success" && (
        <p className="text-green-500 text-sm text-center mt-2">
          Enrollment successful! We will contact you soon.
        </p>
      )}
      {status === "error" && (
        <p className="text-red-500 text-sm text-center mt-2">{errorMessage}</p>
      )}

      <p className="text-center text-xs text-on-surface-variant mt-2">
        By enrolling, you agree to our Terms of Service.
      </p>
    </form>
  );
}
