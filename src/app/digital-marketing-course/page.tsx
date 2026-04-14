
import { Hero } from "@/components/landingPage/Hero";
import { TrustStats } from "@/components/landingPage/TrustStats";
import { WhatYouWillLearn } from "@/components/landingPage/WhatYouWillLearn";
import { CourseContent } from "@/components/landingPage/CourseContent";
import { PlacementGuarantee } from "@/components/landingPage/PlacementGuarantee";
import { WhoCanJoin } from "@/components/landingPage/WhoCanJoin";
import { Instructor } from "@/components/landingPage/Instructor";
import { FAQ } from "@/components/landingPage/FAQ";
import { CourseCard } from "@/components/landingPage/CourseCard";
import FooterLandingPage from "@/components/landingPage/FooterLandingPage";

export default function Home() {
  return (
    <div className="w-full relative bg-surface font-body text-on-surface pb-20">
      <Hero />

      <div className="max-w-7xl mx-auto px-6 -mt-8 md:-mt-20 lg:-mt-0 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Content column */}
          <div className="lg:col-span-7">
            <div className="lg:-mt-32">
              <TrustStats />
            </div>

            <div className="mt-16 md:mt-24 lg:mt-0 max-w-4xl lg:mx-auto w-full">
              <WhatYouWillLearn />
              <CourseContent />
            </div>
          </div>

          {/* Right Course Card column (Sticky) */}
          <div className="hidden lg:block lg:col-span-5 relative">
            {/* Negative margin pulls the card up to overlay the Hero section */}
            <div className="sticky top-8 lg:-mt-[800px] z-30">
              <CourseCard />
            </div>
          </div>
        </div>
      </div>

      <WhoCanJoin />

      <main className="max-w-8xl mx-auto px-6 md:px-3 relative z-20">
        <Instructor />
      </main>
      <PlacementGuarantee />

      <FAQ />
      <FooterLandingPage />
    </div>
  );
}
