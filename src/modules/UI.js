import { Project } from "./project";
import { Storage } from "./storage";
import { Task } from "./task";

export class UI{
    
    static loadPage(){
        this.initMobileMenuBtn();
        this.initProjectBtns();
        this.renderCustomProjectBtns();
        this.renderTodayContent();
        
    }

    //Event listeners
    static initMobileMenuBtn(){
        const btnNav = document.getElementById('btnNav');
        const nav = document.querySelector('.sideBar');
        btnNav.addEventListener('click', () =>{
            const isActive = nav.classList.contains('active');
            if(isActive){
                nav.classList.remove('active');
            }
            else{
                nav.classList.add('active');
            }
        });

    }

    static initProjectBtns(){
        const allTasks = document.getElementById('allTasksBtn');
        const today = document.getElementById('todayBtn');
        const week = document.getElementById('weekBtn');
        const createProject = document.getElementById('createProject');
        const closeProjectModal = document.getElementById('closeProjectModal');
        const closeNewTaskModal = document.getElementById('closeNewTaskModal');
        const closeEditTaskModal = document.getElementById('closeEditTaskModal');
        const addProjectForm = document.getElementById('addProjectForm');
        const newTaskForm = document.getElementById('newTaskForm');
        
        allTasks.addEventListener('click', () =>{
            const isActive = allTasks.classList.contains('sideBarBtn--active');
            if(!isActive){
                this.deactivateProjectBtns();
                allTasks.classList.add('sideBarBtn--active');

                const projectContent = document.querySelector('.projectContent');
                projectContent.innerHTML = '';
        
                const contentNavbar = document.createElement('div');
                contentNavbar.classList.add('contentNavbar');
        
                const projectTitle = document.createElement('h3');
                projectTitle.classList.add('currentProjectTitle');
                projectTitle.innerText = 'All Tasks';
                contentNavbar.appendChild(projectTitle);
                projectContent.appendChild(contentNavbar);
        
                const toDoListContainer = document.createElement('div');
                toDoListContainer.classList.add('toDoList');
                projectContent.appendChild(toDoListContainer);
                this.renderAllTasks();

                
            }
        });
        today.addEventListener('click', () =>{
            const isActive = today.classList.contains('sideBarBtn--active');
            if(!isActive){
                this.deactivateProjectBtns();
                today.classList.add('sideBarBtn--active');

                const projectContent = document.querySelector('.projectContent');
                projectContent.innerHTML = '';
        
                const contentNavbar = document.createElement('div');
                contentNavbar.classList.add('contentNavbar');
        
                const projectTitle = document.createElement('h3');
                projectTitle.classList.add('currentProjectTitle');
                projectTitle.innerText = 'Today';
                contentNavbar.appendChild(projectTitle);
                projectContent.appendChild(contentNavbar);
        
                const toDoListContainer = document.createElement('div');
                toDoListContainer.classList.add('toDoList');
                projectContent.appendChild(toDoListContainer);

                this.renderTodayTasks();
            }
        });
        week.addEventListener('click', () =>{
            const isActive = week.classList.contains('sideBarBtn--active');
            if(!isActive){
                this.deactivateProjectBtns();
                week.classList.add('sideBarBtn--active');

                const projectContent = document.querySelector('.projectContent');
                projectContent.innerHTML = '';
        
                const contentNavbar = document.createElement('div');
                contentNavbar.classList.add('contentNavbar');
        
                const projectTitle = document.createElement('h3');
                projectTitle.classList.add('currentProjectTitle');
                projectTitle.innerText = 'Week';
                contentNavbar.appendChild(projectTitle);
                projectContent.appendChild(contentNavbar);
        
                const toDoListContainer = document.createElement('div');
                toDoListContainer.classList.add('toDoList');
                projectContent.appendChild(toDoListContainer);

                this.renderWeekTasks();
            }
        });
        createProject.addEventListener('click', () =>{
            const createProjectModal = document.getElementById('createProjectModal');
            const overlay = document.getElementById('overlay');

            overlay.classList.add('active');
            createProjectModal.classList.add('active');
        });
        closeProjectModal.addEventListener('click', () =>{
            this.hideCreateProjectModal();
        });
        closeNewTaskModal.addEventListener('click', () =>{
            this.hideNewTaskModal();
        })
        closeEditTaskModal.addEventListener('click', () =>{
            this.hideEditTaskModal();
        })
        addProjectForm.addEventListener('submit', (e) =>{
            e.preventDefault();
            const title = document.getElementById('projectTitle').value;

            this.hideCreateProjectModal();

            const newProject = new Project(title);
            Storage.addProject(newProject);

            addProjectForm.reset();

            this.renderCustomProjectBtns();
        });
        newTaskForm.addEventListener('submit', (e) =>{
            e.preventDefault();
            const title = document.getElementById('taskTitle').value;
            const dueDate = document.getElementById('dueDate').value;
            const priorirty = document.querySelector('input[name="priority"]:checked').value;
            const projectTitle = document.querySelector('.currentProjectTitle').textContent;


            this.hideNewTaskModal();

            const newTask = new Task(title, dueDate, priorirty, projectTitle);
            Storage.addTask(projectTitle,newTask);
            this.clearTasks();

            const tasks = Storage.getToDoList().getProject(projectTitle).getTasks();
            this.renderTasks(tasks, 'customTasks');

            newTaskForm.reset();

        });
    }
    static clearTasks(){
        const toDoListSection = document.querySelector('.toDoList');
        toDoListSection.innerHTML = '';
    }

    static initNewTaskBtn(){
        const newTaskBtn = document.getElementById('newTaskBtn');
        newTaskBtn.addEventListener('click', () => {
            const newTaskModal = document.getElementById('newTaskModal');
            const overlay = document.getElementById('overlay');

            overlay.classList.add('active');
            newTaskModal.classList.add('active');
        });
    }

    static hideCreateProjectModal(){
        const createProjectModal = document.getElementById('createProjectModal');
        const overlay = document.getElementById('overlay');

        overlay.classList.remove('active');
        createProjectModal.classList.remove('active');
    }

    static hideNewTaskModal(){
        const newTaskModal = document.getElementById('newTaskModal');
        const overlay = document.getElementById('overlay');

        overlay.classList.remove('active');
        newTaskModal.classList.remove('active');
    }

    static hideEditTaskModal(){
        const editTaskModal = document.getElementById('editTaskModal');
        const overlay = document.getElementById('overlay');

        overlay.classList.remove('active');
        editTaskModal.classList.remove('active');
    }

    static createCustomProjectBtn(title){
        const newProjectButton = document.createElement('button');
        const divContent = document.createElement('div');
        const icon = document.createElement('span');
        const text = document.createElement('span');
        const divClose = document.createElement('div');
        const close = document.createElement('span');

        newProjectButton.classList.add('sideBarBtn');
        newProjectButton.classList.add('customProjectBtn');

        icon.classList.add('material-icons');
        icon.innerText = 'assignment';
        divContent.appendChild(icon);

        text.classList.add('projectTitle');
        text.innerText = title;
        divContent.appendChild(text);

        close.classList.add('material-icons');
        close.classList.add('deleteProjectBtn');
        close.innerText = 'close';
        divClose.appendChild(close);

        close.addEventListener('click', () => {
            const currentProject = document.querySelector('.currentProjectTitle').textContent;
            Storage.deleteProject(title);
            this.renderCustomProjectBtns();
            if(currentProject == title){
                this.renderTodayContent();
            }
        });

        newProjectButton.appendChild(divContent);
        newProjectButton.appendChild(divClose);
        return newProjectButton;
    }

    static renderProjectContent(title){
        const projectContent = document.querySelector('.projectContent');
        projectContent.innerHTML = '';

        const contentNavbar = document.createElement('div');
        contentNavbar.classList.add('contentNavbar');

        const projectTitle = document.createElement('h3');
        projectTitle.classList.add('currentProjectTitle');
        projectTitle.innerText = title;
        contentNavbar.appendChild(projectTitle);

        const newTaskBtn = document.createElement('button');
        newTaskBtn.setAttribute('id','newTaskBtn');

        const divText = document.createElement('div');
        const text = document.createElement('p');
        text.innerText = 'New Task';
        divText.appendChild(text);
        newTaskBtn.appendChild(divText);

        const divImg = document.createElement('div');
        const img = document.createElement('span');
        img.classList.add('material-icons');
        img.innerText = 'add';
        divImg.appendChild(img);
        newTaskBtn.appendChild(divImg);
        contentNavbar.appendChild(newTaskBtn);
        projectContent.appendChild(contentNavbar);

        const toDoListContainer = document.createElement('div');
        toDoListContainer.classList.add('toDoList');
        projectContent.appendChild(toDoListContainer);

        this.initNewTaskBtn();
        this.clearTasks();
        const tasks = Storage.getToDoList().getProject(title).getTasks();
        this.renderTasks(tasks, 'customTasks');
    }

    static renderAllTasks(){
        const projects = Storage.getToDoList().projects;
        let allTasksList = [];
        this.clearTasks();
        for (const projectIndex in projects){
            const tasks = projects[projectIndex].tasks;
            for(const taskIndex in tasks){
                const task = tasks[taskIndex];
                allTasksList.push(task);
            }
        }
        // Sort tasks by date
        allTasksList.sort(function compare(a, b) {
            var dateA = new Date(a.getDateFormatted());
            var dateB = new Date(b.getDateFormatted());
            return dateA - dateB;
        });
        this.renderTasks(allTasksList, 'allTasks');
    }
    static renderTodayContent(){
        const today = document.getElementById('todayBtn');
        const isActive = today.classList.contains('sideBarBtn--active');
        if(!isActive){
            this.deactivateProjectBtns();
            today.classList.add('sideBarBtn--active');

            const projectContent = document.querySelector('.projectContent');
            projectContent.innerHTML = '';
    
            const contentNavbar = document.createElement('div');
            contentNavbar.classList.add('contentNavbar');
    
            const projectTitle = document.createElement('h3');
            projectTitle.classList.add('currentProjectTitle');
            projectTitle.innerText = 'Today';
            contentNavbar.appendChild(projectTitle);
            projectContent.appendChild(contentNavbar);
    
            const toDoListContainer = document.createElement('div');
            toDoListContainer.classList.add('toDoList');
            projectContent.appendChild(toDoListContainer);

            this.renderTodayTasks();
        }
    }
    static renderTodayTasks(){
        const projects = Storage.getToDoList().projects;
        let todayTasksList = [];
        this.clearTasks();
        for (const projectIndex in projects){
            const tasks = projects[projectIndex].getTasksToday();
            for(const taskIndex in tasks){
                const task = tasks[taskIndex];
                todayTasksList.push(task);
            }
        }
        this.renderTasks(todayTasksList, 'todayTasks');
    }

    static renderWeekTasks(){
        const projects = Storage.getToDoList().projects;
        let weekTasksList = [];
        this.clearTasks();
        for (const projectIndex in projects){
            const tasks = projects[projectIndex].getTasksWeek();
            for(const taskIndex in tasks){
                const task = tasks[taskIndex];
                weekTasksList.push(task);
            }
        }
        // Sort tasks by date
        weekTasksList.sort(function compare(a, b) {
            var dateA = new Date(a.getDateFormatted());
            var dateB = new Date(b.getDateFormatted());
            return dateA - dateB;
        });
        this.renderTasks(weekTasksList, 'weekTasks');
    }

    static renderTasks(tasks, type){
        const toDoListSection = document.querySelector('.toDoList');
        for(const index in tasks){
            const task = tasks[index];

            const taskItem = document.createElement('div');
            taskItem.classList.add('taskItem');

            const checkbox = document.createElement('button');
            checkbox.classList.add('checkBox');
            if(task.status){
                const check = document.createElement('span');
                check.classList.add('material-icons');
                check.classList.add('check');
                check.innerText = 'done';
                checkbox.appendChild(check);
                taskItem.style.opacity = "0.6";
            }
            taskItem.appendChild(checkbox);

            const taskContainer = document.createElement('div');
            taskContainer.classList.add('taskContainer');

            const taskInfo = document.createElement('div');
            taskInfo.classList.add('taskInfo');

            const taskTitle = document.createElement('h4');
            taskTitle.innerText = task.title;
            taskInfo.appendChild(taskTitle);

            const taskDetails = document.createElement('div');
            taskDetails.classList.add('taskItem--details');

            const priority = document.createElement('div');
            priority.classList.add('priority');
            priority.setAttribute('id',`priority${task.priority}`);
            taskDetails.appendChild(priority);

            const dueDate = document.createElement('div');
            dueDate.classList.add('dueDate');
            dueDate.innerText = ` | ${task.getDateUI()}`;
            taskDetails.appendChild(dueDate);
            taskInfo.appendChild(taskDetails);
            taskContainer.appendChild(taskInfo);

            const taskOptions = document.createElement('div');
            taskOptions.classList.add('taskOptions');

            const editBtn = document.createElement('button');
            editBtn.classList.add('taskOptionBtn');

            const editImg = document.createElement('span');
            editImg.classList.add('material-icons');
            editImg.innerText = 'edit';
            editBtn.appendChild(editImg);
            taskOptions.appendChild(editBtn);

            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('taskOptionBtn');

            const deleteImg = document.createElement('span');
            deleteImg.classList.add('material-icons');
            deleteImg.innerText = 'delete';
            deleteBtn.appendChild(deleteImg);
            taskOptions.appendChild(deleteBtn);
            taskContainer.appendChild(taskOptions);
            taskItem.appendChild(taskContainer);
            toDoListSection.appendChild(taskItem);

            checkbox.addEventListener('click', () => {
                Storage.changeStatus(task.projectTitle, task.title);
                const check = checkbox.querySelector('.check');
                if(check){
                    checkbox.removeChild(check);
                    taskItem.style.opacity = "1";
                }
                else{
                    const check = document.createElement('span');
                    check.classList.add('material-icons');
                    check.classList.add('check');
                    check.innerText = 'done';
                    checkbox.appendChild(check);
                    taskItem.style.opacity = "0.6";
                }
            });
            
            editBtn.addEventListener('click', () => {
                const editTaskModal = document.getElementById('editTaskModal');
                const overlay = document.getElementById('overlay');
                const editTaskForm = document.getElementById('editTaskForm');

                const newTaskTitle = document.getElementById('newTaskTitle');
                const newDueDate = document.getElementById('newDueDate');
                const newPriority = document.getElementById(`np${task.priority}`);

                newTaskTitle.value = task.title;
                newDueDate.value = task.dueDate;
                newPriority.checked = true;

                overlay.classList.add('active');
                editTaskModal.classList.add('active');


                editTaskForm.addEventListener('submit', this.updateTask.bind(this));
                editTaskForm.task = task;
                editTaskForm.projectTitle = task.projectTitle;
                editTaskForm.type = type;
                
            });

            deleteBtn.addEventListener('click', () => {
                Storage.deleteTask(task.projectTitle, task.title);
                this.clearTasks()
                if(type == 'allTasks'){
                    this.renderAllTasks();
                }
                else if(type == 'todayTasks'){
                    this.renderTodayTasks();
                }
                else if(type == 'weekTasks'){
                    this.renderWeekTasks();
                }
                else{
                    const tasks = Storage.getToDoList().getProject(task.projectTitle).getTasks();
                    this.renderTasks(tasks, type);
                }
            });

        }
    }

    static updateTask(event){
        event.preventDefault();
        const editTaskForm = document.getElementById('editTaskForm');
        const priority = document.querySelector('input[name="newPriority"]:checked').value;
        const newTaskTitle = document.getElementById('newTaskTitle');
        const newDueDate = document.getElementById('newDueDate');

        Storage.changeTaskPriority(event.currentTarget.projectTitle, event.currentTarget.task.title, priority);
        Storage.changeTaskDueDate(event.currentTarget.projectTitle, event.currentTarget.task.title, newDueDate.value);
        Storage.changeTaskTitle(event.currentTarget.projectTitle, event.currentTarget.task.title, newTaskTitle.value);

        this.hideEditTaskModal();

        editTaskForm.removeEventListener('submit', this.updateTask);
        this.clearTasks();
        if(event.currentTarget.type == 'allTasks'){
            this.renderAllTasks();
        }
        else if(event.currentTarget.type == 'todayTasks'){
            this.renderTodayTasks();
        }
        else if(event.currentTarget.type == 'weekTasks'){
            this.renderWeekTasks();
        }
        else{
            const tasks = Storage.getToDoList().getProject(event.currentTarget.projectTitle).getTasks();
            this.renderTasks(tasks, event.currentTarget.type);
        }

    }

    static renderCustomProjectBtns(){
        const customProjectsBtns = document.querySelector('.customProjectsBtns');
        const projects = Storage.getToDoList().getProjects();
        customProjectsBtns.innerHTML = "";

        for(const index in projects){
            const projectName = projects[index].name;
            this.createCustomProjectBtn(projectName);
            const newProjectButton = this.createCustomProjectBtn(projectName);
            customProjectsBtns.appendChild(newProjectButton);
        }
        const customsProjects = document.querySelectorAll('.customProjectBtn');
        customsProjects.forEach((projectBtn) => {
            projectBtn.addEventListener('click', () => {
                const title = projectBtn.querySelector('.projectTitle').textContent;
                const isActive = projectBtn.classList.contains('sideBarBtn--active');
                if(!isActive){
                    this.deactivateProjectBtns();
                    projectBtn.classList.add('sideBarBtn--active');
                    this.renderProjectContent(title);
                }
            });
        });
    }

    static deactivateProjectBtns(){
        const allTasks = document.getElementById('allTasksBtn');
        const today = document.getElementById('todayBtn');
        const week = document.getElementById('weekBtn');
        const customsProjects = document.querySelectorAll('.customProjectBtn');

        if(allTasks.classList.contains('sideBarBtn--active')){
            allTasks.classList.remove('sideBarBtn--active');
        }
        else if(today.classList.contains('sideBarBtn--active')){
            today.classList.remove('sideBarBtn--active');
        }
        else if(week.classList.contains('sideBarBtn--active')){
            week.classList.remove('sideBarBtn--active');
        }
        else{
            customsProjects.forEach(function(projectBtn){
                if(projectBtn.classList.contains('sideBarBtn--active')){
                    projectBtn.classList.remove('sideBarBtn--active');
                }
            });
        }
    }

}