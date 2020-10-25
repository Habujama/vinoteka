import React, { FC } from 'react'

interface Props {
  title: string
  message: string
}

const News: FC<Props> = ({ title, message }) => {
  return (
    <div className="bg-white border-2 border-solid shadow-md border-black p-10 md:w-1/2 relative transform -translate-y-20 mx-auto">
      <h2 className="font-lovers text-3xl font-bold">{title}</h2>
      <p>{message}</p>
    </div>
  )
}

export default News
