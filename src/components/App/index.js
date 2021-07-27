import React, { useState, useEffect } from 'react';
import LeftMenu from '../LeftMenu';
import MenuTitreCode from '../../containers/MenuTitreCode';
import VisualisationCode from '../../containers/VisualisationCode';
import AddCode from '../../containers/AddCode';
import './style.scss';
import '../../styles/theme.scss';
import AddPopup from '../../containers/LefMenu/AddPopup';
import ModifyPopup from '../../containers/LefMenu/ModifyPopup';
import {ReactComponent as Ligth} from '../../assets/images/newligth.svg';
import { lightOrNot } from '../../Utils/lightOrNot';


function App({fetchSkills, fetchCodes}) {
  const [theme, setTheme] = useState('light');
  const [ openWindow, setOpenWindow ] = useState(false);
  const [ openModifyPopup, setOpenModifyPopup ] = useState(false);
  const [ openNewCode, setOpenNewCode ] = useState(false);
  const changeSize = () => {
    lightOrNot(setTheme);
  }
  useEffect(() => {
    fetchSkills();
    fetchCodes();
  }, [fetchSkills,fetchCodes]);
  return (
    <div className={`App ${theme}`}>
      <header>
        <h1> Snippet Code Save by <a href="https://www.romaindupont.me" target="_blank" rel="noreferrer">Romain Dupont</a></h1>
        <Ligth onClick={changeSize}/>
      </header>
      <div className="monApp">
        <LeftMenu openWindow={openWindow} setOpenWindow={setOpenWindow} setOpenModifyPopup={setOpenModifyPopup} setOpenNewCode={setOpenNewCode}/>
        <MenuTitreCode setOpenNewCode={setOpenNewCode}/>
        <VisualisationCode/>
        {openNewCode && (<AddCode setOpenNewCode={setOpenNewCode}/>)}
      </div>
      {openWindow && (<AddPopup setOpenWindow={setOpenWindow}/>)}
      {openModifyPopup && (<ModifyPopup setOpenModifyPopup={setOpenModifyPopup}/>)}
    </div>
  );
}

export default App;
