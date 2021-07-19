import React from 'react';
import Field from '../../../containers/LefMenu/AddPopup/Field';
import './style.scss';

const AddPopup = ({setOpenWindow, addSkill}) => {
  const closeClick = () => {
    setOpenWindow(false);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    addSkill(8, e.target[1].value, e.target[0].value, e.target[2].value)
    setOpenWindow(false)
  }
  return (
    <div className="addPopup">
      <form type="submit" onSubmit={handleSubmit}>
        <div className="addPopup-close" onClick={closeClick}>&#xD7;</div>
        <Field 
          type="text" 
          placeholder="Lien vers le logo"
          name="logo"
        />
        <Field 
          type="text" 
          placeholder="Le titre"
          name="title"
        />
        <Field 
          type="color" 
          placeholder=""
          name="color"
        />

        <button type="submit" className="addPopup-button">Save</button>
      </form>
    </div>
  )
    
}

export default AddPopup;