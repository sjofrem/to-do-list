export class Project {
    constructor(name) {
      this._name = name;
      this._projectTasks = [];
    }

    get name() {
      return this._name;
    }
  
    set name(value) {
      if (value) {
        this._name = value;
      }
    }
  
    get projectTasks() {
      return this._projectTasks;
    }
  
    set projectTasks(value) {
      if (value) {
        this._projectTasks.push(value);
      }
    }
  }