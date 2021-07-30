import React, { useState } from 'react';
import './style.scss';

const MenuTitreCode = ({codes, id, saveId, setOpenNewCode, wait,setOpenViewCode}) => {
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

  const clicTitle = (e) => {
    e.preventDefault();
    saveId(e.target.getAttribute('data-my-id'));
    setOpenNewCode(false);
  }
  return (
    <div className="menuTitreCode">
      <div className="menuTitreCode-search">
        <label htmlFor="recherche">searchBar</label>
          <input type="search" name="search" id="recherche" onChange={inputWord}/>
      </div>
      <div className="menuTitreCode-cadre">
        {wait && (<div> waiting...</div>)}
        {!wait && (newList.map((code) => (
        <div className="cadre" data-my-id={code.id} key={code.id} onClick={clicTitle}>
          <span data-my-id={code.id} className="cadre-color" style={{background: `${code.category.color}`}}></span>
          <h1 data-my-id={code.id} className="cadre-titre">{code.titre}</h1>
          <p data-my-id={code.id} className="cadre-description">{code.description}</p>
        </div>
         ) ))}
      </div>
    </div>
  )
    
}

export default MenuTitreCode;