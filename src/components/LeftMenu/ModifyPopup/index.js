import React from 'react';
import Field from '../../../containers/LefMenu/AddPopup/Field';
import Select from '../../../containers/LefMenu/AddPopup/Select';
import './style.scss';

const ModifyPopup = ({setOpenModifyPopup, AllLanguage, saveSkill, modifyDbSkill, saveId}) => {
  const closeClick = () => {
    setOpenModifyPopup(false);
  }
  const handleChange = () => {
    const mySkillSelect = AllLanguage.filter((skill) => skill.id === parseInt(document.getElementById('skill').value));
    saveSkill(mySkillSelect[0].id, mySkillSelect[0].name, mySkillSelect[0].image, mySkillSelect[0].color)

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    saveId(parseInt(e.target[0].value))
    modifyDbSkill(e.target[2].value, e.target[1].value, e.target[3].value, parseInt(e.target[4].value));
    setOpenModifyPopup(false)
  }
  return (
    <div className="addPopup">
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