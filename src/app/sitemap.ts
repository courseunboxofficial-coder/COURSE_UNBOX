import { supabase } from "@/lib/supabse/supabaseConfig";

export const revalidate = 60;

export default async function sitemap() {
  //  courses
  const { data: courses } = await supabase
    .from("Courses")
    .select("*");

  //  blogs
  const { data: blogs } = await supabase
    .from("Blog")
    .select('*');

  const baseUrl = "https://courseunbox.com";

  const courseUrls =
    courses?.map((course) => ({
      url: `${baseUrl}/course/${course.slug}`,
      lastModified: course.updatedAt
        ? new Date(course.updatedAt)
        : new Date(),
        changeFrequency : 'monthly',
        priority : 0.8
      
      
    })) ?? [];

  const blogUrls =
    blogs?.map((blog) => ({
      url: `${baseUrl}/blog/${blog.slug}`,
      lastModified: blog.updatedAt
        ? new Date(blog.updatedAt)
        : new Date(),
      changeFrequency : 'daily',
      priority : 0.6
    })) ?? [];

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency : 'yearly',
      priority : 1
    },
    ...courseUrls,
    ...blogUrls,
  ];
}
