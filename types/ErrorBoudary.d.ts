import React from 'react';
/**
 * 错误边界
 *
 * @export
 * @class ErrorBoundary
 * @extends {React.Component}
 */
export default class ErrorBoundary extends React.Component {
    state: {
        hasError: boolean;
        error: any;
    };
    static getDerivedStateFromError(error: any): {
        hasError: boolean;
        error: any;
    };
    render(): React.ReactNode;
}
