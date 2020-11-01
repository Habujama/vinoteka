import React, { FC } from 'react'

import OfferRow from './offer-row'

interface Products {
  product: string
  price: number
}

interface Props {
  products: Products[]
  className?: string
}

const BottomOfferBox: FC<Props> = ({ products, className }) => {
  return (
    <div className={`${className} p-8 sm:rounded-md mt-8 shadow-md`}>
      <h3 className="text-xl block mb-1">
        Lahvinky z Vinařství Černý, Valtice
      </h3>
      <div className="">
        {products?.map(({ product, price }, index) => {
          return <OfferRow product={product} price={price} key={index} />
        })}
      </div>
    </div>
  )
}

export default BottomOfferBox
