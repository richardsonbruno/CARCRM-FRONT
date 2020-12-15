import { combineReducers } from 'redux'

import loadingReducer from './loading.reducer';
import notifyReducer from './notify.reducer';
import alertReducer from './alert.reducer';

const rootReducers = combineReducers({
  loadingReducer,
  notifyReducer,
  alertReducer
});

export default rootReducers;