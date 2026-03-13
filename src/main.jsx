import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HelmetProvider } from "react-helmet-async";
import ErrorBoundary from './components/ErrorBoundary.jsx';

createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <ErrorBoundary>
     <App />
    </ErrorBoundary>
  </HelmetProvider>,
);
