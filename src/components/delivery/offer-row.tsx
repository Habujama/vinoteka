import React, { FC } from 'react'

interface Props {
  product: string
  price: number
}

const OfferRow: FC<Props> = ({ product, price }) => (
  <div className="flex justify-between">
    <span>{product}</span>
    <span>{price} Kč</span>
  </div>
)

export default OfferRow
