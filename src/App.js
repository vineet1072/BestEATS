import React from "react";
import "./App.css";
import Category from "./components/Category";
import Food from "./components/Food";
import Hero from "./components/Hero";
import HeadlineCards from "./components/HeadlineCards";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <HeadlineCards />
      <Food />
      <Category />
    </div>
  );
}

export default App;
