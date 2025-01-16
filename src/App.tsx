import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
        <Route path="/" element={<Index />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/ecommerce" element={<Ecommerce />} />
        <Route path="/law-firms" element={<LawFirms />} />
      </Routes>
    </Router>
  );
}

export default App;