import React from 'react';
import './App.css';


import SelectList from "./Components/Filter";
import CardContent from './Components/CardContent';


function App() {
    const [selected, setSelected] = React.useState('');
    const handleSelected = React.useCallback(newItem => {
        setSelected(newItem);
    }, []);

  return (
    <div className="App">
         <SelectList handleSelected={handleSelected} />
         <CardContent value ={selected} />
    </div>
  );
}

export default App;
