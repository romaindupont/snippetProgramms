import React from 'react';
import './style.scss';


const ContainerLangue = ({AllLanguage}) => {
  return (
    <div className="languageContainer">
      {AllLanguage.map((langue) => (
        <div className="languageContainer-all" id={langue.id} key={langue.id}>
          <img src={langue.image} alt={langue.name} className="languageContainer-img"/>
          <h2 className="languageContainer-titre">{langue.name}</h2>
          <span className="languageContainer-color" style={{background: `${langue.color}`}}></span>
        </div>
        ))}
    </div>
  )
    
}

export default ContainerLangue;