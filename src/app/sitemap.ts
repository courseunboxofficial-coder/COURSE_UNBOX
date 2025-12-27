import { supabase } from "@/lib/supabse/supabaseConfig";

export default async function sitemap() {
     const {data} = await supabase.from('Courses').select('*');


    const coursesPageUrl = data ? data.map((p,idx)=>(
     {
        url : `https://course-unbox-8nec.vercel.app/'${p.id}`,
        lastModified : p.updatedAt
     }
    )) : [];

   

    
    return [
        {
            url : "https://course-unbox-8nec.vercel.app/'",
            lastModified : new Date()
        }
        ,
        ...coursesPageUrl,
      
    ]
}