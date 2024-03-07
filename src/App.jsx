import React from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Eyes from "./components/Eyes";
import Featured from "./components/Featured";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";
import Eyes2 from "./components/Eyes2";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <div className="w-full min-h-screen text-white bg-slate-100">
        <Navbar />
        <LandingPage />
        <Marquee />
        <About />
        <Eyes />
        <Featured />
        <Cards />
        <Eyes2 />
        <Footer />
      </div>
    </>
  );
}

export default App;
