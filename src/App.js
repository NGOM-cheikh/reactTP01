import React from 'react';
import './App.css';
import MonBody from './components/MonBody';
import MonFooter from './components/MonFooter';
import MonHeader from './components/MonHeader';

function App() {
  return (
    <div className="App">
      <MonHeader />
      <MonBody />
      <MonFooter nom="NGOM" prenom="CHEIKH" session="2024 -M05" />
    </div>
  );
}

export default App;
