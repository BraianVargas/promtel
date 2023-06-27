import React from 'react';
import Navbar from "./components/navbar"
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import "./App.css"

const styles = {
  main: {
    backgroundColor: "var(--color2)",
    color: "white",
  }
}
export default function Root() {
  return (
    <>
      <Navbar/>
      <div id="detail">
        
      </div>
    </>
  );
}