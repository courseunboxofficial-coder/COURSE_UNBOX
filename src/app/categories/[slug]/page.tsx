import CategoryHero from '@/components/Category/CategoryHero'
import CourseList from '@/components/Category/CourseList'
import CategoryCTA from '@/components/Category/CategoryCTA'
import Navbar from '@/components/Home/Navbar'
import Footer from '@/components/Home/Footer'
import CourseHelpCTA from '@/components/Category/CourseHelpCTA'
import TopMentors from '@/components/Category/TopMentors'
import FAQs from '@/components/Category/FAQSCategory'
import CategoryOverview from '@/components/Category/CategoryOverview'
import { supabase } from '@/lib/supabse/supabaseConfig'
import { notFound } from 'next/navigation'




async function getCategory(slug:string) {
    const {data , error} = await supabase.from("Category").select("*").eq("slug", slug).single();

    if(error){

        console.log("There is some of the error that we have got : ");
        console.log(error);

    }

    return data;
}




export default async function page({params}: {params : Promise<{slug:string}>}){
    const {slug} = await params;
    const category = await getCategory(slug);


    if(category == null){
        notFound();
    }
    
     return (

      <>
      <Navbar/>
      <CategoryHero category={category} />
      <CourseList/>
      <CourseHelpCTA/>
      <TopMentors/>
      <CategoryOverview category={category}/>
      <FAQs category={category}/>
      <CategoryCTA  />
      <Footer/>
      
    </>
  );
}