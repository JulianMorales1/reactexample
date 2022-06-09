import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';

function MyInfoComponent() {
  const [myName, setName] = useState("Julian");
  const [favoriteColor, setColor] = useState("Red");
  const [favoriteMovies, setMovies] = useState(["Seven /"," The Exorcist /", " The Dark Knight"]);
  
  
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
      {myName}
      <br></br>
      {favoriteColor}
      <br></br>
      {favoriteMovies}
    </div>
    <br></br>
    <input type = 'text'
    onChange={(event) => {
      const value = event.target.value;
      setName(value);
    }}
    ></input>
    <br></br>
    <input type = 'text'
    onChange={(event) => {
      const value = event.target.value;
      setColor(value);
    }}
    ></input>
    <br></br>
    <input type = 'text'
    onChange={(event) => {
      const firstArrayItem =  event.target.value;
      const secondArrayItem = favoriteMovies[1];
      const thirdArrayItem = favoriteMovies[2];
      const newArray = [firstArrayItem, secondArrayItem, thirdArrayItem];
     
      setMovies(newArray);
    }}
    ></input>

<input type = 'text'
    onChange={(event) => {
      const firstArrayItem =  favoriteMovies[0];
      const secondArrayItem = event.target.value;
      const thirdArrayItem = favoriteMovies[2];
      const newArray = [firstArrayItem, secondArrayItem, thirdArrayItem];
     
      setMovies(newArray);
    }}
    ></input>

<input type = 'text'
    onChange={(event) => {
      const firstArrayItem =  favoriteMovies[0];
      const secondArrayItem = favoriteMovies[1];
      const thirdArrayItem = event.target.value;
      const newArray = [firstArrayItem , secondArrayItem , thirdArrayItem];
     
      setMovies(newArray);
    }}
    ></input>

     
      </header>
    </div>
  );
}


export default MyInfoComponent;
