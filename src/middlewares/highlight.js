import axios from 'axios';

import { FETCH_HIGHLIGHT, SaveDbHighLight } from '../actions';

const highlight = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_HIGHLIGHT:
      {
        axios.get('/highlight',
          {
            baseURL: 'http://localhost:5000/',
          })
          .then((response) => {
            store.dispatch(SaveDbHighLight(response.data.highlightList))
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

export default highlight;