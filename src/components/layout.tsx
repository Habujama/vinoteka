import React, { FC } from 'react'

import Nav from './nav'
import Hero from './hero'
import News from './news'
import Delivery from './delivery'

import Wrapper from '../components/shared/wrapper'

const Layout: FC = () => {
  /*  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `) */

  return (
    <>
      <Nav />
      <Wrapper>
        <Hero />
        <News
          title="Dovezeme vám víno až domů"
          message="Chápeme, že se vám během lockdownu nechce chodit ven a nedostanete se tak ani k nám do vinotéky. My vám vinotéku přivezeme domů! Vyberte si z naší týdenní nabídky vín a zavolejte si o ně."
        />
        <Delivery />
      </Wrapper>
    </>
  )
}

export default Layout
