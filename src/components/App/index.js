import React, { useState } from 'react';
import LeftMenu from '../LeftMenu';
import MenuTitreCode from '../../containers/MenuTitreCode';
import VisualisationCode from '../VisualisationCode';
import './style.scss';
import '../../styles/theme.scss';
import AddPopup from '../../containers/LefMenu/AddPopup';
import ModifyPopup from '../../containers/LefMenu/ModifyPopup';
import {ReactComponent as Ligth} from '../../assets/images/newligth.svg';
import { lightOrNot } from '../../Utils/lightOrNot';

function App() {
  const [theme, setTheme] = useState('light');
  const [ openWindow, setOpenWindow ] = useState(false)
  const [ openModifyPopup, setOpenModifyPopup ] = useState(false)
  const changeSize = () => {
    lightOrNot(setTheme);
  }
  return (
    <div className={`App ${theme}`}>
      <header>
        <h1> Snippet Code Save</h1>
        <Ligth onClick={changeSize}/>
      </header>
      <div className="monApp">
        <LeftMenu openWindow={openWindow} setOpenWindow={setOpenWindow} setOpenModifyPopup={setOpenModifyPopup} />
        <MenuTitreCode />
        <VisualisationCode />
      </div>
      {openWindow && (<AddPopup setOpenWindow={setOpenWindow}/>)}
      {openModifyPopup && (<ModifyPopup setOpenModifyPopup={setOpenModifyPopup}/>)}
    </div>
  );
}

export default App;
