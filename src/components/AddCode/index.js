import React, { useState } from 'react';
import Highlight, { defaultProps } from "prism-react-renderer";
import classNames from 'classnames';

const AddCode = ({skill, changeValue, addDbCode, currentValue, setOpenNewCode}) => {
  const [ textAreaOpen, setTextAreaOpen ] = useState(false);
  const tabAction = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      let start = e.target.selectionStart;
      let end = e.target.selectionEnd;
      e.target.value = e.target.value.substring(0, start) + "\t" + e.target.value.substring(end);
      e.target.selectionStart = e.target.selectionEnd = start + 1;
    } 
  }
  const handleClick = () => {
    setTextAreaOpen(!textAreaOpen);
  }
  const handleBlur = () => {
    setTextAreaOpen(!textAreaOpen);
  }
  const register = (e) => {
    e.preventDefault();
    addDbCode(
      e.target.form[0].value,
      e.target.form[1].value,
      e.target.form[4].value,
      e.target.form[3].value
    );
    setOpenNewCode(false);
  }

  return (
    <>
      <form type="submit" className="visualisationCode" >
        <label className="visualisationCode-Label-Titre">Titre
        <input
          className="visualisationCode-titre"
          type="text"
          name="titre"
          value={currentValue}
          onChange={(e) => { 
            changeValue(e.target.value, e.target.name);
          }}
        />
        </label>
        <label className="visualisationCode-Label-description">Description
        <input
          className="visualisationCode-description"
          name="description"
          type="text"
          value={currentValue}
          onChange={(e) => {
            changeValue(e.target.value, e.target.name);
          }}
        />
        </label>
        <label className="visualisationCode-Label-Color">Color
        <input
          className="visualisationCode-Color"
          type="color"
          value={currentValue || '#222222'}
          readOnly
        />
        </label>
        <label>Category
        <select
          name="skill"
          className="skill"
          onChange={(e)=> changeValue(e.target.value)}
          value={currentValue}
        >
          {skill.map((skills, i) => (
            <option value={skills.id} key={i}>{skills.name}</option>
          ))}
        </select>
        </label>
        <label className="visualisationCode-textarea">Code
          <textarea
            spellCheck="false"
            onBlur={handleBlur}
            value={currentValue}
            onKeyDown={tabAction}
            onChange={(e)=> changeValue(e.target.value)}
            className={classNames("textarea", {"textarea--open": textAreaOpen})}
          />
          <Highlight {...defaultProps} code={''} language={''} onClick={handleClick}>
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <pre className={`${className} ${classNames("preClass", {"preClass--close":textAreaOpen})}`} style={style} onClick={handleClick}>
                {tokens.map((line, i) => (
                  <div {...getLineProps({ line, key: i })}>
                    {line.map((token, key) => (
                      <span {...getTokenProps({ token, key })} />
                    ))}
                  </div>
              ))}
              </pre>
            )}
          </Highlight>
        </label>
        <button className="visualisationCode-button" type="submit" onClick={register}><span>&#43;</span><span className="tooltip">Ajouter le code</span></button>
      </form>
      </>
  )  
}

export default AddCode;