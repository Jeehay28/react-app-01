import { combineReducers } from 'redux';
import childServiceSlice from './childServiceSlice';

const rootReducer = combineReducers({
  childService : childServiceSlice,
  
});

export default rootReducer;