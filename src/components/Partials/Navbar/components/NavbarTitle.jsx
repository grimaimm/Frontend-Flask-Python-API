import React from 'react'
import { FaBookSkull } from "react-icons/fa6";

const NavbarTitle = () => {
  return (
    <a href="" className="flex ms-2 md:me-24">
      {/* <img
        src="https://flowbite.com/docs/images/logo.svg"
        className="h-8 me-3"
        alt="FlowBite Logo"
      /> */}
      <FaBookSkull className='size-8 me-3 text-cyan-600 dark:text-cyan-400'/>
      <span className="self-center text-xl sm:text-2xl whitespace-nowrap inline-block font-extrabold tracking-tight text-zinc-950 dark:text-white">
        Books App
      </span>
    </a>
  )
}

export default NavbarTitle