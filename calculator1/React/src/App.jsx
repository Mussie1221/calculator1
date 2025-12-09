import React, { useState } from "react";
import "./App.css";

export default function App(){
  const[num1,setNum1]=useState("");
  const[num2,setNum2]=useState("");
  const[result,setResult]=useState("");

  const handleOperation=(op)=>{
    const n1=parseFloat(num1);
    const n2=parseFloat(num2);
    if(isNaN(n1)|| isNaN(n2)){
      setResult("invalid input");
      return;
    }
    switch(op){
      case "+":
        setResult(n1+n2);
        break;
      case "-":
        setResult(n1-n2);
        break;
      case "*":
        setResult(n1*n2);
        break;
      case "/":
        setResult(n2!==0?n1/n2:"cannot divide by zero");
        break;
    }
  };
  const handleclear=()=>{
    setNum1("")
    setNum2("")
    setResult("")
  };
  return(
      <div className="calculator">
      <h2>Mini Calculator</h2>
      <input 
      type="number"
      placeholder="Number 1"
      value={num1}
      onChange={(e)=>setNum1(e.target.value)}
      />
      <input type="number"
      placeholder="Number 2"
      value={num2}
      onChange={(e)=>setNum2(e.target.value)}
      />
      <div className="buttons">
        <button onClick={()=>handleOperation("+")}>+</button>
        <button onClick={()=>handleOperation("-")}>-</button>
        <button onClick={()=>handleOperation("*")}>*</button>
        <button onClick={()=>handleOperation("/")}>/</button>
        <button className="clear" onClick={()=>handleclear()}>C</button>
      </div>
      <div className="result">
      {result!=="" && <h3>Result:{result}</h3>}
      </div>
      </div>

  )
}

