import React, { useState } from 'react';
import Highlight, { defaultProps } from "prism-react-renderer";
import './style.scss';
import classNames from 'classnames';

const VisualisationCode = ({codes, id, skill, changeValue, changeDbCode}) => {
  const [ textAreaOpen, setTextAreaOpen ] = useState(false);
  const ClicList = codes.filter((code) => parseInt(code.id) === parseInt(id));

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
  const changeInformation = (e) => {
    e.preventDefault();
    changeDbCode( 
      parseInt(id),
      e.target.form[0].value,
      e.target.form[1].value,
      e.target.form[4].value,
      parseInt(e.target.form[3].value)
    )
  }

  return (
    <>
    {ClicList.map((list) => (
      <form type="submit" className="visualisationCode" key={list.id} >
        <label className="visualisationCode-Label-Titre">Titre
        <input
          className="visualisationCode-titre"
          type="text"
          name="titre"
          defaultValue={list.titre}
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
          defaultValue={list.description}
          onChange={(e) => {
            changeValue(e.target.value, e.target.name);
          }}
        />
        </label>
        <label className="visualisationCode-Label-Color">Color
        <input
          className="visualisationCode-Color"
          type="color"
          value={list.category.color}
          readOnly
        />
        </label>
        <label>Category
        <select
          name="skill"
          className="skill"
          onChange={(e)=> changeValue(e.target.value)}
          defaultValue={list.category.id}
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
            defaultValue={list.code}
            onKeyDown={tabAction}
            onChange={(e)=> changeValue(e.target.value)}
            className={classNames("textarea", {"textarea--open": textAreaOpen})}
          />
          <Highlight {...defaultProps} code={list.code} language={list.category.highlightName} onClick={handleClick}>
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
        <button className="visualisationCode-button" type="submit" onClick={changeInformation}>Modify</button>
      </form>
      ))}
      </>
  )  
}

export default VisualisationCode;