import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Button from "./button"
import Text from "./text"

export default function Instagram() {
  return (
    <div className="m-auto flex w-4/5 flex-col justify-around rounded-md bg-gray-50 py-12 lg:flex-row">
      <div className="m-auto  py-8 lg:py-48">
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
          variant="outline"
          as="a"
          size="s"
          href={"https://instagram.com/artaufeminin"}
          alt={`ART au feminin sur Instagram`}
        >
          @artaufeminin sur Instagram
        </Button>
      </div>
      <div className="md:show m-auto hidden w-full flex-col justify-center  md:flex md:flex-row lg:w-3/5 lg:justify-around">
        <div className="flex w-1/3 flex-col md:w-1/4">
          <a
            href="https://www.instagram.com/p/CXn2XbyoTmT/"
            target={`_blank`}
            className="m-auto my-4 lg:bg-gray-100 "
          >
            <StaticImage
              src="../images/instagram/1.jpg"
              alt="Logo podcast ART au feminin"
              className="m-0 my-2 p-0 md:p-20 lg:m-8 "
            />
          </a>
          <a
            href="https://www.instagram.com/p/CXn1qGQoqxx/"
            target={"_blank"}
            className="m-auto my-4 lg:bg-gray-100 "
          >
            <StaticImage
              src="../images/instagram/2.jpg"
              alt="Logo podcast ART au feminin"
              className="m-0 my-2 p-0 md:p-20 lg:m-8"
            />
          </a>

          <a
            href="https://www.instagram.com/p/CXnzlQ0IK8N/"
            target={"_blank"}
            className="m-auto my-4 lg:bg-gray-100 "
          >
            <StaticImage
              src="../images/instagram/3.jpg"
              alt="Logo podcast ART au feminin"
              className="m-0 my-2 p-0 md:p-20 lg:m-8"
            />
          </a>
        </div>
        <div className="flex w-1/3 flex-col justify-center md:w-1/4">
          <a
            href="https://www.instagram.com/p/CNRxx8QIXJ5/"
            target={"_blank"}
            className="m-auto my-4 lg:bg-gray-100 "
          >
            <StaticImage
              src="../images/instagram/4.jpg"
              alt="Logo podcast ART au feminin"
              className="m-0 my-2 p-0 md:p-20 lg:m-8"
            />
          </a>

          <a
            href="https://www.instagram.com/p/CNRxx8QIXJ5/"
            target={"_blank"}
            className="m-auto my-4 lg:bg-gray-100 "
          >
            <StaticImage
              src="../images/instagram/5.jpg"
              alt="Logo podcast ART au feminin"
              className="m-0 my-2 p-0 md:p-20 lg:m-8"
            />
          </a>
        </div>
        <div className="flex w-1/3 flex-col md:w-1/4">
          <a
            href="https://www.instagram.com/p/Cay36_bgT3k/"
            target={"_blank"}
            className="m-auto my-4 lg:bg-gray-100 "
          >
            <StaticImage
              src="../images/instagram/6.jpg"
              alt="Logo podcast ART au feminin"
              className="m-0 my-2 p-0 md:p-20 lg:m-8"
            />
          </a>
          <a
            href="https://www.instagram.com/p/Cay17dkAKME/"
            target={"_blank"}
            className="m-auto my-4 lg:bg-gray-100 "
          >
            <StaticImage
              src="../images/instagram/7.jpg"
              alt="Logo podcast ART au feminin"
              className="m-0 my-2 p-0 md:p-20 lg:m-8"
            />
          </a>
          <a
            href="https://www.instagram.com/p/Cay14ynA6Gr/"
            target={"_blank"}
            className="m-auto my-4 lg:bg-gray-100 "
          >
            <StaticImage
              src="../images/instagram/8.jpg"
              alt="Logo podcast ART au feminin"
              className="m-0 my-2 p-0 md:p-20 lg:m-8"
            />
          </a>
        </div>
      </div>
    </div>
  )
}
