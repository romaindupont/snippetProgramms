import { SAVE_ID, CHANGE_CODE, ADD_CODE, SAVE_DB_CODES } from '../actions';

const initialState = {
  codes : [
   {
    id: 1,
    titre: 'faire un rond',
    description: "voilà comment faire un rond",
    category: 
      {
      id: 6,
      name: 'css',
      color: '#238f94'
      },
    code :".cadre {<br>width: 95%;<br>height: 100px;<br>border: 4px solid var(--theme-page-background-hover);<br>margin: 0 auto;<br>position: relative;<br>border-radius: 5px;<br>cursor: pointer;<br>margin-bottom: 0.5rem;<br>display: flex;<br>flex-direction: column;<br>&:hover {<br>border: 1px solid var(--theme-page-background);<br>}<br>&:hover > .cadre-color {<br>width: 100%;<br>z-index: 1;<br>}<br>&-color {<br>height: 100%;<br>display: block;<br>width: 10px;<br>border: none;<br>border-radius: 10px;<br>position: absolute;<br>left: -5px;<br>transition: width 500ms ease-in-out;<br>}<br>&-titre {<br>margin: 0;<br>font-size: 1rem;<br>text-align: center;<br>z-index: 3;<br>}<br>&-description {<br>margin-left: 1rem;<br>font-size: 0.8rem;<br>z-index: 3;<br>}}"
   },
   {
    id: 2,
    titre: 'faire un triangle',
    description: "voilà comment faire un triangle",
    category: 
      {
      id: 6,
      name: 'css',
      color: '#238f94'
      },
    code :".cadre {\nwidth: 95%;\nheight: 100px;\nborder: 4px solid var(--theme-page-background-hover);\n}"
   },
   {
    id: 3,
    titre: 'fonction fonctionne',
    description: "et une fonction qui fonctionne",
    category: 
      {
      id: 2,
      name: 'javascript',
      color: '#ffff00'
      },
    code :""
   },
   {
    id: 4,
    titre: 'faire un rond',
    description: "voilà comment faire un rond",
    category: 
      {
      id: 6,
      name: 'css',
      color: '#238f94'
      },
    code :""
   },
   {
    id: 5,
    titre: 'faire un rond petit',
    description: "voilà comment faire un rond pas rond",
    category: 
      {
      id: 6,
      name: 'css',
      color: '#238f94'
      },
    code :""
   },
   {
    id: 6,
    titre: 'faire un rond',
    description: "voilà comment faire un rond",
    category: 
      {
      id: 5,
      name: 'sql',
      color: '#313f88'
      },
    code :""
   },
   {
    id: 7,
    titre: 'faire un rond petit',
    description: "voilà comment faire un rond pas rond",
    category: 
      {
      id: 7,
      name: 'html',
      color: '#37ec7f'
      },
    code :""
   }
  ],
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
        codes: action.codesList,
        wait: false
      }
    default:
      return state;
   }
 };
 
 export default reducer;