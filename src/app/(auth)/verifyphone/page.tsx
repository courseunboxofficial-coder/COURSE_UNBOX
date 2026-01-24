"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabse/supabaseConfig";
import { useRouter } from "next/navigation";

export default function PhoneVerification() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const normalizePhone = (input: string) => {
    return "+91" + input.replace(/\D/g, "").slice(-10);
  };

  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        router.replace("/login");
      }
    };

    checkSession();
  }, [router]);
  const sendOtp = async () => {
    if (!phone) {
      alert("Enter phone number");
      return;
    }

    const normalizedPhone = normalizePhone(phone);
    setLoading(true);

    const { error } = await supabase.auth.updateUser({
      phone: normalizedPhone,
    });

    setLoading(false);

    if (error) {
      console.error("OTP SEND ERROR:", error);
      alert(
        "Phone verification is temporarily unavailable. Please use email login."
      );
      return;
    }

    setStep("otp");
  };


  const verifyOtp = async () => {
    if (!otp) {
      alert("Enter OTP");
      return;
    }

    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session) {
      alert("Session expired. Please login again.");
      router.replace("/login");
      return;
    }

    const normalizedPhone = normalizePhone(phone);
    setLoading(true);

    const { error } = await supabase.auth.verifyOtp({
      phone: normalizedPhone,
      token: otp,
      type: "phone_change",
    });

    setLoading(false);

    if (error) {
      alert("Invalid OTP. Please try again.");
      return;
    }

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      alert("Session expired");
      return;
    }

    await supabase
      .from("Student")
      .update({
        phone: user.phone,
        phone_verified: true,
      })
      .eq("id", user.id);

    alert("Phone verified successfully!");
    router.replace("/student");
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-8 border border-blue-100">
      <h2 className="text-2xl font-bold text-blue-900">
        Verify Phone Number
      </h2>
      <p className="text-sm text-gray-500 mt-1">
        We’ll send a verification code to your phone
      </p>


      {step === "phone" && (
        <div className="mt-6 space-y-4">
          <input
            type="tel"
            placeholder="+91 9876543210"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border rounded-lg px-4 py-3 text-sm
              focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={sendOtp}
            disabled={loading}
            className="w-full bg-blue-900 text-white py-3 rounded-lg
              font-semibold hover:bg-blue-800 transition disabled:opacity-50"
          >
            {loading ? "Sending OTP..." : "Send OTP"}
          </button>
        </div>
      )}

  
      {step === "otp" && (
        <div className="mt-6 space-y-4">
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="w-full border rounded-lg px-4 py-3 text-center tracking-widest"
          />

          <button
            onClick={verifyOtp}
            disabled={loading}
            className="w-full bg-yellow-400 py-3 rounded-lg font-bold hover:bg-yellow-300 disabled:opacity-50"
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </button>

          
          <button
            onClick={() => {
              setOtp("");
              setStep("phone");
            }}
            className="w-full border border-blue-600 text-blue-600 py-2 rounded-lg
              font-medium hover:bg-blue-50 transition"
          >
            Change phone number
          </button>
        </div>
      )}
    </div>
  );
}
