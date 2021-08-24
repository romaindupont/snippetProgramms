import React, { useState } from 'react';
import Field from '../../../containers/LefMenu/AddPopup/Field';
import Select from '../../../containers/LefMenu/AddPopup/Select';
import './style.scss';

const AddPopup = ({setOpenWindow, addDbSkill}) => {
  const [ error, setError ] = useState(false);
  const closeClick = () => {
    setOpenWindow(false);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(e.target[1].value !== '' && e.target[0].value !== '' ){
      addDbSkill(e.target[1].value, e.target[0].value, e.target[2].value, parseInt(e.target[3].value))
      setOpenWindow(false)
      setError(false)
    }
    else {
      setError(true)
    }
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
        <Select />
        <button type="submit" className="addPopup-button">Save</button>
      </form>
      {error && (<div className="addPopup-error"> Vous devez remplir tous les champs !</div>)}
    </div>
  )
}

export default AddPopup;