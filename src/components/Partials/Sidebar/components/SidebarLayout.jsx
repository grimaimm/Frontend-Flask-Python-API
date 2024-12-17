import React from 'react'

const SidebarLayout = ({ children }) => {
  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-zinc-100 border-r border-zinc-200 sm:translate-x-0 dark:bg-zinc-950 dark:border-zinc-700"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-zinc-100 dark:bg-zinc-950">
        {children}
      </div>
    </aside>
  )
}

export default SidebarLayout