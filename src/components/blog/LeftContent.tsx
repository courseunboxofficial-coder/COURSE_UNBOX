import Link from "next/link"
import Image from "next/image";


type Blog = {

  id: string;
  title: string;
  content: string;
  FAQ: {
    question: string;
    answer: string
  }[];
  image: string,

  meta: {

    title: string,
    description: string
  },

  slug: string,
  alt: string,
  subcontent: string,
  created_at: Date;
  author: string,
  domain: string;

};

export default function LeftContent({ Blogs }: { Blogs : Blog }) {
  
  return (<article className=" border-r-gray-400 ">

    {/* ===== BLOG HEADER ===== */}
    <section className="px-8 sm:px-4 pt-16 ">
      <nav aria-label="Breadcrumb" className="text-sm text-gray-400 -mt-6 py-4 px-3 ">
                <Link href="/" className="hover:text-blue-500 transition">
                Home
                </Link>
                <span className="mx-2">/</span>
                <Link href={"/blog"} className=" font-medium hover:text-blue-500 transition">
                 Blogs
                </Link>
                <span className="mx-2">/</span>
                <Link href={Blogs.slug} className="text-gray-700 ">{Blogs.domain}</Link>
      </nav>

      <div className="flex items-center gap-3 mb-4">

        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-50 text-blue-600">

          {Blogs && Blogs.domain}

        </span>
        <span className="text-xs text-slate-500">10 min read</span>
      </div>

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
        {Blogs?.title}
      </h1>

      {/* Gradient underline */}
      <div className="mt-3 h-1 w-24 bg-linear-to-r from-blue-500 via-indigo-500 to-transparent rounded-full"></div>

      <p className="mt-4 text-sm text-slate-600">
        By <span className="font-medium text-slate-800">{Blogs?.author}</span>
        {Blogs?.created_at && (
          <> · {new Date(Blogs.created_at).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}</>
        )}
      </p>

    </section>

    {/* ===== FEATURE IMAGE ===== */}
    <section className="px-6 sm:px-4 mt-10">
      <div className="group relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-xl">
        <Image
          src={Blogs?.image}
          alt={Blogs?.alt}
          fill
          className="object-contain transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent" />

      </div>
    </section>


    {/* ==== REDIRECT TO FORM ==== */}
    <div className="flex justify-center py-10">
      <Link
        href="#form"
        className="relative inline-flex items-center gap-2 px-7 py-3 rounded-full
                                bg-linear-to-r from-blue-600 to-indigo-600
                                text-white font-medium shadow-lg
                                hover:shadow-xl hover:scale-[1.02]
                                transition-all duration-300"
      >
        Let’s Connect
        <span className="absolute inset-0 rounded-full ring-2 ring-blue-300/40"></span>
      </Link>
    </div>


    {/* ===== BLOG CONTENT ===== */}
    <section className="mx-auto px-4 ">
      <div className="BlogContent
      prose prose-slate max-w-none
      prose-ul:list-disc prose-ul:pl-6
      prose-ol:list-decimal prose-ol:pl-6
      prose-li:my-1
      prose-li:marker:text-slate-500
      prose-p:leading-7
    "
        dangerouslySetInnerHTML={{ __html: Blogs?.content ?? "" }}
      />

    </section>
  </article>)
}