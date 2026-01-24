
export default function robots(){
    return {
        rules : {
                 userAgent:"*",
                 allow:"/", 
                 disallow: ["/admin/", "/student/"],
                },

        sitemap : 'https://courseunbox.com/sitemap.xml'
    }
}