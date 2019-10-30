import React, { FunctionComponent, ReactNode } from 'react'
import './style.css'

export type Props = {
  children: ReactNode
}

const Layout: FunctionComponent<Props> = ({ children }) => (
  <div className="container">{children}</div>
)

export default Layout
