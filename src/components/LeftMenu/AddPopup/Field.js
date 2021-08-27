import React from 'react';

const Field = ({
  type,
  placeholder,
  name,
  currentValue,
  changeValue
}) => {
  return (
    <div className={`addPopup-${name}`}>
      <label className={`addPopup-${name}-label`}>{name}</label>
      <input
        className={`addPopup-${name}-input`}
        type={type}
        placeholder={placeholder}
        value={currentValue || ''}
        onChange={(e) => {
          changeValue(e.target.value);
        }}
      />
    </div>
  )
}

export default Field;