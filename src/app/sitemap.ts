import { supabase } from "@/lib/supabse/supabaseConfig";

export default async function sitemap() {
  //  courses
  const { data: courses } = await supabase
    .from("Courses")
    .select("*");

  //  blogs
  const { data: blogs } = await supabase
    .from("Blog")
    .select('*');

  const baseUrl = "https://course-unbox-8nec.vercel.app";

  const courseUrls =
    courses?.map((course) => ({
      url: `${baseUrl}/courses/${course.id}`,
      lastModified: course.updatedAt
        ? new Date(course.updatedAt)
        : new Date(),
    })) ?? [];

  const blogUrls =
    blogs?.map((blog) => ({
      url: `${baseUrl}/blog/${blog.id}`,
      lastModified: blog.updatedAt
        ? new Date(blog.updatedAt)
        : new Date(),
    })) ?? [];

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...courseUrls,
    ...blogUrls,
  ];
}
