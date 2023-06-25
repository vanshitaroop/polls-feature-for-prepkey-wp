import React from 'react';
import { useState } from "react"
import "./App.css"
import Box from './Box.jsx';
export default function App() {

  return (
    < >
      <div style={{ backgroundColor: "#212D32", margin: "5px", width: "300px", height: "300px" }}>
        <div style={{ padding: "5px" }} >
          <div style={{ color: "white",padding:"8px" }}>
           <h2> What is your age??</h2>
          </div>
          
          <Box option={"opt1"} />
          <Box option={"opt2"} />
          <Box option={"opt3"} />
        </div>
      </div>
    </>
  );
}
