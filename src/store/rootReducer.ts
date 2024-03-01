import { combineReducers } from 'redux';
import toDosReducer from './todoReducer';

const rootReducer = combineReducers({
  toDos: toDosReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
