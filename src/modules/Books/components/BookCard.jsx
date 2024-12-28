import React from 'react'
import { FaEdit, FaTrash } from "react-icons/fa";

const BookCard = ({ id, title, author, year, category, onEdit, onDelete }) => {
  return (
    <div key={id} className="w-full h-full p-6 bg-gradient-to-b from-zinc-50 to-zinc-100 border border-zinc-200 rounded-xl shadow-sm dark:from-zinc-900 dark:to-zinc-950 dark:border-zinc-700 hover:cursor-pointer group">
      {/* <a href="#"> */}
      <h5 className="mb-2 text-lg font-bold tracking-tight text-cyan-700 dark:text-cyan-500 group-hover:underline group-hover:text-cyan-800 group-hover:dark:text-cyan-400">
        {title}
      </h5>
      {/* </a> */}
      <ul className="font-normal text-md text-zinc-700 dark:text-zinc-400 mb-4">
        <li>Author: {author}</li>
        <li>Year: {year}</li>
        <li>Categoty: {category}</li>
      </ul>
      <div className='flex'>
        <button
          type="button"
          onClick={onEdit}
          className="flex items-center focus:outline-none text-yellow-400 bg-yellow-400/20 border border-yellow-400 hover:bg-yellow-400/30 hover:text-yellow-300 font-medium rounded-lg text-sm px-5 py-2 me-2"
        >
          <FaEdit className='me-2' /> Edit
        </button>
        <button
          type="button"
          onClick={onDelete}
          className="flex items-center focus:outline-none text-red-600 bg-red-600/20 border border-red-600 hover:bg-red-600/30 hover:text-red-500 font-medium rounded-lg text-sm px-5 py-2 me-2"
        >
          <FaTrash className='me-2' /> Delete
        </button>
      </div>
    </div>

  )
}

export default BookCard