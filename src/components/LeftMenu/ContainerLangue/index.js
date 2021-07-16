import React from 'react';
import './style.scss';
import AllLanguage from '../../../data/languages';

const ContainerLangue = () => {
  return (
    <div className="languageContainer">
      {AllLanguage.map((langue) => (
        <div className="languageContainer-all" id={langue.id} key={langue.id}>
          <img src={langue.image} alt={langue.name} className="languageContainer-img"/>
          <h2 className="languageContainer-titre">{langue.name}</h2>
        </div>
        ))}
    </div>
  )
    
}

export default ContainerLangue;