import React from "react";
import ReactDOM from "react-dom";
import PortfolioGrid from "./components/PortfolioGrid";
import Navbar from "./components/Navbar";

import "./styles.css";

function App() {
  return (
    <div className="container">
      <Navbar />
      <PortfolioGrid />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
