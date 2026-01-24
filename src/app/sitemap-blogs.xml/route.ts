const BASE_URL = "https://courseunbox.com";

export const dynamic = "force-static";
export const revalidate = 3600;

export async function GET() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/Blog?select=slug,created_at`,
      {
        headers: {
          apikey: process.env.NEXT_PUBLIC_SUPABASE_KEY!,
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_KEY!}`,
        },
        cache: "force-cache",
      }
    );

    if (!res.ok) throw new Error("Failed to fetch blogs");

    const blogs = await res.json();

    const urls = blogs
      .map(
        (blog: any) => `
  <url>
    <loc>${BASE_URL}/blog/${blog.slug}</loc>
    <lastmod>${new Date(blog.created_at).toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>`
      )
      .join("");

    return new Response(
      `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`,
      {
        headers: {
          "Content-Type": "application/xml",
          "Cache-Control": "public, max-age=3600",
        },
      }
    );
  } catch (error) {
    console.error("Sitemap build error:", error);
    return new Response("", { status: 500 });
  }
}
