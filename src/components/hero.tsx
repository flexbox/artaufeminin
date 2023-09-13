import { Link } from "gatsby"
import React from "react"

import Button from "./button"
import Text from "./text"

type Props = {
  allEpisodes: any
}

export default function Hero({ allEpisodes }: Props) {
  const textStyle =
    "text-white bg-black items-end flex justify-end p-2 my-2 mx-auto"
  const imgStyle =
    "bg-cover bg-center h-full ease-in-out transition-all duration-300 hover:opacity-95 flex items-end hover:scale-95"
  return (
    <div className="h-screen my-auto -mb-32 md:-mb-48 w-3/4 m-auto">
      <div className="flex-col md:flex md:flex-row gap-4 h-2/3">
        <div className="flex-1 mb-4 md:mb-0 h-52 md:h-full">
          <Link to={`/podcast/${allEpisodes[0].guid}`}>
            <div
              className={imgStyle}
              style={{
                backgroundImage: `url(${allEpisodes[0].itunes.image})`,
              }}
            >
              <Text as="h3" className={textStyle}>
                {allEpisodes[0].title}
              </Text>
            </div>
          </Link>
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <div className="bg-cover bg-center h-52 md:h-1/2 ">
            <Link to={`/podcast/${allEpisodes[1].guid}`}>
              <div
                className={imgStyle}
                style={{
                  backgroundImage: `url(${allEpisodes[1].itunes.image})`,
                }}
              >
                <Text as="h3" className={textStyle}>
                  {allEpisodes[1].title}
                </Text>
              </div>
            </Link>
          </div>

          <div className="bg-cover bg-center h-52 md:h-1/2">
            <Link to={`/podcast/${allEpisodes[2].guid}`}>
              <div
                className={imgStyle}
                style={{
                  backgroundImage: `url(${allEpisodes[2].itunes.image})`,
                }}
              >
                <Text as="h3" className={textStyle}>
                  {allEpisodes[2].title}
                </Text>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className=" mt-28 md:mt-8 justify-end flex">
        <Link to={"/podcasts"}>
          <Button variant="outline" size="s">
            Écouter tous les épisodes
          </Button>
        </Link>
      </div>
    </div>
  )
}
