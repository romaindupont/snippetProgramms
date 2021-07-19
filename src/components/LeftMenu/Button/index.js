import React from 'react';

import './style.scss';

const Button = ({setOpenWindow}) => {
  
  const addClic = () => {
    setOpenWindow(true)
  }
  return (
      <div className="menuLeft-button">
        <button className="menuLeft-button--add" onClick={addClic} >add</button>
        <button className="menuLeft-button--delete">Modify</button>
      </div>
      
  )
    
}

export default Button;