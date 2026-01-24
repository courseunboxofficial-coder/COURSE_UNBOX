const BASE_URL = 'https://courseunbox.com'

export async function GET() {
  return new Response(
        `<?xml version="1.0" encoding="UTF-8"?>
            <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

            <sitemap>
                <loc>${BASE_URL}/sitemap-pages.xml</loc>
            </sitemap>

            <sitemap>
                <loc>${BASE_URL}/sitemap-courses.xml</loc>
            </sitemap>

            <sitemap>
                <loc>${BASE_URL}/sitemap-categories.xml</loc>
            </sitemap>

             <sitemap>
                <loc>${BASE_URL}/sitemap-blogs.xml</loc>
            </sitemap>
            

            </sitemapindex>`,
        {
            headers: {
                'Content-Type': 'application/xml',
                'Cache-Control': 'public, max-age=3600'
            }
    }
  )
}
