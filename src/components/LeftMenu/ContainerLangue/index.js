import React from 'react';
import './style.scss';


const ContainerLangue = ({ AllLanguage, saveSkill }) => {
  const skillClick = (e) => {
    e.preventDefault();
    saveSkill(
      e.target.getAttribute('data-my-id'),
      e.target.getAttribute('data-my-name'),
      e.target.getAttribute('data-my-image'),
      e.target.getAttribute('data-my-color')
    )
  }
  return (
    <div className="languageContainer">
      {AllLanguage.map((langue) => (
        <div
          className="languageContainer-all"
          id={langue.id}
          key={langue.id}
          data-my-id={langue.id}
          data-my-name={langue.name}
          data-my-color={langue.color}
          data-my-image={langue.image}
          onClick={skillClick}
        >
          <img
            src={langue.image}
            alt={langue.name}
            className="languageContainer-img"
            data-my-id={langue.id}
            data-my-name={langue.name}
            data-my-color={langue.color}
            data-my-image={langue.image}
          />
          <h2
            className="languageContainer-titre"
            data-my-id={langue.id}
            data-my-name={langue.name}
            data-my-color={langue.color}
            data-my-image={langue.image}
          >{langue.name}
          </h2>
          <span
            className="languageContainer-color"
            style={{background: `${langue.color}`}}
            data-my-id={langue.id}
            data-my-name={langue.name}
            data-my-color={langue.color}
            data-my-image={langue.image}
          ></span>
        </div>
        ))}
    </div>
  )
    
}

export default ContainerLangue;