import React from 'react';
import logo from './logo.svg';
import './App.css';
import FilterContent from "./Components/Filter";
import CardContent from './Components/CardContent';

function App() {
  return (
    <div className="App">
         <FilterContent/>
         <CardContent/>
    </div>
  );
}

export default App;
