import React, { useState } from 'react';
import './App.css';
import Lista from './Lista';
import { TodoProvider } from './TodoContext';

function Temas() {
  const [theme, setTheme] = useState('light');

  const setLightTheme = () => {
    setTheme('light');
  };

  const setDarkTheme = () => {
    setTheme('dark');
  };

  return (
    <TodoProvider>
      <div className={`App ${theme}`}>
        <header className="App-header header-buttons">
          <button onClick={setLightTheme}>Light</button>
          <button onClick={setDarkTheme}>Dark</button>
        </header>
        <Lista />
      </div>
    </TodoProvider>
  );
}

export default Temas;