import { ADD_TASK, UPDATE_TASK, DELETE_TASK } from './TaskActions';

const initialState = {
  tasks: []
}

export const TaskReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK: 
      return {
        tasks: [...TaskService.store.tasks, task]
      };
    case UPDATE_TASK:
      return {
        tasks: TaskService.store.tasks.map(
          (task) => {
            if (task.id === taskId) {
              task.done = done;
            }
            return task;
          }
        )
      };
    case DELETE_TASK:
      return {
        tasks: TaskService.store.tasks.filter(
          (task) => task.id !== taskId
        )
      };
    default: 
      return state;
  }
}