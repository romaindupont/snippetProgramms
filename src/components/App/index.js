import React, { useState } from 'react';
import LeftMenu from '../LeftMenu';
import './style.scss';
import '../../styles/theme.scss';
import AddPopup from '../../containers/LefMenu/AddPopup';

function App() {
  const [theme, setTheme] = useState('light');
  const [ openWindow, setOpenWindow ] = useState(false)
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
        <label className="switch">
          <input type="checkbox" onChange={checkboxChange} />
          <span className="slider"></span>
        </label>
      </header>
      <LeftMenu openWindow={openWindow} setOpenWindow={setOpenWindow} />
      {openWindow && (<AddPopup setOpenWindow={setOpenWindow}/>)}
    </div>
  );
}

export default App;
