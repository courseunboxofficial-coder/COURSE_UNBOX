import Image from "next/image";
import {
  MapPin,
  Mail,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Phone,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-linear-to-b from-[#0b163f] to-[#070c26] text-gray-300">
      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-12">
          
          {/* BRAND / CONTACT */}
          <div className="lg:col-span-2">
            <h3 className="text-white text-lg font-semibold mb-5">
              Approved By
            </h3>

            <div className="flex items-center gap-5 mb-8">
              <Image
                src="/images/Footer/Meta-Business-Partner.webp"
                alt="Meta Partner"
                width={89}
                height={40}
                className="object-contain"
              />
              <Image
                src="/images/Footer/Google-premier-Partner.webp"
                alt="Google Partner"
                width={90}
                height={40}
                className="object-contain"
              />
            </div>

            <div className="space-y-4 text-sm">
              <p className="text-white font-semibold">
                Contact Us
              </p>

              <div className="flex gap-3 items-center text-gray-400">
                 <Phone size={16} />
                 <span>+91 8923660886</span>
              </div>

              <div className="flex gap-3 items-start text-gray-400">
                <MapPin size={16} className="mt-1 shrink-0" />
                <p>
                  Basement 1, Sandesh Tower, C-56/31, C Block, Phase-2,
                  Sector-62, Noida, UP – 201309
                </p>
              </div>

              <div className="flex gap-3 items-center text-gray-400">
                <Mail size={16} />
                <span>info@courseunbox.com</span>
              </div>

              
            </div>
          </div>

          {/* DIGITAL MARKETING */}
          <div>
            <h4 className="text-white font-semibold mb-5">
              Digital Marketing
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Post Graduation in Digital Marketing</li>
              <li>Online Digital Marketing Courses</li>
              <li>Short Term Certifications</li>
              <li>Free Digital Marketing Courses Online</li>
            </ul>
          </div>

          {/* BACHELORS / AI */}
          <div>
            <h4 className="text-white font-semibold mb-5">
              Bachelors Programs
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Bachelor in Digital Business & Entrepreneurship</li>
            </ul>

            <h4 className="text-white font-semibold mt-8 mb-5">
              AI Programs
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>AI Course Online with Certification</li>
            </ul>
          </div>

          {/* COMPANY / RESOURCES */}
          <div>
            <h4 className="text-white font-semibold mb-5">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Refer & Earn</li>
            </ul>

            <h4 className="text-white font-semibold mt-8 mb-5">
              Resources
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Blogs</li>
              <li>Case Studies</li>
              <li>Presentations</li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h4 className="text-white font-semibold mb-5 sm:ml-12 ml-0">
              Follow Us
            </h4>
            <div className="flex gap-4">
              {[Instagram, Youtube, Twitter, Linkedin].map((Icon, i) => (
                <div
                  key={i}
                  className=" p-2 flex items-center justify-center rounded-full border border-white/20 hover:bg-white hover:text-[#070c26] transition cursor-pointer"
                >
                  <Icon size={20} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* COURSES STRIP */}
      <div className="border-t border-white/10 bg-[#101a4f]">
        <div className="max-w-7xl mx-auto px-6 py-5 text-sm text-gray-400 flex flex-wrap gap-x-2 gap-y-1 justify-center text-center">
          <span>All Digital Marketing Certifications</span>
          <span>|</span>
          <span>Social Media Marketing Course</span>
          <span>|</span>
          <span>SEO Course Online</span>
          <span>|</span>
          <span>Performance Marketing Course</span>
          <span>|</span>
          <span>Content Writing Course</span>
          <span>|</span>
          <span>E-Commerce Course</span>
          <span>|</span>
          <span>Website Development Course</span>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 text-xs text-gray-400 text-center">
          © {new Date().getFullYear()} Course Unbox. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
