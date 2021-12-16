export class TaskService {

  static store = {
    tasks: []
  };

  constructor() {}

  addTask(task) {
    return new Promise((resolve) => {
      
      const newStore = {
        tasks: [...TaskService.store.tasks, task]
      }

      TaskService.store = newStore;

      resolve(TaskService.store);
    });
  }

  updateTask(taskId, done) {
    return new Promise((resolve) => {

      const newStore = {
        tasks: TaskService.store.tasks.map(
          (task) => {
            if (task.id === taskId) {
              task.done = done;
            }
            return task;
          }
        )
      };
      
      TaskService.store = newStore;
      
      resolve(TaskService.store);
    });
  }

  deleteTask(taskId) {
    return new Promise((resolve) => {

      const newStore = {
        tasks: TaskService.store.tasks.filter(
          (task) => task.id !== taskId
        )
      };

      TaskService.store = newStore;
      
      resolve(TaskService.store);
    });
  }
}