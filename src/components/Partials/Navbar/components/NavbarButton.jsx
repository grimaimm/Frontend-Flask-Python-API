import React from 'react'
import { FaRegUserCircle, FaUserCircle } from "react-icons/fa";

export const OpenSidebarButton = () => {
  return (
    <button
      data-drawer-target="logo-sidebar"
      data-drawer-toggle="logo-sidebar"
      aria-controls="logo-sidebar"
      type="button"
      className="inline-flex items-center p-2 text-sm text-zinc-500 rounded-lg sm:hidden hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-200 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:focus:ring-zinc-800"
    >
      <span className="sr-only">Open sidebar</span>
      <svg
        className="w-6 h-6"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          fillRule="evenodd"
          d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
        />
      </svg>
    </button>
  )
}


export const OpenUserMenuButton = () => {
  return (
    <div>
      <button
        type="button"
        className="text-zinc-500 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-200 dark:focus:ring-zinc-800 text-sm p-2 rounded-full"
        aria-expanded="false"
        data-dropdown-toggle="dropdown-user"
      >
        <span className="sr-only">Open user menu</span>
        {/* <img
          className="w-8 h-8 rounded-full"
          src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
          alt="user photo"
        /> */}
        <FaUserCircle className='size-5'/>
      </button>
    </div>
  )
}