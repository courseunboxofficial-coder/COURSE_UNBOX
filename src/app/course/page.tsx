import Hero from "@/components/AllCourses/Hero"
import FilterSortBar from "@/components/AllCourses/FilterSortBar"
import CourseContainer from '@/components/AllCourses/CourseContainer'
import Navbar from "@/components/Home/Navbar"
import Footer from "@/components/Home/Footer"
import AllCoursesFAQs from '@/components/AllCourses/AllCoursesFAQs'
import FinalCTA from "@/components/AllCourses/FinalCTA"
import CoursesOverview from "@/components/AllCourses/CourseOverview"
import AllCoursesCTA from "@/components/AllCourses/AllCoursesCTA"
import type { Metadata } from "next"

export const metadata = {
  title: "All Courses | Digital Marketing, Tech & Career Programs – Course Unbox",
  description:
    "Explore all courses at Course Unbox, including digital marketing, technology, and career-focused programs. Learn practical skills and grow with industry-ready training.",
};


export default function page(){
    return (
        <>
        <Navbar/>
        <Hero/>
        <CourseContainer/>
        <AllCoursesCTA/>
        <CoursesOverview/>
        <AllCoursesFAQs/>
        <FinalCTA/>
        <Footer/>
        </>
    )
}