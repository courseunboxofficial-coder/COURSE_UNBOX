"use client";
import Banner from "@/components/Home/Banner";
import Courses from "@/components/Home/Courses";
import Hero from "@/components/Home/Hero";
import Navbar from "@/components/Home/Navbar";
import TopCourses from "@/components/Home/TopCourses";
import Footer from "@/components/Home/Footer"
import Enquiry from "@/components/Home/Enquiry";
import Image from "next/image";

export default function Home() {

  const courses = [
    { id: 1, title: "Web Development with MERN", category: "Development", image: "/images/Home/courseImage.webp" },
    { id: 2, title: "Python", category: "Development", image: "/images/Home/TopCourse.jpg" },
    { id: 3, title: "Data Science", category: "IT & Software", image: "/images/Home/courseImage.webp" },
    { id: 4, title: "Data Analytics", category: "Business", image: "/images/Home/TopCourse.jpg" },
    { id: 5, title: "Power BI", category: "Business", image: "/images/Home/courseImage.webp" },
    { id: 6, title: "UI/UX Design", category: "Design", image: "/images/Home/TopCourse.jpg" },
    { id: 7, title: "Unity 3D", category: "Development", image: "/images/Home/courseImage.webp" },
    { id: 8, title: "React", category: "Development", image: "/images/Home/TopCourse.jpg" },
  ];



  return (


    <main className="w-full min-h-screen bg-white">

      <Navbar />
      <Hero />
      <Banner />
      <Courses courses={courses} />
      <Enquiry/>
      <TopCourses />
      <Footer/>
    </main>

  );
}
