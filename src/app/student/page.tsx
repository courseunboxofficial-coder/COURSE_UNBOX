import RecommendedCourse from "@/components/Student/RecommendedCourse";
import StatCard from "@/components/Student/StartCard";
import TrendingCourse from "@/components/Student/TrendingCourse";
import DashboardCTA from '@/components/Student/DashboardCTA'
export default function StudentDashboard() {
  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Courses" value="6" />
        <StatCard title="Assignments" value="12" />
        <StatCard title="Attendance" value="92%" />
        <StatCard title="Results" value="A+" />
      </div>

      {/* Content */}
      <div className="cursor-pointer rounded-2xl border border-blue-100 bg-linear-to-br from-blue-50 to-white p-6 shadow-sm transition-all hover:shadow-lg">
  
        <h2 className="text-2xl font-bold text-[#025378]">
          Welcome Back Rohit 👋
        </h2>

        <p className="mt-2 text-sm text-gray-600 leading-relaxed">
          Check your courses, assignments, and progress from here.
        </p>

        </div>


        <TrendingCourse/>
        <RecommendedCourse/>
        <DashboardCTA/>

    </div>
  );
}
