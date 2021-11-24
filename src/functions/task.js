
export class Task{
    constructor(title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    get title(){
        return this.title;
    }

    set title(newTitle){
        if(newTitle){
            this.title = newTitle;
        }
    }

    get description(){
        return this.description;
    }

    set description(newDescription){
        if(newDescription){
            this.description = newDescription;
        }
    }

    get dueDate(){
        return this.dueDate;
    }

    set dueDate(newDueDate){
        if(newDueDate){
            this.dueDate = newDueDate;
        }
    }

    get priority(){
        return this.priority;
    }

    set priority(newPriority){
        if(newPriority){
            this.priority = newPriority;
        }
    }
    
}