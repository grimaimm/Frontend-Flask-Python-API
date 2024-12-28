import React from 'react'
import { PiSealWarningDuotone } from "react-icons/pi";

const BookModalDelete = ({ id, handleDelete, handleDeleteCloseModal }) => {
  const confirmDelete = () => {
    handleDelete(id);
    handleDeleteCloseModal();
  }
  return (
    <div
      key={id}
      id="popup-modal"
      tabIndex={-1}
      className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-zinc-700">
          <button
            type="button"
            className="absolute top-3 end-2.5 text-zinc-400 bg-transparent hover:bg-zinc-200 hover:text-zinc-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-zinc-600 dark:hover:text-white"
            onClick={handleDeleteCloseModal}
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
          <div className="p-4 md:p-5 text-center">
            <PiSealWarningDuotone className="mx-auto mb-4 text-zinc-400 w-12 h-12 dark:text-zinc-200" />
            <h3 className="mb-5 text-lg font-normal text-zinc-500 dark:text-zinc-400">
              Are you sure you want to delete this product?
            </h3>
            <button
              onClick={confirmDelete}
              type="button"
              className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
            >
              Yes, I'm sure
            </button>
            <button
              onClick={handleDeleteCloseModal}
              type="button"
              className="py-2.5 px-5 ms-3 text-sm font-medium text-zinc-900 focus:outline-none bg-white rounded-lg border border-zinc-200 hover:bg-zinc-100 hover:text-cyan-700 focus:z-10 focus:ring-4 focus:ring-zinc-100 dark:focus:ring-zinc-700 dark:bg-zinc-800 dark:text-zinc-400 dark:border-zinc-600 dark:hover:text-white dark:hover:bg-zinc-700"
            >
              No, cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookModalDelete