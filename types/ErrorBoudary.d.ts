import React from 'react';
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
