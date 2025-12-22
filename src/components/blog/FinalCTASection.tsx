import Image from "next/image"
import Form from "./Form"

export default function FinalCTASection(){
    
    return (
        <section id="form" className="max-w-5xl mx-auto flex gap-4 justify-between items-start" style={{
                backgroundImage: "url('/images/Student/bg-2.png')",
       }}>
        <div className="flex flex-col gap-4 py-6 sm:py-12">

          <div>
            {/* <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-blue-900 text-center">
            Apply for Free Masterclass
            </h2> */}

            <p className="text-center text-gray-600 mt-2 sm:mt-3 text-sm sm:text-base md:text-lg">
              Learn AI & Digital Marketing from industry experts
            </p>
            <div className=" mx-auto my-3 sm:my-4 h-[3px] w-32 sm:w-48 rounded-full bg-linear-to-r from-transparent via-blue-600 to-transparent" />


          </div>
           


           <Image src={"/images/Blog/data.svg"} width={400} height={850} alt="Let's connect images"/>
        </div>
        
        <Form/>
      </section>
    )
}