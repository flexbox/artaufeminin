import React, { ReactElement } from "react"
import Subscribe from "./subscribe"
import SubscribeInstagram from "./subscribeInstagram"
import SubscribeTipeee from "./subscribeTipeee"

interface Props {
  withPodcast?: boolean
  children: any
}

export default function LayoutSidebar({
  withPodcast = true,
  children,
}: Props): ReactElement {
  return (
    <div style={{ maxWidth: "80em", margin: "0 auto" }}>
      <div className="lg:grid lg:grid-cols-12 gap-12">
        <div className=" md:col-span-4">
          {withPodcast && <Subscribe />}
          <div className="hidden lg:flex">
            <SubscribeInstagram />
          </div>
          <div className="hidden lg:flex">
            <SubscribeTipeee />
          </div>
        </div>

        <div className="md:col-span-8">{children}</div>
      </div>
    </div>
  )
}
