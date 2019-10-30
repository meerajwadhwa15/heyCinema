import React, { FunctionComponent, ReactNode } from 'react'

export type Props = {
  children: ReactNode
}

const Img: FunctionComponent<Props> = ({ children }) => <h1>{children}</h1>

export default Img
