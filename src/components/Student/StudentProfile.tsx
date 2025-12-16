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
    <div className="bg-white rounded-xl shadow p-8 max-w-4xl">
      {/* HEADER */}
      <div className="flex items-center gap-6 border-b pb-6">
        <Image
          src="/images/avatar.png"
          alt="Profile"
          width={80}
          height={80}
          className="rounded-full"
        />

        <div>
          <h1 className="text-2xl font-bold text-[#025378]">
            {profile.name}
          </h1>
          <p className="text-gray-600">{profile.email}</p>
        </div>
      </div>

      {/* INFO GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
        <InfoItem icon={User} label="Name" value={profile.name} />
        <InfoItem icon={Mail} label="Email" value={profile.email} />
        <InfoItem icon={Phone} label="Phone" value={profile.phone} />
        <InfoItem icon={GraduationCap} label="Degree" value={profile.degree} />
        <InfoItem icon={Calendar} label="Semester" value={profile.semester} />
        <InfoItem icon={Calendar} label="Institute" value={profile.institute} />
        <InfoItem icon={Calendar} label="Joined" value={profile.joinedAt} />
        <InfoItem icon={Calendar} label="Last Login" value={profile.lastLogin} />
      </div>

      {/* ACTIONS */}
      <div className="flex gap-4 mt-8">
        <button className="bg-[#025378] text-white px-6 py-2 rounded-lg hover:bg-[#01334A]">
          Edit Profile
        </button>

        <button className="border border-[#025378] text-[#025378] px-6 py-2 rounded-lg">
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
}: {
  icon: any;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-4 bg-[#E6F3FA] p-4 rounded-lg">
      <Icon className="text-[#025378]" />
      <div>
        <p className="text-xs text-gray-600">{label}</p>
        <p className="font-medium">{value}</p>
      </div>
    </div>
  );
}
