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
      console.log(task, TaskService.store);
      resolve(TaskService.store);
    });
  }
}