import React, { FC } from 'react'

/* import Konecny from '../../assets/images/loga/konecny.jpg' */

const Destilaty: FC = () => (
  <>
    <div className="flex flex-col justify-center px-4 mx-auto mb-4 max-w-70 text-center align-center">
      <h2
        className="font-lovers md:text-6xl text-4xl text-center mt-16"
        id="destilaty"
      >
        Destiláty
      </h2>
      <p className="text-lg md:w-1/2 mx-auto mb-20">
        Hledáte výbornou medovinu nebo pálenku? Máme je! A k nim navíc kvalitní
        zahraniční rumy, portská vína a další destiláty. Přijďte si vybrat.
      </p>
    </div>
    <div className="grid grid-cols-5">{/* <Konecny /> */}</div>
  </>
)

export default Destilaty
