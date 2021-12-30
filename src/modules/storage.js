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

    static deleteTask(projectName, taskName) {
        const toDoList = Storage.getToDoList();
        toDoList.getProject(projectName).deleteTask(taskName);
        Storage.saveToDoList(toDoList);
    }
}