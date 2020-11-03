import React, { FC } from 'react'

/* import Konecny from '../../assets/images/loga/konecny.jpg' */

const Winery: FC = () => (
  <>
    <div className="flex flex-col justify-center px-4 mx-auto mb-4 max-w-70 text-center align-center">
      <h2
        className="font-lovers md:text-6xl text-4xl text-center mt-16"
        id="vina"
      >
        Naše vína
      </h2>
      <p className="text-lg mb-8">
        Ve Vinotéce U Jana Amose na vás čeká více než 200 druhů vín z těch
        nejlepších českých, moravských i světových vinařství.
      </p>
    </div>
    <div className="grid grid-cols-5">{/* <Konecny /> */}</div>
  </>
)

export default Winery
