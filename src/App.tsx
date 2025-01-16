import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Rename these imports to something clearer if you want
import Index from "./pages/Index";
import Services from "./pages/Services";
import Login from "./pages/Login";
import Industries from "./pages/Industries";
import Ecommerce from "./pages/Ecommerce";
import LawFirms from "./pages/LawFirms";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home page */}
        <Route path="/" element={<Index />} />

        {/* Other pages */}
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/industries" element={<Industries />} />

        {/* Make sure these match your IndustryCard "to" or "href" props */}
        <Route path="/ecommerce" element={<Ecommerce />} />
        <Route path="/law-firms" element={<LawFirms />} />
      </Routes>
    </Router>
  );
}

export default App;
