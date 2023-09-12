import React from "react"

type Props = {
  img1: any
}

export default function Hero({ img1 }: Props) {
  return (
    <div className="flex w-3/4 m-auto">
      <div className="m-auto h-12 w-12 bg-red-50">
        <div
          className="img duration-300 ease-in-out m-auto bg-cover bg-center"
          style={{ backgroundImage: `url(${img1})` }}
        ></div>
        hero 1
      </div>
      <div className="w-1/3 flex flex-col">
        <div
          className="img duration-300 ease-in-out m-auto bg-cover bg-center"
          style={{ backgroundImage: `url(${img1})` }}
        ></div>
        <div>2</div>
      </div>
    </div>
  )
}
