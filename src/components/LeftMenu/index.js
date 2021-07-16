import React from 'react';
import './style.scss';
import ContainerLangue from './ContainerLangue';
import Button from './Button';

const LeftMenu = () => {
  return (
    <div className="menuLeft">
      <h1 className="menuLeft-titre">Language</h1>
      <ContainerLangue />
      <Button />
    </div>
  )
    
}

export default LeftMenu;
