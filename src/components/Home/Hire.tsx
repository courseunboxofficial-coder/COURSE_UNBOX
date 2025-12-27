export default function Hire() {
  return (
    <section className="w-full  lg:h-[70vh] px-4 md:px-10 flex justify-start items-start lg:justify-center lg:items-center">
      <div className="max-w-7xl lg:h-[50vh] lg:mx-auto lg:my-auto bg-[#1732cb] rounded-2xl flex flex-col lg:flex-row items-center justify-between gap-10 px-6 md:px-12 py-10 text-white">

        {/* LEFT IMAGE SECTION */}
        <div className=" hidden relative w-full lg:w-[40%] lg:flex flex-col lg:flex-row justify-center ">
          {/* Main Person Image */}
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=500&q=80"
            alt="Employer"
            className="w-[30vw] h-[40vh] rounded-xl object-cover lg:block hidden"
          />

          {/* Floating Card 1 */}
          <div className="absolute -right-8 top-6 hidden lg:block">
            <div className="bg-white rounded-xl shadow-lg p-4 w-56 text-gray-800">
              <div className="flex items-center gap-3">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="candidate"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold">Top Candidate</p>
                  <div className="text-yellow-400 text-sm">★★★★★</div>
                </div>
              </div>
            </div>
          </div>

          {/* AI Match Tag */}
          <div className="absolute -right-8 top-36 hidden lg:block">
            <div className="bg-emerald-400 text-white rounded-xl shadow-lg px-4 py-2 text-sm font-medium">
              Profile matched via AI ✨
            </div>
          </div>

          {/* Floating Card 2 */}
          <div className="absolute -right-8 top-52 hidden lg:block">
            <div className="bg-white rounded-xl shadow-lg p-4 w-56 text-gray-800">
              <div className="flex items-center gap-3">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="candidate"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold">Skill Match</p>
                  <div className="text-yellow-400 text-sm">★★★★★</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom in Mobile view CONTENT */}
        <div className="w-full lg:w-[55%]  lg:text-left">
          <span className="inline-block border border-white/40 rounded-md px-4 py-1 text-sm font-semibold mb-4">
            Course Unbox For Students
          </span>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Ready to become job-ready, not just degree-ready?
          </h1>

          <p className="text-lg text-white/90 mb-8 max-w-2xl">
          Join 3.2 crore+ learners across India preparing for future tech careers.
          </p>


          <div className=" lg:hidden relative w-full lg:w-[40%]  flex-col lg:flex-row justify-center py-2">
          {/* Main Person Image */}
       

             <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=500&q=80"
            alt="Employer"
            className="w-[40vw] h-[18vh] rounded-xl object-cover lg:hidden"
          />

        
         

          {/* Floating Card 1 */}
          <div className="absolute right-2 top-6  lg:hidden">
            <div className="bg-white rounded-xl shadow-lg p-4 w-56 text-gray-800">
              <div className="flex items-center gap-3">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="candidate"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold">Top Candidate</p>
                  <div className="text-yellow-400 text-sm">★★★★★</div>
                </div>
              </div>
            </div>
          </div>

          {/* AI Match Tag */}
          <div className="absolute -right-8 top-36 lg:hidden">
            <div className="bg-emerald-400 text-white rounded-xl shadow-lg px-4 py-2 text-sm font-medium">
              Profile matched via AI ✨
            </div>
          </div>

          {/* Floating Card 2 */}
          <div className="absolute right-2 top-52 lg:hidden">
            <div className="bg-white rounded-xl shadow-lg p-4 w-56 text-gray-800">
              <div className="flex items-center gap-3">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="candidate"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold">Skill Match</p>
                  <div className="text-yellow-400 text-sm">★★★★★</div>
                </div>
              </div>
            </div>
          </div>
        </div>



          <button className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold  py-4 px-3 mt-4 rounded-lg transition shadow-md cursor-pointer">
            Our Courses
            <span className="text-xl">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
