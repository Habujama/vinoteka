import React, { FC } from 'react'

import Nav from './nav'
import Footer from './footer'
import Wrapper from '../components/shared/wrapper'

const Layout: FC = ({ children }) => {
  return (
    <>
      <Nav />
      <Wrapper>
        <main>{children}</main>
      </Wrapper>
      <Footer />
    </>
  )
}

export default Layout
