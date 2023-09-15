import { StaticImage } from "gatsby-plugin-image"
import React from "react"

import Text from "./text"

function Author() {
  return (
    <section className="my-12 flex items-center p-8">
      <div className="flex-4 bg-white p-4">
        <StaticImage
          src="../images/profile-picture.jpg"
          alt={"Aldjia ART au féminin le podcast"}
          width={256}
          height={256}
        />
      </div>
      <div className="flex-8 ml-4">
        <Text as="p" variant={"p"} className="mt-2 font-merri font-semibold">
          Bonjour je suis Aldjia créatrice et animatrice de ce podcast. Je suis
          également l'autrice de ce blog, ravie de vous rencontrer !
        </Text>
      </div>
    </section>
  )
}

export default Author
