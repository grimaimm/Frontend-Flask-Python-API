import React from 'react'

const BookCard = ({ id, title, author, year, category }) => {
  return (
    <div key={id} className="w-full h-full p-6 bg-gradient-to-b from-zinc-50 to-zinc-100 border border-zinc-200 rounded-xl shadow-sm dark:from-zinc-900 dark:to-zinc-950 dark:border-zinc-700 hover:cursor-pointer group">
      {/* <a href="#"> */}
        <h5 className="mb-2 text-lg font-bold tracking-tight text-cyan-700 dark:text-cyan-500 group-hover:underline group-hover:text-cyan-800 group-hover:dark:text-cyan-400">
          {title}
        </h5>
      {/* </a> */}
      <ul className="font-normal text-md text-zinc-700 dark:text-zinc-400">
        <li>Author: {author}</li>
        <li>Year: {year}</li>
        <li>Categoty: {category}</li>
      </ul>
    </div>

  )
}

export default BookCard