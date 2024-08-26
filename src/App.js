import { Routes, Route } from "react-router-dom";
import React from "react";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import "./styles.css";
import "./pages/Home.css";
import "./pages/About.css";
import "./pages/Services.css";
import "./pages/Contact.css";
import "./pages/Footer.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
