import React from 'react';
import './style.scss';
import ContainerLangue from '../../containers/LefMenu/ContainerLangue';
import Button from './Button';

const LeftMenu = ({openWindow, setOpenWindow, setOpenModifyPopup}) => {
 
  return (
    <div className="menuLeft">
      <h1 className="menuLeft-titre">Skills</h1>
      <ContainerLangue />
      <Button setOpenWindow={setOpenWindow} openWindow={openWindow} setOpenModifyPopup={setOpenModifyPopup} />
    </div>
  )
    
}

export default LeftMenu;
