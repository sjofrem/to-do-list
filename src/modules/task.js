import { format } from "date-fns";

export class Task{
    constructor(title, dueDate, priority, projectTitle){
        this.title = title;
        this.dueDate = dueDate;
        this.priority = priority;
        this.status = false;
        this.projectTitle = projectTitle;
    }

    getTitle(){
        return this.title;
    }

    setTitle(title){
        if(title){
            this.title = title;
        }
    }

    getDueDate(){
        return this.dueDate;
    }

    setDueDate(dueDate){
        if(dueDate){
            this.dueDate = dueDate;
        }
    }

    getPriority(){
        return this.priority;
    }

    setPriority(priorirty){
        if(priorirty){
            this.priority = priorirty;
        }
    }

    getStatus(){
        return this.status;
    }

    changeStatus(){
        this.status = !this.status;
    }

    getProjectTitle(){
        return this.projectTitle;
    }

    setProjectTitle(projectTitle){
        if(projectTitle){
            this.projectTitle = projectTitle;
        }
    }

    getDateFormatted() {
        const day = this.dueDate.split('-')[2];
        const month = this.dueDate.split('-')[1];
        const year = this.dueDate.split('-')[0];
        return `${year}/${month}/${day}`;
    }

    getDateUI(){
        const date = new Date(this.getDateFormatted());
        return format(date, 'PPP');
    }
    
}