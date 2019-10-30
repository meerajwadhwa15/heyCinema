import React, { FunctionComponent, ReactNode } from 'react'
import { Link } from 'react-router-dom'

export type Props = {
  url: string
  children: ReactNode
  title?: string
}

const Anchor: FunctionComponent<Props> = ({ url, children, title }) => (
  <Link to={url} title={title}>
    {children}
  </Link>
)

export default Anchor
