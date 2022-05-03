import logo from "./logo.svg";
import "./App.css";
import React from "react";

function App() {
  const name = "Vick";
  const age = 18;
  const isMale = true;
  const student = {
    name: "Easy Frontend",
  };
  const colorList = ["red", "green", "blue"];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Vick Nguyen Welcome!</p>
        <p>
          Xin chao {name} - {age} - {isMale ? "Male" : "Female"}
        </p>
        {isMale ? <p>Male</p> : <p>Female</p>}
        {isMale && <p>Male</p>}
        {!isMale && <p>Female</p>}
        {isMale && (
          <>
            <p>Male 1</p>
            <p>Male 2</p>
            <p>Male 3</p>
          </>
        )}

        {isMale && (
          <div>
            <p>Male 4</p>
            <p>Male 5</p>
            <p>Male 6</p>
          </div>
        )}
        {isMale && (
          <React.Fragment>
            <p>Male 7</p>
            <p>Male 8</p>
            <p>Male 9</p>
          </React.Fragment>
        )}
        <ul>
          {colorList.map((color) => (
            <li key = {color} style={{ color }}>{color}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
