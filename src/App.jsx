import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/header"; 
import Landing from "./components/landing/landing";
import Properties from "./components/properties/properties";
import Banner from "./components/banner";
import About from "./components/about/About";

function App() {
  return (
    <BrowserRouter>
      <Banner/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/properties" element={<Properties />} />
        {/* <Route path="/services" element={<Services />} /> */}
      </Routes>

    </BrowserRouter>
  );
}

export default App;
