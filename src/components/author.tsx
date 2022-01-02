import React from "react"
import Text from "./text"
import { StaticImage } from "gatsby-plugin-image"

function Author() {
  return (
    <section className="flex p-8 items-center my-12">
      <div className="flex-4 p-4 bg-white">
        <StaticImage
          src="../images/profile-picture.jpg"
          alt={"Aldjia ART au féminin le podcast"}
          width={256}
          height={256}
        />
      </div>
      <div className="flex-8 ml-4">
        <Text as="p" className="mt-2 font-semibold font-merri">
          Bonjour je suis Aldjia créatrice et animatrice de ce podcast. Je suis
          également l'autrice de ce blog, ravie de vous rencontrer !
        </Text>
      </div>
    </section>
  )
}

export default Author
