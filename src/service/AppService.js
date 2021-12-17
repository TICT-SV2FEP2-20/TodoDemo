import { createStore } from 'redux';
import { TaskReducers } from './TaskReducers';

export const store = createStore(TaskReducers, { tasks: []});