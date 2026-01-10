import CategoryHero from '@/components/Category/CategoryHero'
import CourseList from '@/components/Category/CourseList'
import CategoryCTA from '@/components/Category/CategoryCTA'
import Navbar from '@/components/Home/Navbar'
import Footer from '@/components/Home/Footer'
import CourseHelpCTA from '@/components/Category/CourseHelpCTA'
import TopMentors from '@/components/Category/TopMentors'
import FAQs from '@/components/Category/FAQSCategory'
import CategoryOverview from '@/components/Category/CategoryOverview'

interface CategoryCTAProps {
 
   _id: number;
    name: string;
    slug: string;
    description: string;
    banner: string;
    themeColor:string;
 
}


async function getCategory(slug:string) {
    const res = await fetch('/');

    return res.json();
}

async function getCourse(slug:string) {
    const res = await fetch('/');
    return res.json();
}


export default async function page({params}: {params : Promise<{slug:string}>}){
    const {slug} = await params;
    const category : CategoryCTAProps[]  =[{
            _id : 9,
            name: "Web Development",
            slug: "web-development",
            description: "Learn frontend & backend development...",
            banner: "/images/categories/web-dev.webp",
            themeColor: "#2563EB"
         }
       ]

       
    const courses =  [{
            _id: 8,
            title: "Full Stack Web Development",
            slug: "full-stack-web-dev",
            categorySlug: "web-development",
            level: "Beginner",
            duration: "6 Months",
            price: 4999
            }
        ]
     return (
      <>
      <Navbar/>
      <CategoryHero category={category} />
      <CourseList courses={courses} />
      <CourseHelpCTA/>
      <TopMentors/>
      <CategoryOverview/>
      <FAQs/>
      <CategoryCTA  />
      <Footer/>
      
    </>
  );
}