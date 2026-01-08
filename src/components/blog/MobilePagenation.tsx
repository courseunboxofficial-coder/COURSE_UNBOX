import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

  

  return (
    <div className="flex justify-center mt-8 px-2">
      <div
        className="
        flex items-center gap-1
        rounded-full border border-blue-200 bg-white
        px-2 py-1 shadow-md
        sm:gap-2 sm:px-4 sm:py-2
        "
      >
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="
          flex items-center justify-center
          w-8 h-8 sm:w-9 sm:h-9
          rounded-full bg-blue-600 text-white
          disabled:opacity-40 disabled:cursor-not-allowed
          "
        >
          <ChevronLeft size={16} />
        </button>


        <span className="text-xs font-medium text-gray-600 sm:hidden px-2">
          {currentPage} / {totalPages}
        </span>

        
       

     
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="
          flex items-center justify-center
          w-8 h-8 sm:w-9 sm:h-9
          rounded-full bg-blue-600 text-white
          disabled:opacity-40 disabled:cursor-not-allowed
          "
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
