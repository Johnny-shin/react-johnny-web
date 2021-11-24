import React from "react";
import "./App.css";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Portfolio from "./Components/Portfolio";
import Resume from "./Components/Resume";
import data from "./resumeData.json";

export default function App() {
  return (
    <div className="App">
      <Header data={data.main} />
      <About data={data.main} />
      <Resume data={data.resume} />
      <Portfolio data={data.portfolio} />
      <Footer data={data.main} />
    </div>
  );
}
