import React from "react";
import {ChevronLeft , ChevronRight} from 'lucide-react'

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const getPages = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);

      if (currentPage > 3) pages.push("...");

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) pages.push("...");

      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="flex items-center justify-center mt-10">
      <div className="flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 shadow-lg ">
        
        {/* Prev */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-3 py-1 rounded-full text-sm transition cursor-pointer
            ${
              currentPage === 1
                ? "text-gray-300 cursor-not-allowed"
                : "text-gray-600 hover:bg-gray-100"
            }`}
        >
         <span className="flex"><ChevronLeft/> Prev</span>
        </button>

      
        {getPages().map((page, index) =>
          page === "..." ? (
            <span key={index} className="px-2 text-gray-400 cursor-pointer">
              ...
            </span>
          ) : (
            <button
              key={index}
              onClick={() => onPageChange(page as number)}
              className={`w-9 h-9 flex items-center justify-center rounded-full text-sm font-medium transition cursor-pointer
                ${
                  currentPage === page
                    ? "border-2 border-blue-600 text-blue-600"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
            >
              {page}
            </button>
          )
        )}

        {/* Next */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 rounded-full text-sm transition cursor-pointer
            ${
              currentPage === totalPages
                ? "text-gray-300 cursor-not-allowed"
                : "text-gray-600 hover:bg-gray-100"
            }`}
        >
          <span className="flex">Next <ChevronRight/></span>
        </button>
      </div>
    </div>
  );
}
