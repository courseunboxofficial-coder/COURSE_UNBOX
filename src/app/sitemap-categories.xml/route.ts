import { supabase } from "@/lib/supabse/supabaseConfig";

const BASE_URL = 'https://courseunbox.com'

export async function GET() {
  const { data: categories } = await supabase
    .from('Category')
    .select('slug, created_at')
    
    const urls = categories?.map(cat => `
    <url>
        <loc>${BASE_URL}/categories/${cat.slug}</loc>
        <lastmod>${new Date(cat.created_at).toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
    </url>
    `).join('')

    return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls}
    </urlset>`,
        {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'public, max-age=3600'
        }
        }
  )
}
