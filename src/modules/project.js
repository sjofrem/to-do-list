export class Project {
    constructor(name) {
      this.name = name;
      this.tasks = [];
    }

    getName() {
      return this.name;
    }
  
    setName(name) {
      if (name) {
        this.name = name;
      }
    }
  
    getTasks() {
      return this.tasks;
    }
  
    setTasks(tasks) {
      this.tasks = tasks;
    }

    getTask(taskTitle) {
      return this.tasks.find((task) => task.getTitle() === taskTitle)
    }
  
    contains(taskTitle) {
      return this.tasks.some((task) => task.getTitle() === taskTitle)
    }
  
    addTask(newTask) {
      if (this.tasks.find((task) => task.getTitle() === newTask.name)) return
      this.tasks.push(newTask)
    }
  
    deleteTask(taskTitle) {
      this.tasks = this.tasks.filter((task) => task.getTitle() !== taskTitle)
    }
  }