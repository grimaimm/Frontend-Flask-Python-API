import React from 'react'

const Introduction = ({ ...props }) => {
  return (
    <div className="flex flex-col justify-center" {...props}>
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-tight text-zinc-900 md:text-5xl lg:text-6xl dark:text-white">
        <span className='text-cyan-600 dark:text-cyan-400'>Books App</span> using Vite + React + Flask
      </h1>
      <p className="text-lg font-normal text-zinc-500 lg:text-xl dark:text-zinc-400">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  )
}

export default Introduction