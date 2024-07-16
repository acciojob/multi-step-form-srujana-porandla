import React, { useState } from "react";
import './../styles/App.css';
import Step from "./Step";
const App = () => {
  const [currentstep,setcurrentstep]=useState(['','hide','hide']);
  return (
    <div>
      <Step currentstep={currentstep} setcurrentstep={setcurrentstep} />
  
    </div>
  )
}
export default App