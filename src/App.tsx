import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./ScrollToTop";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Login from "./pages/Login";
import Industries from "./pages/Industries";
import Ecommerce from "./pages/Ecommerce";
import LawFirms from "./pages/LawFirms";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      {/* Scroll restoration helper */}
      <ScrollToTop />
      <Routes>
        {/* Home page */}
        <Route path="/" element={<Index />} />

        {/* Other pages */}
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/contact" element={<Contact />} />

        {/* Make sure these match your IndustryCard "to" or "href" props */}
        <Route path="/ecommerce" element={<Ecommerce />} />
        <Route path="/law-firms" element={<LawFirms />} />
      </Routes>
    </Router>
  );
}

export default App;