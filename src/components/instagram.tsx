import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Button from "./button"
import Text from "./text"

export default function Instagram() {
  return (
    <div className="m-auto flex w-4/5 justify-around rounded-md bg-gray-50  py-12">
      <div className="  py-48">
        <StaticImage
          src="../images/instagram/logoInstagram.png"
          alt="Logo podcast ART au feminin"
          className="mb-6 h-24 w-24 "
        />
        <Text as="h2" className="mb-4 font-bold">
          La découverte continue
        </Text>
        <Text as="h2" className="mb-8">
          sur Instagram
        </Text>
        <Button
          variant="solid"
          as="a"
          size="s"
          href={"https://instagram.com/artaufeminin"}
          alt={`ART au feminin sur Instagram`}
        >
          Art au féminin sur Instagram
        </Button>
      </div>
      <div className="flex w-3/5 justify-around ">
        <div className="flex w-1/4 flex-col">
          <div className="m-auto my-4 bg-gray-100 ">
            <StaticImage
              src="../images/instagram/1.jpg"
              alt="Logo podcast ART au feminin"
              className="m-8 p-20"
            />
          </div>
          <div className="m-auto my-4 bg-gray-100 ">
            <StaticImage
              src="../images/instagram/2.jpg"
              alt="Logo podcast ART au feminin"
              className="m-8 p-20"
            />
          </div>
          <div className="m-auto my-4 bg-gray-100 ">
            <StaticImage
              src="../images/instagram/3.jpg"
              alt="Logo podcast ART au feminin"
              className="m-8 p-20"
            />
          </div>
        </div>
        <div className="flex w-1/4 flex-col justify-center">
          <div className="m-auto my-4 bg-gray-100 ">
            <StaticImage
              src="../images/instagram/4.jpg"
              alt="Logo podcast ART au feminin"
              className="m-8 p-20"
            />
          </div>
          <div className="m-auto my-4 bg-gray-100 ">
            <StaticImage
              src="../images/instagram/5.jpg"
              alt="Logo podcast ART au feminin"
              className="m-8 p-20"
            />
          </div>
        </div>
        <div className="flex w-1/4 flex-col">
          <div className="m-auto my-4 bg-gray-100 ">
            <StaticImage
              src="../images/instagram/6.jpg"
              alt="Logo podcast ART au feminin"
              className="m-8 p-20"
            />
          </div>
          <div className="m-auto my-4 bg-gray-100 ">
            <StaticImage
              src="../images/instagram/7.jpg"
              alt="Logo podcast ART au feminin"
              className="m-8 p-20"
            />
          </div>
          <div className="m-auto my-4 bg-gray-100 ">
            <StaticImage
              src="../images/instagram/8.jpg"
              alt="Logo podcast ART au feminin"
              className="m-8 p-20"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
