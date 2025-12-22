const blogs = [
    {
      slug: "learn-javascript-basics",
      title: "JavaScript Basics Every Student Must Know",
      excerpt:
        "Understand variables, loops, functions, and how JavaScript works under the hood.",
      image: "https://tutedude.com/blogs/wp-content/uploads/elementor/thumbs/Dom-in-javascript-rb5eekfneh6pas4jil307kuhqwuxfssuf28g9eae4s.webp",
    },
    {
      slug: "how-to-learn-react",
      title: "How to Learn React the Right Way",
      excerpt:
        "A structured roadmap to learn React efficiently without getting overwhelmed.",
      image: "https://tutedude.com/blogs/wp-content/uploads/elementor/thumbs/Dom-in-javascript-rb5eekfneh6pas4jil307kuhqwuxfssuf28g9eae4s.webp",
    },
    {
      slug: "study-tips-for-developers",
      title: "Study Tips for Computer Science Students",
      excerpt:
        "Proven techniques to stay consistent and productive while learning coding.",
      image: "https://tutedude.com/blogs/wp-content/uploads/elementor/thumbs/Dom-in-javascript-rb5eekfneh6pas4jil307kuhqwuxfssuf28g9eae4s.webp",
    },
  ];
export default function RelatedBlog(){
    return (
      <section className="max-w-7xl mx-auto px-4 mt-20 pb-20">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">
          Related Articles
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border-gray-200 shadow-lg  overflow-hidden
                         transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative h-40">
                <img
                  src={blog.image}
                  alt={blog.title}
                  
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="inset-0 bg-linear-to-bl bg-gray-300 mt-4 h-0.5"></div>

              <div className="p-5">
                <h3 className="font-bold text-slate-900 leading-snug">
                  {blog.title}
                </h3>

                <p className="mt-2 text-sm text-slate-600 line-clamp-3">
                  {blog.excerpt}
                </p>

                <span className="inline-block mt-4 text-sm font-medium text-blue-600">
                  Read more →
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

    )
}