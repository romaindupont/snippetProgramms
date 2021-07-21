import React from 'react';
import './style.scss';
import ContainerLangue from '../../containers/LefMenu/ContainerLangue';
import Button from './Button';

const LeftMenu = ({openWindow, setOpenWindow, setOpenModifyPopup}) => {
 
  return (
    <div className="menuLeft">
      <ContainerLangue />
      <Button setOpenWindow={setOpenWindow} openWindow={openWindow} setOpenModifyPopup={setOpenModifyPopup} />
    </div>
  )
    
}

export default LeftMenu;
