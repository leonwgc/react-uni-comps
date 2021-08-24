/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
/**
 * 错误边界
 *
 * @export
 * @class ErrorBoundary
 * @extends {React.Component}
 */
export default class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return null;
    }

    return this.props.children;
  }
}
