import { combineReducers } from 'redux'

import loadingReducer from './loading.reducer';
import notifyReducer from './notify.reducer';
import alertReducer from './alert.reducer';
import authReducer from './auth.reducer';

const rootReducers = combineReducers({
  loadingReducer,
  notifyReducer,
  alertReducer,
  authReducer
});

export default rootReducers;