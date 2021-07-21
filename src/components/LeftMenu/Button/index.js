import React from 'react';

import './style.scss';

const Button = ({setOpenWindow, setOpenModifyPopup}) => {
  const addClic = () => {
    setOpenWindow(true)
  }
  const modifClic = () => {
    setOpenModifyPopup(true)
  }
  return (
      <div className="menuLeft-button">
        <button className="menuLeft-button--add" onClick={addClic} >add</button>
        <button className="menuLeft-button--delete" onClick={modifClic}>Modify</button>
      </div>
      
  )
    
}

export default Button;