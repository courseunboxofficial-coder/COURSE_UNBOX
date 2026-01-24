import { supabase } from "@/lib/supabse/supabaseConfig"

const BASE_URL = 'https://courseunbox.com'

export async function GET() {
  const { data: courses } = await supabase
    .from('Blog')
    .select('slug, created_at')
   

  const urls = courses?.map(course => `
  <url>
    <loc>${BASE_URL}/blog/${course.slug}</loc>
    <lastmod>${new Date(course.created_at).toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  `).join('')

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.8">
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
