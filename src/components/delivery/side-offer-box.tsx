import React, { FC } from 'react'

interface Props {
  className?: string
}

const SideOfferBox: FC<Props> = ({ className }) => (
  <div
    className={`${className} bg-black sm:rounded-md text-white p-8 mt-8 shadow-md`}
  >
    <h3 className="text-xl block mb-1">Lahvinky z Vinařství Černý, Valtice</h3>
    <p className="w-11/12 mb-2">Krásné lahvinky zemského vína z Valtic.</p>
    <div className="grid grid-cols-4 gap-y-1 mb-24">
      <div className="col-start-1 col-span-3">Neuburské 2019, suché</div>
      <div className="col-start-4 col-span-1">120&nbsp;Kč</div>
      <div className="col-start-1 col-span-3">Chardonnay 2019, polosuché</div>
      <div className="col-start-4 col-span-1">120&nbsp;Kč</div>
      <div className="col-start-1 col-span-3">
        Rulandské šedé 2019, polosladké
      </div>
      <div className="col-start-4 col-span-1">120&nbsp;Kč</div>
      <div className="col-start-1 col-span-3">Frankovka 2019, suché</div>
      <div className="col-start-4 col-span-1">120&nbsp;Kč</div>
      <div className="col-start-1 col-span-3">
        Rulandské modré 2019, polosuché
      </div>
    </div>
    <h3 className="col-start-1 col-span-4 text-xl block mb-1">
      Lahvinky z Vinařství Konečný, Čejkovice
    </h3>
    <p className=" col-start-1 col-span-4 mb-2">
      Výborné lahvinky pozdních sběrů a&nbsp;výběrů z&nbsp;hroznů
      z&nbsp;Čejkovic.
    </p>
    <div className="grid grid-cols-4 gap-y-1">
      <div className="col-start-1 col-span-3">
        Aurelius 2019, pozdní sběr, polosuché
      </div>
      <div className="col-start-4 col-span-1">220&nbsp;Kč</div>
      <div className="col-start-1 col-span-3">
        Rulandské šedé 2019, pozdní sběr, polosuché
      </div>
      <div className="col-start-4 col-span-1">220&nbsp;Kč</div>
      <div className="col-start-1 col-span-3">
        Hibernal 2019, výběr z hroznů, polosladké
      </div>
      <div className="col-start-4 col-span-1">240&nbsp;Kč</div>
      <div className="col-start-1 col-span-3">
        Pálava 2019, výběr z hroznů, polosladké
      </div>
      <div className="col-start-4 col-span-1">240&nbsp;Kč</div>
    </div>
  </div>
)

export default SideOfferBox
