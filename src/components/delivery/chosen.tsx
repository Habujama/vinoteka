import React, { FC } from 'react'

import Mobile from '../../assets/svg/mobile.svg'

const Chosen: FC = () => {
  const currentHours = new Date().getHours()
  return (
    <div className="flex flex-col justify-center px-4 mx-auto mb-4 max-w-70 text-center align-center">
      <h3 className="text-center mt-8 mb-6 text-2xl font-bold">
        Máte vybráno?
      </h3>
      <p className="text-lg">
        Zavolejte nám a my vám vína <strong>zdarma</strong> přivezeme až domů!
        <br />
        Rozvážíme ve Slaném a&nbsp;v&nbsp;okolí, denně{' '}
        <strong>od&nbsp;17&nbsp;do&nbsp;20&nbsp;hodin</strong>.
      </p>
      <div className="flex justify-center">
        <a
          href="tel:+420775601128"
          className="inline-block justify-self-center font-bold text-md sm:text-xl text-center text-white bg-black transform hover:scale-125 py-2 px-6 mt-8 rounded-md shadow-md ease-in-out duration-200"
          id="vina"
        >
          <Mobile className="inline-block mr-4" />
          775 601 128
        </a>
      </div>
      {currentHours < 7 || currentHours > 20 ? (
        <p className="px-10 mt-4 text-center text-red-dark">
          Psst! Od osmi do osmi spíme. Počkejte prosím do&nbsp;rána.
        </p>
      ) : null}
    </div>
  )
}

export default Chosen
