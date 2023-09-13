import { Link } from "gatsby"
import React from "react"

import Button from "./button"
import HeroCard from "./heroCard"
import Text from "./text"

type Props = {
  allEpisodes: any
}

export default function Hero({ allEpisodes }: Props) {
  const textStyle =
    "text-white bg-black items-end flex  mb-6 mx-auto p-2 w-5/6 text-left"
  const imgStyle =
    "bg-cover bg-center h-full ease-in-out transition-all duration-300 flex items-end bg-no-repeat hover:scale-105 overflow-hidden "
  return (
    <div className="h-screen my-auto -mb-32 md:-mb-48 w-3/4 m-auto">
      <div className="flex-col md:flex md:flex-row gap-4 h-2/3 overflow-hidden">
        <HeroCard
          heroLink={`/podcast/${allEpisodes[0].guid}`}
          imageUrl={allEpisodes[0].itunes.image}
          heroTitle={allEpisodes[0].title}
          size={"lg"}
          text={"primary"}
          image={"primary"}
        />
        <div className="flex-1 flex flex-col gap-4 overflow-hidden">
          <HeroCard
            heroLink={`/podcast/${allEpisodes[1].guid}`}
            imageUrl={allEpisodes[1].itunes.image}
            heroTitle={allEpisodes[1].title}
            size={"md"}
            text={"primary"}
            image={"primary"}
          />
          <HeroCard
            heroLink={`/podcast/${allEpisodes[2].guid}`}
            imageUrl={allEpisodes[2].itunes.image}
            heroTitle={allEpisodes[2].title}
            size={"md"}
            text={"primary"}
            image={"primary"}
          />
        </div>
      </div>
      <div className=" mt-12 md:mt-8 justify-end flex">
        <Link to={"/podcasts"}>
          <Button variant="outline" size="s">
            Écouter tous les épisodes
          </Button>
        </Link>
      </div>
    </div>
  )
}
