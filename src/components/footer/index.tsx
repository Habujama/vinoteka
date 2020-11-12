import React, { FC } from 'react'

import Wrapper from '../shared/wrapper'

import Facebook from '../../assets/svg/facebook.svg'

const Footer: FC = () => {
  const today = new Date()
  const currentYear = today.getFullYear()
  return (
    <div className="bg-black shadow-md text-white pt-6 pb-8 w-full bottom-0 h-card">
      <Wrapper>
        <div
          className="grid sm:grid-cols-4 sm:grid-rows-1 grid-rows-4 grid-cols-1 space-x-0 sm:space-x-8 space-y-4 sm:space-y-0 px-4 sm:px-0 leading-7"
          id="kontakt"
        >
          <dl className="sm:col-start-1 col-span-1 row-start-3 sm:row-start-1">
            <dt className="font-medium p-name">
              Vino Bohemia spol.&nbsp;s&nbsp;r.&nbsp;o.
            </dt>
            <dd className="p-street-address">Komenského náměstí 690</dd>
            <dd className="p-locality">Slaný 274&nbsp;01</dd>
            <dd className="p-uid">IČO: 27119246</dd>
          </dl>
          <dl className="sm:col-start-2 col-span-1 row-start-1 sm:row-start-1 self-center">
            <dt className="font-medium">Martin Matoušek</dt>
            <dd>jednatel</dd>
            <dd>
              <a href="tel:775601128" className="underline hover:no-underline">
                +420 775 601 128
              </a>
            </dd>
            <dd>
              <a
                href="mailto:info@vinobohemia.com"
                className="underline hover:no-underline"
              >
                info@vinobohemia.com
              </a>
            </dd>
          </dl>
          <dl className="sm:col-start-3 col-span-1 row-start-2 sm:row-start-1 self-center">
            <dt className="font-medium">Václav Matoušek</dt>
            <dd>vedoucí vinotéky</dd>
            <dd>
              <a href="tel:775601129" className="underline hover:no-underline">
                +420 775 601 129
              </a>
            </dd>
          </dl>
          <dl className="sm:col-start-4 col-span-1 row-start-4 sm:row-start-1 text-sm self-center">
            <dt>
              <a
                href="https://www.facebook.com/Vinot%C3%A9ka-U-Jana-Amose-205969899476879"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-8 m-4 self-center transform hover:scale-125 ease-in-out duration-200" />
              </a>
            </dt>
            <dt>
              ©&nbsp;{currentYear}{' '}
              Vino&nbsp;Bohemia&nbsp;spol.&nbsp;s&nbsp;r.&nbsp;o.
            </dt>
          </dl>
        </div>
      </Wrapper>
    </div>
  )
}

export default Footer
