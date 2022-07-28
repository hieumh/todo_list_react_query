import { ErrorInfo, ReactNode } from "react";

interface ErrorBoundaryProps {
  children?: ReactNode
}

interface State {
  hasError: boolean
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, State> {
  public state: State = {
    hasError: false,
  }

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return <div>Some thing went wrong.</div>
    }
    return this.props.children
  }
}

export default ErrorBoundary;