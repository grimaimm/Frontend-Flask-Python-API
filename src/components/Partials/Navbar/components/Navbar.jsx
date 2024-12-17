import React from 'react'
import { NavbarItemLeft, NavbarItemRight, NavbarLayout } from './NavbarLayout'
import { OpenSidebarButton, OpenUserMenuButton } from './NavbarButton'
import { DropdownUserMenu } from './NavbarMenu'
import NavbarTitle from './NavbarTitle'
import ButtonTheme from '../../../Elements/ButtonTheme'

const Navbar = () => {
  return (
    <>
      <NavbarLayout>
        <NavbarItemLeft>
          <OpenSidebarButton />
          <NavbarTitle />
        </NavbarItemLeft>
        <NavbarItemRight>
          <ButtonTheme />
          <OpenUserMenuButton />
          <DropdownUserMenu />
        </NavbarItemRight>
      </NavbarLayout>
    </>
  )
}

export default Navbar