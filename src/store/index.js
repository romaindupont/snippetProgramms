import { createStore, compose, applyMiddleware } from 'redux';
import skill from '../middlewares/skill';
import codes from '../middlewares/codes';
import highlight from '../middlewares/highlight';
import reducer from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(skill, codes, highlight),
));

export default store;