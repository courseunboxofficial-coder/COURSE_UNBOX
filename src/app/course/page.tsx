import Hero from "@/components/AllCourses/Hero"
import FilterSortBar from "@/components/AllCourses/FilterSortBar"
import CourseContainer from '@/components/AllCourses/CourseContainer'
import Navbar from "@/components/Home/Navbar"
import Footer from "@/components/Home/Footer"
import AllCoursesFAQs from '@/components/AllCourses/AllCoursesFAQs'
import FinalCTA from "@/components/AllCourses/FinalCTA"
export default function page(){
    return (
        <>
        <Navbar/>
        <Hero/>
        <CourseContainer/>
        <AllCoursesFAQs/>
        <FinalCTA/>
        <Footer/>
        </>
    )
}