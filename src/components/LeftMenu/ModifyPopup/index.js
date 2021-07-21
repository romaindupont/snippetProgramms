import React from 'react';
import Field from '../../../containers/LefMenu/AddPopup/Field';
import './style.scss';

const ModifyPopup = ({setOpenModifyPopup, AllLanguage, saveSkill, modifySkill}) => {
  const closeClick = () => {
    setOpenModifyPopup(false);
  }
  const handleChange = () => {
    const mySkillSelect = AllLanguage.filter((skill) => skill.id === parseInt(document.getElementById('skill').value));
    saveSkill(mySkillSelect[0].id, mySkillSelect[0].name, mySkillSelect[0].image, mySkillSelect[0].color)

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    modifySkill(parseInt(e.target[0].value), e.target[2].value, e.target[1].value, e.target[3].value);
    setOpenModifyPopup(false)
  }
  return (
    <div className="addPopup">
      <form type="submit" onSubmit={handleSubmit}>
        <div className="addPopup-close" onClick={closeClick}>&#xD7;</div>
        <label htmlFor="">Choisir un language</label>
        <select name="skills" id="skill" onChange={handleChange}>
          {AllLanguage.map((skill) => (
          <option key={skill.id} value={skill.id}>{skill.name}</option>
          ))}
        </select>
        <Field 
          type="text" 
          placeholder="Lien vers le logo"
          name="image"
        />
        <Field 
          type="text" 
          placeholder="Le titre"
          name="name"
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

export default ModifyPopup;