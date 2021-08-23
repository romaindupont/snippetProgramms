import axios from 'axios';

import { 
  FETCH_CODES,
  SaveDbCodes,
  ADD_DB_CODE,
  addCode,
  CHANGE_DB_CODE,
  changeCode 
} from '../actions';

const codes = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_CODES:
      {
        axios.get('/codes',
          {
            baseURL: 'http://localhost:5000/',
          })
          .then((response) => {
            for (let i = 0 ; i < response.data.codesList.length ; i++) {
              let category = JSON.parse(response.data.codesList[i].category);
              let codes = response.data.codesList[i];
              let newCode = {...codes, category};
              store.dispatch(SaveDbCodes(newCode))
            } 
          })
          .catch((error) => {
            console.error('Error', error);
          });
        break;
      }
    case ADD_DB_CODE:
      {
        const state = store.getState();
        axios.post('/addCode',
        {
          titre: action.titre,
          description: action.description,
          code: action.code,
          skill_id: action.skill_id
        },
        {
          baseURL: 'http://localhost:5000/',
        })
        .then((response) => {
          const changeSkill = state.leftMenu.skill.filter((skills) => skills.id === parseInt(response.data.codeJustCreate.id));
          store.dispatch(addCode(
            response.data.codeJustCreate.id,
            response.data.codeJustCreate.titre,
            response.data.codeJustCreate.description,
            response.data.codeJustCreate.skill_id,
            response.data.codeJustCreate.code,
            changeSkill[0].name,
            changeSkill[0].color
          ));
        }) 
        .catch((error) => {
          console.error('Error', error);
        });
      break;
      }
    case CHANGE_DB_CODE:
      {
        const state = store.getState();
        axios.put(`/codes/update/${action.id}`,
        {
          titre: action.titre,
          description: action.description,
          code: action.code,
          skill_id: action.skill_id
        },
        {
          baseURL: 'http://localhost:5000/',
        })
        .then((response) => {
          const changeSkill = state.leftMenu.skill.filter((skills) => skills.id === parseInt(action.skill_id));
          store.dispatch(changeCode(
            parseInt(state.MenuTitreCode.id),
            action.titre,
            action.description,
            action.skill_id,
            action.code,
            changeSkill[0].name,
            changeSkill[0].color
          ));
        })
        .catch((error) => {
          console.error('Error', error);
        });
      break;
      }
    default:
      next(action);
  }
};

export default codes;