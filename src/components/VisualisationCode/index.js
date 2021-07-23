import React from 'react';
import './style.scss';

const VisualisationCode = () => {
  return (
    <div className="visualisationCode">
      <label className="visualisationCode-Label-Titre">Title
      <input className="visualisationCode-titre" type="text"/>
      </label>
      <label className="visualisationCode-Label-description">Description
      <input className="visualisationCode-description" type="text"/>
      </label>
      <label className="visualisationCode-Label-Color">Color
      <input className="visualisationCode-Color" type="color" name="" id="" />
      </label>
      <label htmlFor="">Code</label>
      <textarea>.cadre {/* {width: 95%;height: 100px;border: 4px solid var(--theme-page-background-hover);margin: 0 auto;position: relative;border-radius: 5px;cursor: pointer;margin-bottom: 0.5rem;display: flex;flex-direction: column;&:hover {border: 1px solid var(--theme-page-background);}&:hover > .cadre-color {width: 100%;z-index: 1;}&-color {height: 100%;display: block;width: 10px;border: none;border-radius: 10px;position: absolute;left: -5px;transition: width 500ms ease-in-out;}&-titre {margin: 0;font-size: 1rem;text-align: center;z-index: 3;}&-description {margin-left: 1rem;font-size: 0.8rem;z-index: 3;}} */}</textarea>
    </div>
  )
    
}

export default VisualisationCode;