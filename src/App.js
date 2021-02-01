// Dependencies
import React from "react";
import "./style.css";
// Styles
import "./tailwind.output.css";
import Projects from "./projects";
import About from "./about";
import Social from "./social";
import Header from "./header/header";

const App = () => {
  return (
    <div className="min-h-screen relative flex flex-col relative bg-dark-gray text-dark-gray roboto">
      <Header />
      <div className="flex flex-wrap lg:w-3/5 w-11/12 self-center">
        <About />
        <Projects />
        <Social />
      </div>
    </div>
  );
};

export default App;
