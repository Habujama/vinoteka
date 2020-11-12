import React, { FC } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import OfferRow from './offer-row'

interface Produkty {
  cerneProdukty: string
  cerneCeny: number
  id: string
}

interface QueryData {
  allContentfulCerne: {
    node: Produkty[]
  }
  className?: string
}

const SideOfferBox: FC<QueryData> = ({ className }) => {
  const allContentfulCerne: QueryData = useStaticQuery(graphql`
    query {
      allContentfulCerne {
        edges {
          node {
            cerneProdukty
            cerneCeny
            id
          }
        }
      }
    }
  `)

  const vina = allContentfulCerne.edges

  return (
    <div
      className={`${className} bg-black sm:rounded-md text-white p-8 mt-8 shadow-md`}
    >
      <h3 className="text-xl block mb-1">
        Lahvinky z Vinařství Černý, Valtice
      </h3>
      <div className="">
        {vina?.map(({ produkty, cena }, id) => {
          return <OfferRow product={produkty} price={cena} key={id} />
        })}
      </div>
    </div>
  )
}

export default SideOfferBox
