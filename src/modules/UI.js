import { Project } from "./project";

export class UI{
    
    static loadPage(){
        this.initMobileMenuBtn();
        this.initProjectBtns();
        this.initCustomProjectBtns();
        
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
        const addProjectForm = document.getElementById('addProjectForm');
        
        allTasks.addEventListener('click', () =>{
            const isActive = allTasks.classList.contains('sideBarBtn--active');
            if(!isActive){
                this.deactivateProjectBtns();
                allTasks.classList.add('sideBarBtn--active');
            }
        });
        today.addEventListener('click', () =>{
            const isActive = today.classList.contains('sideBarBtn--active');
            if(!isActive){
                this.deactivateProjectBtns();
                today.classList.add('sideBarBtn--active');
            }
        });
        week.addEventListener('click', () =>{
            const isActive = week.classList.contains('sideBarBtn--active');
            if(!isActive){
                this.deactivateProjectBtns();
                week.classList.add('sideBarBtn--active');
            }
        });
        createProject.addEventListener('click', () =>{
            const createProjectModal = document.getElementById('createProjectModal');
            const overlay = document.getElementById('overlay');

            overlay.classList.add('active');
            createProjectModal.classList.add('active');
        });
        closeProjectModal.addEventListener('click', () =>{
                this.hideCreateProjectModal()
        });
        addProjectForm.addEventListener('submit', (e) =>{
            e.preventDefault();
            const customProjectsBtns = document.querySelector('.customProjectsBtns');
            let title = document.getElementById('projectTitle').value;

            this.hideCreateProjectModal();

            addProjectForm.reset();
            const newProject = new Project(title);

            const newProjectButton = this.createCustomProjectBtn(title);
            customProjectsBtns.appendChild(newProjectButton);

            this.initCustomProjectBtns();
        });
    }

    static hideCreateProjectModal(){
        const createProjectModal = document.getElementById('createProjectModal');
        const overlay = document.getElementById('overlay');

        overlay.classList.remove('active');
        createProjectModal.classList.remove('active');
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

        text.innerText = title;
        divContent.appendChild(text);

        close.classList.add('material-icons');
        close.classList.add('deleteProjectBtn');
        close.innerText = 'close';
        divClose.appendChild(close);

        newProjectButton.appendChild(divContent);
        newProjectButton.appendChild(divClose);
        return newProjectButton;
    }

    static initCustomProjectBtns(){
        const customsProjects = document.querySelectorAll('.customProjectBtn');
        customsProjects.forEach((projectBtn) => {
            projectBtn.addEventListener('click', () => {
                const isActive = projectBtn.classList.contains('sideBarBtn--active');
                if(!isActive){
                    this.deactivateProjectBtns();
                    projectBtn.classList.add('sideBarBtn--active');
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
    // Create content

}