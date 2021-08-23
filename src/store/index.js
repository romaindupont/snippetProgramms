import { createStore, compose, applyMiddleware } from 'redux';
import skill from '../middlewares/skill';
import codes from '../middlewares/codes';
// == Import : local
import reducer from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(skill, codes),
));

export default store;