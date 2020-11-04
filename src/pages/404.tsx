import React, { FC } from 'react'
import { PageProps } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Wrapper from '../components/shared/wrapper'

import Mail from '../assets/svg/mail.svg'
import Mobile from '../assets/svg/mobile.svg'

const NotFoundPage: FC<PageProps> = () => (
  <Layout>
    <SEO title="404: Tady víno neteče!" />
    <Wrapper>
      <h2 className="font-lovers md:text-6xl text-4xl text-center mt-16">
        Tady víno neteče!
      </h2>
      <p className="text-xl text-center leading-10">
        Takovou stránku u nás ještě nenajdete.
        <br />
        Chybí vám tu něco? Napište nebo zavolejte nám o tom.
      </p>
      <div className="flex flex-col sm:flex-row justify-center sm:space-x-8 mt-8">
        <a
          href="mailto:info@vinobohemia.com"
          className="inline-block justify-self-center font-bold text-xl text-center text-black bg-white rounded-md shadow-md transform hover:scale-125 hover:border-black ease-in-out duration-200 py-2 px-6 mb-10 sm:mb-0"
        >
          <Mail className="inline-block mr-4" />
          info@vinobohemia.com
        </a>
        <a
          href="tel:+420775601128"
          className="inline-block justify-self-center font-bold text-xl text-center text-white bg-black transform hover:scale-125 py-2 px-6 mb-4 sm:mb-0 rounded-md shadow-md ease-in-out duration-200"
        >
          <Mobile className="inline-block mr-4" />
          775 601 128
        </a>
      </div>
    </Wrapper>
  </Layout>
)

export default NotFoundPage
