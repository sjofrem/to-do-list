import { toDoList } from "./toDoList";
export class Storage{

    static saveToDoList(data) {
        localStorage.setItem('toDoList', JSON.stringify(data))
    }

    static getToDoList(){
        const storedList = localStorage.getItem('toDoList');
        if(storedList){
            const list = Object.assign(
                new toDoList(),
                JSON.parse(localStorage.getItem('toDoList'))
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
        const todoList = Storage.getToDoList()
        todoList.deleteProject(projectName)
        Storage.saveToDoList(todoList)
      }
}