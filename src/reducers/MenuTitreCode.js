import { SAVE_ID, CHANGE_CODE, ADD_CODE, SAVE_DB_CODES, SAVE_DB_HIGHLIGHT } from '../actions';

const initialState = {
  codes : [],
  highlight: [],
  id: '',
  titre: '',
  description: '',
  category:'',
  code: '',
  wait: true
 };
 
 const reducer = (state = initialState, action = {}) => {
   switch (action.type) {
    case SAVE_ID:
      return {
        ...state,
        id: action.id
      }
    case CHANGE_CODE:
      return {
        ...state,
        codes: state.codes.map(coding => {
          if (coding.id === action.id) {
            return {
              id: action.id,
              titre: action.titre,
              description: action.description,
              category: {
                id: action.category,
                name: action.name,
                color: action.color
              },
              code: action.code
            }
          }
          else {
            return coding;
          }
        }),
      }
    case ADD_CODE:
      return {
        ...state,
        codes: [
          ...state.codes,
          {
            id: action.id,
              titre: action.titre,
              description: action.description,
              category: {
                id: action.category,
                name: action.name,
                color: action.color
              },
              code: action.code
          }
        ],
        id: '',
        titre: '',
        description: '',
        category:'',
        code: ''
      }
    case SAVE_DB_CODES:
      return {
        ...state,
        codes: [
          ...state.codes, 
          action.codesList
        ], 
        wait: false
      }
    case SAVE_DB_HIGHLIGHT:
      return {
        ...state,
        highlight: action.highlightList
      }
    default:
      return state;
   }
 };
 
 export default reducer;