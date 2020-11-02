import React, { FC } from 'react'

import TopOfferBox from './top-offer-box'
import BottomOfferBox from './bottom-offer-box'
import SideOfferBox from './side-offer-box'
import Chosen from './chosen'
import MobileDark from '../../assets/svg/mobile-dark.svg'

import { products } from './products'

const Delivery: FC = () => (
  <>
    <h2 className="font-lovers md:text-6xl text-4xl text-center">
      Rozvoz vín po Slaném a okolí
    </h2>
    <div className="flex justify-center">
      <a
        href="tel:+420775601128"
        className="inline-block justify-self-center font-bold text-xl text-center transform hover:scale-125 hover:bg-white py-2 px-6 mt-4 rounded-md shadow-md ease-in-out duration-200"
      >
        <MobileDark className="inline-block mr-4" />
        775 601 128
      </a>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
      <TopOfferBox
        products={products}
        className="col-start-1 col-span-1 row-start-1 row-span-1"
      />
      <BottomOfferBox
        products={products}
        className="col-start-1 col-span-1 row-start-3 sm:row-start-2 row-span-1"
      />
      <SideOfferBox
        products={products}
        className="sm:col-start-2 col-start-1 col-span-1 sm:row-start-1 sm:row-span-2 row-span-1"
      />
    </div>
    <Chosen />
  </>
)

export default Delivery
