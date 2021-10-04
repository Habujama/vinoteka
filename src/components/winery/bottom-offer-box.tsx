import React, { FC } from 'react'

interface Props {
  className?: string
}

const BottomOfferBox: FC<Props> = ({ className }) => {
  return (
    <div className={`${className} p-8 sm:rounded-md mt-8 shadow-md`}>
      <h3 className="text-xl font-medium block mb-1">
        Piva z Pivovaru Zichovec
      </h3>
      <div className="grid grid-cols-4 gap-y-1">
        <div className="col-start-1 col-span-3">
          Krahulík 12, plech 0,5 litru
        </div>
        <div className="col-start-4 col-span-1">50&nbsp;Kč</div>
        <div className="col-start-1 col-span-3">
          Mosaic American Pale, plech
        </div>
        <div className="col-start-4 col-span-1">60&nbsp;Kč</div>
      </div>
    </div>
  )
}

export default BottomOfferBox
