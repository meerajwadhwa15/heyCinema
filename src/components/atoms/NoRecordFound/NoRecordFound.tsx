import React, { FunctionComponent, ReactNode } from 'react'

export type Props = {
  children: ReactNode
}

const NoRecordFound: FunctionComponent<Props> = ({ children }) => (
  <div>{children}</div>
)

export default NoRecordFound
