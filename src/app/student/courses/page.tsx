import MyCourses from "@/components/Student/MyCourses";
import CounselorCTA from "@/components/Student/CounselorCTA";
async function getMyCourses() {
  // Later this will come from DB
  // For now simulate empty result
  return [{ id: "3234", title: "Python Programing Course", progress: 59, image: "https://www.cdmi.in/courses@2x/python-training-institute.webp" }];
}

export default async function CoursesPage() {
  const courses = await getMyCourses();

  return (<section>
    <h2 className="font-bold text-3xl sm:text-4xl text-[#025378] mb-8">
      My Courses
    </h2>
    <MyCourses courses={courses} />
    <CounselorCTA />
  </section>
  )
}
