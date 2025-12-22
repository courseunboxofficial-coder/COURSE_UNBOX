import Image from "next/image";


const Hero = () => {

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
