const BASE_URL = "https://courseunbox.com";

export const dynamic = "force-static";
export const revalidate = 3600;

export async function GET() {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/Category?select=slug,created_at`,
            {
                headers: {
                    apikey: process.env.NEXT_PUBLIC_SUPABASE_KEY!,
                    Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_KEY!}`,
                },
                cache: "force-cache",
            }
        );

        if (!res.ok) throw new Error("Failed to fetch categories");

        const categories = await res.json();

        const urls = categories
            .map(
                (cat: any) => `
  <url>
    <loc>${BASE_URL}/categories/${cat.slug}</loc>
    <lastmod>${new Date(cat.created_at).toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
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
        console.error("Category sitemap error:", error);
        return new Response("", { status: 500 });
    }
}
