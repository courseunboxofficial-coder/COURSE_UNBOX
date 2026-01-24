import { supabase } from "@/lib/supabse/supabaseConfig";
import { MetadataRoute } from "next";

export const revalidate = 86400;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://courseunbox.com";

  return [
    { url: `${baseUrl}/sitemap-pages.xml`, lastModified: new Date() },
    { url: `${baseUrl}/sitemap-courses.xml`, lastModified: new Date() },
    { url: `${baseUrl}/sitemap-blogs.xml`, lastModified: new Date() },
  ];
}

// export default async function sitemap(){
//   const baseUrl = "https://courseunbox.com";

//   const { data: courses, error: courseError } = await supabase
//     .from("Courses")
//     .select("slug, created_at");

//   const { data: blogs, error: blogError } = await supabase
//     .from("Blog")
//     .select("slug, created_at");

//   if (courseError) {
//     console.error("Courses sitemap error:", courseError.message);
//   }

//   if (blogError) {
//     console.error("Blog sitemap error:", blogError.message);
//   }

//   const courseUrls =
//     courses?.map(course => ({
//       url: `${baseUrl}/course/${course.slug}`,
//       lastModified: new Date(
//          course.created_at
//       ),
//       changeFrequency: "weekly",
//       priority: 0.8,
//     })) ?? [];

//   const blogUrls =
//     blogs?.map(blog => ({
//       url: `${baseUrl}/blog/${blog.slug}`,
//       lastModified: new Date(
//          blog.created_at
//       ),
//       changeFrequency: "daily",
//       priority: 0.6,
//     })) ?? [];

//   return [
//     {
//       url: baseUrl,
//       lastModified: new Date(),
//       changeFrequency: "monthly",
//       priority: 1,
//     },
//     {
//       url: `${baseUrl}/course`,
//       lastModified: new Date(),
//       changeFrequency: "weekly",
//       priority: 0.9,
//     },
//     {
//       url: `${baseUrl}/blog`,
//       lastModified: new Date(),
//       changeFrequency: "weekly",
//       priority: 0.9,
//     },
//     ...courseUrls,
//     ...blogUrls,
//   ];
// }
