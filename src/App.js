import { Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
import Home from "./Home/Home";
import About from "./About/About";
import Gallery from "./Gallery/Gallery";
import Client from "./Our Clients/Client";
import Testimonial from "./Testimonial/Testimonial";
import Footer from "./Footer/Footer";
import Anchors from "./Anchors/Anchor"
import Requirement from "./Your Requirement/Requirement"
import Contact from "./Contact/Contact";

function App() {
  return (
    <div>
    <Header />
    <Routes>
    <Route path="/" element={
                        <>
                            <Home />
                            <About />
                            <Gallery />
                            <Client />
                            <Testimonial />
                            <Footer />
                        </>
                    } />
      <Route path="/anchor" element={<Anchors />} />
      <Route path="/requirement" element={<Requirement />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </div>
  );
}

export default App;
