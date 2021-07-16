// == Import : npm
import { combineReducers } from 'redux';

// == Import : local
import leftMenu from './leftMenu';

const rootReducer = combineReducers({
  leftMenu,
});

export default rootReducer;

