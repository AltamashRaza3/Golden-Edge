import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Application Error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center text-center px-6">
          <div>
            <h1 className="text-4xl font-bold mb-4">Something went wrong</h1>
            <p className="text-gray-600 mb-6">
              Please refresh the page or contact support.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-yellow-500 px-6 py-3 rounded font-semibold"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
