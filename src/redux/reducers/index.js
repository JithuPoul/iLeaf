import {combineReducers} from 'redux';
import saveReducer from './saveReducer';
const reducers = combineReducers({
  saveReducer: saveReducer,
});

export default reducers;
