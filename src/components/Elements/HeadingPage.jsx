import React from 'react'

const HeadingPage = ({ title }) => {
  return (
    <h1 className="inline-block mb-6 text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
      {title}
    </h1>
  )
}

export default HeadingPage