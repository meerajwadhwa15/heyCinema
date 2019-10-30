import React, { FunctionComponent } from 'react'

export type Props = {
  src: string
  alt: string
  width?: string
  height?: string
}

const Img: FunctionComponent<Props> = (props) => <img {...props} />

export default Img
