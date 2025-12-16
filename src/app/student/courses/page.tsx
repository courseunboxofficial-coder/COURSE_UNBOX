import MyCourses from "@/components/Student/MyCourses";

async function getMyCourses() {
  // Later this will come from DB
  // For now simulate empty result
  return [{id:"3234" , title:"Python Programing Course" , progress:99}];
}

export default async function CoursesPage() {
  const courses = await getMyCourses();

  return <MyCourses courses={courses} />;
}
