import React from 'react'
import HeadingPage from '../../../components/Elements/HeadingPage'

const Home = ({ ...props }) => {
  return (
    <div {...props}>
      <HeadingPage title="Welcome To Books App" />
    </div>
  )
}

export default Home