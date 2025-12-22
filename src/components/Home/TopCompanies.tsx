import React from 'react'
import Partners from './Partners'

const TopCompanies = () => {

    const logos = [
        { name: "Amazon", src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
        { name: "CocaCola", src: "https://cdn.worldvectorlogo.com/logos/coca-cola-2021.svg" },
        { name: "Practo", src: "https://cdn.brandfetch.io/id6XCI8OsV/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1701366650373" },
        { name: "OYO", src: "https://cdn.brandfetch.io/idSXt7tZEr/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1667566408645" },
        { name: "Paytm", src: "https://cdn.worldvectorlogo.com/logos/paytm-1.svg" },
        { name: "Nestle", src: "https://cdn.brandfetch.io/id1xOwiSj_/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1746445624897" },
    ];


    return (
        <div className='h-[50vh] w-full p-15 bg-[#f6fcfe]'>


            <div className='h-[10vh] mb-10 text-center text-5xl font-extrabold text-[#030365]'>
                Hiring Partners

            </div>

            <div className="relative flex-1 overflow-hidden mb-10">
                <div className="flex w-max animate-marquee gap-16">
                    {[...logos, ...logos].map((logo, idx) => (
                        <div
                            key={idx}
                            className="flex items-center justify-center transition"
                        >
                            <img
                                src={logo.src}
                                alt={logo.name}
                                className="h-10 object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="relative flex-1 overflow-hidden">
                <div className="flex w-max animate-marquee-reverse gap-16">
                    {[...logos, ...logos].map((logo, idx) => (
                        <div
                            key={idx}
                            className="flex items-center justify-center transition"
                        >
                            <img
                                src={logo.src}
                                alt={logo.name}
                                className="h-10 object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default TopCompanies