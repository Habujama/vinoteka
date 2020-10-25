import React, { FC } from 'react'

import OfferBox from './offer-box'
import { products } from './products'

const Delivery: FC = () => (
  <>
    <h2 className="font-lovers text-6xl text-center">
      Rozvoz vín po Slaném a okolí
    </h2>
    <a
      href="tel:+420775601128"
      className="block serif font-bold text-xl text-center transform hover:scale-125 ease-in-out duration-200"
    >
      775 601 128
    </a>
    <OfferBox products={products} />
  </>
)

export default Delivery
