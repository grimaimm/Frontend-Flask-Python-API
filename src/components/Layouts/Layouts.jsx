import React from 'react'
import Navbar from '../Partials/Navbar'
import Sidebar from '../Partials/Sidebar'
import { AuthContainer, DashboardContainer } from './Container'

export const DashboardLayouts = ({ children }) => {
  return (
    <>
      {/* <div className='relative'> */}
        <Navbar />
        <Sidebar />
        <DashboardContainer>
          {children}
        </DashboardContainer>
      {/* </div> */}

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
