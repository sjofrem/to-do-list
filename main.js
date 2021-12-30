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

            deleteBtn.addEventListener('click', () => {
                _storage__WEBPACK_IMPORTED_MODULE_2__.Storage.deleteTask(projectName, task.title);
                this.renderTasks(projectName);
            });

        }
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

    getTask(taskName) {
      return this.tasks.find((task) => task.getTitle() === taskName)
    }
  
    contains(taskName) {
      return this.tasks.some((task) => task.getTitle() === taskName)
    }
  
    addTask(newTask) {
      if (this.tasks.find((task) => task.getTitle() === newTask.name)) return
      this.tasks.push(newTask)
    }
  
    deleteTask(taskName) {
      this.tasks = this.tasks.filter((task) => task.getTitle() !== taskName)
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

    static deleteTask(projectName, taskName) {
        const toDoList = Storage.getToDoList();
        toDoList.getProject(projectName).deleteTask(taskName);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTmtDOztBQUVsQyxvREFBVyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL1VJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy90YXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy90b0RvTGlzdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHsgdG9Eb0xpc3QgfSBmcm9tIFwiLi90b0RvTGlzdFwiO1xuaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gXCIuL3N0b3JhZ2VcIjtcbmltcG9ydCB7IFRhc2sgfSBmcm9tIFwiLi90YXNrXCI7XG5cbmV4cG9ydCBjbGFzcyBVSXtcbiAgICBcbiAgICBzdGF0aWMgbG9hZFBhZ2UoKXtcbiAgICAgICAgdGhpcy5pbml0TW9iaWxlTWVudUJ0bigpO1xuICAgICAgICB0aGlzLmluaXRQcm9qZWN0QnRucygpO1xuICAgICAgICB0aGlzLnJlbmRlckN1c3RvbVByb2plY3RCdG5zKCk7XG4gICAgICAgIHRoaXMuaW5pdE5ld1Rhc2tCdG4oKTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgLy9FdmVudCBsaXN0ZW5lcnNcbiAgICBzdGF0aWMgaW5pdE1vYmlsZU1lbnVCdG4oKXtcbiAgICAgICAgY29uc3QgYnRuTmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bk5hdicpO1xuICAgICAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZUJhcicpO1xuICAgICAgICBidG5OYXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcbiAgICAgICAgICAgIGNvbnN0IGlzQWN0aXZlID0gbmF2LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJyk7XG4gICAgICAgICAgICBpZihpc0FjdGl2ZSl7XG4gICAgICAgICAgICAgICAgbmF2LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBuYXYuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgc3RhdGljIGluaXRQcm9qZWN0QnRucygpe1xuICAgICAgICBjb25zdCBhbGxUYXNrcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbGxUYXNrc0J0bicpO1xuICAgICAgICBjb25zdCB0b2RheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheUJ0bicpO1xuICAgICAgICBjb25zdCB3ZWVrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlZWtCdG4nKTtcbiAgICAgICAgY29uc3QgY3JlYXRlUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGVQcm9qZWN0Jyk7XG4gICAgICAgIGNvbnN0IGNsb3NlUHJvamVjdE1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlUHJvamVjdE1vZGFsJyk7XG4gICAgICAgIGNvbnN0IGNsb3NlTmV3VGFza01vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlTmV3VGFza01vZGFsJyk7XG4gICAgICAgIGNvbnN0IGFkZFByb2plY3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFByb2plY3RGb3JtJyk7XG4gICAgICAgIGNvbnN0IG5ld1Rhc2tGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Rhc2tGb3JtJyk7XG4gICAgICAgIFxuICAgICAgICBhbGxUYXNrcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xuICAgICAgICAgICAgY29uc3QgaXNBY3RpdmUgPSBhbGxUYXNrcy5jbGFzc0xpc3QuY29udGFpbnMoJ3NpZGVCYXJCdG4tLWFjdGl2ZScpO1xuICAgICAgICAgICAgaWYoIWlzQWN0aXZlKXtcbiAgICAgICAgICAgICAgICB0aGlzLmRlYWN0aXZhdGVQcm9qZWN0QnRucygpO1xuICAgICAgICAgICAgICAgIGFsbFRhc2tzLmNsYXNzTGlzdC5hZGQoJ3NpZGVCYXJCdG4tLWFjdGl2ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdG9kYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcbiAgICAgICAgICAgIGNvbnN0IGlzQWN0aXZlID0gdG9kYXkuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaWRlQmFyQnRuLS1hY3RpdmUnKTtcbiAgICAgICAgICAgIGlmKCFpc0FjdGl2ZSl7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWFjdGl2YXRlUHJvamVjdEJ0bnMoKTtcbiAgICAgICAgICAgICAgICB0b2RheS5jbGFzc0xpc3QuYWRkKCdzaWRlQmFyQnRuLS1hY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHdlZWsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcbiAgICAgICAgICAgIGNvbnN0IGlzQWN0aXZlID0gd2Vlay5jbGFzc0xpc3QuY29udGFpbnMoJ3NpZGVCYXJCdG4tLWFjdGl2ZScpO1xuICAgICAgICAgICAgaWYoIWlzQWN0aXZlKXtcbiAgICAgICAgICAgICAgICB0aGlzLmRlYWN0aXZhdGVQcm9qZWN0QnRucygpO1xuICAgICAgICAgICAgICAgIHdlZWsuY2xhc3NMaXN0LmFkZCgnc2lkZUJhckJ0bi0tYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBjcmVhdGVQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XG4gICAgICAgICAgICBjb25zdCBjcmVhdGVQcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlUHJvamVjdE1vZGFsJyk7XG4gICAgICAgICAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ292ZXJsYXknKTtcblxuICAgICAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGNyZWF0ZVByb2plY3RNb2RhbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNsb3NlUHJvamVjdE1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XG4gICAgICAgICAgICB0aGlzLmhpZGVDcmVhdGVQcm9qZWN0TW9kYWwoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNsb3NlTmV3VGFza01vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XG4gICAgICAgICAgICB0aGlzLmhpZGVOZXdUYXNrTW9kYWwoKTtcbiAgICAgICAgfSlcbiAgICAgICAgYWRkUHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+e1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdFRpdGxlJykudmFsdWU7XG5cbiAgICAgICAgICAgIHRoaXMuaGlkZUNyZWF0ZVByb2plY3RNb2RhbCgpO1xuXG4gICAgICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QodGl0bGUpO1xuICAgICAgICAgICAgU3RvcmFnZS5hZGRQcm9qZWN0KG5ld1Byb2plY3QpO1xuXG4gICAgICAgICAgICBhZGRQcm9qZWN0Rm9ybS5yZXNldCgpO1xuXG4gICAgICAgICAgICB0aGlzLnJlbmRlckN1c3RvbVByb2plY3RCdG5zKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBuZXdUYXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT57XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrVGl0bGUnKS52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlRGF0ZScpLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgcHJpb3JpcnR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInByaW9yaXR5XCJdOmNoZWNrZWQnKS52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50UHJvamVjdFRpdGxlJykudGV4dENvbnRlbnQ7XG5cblxuICAgICAgICAgICAgdGhpcy5oaWRlTmV3VGFza01vZGFsKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVGFzayh0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpcnR5KTtcbiAgICAgICAgICAgIFN0b3JhZ2UuYWRkVGFzayhwcm9qZWN0VGl0bGUsbmV3VGFzayk7XG4gICAgICAgICAgICB0aGlzLnJlbmRlclRhc2tzKHByb2plY3RUaXRsZSk7XG5cbiAgICAgICAgICAgIG5ld1Rhc2tGb3JtLnJlc2V0KCk7XG5cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGluaXROZXdUYXNrQnRuKCl7XG4gICAgICAgIGNvbnN0IG5ld1Rhc2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3VGFza0J0bicpO1xuICAgICAgICBuZXdUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3VGFza01vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Rhc2tNb2RhbCcpO1xuICAgICAgICAgICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdmVybGF5Jyk7XG5cbiAgICAgICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICBuZXdUYXNrTW9kYWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN0YXRpYyBoaWRlQ3JlYXRlUHJvamVjdE1vZGFsKCl7XG4gICAgICAgIGNvbnN0IGNyZWF0ZVByb2plY3RNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGVQcm9qZWN0TW9kYWwnKTtcbiAgICAgICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdmVybGF5Jyk7XG5cbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgY3JlYXRlUHJvamVjdE1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH1cblxuICAgIHN0YXRpYyBoaWRlTmV3VGFza01vZGFsKCl7XG4gICAgICAgIGNvbnN0IG5ld1Rhc2tNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdUYXNrTW9kYWwnKTtcbiAgICAgICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdmVybGF5Jyk7XG5cbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgbmV3VGFza01vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVDdXN0b21Qcm9qZWN0QnRuKHRpdGxlKXtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjb25zdCBkaXZDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGNvbnN0IGRpdkNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXG4gICAgICAgIG5ld1Byb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnc2lkZUJhckJ0bicpO1xuICAgICAgICBuZXdQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbVByb2plY3RCdG4nKTtcblxuICAgICAgICBpY29uLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLWljb25zJyk7XG4gICAgICAgIGljb24uaW5uZXJUZXh0ID0gJ2Fzc2lnbm1lbnQnO1xuICAgICAgICBkaXZDb250ZW50LmFwcGVuZENoaWxkKGljb24pO1xuXG4gICAgICAgIHRleHQuY2xhc3NMaXN0LmFkZCgncHJvamVjdFRpdGxlJyk7XG4gICAgICAgIHRleHQuaW5uZXJUZXh0ID0gdGl0bGU7XG4gICAgICAgIGRpdkNvbnRlbnQuYXBwZW5kQ2hpbGQodGV4dCk7XG5cbiAgICAgICAgY2xvc2UuY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtaWNvbnMnKTtcbiAgICAgICAgY2xvc2UuY2xhc3NMaXN0LmFkZCgnZGVsZXRlUHJvamVjdEJ0bicpO1xuICAgICAgICBjbG9zZS5pbm5lclRleHQgPSAnY2xvc2UnO1xuICAgICAgICBkaXZDbG9zZS5hcHBlbmRDaGlsZChjbG9zZSk7XG5cbiAgICAgICAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBTdG9yYWdlLmRlbGV0ZVByb2plY3QodGl0bGUpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJDdXN0b21Qcm9qZWN0QnRucygpO1xuICAgICAgICB9KTtcblxuICAgICAgICBuZXdQcm9qZWN0QnV0dG9uLmFwcGVuZENoaWxkKGRpdkNvbnRlbnQpO1xuICAgICAgICBuZXdQcm9qZWN0QnV0dG9uLmFwcGVuZENoaWxkKGRpdkNsb3NlKTtcbiAgICAgICAgcmV0dXJuIG5ld1Byb2plY3RCdXR0b247XG4gICAgfVxuXG4gICAgc3RhdGljIHJlbmRlclByb2plY3RDb250ZW50KHRpdGxlKXtcbiAgICAgICAgY29uc3QgcHJvamVjdENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdENvbnRlbnQnKTtcbiAgICAgICAgcHJvamVjdENvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG5cbiAgICAgICAgY29uc3QgY29udGVudE5hdmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250ZW50TmF2YmFyLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnROYXZiYXInKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICBwcm9qZWN0VGl0bGUuY2xhc3NMaXN0LmFkZCgnY3VycmVudFByb2plY3RUaXRsZScpO1xuICAgICAgICBwcm9qZWN0VGl0bGUuaW5uZXJUZXh0ID0gdGl0bGU7XG4gICAgICAgIGNvbnRlbnROYXZiYXIuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcblxuICAgICAgICBjb25zdCBuZXdUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIG5ld1Rhc2tCdG4uc2V0QXR0cmlidXRlKCdpZCcsJ25ld1Rhc2tCdG4nKTtcblxuICAgICAgICBjb25zdCBkaXZUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHRleHQuaW5uZXJUZXh0ID0gJ05ldyBUYXNrJztcbiAgICAgICAgZGl2VGV4dC5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICAgICAgbmV3VGFza0J0bi5hcHBlbmRDaGlsZChkaXZUZXh0KTtcblxuICAgICAgICBjb25zdCBkaXZJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBpbWcuY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtaWNvbnMnKTtcbiAgICAgICAgaW1nLmlubmVyVGV4dCA9ICdhZGQnO1xuICAgICAgICBkaXZJbWcuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICAgICAgbmV3VGFza0J0bi5hcHBlbmRDaGlsZChkaXZJbWcpO1xuICAgICAgICBjb250ZW50TmF2YmFyLmFwcGVuZENoaWxkKG5ld1Rhc2tCdG4pO1xuICAgICAgICBwcm9qZWN0Q29udGVudC5hcHBlbmRDaGlsZChjb250ZW50TmF2YmFyKTtcblxuICAgICAgICBjb25zdCB0b0RvTGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0b0RvTGlzdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b0RvTGlzdCcpO1xuICAgICAgICBwcm9qZWN0Q29udGVudC5hcHBlbmRDaGlsZCh0b0RvTGlzdENvbnRhaW5lcik7XG5cbiAgICAgICAgdGhpcy5pbml0TmV3VGFza0J0bigpO1xuICAgICAgICB0aGlzLnJlbmRlclRhc2tzKHRpdGxlKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcmVuZGVyVGFza3MocHJvamVjdE5hbWUpe1xuICAgICAgICBjb25zdCB0b0RvTGlzdFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9Eb0xpc3QnKTtcbiAgICAgICAgdG9Eb0xpc3RTZWN0aW9uLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gU3RvcmFnZS5nZXRUb0RvTGlzdCgpLmdldFByb2plY3QocHJvamVjdE5hbWUpLmdldFRhc2tzKCk7XG4gICAgICAgIGZvcihjb25zdCBpbmRleCBpbiBwcm9qZWN0KXtcbiAgICAgICAgICAgIGNvbnN0IHRhc2sgPSBwcm9qZWN0W2luZGV4XTtcblxuICAgICAgICAgICAgY29uc3QgdGFza0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRhc2tJdGVtLmNsYXNzTGlzdC5hZGQoJ3Rhc2tJdGVtJyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKCdjaGVja0JveCcpO1xuICAgICAgICAgICAgdGFza0l0ZW0uYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuXG4gICAgICAgICAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2tDb250YWluZXInKTtcblxuICAgICAgICAgICAgY29uc3QgdGFza0luZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRhc2tJbmZvLmNsYXNzTGlzdC5hZGQoJ3Rhc2tJbmZvJyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgICAgICAgICB0YXNrVGl0bGUuaW5uZXJUZXh0ID0gdGFzay50aXRsZTtcbiAgICAgICAgICAgIHRhc2tJbmZvLmFwcGVuZENoaWxkKHRhc2tUaXRsZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHRhc2tEZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0YXNrRGV0YWlscy5jbGFzc0xpc3QuYWRkKCd0YXNrSXRlbS0tZGV0YWlscycpO1xuXG4gICAgICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHknKTtcbiAgICAgICAgICAgIHByaW9yaXR5LnNldEF0dHJpYnV0ZSgnaWQnLGBwcmlvcml0eSR7dGFzay5wcmlvcml0eX1gKTtcbiAgICAgICAgICAgIHRhc2tEZXRhaWxzLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcblxuICAgICAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZHVlRGF0ZS5jbGFzc0xpc3QuYWRkKCdkdWVEYXRlJyk7XG4gICAgICAgICAgICBkdWVEYXRlLmlubmVyVGV4dCA9IGAgfCAke3Rhc2suZHVlRGF0ZX1gO1xuICAgICAgICAgICAgdGFza0RldGFpbHMuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG4gICAgICAgICAgICB0YXNrSW5mby5hcHBlbmRDaGlsZCh0YXNrRGV0YWlscyk7XG4gICAgICAgICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tJbmZvKTtcblxuICAgICAgICAgICAgY29uc3QgdGFza09wdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRhc2tPcHRpb25zLmNsYXNzTGlzdC5hZGQoJ3Rhc2tPcHRpb25zJyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGVkaXRCdG4uY2xhc3NMaXN0LmFkZCgndGFza09wdGlvbkJ0bicpO1xuXG4gICAgICAgICAgICBjb25zdCBlZGl0SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgZWRpdEltZy5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1pY29ucycpO1xuICAgICAgICAgICAgZWRpdEltZy5pbm5lclRleHQgPSAnZWRpdCc7XG4gICAgICAgICAgICBlZGl0QnRuLmFwcGVuZENoaWxkKGVkaXRJbWcpO1xuICAgICAgICAgICAgdGFza09wdGlvbnMuYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XG5cbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ3Rhc2tPcHRpb25CdG4nKTtcblxuICAgICAgICAgICAgY29uc3QgZGVsZXRlSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgZGVsZXRlSW1nLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLWljb25zJyk7XG4gICAgICAgICAgICBkZWxldGVJbWcuaW5uZXJUZXh0ID0gJ2RlbGV0ZSc7XG4gICAgICAgICAgICBkZWxldGVCdG4uYXBwZW5kQ2hpbGQoZGVsZXRlSW1nKTtcbiAgICAgICAgICAgIHRhc2tPcHRpb25zLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG4gICAgICAgICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tPcHRpb25zKTtcbiAgICAgICAgICAgIHRhc2tJdGVtLmFwcGVuZENoaWxkKHRhc2tDb250YWluZXIpO1xuICAgICAgICAgICAgdG9Eb0xpc3RTZWN0aW9uLmFwcGVuZENoaWxkKHRhc2tJdGVtKTtcblxuICAgICAgICAgICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIFN0b3JhZ2UuZGVsZXRlVGFzayhwcm9qZWN0TmFtZSwgdGFzay50aXRsZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJUYXNrcyhwcm9qZWN0TmFtZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIHJlbmRlckN1c3RvbVByb2plY3RCdG5zKCl7XG4gICAgICAgIGNvbnN0IGN1c3RvbVByb2plY3RzQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXN0b21Qcm9qZWN0c0J0bnMnKTtcbiAgICAgICAgY29uc3QgcHJvamVjdHMgPSBTdG9yYWdlLmdldFRvRG9MaXN0KCkuZ2V0UHJvamVjdHMoKTtcbiAgICAgICAgY3VzdG9tUHJvamVjdHNCdG5zLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICAgICAgZm9yKGNvbnN0IGluZGV4IGluIHByb2plY3RzKXtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gcHJvamVjdHNbaW5kZXhdLm5hbWU7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUN1c3RvbVByb2plY3RCdG4ocHJvamVjdE5hbWUpO1xuICAgICAgICAgICAgY29uc3QgbmV3UHJvamVjdEJ1dHRvbiA9IHRoaXMuY3JlYXRlQ3VzdG9tUHJvamVjdEJ0bihwcm9qZWN0TmFtZSk7XG4gICAgICAgICAgICBjdXN0b21Qcm9qZWN0c0J0bnMuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEJ1dHRvbik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY3VzdG9tc1Byb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmN1c3RvbVByb2plY3RCdG4nKTtcbiAgICAgICAgY3VzdG9tc1Byb2plY3RzLmZvckVhY2goKHByb2plY3RCdG4pID0+IHtcbiAgICAgICAgICAgIHByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBwcm9qZWN0QnRuLnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0VGl0bGUnKS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICBjb25zdCBpc0FjdGl2ZSA9IHByb2plY3RCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdzaWRlQmFyQnRuLS1hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICBpZighaXNBY3RpdmUpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlYWN0aXZhdGVQcm9qZWN0QnRucygpO1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoJ3NpZGVCYXJCdG4tLWFjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclByb2plY3RDb250ZW50KHRpdGxlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGRlYWN0aXZhdGVQcm9qZWN0QnRucygpe1xuICAgICAgICBjb25zdCBhbGxUYXNrcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbGxUYXNrc0J0bicpO1xuICAgICAgICBjb25zdCB0b2RheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheUJ0bicpO1xuICAgICAgICBjb25zdCB3ZWVrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlZWtCdG4nKTtcbiAgICAgICAgY29uc3QgY3VzdG9tc1Byb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmN1c3RvbVByb2plY3RCdG4nKTtcblxuICAgICAgICBpZihhbGxUYXNrcy5jbGFzc0xpc3QuY29udGFpbnMoJ3NpZGVCYXJCdG4tLWFjdGl2ZScpKXtcbiAgICAgICAgICAgIGFsbFRhc2tzLmNsYXNzTGlzdC5yZW1vdmUoJ3NpZGVCYXJCdG4tLWFjdGl2ZScpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYodG9kYXkuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaWRlQmFyQnRuLS1hY3RpdmUnKSl7XG4gICAgICAgICAgICB0b2RheS5jbGFzc0xpc3QucmVtb3ZlKCdzaWRlQmFyQnRuLS1hY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHdlZWsuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaWRlQmFyQnRuLS1hY3RpdmUnKSl7XG4gICAgICAgICAgICB3ZWVrLmNsYXNzTGlzdC5yZW1vdmUoJ3NpZGVCYXJCdG4tLWFjdGl2ZScpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBjdXN0b21zUHJvamVjdHMuZm9yRWFjaChmdW5jdGlvbihwcm9qZWN0QnRuKXtcbiAgICAgICAgICAgICAgICBpZihwcm9qZWN0QnRuLmNsYXNzTGlzdC5jb250YWlucygnc2lkZUJhckJ0bi0tYWN0aXZlJykpe1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3NpZGVCYXJCdG4tLWFjdGl2ZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIENyZWF0ZSBjb250ZW50XG5cbn0iLCJleHBvcnQgY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgIHRoaXMudGFza3MgPSBbXTtcbiAgICB9XG5cbiAgICBnZXROYW1lKCkge1xuICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICB9XG4gIFxuICAgIHNldE5hbWUobmFtZSkge1xuICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIGdldFRhc2tzKCkge1xuICAgICAgcmV0dXJuIHRoaXMudGFza3M7XG4gICAgfVxuICBcbiAgICBzZXRUYXNrcyh0YXNrcykge1xuICAgICAgdGhpcy50YXNrcyA9IHRhc2tzO1xuICAgIH1cblxuICAgIGdldFRhc2sodGFza05hbWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suZ2V0VGl0bGUoKSA9PT0gdGFza05hbWUpXG4gICAgfVxuICBcbiAgICBjb250YWlucyh0YXNrTmFtZSkge1xuICAgICAgcmV0dXJuIHRoaXMudGFza3Muc29tZSgodGFzaykgPT4gdGFzay5nZXRUaXRsZSgpID09PSB0YXNrTmFtZSlcbiAgICB9XG4gIFxuICAgIGFkZFRhc2sobmV3VGFzaykge1xuICAgICAgaWYgKHRoaXMudGFza3MuZmluZCgodGFzaykgPT4gdGFzay5nZXRUaXRsZSgpID09PSBuZXdUYXNrLm5hbWUpKSByZXR1cm5cbiAgICAgIHRoaXMudGFza3MucHVzaChuZXdUYXNrKVxuICAgIH1cbiAgXG4gICAgZGVsZXRlVGFzayh0YXNrTmFtZSkge1xuICAgICAgdGhpcy50YXNrcyA9IHRoaXMudGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmdldFRpdGxlKCkgIT09IHRhc2tOYW1lKVxuICAgIH1cbiAgfSIsImltcG9ydCB7IHRvRG9MaXN0IH0gZnJvbSBcIi4vdG9Eb0xpc3RcIjtcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vdGFza1wiO1xuZXhwb3J0IGNsYXNzIFN0b3JhZ2V7XG5cbiAgICBzdGF0aWMgc2F2ZVRvRG9MaXN0KGRhdGEpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvRG9MaXN0JywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRUb0RvTGlzdCgpe1xuICAgICAgICBjb25zdCBzdG9yZWRMaXN0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvRG9MaXN0Jyk7XG4gICAgICAgIGlmKHN0b3JlZExpc3Qpe1xuICAgICAgICAgICAgY29uc3QgbGlzdCA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICAgICAgbmV3IHRvRG9MaXN0KCksXG4gICAgICAgICAgICAgICAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9Eb0xpc3QnKSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBsaXN0LnNldFByb2plY3RzKFxuICAgICAgICAgICAgICAgIGxpc3RcbiAgICAgICAgICAgICAgICAgIC5nZXRQcm9qZWN0cygpXG4gICAgICAgICAgICAgICAgICAubWFwKChwcm9qZWN0KSA9PiBPYmplY3QuYXNzaWduKG5ldyBQcm9qZWN0KCksIHByb2plY3QpKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgXG4gICAgICAgICAgICBsaXN0LmdldFByb2plY3RzKClcbiAgICAgICAgICAgICAgICAuZm9yRWFjaCgocHJvamVjdCkgPT5cbiAgICAgICAgICAgICAgICAgIHByb2plY3Quc2V0VGFza3MoXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3QuZ2V0VGFza3MoKS5tYXAoKHRhc2spID0+IE9iamVjdC5hc3NpZ24obmV3IFRhc2soKSwgdGFzaykpXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBsaXN0O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGxpc3QgPSBuZXcgdG9Eb0xpc3QoKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvRG9MaXN0JyxKU09OLnN0cmluZ2lmeShsaXN0KSk7XG5cbiAgICAgICAgcmV0dXJuIGxpc3Q7XG4gICAgfVxuXG4gICAgc3RhdGljIGFkZFByb2plY3QocHJvamVjdCl7XG4gICAgICAgIGNvbnN0IGxpc3QgPSB0aGlzLmdldFRvRG9MaXN0KCk7XG4gICAgICAgIGxpc3QuYWRkUHJvamVjdChwcm9qZWN0KTtcbiAgICAgICAgdGhpcy5zYXZlVG9Eb0xpc3QobGlzdCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGRlbGV0ZVByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICAgICAgY29uc3QgdG9Eb0xpc3QgPSBTdG9yYWdlLmdldFRvRG9MaXN0KCk7XG4gICAgICAgIHRvRG9MaXN0LmRlbGV0ZVByb2plY3QocHJvamVjdE5hbWUpO1xuICAgICAgICBTdG9yYWdlLnNhdmVUb0RvTGlzdCh0b0RvTGlzdCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGFkZFRhc2socHJvamVjdE5hbWUsIG5ld1Rhc2spe1xuICAgICAgICBjb25zdCB0b0RvTGlzdCA9IFN0b3JhZ2UuZ2V0VG9Eb0xpc3QoKTtcbiAgICAgICAgdG9Eb0xpc3QuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSkuYWRkVGFzayhuZXdUYXNrKTtcbiAgICAgICAgU3RvcmFnZS5zYXZlVG9Eb0xpc3QodG9Eb0xpc3QpO1xuICAgIH1cblxuICAgIHN0YXRpYyBkZWxldGVUYXNrKHByb2plY3ROYW1lLCB0YXNrTmFtZSkge1xuICAgICAgICBjb25zdCB0b0RvTGlzdCA9IFN0b3JhZ2UuZ2V0VG9Eb0xpc3QoKTtcbiAgICAgICAgdG9Eb0xpc3QuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSkuZGVsZXRlVGFzayh0YXNrTmFtZSk7XG4gICAgICAgIFN0b3JhZ2Uuc2F2ZVRvRG9MaXN0KHRvRG9MaXN0KTtcbiAgICB9XG59IiwiXG5leHBvcnQgY2xhc3MgVGFza3tcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHkpe1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB9XG5cbiAgICBnZXRUaXRsZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy50aXRsZTtcbiAgICB9XG5cbiAgICBzZXRUaXRsZSh2YWx1ZSl7XG4gICAgICAgIGlmKHZhbHVlKXtcbiAgICAgICAgICAgIHRoaXMudGl0bGUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldER1ZURhdGUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHVlRGF0ZTtcbiAgICB9XG5cbiAgICBzZXREdWVEYXRlKHZhbHVlKXtcbiAgICAgICAgaWYodmFsdWUpe1xuICAgICAgICAgICAgdGhpcy5kdWVEYXRlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRQcmlvcml0eSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5wcmlvcml0eTtcbiAgICB9XG5cbiAgICBzZXRQcmlvcml0eSh2YWx1ZSl7XG4gICAgICAgIGlmKHZhbHVlKXtcbiAgICAgICAgICAgIHRoaXMucHJpb3JpdHkgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbn0iLCJpbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vdGFza1wiO1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcblxuZXhwb3J0IGNsYXNzIHRvRG9MaXN0e1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMucHJvamVjdHMgPSBbXTtcbiAgICB9XG5cbiAgICBzZXRQcm9qZWN0cyhwcm9qZWN0cykge1xuICAgICAgICB0aGlzLnByb2plY3RzID0gcHJvamVjdHM7XG4gICAgfVxuICAgIFxuICAgIGdldFByb2plY3RzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0cztcbiAgICB9XG4gICAgXG4gICAgZ2V0UHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0Lm5hbWUgPT09IHByb2plY3ROYW1lKTtcbiAgICB9XG4gICAgXG4gICAgY29udGFpbnMocHJvamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdHMuc29tZSgocHJvamVjdCkgPT4gcHJvamVjdC5uYW1lID09PSBwcm9qZWN0TmFtZSk7XG4gICAgfVxuICAgIFxuICAgIGFkZFByb2plY3QobmV3UHJvamVjdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuICAgIH1cblxuICAgIGRlbGV0ZVByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdFRvRGVsZXRlID0gdGhpcy5wcm9qZWN0cy5maW5kKFxuICAgICAgICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0Lm5hbWUgPT09IHByb2plY3ROYW1lXG4gICAgICAgIClcbiAgICAgICAgdGhpcy5wcm9qZWN0cy5zcGxpY2UodGhpcy5wcm9qZWN0cy5pbmRleE9mKHByb2plY3RUb0RlbGV0ZSksIDEpXG4gICAgICB9XG5cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IFVJIH0gZnJvbSBcIi4vbW9kdWxlcy9VSVwiO1xuXG5VSS5sb2FkUGFnZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==