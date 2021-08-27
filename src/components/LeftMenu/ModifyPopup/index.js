import React from 'react';
import Field from '../../../containers/LefMenu/AddPopup/Field';
import Select from '../../../containers/LefMenu/AddPopup/Select';

const ModifyPopup = ({
  setOpenModifyPopup,
  AllLanguage,
  saveSkill,
  modifyDbSkill,
  saveId
}) => {
  const closeClick = () => {
    setOpenModifyPopup(false);
  }
  const handleChange = () => {
    const mySkillSelect = AllLanguage.filter((skill) => skill.id === parseInt(document.getElementById('skill').value));
    saveSkill(
      mySkillSelect[0].id,
      mySkillSelect[0].name,
      mySkillSelect[0].image,
      mySkillSelect[0].color
    );
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    saveId(parseInt(e.target[0].value));
    modifyDbSkill(
      e.target[2].value,
      e.target[1].value,
      e.target[3].value,
      parseInt(e.target[4].value)
    );
    setOpenModifyPopup(false);
  }
  let pos1 = 0;
  let pos2 = 0;
  let pos3 = 0;
  let pos4 = 0;
  const dragElement = (e) => {
    e.preventDefault();
    const elemnt = document.getElementById('dragMod');
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
    const elemnt = document.getElementById('dragMod');
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
    <div className="addPopup" draggable="true" id="dragMod" onDragStart={dragElement}>
      <form type="submit" onSubmit={handleSubmit}>
        <div className="addPopup-close" onClick={closeClick}>&#xD7;</div>
        <div className="addPopup-highlight">
          <label htmlFor="">Choisir un language</label>
          <select className="highlight" name="skills" id="skill" onChange={handleChange}>
            {AllLanguage.map((skill) => (
            <option key={skill.id} value={skill.id}>{skill.name}</option>
            ))}
          </select>
        </div>
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
    </div>
  )
}

export default ModifyPopup;