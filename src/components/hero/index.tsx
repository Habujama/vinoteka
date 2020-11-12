import React, { FC } from 'react'

import HeroImg from '../../assets/svg/hero.svg'

const Hero: FC = () => (
  <div className="mt-12 sm:pt-8 shadow-sm" id="vinoteka">
    <HeroImg className="hidden sm:block max-w-70 mx-auto" />
  </div>
)

export default Hero
