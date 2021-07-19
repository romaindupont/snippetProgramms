import React from 'react';
import './style.scss';
import ContainerLangue from '../../containers/LefMenu/ContainerLangue';
import Button from './Button';

const LeftMenu = ({openWindow,setOpenWindow}) => {
 
  return (
    <div className="menuLeft">
      <h1 className="menuLeft-titre">Skills</h1>
      <ContainerLangue />
      <Button setOpenWindow={setOpenWindow} openWindow={openWindow} />
    </div>
  )
    
}

export default LeftMenu;
