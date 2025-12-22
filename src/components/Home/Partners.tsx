import React from "react";

const logos = [
    { name: "Amazon", src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { name: "CocaCola", src: "https://cdn.worldvectorlogo.com/logos/coca-cola-2021.svg" },
    { name: "Practo", src: "https://cdn.brandfetch.io/id6XCI8OsV/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1701366650373" },
    { name: "OYO", src: "https://cdn.brandfetch.io/idSXt7tZEr/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1667566408645" },
    { name: "Paytm", src: "https://cdn.worldvectorlogo.com/logos/paytm-1.svg" },
    { name: "Nestle", src: "https://cdn.brandfetch.io/id1xOwiSj_/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1746445624897" },
];


export default function Partners() {
    return (
        <div className="w-full bg-linear-to-r from-[#1C336E] to-[#3d5ba9] py-8 overflow-hidden">
            <div className="max-w-7xl mx-auto flex items-center gap-12 px-6">
                {/* Left Stat */}
                <div className="flex-shrink-0 text-white">
                    <div className="text-3xl font-bold">100K+</div>
                    <div className="text-sm opacity-80">Students We Teach</div>
                </div>

                {/* Divider */}
                <div className="h-12 w-px bg-white/30" />

                {/* Carousel */}
                <div className="relative flex-1 overflow-hidden">
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
            </div>
        </div>
    );
}
