import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/header"; 
import Landing from "./components/landing/landing";
import Properties from "./components/properties/properties";
import PropertyDetails from "./components/properties/projectDetails";
import Banner from "./components/banner";
import About from "./components/about/about";
import Footer from "./components/footer/footer";
import Services from "./components/services/services";
import Contact from "./components/contact/contact";

function App() {
  return (
    <BrowserRouter>
      <Banner/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
