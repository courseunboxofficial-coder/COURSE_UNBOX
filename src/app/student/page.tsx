import RecommendedCourse from "@/components/Student/RecommendedCourse";
import StatCard from "@/components/Student/StartCard";
import TrendingCourse from "@/components/Student/TrendingCourse";
import DashboardCTA from '@/components/Student/DashboardCTA'
export default function StudentDashboard() {
  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Courses" value="6" color="blue" />
        <StatCard title="Attendance" value="92%" color="emerald" />
        <StatCard title="Assignments" value="12" color="pink" />
        <StatCard title="Results" value="A+" color="yellow" />

      </div>

        {/* Content */}
        <div className="cursor-pointer rounded-2xl border border-blue-100 bg-linear-to-br from-blue-900 via-blue-800 to-blue-900 p-6 shadow-sm transition-all hover:shadow-lg">
    
          <h2 className="text-2xl font-bold text-[#ffffff]">
            Welcome Back   <span className="animate-spin text-yellow-400">Rohit👋</span>
          </h2>

          <p className="mt-2 text-sm text-yellow-400 font-bold leading-relaxed">
            Check your courses, assignments, and progress from here.
          </p>

        </div>


        <TrendingCourse/>
        <RecommendedCourse/>
        <DashboardCTA/>

    </div>
  );
}
