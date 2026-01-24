import { MetadataRoute } from "next";
import { supabase } from "@/lib/supabse/supabaseConfig";

export const revalidate = 86400;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://courseunbox.com";

  const { data: courses, error } = await supabase
    .from("Courses")
    .select("slug, created_at");

  if (error) {
    console.error("Courses sitemap error:", error.message);
    return [];
  }

  return (
    courses?.map((course) => ({
      url: `${baseUrl}/course/${course.slug}`,
      lastModified: course.created_at
        ? new Date(course.created_at)
        : new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    })) ?? []
  );
}
