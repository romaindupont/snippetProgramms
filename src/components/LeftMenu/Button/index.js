import React, { useState } from 'react';
import classNames from 'classnames';
import './style.scss';
import imageSetting from '../../../assets/images/settings.svg';
import {ReactComponent as Coder} from '../../../assets/images/coder.svg';
import { hoverCode, hoverCodeOut } from '../../../Utils/hoverCode';

const Button = ({
  setOpenWindow,
  setOpenModifyPopup,
  saveId,
  setOpenNewCode,
  theme
}) => {
  const [ openMenu, setOpenMenu ] = useState(false);
  const addClic = () => {
    setOpenWindow(true);
    setOpenNewCode(false);
  }
  const modifClic = () => {
    setOpenModifyPopup(true);
    setOpenNewCode(false);
  }
  const newClick = () => {
    saveId('');
    setOpenNewCode(true);
  }
  const clicMenu = () => {
    setOpenMenu(!openMenu)
  }
  const onHover = () => {
    hoverCode(theme);
  }
  const onHoverOut = () => {
    hoverCodeOut(theme);
  }
  return (
      <div className="menuLeft-try" onClick={clicMenu}>
        <span className={classNames("trait-1", {"trait-1--open": openMenu})}></span>
        <span className={classNames("trait-2", {"trait-2--open": openMenu})}></span>
        <span className={classNames("trait-3", {"trait-3--open": openMenu})}></span>
        <button className={classNames("menuLeft-button--add", {"menuLeft-button--add--open": openMenu})} onClick={addClic} >&#43;<span className="tooltip">Ajouter une categorie</span></button>
        <button className={classNames("menuLeft-button--delete", {"menuLeft-button--delete--open": openMenu})} onClick={modifClic}><img src={imageSetting} alt="" /><span className="tooltip">Modifier une categorie</span></button>
        <button className={classNames("menuLeft-button--new", {"menuLeft-button--new--open": openMenu})} onClick={newClick} onMouseOver={onHover} onMouseLeave={onHoverOut}><Coder /><span className="tooltip">Ajouter un code</span></button>
      </div>
  );
}

export default Button;