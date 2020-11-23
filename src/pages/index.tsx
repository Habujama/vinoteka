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
      title="Limitovaná edice vín ze&nbsp;slánských&nbsp;vinic"
      message="Darujte výborná vína z hroznů ze slánské viniční tratě Ovčáry. Tato krásná vínka ročníku 2019 pro vás vyrobil pan sklepmistr Podrábský z Roudnice nad Labem. Všechny lahvinky jsou pouze v malých šaržích a brzy se vyprodají. Starší ročníky již nejsou."
    />
    <Delivery />
    <Winery />
    <Destilaty />
  </Layout>
)

export default IndexPage
