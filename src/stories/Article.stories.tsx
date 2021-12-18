import React, { useState } from "react"
import Quote from "../components/quote"

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Article",
}

export const Article = () => {
  return (
    <div>
      <p>
        <span className="blockquote">
          <strong>
            "Mes concepts naissent plus ou moins d'un contexte personnel et sont
            ensuite gonflés hors de proportion, rétrécis, déformés ou
            désintégrés à partir desquels les significations et interprétations
            possibles sont déplacées... Je crois personnellement que nous sommes
            des êtres spirituels et qu'il n'existe pas de distinction stricte et
            rapide entre le monde spirituel et physique (ou matériel) et une vie
            orientée vers un être intérieur.&nbsp;» -Stacey Gillian Abe.
          </strong>
        </span>
      </p>
      <Quote />
    </div>
  )
}
