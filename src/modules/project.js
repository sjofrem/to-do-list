export class Project {
    constructor(name) {
      this.name = name;
      this.projectTasks = [];
    }

    getName() {
      return this.name;
    }
  
    setName(value) {
      if (value) {
        this.name = value;
      }
    }
  
    getProjectTasks() {
      return this.projectTasks;
    }
  
    setProjectTasks(value) {
      if (value) {
        this.projectTasks.push(value);
      }
    }
  }