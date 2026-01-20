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

    
      <div className="group relative cursor-pointer overflow-hidden rounded-2xl 
                border border-blue-400/30 
                bg-linear-to-br from-blue-900 via-indigo-800 to-blue-900
                p-6 shadow-lg transition-all duration-500
                hover:scale-[1.02] hover:shadow-blue-500/40">

          <div className="absolute inset-0 bg-linear-to-r 
                          from-blue-500 via-indigo-400 to-purple-500 
                          opacity-20 blur-2xl 
                          group-hover:opacity-40 transition duration-500" />


          <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full 
                          bg-blue-400/30 blur-xl animate-pulse" />
          <div className="absolute bottom-4 left-6 w-10 h-10 rounded-full 
                          bg-purple-400/30 blur-lg animate-bounce" />


          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Welcome Back{" "}
              <span className="inline-block text-yellow-400 animate-[wiggle_1s_ease-in-out_infinite]">
                Rohit 👋
              </span>
            </h2>

            <p className="mt-2 text-sm text-blue-200 font-medium leading-relaxed">
              Check your courses, assignments, and progress from here.
            </p>
          </div>


          <div className="absolute inset-0 rounded-2xl 
                          border border-transparent 
                          group-hover:border-blue-400/60 
                          transition duration-500" />
     </div>





        <TrendingCourse/>
        <RecommendedCourse/>
        <DashboardCTA/>

    </div>
  );
}
