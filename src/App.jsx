import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatWeDo from "./pages/WhatWeDo";
import WhoWeAre from "./pages/WhoWeAre";
import KnowledgeBase from "./pages/KnowledgeBase";
import Careers from "./pages/Careers";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "white",
      }}
    >
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/knowledge-base" element={<KnowledgeBase />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

