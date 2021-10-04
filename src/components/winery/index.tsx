import React, { FC } from 'react'
import TopOfferBox from './top-offer-box'
import BottomOfferBox from './bottom-offer-box'
import SideOfferBox from './side-offer-box'

const Winery: FC = () => (
  <>
    <div className="flex flex-col justify-center px-4 mx-auto mb-4 max-w-70 text-center align-center">
      <h2 className="font-lovers md:text-6xl text-4xl text-center">
        Naše vína
      </h2>
      <p className="text-lg md:w-1/2 mx-auto mb-8" id="destilaty">
        Ve Vinotéce U Jana Amose na vás čeká více než 200 druhů vín z těch
        nejlepších českých, moravských i světových vinařství.
      </p>
      <p className="text-lg md:w-1/2 mx-auto">Mezi nimi i tato:</p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
      <TopOfferBox className="col-start-1 col-span-1 row-start-1 row-span-1" />
      <BottomOfferBox className="col-start-1 col-span-1 row-start-3 sm:row-start-2 row-span-1" />
      <SideOfferBox className="sm:col-start-2 col-start-1 col-span-1 sm:row-start-1 sm:row-span-2 row-span-1" />
    </div>
  </>
)

export default Winery
