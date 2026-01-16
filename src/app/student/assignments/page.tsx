"use client";

import { useState } from "react";

export default function AssignmentPage() {
  const [notify, setNotify] = useState(true);
  const [autoSave, setAutoSave] = useState(true);
  const [lateSubmission, setLateSubmission] = useState(false);

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 px-4 py-10">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-10 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white shadow-lg">
          <h1 className="text-3xl font-semibold">
            Assignments
          </h1>
          <p className="text-sm text-blue-100 mt-1">
            View, manage, and submit your assignments efficiently.
          </p>
        </div>

        {/* Assignment Cards */}
        <div className="grid gap-6">

          {/* Assignment Visibility */}
          <div className="bg-white/80 backdrop-blur rounded-2xl border border-blue-100 p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium text-gray-800">
                  Assignment Visibility
                </h3>
                <p className="text-sm text-gray-500">
                  Show upcoming assignments on dashboard
                </p>
              </div>

              <Toggle value={true} />
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-white/80 backdrop-blur rounded-2xl border border-blue-100 p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium text-gray-800">
                  Assignment Notifications
                </h3>
                <p className="text-sm text-gray-500">
                  Get notified before assignment deadlines
                </p>
              </div>

              <button
                onClick={() => setNotify(!notify)}
                className={`w-14 h-7 flex items-center rounded-full px-1 transition ${
                  notify ? "bg-blue-600" : "bg-gray-300"
                }`}
              >
                <span
                  className={`w-5 h-5 bg-white rounded-full shadow transform transition ${
                    notify ? "translate-x-7" : ""
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Submission Settings */}
          <div className="bg-white/80 backdrop-blur rounded-2xl border border-blue-100 p-6 shadow-sm">
            <h3 className="text-lg font-medium text-gray-800 mb-1">
              Submission Preferences
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              Configure how you submit assignments
            </p>

            <div className="flex gap-4 flex-wrap">
              <button
                onClick={() => setAutoSave(!autoSave)}
                className={`px-4 py-2 rounded-xl text-sm font-medium border transition ${
                  autoSave
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-600 border-gray-200"
                }`}
              >
                Auto-save Draft
              </button>

              <button
                onClick={() => setLateSubmission(!lateSubmission)}
                className={`px-4 py-2 rounded-xl text-sm font-medium border transition ${
                  lateSubmission
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-600 border-gray-200"
                }`}
              >
                Allow Late Submission
              </button>
            </div>
          </div>

          {/* Upload Section */}
          <div className="bg-white/80 backdrop-blur rounded-2xl border border-blue-100 p-6 shadow-sm">
            <h3 className="text-lg font-medium text-gray-800 mb-3">
              Assignment Upload
            </h3>

            <div className="border-2 border-dashed border-blue-300 rounded-xl p-6 text-center bg-blue-50">
              <p className="text-sm text-gray-600">
                Drag & drop files here or
              </p>
              <button className="mt-3 rounded-lg bg-blue-600 px-6 py-2 text-white text-sm font-medium hover:bg-blue-700 transition">
                Browse Files
              </button>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <button className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-3 text-white font-medium shadow hover:opacity-90 transition">
              Save Preferences
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

/* Reusable Toggle */
function Toggle({ value }: { value: boolean }) {
  return (
    <div
      className={`w-14 h-7 flex items-center rounded-full px-1 ${
        value ? "bg-blue-600" : "bg-gray-300"
      }`}
    >
      <span
        className={`w-5 h-5 bg-white rounded-full shadow transform ${
          value ? "translate-x-7" : ""
        }`}
      />
    </div>
  );
}
