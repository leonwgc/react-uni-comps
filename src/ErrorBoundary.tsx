import React from 'react';

type Props = {
  /** 错误回调 */
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
  /** 发生错误显示的ui */
  fallback?: React.ReactNode;
  children?: any;
};

/**
 * 错误边界
 *
 * @export
 * @class ErrorBoundary
 * @extends {React.Component}
 */
export default class ErrorBoundary extends React.Component<Props, any> {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    this.props.onError?.(error, info);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || null;
    }

    return this.props.children;
  }
}
