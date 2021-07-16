import React, { useState } from 'react';
import './style.scss';
import ContainerLangue from '../../containers/LefMenu/ContainerLangue';
import Button from './Button';
import AddPopup from './AddPopup';

const LeftMenu = () => {
  const [ openWindow, setOpenWindow ] = useState(false)
  return (
    <div className="menuLeft">
      <h1 className="menuLeft-titre">Skills</h1>
      <ContainerLangue />
      <Button setOpenWindow={setOpenWindow} openWindow={openWindow} />
      {openWindow && (<AddPopup setOpenWindow={setOpenWindow}/>)}
    </div>
  )
    
}

export default LeftMenu;
