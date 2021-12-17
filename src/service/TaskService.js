import { store } from './appService';
import { addTask as addTodo, 
         deleteTask as deleteTodo, 
         updateTask as updateTodo } from './TaskActions';

export class TaskService {
  constructor() {}

  addTask(task) {
    store.dispatch(addTodo(task));
  }

  updateTask(taskId, done) {
    store.dispatch(updateTodo(id, done));
  }

  deleteTask(taskId) {
    store.dispatch(deleteTodo(id));
  }

  getTasks() {
    return store.getState().tasks;
  }
}