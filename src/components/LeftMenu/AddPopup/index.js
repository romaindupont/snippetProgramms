import React, { useState } from 'react';
import Field from '../../../containers/LefMenu/AddPopup/Field';
import Select from '../../../containers/LefMenu/AddPopup/Select';
import './style.scss';

const AddPopup = ({ setOpenWindow, addDbSkill }) => {
  const [ error, setError ] = useState(false);
  const closeClick = () => {
    setOpenWindow(false);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(e.target[1].value !== '' && e.target[0].value !== '' ){
      addDbSkill(
        e.target[1].value,
        e.target[0].value,
        e.target[2].value,
        parseInt(e.target[3].value
      ));
      setOpenWindow(false);
      setError(false);
    }
    else {
      setError(true);
    }
  }
  let pos1 = 0;
  let pos2 = 0;
  let pos3 = 0;
  let pos4 = 0;
  const dragElement = (e) => {
    e.preventDefault();
    const elemnt = document.getElementById('drag');
    pos1 = 0;
    pos2 = 0;
    pos3 = 0;
    pos4 = 0;
    elemnt.onmousedown = dragMouseDown;
  }
  const dragMouseDown = (e) => {
    e.stopPropagation();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }
  const elementDrag = (e) => {
    e.preventDefault();
    const elemnt = document.getElementById('drag');
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elemnt.style.top = (elemnt.offsetTop - pos2) + "px";
    elemnt.style.left = (elemnt.offsetLeft - pos1) + "px";
  }
  const closeDragElement = () => {
    document.onmouseup = null;
    document.onmousemove = null;
  }
  return (
    <div className="addPopup" draggable="true" id="drag" onDragStart={dragElement}>
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