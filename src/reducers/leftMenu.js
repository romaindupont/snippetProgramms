//reducer
import js from '../assets/images/js.png';
import php from '../assets/images/php.png';
import react from '../assets/images/react.png';
import css from '../assets/images/css3.png';
import html from '../assets/images/html5.png';
import python from '../assets/images/python.png';
import { SAVE_SKILL } from '../actions';

const initialState = {
 skill : [
  {
    id: 1,
    name: 'JS',
    image: js,
    color: '#ffff00'
  },
  {
    id: 2,
    name: 'PHP',
    image: php,
    color: '#8e62f9'
  },
  {
    id: 3,
    name: 'REACT',
    image: react,
    color: '#71dbe0'
  },
  {
    id: 4,
    name: 'SQL',
    image: '',
    color: '#313f88'
  },
  {
    id: 5,
    name: 'CSS',
    image: css,
    color: '#238f94'
  },
  {
    id: 6,
    name: 'HTML',
    image: html,
    color: '#37ec7f'
  },
  {
    id: 7,
    name: 'PYTHON',
    image: python,
    color: '#4f53bd'
  }
 ]
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
/*     case SAVE_SKILL:
      return {
        ...state,
        skill: state.skill,
      }; */
    default:
      return state;
  }
};

export default reducer;