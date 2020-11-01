import React, { FC } from 'react'

import Wrapper from '../shared/wrapper'
import OfferRow from './offer-row'

interface Products {
  product: string
  price: number
}

interface Props {
  products: Products[]
}

const OfferBox: FC<Props> = ({ products }) => {
  return (
    <Wrapper size="small">
      <div className="p-4 max-w-40">
        <h3 className="text-xl block mb-1">
          Lahvinky z Vinařství Černý, Valtice
        </h3>
        <div className="">
          {products?.map(({ product, price }, index) => {
            return <OfferRow product={product} price={price} key={index} />
          })}
        </div>
      </div>
    </Wrapper>
  )
}

export default OfferBox
