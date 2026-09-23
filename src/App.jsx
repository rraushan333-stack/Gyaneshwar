// import { BrowserRouter } from "react-router-dom";

// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Programs from "./components/Programs";
// import Testimonials from "./components/Testimonials";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";

// function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />

//       <Hero />

//       <About />

//       <Programs />

//       <Testimonials />

//       <Contact />

//       <Footer />
//     </BrowserRouter>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Hero from "./components/Hero";
import About from "./components/About";
import Programs from "./components/Programs";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import MandatoryDisclosure from "./components/MandatoryDisclosure";

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Programs />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      {/* Navbar common rahega */}
      <Navbar />

      <Routes>
        {/* =========================
            HOME PAGE
        ========================= */}
        <Route path="/" element={<HomePage />} />

        {/* =========================
            MANDATORY DISCLOSURE
        ========================= */}
        <Route path="/mandatory-disclosure" element={<MandatoryDisclosure />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
