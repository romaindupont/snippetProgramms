// == Import : npm
import { combineReducers } from 'redux';

// == Import : local
import leftMenu from './leftMenu';
import MenuTitreCode from './MenuTitreCode';

const rootReducer = combineReducers({
  leftMenu,
  MenuTitreCode
});

export default rootReducer;

