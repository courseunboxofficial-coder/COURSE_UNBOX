import React from 'react'

const Banner = ({courseId} : {courseId : string}) => {
    return (
        <section className="bg-white h-[16vh] text-black py-6 border-b border-gray-200">
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 text-center">

                <div className="py-4 border-r border-gray-300">
                    <h3 className="text-lg font-semibold">Job Assistance</h3>
                    <p className="text-gray-600 text-sm">For Pro Plan</p>
                </div>

                <div className="py-4 border-r border-gray-300">
                    <h3 className="text-lg font-semibold">17th Dec 2025</h3>
                    <p className="text-gray-600 text-sm">Date of Commencement</p>
                </div>

                <div className="py-4 border-r border-gray-300">
                    <h3 className="text-lg font-semibold">8 Months</h3>
                    <p className="text-gray-600 text-sm">Duration</p>
                </div>

                <div className="py-4 border-r border-gray-300">
                    <h3 className="text-lg font-semibold">Live</h3>
                    <p className="text-gray-600 text-sm">Delivery Mode</p>
                </div>

                <div className="py-4">
                    <h3 className="text-lg font-semibold">English</h3>
                    <p className="text-gray-600 text-sm">Language</p>
                </div>
            </div>
        </section>
    )
}

export default Banner