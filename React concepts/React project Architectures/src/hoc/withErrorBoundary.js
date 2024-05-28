import React from 'react'

const withErrorBoundary = (WrappedComponent) => class extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  componentDidCatch(error) {
    // eslint-disable-next-line no-console
    console.error(error)
    this.setState({ hasError: true })
  }

  render() {
    const { hasError } = this.state
    if (typeof window === 'undefined') return <div />

    if (hasError) {
      return <h1>Something went wrong, please try again</h1>
    }

    return <WrappedComponent {...this.props} />
  }
}

export default withErrorBoundary
