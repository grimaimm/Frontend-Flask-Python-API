import React from 'react'
import Navbar from '../Partials/Navbar'
import Sidebar from '../Partials/Sidebar'
import { AuthContainer, DashboardContainer } from './Container'

export const DashboardLayouts = ({ children }) => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <DashboardContainer>
        {children}
      </DashboardContainer>
    </>
  )
}


export const AuthLayouts = ({ children }) => {
  return (
    <>
      <AuthContainer>
        {children}
      </AuthContainer>
    </>
  )
}
