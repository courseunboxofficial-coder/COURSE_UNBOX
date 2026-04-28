"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight, BookOpen, ArrowRight, PenLine } from "lucide-react";

type typeBlogs = {
  id: string;
  title: string;
  content: string;
  FAQ: { question: string; answer: string }[];
  image: string;
  meta: { title: string; description: string };
  slug: string;
  alt: string;
  subcontent: string;
  created_at: Date;
  author: string;
  domain: string;
};

type CategoryMap = Record<string, typeBlogs[]>;

const CATEGORY_STYLES: Record<string, { bg: string; text: string; dot: string; ring: string; border: string }> = {
  "Digital Marketing": {
    bg: "bg-orange-50",   text: "text-orange-600",  dot: "bg-orange-400",
    ring: "ring-orange-100", border: "border-l-orange-400",
  },
  "Web Development": {
    bg: "bg-blue-50",     text: "text-blue-600",    dot: "bg-blue-400",
    ring: "ring-blue-100",   border: "border-l-blue-400",
  },
  "Data & AI": {
    bg: "bg-violet-50",   text: "text-violet-600",  dot: "bg-violet-400",
    ring: "ring-violet-100", border: "border-l-violet-400",
  },
  "Career & Jobs": {
    bg: "bg-emerald-50",  text: "text-emerald-600", dot: "bg-emerald-400",
    ring: "ring-emerald-100",border: "border-l-emerald-400",
  },
  "Guides & Tutorials": {
    bg: "bg-pink-50",     text: "text-pink-600",    dot: "bg-pink-400",
    ring: "ring-pink-100",   border: "border-l-pink-400",
  },
};

const DEFAULT_STYLE = {
  bg: "bg-gray-50", text: "text-gray-600", dot: "bg-gray-400",
  ring: "ring-gray-100", border: "border-l-gray-300",
};

export default function BlogsDropdown({ blogs }: { blogs: typeBlogs[] }) {
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState<string[]>([]);
  const [catBlogs, setCatBlogs] = useState<CategoryMap>({});
  const [activeCategory, setActiveCategory] = useState<string>("");
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (blogs.length === 0) return;

    const uniqueCategories = [...new Set(blogs.map((b) => b.domain))];
    setCategories(uniqueCategories);

    if (!activeCategory) setActiveCategory(uniqueCategories[0]);

    const map: CategoryMap = {};
    uniqueCategories.forEach((cat) => {
      map[cat] = blogs.filter((b) => b.domain === cat);
    });
    setCatBlogs(map);
  }, [blogs]);

  const handleMouseEnter = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => setOpen(false), 150);
  };

  const activeBlogList = catBlogs[activeCategory] || [];
  const styles = CATEGORY_STYLES[activeCategory] ?? DEFAULT_STYLE;

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* ── Trigger ── */}
      <button className="flex items-center gap-1.5 font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-200 cursor-pointer group">
        <Link href="/blog">Blogs</Link>
        <ChevronDown
          size={14}
          strokeWidth={2.5}
          className={`transition-transform duration-300 text-gray-500 group-hover:text-blue-600 ${open ? "rotate-180" : "rotate-0"}`}
        />
      </button>

      {/* Hover bridge */}
      <div className="absolute left-0 top-full h-5 w-40" />

      {/* ── Dropdown panel ── */}
      <div
        className={`absolute left-0 top-full mt-5 w-145 bg-white rounded-2xl z-50
          shadow-[0_20px_60px_-10px_rgba(0,0,0,0.15),0_4px_20px_-4px_rgba(0,0,0,0.08)]
          border border-gray-100 overflow-hidden
          transition-all duration-200 origin-top-left
          ${open ? "opacity-100 visible scale-100 translate-y-0" : "opacity-0 invisible scale-[0.97] -translate-y-3"}`}
      >
        <div className="grid grid-cols-[190px_1fr] min-h-80">

          {/* ── LEFT: CATEGORY LIST ── */}
          <div className="bg-gray-50/60 border-r border-gray-100 p-4 flex flex-col">
            <p className="text-[9px] font-black uppercase tracking-[0.18em] text-gray-400 mb-3 px-1">
              Topics
            </p>

            <ul className="space-y-0.5 flex-1">
              {categories.map((cat) => {
                const s = CATEGORY_STYLES[cat] ?? DEFAULT_STYLE;
                const isActive = activeCategory === cat;
                const count = (catBlogs[cat] || []).length;
                return (
                  <li key={cat}>
                    <button
                      onMouseEnter={() => setActiveCategory(cat)}
                      className={`w-full flex items-center gap-2.5 pl-3 pr-2.5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer border-l-[3px]
                        ${isActive
                          ? `${s.bg} ${s.text} border-current shadow-sm`
                          : "text-gray-500 hover:bg-white hover:text-gray-800 border-transparent hover:border-gray-200 hover:shadow-sm"
                        }`}
                    >
                      <span className={`w-2 h-2 rounded-full shrink-0 transition-colors ${isActive ? s.dot : "bg-gray-300"}`} />
                      <span className="flex-1 text-left text-[13px] truncate">{cat}</span>
                      {isActive
                        ? <ChevronRight size={13} className="shrink-0" />
                        : count > 0 && <span className="text-[10px] font-bold text-gray-400">{count}</span>
                      }
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="mt-4 pt-4 border-t border-gray-200 px-1">
              <Link
                href="/blog"
                className="group/link flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
              >
                All articles
                <ArrowRight size={13} className="transition-transform duration-200 group-hover/link:translate-x-0.5" />
              </Link>
            </div>
          </div>

          {/* ── RIGHT: BLOG ARTICLES ── */}
          <div className="p-5 flex flex-col bg-white">
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className={`p-1.5 rounded-lg ${styles.bg} transition-colors duration-200`}>
                  <PenLine size={13} className={`${styles.text} transition-colors duration-200`} strokeWidth={2} />
                </span>
                <div>
                  <p className="text-[9px] font-black uppercase tracking-widest text-gray-400 leading-none">Reading</p>
                  <p className={`text-sm font-bold ${styles.text} leading-tight transition-colors duration-200`}>
                    {activeCategory || "Select a topic"}
                  </p>
                </div>
              </div>
              <span className="text-[10px] font-bold text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                {activeBlogList.length} article{activeBlogList.length !== 1 ? "s" : ""}
              </span>
            </div>

            {/* Article list */}
            <ul className="space-y-0.5 flex-1 overflow-y-auto max-h-60">
              {activeBlogList.map((blog) => (
                <li key={blog.id}>
                  <Link
                    href={`/blog/${blog.slug}`}
                    className={`group flex items-start gap-3 pl-3 pr-2.5 py-2.5 rounded-xl border-transparent
                      hover:bg-gray-50 hover:border-current ${styles.text}
                      transition-all duration-150 border-l-2`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full shrink-0 mt-1.75 ${styles.dot} transition-colors`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-[13px] font-semibold text-gray-700 group-hover:text-blue-600 leading-snug line-clamp-2 transition-colors duration-150">
                        {blog.title}
                      </p>
                      {blog.author && (
                        <p className="text-[11px] text-gray-400 mt-0.5 font-medium">by {blog.author}</p>
                      )}
                    </div>
                    <ChevronRight
                      size={13}
                      className="shrink-0 text-gray-300 group-hover:text-blue-400 mt-1 transition-all duration-150 group-hover:translate-x-0.5"
                    />
                  </Link>
                </li>
              ))}

              {activeBlogList.length === 0 && (
                <div className="flex flex-col items-center justify-center py-12 text-gray-300">
                  <BookOpen size={32} strokeWidth={1.5} className="mb-2" />
                  <p className="text-sm font-medium text-gray-400">No articles yet.</p>
                </div>
              )}
            </ul>

            {/* Footer CTA */}
            <div className="mt-4 pt-3 border-t border-gray-100">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-white text-xs font-bold
                  bg-linear-to-r from-blue-700 to-blue-500 hover:from-blue-800 hover:to-blue-600
                  shadow-sm hover:shadow-md hover:shadow-blue-200/50
                  transition-all duration-200 hover:-translate-y-px active:translate-y-0"
              >
                View all blogs <ArrowRight size={12} strokeWidth={2.5} />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
