import { CHANGE_VALUE, ADD_SKILL, SAVE_SKILL, MODIFY_SKILL, SAVE_DB_SKILLS } from '../actions';

const initialState = {
 skill : [],
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