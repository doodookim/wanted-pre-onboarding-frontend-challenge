import { combineReducers } from 'redux';
import toDos from './todoReducer';

const rootReducer = combineReducers({
  toDos,
});

export default rootReducer;
