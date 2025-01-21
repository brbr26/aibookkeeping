import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { ScrollToTop } from "./ScrollToTop";
import { Loader2 } from "lucide-react";

// Import Index page directly to avoid dynamic import issues
import Index from "./pages/Index";

// Lazy load other pages
const Services = lazy(() => import("./pages/Services"));
const Login = lazy(() => import("./pages/Login"));
const Industries = lazy(() => import("./pages/Industries"));
const Ecommerce = lazy(() => import("./pages/Ecommerce"));
const LawFirms = lazy(() => import("./pages/LawFirms"));
const Healthcare = lazy(() => import("./pages/Healthcare"));
const Construction = lazy(() => import("./pages/Construction"));
const Contact = lazy(() => import("./pages/Contact"));

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <Loader2 className="h-8 w-8 animate-spin text-primary" />
  </div>
);

// Error boundary component
const ErrorFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <h2 className="text-xl font-semibold mb-2">Oops! Something went wrong</h2>
      <p>Please refresh the page to try again.</p>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          {/* Home page - directly imported */}
          <Route path="/" element={<Index />} />

          {/* Other pages - lazy loaded */}
          <Route path="/services" element={
            <Suspense fallback={<LoadingSpinner />}>
              <Services />
            </Suspense>
          } />
          <Route path="/login" element={
            <Suspense fallback={<LoadingSpinner />}>
              <Login />
            </Suspense>
          } />
          <Route path="/industries" element={
            <Suspense fallback={<LoadingSpinner />}>
              <Industries />
            </Suspense>
          } />
          <Route path="/contact" element={
            <Suspense fallback={<LoadingSpinner />}>
              <Contact />
            </Suspense>
          } />
          <Route path="/ecommerce" element={
            <Suspense fallback={<LoadingSpinner />}>
              <Ecommerce />
            </Suspense>
          } />
          <Route path="/law-firms" element={
            <Suspense fallback={<LoadingSpinner />}>
              <LawFirms />
            </Suspense>
          } />
          <Route path="/healthcare" element={
            <Suspense fallback={<LoadingSpinner />}>
              <Healthcare />
            </Suspense>
          } />
          <Route path="/construction" element={
            <Suspense fallback={<LoadingSpinner />}>
              <Construction />
            </Suspense>
          } />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;