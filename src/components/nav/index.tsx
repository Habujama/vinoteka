import React, { FC } from 'react'

import PcMenu from './pc-menu'
import MobileMenu from './mobile-menu'

const Nav: FC = () => (
  <header className="sticky top-0 bg-white shadow-lg text-black font-medium w-full z-10 outline-white">
    <PcMenu className="hidden md:block" />
    <MobileMenu className="md:hidden block" />
  </header>
)

export default Nav
