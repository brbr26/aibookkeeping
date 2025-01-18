import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import { Suspense, lazy } from "react";
import { ScrollToTop } from "./ScrollToTop";
import { Loader2 } from "lucide-react";

// Lazy load pages
const Index = lazy(() => import("./pages/Index"));
const Services = lazy(() => import("./pages/Services"));
const Login = lazy(() => import("./pages/Login"));
const Industries = lazy(() => import("./pages/Industries"));
const Ecommerce = lazy(() => import("./pages/Ecommerce"));
const LawFirms = lazy(() => import("./pages/LawFirms"));
const Contact = lazy(() => import("./pages/Contact"));

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <Loader2 className="h-8 w-8 animate-spin text-primary" />
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          {/* Home page */}
          <Route path="/" element={<Index />} />

          {/* Other pages */}
          <Route path="/services" element={<Services />} />
          <Route path="/login" element={<Login />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
          <Route path="/law-firms" element={<LawFirms />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
