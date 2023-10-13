import React, { useState, useEffect } from "react";
import "./App.css";

function Hero(props) {
  if (props.data) {
    throw new Error("somthing went wrong");
  }

  return (
    <div className="App">
      <h1>{props.data}</h1>
    </div>
  );
}

export default Hero;
