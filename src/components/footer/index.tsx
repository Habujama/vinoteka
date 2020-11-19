import React, { FC } from 'react'

import Wrapper from '../shared/wrapper'
import OpeningHours from './opening-hours'
import Company from './company'
import Contact from './contact'
import Copyright from './copyright'

const Footer: FC = () => (
  <div className="bg-black shadow-md text-white pt-6 pb-8 w-full bottom-0 h-card">
    <Wrapper>
      <div
        className="grid sm:grid-cols-4 sm:grid-rows-1 grid-rows-4 grid-cols-1 space-x-0 sm:space-x-8 space-y-4 sm:space-y-0 px-4 sm:px-0 leading-7"
        id="kontakt"
      >
        <dl className="sm:col-start-1 col-span-1 row-start-3 sm:row-start-1 self-center">
          <OpeningHours />
        </dl>
        <dl className="sm:col-start-2 col-span-1 row-start-1 sm:row-start-1 self-center">
          <Contact />
        </dl>
        <dl className="sm:col-start-3 col-span-1 row-start-2 sm:row-start-1 self-center">
          <Company />
        </dl>
        <dl className="sm:col-start-4 col-span-1 row-start-4 sm:row-start-1 text-sm self-center">
          <Copyright />
        </dl>
      </div>
    </Wrapper>
  </div>
)

export default Footer
