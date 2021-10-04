import React, { FC } from 'react'

interface Props {
  title: string
  message: string
}

const News: FC<Props> = ({ title, message }) => {
  return (
    <div className="bg-white rounded-md shadow-md p-10 md:w-1/2 relative transform -translate-y-20 text-center mx-auto leading-2 mt-20 md:mt-0">
      <h2 className="font-lovers text-4xl font-bold leading-tight mb-2">
        {title}
      </h2>
      <p>{message}</p>
      <p className="pt-2">
        Těšíme se na vás v&nbsp;Městském centru Grand, v&nbsp;sobotu{' '}
        <strong>27.&nbsp;11.&nbsp;od&nbsp;12&nbsp;do&nbsp;18&nbsp;hodin</strong>
        .
      </p>
    </div>
  )
}

export default News
