import axios from 'axios';

import { FETCH_SKILLS, SaveDbSkills, FETCH_CODES, SaveDbCodes } from '../actions';

const ajax = (store) => (next) => (action) => {
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
    case FETCH_CODES:
      {
        axios.get('/codes',
          {
            baseURL: 'http://localhost:5000/',
          })
          .then((response) => {
/*             console.log(response.data.codesList)
            for (let i = 0 ; i < response.data.codesList.length ; i++) {
              const newJson = JSON.parse(response.data.codesList[i].category) */
              store.dispatch(SaveDbCodes(response.data.codesList));

        /*     } */
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

export default ajax;