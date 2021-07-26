import React from 'react';
import './style.scss';
import ContainerLangue from '../../containers/LefMenu/ContainerLangue';
import Button from '../../containers/LefMenu/Button';

const LeftMenu = ({openWindow, setOpenWindow, setOpenModifyPopup, setOpenNewCode}) => {
 
  return (
    <div className="menuLeft">
      <ContainerLangue />
      <Button setOpenWindow={setOpenWindow} openWindow={openWindow} setOpenModifyPopup={setOpenModifyPopup} setOpenNewCode={setOpenNewCode}/>
    </div>
  )
    
}

export default LeftMenu;
