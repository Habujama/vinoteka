import React, { FC } from 'react'

import Facebook from '../../assets/svg/facebook.svg'

const Copyright: FC = () => {
  const today = new Date()
  const currentYear = today.getFullYear()
  return (
    <>
      <dt>
        <a
          href="https://www.facebook.com/Vinot%C3%A9ka-U-Jana-Amose-205969899476879"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook className="w-8 m-4 md:mx-auto transform hover:scale-125 ease-in-out duration-200 justify-self-end" />
        </a>
      </dt>
      <dt>
        ©&nbsp;{currentYear}&nbsp;
        Vino&nbsp;Bohemia&nbsp;spol.&nbsp;s&nbsp;r.&nbsp;o.
      </dt>
    </>
  )
}

export default Copyright
