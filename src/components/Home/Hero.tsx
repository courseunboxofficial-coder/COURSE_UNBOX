import { supabase } from "@/lib/supabse/supabaseConfig";
import Image from "next/image";
import { title } from "process";
import { useEffect } from "react";


const Hero = () => {

  const blogs = [

    {
      domain: "Digital Marketing",
      title: "Content Marketing Strategy for Businesses",
      content:
        "Content marketing focuses on creating valuable and relevant content to attract and retain a specific audience. Instead of direct promotion, it builds trust through blogs, videos, social posts, and guides. A strong content marketing strategy improves brand authority, supports SEO, and drives organic traffic. Businesses that consistently publish high-quality content are more likely to convert visitors into loyal customers over time.",
      FAQ: [
        { question: "What is content marketing?", answer: "Creating valuable content to attract audiences." },
        { question: "Why is content marketing important?", answer: "It builds trust and brand authority." },
        { question: "Does content marketing help SEO?", answer: "Yes, it improves organic search rankings." },
        { question: "What content formats work best?", answer: "Blogs, videos, and social posts." },
        { question: "Is consistency important?", answer: "Yes, consistent publishing is key." },
        { question: "Is content marketing a career option?", answer: "Yes, it offers long-term growth." }
      ]
    },

    {
      domain: "Development",
      title: "Understanding Full Stack Development",
      content:
        "Full stack development involves working on both frontend and backend parts of an application. A full stack developer understands user interface design, server-side logic, databases, and deployment. Technologies such as React, Node.js, and PostgreSQL are commonly used. Full stack developers are valued for their ability to handle end-to-end development and collaborate efficiently across teams.",
      FAQ: [
        { question: "What is full stack development?", answer: "Working on both frontend and backend." },
        { question: "Which stack is popular?", answer: "MERN stack is widely used." },
        { question: "Is full stack hard?", answer: "It requires learning multiple skills." },
        { question: "Are full stack developers in demand?", answer: "Yes, across many industries." },
        { question: "Do full stack developers deploy apps?", answer: "Yes, deployment is part of the role." },
        { question: "Is full stack good for beginners?", answer: "Yes, with a structured roadmap." }
      ]
    },

    {
      domain: "IT Software",
      title: "Software Maintenance and Support Explained",
      content:
        "Software maintenance ensures that applications continue to function correctly after deployment. It includes bug fixes, performance improvements, and security updates. Regular maintenance helps prevent system failures and improves user satisfaction. Support teams play a critical role in addressing user issues and ensuring smooth software operations throughout the software lifecycle.",
      FAQ: [
        { question: "What is software maintenance?", answer: "Updating and fixing software after release." },
        { question: "Why is maintenance important?", answer: "It ensures reliability and security." },
        { question: "What are maintenance types?", answer: "Corrective, adaptive, and preventive." },
        { question: "Is maintenance ongoing?", answer: "Yes, throughout the software lifecycle." },
        { question: "Who handles maintenance?", answer: "Developers and support teams." },
        { question: "Is maintenance a career role?", answer: "Yes, it is an essential IT function." }
      ]
    },

    {
      domain: "Data Science",
      title: "Data Visualization Techniques Explained",
      content:
        "Data visualization transforms complex data into visual formats such as charts, graphs, and dashboards. It helps stakeholders quickly understand trends and insights. Tools like Matplotlib, Power BI, and Tableau are commonly used. Effective visualization improves communication, supports decision-making, and plays an important role in data analysis and business intelligence.",
      FAQ: [
        { question: "What is data visualization?", answer: "Representing data visually." },
        { question: "Why is visualization important?", answer: "It makes insights easier to understand." },
        { question: "Which tools are used?", answer: "Tableau, Power BI, and Matplotlib." },
        { question: "Is coding required?", answer: "Basic coding helps in visualization." },
        { question: "Is visualization part of data science?", answer: "Yes, it is a core skill." },
        { question: "Can beginners learn visualization?", answer: "Yes, step by step." }
      ]
    },

    {
      domain: "Digital Marketing",
      title: "Pay Per Click Advertising Explained",
      content:
        "Pay Per Click advertising allows businesses to display ads and pay only when users click on them. Platforms like Google Ads and Facebook Ads enable precise audience targeting and budget control. PPC provides quick visibility and measurable results. When combined with proper keyword research and landing page optimization, PPC campaigns can generate high-quality leads efficiently.",
      FAQ: [
        { question: "What is PPC?", answer: "Advertising where you pay per click." },
        { question: "Which platforms support PPC?", answer: "Google Ads and Facebook Ads." },
        { question: "Is PPC expensive?", answer: "Costs depend on competition." },
        { question: "Does PPC give instant results?", answer: "Yes, results are immediate." },
        { question: "Is PPC measurable?", answer: "Yes, performance is trackable." },
        { question: "Is PPC good for beginners?", answer: "Yes, with proper guidance." }
      ]
    },

    {
      domain: "Development",
      title: "API Development and Integration",
      content:
        "API development allows different software systems to communicate with each other. APIs enable data exchange between frontend and backend or between third-party services. REST and GraphQL are popular API architectures. Proper API design improves scalability, security, and performance, making APIs a critical component of modern application development.",
      FAQ: [
        { question: "What is an API?", answer: "A communication interface between systems." },
        { question: "What is REST?", answer: "A standard API architecture." },
        { question: "What is GraphQL?", answer: "A flexible query-based API approach." },
        { question: "Are APIs secure?", answer: "Yes, with authentication and authorization." },
        { question: "Who uses APIs?", answer: "Web and mobile applications." },
        { question: "Is API knowledge important?", answer: "Yes, for backend development." }
      ]
    },

    {
      domain: "IT Software",
      title: "Cloud Computing in IT Software",
      content:
        "Cloud computing allows businesses to access software, storage, and computing power over the internet. Instead of maintaining physical servers, organizations use cloud platforms such as AWS, Azure, and Google Cloud. Cloud computing improves scalability, reduces costs, and supports remote collaboration. It has become a core component of modern IT software infrastructure.",
      FAQ: [
        { question: "What is cloud computing?", answer: "Using computing resources over the internet." },
        { question: "Which cloud providers are popular?", answer: "AWS, Azure, and Google Cloud." },
        { question: "Is cloud secure?", answer: "Yes, with proper configurations." },
        { question: "Does cloud reduce cost?", answer: "Yes, pay-as-you-go models." },
        { question: "Is cloud scalable?", answer: "Yes, it scales easily." },
        { question: "Is cloud knowledge important?", answer: "Yes, for modern IT roles." }
      ]
    },

    {
      domain: "Data Science",
      title: "Career Path in Data Science",
      content:
        "A career in data science involves working with data to solve real-world problems. Professionals start with data analysis and progress to machine learning and advanced modeling. Data scientists collaborate with business teams to provide actionable insights. With continuous learning and project experience, data science offers high-paying and impactful career opportunities.",
      FAQ: [
        { question: "What roles exist in data science?", answer: "Analyst, scientist, and ML engineer." },
        { question: "What skills are required?", answer: "Python, statistics, and ML." },
        { question: "Is data science high paying?", answer: "Yes, salaries are competitive." },
        { question: "Is experience required?", answer: "Projects help gain experience." },
        { question: "Is data science future-proof?", answer: "Yes, demand is increasing." },
        { question: "Can freshers enter data science?", answer: "Yes, with proper preparation." }
      ]
    }


  ];




  useEffect(() => {

    const addBlogData = async () => {

      for (let blog of blogs) {

        const { data, error } = await supabase.from("Blog").insert([{

          domain: blog.domain,
          title: blog.title,
          content: blog.content,
          FAQ: blog.FAQ

        }]);


        if (error) {

          console.log("THE ERROR HAPPEN IS : ");
          console.log(error);

        }


        console.log(data);

      }
    }


    // addBlogData();


  }, []);

  // bg-linear-to-r from-[#1C336E] to-[#3d5ba9]

  return (
    <section
      className="
        w-full
        bg-linear-to-r from-[#1C336E] to-[#3d5ba9]
        text-white
        px-10 sm:px-6 md:px-12 lg:px-20
        pt-14 pb-3
        h-[58vh]
      "
    >
      <div
        className="
          w-[95%] mx-auto
          flex flex-col-reverse lg:flex-row
          items-center
          gap-10 lg:gap-20
        "
      >
        {/* LEFT CONTENT */}
        <div className="w-[50%] text-center content-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            India&apos;s <span className="text-yellow-400">#1 platform</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 lg:ml-5">
            Best Digital Marketing Institute in Delhi NCR
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <button
              className="
                flex items-center justify-center gap-2
                bg-[#e6ba2b] text-gray-800
                pl-3
                pr-7
                px-5 py-2.5
                rounded-full
                font-medium
                w-full sm:w-auto
                hover:bg-[#b9b940]
                transition
                cursor-pointer
              "
            >
              <Image
                src="/images/Home/googleLogo.png"
                width={50}
                height={20}
                alt="google"
              />
              <span>Continue with Google</span>
            </button>

            <button
              className="
                flex items-center justify-center gap-2
                bg-blue-500 pl-3
                pr-10 py-2.5
                rounded-full
                font-medium
                w-full sm:w-auto
                hover:bg-[#060646]
                transition
                cursor-pointer
              "
            >
              <Image
                src="/images/Home/GmailLogo.webp"
                width={36}
                height={20}
                alt="email"
                className="rounded-full"
              />
              <span>Continue with Email</span>
            </button>
          </div>

          <p className="text-xs sm:text-sm mt-4">
            By continuing, you agree to our{" "}
            <span className="underline cursor-pointer">T&amp;C</span>.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-[40%]">
          <Image
            src="/images/Home/Hero1.png"
            width={520}
            height={520}
            alt="HeroImage"
            className="w-full  rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-indigo-300 transition cursor-pointer"
          />
        </div>

      </div>


    </section>

  );
};

export default Hero;
