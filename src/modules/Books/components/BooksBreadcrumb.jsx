import React from 'react'

export const BreadcrumbBookPage = () => {
  return (
    <nav className="flex mb-2" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li className="inline-flex items-center">
          <a
            href="#"
            className="inline-flex items-center text-sm font-medium text-zinc-700 hover:text-cyan-600 dark:text-zinc-400 dark:hover:text-cyan-400"
          >
            Home
          </a>
        </li>
        <li>
          <div className="flex items-center">
            <svg
              className="rtl:rotate-180 w-3 h-3 text-zinc-400 mx-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m1 9 4-4-4-4"
              />
            </svg>
            <a
              href="#"
              className="ms-1 text-sm font-medium text-zinc-700 hover:text-cyan-600 md:ms-2 dark:text-zinc-400 dark:hover:text-cyan-400"
            >
              Books
            </a>
          </div>
        </li>
      </ol>
    </nav>
  )
}