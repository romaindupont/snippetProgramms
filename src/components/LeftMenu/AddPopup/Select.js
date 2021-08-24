import React from 'react';

const Select = ({ changeValue, highlight}) => {
  return (
    <div className="addPopup-highlight">
      <label>Style Highlight
      <select
        name="highlight"
        className="highlight"
        onChange={(e)=> changeValue(e.target.value)}
      >
        {highlight.map((skills, i) => (
          <option value={skills.id} key={i}>{skills.highName}</option>
        ))}
      </select>
      </label>
    </div>
  )
    
}

export default Select;