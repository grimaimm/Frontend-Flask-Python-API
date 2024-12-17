import React from 'react'

export const NavbarLayout = ({ children }) => {
  return (
    <nav className="fixed top-0 z-50 w-full bg-zinc-100 border-b border-zinc-200 dark:bg-zinc-950 dark:border-zinc-700">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          {children}
        </div>
      </div>
    </nav>
  )
}

export const NavbarItemLeft = ({ children }) => {
  return (
    <div className="flex items-center justify-start rtl:justify-end">
      {children}
    </div>
  )
}

export const NavbarItemRight = ({ children }) => {
  return (
    <div className="flex items-center">
      <div className="flex items-center ms-3 gap-2">
        {children}
      </div>
    </div>
  )
}