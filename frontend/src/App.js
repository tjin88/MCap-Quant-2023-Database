import React, { useState } from 'react'
import './App.css';
import Buttons from './Components/Buttons.js';
import DatabaseTable from './Components/DatabaseTable.js';
import { DatabaseData } from './Components/DatabaseData.js';

function App() {
  const [currentData, setCurrentData] = useState(DatabaseData);

  return (
    <div className="App">
      <DatabaseTable databaseData={DatabaseData} currentData={currentData}/>
      <Buttons currentData={currentData} setCurrentData={setCurrentData}/>
    </div>
  );
}

export default App;
