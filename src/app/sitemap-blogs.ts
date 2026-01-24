import { MetadataRoute } from "next";
import { supabase } from "@/lib/supabse/supabaseConfig";

export const revalidate = 86400;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://courseunbox.com";

  const { data: blogs, error } = await supabase
    .from("Blog")
    .select("slug, created_at");

  if (error) {
    console.error("Blogs sitemap error:", error.message);
    return [];
  }

  return (
    blogs?.map((blog) => ({
      url: `${baseUrl}/blog/${blog.slug}`,
      lastModified: blog.created_at
        ? new Date(blog.created_at)
        : new Date(),
      changeFrequency: "daily",
      priority: 0.6,
    })) ?? []
  );
}
