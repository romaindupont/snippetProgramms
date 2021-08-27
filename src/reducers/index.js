import { combineReducers } from 'redux';

import leftMenu from './leftMenu';
import MenuTitreCode from './MenuTitreCode';

const rootReducer = combineReducers({
  leftMenu,
  MenuTitreCode
});

export default rootReducer;

