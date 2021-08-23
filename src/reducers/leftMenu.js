//reducer
import js from '../assets/images/js.png';
import php from '../assets/images/php.png';
import react from '../assets/images/react.png';
import css from '../assets/images/css3.png';
import html from '../assets/images/html5.png';
import python from '../assets/images/python.png';
import all from '../assets/images/all.svg';
import { CHANGE_VALUE, ADD_SKILL, SAVE_SKILL, MODIFY_SKILL, SAVE_DB_SKILLS } from '../actions';

const initialState = {
 skill : [
  {
    id: 1,
    name: 'ALL',
    image: all,
    color: '#E68941'
  },
  {
    id: 2,
    name: 'javascript',
    image: js,
    color: '#ffff00'
  },
  {
    id: 3,
    name: 'php',
    image: php,
    color: '#8e62f9'
  },
  {
    id: 4,
    name: 'react',
    image: react,
    color: '#71dbe0'
  },
  {
    id: 5,
    name: 'sql',
    image: '',
    color: '#313f88'
  },
  {
    id: 6,
    name: 'css',
    image: css,
    color: '#238f94'
  },
  {
    id: 7,
    name: 'html',
    image: html,
    color: '#37ec7f'
  },
  {
    id: 8,
    name: 'python',
    image: python,
    color: '#4f53bd'
  }
 ],
 id:'',
 name:'',
 image:'',
 color:''
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VALUE:
      return {
        ...state,
        [action.key]: action.newValue
      }
      case ADD_SKILL:
        return {
          ...state,
          skill : [
            ...state.skill,
            {
              id:action.id,
              name:action.name,
              image: action.image,
              color: action.color
            }
          ]
        }
      case SAVE_SKILL:
        return {
          ...state,
          id: action.id,
          name: action.name,
          image: action.image,
          color: action.color
        }
        
      case MODIFY_SKILL:
        return {
          ...state,
          skill: state.skill.map(skills => {
            if (skills.id === action.id) {
              return {
                id: action.id,
                name: action.name,
                image: action.image,
                color: action.color
              }
            }
            else {
              return skills;
            }
          }),
        }
      case SAVE_DB_SKILLS:
        return {
          ...state,
          skill : action.categoryList

        }
    default:
      return state;
  }
};

export default reducer;