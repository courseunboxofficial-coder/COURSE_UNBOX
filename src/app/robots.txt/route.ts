export async function GET() {
  return new Response(
`User-agent: *
  Allow: /
  Disallow: /admin/
  Disallow: /student/

Sitemap: https://courseunbox.com/sitemap.xml
`,
    {
      headers: {
        "Content-Type": "text/plain",
      },
    }
  );
}
