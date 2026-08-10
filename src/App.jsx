import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Stats from "./components/Stats";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import SmartBanking from "./pages/SmartBanking";
import BlockchainHealthcare from "./pages/BlockchainHealthcare";
import Jarvis from "./pages/Jarvis";
import Portfolio from "./pages/Portfolio";

import ScrollToTop from "./components/ScrollToTop";


function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Stats />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </>
  );
}


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> 

      <Routes>

        {/* =========================
            HOME
        ========================= */}

        <Route
          path="/"
          element={<Home />}
        />


        {/* =========================
            PROJECT 01
        ========================= */}

        <Route
          path="/projects/smart-banking"
          element={<SmartBanking />}
        />


        {/* =========================
            PROJECT 02
        ========================= */}

        <Route
          path="/projects/blockchain-healthcare"
          element={<BlockchainHealthcare />}
        />


        {/* =========================
            PROJECT 03
        ========================= */}

        <Route
          path="/projects/jarvis-ai"
          element={<Jarvis />}
        />


        {/* =========================
            PROJECT 04
        ========================= */}

        <Route
          path="/projects/personal-portfolio"
          element={<Portfolio />}
        />

      </Routes>

    </BrowserRouter>
  );
}


export default App;