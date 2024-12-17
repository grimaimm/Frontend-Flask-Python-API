import React from 'react'

export const DropdownUserMenu = () => {
  return (
    <div
      className="z-50 hidden my-4 text-base list-none divide-y divide-zinc-100 rounded shadow-md bg-white dark:bg-zinc-900 dark:divide-zinc-700"
      id="dropdown-user"
    >
      <div className="px-4 py-3" role="none">
        <p
          className="text-sm text-zinc-900 dark:text-white"
          role="none"
        >
          Neil Sims
        </p>
        <p
          className="text-sm font-medium text-zinc-900 truncate dark:text-zinc-300"
          role="none"
        >
          neil.sims@flowbite.com
        </p>
      </div>
      <ul className="py-1" role="none">
        <li>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-700 dark:hover:text-white"
            role="menuitem"
          >
            Dashboard
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-700 dark:hover:text-white"
            role="menuitem"
          >
            Settings
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-700 dark:hover:text-white"
            role="menuitem"
          >
            Earnings
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-700 dark:hover:text-white"
            role="menuitem"
          >
            Sign out
          </a>
        </li>
      </ul>
    </div>
  )
}