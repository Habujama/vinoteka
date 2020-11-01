import React, { FC } from 'react'
import classNames from 'classnames'

enum Sizes {
  MEDIUM = 'medium',
  SMALL = 'small',
}

type Size = 'medium' | 'small'

interface Props {
  size?: Size
  className?: string | undefined
}

const Wrapper: FC<Props> = ({ children, size = 'medium', className }) => {
  const css = classNames('sm:mx-6 xl:mx-auto max-w-screen-xl', className, {
    'xl:px-32': Sizes.MEDIUM === size,
    'xl:px-48': Sizes.SMALL === size,
  })
  return <div className={css}>{children}</div>
}

export default Wrapper
