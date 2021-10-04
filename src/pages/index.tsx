import React, { FC } from 'react'
import { PageProps } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero'
import News from '../components/news'
import Winery from '../components/winery'
import Destilaty from '../components/destilaty'

const IndexPage: FC<PageProps> = () => (
  <Layout>
    <SEO title="Vinotéka U Jana Amose" />
    <Hero />
    <News
      title="Slánský Salon Vín 2021"
      message="Přijďte ochutnat vína z&nbsp;více než 6&nbsp;skvělých vinařství během jednoho&nbsp;dne! Vstupenky v&nbsp;ceně 50&nbsp;Kč jsou v&nbsp;prodeji u&nbsp;nás ve&nbsp;vinotéce, případně na&nbsp;místě. Ochutnání jednoho vzorku stojí 20&nbsp;Kč."
    />
    <Winery />
    <Destilaty />
  </Layout>
)

export default IndexPage
