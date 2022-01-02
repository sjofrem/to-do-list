import { toDoList } from "./toDoList";
import { Project } from "./project";
import { Task } from "./task";
export class Storage{

    static saveToDoList(data) {
        localStorage.setItem('toDoList', JSON.stringify(data));
    }

    static getToDoList(){
        const storedList = localStorage.getItem('toDoList');
        if(storedList){
            const list = Object.assign(
                new toDoList(),
                JSON.parse(localStorage.getItem('toDoList'))
            );
            list.setProjects(
                list
                  .getProjects()
                  .map((project) => Object.assign(new Project(), project))
                );
          
            list.getProjects()
                .forEach((project) =>
                  project.setTasks(
                    project.getTasks().map((task) => Object.assign(new Task(), task))
                  )
                );
          
            return list;
        }
        const list = new toDoList();
        localStorage.setItem('toDoList',JSON.stringify(list));

        return list;
    }

    static addProject(project){
        const list = this.getToDoList();
        list.addProject(project);
        this.saveToDoList(list);
    }

    static deleteProject(projectName) {
        const toDoList = Storage.getToDoList();
        toDoList.deleteProject(projectName);
        Storage.saveToDoList(toDoList);
    }

    static addTask(projectName, newTask){
        const toDoList = Storage.getToDoList();
        toDoList.getProject(projectName).addTask(newTask);
        Storage.saveToDoList(toDoList);
    }

    static deleteTask(projectName, taskTitle) {
        const toDoList = Storage.getToDoList();
        toDoList.getProject(projectName).deleteTask(taskTitle);
        Storage.saveToDoList(toDoList);
    }

    static changeTaskTitle(projectName, taskTitle, newTaskTitle){
        const toDoList = Storage.getToDoList();
        toDoList.getProject(projectName).getTask(taskTitle).setTitle(newTaskTitle);
        Storage.saveToDoList(toDoList);
    }

    static changeTaskDueDate(projectName, taskTitle, newDueDate){
        const toDoList = Storage.getToDoList();
        toDoList.getProject(projectName).getTask(taskTitle).setDueDate(newDueDate);
        Storage.saveToDoList(toDoList);
    }

    static changeTaskPriority(projectName, taskTitle, newPriority){
        const toDoList = Storage.getToDoList();
        toDoList.getProject(projectName).getTask(taskTitle).setPriority(newPriority);
        Storage.saveToDoList(toDoList);
    }

    static changeStatus(projectName, taskTitle){
        const toDoList = Storage.getToDoList();
        toDoList.getProject(projectName).getTask(taskTitle).changeStatus();
        Storage.saveToDoList(toDoList);
    }
}