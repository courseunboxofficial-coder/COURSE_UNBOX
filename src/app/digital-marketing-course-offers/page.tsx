"use client";

import FinalMasterclassForm from "@/components/About/FinalMasterclassForm";
import PopUpForm from "@/components/AllCourses/PopUpForm";
import { CheckCircle, Star, Rocket, Briefcase, Clock, FileText } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import {
    Search,
    MousePointerClick,
    Medal,
    Mail,
    Smartphone,
    BarChart3,
    Brain,
    Video,
} from "lucide-react";

export default function DigitalMarketingDiploma() {

    const [isOpen, setIsOpen] = useState(false);
    const [canDownload, setCanDownload] = useState(false);


    const triggerBrochureDownload = () => {
        const link = document.createElement("a");
        link.href = "/Course Unbox Brochure.pdf";
        link.download = "Course-Unbox-Digital-Marketing-Brochure.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            <PopUpForm isOpen={isOpen} onCancel={() => setIsOpen(false)} onConfirm={() => { setIsOpen(false); setCanDownload(true); triggerBrochureDownload() }} />

            <main className="bg-gradient-to-b from-[#0B1C3F] to-[#102B6A] text-white">

                {/* HERO SECTION */}
                <section className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="flex items-center justify-center">

                            <div className="mb-10 bg-white flex items-center justify-center inline-block">
                                <Image
                                    src="/images/Home/CourseUnboxLogo.webp"
                                    alt="logo"
                                    width={300}
                                    height={60}
                                    className=" cursor-pointer w-28 md:w-44 lg:w-52 xl:w-64 h-auto"
                                    priority
                                />
                            </div>

                        </div>

                        <div className="mb-4">
                            <span className="bg-yellow-400/20 text-yellow-400 px-4 py-1 rounded-full text-sm ">
                                Diploma Program • Industry Ready
                            </span>
                        </div>

                        <h1 className="text-3xl sm:text-3xl md:text-5xl font-bold leading-tight">
                            AI Based Digital Marketing <span className="text-yellow-400">Diploma</span> Program in Delhi NCR
                        </h1>

                        <p className="mt-6 text-lg text-gray-200">
                            Master SEO, Google Ads, Meta Ads, AI Tools & Analytics with
                            real-world projects, certifications, and placement support.
                        </p>

                        <div className="mt-8 flex gap-4 flex-col md:flex-row">
                            <button className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-300 md:py-3 transition cursor-pointer" onClick={() => setIsOpen(true)}>
                                Enroll Now
                            </button>
                            <button
                                className="border border-white/30 px-6 py-3 rounded-xl hover:bg-white/10 transition flex items-center gap-2 cursor-pointer"
                                onClick={() => {
                                    if (canDownload) {
                                        triggerBrochureDownload();
                                    } else {
                                        setIsOpen(true); // force popup first
                                    }
                                }}
                            >
                                <FileText size={22} />
                                <span>Download Brochure</span>
                            </button>
                        </div>

                        <div className="mt-6 flex items-center gap-2 text-sm text-gray-300">
                            ⭐⭐⭐⭐⭐ <span>Rated 4.9/5 by 10,000+ Students</span>
                        </div>

                        {/* ================= STATS SECTION ================= */}
                        <div className="max-w-7xl mx-auto px-1 py-10">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">

                                {/* Stat 1 */}
                                <div className="bg-[#0F2B5B] rounded-2xl p-8 text-center w-full cursor-pointer hover:shadow-2xl hover:scale-110 transition">
                                    <div className="w-full h-14 mx-auto mb-4 bg-yellow-400/20 rounded-full flex items-center justify-center text-yellow-400">
                                        👥
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">1,00,000+</h3>
                                    <p className="mt-1 text-yellow-400 font-medium">Students Trained</p>
                                </div>

                                {/* Stat 3 */}
                                <div className="bg-[#0F2B5B] rounded-2xl p-8 text-center w-full cursor-pointer hover:shadow-2xl hover:scale-110 transition">
                                    <div className="w-full h-14 mx-auto mb-4 bg-yellow-400/20 rounded-full flex items-center justify-center text-yellow-400">
                                        🏅
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">15+</h3>
                                    <p className="mt-1 text-yellow-400 font-medium">Industry Experts</p>
                                </div>

                                {/* Stat 4 */}
                                <div className="bg-[#0F2B5B] rounded-2xl p-8 text-center w-full cursor-pointer hover:shadow-2xl hover:scale-110 transition">
                                    <div className="w-full h-14 mx-auto mb-4 bg-yellow-400/20 rounded-full flex items-center justify-center text-yellow-400">
                                        ⏱
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">4–12 Months</h3>
                                    <p className="mt-1 text-yellow-400 font-medium">Course Duration</p>
                                </div>

                            </div>
                        </div>



                    </div>


                    <FinalMasterclassForm />

                </section>

                {/* TRUST BAR */}
                <section className="bg-white text-black py-10">
                    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-6 text-center">
                        <Stat title="100k+" desc="Students Trained" />
                        <Stat title="40+" desc="Courses" />
                        <Stat title="12+" desc="Years Experience" />
                        <Stat title="₹4.5 LPA" desc="Avg. Salary" />
                    </div>
                </section>

                {/* WHY CHOOSE */}
                <section className=" bg-[#010138] max-w-7xl mx-auto px-6 py-20 mb-5 mt-10 rounded-3xl">
                    <h2 className="text-3xl font-bold text-center">
                        Benefits of Joining <span className="text-yellow-400">Course Unbox</span>?
                    </h2>

                    <div className="mt-14 grid md:grid-cols-3 gap-8">

                        {/* Card 1 */}
                        <div className="group bg-white/10 backdrop-blur rounded-2xl p-8 
                    transition-all duration-300 ease-out
                    hover:-translate-y-2 hover:shadow-2xl">
                            <div className="mb-4 text-yellow-400 transition-transform duration-300 group-hover:scale-110">
                                <Rocket size={32} />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Industry Projects</h3>
                            <p className="text-gray-300 text-sm">
                                Work on live projects and real campaigns to gain hands-on experience.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="group bg-white/10 backdrop-blur rounded-2xl p-8 
                    transition-all duration-300 ease-out
                    hover:-translate-y-2 hover:shadow-2xl">
                            <div className="mb-4 text-yellow-400 transition-transform duration-300 group-hover:scale-110">
                                <Briefcase size={32} />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Placement Support</h3>
                            <p className="text-gray-300 text-sm">
                                Resume building, interview prep, and placement assistance.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="group bg-white/10 backdrop-blur rounded-2xl p-8 
                    transition-all duration-300 ease-out
                    hover:-translate-y-2 hover:shadow-2xl">
                            <div className="mb-4 text-yellow-400 transition-transform duration-300 group-hover:scale-110">
                                <Clock size={32} />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Flexible Learning</h3>
                            <p className="text-gray-300 text-sm">
                                Weekend & weekday batches with recorded sessions.
                            </p>
                        </div>

                        {/* Duplicate cards (if needed) */}
                        <div className="group bg-white/10 backdrop-blur rounded-2xl p-8 
                    transition-all duration-300 ease-out
                    hover:-translate-y-2 hover:shadow-2xl">
                            <div className="mb-4 text-yellow-400 transition-transform duration-300 group-hover:scale-110">
                                <Rocket size={32} />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Live Brand Campaigns</h3>
                            <p className="text-gray-300 text-sm">
                                Execute real marketing campaigns for active brands and businesses to build hands-on industry experience.
                            </p>
                        </div>

                        <div className="group bg-white/10 backdrop-blur rounded-2xl p-8 
                    transition-all duration-300 ease-out
                    hover:-translate-y-2 hover:shadow-2xl">
                            <div className="mb-4 text-yellow-400 transition-transform duration-300 group-hover:scale-110">
                                <Briefcase size={32} />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">AI & Advanced Marketing Tools</h3>
                            <p className="text-gray-300 text-sm">
                                Work with the latest AI-powered marketing tools used by agencies for automation, analytics, and growth.
                            </p>
                        </div>

                        <div className="group bg-white/10 backdrop-blur rounded-2xl p-8 
                    transition-all duration-300 ease-out
                    hover:-translate-y-2 hover:shadow-2xl">
                            <div className="mb-4 text-yellow-400 transition-transform duration-300 group-hover:scale-110">
                                <Clock size={32} />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Freelancing & Agency Training</h3>
                            <p className="text-gray-300 text-sm">
                                Master client acquisition, pricing strategies, and project delivery to start freelancing or your own agency.
                            </p>
                        </div>

                    </div>
                </section>

                {/* CURRICULUM */}
                <section className="bg-[#0E224F] py-20">
                    <div className="max-w-6xl mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center mb-12">
                            Diploma Curriculum
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            <Module title="SEO & Content Marketing" />
                            <Module title="Google Ads & PPC" />
                            <Module title="Meta Ads & Social Media" />
                            <Module title="AI Tools & Automation" />
                            <Module title="Analytics & GA4" />
                            <Module title="Freelancing & Agency Model" />
                            <Module title="Performance Marketing" />
                            <Module title="Generative AI course" />
                        </div>
                    </div>
                </section>

                {/* ================= CTA SECTION ================= */}
                <section className="max-w-7xl mx-auto px-6 py-10">
                    <div
                        className="bg-[#031A3D] rounded-[32px] px-8 py-16 text-center shadow-xl"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            Ready to Transform Your Career with{" "}
                            <span className="text-yellow-400">100% Placement Guarantee?</span>
                        </h2>

                        <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Join thousands of successful students who landed high-paying jobs in
                            digital marketing through our proven placement guarantee program.
                        </p>

                        <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center">
                            {/* Primary CTA */}
                            <button
                                className="bg-yellow-400 text-black px-10 py-4 rounded-xl
                   font-semibold text-lg
                   transition-all duration-300
                   hover:bg-yellow-300 hover:scale-105 cursor-pointer"

                                onClick={() => setIsOpen(true)}
                            >
                                Start Your Journey Today
                            </button>

                            {/* Secondary CTA */}
                            <button
                                className="border border-yellow-400 text-yellow-400 px-10 py-4 rounded-xl
                   font-semibold text-lg
                   transition-all duration-300
                   hover:bg-yellow-400 hover:text-black hover:scale-105 cursor-pointer"

                                onClick={() => setIsOpen(true)}
                            >
                                Talk to Counselor
                            </button>
                        </div>
                    </div>
                </section>


                {/* ================= TOP MENTORS SECTION ================= */}
                <section className="max-w-7xl mx-auto px-6 py-20">
                    <h2 className="text-4xl font-bold">
                        Top <span className="text-blue-500">Mentors</span>
                    </h2>

                    <p className="mt-3 text-gray-300 max-w-2xl">
                        Learn directly from highly experienced industry experts who have scaled
                        brands, startups, and global businesses.
                    </p>

                    <div className="mt-12 grid md:grid-cols-2 gap-10">

                        {/* Mentor 1 */}
                        <div className="bg-white rounded-3xl p-8 text-center shadow-md hover:shadow-xl transition">
                            <div className="relative w-32 h-32 mx-auto mb-6">
                                <img
                                    src="/images/About/Founder.webp"
                                    alt="Jugal Chauhan Mentor"
                                    className="w-full h-full rounded-full object-cover border-4 border-blue-500"
                                />
                            </div>

                            <h3 className="text-xl font-bold text-black">Jugal Chauhan Sir</h3>
                            <p className="text-blue-600 font-semibold mt-1">
                                Founder & Mentor – Course Unbox
                            </p>

                            <p className="text-gray-600 text-sm mt-4 leading-relaxed">
                                With 11+ years of experience in AI and Digital Marketing, Jugal has
                                trained over 40,000+ students and worked with 100+ clients, from
                                startups to global brands.
                            </p>

                            <div className="mt-6 h-1 w-16 bg-yellow-400 mx-auto rounded-full" />
                        </div>

                        {/* Mentor 2 */}
                        <div className="bg-white rounded-3xl p-8 text-center shadow-md hover:shadow-xl transition">
                            <div className="relative w-32 h-32 mx-auto mb-6">
                                <img
                                    src="/images/About/Punit Jindal.jpeg"
                                    alt="Senior Digital Marketing Mentor"
                                    className="w-full h-full rounded-full object-cover border-4 border-blue-500"
                                />

                            </div>

                            <h3 className="text-xl font-bold text-black">Punit Jindal Sir</h3>
                            <p className="text-blue-600 font-semibold mt-1">
                                Performance Marketing Expert
                            </p>

                            <p className="text-gray-600 text-sm mt-4 leading-relaxed">
                                Punit Jindal, widely known as Zorbathezen, is a renowned digital entrepreneur, educator, and content creator. Former CEO of AAFT, he is celebrated for his expertise in digital media and personal branding.
                            </p>

                            <div className="mt-6 h-1 w-16 bg-yellow-400 mx-auto rounded-full" />
                        </div>

                        <div className="w-full bg-white rounded-3xl">
                            <button className="w-full text-black py-7 font-extrabold hover:text-white hover:bg-[#040440] bg-yellow-600 rounded-3xl transition cursor-pointer" onClick={() => { setIsOpen(true) }}>Let's Study In The Guidance of Jugal Sir</button>
                        </div>
                        <div className="w-full bg-white rounded-3xl">
                            <button className="w-full text-black font-extrabold py-7 hover:text-white hover:bg-[#040440] bg-yellow-600 rounded-3xl transition cursor-pointer" onClick={() => { setIsOpen(true) }}>Let's Study In The Guidance of Punit Sir</button>
                        </div>

                    </div>
                </section>

                <section>
                    <div
                        className="bg-[#031A3D] px-8 py-16 text-center shadow-xl"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white">

                            <span className="text-yellow-400">100% Scholarship </span>
                            for the Next Generation of Digital Leaders{" "}
                        </h2>

                        <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Join thousands of successful students who landed high-paying jobs in
                            digital marketing through our proven placement guarantee program.
                        </p>

                        <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center">
                            {/* Primary CTA */}
                            <button
                                className="bg-yellow-400 text-black px-10 py-4 rounded-xl
                   font-semibold text-lg
                   transition-all duration-300
                   hover:bg-yellow-300 hover:scale-105 cursor-pointer"

                                onClick={() => setIsOpen(true)}
                            >
                                Get Scholarship
                            </button>

                            {/* Secondary CTA */}
                            <button
                                className="border border-yellow-400 text-yellow-400 px-10 py-4 rounded-xl
                   font-semibold text-lg
                   transition-all duration-300
                   hover:bg-yellow-400 hover:text-black hover:scale-105 cursor-pointer"

                                onClick={() => setIsOpen(true)}
                            >
                                Talk to Counselor
                            </button>
                        </div>
                    </div>
                </section>



                <section className="max-w-7xl mx-auto px-6 py-24">
                    {/* Heading */}
                    <h2 className="text-4xl font-bold text-center">
                        Course <span className="text-yellow-400">Highlights</span>
                    </h2>

                    <p className="mt-6 text-center text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Master all aspects of digital marketing with our comprehensive
                        program designed by industry experts at a leading digital marketing
                        institute.
                    </p>

                    {/* Cards */}
                    <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

                        <HighlightCard
                            icon={<Search />}
                            title="Search Engine Optimization (SEO)"
                            desc="Master on-page, off-page, technical SEO, keyword research, and Google algorithm updates."
                        />

                        <HighlightCard
                            icon={<MousePointerClick />}
                            title="Google Ads & PPC"
                            desc="Create high-converting ad campaigns, keyword bidding, and quality score optimization."
                        />

                        <HighlightCard
                            icon={<Medal />}
                            title="Social Media Marketing"
                            desc="Facebook, Instagram, LinkedIn, and Twitter marketing strategies with content creation."
                        />

                        <HighlightCard
                            icon={<Mail />}
                            title="Email Marketing"
                            desc="Automation, segmentation, deliverability, and advanced email marketing strategies."
                        />

                        <HighlightCard
                            icon={<Smartphone />}
                            title="Mobile Marketing"
                            desc="App store optimization, mobile advertising, and responsive marketing strategies."
                        />

                        <HighlightCard
                            icon={<BarChart3 />}
                            title="Analytics & Reporting"
                            desc="Google Analytics, GTM, performance tracking, and actionable data insights."
                        />

                        <HighlightCard
                            icon={<Brain />}
                            title="AI in Digital Marketing"
                            desc="ChatGPT for marketing, AI tools, automation, and the future of digital marketing."
                        />

                        <HighlightCard
                            icon={<Video />}
                            title="Content Marketing"
                            desc="Video marketing, storytelling, content strategy, and brand building techniques."
                        />
                    </div>
                </section>

                {/* CAREER SECTION */}
                <section className="max-w-7xl mx-auto px-6 py-20">
                    <h2 className="text-3xl font-bold text-center">
                        Career Opportunities After Diploma
                    </h2>

                    <div className="mt-12 grid md:grid-cols-4 gap-6 text-center">
                        <Career title="Digital Marketer" />
                        <Career title="SEO Specialist" />
                        <Career title="Performance Marketer" />
                        <Career title="Freelancer / Consultant" />
                    </div>
                </section>


                <section className="max-w-7xl mx-auto px-8 py-8 bg-[#010147] mt-10 mb-10 rounded-3xl">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">

                        {/* LEFT CONTENT */}
                        <div>
                            <span className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-5 py-2 rounded-full text-sm font-semibold mb-6">
                                ⭐ India’s Trusted Digital Marketing Institute
                            </span>

                            <h2 className="text-4xl font-bold mb-6">
                                About <span className="text-yellow-400">Course Unbox</span>
                            </h2>

                            <p className="text-gray-300 leading-relaxed mb-6">
                                Course Unbox is a highly regarded provider of digital marketing training
                                and certification, dedicated to helping learners advance their careers
                                and prepare for the future. We offer tailored programs designed for
                                students, working professionals, and entrepreneurs.
                            </p>

                            <p className="text-gray-300 leading-relaxed mb-8">
                                With a strong focus on AI and Digital Marketing, we nurture a practical,
                                industry-driven learning environment that bridges the gap between
                                education and real-world application.
                            </p>

                            {/* HIGHLIGHT BADGE */}
                            <div className="inline-block border border-yellow-400 text-yellow-400 px-6 py-3 rounded-full font-semibold mb-10">
                                Get Certified by Amazon & Flipkart • 100% Placement Support
                            </div>

                            {/* STATS */}
                            <div className="grid grid-cols-2 gap-6 mb-10">
                                <div className="bg-white/10 rounded-2xl p-6 text-center">
                                    <h3 className="text-2xl md:text-3xl font-bold text-yellow-400">40,000+</h3>
                                    <p className="text-gray-300 mt-2">Students Trained</p>
                                </div>
                                <div className="bg-white/10 rounded-2xl p-6 text-center">
                                    <h3 className="text-2xl md:text-3xl font-bold text-yellow-400">100+</h3>
                                    <p className="text-gray-300 mt-2">Industry Clients</p>
                                </div>
                            </div>

                            {/* CTA BUTTONS */}
                            <div className="flex flex-wrap gap-4">
                                <button className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-semibold hover:bg-yellow-300 transition cursor-pointer w-full" onClick={() => setIsOpen(true)}>
                                    Know More About Us
                                </button>
                                <button className="border border-yellow-400 text-yellow-400 px-8 py-4 rounded-xl font-semibold hover:bg-yellow-400 hover:text-black transition cursor-pointer w-full" onClick={() => setIsOpen(true)}>
                                    Meet Our Founder
                                </button>
                            </div>
                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="space-y-8">

                            {/* FOUNDER CARD */}
                            <div className="bg-white/5 rounded-3xl p-8 flex gap-6 items-start flex flex-col md:flex-row">
                                <img
                                    src="/images/About/Founder.webp"
                                    alt="Jugal Chauhan Founder Course Unbox"
                                    className="w-24 h-24 rounded-full object-cover"
                                />

                                <div>
                                    <h3 className="text-xl font-bold">Jugal Chauhan</h3>
                                    <p className="text-yellow-400 font-semibold mb-2">
                                        Founder & Mentor – Course Unbox
                                    </p>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        With over 11+ years of experience, Jugal Chauhan has trained 40,000+
                                        students and worked with 100+ clients ranging from startups to
                                        global brands. Certified by Amazon, Flipkart, and a Google Premier
                                        Partner, he is known for his practical, industry-focused teaching.
                                    </p>
                                </div>
                            </div>

                            {/* TRUST CARD 1 */}
                            <div className="bg-white rounded-2xl p-6 flex items-center gap-4 shadow-md">
                                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold">
                                    G
                                </div>
                                <div>
                                    <h4 className="font-semibold text-black">Google Premier Partner</h4>
                                    <p className="text-gray-600 text-sm">
                                        Authorized training partner for Google certifications
                                    </p>
                                </div>
                            </div>

                            {/* TRUST CARD 2 */}
                            <div className="bg-white rounded-2xl p-6 flex items-center gap-4 shadow-md">
                                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold">
                                    ✔
                                </div>
                                <div>
                                    <h4 className="font-semibold text-black">Trusted Industry Partner</h4>
                                    <p className="text-gray-600 text-sm">
                                        Certified by Amazon & Flipkart for skill-based learning
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>



                <section className="max-w-7xl mx-auto px-6 py-20 mb-10 mt-10 bg-[#080830] rounded-3xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-center">
                        Why Join <span className="text-yellow-400">Course Unbox</span>?
                    </h2>

                    <p className="mt-4 text-center text-gray-300 max-w-3xl mx-auto">
                        Our Digital Marketing Diploma is designed to make you industry-ready with
                        practical skills, certifications, and real career support.
                    </p>

                    <div className="mt-14 grid md:grid-cols-3 gap-8">

                        {/* Benefit 1 */}
                        <div className="bg-white/10 backdrop-blur rounded-2xl p-8 hover:scale-105 transition">
                            <h3 className="text-xl font-semibold mb-3">
                                🎯 100% Practical Training
                            </h3>
                            <p className="text-gray-300">
                                Learn by working on live projects, real ad campaigns, and hands-on tools
                                used by top digital marketing agencies.
                            </p>
                        </div>

                        {/* Benefit 2 */}
                        <div className="bg-white/10 backdrop-blur rounded-2xl p-8 hover:scale-105 transition">
                            <h3 className="text-xl font-semibold mb-3">
                                🧠 Learn from Industry Experts
                            </h3>
                            <p className="text-gray-300">
                                Get mentored by professionals with 10+ years of experience in SEO,
                                Google Ads, Meta Ads, and performance marketing.
                            </p>
                        </div>

                        {/* Benefit 3 */}
                        <div className="bg-white/10 backdrop-blur rounded-2xl p-8 hover:scale-105 transition">
                            <h3 className="text-xl font-semibold mb-3">
                                📜 Industry-Recognized Certification
                            </h3>
                            <p className="text-gray-300">
                                Earn certificates trusted by employers and agencies, boosting your
                                credibility and job prospects.
                            </p>
                        </div>

                        {/* Benefit 4 */}
                        <div className="bg-white/10 backdrop-blur rounded-2xl p-8 hover:scale-105 transition">
                            <h3 className="text-xl font-semibold mb-3">
                                💼 Placement & Internship Support
                            </h3>
                            <p className="text-gray-300">
                                Resume building, interview preparation, and placement assistance with
                                top companies and startups.
                            </p>
                        </div>

                        {/* Benefit 5 */}
                        <div className="bg-white/10 backdrop-blur rounded-2xl p-8 hover:scale-105 transition">
                            <h3 className="text-xl font-semibold mb-3">
                                🚀 Freelancing & Agency Guidance
                            </h3>
                            <p className="text-gray-300">
                                Learn how to earn as a freelancer or start your own digital marketing
                                agency with real client strategies.
                            </p>
                        </div>

                        {/* Benefit 6 */}
                        <div className="bg-white/10 backdrop-blur rounded-2xl p-8 hover:scale-105 transition">
                            <h3 className="text-xl font-semibold mb-3">
                                ⏰ Flexible Learning Mode
                            </h3>
                            <p className="text-gray-300">
                                Weekend & weekday batches with recorded sessions so you never miss a
                                class.
                            </p>
                        </div>

                    </div>
                </section>

                {/* CTA */}
                <section className="bg-yellow-500 text-black py-16 text-center">
                    <h2 className="text-3xl font-bold">
                        Become a Certified Digital Marketing Professional
                    </h2>
                    <p className="mt-4">
                        Limited seats available. Batch starts soon.
                    </p>

                    <button className="mt-6 bg-black text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#000070] cursor-pointer" onClick={() => setIsOpen(true)}>
                        Apply Now
                    </button>
                </section>

                {/* FOOTER */}
                <footer className="bg-[#081733] text-gray-300 py-8 text-center text-sm">
                    © 2026 Course Unbox. All rights reserved.
                </footer>
            </main >

        </>
    );
}

/* COMPONENTS */

function Stat({ title, desc }: any) {
    return (
        <div>
            <h3 className="text-2xl font-bold">{title}</h3>
            <p className="text-gray-600">{desc}</p>
        </div>
    );
}

function Feature({ icon, title }: any) {
    return (
        <div className="bg-white/10 p-8 rounded-2xl text-center">
            <div className="text-yellow-400 mb-4 flex justify-center">{icon}</div>
            <h3 className="font-semibold text-lg">{title}</h3>
        </div>
    );
}

function Module({ title }: any) {
    return (
        <div className="bg-white/10 p-6 rounded-xl flex items-center gap-3">
            <CheckCircle className="text-yellow-400" />
            <span>{title}</span>
        </div>
    );
}

function Career({ title }: any) {
    return (
        <div className="bg-white/10 p-6 rounded-xl">
            <Star className="mx-auto text-yellow-400 mb-3" />
            <h3 className="font-semibold">{title}</h3>
        </div>
    );
}

function HighlightCard({
    icon,
    title,
    desc,
}: {
    icon: React.ReactNode;
    title: string;
    desc: string;
}) {
    return (
        <div className="bg-[#F7F7F7] rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center text-black mb-4">
                {icon}
            </div>

            <h3 className="text-lg font-semibold text-black mb-2">
                {title}
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">
                {desc}
            </p>
        </div>
    );
}
