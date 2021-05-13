import React,{useState} from 'react';
//import React, { useState } from 'react'

const App=()=>{
  const [temperatureValue,setTemperatureValue]=useState(10);
  const [temperatureColor,setTemperatureColor]=useState("cold");

  const increaseTemperature=()=>{
    const newTemp=temperatureValue+1;
    if(newTemp>=45){
      setTemperatureColor('hot');
    }
    setTemperatureValue(newTemp);
  }

  const decreaseTemperature=()=>{
    const newTemp=temperatureValue-1;
    if(newTemp < 45){
      setTemperatureColor('cold');
    }
    setTemperatureValue(newTemp);
  }
  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>{temperatureValue}° C </div>
      </div>
      <div className="button-container">
        <button onClick={()=>increaseTemperature()}>+</button>
        <button onClick={()=>decreaseTemperature()}>-</button>
      </div>
    </div>
  )
}

export default App;