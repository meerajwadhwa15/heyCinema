import React, { FunctionComponent } from 'react'
import './style.css'

export type Props = {}

const Loader: FunctionComponent<Props> = (props) => (
  <div className="loader">Loading...</div>
)

export default Loader
