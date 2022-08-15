import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import About from "./About";
import Clients from "./Clients";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Services from "./Services";

function App() {
  return (
    <div className="">
      <Header></Header>
      <Home></Home>
      <Services></Services>
      <Clients></Clients>
      <About></About>
    </div>
  );
}

export default App;
