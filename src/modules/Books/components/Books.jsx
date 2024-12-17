import React from 'react'
import BookList from './BookList'
import HeadingPage from '../../../components/Elements/HeadingPage'
import { BreadcrumbBookPage } from './BooksBreadcrumb'

const Books = ({ ...props }) => {
  return (
    <div {...props}>
      <BreadcrumbBookPage />
      <HeadingPage title="Book Lists" />
      <BookList />
    </div>
  )
}

export default Books