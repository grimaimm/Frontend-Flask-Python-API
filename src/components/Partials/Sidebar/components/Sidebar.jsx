import React from 'react'
import SidebarLayout from './SidebarLayout'
import SidebarMenu from './SidebarMenu'
import { MENU_ITEMS } from '../../../../constant/Menu';

const Sidebar = () => {
  const filteredMenu = MENU_ITEMS?.filter((item) => item?.isShow);
  return (
    <>
      <SidebarLayout>
        <SidebarMenu list={filteredMenu} />
      </SidebarLayout>
    </>
  )
}

export default Sidebar