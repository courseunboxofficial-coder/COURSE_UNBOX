"use client";

import { useState } from "react";

export default function ResultSettings() {
  const [showResult, setShowResult] = useState(true);
  const [emailNotify, setEmailNotify] = useState(true);
  const [resultFormat, setResultFormat] = useState("grades");

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 px-4 py-10">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-10 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white shadow-lg">
          <h1 className="text-3xl font-semibold">
            Result Settings
          </h1>
          <p className="text-sm text-blue-100 mt-1">
            Customize how your academic results appear and notify you.
          </p>
        </div>

        {/* Settings Cards */}
        <div className="grid gap-6">

          {/* Visibility */}
          <div className="bg-white/80 backdrop-blur rounded-2xl border border-blue-100 p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium text-gray-800">
                  Result Visibility
                </h3>
                <p className="text-sm text-gray-500">
                  Control visibility of results in dashboard
                </p>
              </div>

              <button
                onClick={() => setShowResult(!showResult)}
                className={`w-14 h-7 flex items-center rounded-full px-1 transition ${
                  showResult ? "bg-blue-600" : "bg-gray-300"
                }`}
              >
                <span
                  className={`w-5 h-5 bg-white rounded-full shadow transform transition ${
                    showResult ? "translate-x-7" : ""
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Result Format */}
          <div className="bg-white/80 backdrop-blur rounded-2xl border border-blue-100 p-6 shadow-sm">
            <h3 className="text-lg font-medium text-gray-800 mb-1">
              Result Display Format
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              Choose how your performance is shown
            </p>

            <div className="flex gap-4">
              {["grades", "percentage", "cgpa"].map((type) => (
                <button
                  key={type}
                  onClick={() => setResultFormat(type)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition border ${
                    resultFormat === type
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white text-gray-600 border-gray-200 hover:border-blue-400"
                  }`}
                >
                  {type.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-white/80 backdrop-blur rounded-2xl border border-blue-100 p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium text-gray-800">
                  Result Notifications
                </h3>
                <p className="text-sm text-gray-500">
                  Get email alerts when results are published
                </p>
              </div>

              <button
                onClick={() => setEmailNotify(!emailNotify)}
                className={`w-14 h-7 flex items-center rounded-full px-1 transition ${
                  emailNotify ? "bg-blue-600" : "bg-gray-300"
                }`}
              >
                <span
                  className={`w-5 h-5 bg-white rounded-full shadow transform transition ${
                    emailNotify ? "translate-x-7" : ""
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Downloads */}
          <div className="bg-white/80 backdrop-blur rounded-2xl border border-blue-100 p-6 shadow-sm">
            <h3 className="text-lg font-medium text-gray-800 mb-3">
              Download Results
            </h3>

            <div className="flex gap-4">
              <button className="flex-1 rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm font-medium text-blue-700 hover:bg-blue-100 transition">
                Download PDF
              </button>
              <button className="flex-1 rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm font-medium text-blue-700 hover:bg-blue-100 transition">
                Download Excel
              </button>
            </div>
          </div>

          {/* Save */}
          <div className="flex justify-end">
            <button className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-3 text-white font-medium shadow hover:opacity-90 transition">
              Save Settings
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
