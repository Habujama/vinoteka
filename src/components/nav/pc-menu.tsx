import React, { FC } from 'react'
import classNames from 'classnames'

import Wrapper from '../shared/wrapper'
import Logo from '../../assets/svg/vino.svg'

interface Props {
  className?: string
}

const PcMenu: FC<Props> = ({ className }) => {
  const button = classNames(
    'hover:scale-110 transform focus:outline-none w-full md:w-56 rounded-md duration-200',
    classNames
  )
  return (
    <div className={className}>
      <Wrapper>
        <div className="flex flex-col space-y-4 items-center md:space-y-0 md:flex-row justify-between w-full mx-auto py-4 px-8 max-w-screen-xl outline-white font-lovers text-lg sm:text-4xl md:text-5xl">
          <button className={button}>Rozvoz</button>
          <button className={button}>Vína</button>
          <button aria-label="Vinotéka U Jana Amose">
            <Logo className="focus:outline-none h-24 ml-2 mr-4 duration-200 hover:scale-110 transform" />
          </button>
          <button className={button}>Destiláty</button>
          <button className={button}>Kontakt</button>
        </div>
      </Wrapper>
    </div>
  )
}

export default PcMenu
