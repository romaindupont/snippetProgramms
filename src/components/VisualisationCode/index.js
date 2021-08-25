import React, { useState } from 'react';
import Highlight, { defaultProps } from "prism-react-renderer";
import './style.scss';
import classNames from 'classnames';
import { hoverCode, hoverCodeOut } from '../../Utils/hoverCode';
import {ReactComponent as Tray} from '../../assets/images/tray.svg';
import {ReactComponent as Settings} from '../../assets/images/settings.svg';

const VisualisationCode = ({codes, id, skill, changeValue, changeDbCode, theme}) => {
  const [ textAreaOpen, setTextAreaOpen ] = useState(false);
  const [ openMenu, setOpenMenu ] = useState(false);
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
    /* console.log(/* e.nativeEvent, e.nativeEvent.path[4]) */
    changeDbCode( 
      parseInt(id),
      e.target.form[0].value,
      e.target.form[1].value,
      e.target.form[4].value,
      parseInt(e.target.form[3].value) 
    )
  }
  const menuOpenClic = () => {
    setOpenMenu(!openMenu);
  }
  const onHover = () => {
    hoverCode(theme);
  }
  const onHoverOut = () => {
    hoverCodeOut(theme);
  }
  return (
    <>
    {ClicList.map((list) => (
      <form type="submit" className="visualisationCode" key={list.id} style={{borderColor: `${list.category.color}`}}>
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
        <div className="visualisationCode-button-div" onClick={menuOpenClic} >
          <div className="cube-top">
            <span className="cube"></span><span className={classNames("cube-1", {"cube-1--open": openMenu})} onMouseOver={onHover} onMouseLeave={onHoverOut} onClick={changeInformation}><Settings onClick={changeInformation}/></span>
            <span className="cube"></span><span className={classNames("cube-2", {"cube-2--open": openMenu})}></span>
          </div>
          <div className="cube-bottom">
            <span className="cube"></span><span type="submit" className={classNames("cube-3", {"cube-3--open": openMenu})} onMouseOver={onHover} onMouseLeave={onHoverOut}><Tray /></span>
            <span className="cube"></span><span className={classNames("cube-4", {"cube-4--open": openMenu})}><span>&#x2716;</span></span>
          </div>
        </div>
      </form>
      ))}
      </>
  )  
}

export default VisualisationCode;