import React, { useState } from 'react';
import LeftMenu from '../LeftMenu';
import './style.scss';
import '../../styles/theme.scss';

function App() {
  const [theme, setTheme] = useState('light');
  const checkboxChange = () => {
    if (theme === 'light') {
    setTheme('dark')
    }
    if (theme === 'dark') {
      setTheme('light')
    }
  }
  return (
    <div className={`App ${theme}`}>
      <header>
        <h1> Snippet Code Save</h1>
        <label class="switch">
          <input type="checkbox" onChange={checkboxChange} />
          <span class="slider"></span>
        </label>
      </header>
      <LeftMenu />
    </div>
  );
}

export default App;
