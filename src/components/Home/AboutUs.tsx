export default function AboutUs() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 lg:mb-20">
          <span className="inline-block bg-blue-50 text-blue-600 font-semibold text-[10px] sm:text-xs uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-4 sm:mb-6">
            About Course Unbox
          </span>
          <h2 className="text-[26px] sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-3 sm:mb-5">
            Education Built for the{" "}
            <span className="text-blue-600">Real World</span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base lg:text-lg leading-relaxed">
            Born from a gap. Built for clarity. Designed for lasting growth.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8 sm:gap-10 lg:gap-16 items-start mb-8 sm:mb-12 lg:mb-14">

          {/* Left: Story Content */}
          <div className="space-y-6 sm:space-y-8">

            <div>
              <div className="flex items-center gap-3 mb-2 sm:mb-3">
                <div className="w-1 h-5 sm:h-6 bg-blue-600 rounded-full shrink-0" />
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">Our Story</h3>
              </div>
              <p className="text-gray-600 leading-relaxed pl-4 text-sm sm:text-[15px]">
                At Course Unbox, we didn&apos;t start with the idea of becoming just another training institute.
                We started with a simple observation — too many people were learning skills, but very few were
                actually becoming confident enough to use them in the real world. Degrees were there, certificates
                were there, but clarity and practical direction were missing. That gap is what led to the foundation
                of Course Unbox.
              </p>
            </div>

            <div className="border-t border-gray-100" />

            <div>
              <div className="flex items-center gap-3 mb-2 sm:mb-3">
                <div className="w-1 h-5 sm:h-6 bg-indigo-600 rounded-full shrink-0" />
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed pl-4 text-sm sm:text-[15px]">
                We exist to make learning feel useful, relevant, and connected to real outcomes. It has always been
                our mission to help students, working individuals, entrepreneurs and those who wish to switch careers
                learn how to succeed in today&apos;s digital economy — not just through theory, but through practical
                experience. The subject areas we teach, such as digital marketing and artificial intelligence (AI),
                along with strategic methods of improving performance and developing online businesses, help each
                learner better understand how businesses are run in today&apos;s digital environment.
              </p>
            </div>

            <div className="border-t border-gray-100" />

            <div>
              <div className="flex items-center gap-3 mb-2 sm:mb-3">
                <div className="w-1 h-5 sm:h-6 bg-purple-600 rounded-full shrink-0" />
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">Our Approach</h3>
              </div>
              <p className="text-gray-600 leading-relaxed pl-4 text-sm sm:text-[15px]">
                What makes Course Unbox unique is our methodology. We take our time with each subject and don&apos;t
                throw around complicated terms that confuse learners. Instead, we go into detail about every concept,
                explain the &ldquo;why&rdquo; behind every strategy, and focus heavily on hands-on learning experiences. All
                programs are developed around the idea that learners gain confidence only after completing live
                sessions, real-life projects, and gaining access to mentorship.
              </p>
            </div>

            <div className="border-t border-gray-100" />

            <div>
              <div className="flex items-center gap-3 mb-2 sm:mb-3">
                <div className="w-1 h-5 sm:h-6 bg-sky-500 rounded-full shrink-0" />
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">Every Journey Matters</h3>
              </div>
              <p className="text-gray-600 leading-relaxed pl-4 text-sm sm:text-[15px]">
                We understand that every learner&apos;s journey is different. Some want a job. Some want to grow a
                business. Others want the freedom to freelance. That&apos;s why our courses are designed to be flexible,
                practical, and supportive — with both online and offline learning options and long-term access to
                study resources.
              </p>
            </div>

          </div>

          {/* Right: Highlights */}
          <div className="space-y-4 sm:space-y-5">

            {/* Mission highlight card */}
            <div className="bg-linear-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 sm:p-8 text-white shadow-lg shadow-blue-200">
              <div className="w-10 h-10 sm:w-11 sm:h-11 bg-white/20 rounded-xl flex items-center justify-center mb-4 sm:mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 3.741-1.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Real Education. Real Growth.</h3>
              <p className="text-blue-100 leading-relaxed text-sm">
                At the heart of Course Unbox is a commitment to true education and real growth. We measure
                success not by enrollments, but by how confident our learners feel when they enter the market.
              </p>
            </div>

            {/* Feature cards grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">

              <div className="bg-blue-50 rounded-xl p-4 sm:p-5 group hover:bg-blue-100 transition-colors duration-200">
                <div className="w-8 h-8 sm:w-9 sm:h-9 bg-blue-100 group-hover:bg-blue-200 rounded-lg flex items-center justify-center mb-2 sm:mb-3 transition-colors duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 text-xs sm:text-sm mb-1">Hands-On Learning</h4>
                <p className="text-gray-500 text-[11px] sm:text-xs leading-relaxed">Live sessions and real projects — built for doing, not just watching.</p>
              </div>

              <div className="bg-indigo-50 rounded-xl p-4 sm:p-5 group hover:bg-indigo-100 transition-colors duration-200">
                <div className="w-8 h-8 sm:w-9 sm:h-9 bg-indigo-100 group-hover:bg-indigo-200 rounded-lg flex items-center justify-center mb-2 sm:mb-3 transition-colors duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 text-xs sm:text-sm mb-1">Expert Mentorship</h4>
                <p className="text-gray-500 text-[11px] sm:text-xs leading-relaxed">Guided by experienced mentors who help you navigate your path.</p>
              </div>

              <div className="bg-purple-50 rounded-xl p-4 sm:p-5 group hover:bg-purple-100 transition-colors duration-200">
                <div className="w-8 h-8 sm:w-9 sm:h-9 bg-purple-100 group-hover:bg-purple-200 rounded-lg flex items-center justify-center mb-2 sm:mb-3 transition-colors duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3m-3 0a.75.75 0 0 1-.75-.75V8.25a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-.75.75m-3 0H9m1.5 5.25h3m-3 0a.75.75 0 0 1-.75-.75v-.75a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-.75.75M12 12h.008v.008H12V12Z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 text-xs sm:text-sm mb-1">Flexible Options</h4>
                <p className="text-gray-500 text-[11px] sm:text-xs leading-relaxed">Online or offline, with long-term access to all study resources.</p>
              </div>

              <div className="bg-sky-50 rounded-xl p-4 sm:p-5 group hover:bg-sky-100 transition-colors duration-200">
                <div className="w-8 h-8 sm:w-9 sm:h-9 bg-sky-100 group-hover:bg-sky-200 rounded-lg flex items-center justify-center mb-2 sm:mb-3 transition-colors duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5 text-sky-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 text-xs sm:text-sm mb-1">Career-Focused</h4>
                <p className="text-gray-500 text-[11px] sm:text-xs leading-relaxed">Designed for jobs, business growth, or freelancing — your path.</p>
              </div>

            </div>
          </div>

        </div>

        {/* Closing Quote */}
        <div className="bg-linear-to-r from-blue-50 via-indigo-50 to-purple-50 border border-blue-100 rounded-2xl px-5 py-8 sm:px-8 sm:py-10 text-center">
          <div className="w-9 h-9 sm:w-10 sm:h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600">
              <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
            </svg>
          </div>
          <p className="text-sm sm:text-base lg:text-xl text-gray-800 leading-relaxed font-medium max-w-3xl mx-auto">
            If you&apos;re looking for clarity, skills you can actually apply, and guidance that feels real —
            you&apos;ll feel at home here at{" "}
            <span className="text-blue-600 font-bold">Course Unbox</span>.
          </p>
        </div>

      </div>
    </section>
  );
}
