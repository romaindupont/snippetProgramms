import axios from 'axios';

import {
  FETCH_SKILLS,
  SaveDbSkills,
  ADD_DB_SKILL,
  addSkill,
  MODIFY_DB_SKILL,
  modifySkill
} from '../actions';

const skill = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_SKILLS:
      {
        axios.get('/category',
          {
            baseURL: 'http://localhost:5000/',
          })
          .then((response) => {
            store.dispatch(SaveDbSkills(response.data.categoryList));
          })
          .catch((error) => {
            console.error('Error', error);
          });
        break;
      }
    case ADD_DB_SKILL: 
      {
        axios.post('/addSkill',
        {
          name: action.name,
          image: action.image,
          color: action.color,
          highlight_id: action.highlight_id
        },
        {
          baseURL: 'http://localhost:5000/',
        })
        .then((response) => {
          store.dispatch(addSkill(response.data.skillJustCreate.id,response.data.skillJustCreate.name,response.data.skillJustCreate.image,response.data.skillJustCreate.color));
        })
        .catch((error) => {
          console.error('Error', error);
        });
      break;
      }
    case MODIFY_DB_SKILL: 
      {
        const state = store.getState();
        axios.put(`/category/update/${state.leftMenu.id}`,
        {
          name: action.name,
          image: action.image,
          color: action.color,
          highlight_id: action.highlight_id
        },
        {
          baseURL: 'http://localhost:5000/',
        })
        .then((response) => {
          store.dispatch(modifySkill(state.leftMenu.id,action.name,action.image,action.color));
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

export default skill;