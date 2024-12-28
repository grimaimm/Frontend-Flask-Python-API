import React from 'react'

const Pagination = ({ handlePageChange, currentPage, totalPages }) => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="text-sm flex justify-center items-center my-6 gap-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <li
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`flex items-center justify-center px-3 h-8 leading-tight rounded-lg cursor-pointer ${currentPage === index + 1
              ? 'text-cyan-600 border border-zinc-300 bg-cyan-50 hover:bg-cyan-100 hover:text-cyan-700 dark:border-zinc-700 dark:bg-zinc-700 dark:text-white'
              : ' text-zinc-500 bg-white border border-zinc-300 hover:bg-zinc-100 hover:text-zinc-700 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-white'
              }`}
          >
            {index + 1}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination