import React, { FC } from 'react'

interface Props {
  className?: string
}

const TopOfferBox: FC<Props> = ({ className }) => {
  return (
    <div className={`${className} p-8 sm:rounded-md mt-8 shadow-md`}>
      <h3 className="text-xl font-medium block mb-1">Vína v bag-in-boxech</h3>
      <p className="w-11/12 mb-2">
        Kvalitní vína v&nbsp;ochranných obalech, které zabraňují oxidaci vín
        a&nbsp;tím jim dávají dlouhou životnost.
      </p>
      <div className="grid grid-cols-4 gap-y-1">
        <div className="col-start-1 col-span-3">
          5l Veltlínské zelené, suché
        </div>
        <div className="col-start-4 col-span-1">320&nbsp;Kč</div>
        <div className="col-start-1 col-span-3">
          5l Rulandské šedé, suché, nebo polosuché
        </div>
        <div className="col-start-4 col-span-1">350&nbsp;Kč</div>
        <div className="col-start-1 col-span-3">
          3l/5l Sauvignon Blanc, suché
        </div>
        <div className="col-start-4 col-span-1">
          210&nbsp;Kč /&nbsp;350&nbsp;Kč
        </div>
        <div className="col-start-1 col-span-3">
          3l/5l Cabernet Sauvignon, suché
        </div>
        <div className="col-start-4 col-span-1">
          210&nbsp;Kč /&nbsp;350&nbsp;Kč
        </div>
        <div className="col-start-1 col-span-3">5l Modrý Portugal, suché</div>
        <div className="col-start-4 col-span-1">350&nbsp;Kč</div>
        <div className="col-start-1 col-span-3">
          3l Kagor Pastoral, likérové sladké víno, 16&nbsp;%&nbsp;alk.
        </div>
        <div className="col-start-4 col-span-1">450&nbsp;Kč</div>
      </div>
    </div>
  )
}

export default TopOfferBox
