import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <footer className="text-gray-300">
            <div className=" bg-[#1C336E] w-full h-[50vh] p-10">


                <div className="  grid grid-cols-1 md:grid-cols-5 gap-10">


                    <div>
                        <h3 className="text-lg font-semibold mb-4">Approved by</h3>
                        <div className="flex flex-col gap-4">
                            <Image
                                src="/logo1.png"
                                alt="Approval Logo"
                                width={80}
                                height={40}
                            />
                            <div className="flex items-center gap-3">
                                <Image
                                    src="/google.png"
                                    alt="Google Partner"
                                    width={45}
                                    height={45}
                                />
                                <span className="text-sm">Google Partner</span>
                            </div>
                        </div>

                        <div className="mt-6">
                            <h3 className="text-lg font-semibold mb-3">
                                Contact Us for any query
                            </h3>
                            <p className="text-sm mb-1">+91 9619958615</p>
                            <p className="text-sm">social@iide.co</p>
                        </div>
                    </div>


                    <div>
                        <h3 className="text-lg font-semibold mb-4">
                            Digital Marketing Programs
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li>Post Graduation in Digital Marketing</li>
                            <li>Online Digital Marketing Courses</li>
                            <li>Short Term Certifications</li>
                            <li>Free Digital Marketing Courses Online</li>
                        </ul>
                    </div>


                    <div>
                        <h3 className="text-lg font-semibold mb-4">Bachelors Programs</h3>
                        <ul className="space-y-2 text-sm">
                            <li>Bachelor in Digital Business & Entrepreneurship</li>
                        </ul>

                        <h3 className="text-lg font-semibold mt-6 mb-4">AI Programs</h3>
                        <ul className="space-y-2 text-sm">
                            <li>AI Course Online with Certification</li>
                        </ul>
                    </div>


                    <div>
                        <h3 className="text-lg font-semibold mb-4">Company</h3>
                        <ul className="space-y-2 text-sm">
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>Refer & Earn</li>
                        </ul>
                    </div>


                    <div>
                        <h3 className="text-lg font-semibold mb-4">Resources</h3>
                        <ul className="space-y-2 text-sm">
                            <li>Blogs</li>
                            <li>Case Studies</li>
                            <li>Presentations</li>
                        </ul>

                        <h3 className="text-lg font-semibold mt-6 mb-4">Career</h3>
                        <ul className="space-y-2 text-sm">
                            <li>Hire From Us</li>
                            <li>Work With Us</li>
                        </ul>
                    </div>
                </div>


                <div className="border-t border-gray-700 my-10" />



            </div>

            <div className=" w-full h-[13vh] text-center bg-[#3d4fa9] text-sm text-gray-400 flex flex-wrap gap-3 justify-center">
                <span>All Digital Marketing Certifications</span> |
                <span>Social Media Marketing Course</span> |
                <span>SEO Course Online</span> |
                <span>Performance Marketing Course</span> |
                <span>Content Writing Course</span> |
                <span>E-Commerce Course</span> |
                <span>Website Development Course</span>
            </div>
        </footer>
    )
}

export default Footer