import React from 'react';

import './style.scss';

const Button = ({setOpenWindow, setOpenModifyPopup, saveId, setOpenNewCode}) => {
  const addClic = () => {
    setOpenWindow(true);
    setOpenNewCode(false);
  }
  const modifClic = () => {
    setOpenModifyPopup(true);
    setOpenNewCode(false);
  }
  const newClick = () => {
    saveId('');
    setOpenNewCode(true);
  }
  return (
    <div className="div-button">
      <div className="menuLeft-button">
        <button className="menuLeft-button--add" onClick={addClic} >add</button>
        <button className="menuLeft-button--delete" onClick={modifClic}>Modify</button>
      </div>
      <div className="menuTitreCode-button">
        <button className="menuTitreCode-button--new" onClick={newClick}>New</button>
      </div>
    </div>
  )
    
}

export default Button;