import React, { useState } from 'react';
import Highlight, { defaultProps } from "prism-react-renderer";
import './style.scss';
import classNames from 'classnames';
import { selection } from '../../Utils/selection';

const VisualisationCode = ({codes, id, skill}) => {
  const [ textAreaOpen, setTextAreaOpen ] = useState(false);
  const [ content, setContent ] = useState('');
  const ClicList = codes.filter((code) => parseInt(code.id) === parseInt(id))
  const tabAction = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      let start = e.target.selectionStart;
      let end = e.target.selectionEnd;
      e.target.value = e.target.value.substring(0, start) +
        "\t" + e.target.value.substring(end);
      e.target.selectionStart =
      e.target.selectionEnd = start + 1;
    } 
  }
  const inputValue = (e) => {
    setContent(e.target.value)
  }
  const handleClick = () => {
    setTextAreaOpen(!textAreaOpen)
  }
  const handleBlur = () => {
    setTextAreaOpen(!textAreaOpen)
  }

  return (
    <>
    {ClicList.map((list) => (
      <div className="visualisationCode" key={list.id}>
        <label className="visualisationCode-Label-Titre">Titre
        <input className="visualisationCode-titre" type="text" value={list.titre} onChange={(e) => { 
            console.log(e.target.value);
          }}/>
        </label>
        <label className="visualisationCode-Label-description">Description
        <input className="visualisationCode-description" type="text" value={list.description} onChange={(e) => {
            console.log(e.target.value);
          }}/>
        </label>
        <label className="visualisationCode-Label-Color">Color
        <input className="visualisationCode-Color" type="color" value={list.category.color} readOnly/>
        </label>
        <select name="skill" onChange={()=> console.log('je change')} value={list.category.id}>
          {skill.map((skills, i) => (
          <option value={skills.id} key={i} selected={selection(skills.id, list.category.id)}>{skills.name}</option>
          ))}
        </select>
        <label>Code
          <textarea onInput={inputValue} onBlur={handleBlur} defaultValue={list.code} onKeyDown={tabAction} className={classNames("textarea", {"textarea--open": textAreaOpen})}/>
        <Highlight {...defaultProps} code={content === '' ? list.code : content} language={list.category.name} onClick={handleClick} >
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
      </div>
      ))}
      </>
  )
    
}

export default VisualisationCode;