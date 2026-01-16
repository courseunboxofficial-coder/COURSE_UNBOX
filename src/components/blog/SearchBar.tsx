"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

export type TypeBlogs = {
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
    created_at: number;
    author: string,
    domain: string;
};

export default function BlogSearch({ blogs }: { blogs: TypeBlogs[] }) {
  const [search, setSearch] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();

  const filteredBlogs = blogs
    .filter((blog) =>
      blog.title.toLowerCase().includes(search.toLowerCase())
    )
    .slice(0, 8);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!filteredBlogs.length) return;

    if (e.key === "ArrowDown") {
      setActiveIndex((prev) =>
        Math.min(prev + 1, filteredBlogs.length - 1)
      );
    }

    if (e.key === "ArrowUp") {
      setActiveIndex((prev) => Math.max(prev - 1, 0));
    }

    if (e.key === "Enter") {
      router.push(`/blog/${filteredBlogs[activeIndex].slug}`);
      setSearch("");
    }
  };

  return (
    <div className="relative w-full max-w-md -mt-14 ">
      {/* Search Input */}
      <div className="relative w-full">
        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-500"
          size={18}
        />

        <input
          type="text"
          placeholder="Search blogs..."
          value={search}
          onKeyDown={handleKeyDown}
          onChange={(e) => {
            setSearch(e.target.value);
            setActiveIndex(0);
          }}
          className="
            w-full rounded-xl px-11 py-3 text-sm
            text-gray-700 placeholder-gray-400 outline-none transition bg-gray-50
            focus:bg-white focus:ring-2 focus:ring-blue-500/40 shadow-sm border-2 border-blue-200
          "
        />
      </div>

      {/* Dropdown */}
      {search && filteredBlogs.length > 0 && (
        <div className="absolute z-10 mt-2 w-full rounded-xl bg-white shadow-lg overflow-hidden">
          {filteredBlogs.map((blog, index) => (
            <Link
              key={blog.id}
              href={`/blog/${blog.slug}`}
              className={`block px-4 py-2 text-sm transition
                ${
                  index === activeIndex
                    ? "bg-blue-100 text-blue-700"
                    : "hover:bg-blue-50"
                }`}
            >
              {blog.title}
            </Link>
          ))}
        </div>
      )}

      {/* No Result */}
      {search && filteredBlogs.length === 0 && (
        <div className="absolute mt-2 w-full rounded-xl bg-white shadow p-3 text-sm text-gray-500">
          No blogs found
        </div>
      )}
    </div>
  );
}
