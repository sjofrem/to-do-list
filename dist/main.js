/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UI": () => (/* binding */ UI)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");
/* harmony import */ var _toDoList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDoList */ "./src/modules/toDoList.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ "./src/modules/storage.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task */ "./src/modules/task.js");





class UI{
    
    static loadPage(){
        this.initMobileMenuBtn();
        this.initProjectBtns();
        this.renderCustomProjectBtns();
        this.initNewTaskBtn();
        
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

            const newProject = new _project__WEBPACK_IMPORTED_MODULE_0__.Project(title);
            _storage__WEBPACK_IMPORTED_MODULE_2__.Storage.addProject(newProject);

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

            const newTask = new _task__WEBPACK_IMPORTED_MODULE_3__.Task(title, dueDate, priorirty);
            _storage__WEBPACK_IMPORTED_MODULE_2__.Storage.addTask(projectTitle,newTask);
            this.renderTasks(projectTitle);

            newTaskForm.reset();

        });
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
            _storage__WEBPACK_IMPORTED_MODULE_2__.Storage.deleteProject(title);
            this.renderCustomProjectBtns();
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
        this.renderTasks(title);
    }

    static renderTasks(projectName){
        const toDoListSection = document.querySelector('.toDoList');
        toDoListSection.innerHTML = '';
        const project = _storage__WEBPACK_IMPORTED_MODULE_2__.Storage.getToDoList().getProject(projectName).getTasks();
        for(const index in project){
            const task = project[index];

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
            dueDate.innerText = ` | ${task.dueDate}`;
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
                _storage__WEBPACK_IMPORTED_MODULE_2__.Storage.changeStatus(projectName, task.title);
                const check = document.querySelector('.check');
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
                editTaskForm.projectName = projectName;
                
            });

            deleteBtn.addEventListener('click', () => {
                _storage__WEBPACK_IMPORTED_MODULE_2__.Storage.deleteTask(projectName, task.title);
                this.renderTasks(projectName);
            });

        }
    }

    static updateTask(event){
        event.preventDefault();
        const editTaskForm = document.getElementById('editTaskForm');
        const priority = document.querySelector('input[name="newPriority"]:checked').value;
        const newTaskTitle = document.getElementById('newTaskTitle');
        const newDueDate = document.getElementById('newDueDate');

        _storage__WEBPACK_IMPORTED_MODULE_2__.Storage.changeTaskPriority(event.currentTarget.projectName, event.currentTarget.task.title, priority);
        _storage__WEBPACK_IMPORTED_MODULE_2__.Storage.changeTaskDueDate(event.currentTarget.projectName, event.currentTarget.task.title, newDueDate.value);
        _storage__WEBPACK_IMPORTED_MODULE_2__.Storage.changeTaskTitle(event.currentTarget.projectName, event.currentTarget.task.title, newTaskTitle.value);

        this.hideEditTaskModal();

        editTaskForm.removeEventListener('submit', this.updateTask);
        this.renderTasks(event.currentTarget.projectName);

    }

    static renderCustomProjectBtns(){
        const customProjectsBtns = document.querySelector('.customProjectsBtns');
        const projects = _storage__WEBPACK_IMPORTED_MODULE_2__.Storage.getToDoList().getProjects();
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
    // Create content

}

/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project)
/* harmony export */ });
class Project {
    constructor(name) {
      this.name = name;
      this.tasks = [];
    }

    getName() {
      return this.name;
    }
  
    setName(name) {
      if (name) {
        this.name = name;
      }
    }
  
    getTasks() {
      return this.tasks;
    }
  
    setTasks(tasks) {
      this.tasks = tasks;
    }

    getTask(taskTitle) {
      return this.tasks.find((task) => task.getTitle() === taskTitle)
    }
  
    contains(taskTitle) {
      return this.tasks.some((task) => task.getTitle() === taskTitle)
    }
  
    addTask(newTask) {
      if (this.tasks.find((task) => task.getTitle() === newTask.name)) return
      this.tasks.push(newTask)
    }
  
    deleteTask(taskTitle) {
      this.tasks = this.tasks.filter((task) => task.getTitle() !== taskTitle)
    }
  }

/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Storage": () => (/* binding */ Storage)
/* harmony export */ });
/* harmony import */ var _toDoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDoList */ "./src/modules/toDoList.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ "./src/modules/task.js");



class Storage{

    static saveToDoList(data) {
        localStorage.setItem('toDoList', JSON.stringify(data));
    }

    static getToDoList(){
        const storedList = localStorage.getItem('toDoList');
        if(storedList){
            const list = Object.assign(
                new _toDoList__WEBPACK_IMPORTED_MODULE_0__.toDoList(),
                JSON.parse(localStorage.getItem('toDoList'))
            );
            list.setProjects(
                list
                  .getProjects()
                  .map((project) => Object.assign(new _project__WEBPACK_IMPORTED_MODULE_1__.Project(), project))
                );
          
            list.getProjects()
                .forEach((project) =>
                  project.setTasks(
                    project.getTasks().map((task) => Object.assign(new _task__WEBPACK_IMPORTED_MODULE_2__.Task(), task))
                  )
                );
          
            return list;
        }
        const list = new _toDoList__WEBPACK_IMPORTED_MODULE_0__.toDoList();
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

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Task": () => (/* binding */ Task)
/* harmony export */ });

class Task{
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

/***/ }),

/***/ "./src/modules/toDoList.js":
/*!*********************************!*\
  !*** ./src/modules/toDoList.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toDoList": () => (/* binding */ toDoList)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/modules/task.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");



class toDoList{
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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/UI */ "./src/modules/UI.js");


_modules_UI__WEBPACK_IMPORTED_MODULE_0__.UI.loadPage();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbkZPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDL0M4QjtBQUNNOztBQUU3QjtBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7OztVQ25DQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTmtDOztBQUVsQyxvREFBVyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL1VJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy90YXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy90b0RvTGlzdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHsgdG9Eb0xpc3QgfSBmcm9tIFwiLi90b0RvTGlzdFwiO1xuaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gXCIuL3N0b3JhZ2VcIjtcbmltcG9ydCB7IFRhc2sgfSBmcm9tIFwiLi90YXNrXCI7XG5cbmV4cG9ydCBjbGFzcyBVSXtcbiAgICBcbiAgICBzdGF0aWMgbG9hZFBhZ2UoKXtcbiAgICAgICAgdGhpcy5pbml0TW9iaWxlTWVudUJ0bigpO1xuICAgICAgICB0aGlzLmluaXRQcm9qZWN0QnRucygpO1xuICAgICAgICB0aGlzLnJlbmRlckN1c3RvbVByb2plY3RCdG5zKCk7XG4gICAgICAgIHRoaXMuaW5pdE5ld1Rhc2tCdG4oKTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgLy9FdmVudCBsaXN0ZW5lcnNcbiAgICBzdGF0aWMgaW5pdE1vYmlsZU1lbnVCdG4oKXtcbiAgICAgICAgY29uc3QgYnRuTmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bk5hdicpO1xuICAgICAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZUJhcicpO1xuICAgICAgICBidG5OYXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcbiAgICAgICAgICAgIGNvbnN0IGlzQWN0aXZlID0gbmF2LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJyk7XG4gICAgICAgICAgICBpZihpc0FjdGl2ZSl7XG4gICAgICAgICAgICAgICAgbmF2LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBuYXYuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgc3RhdGljIGluaXRQcm9qZWN0QnRucygpe1xuICAgICAgICBjb25zdCBhbGxUYXNrcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbGxUYXNrc0J0bicpO1xuICAgICAgICBjb25zdCB0b2RheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheUJ0bicpO1xuICAgICAgICBjb25zdCB3ZWVrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlZWtCdG4nKTtcbiAgICAgICAgY29uc3QgY3JlYXRlUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGVQcm9qZWN0Jyk7XG4gICAgICAgIGNvbnN0IGNsb3NlUHJvamVjdE1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlUHJvamVjdE1vZGFsJyk7XG4gICAgICAgIGNvbnN0IGNsb3NlTmV3VGFza01vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlTmV3VGFza01vZGFsJyk7XG4gICAgICAgIGNvbnN0IGNsb3NlRWRpdFRhc2tNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZUVkaXRUYXNrTW9kYWwnKTtcbiAgICAgICAgY29uc3QgYWRkUHJvamVjdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkUHJvamVjdEZvcm0nKTtcbiAgICAgICAgY29uc3QgbmV3VGFza0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3VGFza0Zvcm0nKTtcbiAgICAgICAgXG4gICAgICAgIGFsbFRhc2tzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XG4gICAgICAgICAgICBjb25zdCBpc0FjdGl2ZSA9IGFsbFRhc2tzLmNsYXNzTGlzdC5jb250YWlucygnc2lkZUJhckJ0bi0tYWN0aXZlJyk7XG4gICAgICAgICAgICBpZighaXNBY3RpdmUpe1xuICAgICAgICAgICAgICAgIHRoaXMuZGVhY3RpdmF0ZVByb2plY3RCdG5zKCk7XG4gICAgICAgICAgICAgICAgYWxsVGFza3MuY2xhc3NMaXN0LmFkZCgnc2lkZUJhckJ0bi0tYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0b2RheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xuICAgICAgICAgICAgY29uc3QgaXNBY3RpdmUgPSB0b2RheS5jbGFzc0xpc3QuY29udGFpbnMoJ3NpZGVCYXJCdG4tLWFjdGl2ZScpO1xuICAgICAgICAgICAgaWYoIWlzQWN0aXZlKXtcbiAgICAgICAgICAgICAgICB0aGlzLmRlYWN0aXZhdGVQcm9qZWN0QnRucygpO1xuICAgICAgICAgICAgICAgIHRvZGF5LmNsYXNzTGlzdC5hZGQoJ3NpZGVCYXJCdG4tLWFjdGl2ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgd2Vlay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xuICAgICAgICAgICAgY29uc3QgaXNBY3RpdmUgPSB3ZWVrLmNsYXNzTGlzdC5jb250YWlucygnc2lkZUJhckJ0bi0tYWN0aXZlJyk7XG4gICAgICAgICAgICBpZighaXNBY3RpdmUpe1xuICAgICAgICAgICAgICAgIHRoaXMuZGVhY3RpdmF0ZVByb2plY3RCdG5zKCk7XG4gICAgICAgICAgICAgICAgd2Vlay5jbGFzc0xpc3QuYWRkKCdzaWRlQmFyQnRuLS1hY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNyZWF0ZVByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcbiAgICAgICAgICAgIGNvbnN0IGNyZWF0ZVByb2plY3RNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGVQcm9qZWN0TW9kYWwnKTtcbiAgICAgICAgICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3ZlcmxheScpO1xuXG4gICAgICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgY3JlYXRlUHJvamVjdE1vZGFsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICB9KTtcbiAgICAgICAgY2xvc2VQcm9qZWN0TW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcbiAgICAgICAgICAgIHRoaXMuaGlkZUNyZWF0ZVByb2plY3RNb2RhbCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgY2xvc2VOZXdUYXNrTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcbiAgICAgICAgICAgIHRoaXMuaGlkZU5ld1Rhc2tNb2RhbCgpO1xuICAgICAgICB9KVxuICAgICAgICBjbG9zZUVkaXRUYXNrTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcbiAgICAgICAgICAgIHRoaXMuaGlkZUVkaXRUYXNrTW9kYWwoKTtcbiAgICAgICAgfSlcbiAgICAgICAgYWRkUHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+e1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdFRpdGxlJykudmFsdWU7XG5cbiAgICAgICAgICAgIHRoaXMuaGlkZUNyZWF0ZVByb2plY3RNb2RhbCgpO1xuXG4gICAgICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QodGl0bGUpO1xuICAgICAgICAgICAgU3RvcmFnZS5hZGRQcm9qZWN0KG5ld1Byb2plY3QpO1xuXG4gICAgICAgICAgICBhZGRQcm9qZWN0Rm9ybS5yZXNldCgpO1xuXG4gICAgICAgICAgICB0aGlzLnJlbmRlckN1c3RvbVByb2plY3RCdG5zKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBuZXdUYXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT57XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrVGl0bGUnKS52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlRGF0ZScpLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgcHJpb3JpcnR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInByaW9yaXR5XCJdOmNoZWNrZWQnKS52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50UHJvamVjdFRpdGxlJykudGV4dENvbnRlbnQ7XG5cblxuICAgICAgICAgICAgdGhpcy5oaWRlTmV3VGFza01vZGFsKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVGFzayh0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpcnR5KTtcbiAgICAgICAgICAgIFN0b3JhZ2UuYWRkVGFzayhwcm9qZWN0VGl0bGUsbmV3VGFzayk7XG4gICAgICAgICAgICB0aGlzLnJlbmRlclRhc2tzKHByb2plY3RUaXRsZSk7XG5cbiAgICAgICAgICAgIG5ld1Rhc2tGb3JtLnJlc2V0KCk7XG5cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGluaXROZXdUYXNrQnRuKCl7XG4gICAgICAgIGNvbnN0IG5ld1Rhc2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3VGFza0J0bicpO1xuICAgICAgICBuZXdUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3VGFza01vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Rhc2tNb2RhbCcpO1xuICAgICAgICAgICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdmVybGF5Jyk7XG5cbiAgICAgICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICBuZXdUYXNrTW9kYWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN0YXRpYyBoaWRlQ3JlYXRlUHJvamVjdE1vZGFsKCl7XG4gICAgICAgIGNvbnN0IGNyZWF0ZVByb2plY3RNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGVQcm9qZWN0TW9kYWwnKTtcbiAgICAgICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdmVybGF5Jyk7XG5cbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgY3JlYXRlUHJvamVjdE1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH1cblxuICAgIHN0YXRpYyBoaWRlTmV3VGFza01vZGFsKCl7XG4gICAgICAgIGNvbnN0IG5ld1Rhc2tNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdUYXNrTW9kYWwnKTtcbiAgICAgICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdmVybGF5Jyk7XG5cbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgbmV3VGFza01vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH1cblxuICAgIHN0YXRpYyBoaWRlRWRpdFRhc2tNb2RhbCgpe1xuICAgICAgICBjb25zdCBlZGl0VGFza01vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRUYXNrTW9kYWwnKTtcbiAgICAgICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdmVybGF5Jyk7XG5cbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgZWRpdFRhc2tNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlQ3VzdG9tUHJvamVjdEJ0bih0aXRsZSl7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY29uc3QgZGl2Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBjb25zdCBkaXZDbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblxuICAgICAgICBuZXdQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3NpZGVCYXJCdG4nKTtcbiAgICAgICAgbmV3UHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjdXN0b21Qcm9qZWN0QnRuJyk7XG5cbiAgICAgICAgaWNvbi5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1pY29ucycpO1xuICAgICAgICBpY29uLmlubmVyVGV4dCA9ICdhc3NpZ25tZW50JztcbiAgICAgICAgZGl2Q29udGVudC5hcHBlbmRDaGlsZChpY29uKTtcblxuICAgICAgICB0ZXh0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RUaXRsZScpO1xuICAgICAgICB0ZXh0LmlubmVyVGV4dCA9IHRpdGxlO1xuICAgICAgICBkaXZDb250ZW50LmFwcGVuZENoaWxkKHRleHQpO1xuXG4gICAgICAgIGNsb3NlLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLWljb25zJyk7XG4gICAgICAgIGNsb3NlLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZVByb2plY3RCdG4nKTtcbiAgICAgICAgY2xvc2UuaW5uZXJUZXh0ID0gJ2Nsb3NlJztcbiAgICAgICAgZGl2Q2xvc2UuYXBwZW5kQ2hpbGQoY2xvc2UpO1xuXG4gICAgICAgIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgU3RvcmFnZS5kZWxldGVQcm9qZWN0KHRpdGxlKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyQ3VzdG9tUHJvamVjdEJ0bnMoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbmV3UHJvamVjdEJ1dHRvbi5hcHBlbmRDaGlsZChkaXZDb250ZW50KTtcbiAgICAgICAgbmV3UHJvamVjdEJ1dHRvbi5hcHBlbmRDaGlsZChkaXZDbG9zZSk7XG4gICAgICAgIHJldHVybiBuZXdQcm9qZWN0QnV0dG9uO1xuICAgIH1cblxuICAgIHN0YXRpYyByZW5kZXJQcm9qZWN0Q29udGVudCh0aXRsZSl7XG4gICAgICAgIGNvbnN0IHByb2plY3RDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RDb250ZW50Jyk7XG4gICAgICAgIHByb2plY3RDb250ZW50LmlubmVySFRNTCA9ICcnO1xuXG4gICAgICAgIGNvbnN0IGNvbnRlbnROYXZiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGVudE5hdmJhci5jbGFzc0xpc3QuYWRkKCdjb250ZW50TmF2YmFyJyk7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgcHJvamVjdFRpdGxlLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnRQcm9qZWN0VGl0bGUnKTtcbiAgICAgICAgcHJvamVjdFRpdGxlLmlubmVyVGV4dCA9IHRpdGxlO1xuICAgICAgICBjb250ZW50TmF2YmFyLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG5cbiAgICAgICAgY29uc3QgbmV3VGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBuZXdUYXNrQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCduZXdUYXNrQnRuJyk7XG5cbiAgICAgICAgY29uc3QgZGl2VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0ZXh0LmlubmVyVGV4dCA9ICdOZXcgVGFzayc7XG4gICAgICAgIGRpdlRleHQuYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgICAgIG5ld1Rhc2tCdG4uYXBwZW5kQ2hpbGQoZGl2VGV4dCk7XG5cbiAgICAgICAgY29uc3QgZGl2SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgaW1nLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLWljb25zJyk7XG4gICAgICAgIGltZy5pbm5lclRleHQgPSAnYWRkJztcbiAgICAgICAgZGl2SW1nLmFwcGVuZENoaWxkKGltZyk7XG4gICAgICAgIG5ld1Rhc2tCdG4uYXBwZW5kQ2hpbGQoZGl2SW1nKTtcbiAgICAgICAgY29udGVudE5hdmJhci5hcHBlbmRDaGlsZChuZXdUYXNrQnRuKTtcbiAgICAgICAgcHJvamVjdENvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGVudE5hdmJhcik7XG5cbiAgICAgICAgY29uc3QgdG9Eb0xpc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdG9Eb0xpc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9Eb0xpc3QnKTtcbiAgICAgICAgcHJvamVjdENvbnRlbnQuYXBwZW5kQ2hpbGQodG9Eb0xpc3RDb250YWluZXIpO1xuXG4gICAgICAgIHRoaXMuaW5pdE5ld1Rhc2tCdG4oKTtcbiAgICAgICAgdGhpcy5yZW5kZXJUYXNrcyh0aXRsZSk7XG4gICAgfVxuXG4gICAgc3RhdGljIHJlbmRlclRhc2tzKHByb2plY3ROYW1lKXtcbiAgICAgICAgY29uc3QgdG9Eb0xpc3RTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvRG9MaXN0Jyk7XG4gICAgICAgIHRvRG9MaXN0U2VjdGlvbi5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IFN0b3JhZ2UuZ2V0VG9Eb0xpc3QoKS5nZXRQcm9qZWN0KHByb2plY3ROYW1lKS5nZXRUYXNrcygpO1xuICAgICAgICBmb3IoY29uc3QgaW5kZXggaW4gcHJvamVjdCl7XG4gICAgICAgICAgICBjb25zdCB0YXNrID0gcHJvamVjdFtpbmRleF07XG5cbiAgICAgICAgICAgIGNvbnN0IHRhc2tJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0YXNrSXRlbS5jbGFzc0xpc3QuYWRkKCd0YXNrSXRlbScpO1xuXG4gICAgICAgICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZCgnY2hlY2tCb3gnKTtcbiAgICAgICAgICAgIGlmKHRhc2suc3RhdHVzKXtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgICAgICBjaGVjay5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1pY29ucycpO1xuICAgICAgICAgICAgICAgIGNoZWNrLmNsYXNzTGlzdC5hZGQoJ2NoZWNrJyk7XG4gICAgICAgICAgICAgICAgY2hlY2suaW5uZXJUZXh0ID0gJ2RvbmUnO1xuICAgICAgICAgICAgICAgIGNoZWNrYm94LmFwcGVuZENoaWxkKGNoZWNrKTtcbiAgICAgICAgICAgICAgICB0YXNrSXRlbS5zdHlsZS5vcGFjaXR5ID0gXCIwLjZcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRhc2tJdGVtLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcblxuICAgICAgICAgICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YXNrQ29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHRhc2tJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0YXNrSW5mby5jbGFzc0xpc3QuYWRkKCd0YXNrSW5mbycpO1xuXG4gICAgICAgICAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgICAgICAgICAgdGFza1RpdGxlLmlubmVyVGV4dCA9IHRhc2sudGl0bGU7XG4gICAgICAgICAgICB0YXNrSW5mby5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xuXG4gICAgICAgICAgICBjb25zdCB0YXNrRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGFza0RldGFpbHMuY2xhc3NMaXN0LmFkZCgndGFza0l0ZW0tLWRldGFpbHMnKTtcblxuICAgICAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5Jyk7XG4gICAgICAgICAgICBwcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2lkJyxgcHJpb3JpdHkke3Rhc2sucHJpb3JpdHl9YCk7XG4gICAgICAgICAgICB0YXNrRGV0YWlscy5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGR1ZURhdGUuY2xhc3NMaXN0LmFkZCgnZHVlRGF0ZScpO1xuICAgICAgICAgICAgZHVlRGF0ZS5pbm5lclRleHQgPSBgIHwgJHt0YXNrLmR1ZURhdGV9YDtcbiAgICAgICAgICAgIHRhc2tEZXRhaWxzLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuICAgICAgICAgICAgdGFza0luZm8uYXBwZW5kQ2hpbGQodGFza0RldGFpbHMpO1xuICAgICAgICAgICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrSW5mbyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHRhc2tPcHRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0YXNrT3B0aW9ucy5jbGFzc0xpc3QuYWRkKCd0YXNrT3B0aW9ucycpO1xuXG4gICAgICAgICAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBlZGl0QnRuLmNsYXNzTGlzdC5hZGQoJ3Rhc2tPcHRpb25CdG4nKTtcblxuICAgICAgICAgICAgY29uc3QgZWRpdEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIGVkaXRJbWcuY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtaWNvbnMnKTtcbiAgICAgICAgICAgIGVkaXRJbWcuaW5uZXJUZXh0ID0gJ2VkaXQnO1xuICAgICAgICAgICAgZWRpdEJ0bi5hcHBlbmRDaGlsZChlZGl0SW1nKTtcbiAgICAgICAgICAgIHRhc2tPcHRpb25zLmFwcGVuZENoaWxkKGVkaXRCdG4pO1xuXG4gICAgICAgICAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCd0YXNrT3B0aW9uQnRuJyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIGRlbGV0ZUltZy5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1pY29ucycpO1xuICAgICAgICAgICAgZGVsZXRlSW1nLmlubmVyVGV4dCA9ICdkZWxldGUnO1xuICAgICAgICAgICAgZGVsZXRlQnRuLmFwcGVuZENoaWxkKGRlbGV0ZUltZyk7XG4gICAgICAgICAgICB0YXNrT3B0aW9ucy5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuICAgICAgICAgICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrT3B0aW9ucyk7XG4gICAgICAgICAgICB0YXNrSXRlbS5hcHBlbmRDaGlsZCh0YXNrQ29udGFpbmVyKTtcbiAgICAgICAgICAgIHRvRG9MaXN0U2VjdGlvbi5hcHBlbmRDaGlsZCh0YXNrSXRlbSk7XG5cbiAgICAgICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIFN0b3JhZ2UuY2hhbmdlU3RhdHVzKHByb2plY3ROYW1lLCB0YXNrLnRpdGxlKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGVjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGVjaycpO1xuICAgICAgICAgICAgICAgIGlmKGNoZWNrKXtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tib3gucmVtb3ZlQ2hpbGQoY2hlY2spO1xuICAgICAgICAgICAgICAgICAgICB0YXNrSXRlbS5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgICAgICAgICBjaGVjay5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1pY29ucycpO1xuICAgICAgICAgICAgICAgICAgICBjaGVjay5jbGFzc0xpc3QuYWRkKCdjaGVjaycpO1xuICAgICAgICAgICAgICAgICAgICBjaGVjay5pbm5lclRleHQgPSAnZG9uZSc7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrYm94LmFwcGVuZENoaWxkKGNoZWNrKTtcbiAgICAgICAgICAgICAgICAgICAgdGFza0l0ZW0uc3R5bGUub3BhY2l0eSA9IFwiMC42XCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZWRpdFRhc2tNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0VGFza01vZGFsJyk7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdmVybGF5Jyk7XG4gICAgICAgICAgICAgICAgY29uc3QgZWRpdFRhc2tGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRUYXNrRm9ybScpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3VGFza1RpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Rhc2tUaXRsZScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0R1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3RHVlRGF0ZScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1ByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYG5wJHt0YXNrLnByaW9yaXR5fWApO1xuXG4gICAgICAgICAgICAgICAgbmV3VGFza1RpdGxlLnZhbHVlID0gdGFzay50aXRsZTtcbiAgICAgICAgICAgICAgICBuZXdEdWVEYXRlLnZhbHVlID0gdGFzay5kdWVEYXRlO1xuICAgICAgICAgICAgICAgIG5ld1ByaW9yaXR5LmNoZWNrZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICBlZGl0VGFza01vZGFsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuXG5cbiAgICAgICAgICAgICAgICBlZGl0VGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgdGhpcy51cGRhdGVUYXNrLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgICAgIGVkaXRUYXNrRm9ybS50YXNrID0gdGFzaztcbiAgICAgICAgICAgICAgICBlZGl0VGFza0Zvcm0ucHJvamVjdE5hbWUgPSBwcm9qZWN0TmFtZTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgU3RvcmFnZS5kZWxldGVUYXNrKHByb2plY3ROYW1lLCB0YXNrLnRpdGxlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclRhc2tzKHByb2plY3ROYW1lKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgdXBkYXRlVGFzayhldmVudCl7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGVkaXRUYXNrRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0VGFza0Zvcm0nKTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwibmV3UHJpb3JpdHlcIl06Y2hlY2tlZCcpLnZhbHVlO1xuICAgICAgICBjb25zdCBuZXdUYXNrVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3VGFza1RpdGxlJyk7XG4gICAgICAgIGNvbnN0IG5ld0R1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3RHVlRGF0ZScpO1xuXG4gICAgICAgIFN0b3JhZ2UuY2hhbmdlVGFza1ByaW9yaXR5KGV2ZW50LmN1cnJlbnRUYXJnZXQucHJvamVjdE5hbWUsIGV2ZW50LmN1cnJlbnRUYXJnZXQudGFzay50aXRsZSwgcHJpb3JpdHkpO1xuICAgICAgICBTdG9yYWdlLmNoYW5nZVRhc2tEdWVEYXRlKGV2ZW50LmN1cnJlbnRUYXJnZXQucHJvamVjdE5hbWUsIGV2ZW50LmN1cnJlbnRUYXJnZXQudGFzay50aXRsZSwgbmV3RHVlRGF0ZS52YWx1ZSk7XG4gICAgICAgIFN0b3JhZ2UuY2hhbmdlVGFza1RpdGxlKGV2ZW50LmN1cnJlbnRUYXJnZXQucHJvamVjdE5hbWUsIGV2ZW50LmN1cnJlbnRUYXJnZXQudGFzay50aXRsZSwgbmV3VGFza1RpdGxlLnZhbHVlKTtcblxuICAgICAgICB0aGlzLmhpZGVFZGl0VGFza01vZGFsKCk7XG5cbiAgICAgICAgZWRpdFRhc2tGb3JtLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHRoaXMudXBkYXRlVGFzayk7XG4gICAgICAgIHRoaXMucmVuZGVyVGFza3MoZXZlbnQuY3VycmVudFRhcmdldC5wcm9qZWN0TmFtZSk7XG5cbiAgICB9XG5cbiAgICBzdGF0aWMgcmVuZGVyQ3VzdG9tUHJvamVjdEJ0bnMoKXtcbiAgICAgICAgY29uc3QgY3VzdG9tUHJvamVjdHNCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1c3RvbVByb2plY3RzQnRucycpO1xuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IFN0b3JhZ2UuZ2V0VG9Eb0xpc3QoKS5nZXRQcm9qZWN0cygpO1xuICAgICAgICBjdXN0b21Qcm9qZWN0c0J0bnMuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgICAgICBmb3IoY29uc3QgaW5kZXggaW4gcHJvamVjdHMpe1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBwcm9qZWN0c1tpbmRleF0ubmFtZTtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQ3VzdG9tUHJvamVjdEJ0bihwcm9qZWN0TmFtZSk7XG4gICAgICAgICAgICBjb25zdCBuZXdQcm9qZWN0QnV0dG9uID0gdGhpcy5jcmVhdGVDdXN0b21Qcm9qZWN0QnRuKHByb2plY3ROYW1lKTtcbiAgICAgICAgICAgIGN1c3RvbVByb2plY3RzQnRucy5hcHBlbmRDaGlsZChuZXdQcm9qZWN0QnV0dG9uKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjdXN0b21zUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY3VzdG9tUHJvamVjdEJ0bicpO1xuICAgICAgICBjdXN0b21zUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdEJ0bikgPT4ge1xuICAgICAgICAgICAgcHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IHByb2plY3RCdG4ucXVlcnlTZWxlY3RvcignLnByb2plY3RUaXRsZScpLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgIGNvbnN0IGlzQWN0aXZlID0gcHJvamVjdEJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ3NpZGVCYXJCdG4tLWFjdGl2ZScpO1xuICAgICAgICAgICAgICAgIGlmKCFpc0FjdGl2ZSl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVhY3RpdmF0ZVByb2plY3RCdG5zKCk7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RCdG4uY2xhc3NMaXN0LmFkZCgnc2lkZUJhckJ0bi0tYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyUHJvamVjdENvbnRlbnQodGl0bGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZGVhY3RpdmF0ZVByb2plY3RCdG5zKCl7XG4gICAgICAgIGNvbnN0IGFsbFRhc2tzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FsbFRhc2tzQnRuJyk7XG4gICAgICAgIGNvbnN0IHRvZGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZGF5QnRuJyk7XG4gICAgICAgIGNvbnN0IHdlZWsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2Vla0J0bicpO1xuICAgICAgICBjb25zdCBjdXN0b21zUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY3VzdG9tUHJvamVjdEJ0bicpO1xuXG4gICAgICAgIGlmKGFsbFRhc2tzLmNsYXNzTGlzdC5jb250YWlucygnc2lkZUJhckJ0bi0tYWN0aXZlJykpe1xuICAgICAgICAgICAgYWxsVGFza3MuY2xhc3NMaXN0LnJlbW92ZSgnc2lkZUJhckJ0bi0tYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZih0b2RheS5jbGFzc0xpc3QuY29udGFpbnMoJ3NpZGVCYXJCdG4tLWFjdGl2ZScpKXtcbiAgICAgICAgICAgIHRvZGF5LmNsYXNzTGlzdC5yZW1vdmUoJ3NpZGVCYXJCdG4tLWFjdGl2ZScpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYod2Vlay5jbGFzc0xpc3QuY29udGFpbnMoJ3NpZGVCYXJCdG4tLWFjdGl2ZScpKXtcbiAgICAgICAgICAgIHdlZWsuY2xhc3NMaXN0LnJlbW92ZSgnc2lkZUJhckJ0bi0tYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGN1c3RvbXNQcm9qZWN0cy5mb3JFYWNoKGZ1bmN0aW9uKHByb2plY3RCdG4pe1xuICAgICAgICAgICAgICAgIGlmKHByb2plY3RCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdzaWRlQmFyQnRuLS1hY3RpdmUnKSl7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RCdG4uY2xhc3NMaXN0LnJlbW92ZSgnc2lkZUJhckJ0bi0tYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gQ3JlYXRlIGNvbnRlbnRcblxufSIsImV4cG9ydCBjbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgdGhpcy50YXNrcyA9IFtdO1xuICAgIH1cblxuICAgIGdldE5hbWUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cbiAgXG4gICAgc2V0TmFtZShuYW1lKSB7XG4gICAgICBpZiAobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgfVxuICAgIH1cbiAgXG4gICAgZ2V0VGFza3MoKSB7XG4gICAgICByZXR1cm4gdGhpcy50YXNrcztcbiAgICB9XG4gIFxuICAgIHNldFRhc2tzKHRhc2tzKSB7XG4gICAgICB0aGlzLnRhc2tzID0gdGFza3M7XG4gICAgfVxuXG4gICAgZ2V0VGFzayh0YXNrVGl0bGUpIHtcbiAgICAgIHJldHVybiB0aGlzLnRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suZ2V0VGl0bGUoKSA9PT0gdGFza1RpdGxlKVxuICAgIH1cbiAgXG4gICAgY29udGFpbnModGFza1RpdGxlKSB7XG4gICAgICByZXR1cm4gdGhpcy50YXNrcy5zb21lKCh0YXNrKSA9PiB0YXNrLmdldFRpdGxlKCkgPT09IHRhc2tUaXRsZSlcbiAgICB9XG4gIFxuICAgIGFkZFRhc2sobmV3VGFzaykge1xuICAgICAgaWYgKHRoaXMudGFza3MuZmluZCgodGFzaykgPT4gdGFzay5nZXRUaXRsZSgpID09PSBuZXdUYXNrLm5hbWUpKSByZXR1cm5cbiAgICAgIHRoaXMudGFza3MucHVzaChuZXdUYXNrKVxuICAgIH1cbiAgXG4gICAgZGVsZXRlVGFzayh0YXNrVGl0bGUpIHtcbiAgICAgIHRoaXMudGFza3MgPSB0aGlzLnRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay5nZXRUaXRsZSgpICE9PSB0YXNrVGl0bGUpXG4gICAgfVxuICB9IiwiaW1wb3J0IHsgdG9Eb0xpc3QgfSBmcm9tIFwiLi90b0RvTGlzdFwiO1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7IFRhc2sgfSBmcm9tIFwiLi90YXNrXCI7XG5leHBvcnQgY2xhc3MgU3RvcmFnZXtcblxuICAgIHN0YXRpYyBzYXZlVG9Eb0xpc3QoZGF0YSkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9Eb0xpc3QnLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldFRvRG9MaXN0KCl7XG4gICAgICAgIGNvbnN0IHN0b3JlZExpc3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9Eb0xpc3QnKTtcbiAgICAgICAgaWYoc3RvcmVkTGlzdCl7XG4gICAgICAgICAgICBjb25zdCBsaXN0ID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgICAgICBuZXcgdG9Eb0xpc3QoKSxcbiAgICAgICAgICAgICAgICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b0RvTGlzdCcpKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGxpc3Quc2V0UHJvamVjdHMoXG4gICAgICAgICAgICAgICAgbGlzdFxuICAgICAgICAgICAgICAgICAgLmdldFByb2plY3RzKClcbiAgICAgICAgICAgICAgICAgIC5tYXAoKHByb2plY3QpID0+IE9iamVjdC5hc3NpZ24obmV3IFByb2plY3QoKSwgcHJvamVjdCkpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICBcbiAgICAgICAgICAgIGxpc3QuZ2V0UHJvamVjdHMoKVxuICAgICAgICAgICAgICAgIC5mb3JFYWNoKChwcm9qZWN0KSA9PlxuICAgICAgICAgICAgICAgICAgcHJvamVjdC5zZXRUYXNrcyhcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdC5nZXRUYXNrcygpLm1hcCgodGFzaykgPT4gT2JqZWN0LmFzc2lnbihuZXcgVGFzaygpLCB0YXNrKSlcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIGxpc3Q7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbGlzdCA9IG5ldyB0b0RvTGlzdCgpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9Eb0xpc3QnLEpTT04uc3RyaW5naWZ5KGxpc3QpKTtcblxuICAgICAgICByZXR1cm4gbGlzdDtcbiAgICB9XG5cbiAgICBzdGF0aWMgYWRkUHJvamVjdChwcm9qZWN0KXtcbiAgICAgICAgY29uc3QgbGlzdCA9IHRoaXMuZ2V0VG9Eb0xpc3QoKTtcbiAgICAgICAgbGlzdC5hZGRQcm9qZWN0KHByb2plY3QpO1xuICAgICAgICB0aGlzLnNhdmVUb0RvTGlzdChsaXN0KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZGVsZXRlUHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgICAgICBjb25zdCB0b0RvTGlzdCA9IFN0b3JhZ2UuZ2V0VG9Eb0xpc3QoKTtcbiAgICAgICAgdG9Eb0xpc3QuZGVsZXRlUHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgICAgIFN0b3JhZ2Uuc2F2ZVRvRG9MaXN0KHRvRG9MaXN0KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYWRkVGFzayhwcm9qZWN0TmFtZSwgbmV3VGFzayl7XG4gICAgICAgIGNvbnN0IHRvRG9MaXN0ID0gU3RvcmFnZS5nZXRUb0RvTGlzdCgpO1xuICAgICAgICB0b0RvTGlzdC5nZXRQcm9qZWN0KHByb2plY3ROYW1lKS5hZGRUYXNrKG5ld1Rhc2spO1xuICAgICAgICBTdG9yYWdlLnNhdmVUb0RvTGlzdCh0b0RvTGlzdCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGRlbGV0ZVRhc2socHJvamVjdE5hbWUsIHRhc2tUaXRsZSkge1xuICAgICAgICBjb25zdCB0b0RvTGlzdCA9IFN0b3JhZ2UuZ2V0VG9Eb0xpc3QoKTtcbiAgICAgICAgdG9Eb0xpc3QuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSkuZGVsZXRlVGFzayh0YXNrVGl0bGUpO1xuICAgICAgICBTdG9yYWdlLnNhdmVUb0RvTGlzdCh0b0RvTGlzdCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNoYW5nZVRhc2tUaXRsZShwcm9qZWN0TmFtZSwgdGFza1RpdGxlLCBuZXdUYXNrVGl0bGUpe1xuICAgICAgICBjb25zdCB0b0RvTGlzdCA9IFN0b3JhZ2UuZ2V0VG9Eb0xpc3QoKTtcbiAgICAgICAgdG9Eb0xpc3QuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSkuZ2V0VGFzayh0YXNrVGl0bGUpLnNldFRpdGxlKG5ld1Rhc2tUaXRsZSk7XG4gICAgICAgIFN0b3JhZ2Uuc2F2ZVRvRG9MaXN0KHRvRG9MaXN0KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY2hhbmdlVGFza0R1ZURhdGUocHJvamVjdE5hbWUsIHRhc2tUaXRsZSwgbmV3RHVlRGF0ZSl7XG4gICAgICAgIGNvbnN0IHRvRG9MaXN0ID0gU3RvcmFnZS5nZXRUb0RvTGlzdCgpO1xuICAgICAgICB0b0RvTGlzdC5nZXRQcm9qZWN0KHByb2plY3ROYW1lKS5nZXRUYXNrKHRhc2tUaXRsZSkuc2V0RHVlRGF0ZShuZXdEdWVEYXRlKTtcbiAgICAgICAgU3RvcmFnZS5zYXZlVG9Eb0xpc3QodG9Eb0xpc3QpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjaGFuZ2VUYXNrUHJpb3JpdHkocHJvamVjdE5hbWUsIHRhc2tUaXRsZSwgbmV3UHJpb3JpdHkpe1xuICAgICAgICBjb25zdCB0b0RvTGlzdCA9IFN0b3JhZ2UuZ2V0VG9Eb0xpc3QoKTtcbiAgICAgICAgdG9Eb0xpc3QuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSkuZ2V0VGFzayh0YXNrVGl0bGUpLnNldFByaW9yaXR5KG5ld1ByaW9yaXR5KTtcbiAgICAgICAgU3RvcmFnZS5zYXZlVG9Eb0xpc3QodG9Eb0xpc3QpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjaGFuZ2VTdGF0dXMocHJvamVjdE5hbWUsIHRhc2tUaXRsZSl7XG4gICAgICAgIGNvbnN0IHRvRG9MaXN0ID0gU3RvcmFnZS5nZXRUb0RvTGlzdCgpO1xuICAgICAgICB0b0RvTGlzdC5nZXRQcm9qZWN0KHByb2plY3ROYW1lKS5nZXRUYXNrKHRhc2tUaXRsZSkuY2hhbmdlU3RhdHVzKCk7XG4gICAgICAgIFN0b3JhZ2Uuc2F2ZVRvRG9MaXN0KHRvRG9MaXN0KTtcbiAgICB9XG59IiwiXG5leHBvcnQgY2xhc3MgVGFza3tcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHkpe1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBnZXRUaXRsZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy50aXRsZTtcbiAgICB9XG5cbiAgICBzZXRUaXRsZSh2YWx1ZSl7XG4gICAgICAgIGlmKHZhbHVlKXtcbiAgICAgICAgICAgIHRoaXMudGl0bGUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldER1ZURhdGUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHVlRGF0ZTtcbiAgICB9XG5cbiAgICBzZXREdWVEYXRlKHZhbHVlKXtcbiAgICAgICAgaWYodmFsdWUpe1xuICAgICAgICAgICAgdGhpcy5kdWVEYXRlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRQcmlvcml0eSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5wcmlvcml0eTtcbiAgICB9XG5cbiAgICBzZXRQcmlvcml0eSh2YWx1ZSl7XG4gICAgICAgIGlmKHZhbHVlKXtcbiAgICAgICAgICAgIHRoaXMucHJpb3JpdHkgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFN0YXR1cygpe1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0dXM7XG4gICAgfVxuXG4gICAgY2hhbmdlU3RhdHVzKCl7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gIXRoaXMuc3RhdHVzO1xuICAgIH1cbiAgICBcbn0iLCJpbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vdGFza1wiO1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcblxuZXhwb3J0IGNsYXNzIHRvRG9MaXN0e1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMucHJvamVjdHMgPSBbXTtcbiAgICB9XG5cbiAgICBzZXRQcm9qZWN0cyhwcm9qZWN0cykge1xuICAgICAgICB0aGlzLnByb2plY3RzID0gcHJvamVjdHM7XG4gICAgfVxuICAgIFxuICAgIGdldFByb2plY3RzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0cztcbiAgICB9XG4gICAgXG4gICAgZ2V0UHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0Lm5hbWUgPT09IHByb2plY3ROYW1lKTtcbiAgICB9XG4gICAgXG4gICAgY29udGFpbnMocHJvamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdHMuc29tZSgocHJvamVjdCkgPT4gcHJvamVjdC5uYW1lID09PSBwcm9qZWN0TmFtZSk7XG4gICAgfVxuICAgIFxuICAgIGFkZFByb2plY3QobmV3UHJvamVjdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuICAgIH1cblxuICAgIGRlbGV0ZVByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdFRvRGVsZXRlID0gdGhpcy5wcm9qZWN0cy5maW5kKFxuICAgICAgICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0Lm5hbWUgPT09IHByb2plY3ROYW1lXG4gICAgICAgIClcbiAgICAgICAgdGhpcy5wcm9qZWN0cy5zcGxpY2UodGhpcy5wcm9qZWN0cy5pbmRleE9mKHByb2plY3RUb0RlbGV0ZSksIDEpXG4gICAgICB9XG5cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IFVJIH0gZnJvbSBcIi4vbW9kdWxlcy9VSVwiO1xuXG5VSS5sb2FkUGFnZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==