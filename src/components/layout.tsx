import React, { FC } from 'react'
/* import { useStaticQuery, graphql } from 'gatsby' */
import Nav from './nav'
import Hero from './hero'
import News from './news'
import Delivery from './delivery'

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
      <Hero />
      <News
        title="Řízená degustace 2020"
        message="Degustace neboli ochutnávka je činnost, při které se ochutnávají různé potraviny či nápoje. Mezi nejznámější patří degustace vín, při které víno degustuje tzv. sommelier (česky sklepmistr, ve francouzštině též číšník roznášející víno). Jelly Caramel!"
      />
      <Delivery />
    </>
  )
}

export default Layout
