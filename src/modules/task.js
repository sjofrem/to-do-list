
export class Task{
    constructor(title, dueDate, priority){
        this.title = title;
        this.dueDate = dueDate;
        this.priority = priority;
        this.status = false;
    }

    getTitle(){
        return this.title;
    }

    setTitle(value){
        if(value){
            this.title = value;
        }
    }

    getDueDate(){
        return this.dueDate;
    }

    setDueDate(value){
        if(value){
            this.dueDate = value;
        }
    }

    getPriority(){
        return this.priority;
    }

    setPriority(value){
        if(value){
            this.priority = value;
        }
    }

    getStatus(){
        return this.status;
    }

    changeStatus(){
        this.status = !this.status;
    }
    
}