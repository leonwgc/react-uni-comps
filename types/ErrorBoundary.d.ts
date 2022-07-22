import React from 'react';
declare type Props = {
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
    state: {
        hasError: boolean;
        error: any;
    };
    static getDerivedStateFromError(error: any): {
        hasError: boolean;
        error: any;
    };
    componentDidCatch(error: any, info: any): void;
    render(): any;
}
export {};
