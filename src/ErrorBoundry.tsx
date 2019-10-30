import React, { Component, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

type StateProps = {
  hasError: boolean
}

class ErrorBoundary extends Component<Props, StateProps> {
  state = { hasError: false }

  componentDidCatch() {
    this.setState({ hasError: true })
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>
    }
    return this.props.children
  }
}

export default ErrorBoundary
