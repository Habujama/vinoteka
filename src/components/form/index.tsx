import React, { FC } from 'react'

import Mobile from '../../assets/svg/mobile.svg'

const FormComponent: FC = () => {
  return (
    <>
      <h3 className="text-center mt-8 mb-6 text-2xl font-bold">
        Máte vybráno?
      </h3>
      <div className="flex justify-evenly flex-col sm:flex-row space-y-4 sm:space-y-0">
        <a
          href="tel:+420775601128"
          className="font-bold text-xl text-center bg-black text-white rounded-md shadow-md py-2 px-6 transform hover:scale-125 ease-in-out duration-200"
        >
          <Mobile className="inline-block mr-4" />
          775 601 128
        </a>
        <button className="font-bold text-xl text-center bg-white text-black border-black border-solid border-2 rounded-md shadow-md py-2 px-6 transform hover:scale-125 ease-in-out duration-200">
          Objednat online
        </button>
      </div>
    </>
  )
}

export default FormComponent
