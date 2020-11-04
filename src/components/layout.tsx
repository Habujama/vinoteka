import React, { FC } from 'react'

import Nav from './nav'
import Wrapper from '../components/shared/wrapper'

const Layout: FC = ({ children }) => {
  return (
    <>
      <Nav />
      <Wrapper>
        <main>{children}</main>
      </Wrapper>
    </>
  )
}

export default Layout
