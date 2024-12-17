import React from 'react'
import SidebarMenuItem from './SidebarMenuItem';

const SidebarMenu = ({ list }) => {
  return (
    <ul className="space-y-2 font-medium">
      {list?.map((item, index) => (
        <li>
          <SidebarMenuItem key={index} {...item} />
        </li>
      ))}
    </ul>
  )
}

export default SidebarMenu