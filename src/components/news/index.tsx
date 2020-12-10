import React, { FC } from 'react'

interface Props {
  title: string
  message: string
}

const News: FC<Props> = ({ title, message }) => {
  return (
    <div className="bg-white rounded-md shadow-md p-10 md:w-1/2 relative transform -translate-y-20 text-center mx-auto leading-2">
      <h2 className="font-lovers text-4xl font-bold leading-tight mb-2">
        {title}
      </h2>
      <p>{message}</p>
      <div className="grid grid-cols-4 gap-y-1 text-justify mt-4">
        <div className="col-start-1 col-span-3">
          Müller Thurgau, jakostní víno polosuché
        </div>
        <div className="col-start-4 col-span-1">170&nbsp;Kč</div>
        <div className="col-start-1 col-span-3">
          Rulandské šedé, zemské víno suché
        </div>
        <div className="col-start-4 col-span-1">180&nbsp;Kč</div>
        <div className="col-start-1 col-span-3">
          Sauvignon, zemské víno suché
        </div>
        <div className="col-start-4 col-span-1">240&nbsp;Kč</div>
        <div className="col-start-1 col-span-3">Pálava, jakostní polosuché</div>
        <div className="col-start-4 col-span-1">250&nbsp;Kč</div>
        <div className="col-start-1 col-span-3">
          Rosé Cuveé(MP+Rš), polosuché{' '}
        </div>
        <div className="col-start-4 col-span-1">170&nbsp;Kč</div>
        <div className="col-start-1 col-span-3">
          Modrý Portugal, zemské suché
        </div>
        <div className="col-start-4 col-span-1">170&nbsp;Kč</div>
      </div>
      <p className="mt-4">
        Vzhledem k malé produkci nejsou vína od pana Podrábského zařazována do
        přívlastkových vín a jsou tedy označována <em>pouze</em> jako jakostní
        či zemská. Vaše chuťové buňky však určitě poznají jejich skutečnou
        kvalitu i bez přívlastku.
      </p>
    </div>
  )
}

export default News
