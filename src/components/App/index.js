import React, { useState } from 'react';
import LeftMenu from '../LeftMenu';
import './style.scss';
import '../../styles/theme.scss';

function App() {
  const [theme, setTheme] = useState('light');
  return (
    <div className={`App ${theme}`}>
        <LeftMenu />
    </div>
  );
}

export default App;
