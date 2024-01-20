/* eslint-disable n/handle-callback-err */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/prop-types */
import React, { type ReactNode, type ErrorInfo, Suspense } from 'react'
import { PageError } from 'widgets/PageError/ui/PageError'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

export default class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor (props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError (error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch (error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo)
  }

  render () {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <Suspense fallback="Loading">
            <PageError/>
        </Suspense>
      )
    }

    return this.props.children
  }
}
