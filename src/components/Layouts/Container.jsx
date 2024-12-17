import React from 'react'

export const DashboardContainer = ({ children }) => {
  return (
    <div className="p-3 sm:ml-64">
      <div className="p-3 mt-14">
        {children}
      </div>
    </div>
  )
}

export const AuthContainer = ({ children, ...props }) => {
  return (
    <div className="p-3">
      <div className="p-3">
        {children}
      </div>
    </div>
  )
}