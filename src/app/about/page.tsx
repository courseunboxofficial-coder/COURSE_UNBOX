"use client";
import Navbar from "@/components/Home/Navbar"
import Footer from "@/components/Home/Footer"

export default function AboutPage() {
    return (
        <>

            <Navbar />
            <div className="w-full">



                {/* HERO SECTION */}
                <section className="bg-gradient-to-br from-[#0a1a3c] to-[#0f255d] text-white py-20 px-6">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                        <div>
                            <p className="uppercase tracking-wide text-yellow-400 mb-3">
                                Know About Our Story
                            </p>

                            <h1 className="text-4xl font-extrabold leading-tight">
                                Get a Chance to know About Us and <br />
                                <span className="text-blue-400">Relive Our Journey</span>
                            </h1>

                            <p className="text-gray-300 mt-5">
                                Meet our dynamic team and discover the roadmap to success.
                                We aim to deliver excellence in every project and redefine how modern work evolves.
                            </p>

                            <button className="mt-6 px-8 py-3 bg-yellow-400 text-black font-semibold rounded-md hover:bg-yellow-500">
                                Learn More
                            </button>
                        </div>

                        <div className="flex justify-center">
                            <img
                                src="/team-photo.png"
                                alt="team"
                                className="rounded-lg shadow-xl w-[90%]"
                            />
                        </div>
                    </div>
                </section>

                {/* STATS SECTION */}
                <section className="bg-white py-16 px-6">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 text-center">
                        <div>
                            <h2 className="text-4xl font-bold text-[#0f255d]">1k+</h2>
                            <p className="text-gray-600 mt-2">Clients</p>
                        </div>
                        <div>
                            <h2 className="text-4xl font-bold text-[#0f255d]">4.9★</h2>
                            <p className="text-gray-600 mt-2">Clutch</p>
                        </div>
                        <div>
                            <h2 className="text-4xl font-bold text-[#0f255d]">4.8★</h2>
                            <p className="text-gray-600 mt-2">TrustPilot</p>
                        </div>
                        <div>
                            <h2 className="text-4xl font-bold text-[#0f255d]">4.9★</h2>
                            <p className="text-gray-600 mt-2">Google Reviews</p>
                        </div>
                    </div>
                </section>

                {/* VALUES SECTION */}
                <section className="bg-[#f4f7ff] py-16 px-6">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-[#0a1a3c] mb-10">
                            About Our Values
                        </h2>

                        <div className="grid md:grid-cols-3 gap-10">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-lg font-semibold text-[#0f255d]">Authenticity</h3>
                                <p className="text-gray-600 mt-2">
                                    We stay true to our approach in building real, impactful solutions
                                    with transparency and clarity.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-lg font-semibold text-[#0f255d]">Innovation</h3>
                                <p className="text-gray-600 mt-2">
                                    We keep pushing boundaries by exploring new ideas and technologies.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-lg font-semibold text-[#0f255d]">Passion</h3>
                                <p className="text-gray-600 mt-2">
                                    Passion fuels our creativity and drives us to deliver the best.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* TIMELINE SECTION */}
                <section className="bg-white py-16 px-6">
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-[#0a1a3c]">
                            Come join us in our journey to{" "}
                            <span className="text-yellow-500">growth</span> and{" "}
                            <span className="text-blue-500">betterment</span>.
                        </h2>

                        <div className="flex justify-center gap-6 text-lg font-semibold mt-8">
                            {[2019, 2020, 2021, 2022, 2023, 2024].map((year) => (
                                <span
                                    key={year}
                                    className="px-4 py-2 border-b-2 border-transparent hover:border-blue-500 cursor-pointer"
                                >
                                    {year}
                                </span>
                            ))}
                        </div>

                        <div className="mt-10 flex justify-center">
                            <img
                                src="/journey-image.png"
                                alt="Journey"
                                className="rounded-lg shadow-lg w-[60%]"
                            />
                        </div>
                    </div>
                </section>

                {/* TEAM SECTION */}
                <section className="bg-[#f4f7ff] py-16 px-6">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-[#0a1a3c] mb-10 text-center">
                            Meet our Inspiring <span className="text-yellow-500">Executives</span>
                        </h2>

                        <div className="grid md:grid-cols-2 gap-10">
                            {/* CARD 1 */}
                            <div className="bg-white p-6 rounded-lg shadow-md flex gap-6">
                                <img
                                    src="/exec1.png"
                                    alt="Executive"
                                    className="w-28 h-28 rounded-full object-cover"
                                />
                                <div>
                                    <h3 className="text-xl font-bold text-[#0f255d]">Danish Wadhwa</h3>
                                    <p className="text-gray-600 mt-2">
                                        Entrepreneur • CEO • Visionary leader focused on building
                                        world-class digital experiences and impacting businesses globally.
                                    </p>
                                </div>
                            </div>

                            {/* CARD 2 */}
                            <div className="bg-white p-6 rounded-lg shadow-md flex gap-6">
                                <img
                                    src="/exec2.png"
                                    alt="Executive"
                                    className="w-28 h-28 rounded-full object-cover"
                                />
                                <div>
                                    <h3 className="text-xl font-bold text-[#0f255d]">Chehak Wadhwa</h3>
                                    <p className="text-gray-600 mt-2">
                                        Creative Director • Product Strategist with a passion for
                                        empowering teams and driving impactful solutions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>


            <Footer />

        </>
    );
}
