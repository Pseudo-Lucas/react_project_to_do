import React, { useState } from 'react';
import './App.css';
import Lista from './Lista.js';

function Temas() {
  const [theme, setTheme] = useState('light');

  const setLightTheme = () => {
    setTheme('light');
  };

  const setDarkTheme = () => {
    setTheme('dark');
  };

  return (
    <div className={`App ${theme}`}>
      <header className="App-header">
        <button onClick={setLightTheme}>Tema Claro</button>
        <button onClick={setDarkTheme}>Tema Escuro</button>
      </header>
      <Lista/>
    </div>
  );
}

export default Temas;