import { useState } from "react";
import "./App.css";
import { Letters } from "./assets/components/Letters";
import fondo from "../src/assets/img/fondo.jpg";

function App() {
  return (
    <div className="global__letters__container">
      <div className="position__background">
        <img className="background" src={fondo} alt={fondo} />
      </div>
      <Letters />
    </div>
  );
}

export default App;
