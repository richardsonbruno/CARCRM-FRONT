import { combineReducers } from 'redux'

import loadingReducer from './loading.reducer';
import notifyReducer from './notify.reducer';

const rootReducers = combineReducers({
  loadingReducer,
  notifyReducer,
});

export default rootReducers;