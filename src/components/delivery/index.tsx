import React, { FC } from 'react'

import TopOfferBox from './top-offer-box'
import BottomOfferBox from './bottom-offer-box'
import SideOfferBox from './side-offer-box'
import Chosen from './chosen'
import MobileDark from '../../assets/svg/mobile-dark.svg'

const Delivery: FC = () => {
  const currentHours = new Date().getHours()
  return (
    <>
      <h2 className="font-lovers md:text-6xl text-4xl text-center" id="rozvoz">
        Rozvoz vín po Slaném a&nbsp;okolí
      </h2>
      <div className="flex justify-center">
        <a
          href="tel:+420775601128"
          className="inline-block justify-self-center font-bold text-lg sm:text-xl text-center transform hover:scale-125 hover:bg-white py-2 px-6 mt-4 rounded-md shadow-md ease-in-out duration-200"
        >
          <MobileDark className="inline-block mr-4" />
          775 601 128
        </a>
      </div>

      {currentHours > 8 || currentHours < 20 ? (
        <p className="px-10 mt-4 text-center text-red-dark">
          Psst! Od osmi do osmi spíme. Počkejte prosím do rána.
        </p>
      ) : null}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
        <TopOfferBox className="col-start-1 col-span-1 row-start-1 row-span-1" />
        <BottomOfferBox className="col-start-1 col-span-1 row-start-3 sm:row-start-2 row-span-1" />
        <SideOfferBox className="sm:col-start-2 col-start-1 col-span-1 sm:row-start-1 sm:row-span-2 row-span-1" />
      </div>
      <Chosen />
    </>
  )
}

export default Delivery
