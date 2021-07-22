import React, { useState } from 'react';
import './style.scss';

const MenuTitreCode = ({codes, id}) => {
  const [ searchTerm, setSearchTerm ] = useState('');
  const inputWord = (e) => {
    setSearchTerm(e.target.value);
  }
  let newList = codes;
  if (parseInt(id) === 1) {
    newList = codes.filter((code) => code.titre.includes(searchTerm) || code.description.includes(searchTerm));
  }
  else {
    newList = codes.filter((code) => parseInt(code.category.id) === parseInt(id) && (code.titre.includes(searchTerm) || code.description.includes(searchTerm)));
  }
  return (
    <div className="menuTitreCode">
      <div className="menuTitreCode-search">
        <label htmlFor="recherche">searchBar</label>
          <input type="search" name="search" id="recherche" onChange={inputWord}/>
      </div>
      <div className="menuTitreCode-cadre">
        {newList.map((code) => (
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