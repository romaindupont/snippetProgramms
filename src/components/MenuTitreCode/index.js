import React from 'react';
import './style.scss';

const MenuTitreCode = ({codes}) => {
  return (
    <div className="menuTitreCode">
      <div className="menuTitreCode-select">
        <label>trier par</label>
        <select name="" id="">
          <option value="1">none</option>
          <option value="2">nom</option>
        </select>
      </div>
      <div className="menuTitreCode-search">
        <label htmlFor="recherche">recherche</label>
          <input type="search" name="search" id="recherche" />
      </div>
      <div className="menuTitreCode-cadre">
        {codes.map((code) => ( 
        <div className="cadre" key={code.id}>
          <span className="cadre-color" style={{background: `${code.category.color}`}}></span>
          <h1 className="cadre-titre">{code.titre}</h1>
          <p className="cadre-description">{code.description} </p>
        </div>
        ))}
        
      </div>
    </div>
  )
    
}

export default MenuTitreCode;