import React, { FC, useState, useRef } from 'react'
import classNames from 'classnames'

import useClickOutside from '../../hooks/use-click-outside'

import Logo from '../../assets/svg/logo.svg'
import Hamburger from '../../assets/svg/hamburger.svg'
import Close from '../../assets/svg/close.svg'

interface Props {
  className?: string
}

const MobileMenu: FC<Props> = ({ className }) => {
  const button = classNames(
    'hover:scale-110 transform focus:outline-none w-full md:w-56 rounded-md duration-200',
    classNames
  )

  const [open, setOpen] = useState(false)
  const clickRef = useRef()
  const toggle = () => setOpen(!open)
  useClickOutside(clickRef, toggle)

  const hamburgerCss = classNames({ hidden: open, block: !open })
  const closeCss = classNames({ block: open, hidden: !open })

  return (
    <div className={`${className} grid grid-cols-3`}>
      <button
        aria-label="Vinotéka U Jana Amose"
        className={`${hamburgerCss} mx-auto col-start-2 col-span-1`}
      >
        <Logo className="h-16 my-2" />
      </button>
      <div className="justify-self-end cursor-pointer col-start-3 col-span-1">
        <Hamburger onClick={toggle} className={`${hamburgerCss} mr-4 mt-8`} />
        <Close onClick={toggle} className={`${closeCss} mr-4 mt-4`} />
      </div>
      {open && (
        <div
          ref={clickRef}
          className="flex flex-col row-start-1 col-start-2 col-span-1 space-y-4 items-center md:space-y-0 md:flex-row justify-between w-full mx-auto py-4 px-8 max-w-screen-xl outline-none font-lovers text-3xl sm:text-4xl md:text-6xl"
        >
          <div className={closeCss}>
            <a href="/#rozvoz">
              <button className={button}>Rozvoz</button>
            </a>
            <a href="/#vina">
              <button className={button}>Vína</button>
            </a>
            <a href="/#destilaty">
              <button className={button}>Destiláty</button>
            </a>
            <a href="/#kontakt">
              <button className={button}>Kontakt</button>
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
export default MobileMenu
