import React, { FunctionComponent, ReactNode } from 'react'

export type Props = {
  children: ReactNode
}

const ErrorMessage: FunctionComponent<Props> = ({ children }) => (
  <div>{children}</div>
)

export default ErrorMessage
