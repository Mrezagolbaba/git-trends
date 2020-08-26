import React from 'react';
import logo from './logo.svg';
import './App.css';
import SelectList from "./Components/Filter";
import CardContent from './Components/CardContent';


function App() {
    const [selected, setSelected] = React.useState('');
    const handleIdChange = React.useCallback(newId => {
        setSelected(selected);
    }, []);

  return (
    <div className="App">
         <SelectList handleIdChange={handleIdChange}/>
         <CardContent value ={selected} />
    </div>
  );
}

export default App;
