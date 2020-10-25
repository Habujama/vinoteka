import React, { FC } from 'react'
import { PageProps } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage: FC<PageProps> = () => (
  <Layout>
    <SEO title="Vinotéka U Jana Amose" />
  </Layout>
)

export default IndexPage
