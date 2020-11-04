import React, { FC } from 'react'
import { PageProps } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero'
import News from '../components/news'
import Delivery from '../components/delivery'
import Winery from '../components/winery'
import Destilaty from '../components/destilaty'

const IndexPage: FC<PageProps> = () => (
  <Layout>
    <SEO title="Vinotéka U Jana Amose" />
    <Hero />
    <News
      title="Dovezeme vám víno až domů"
      message="Chápeme, že se vám během lockdownu nechce chodit ven a nedostanete se tak ani k nám do vinotéky. My vám vinotéku přivezeme domů! Vyberte si z naší týdenní nabídky vín a zavolejte si o ně."
    />
    <Delivery />
    <Winery />
    <Destilaty />
  </Layout>
)

export default IndexPage
