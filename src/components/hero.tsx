import { Link } from "gatsby"
import React from "react"

import Button from "./button"
import HeroCard from "./heroCard"

type HeroProps = {
  allEpisodes: any
}

export function Hero({ allEpisodes }: HeroProps) {
  return (
    <div className="h-screen my-auto -mb-32 md:-mb-48 w-3/4 m-auto">
      <div className="flex-col md:flex md:flex-row gap-4 h-2/3 overflow-hidden">
        <HeroCard
          heroLink={`/podcasts/${allEpisodes[0].guid}`}
          imageUrl={allEpisodes[0].itunes.image}
          heroTitle={allEpisodes[0].title}
          size={"lg"}
        />
        <div className="flex-1 flex flex-col gap-4 overflow-hidden">
          <HeroCard
            heroLink={`/podcasts/${allEpisodes[1].guid}`}
            imageUrl={allEpisodes[1].itunes.image}
            heroTitle={allEpisodes[1].title}
            size={"md"}
          />
          <HeroCard
            heroLink={`/podcasts/${allEpisodes[2].guid}`}
            imageUrl={allEpisodes[2].itunes.image}
            heroTitle={allEpisodes[2].title}
            size={"md"}
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
