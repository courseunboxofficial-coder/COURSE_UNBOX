"use client";

import Image from "next/image";
import { User, Mail, Phone, GraduationCap, Calendar } from "lucide-react";

type Profile = {
  name: string;
  email: string;
  phone: string;
  degree: string;
  semester: string;
  institute: string;
  joinedAt: string;
  lastLogin: string;
  role: string;
};

export default function StudentProfile({ profile }: { profile: Profile }) {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 rounded-2xl shadow-xl p-8 max-w-4xl border border-blue-100">
      
      {/* HEADER */}
      <div className="flex items-center gap-6 pb-6 border-b border-blue-100">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400 to-indigo-400 blur-md opacity-40" />
          <Image
            src="/images/Student/UnboxProfile.png"
            alt="Profile"
            width={80}
            height={80}
            className="relative rounded-full bg-white p-1"
          />
        </div>

        <div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            {profile.name}
          </h1>
          <p className="text-gray-600">{profile.email}</p>
        </div>
      </div>

      {/* INFO GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
        <InfoItem icon={User} label="Name" value={profile.name} color="blue" />
        <InfoItem icon={Mail} label="Email" value={profile.email} color="indigo" />
        <InfoItem icon={Phone} label="Phone" value={profile.phone} color="emerald" />
        <InfoItem icon={GraduationCap} label="Degree" value={profile.degree} color="violet" />
        <InfoItem icon={Calendar} label="Semester" value={profile.semester} color="amber" />
        <InfoItem icon={Calendar} label="Institute" value={profile.institute} color="cyan" />
        <InfoItem icon={Calendar} label="Joined" value={profile.joinedAt} color="rose" />
        <InfoItem icon={Calendar} label="Last Login" value={profile.lastLogin} color="teal" />
      </div>

      {/* ACTIONS */}
      <div className="flex flex-wrap gap-4 mt-10">
        <button className="px-6 py-3 rounded-xl text-white font-medium bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md hover:shadow-lg hover:scale-[1.03] transition-all cursor-pointer">
          Edit Profile
        </button>

        <button className="px-6 py-3 rounded-xl font-medium border border-indigo-300 text-indigo-600 bg-white hover:bg-indigo-50 hover:scale-[1.03] transition-all cursor-pointer">
          Change Password
        </button>
      </div>
    </div>
  );
}

function InfoItem({
  icon: Icon,
  label,
  value,
  color,
}: {
  icon: any;
  label: string;
  value: string;
  color: string;
}) {
  return (
    <div className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition cursor-pointer border border-gray-100">
      
      <div
        className={`p-3 rounded-lg bg-${color}-100 text-${color}-600`}
      >
        <Icon size={20} />
      </div>

      <div>
        <p className="text-xs text-gray-500">{label}</p>
        <p className="font-semibold text-gray-800">{value}</p>
      </div>
    </div>
  );
}
