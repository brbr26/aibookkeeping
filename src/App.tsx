import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import { ScrollToTop } from "./ScrollToTop";
import { Loader2 } from "lucide-react";
import { routes } from "./routes";
import { HelmetProvider } from 'react-helmet-async';

const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <Loader2 className="h-8 w-8 animate-spin text-primary" />
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          {routes.map(({ path, element: Element }) => (
            <Route
              key={path}
              path={path}
              element={
                <Suspense fallback={<LoadingSpinner />}>
                  <Element />
                </Suspense>
              }
            />
          ))}
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;