import { createStore, combineReducers } from 'redux';
import { TaskReducers } from './TaskReducers';

const rootReducer = combineReducers(
  {
    taskReducer: TaskReducers
  }
)
export const store = createStore(rootReducer);
