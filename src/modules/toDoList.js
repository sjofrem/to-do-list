import { Task } from "./task";
import { Project } from "./project";

export class toDoList{
    constructor(){
        this.projects = [];
    }

    setProjects(projects) {
        this.projects = projects;
    }
    
    getProjects() {
        return this.projects;
    }
    
    getProject(projectName) {
        return this.projects.find((project) => project.name === projectName);
    }
    
    contains(projectName) {
        return this.projects.some((project) => project.name === projectName);
    }
    
    addProject(newProject) {
        return this.projects.push(newProject);
    }

    deleteProject(projectName) {
        const projectToDelete = this.projects.find(
          (project) => project.name === projectName
        )
        this.projects.splice(this.projects.indexOf(projectToDelete), 1)
      }

}