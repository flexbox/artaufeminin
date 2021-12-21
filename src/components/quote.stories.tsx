import React from "react"
import Quote from "./quote"

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Typography/Quote",
}

export const QuoteStory = () => {
  return (
    <div className="max-w-3xl justify-center m-auto">
      <div className="article-content">
        <p>
          <span className="blockquote">
            Mes concepts naissent plus ou moins d'un contexte personnel et sont
            ensuite gonflés hors de proportion, rétrécis, déformés ou
            désintégrés à partir desquels les significations et interprétations
            possibles sont déplacées... Je crois personnellement que nous sommes
            des êtres spirituels et qu'il n'existe pas de distinction stricte et
            rapide entre le monde spirituel et physique (ou matériel) et une vie
            orientée vers un être intérieur. -Stacey Gillian Abe.
          </span>
        </p>
        <Quote
          quote="Mes concepts naissent plus ou moins d'un contexte personnel et sont
            ensuite gonflés hors de proportion, rétrécis, déformés ou
            désintégrés à partir desquels les significations et interprétations
            possibles sont déplacées... Je crois personnellement que nous sommes
            des êtres spirituels et qu'il n'existe pas de distinction stricte et
            rapide entre le monde spirituel et physique (ou matériel) et une vie
            orientée vers un être intérieur."
        />
      </div>
    </div>
  )
}
