import "./assets/css/style.css";
import "./assets/css/responsive.css";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Services from "./components/Services";
import Team from "./components/Team";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import { Route, Routes, BrowserRouter } from "react-router-dom";
const headerimage = require('./assets/images/hero-bg.jpg')

function App() {
  return (
    <>
      <div className="hero_area">
        <div class="hero_bg_box">
          <img src={headerimage} alt="" />
        </div>
        <BrowserRouter>
          <Header />
          <div>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contact" element={<ContactUs />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
