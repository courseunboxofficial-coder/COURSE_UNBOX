import { supabase } from "@/lib/supabse/supabaseConfig";

const BASE_URL = 'https://courseunbox.com'

export async function GET() {
  const { data: courses } = await supabase
    .from('Courses')
    .select('slug, created_at')
    
    const urls = courses?.map(course => `
    <url>
        <loc>${BASE_URL}/course/${course.slug}</loc>
        <lastmod>${new Date(course.created_at).toISOString()}</lastmod>
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
