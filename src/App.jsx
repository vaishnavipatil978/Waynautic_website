import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatWeDo from "./pages/WhatWeDo";
import WhoWeAre from "./pages/WhoWeAre";
import CaseStudy from "./pages/CaseStudy";
import Careers from "./pages/Careers";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import CaseStudies from "./pages/CaseStudies";
import AutoAnalysis from "./pages/AutoAnalysis";
import MobileAppProfiling from "./pages/MobileAppProfiling";
import CustomeSolution from "./pages/CustomeSolution"

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
          <Route path="/CaseStudy" element={<CaseStudy />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/case-study/:id" element={<CaseStudies />} />
          <Route path="/case-study/autoanalysis" element={<AutoAnalysis />} />
          <Route path="/case-study/mobileappprofiling" element={<MobileAppProfiling />} />
          <Route path="/case-study/customesolution" element={<CustomeSolution />} />

        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

