import React from 'react'
import { FaEdit } from 'react-icons/fa'

const BookModalEdit = ({ setSelectedBook, editedBook, setEditedBook, handleSave, categories }) => {
  return (
    <div className='overflow-y-auto overflow-x-hidden flex justify-center items-center fixed left-0 z-50 w-full right-0 top-0 bottom-0 h-screen inset-0 bg-zinc-950/60'>
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-zinc-50 shadow-xl rounded-xl dark:bg-zinc-800">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-zinc-600">
            <h3 className="flex items-center text-xl font-semibold text-zinc-900 dark:text-white">
              <FaEdit className='me-2' /> Edit Book
            </h3>
            <button
              onClick={() => setSelectedBook(null)}
              className="end-2.5 text-zinc-400 bg-transparent hover:bg-zinc-200 hover:text-zinc-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-zinc-600 dark:hover:text-white"
              data-modal-hide="authentication-modal"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-4 md:p-5">
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="title"
                  className="block mb-2 text-sm font-medium text-zinc-900 dark:text-white"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  placeholder="Title"
                  className="shadow-sm bg-zinc-50 border border-zinc-300 text-zinc-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500 dark:shadow-sm-light"
                  value={editedBook.title}
                  onChange={e => setEditedBook({ ...editedBook, title: e.target.value })}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="author"
                  className="block mb-2 text-sm font-medium text-zinc-900 dark:text-white"
                >
                  Author
                </label>
                <input
                  type="text"
                  id="author"
                  placeholder="Author"
                  className="shadow-sm bg-zinc-50 border border-zinc-300 text-zinc-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500 dark:shadow-sm-light"
                  value={editedBook.author}
                  onChange={e => setEditedBook({ ...editedBook, author: e.target.value })}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="year"
                  className="block mb-2 text-sm font-medium text-zinc-900 dark:text-white"
                >
                  Year
                </label>
                <input
                  type="number"
                  id="year"
                  placeholder="Year"
                  className="shadow-sm bg-zinc-50 border border-zinc-300 text-zinc-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500 dark:shadow-sm-light"
                  value={editedBook.year}
                  onChange={e => setEditedBook({ ...editedBook, year: e.target.value })}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="category"
                  className="block mb-2 text-sm font-medium text-zinc-900 dark:text-white"
                >
                  Category
                </label>
                <select
                  id="category"
                  value={editedBook.category_id}
                  onChange={(e) =>
                    setEditedBook({
                      ...editedBook,
                      category_id: parseInt(e.target.value)
                    })
                  }
                  className="bg-zinc-50 border border-zinc-300 text-zinc-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
                  required
                >
                  <option selected value="" disabled>
                    Select category
                  </option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className='flex md:flex-row flex-col gap-2'>
                <button
                  onClick={handleSave}
                  className="text-white bg-cyan-700 hover:bg-cyan-800 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-cyan-600 dark:hover:bg-cyan-700"
                >
                  Save
                </button>
                <button
                  onClick={() => setSelectedBook(null)}
                  className="text-white bg-zinc-700 hover:bg-zinc-800 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-zinc-600 dark:hover:bg-zinc-700"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookModalEdit