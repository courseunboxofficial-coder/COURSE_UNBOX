import StudentProfile from "@/components/Student/StudentProfile";

async function getStudentProfile() {
  // Later fetch from DB
  return {
    name: "Rohit Juyal",
    email: "rohit@gmail.com",
    phone: "+91 9876543210",
    degree: "B.Sc Computer Science",
    semester: "Final Year",
    institute: "Kumaun University",
    joinedAt: "2023-08-12",
    lastLogin: "2025-09-14",
    role: "Student",
  };
}

export default async function ProfilePage() {
  const profile = await getStudentProfile();

  return <StudentProfile profile={profile} />;
}
