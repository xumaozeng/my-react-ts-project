/**
 * 错误边界组件
 */
import { Component, ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}
interface ErrorBoundaryState {
  hasError: boolean;
}
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: Readonly<ErrorBoundaryState> = {
    hasError: false
  };

  static getDerivedStateFromError() {
    return {
      hasError: true
    };
  }

  render(): ReactNode {
    const { hasError } = this.state;
    if (hasError) {
      return <h3>抱歉，出错了！</h3>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
