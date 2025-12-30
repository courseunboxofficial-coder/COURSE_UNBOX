
 "use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function DigiCourseSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="max-w-7xl mx-auto px-6 rounded-xl border-gray-200 shadow-xl bg-linear-to-br from-blue-300 via-yellow-50 to-blue-300 my-20 ">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px) [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 py-12 bg-[radial-gradient(#ffffff_1px,transparent_1px)">
       <div className="text-2xl md:text-4xl font-extrabold mb-4 text-black">
                <h2><span className="text-blue-600">Digital Marketing </span>Institute in Delhi NCR: Where Skills Meet Real-World Careers
          </h2>

                </div>

                    {/* Short Description */}
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Digital marketing is no longer an optional skill. It has become a core requirement for businesses, startups, and even professionals who want to stay relevant in a digital-first economy. From small local brands to global companies, everyone needs visibility, leads, and conversions online. This rising demand has made digital marketing one of the most promising career options today.
                    </p>


                    {/* Expandable Content */}
                    <div  className={`transition-all duration-500 ease-in-out overflow-hidden ${expanded ? "max-h-full opacity-100 mb-4" : "max-h-0 opacity-0"}`}>
                      <div className="pt-2 space-y-10 text-gray-600 leading-relaxed">

            <p>
              Delhi NCR, being a major business and education hub, offers countless learning
              options. Many learners are confused when it comes to selecting the best
              Digital Marketing Institute in Delhi NCR. While many courses may appear
              similar on the outside, there are significant differences in the learning
              experience, practical exposure and career potential.
              The purpose of this blog is to provide clarity to the learner. Once completed,
              you will know what a good Digital Marketing Institute should offer, the most
              important skills to develop and how a structured learning environment such as
              Course Unbox helps learners develop the confidence they need to succeed in
              Digital Marketing.
            </p>

            <h3 className="text-xl font-semibold text-slate-900">
              Why Digital Marketing Is a Career Worth Investing In Institute in Delhi NCR?
            </h3>

            <p>
              While social media posts and ads make up a portion of digital marketing, it
              isn't just what you advertise. Digital marketing is made up of a combination
              of strategy, creativity, data analysis, and technology. Digital Marketing
              combines all of these elements to create the experience of each website visit,
              ad click, or online purchase.
            </p>

            <p>Many learners come to the digital marketing industry for several reasons:</p>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                Digital marketing jobs are in high demand across a variety of industries.
              </li>
              <li>
                Digital marketing offers options for full-time jobs, freelance opportunities,
                and the ability to work from anywhere in the world.
              </li>
              <li>
                There is a strong opportunity for rapid career growth through skill-based
                learning.
              </li>
              <li>
                With digital marketing, learners have flexibility to work with many
                different brands or their own projects.
              </li>
            </ul>

            <p>
              There are many factors involved in determining how successful you will be in
              the digital marketing industry, such as how and where you learn. So choosing
              a Digital Marketing Institute in Delhi NCR is an essential decision.
            </p>

            <h3 className="text-xl font-semibold text-slate-900">
              What Makes a Digital Marketing Institute Truly Valuable?
            </h3>

            <p>
              Not every institute that offers a course delivers real industry readiness. A
              valuable institute focuses on building skills, not just finishing a syllabus.
            </p>

            <p>Here are some factors that define a strong learning institute:</p>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                Provide training through real life scenarios versus just theory.
              </li>
              <li>
                Curriculum regularly updated based upon current trends in the digital
                marketing industry.
              </li>
              <li>
                Students gain exposure to and use actual Digital Marketing Tools (Google
                Analytic, Google Ads, SEO Platforms).
              </li>
              <li>
                Future workers are supported by trainers who have real world work
                experience.
              </li>
              <li>
                Career help continues on after students have completed their courses.
              </li>
            </ul>

            <p>
              Thus, a professional Digital Marketing Training Institute should not just
              prepare learners for Certificates; it should prepare them for actual jobs.
            </p>

            <h3 className="text-xl font-semibold text-slate-900">
              Core Skills You Should Learn in a Digital Marketing Course
            </h3>

            <p>
              A comprehensive Digital Marketing course should teach both digital marketing
              fundamentals and more advanced concepts (or practices). By understanding
              these different aspects of online Marketing now, learners will be able to
              apply these principles to real-world situations that exist within businesses.
            </p>

            <p className="font-medium text-slate-800">Search Engine Optimization</p>
            <p>
              SEO assists with improving rankings within search engines for websites
              (online/blogs). Therefore, digital marketing students must learn about the
              different areas of SEO, including: keyword research, On Page Optimization,
              Technical SEO and Link Building Strategies. Digital Marketing Course Trainors
              will provide students with an educational experience that focuses on
              practical SEO training. The continuous testing and improvement of how a
              website ranks on search engines is important to successfully implement SEO
              within an Internet Marketing Strategy.
            </p>

            <p className="font-medium text-slate-800">
              Paid Advertising + Performance Marketing
            </p>
            <p>
              Digital Advertising Campaigns can include Google Ads, as well as the various
              forms of Social Media Advertising. In order for students to successfully
              apply Paid Advertising and Performance Marketing techniques and experience
              returns on their investment (ROI), they will also need knowledge on how to:
              Create Digital Advertising Campaigns, Manage Digital Advertising Budgets,
              Analyze the performance of Digital Ads and Optimize Digital Ads for increased
              Performance. Digital Marketing courses in the Delhi NCR region should have a
              greater emphasis on teaching their students how to measure and achieve
              maximized ROI from Digital Marketing, rather than simply focusing on Digital
              Advertising creation.
            </p>

            <p className="font-medium text-slate-800">Social Media Marketing</p>
            <p>
              Social Media is an integral part of the Brand Building Process. Therefore,
              students must learn about Content Planning and Development, as well as
              Engagement Strategies and Analytics. In addition to Posting Content daily,
              Social Media Marketing is about creating Relationships with your
              Followers/Audience and Building Meaningful Connections.
            </p>

            <p className="font-medium text-slate-800">
              Content Marketing + Email Marketing
            </p>
            <p>
              Content is the foundation of Digital Marketing Success. Digital Marketing
              Students must learn how to Communicate Value through Content and Not only
              provide value through your Content but also drive traffic to it. If done
              properly, Email Marketing (when combined with other methods) helps to nurture
              leads and build trust with your Customers.
            </p>

            <h3 className="text-xl font-semibold text-slate-900">
              Practical Training: The Difference Between Knowing and Doing
            </h3>

            <p>
              There is a gap between education and experience when it comes to digital
              marketing. Reading about how to implement strategies does not compare to
              having the hands-on experience and knowledge of implementing the same
              techniques.
            </p>

            <p>
              A reputable Delhi NCR Digital Marketing Institute offers:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                Hands-on experience through multiple live projects with real-world Goals
              </li>
              <li>
                Conducting analysis on your company's site and creating campaigns.
              </li>
              <li>
                Practical experience doing assignments based on case studies.
              </li>
              <li>
                Tools-based education (software, online tools, etc.) instead of written
                explanations.
              </li>
            </ul>

            <p>
              At Course Unbox, all courses are based on real-life industry examples, giving
              students the opportunity to build the confidence they will need to compete
              in the job market.
            </p>

            <h3 className="text-xl font-semibold text-slate-900">
              Final Thoughts: Best Digital Marketing Institute in Delhi NCR
            </h3>

            <p>
              Digital Marketing Institute in Delhi NCR is very important for the success of
              your career. A good institute will help you to understand what digital
              marketing is and how it applies to real organizations.
            </p>

            <p>
              A good digital marketing institute will give you the skills necessary to
              start a career in digital marketing, along with providing the right support,
              practical experience, and a culture of continuous learning to keep your
              career growing. One example of an institute that focuses on creating a
              practical, applicable education program that meets the needs of those in the
              industry is Course Unbox.
            </p>

            <p>
              If you are committed to creating a successful career in digital marketing,
              investing in your education at a proper digital marketing institute is only
              the beginning of achieving success in your digital marketing career.
            </p>

          </div>

          </div>


               {/* Read More Button (LEFT aligned) */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="relative inline-flex items-center gap-2   px-5 py-2 text-sm font-semibold   text-blue-600 border border-blue-600
              rounded-full
              transition-all duration-300 ease-in-out
              hover:bg-blue-600 hover:text-white
              hover:shadow-md active:scale-95 cursor-pointer">
            {expanded ? "Read Less" : "Read More"}
            {expanded ? (
              <ChevronUp size={18} />
            ) : (
              <ChevronDown size={18} />
            )}
          </button>
    </div>

    </section>
  );
}