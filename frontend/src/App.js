import React, { useState } from 'react'
import './App.css';
import Buttons from './Components/Buttons.js';
import DatabaseTable from './Components/DatabaseTable.js';
import { DatabaseData } from './Components/DatabaseData.js';

function App() {
  const [currentData, setCurrentData] = useState(DatabaseData);
  const [deletedData, setDeletedData] = useState([]);

  return (
    <div className="App">
      <DatabaseTable databaseData={DatabaseData} currentData={currentData}/>
      <Buttons 
        currentData={currentData} 
        setCurrentData={setCurrentData}
        deletedData={deletedData} 
        setDeletedData={setDeletedData}
      />
    </div>
  );
}

export default App;
