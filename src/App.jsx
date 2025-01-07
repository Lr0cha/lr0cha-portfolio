import React from "react";
import Navbar from "./components/Navbar";
import Head from "./components/Head";
import Technologies from "./components/Technologies";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
const App = () => {
  return (
    <div className=" text-neutral-300 antialiased selection: bg-cyan-3000 selection:text-cyan-900 min-h-screen">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div
          className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-
      [radial-gradient(ellipse_80%_80%_at_50%_-20%,regba(120,119,198,0.3),rgba(255,
      255,255,0))]"
        ></div>
      </div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Head />
        <Technologies />
        <Education />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;
