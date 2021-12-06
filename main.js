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


class UI{
    
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
            const newProject = new _project__WEBPACK_IMPORTED_MODULE_0__.Project(title);

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
      this._name = name;
      this._projectTasks = [];
    }

    get name() {
      return this._name;
    }
  
    set name(value) {
      if (value) {
        this._name = value;
      }
    }
  
    get projectTasks() {
      return this._projectTasks;
    }
  
    set projectTasks(value) {
      if (value) {
        this._projectTasks.push(value);
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBb0M7O0FBRTdCO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsbUNBQW1DLDZDQUFPOztBQUUxQztBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDNUpPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDekJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOa0M7O0FBRWxDLG9EQUFXLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvVUkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcblxuZXhwb3J0IGNsYXNzIFVJe1xuICAgIFxuICAgIHN0YXRpYyBsb2FkUGFnZSgpe1xuICAgICAgICB0aGlzLmluaXRNb2JpbGVNZW51QnRuKCk7XG4gICAgICAgIHRoaXMuaW5pdFByb2plY3RCdG5zKCk7XG4gICAgICAgIHRoaXMuaW5pdEN1c3RvbVByb2plY3RCdG5zKCk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIC8vRXZlbnQgbGlzdGVuZXJzXG4gICAgc3RhdGljIGluaXRNb2JpbGVNZW51QnRuKCl7XG4gICAgICAgIGNvbnN0IGJ0bk5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG5OYXYnKTtcbiAgICAgICAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGVCYXInKTtcbiAgICAgICAgYnRuTmF2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XG4gICAgICAgICAgICBjb25zdCBpc0FjdGl2ZSA9IG5hdi5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgaWYoaXNBY3RpdmUpe1xuICAgICAgICAgICAgICAgIG5hdi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgbmF2LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH1cbiAgICBzdGF0aWMgaW5pdFByb2plY3RCdG5zKCl7XG4gICAgICAgIGNvbnN0IGFsbFRhc2tzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FsbFRhc2tzQnRuJyk7XG4gICAgICAgIGNvbnN0IHRvZGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZGF5QnRuJyk7XG4gICAgICAgIGNvbnN0IHdlZWsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2Vla0J0bicpO1xuICAgICAgICBjb25zdCBjcmVhdGVQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZVByb2plY3QnKTtcbiAgICAgICAgY29uc3QgY2xvc2VQcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2VQcm9qZWN0TW9kYWwnKTtcbiAgICAgICAgY29uc3QgYWRkUHJvamVjdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkUHJvamVjdEZvcm0nKTtcbiAgICAgICAgXG4gICAgICAgIGFsbFRhc2tzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XG4gICAgICAgICAgICBjb25zdCBpc0FjdGl2ZSA9IGFsbFRhc2tzLmNsYXNzTGlzdC5jb250YWlucygnc2lkZUJhckJ0bi0tYWN0aXZlJyk7XG4gICAgICAgICAgICBpZighaXNBY3RpdmUpe1xuICAgICAgICAgICAgICAgIHRoaXMuZGVhY3RpdmF0ZVByb2plY3RCdG5zKCk7XG4gICAgICAgICAgICAgICAgYWxsVGFza3MuY2xhc3NMaXN0LmFkZCgnc2lkZUJhckJ0bi0tYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0b2RheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xuICAgICAgICAgICAgY29uc3QgaXNBY3RpdmUgPSB0b2RheS5jbGFzc0xpc3QuY29udGFpbnMoJ3NpZGVCYXJCdG4tLWFjdGl2ZScpO1xuICAgICAgICAgICAgaWYoIWlzQWN0aXZlKXtcbiAgICAgICAgICAgICAgICB0aGlzLmRlYWN0aXZhdGVQcm9qZWN0QnRucygpO1xuICAgICAgICAgICAgICAgIHRvZGF5LmNsYXNzTGlzdC5hZGQoJ3NpZGVCYXJCdG4tLWFjdGl2ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgd2Vlay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xuICAgICAgICAgICAgY29uc3QgaXNBY3RpdmUgPSB3ZWVrLmNsYXNzTGlzdC5jb250YWlucygnc2lkZUJhckJ0bi0tYWN0aXZlJyk7XG4gICAgICAgICAgICBpZighaXNBY3RpdmUpe1xuICAgICAgICAgICAgICAgIHRoaXMuZGVhY3RpdmF0ZVByb2plY3RCdG5zKCk7XG4gICAgICAgICAgICAgICAgd2Vlay5jbGFzc0xpc3QuYWRkKCdzaWRlQmFyQnRuLS1hY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNyZWF0ZVByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcbiAgICAgICAgICAgIGNvbnN0IGNyZWF0ZVByb2plY3RNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGVQcm9qZWN0TW9kYWwnKTtcbiAgICAgICAgICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3ZlcmxheScpO1xuXG4gICAgICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgY3JlYXRlUHJvamVjdE1vZGFsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICB9KTtcbiAgICAgICAgY2xvc2VQcm9qZWN0TW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGVDcmVhdGVQcm9qZWN0TW9kYWwoKVxuICAgICAgICB9KTtcbiAgICAgICAgYWRkUHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+e1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgY3VzdG9tUHJvamVjdHNCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1c3RvbVByb2plY3RzQnRucycpO1xuICAgICAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RUaXRsZScpLnZhbHVlO1xuXG4gICAgICAgICAgICB0aGlzLmhpZGVDcmVhdGVQcm9qZWN0TW9kYWwoKTtcblxuICAgICAgICAgICAgYWRkUHJvamVjdEZvcm0ucmVzZXQoKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdCh0aXRsZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IG5ld1Byb2plY3RCdXR0b24gPSB0aGlzLmNyZWF0ZUN1c3RvbVByb2plY3RCdG4odGl0bGUpO1xuICAgICAgICAgICAgY3VzdG9tUHJvamVjdHNCdG5zLmFwcGVuZENoaWxkKG5ld1Byb2plY3RCdXR0b24pO1xuXG4gICAgICAgICAgICB0aGlzLmluaXRDdXN0b21Qcm9qZWN0QnRucygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaGlkZUNyZWF0ZVByb2plY3RNb2RhbCgpe1xuICAgICAgICBjb25zdCBjcmVhdGVQcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlUHJvamVjdE1vZGFsJyk7XG4gICAgICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3ZlcmxheScpO1xuXG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIGNyZWF0ZVByb2plY3RNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlQ3VzdG9tUHJvamVjdEJ0bih0aXRsZSl7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY29uc3QgZGl2Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBjb25zdCBkaXZDbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblxuICAgICAgICBuZXdQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3NpZGVCYXJCdG4nKTtcbiAgICAgICAgbmV3UHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjdXN0b21Qcm9qZWN0QnRuJyk7XG5cbiAgICAgICAgaWNvbi5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1pY29ucycpO1xuICAgICAgICBpY29uLmlubmVyVGV4dCA9ICdhc3NpZ25tZW50JztcbiAgICAgICAgZGl2Q29udGVudC5hcHBlbmRDaGlsZChpY29uKTtcblxuICAgICAgICB0ZXh0LmlubmVyVGV4dCA9IHRpdGxlO1xuICAgICAgICBkaXZDb250ZW50LmFwcGVuZENoaWxkKHRleHQpO1xuXG4gICAgICAgIGNsb3NlLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLWljb25zJyk7XG4gICAgICAgIGNsb3NlLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZVByb2plY3RCdG4nKTtcbiAgICAgICAgY2xvc2UuaW5uZXJUZXh0ID0gJ2Nsb3NlJztcbiAgICAgICAgZGl2Q2xvc2UuYXBwZW5kQ2hpbGQoY2xvc2UpO1xuXG4gICAgICAgIG5ld1Byb2plY3RCdXR0b24uYXBwZW5kQ2hpbGQoZGl2Q29udGVudCk7XG4gICAgICAgIG5ld1Byb2plY3RCdXR0b24uYXBwZW5kQ2hpbGQoZGl2Q2xvc2UpO1xuICAgICAgICByZXR1cm4gbmV3UHJvamVjdEJ1dHRvbjtcbiAgICB9XG5cbiAgICBzdGF0aWMgaW5pdEN1c3RvbVByb2plY3RCdG5zKCl7XG4gICAgICAgIGNvbnN0IGN1c3RvbXNQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jdXN0b21Qcm9qZWN0QnRuJyk7XG4gICAgICAgIGN1c3RvbXNQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0QnRuKSA9PiB7XG4gICAgICAgICAgICBwcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlzQWN0aXZlID0gcHJvamVjdEJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ3NpZGVCYXJCdG4tLWFjdGl2ZScpO1xuICAgICAgICAgICAgICAgIGlmKCFpc0FjdGl2ZSl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVhY3RpdmF0ZVByb2plY3RCdG5zKCk7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RCdG4uY2xhc3NMaXN0LmFkZCgnc2lkZUJhckJ0bi0tYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN0YXRpYyBkZWFjdGl2YXRlUHJvamVjdEJ0bnMoKXtcbiAgICAgICAgY29uc3QgYWxsVGFza3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWxsVGFza3NCdG4nKTtcbiAgICAgICAgY29uc3QgdG9kYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kYXlCdG4nKTtcbiAgICAgICAgY29uc3Qgd2VlayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWVrQnRuJyk7XG4gICAgICAgIGNvbnN0IGN1c3RvbXNQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jdXN0b21Qcm9qZWN0QnRuJyk7XG5cbiAgICAgICAgaWYoYWxsVGFza3MuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaWRlQmFyQnRuLS1hY3RpdmUnKSl7XG4gICAgICAgICAgICBhbGxUYXNrcy5jbGFzc0xpc3QucmVtb3ZlKCdzaWRlQmFyQnRuLS1hY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHRvZGF5LmNsYXNzTGlzdC5jb250YWlucygnc2lkZUJhckJ0bi0tYWN0aXZlJykpe1xuICAgICAgICAgICAgdG9kYXkuY2xhc3NMaXN0LnJlbW92ZSgnc2lkZUJhckJ0bi0tYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZih3ZWVrLmNsYXNzTGlzdC5jb250YWlucygnc2lkZUJhckJ0bi0tYWN0aXZlJykpe1xuICAgICAgICAgICAgd2Vlay5jbGFzc0xpc3QucmVtb3ZlKCdzaWRlQmFyQnRuLS1hY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgY3VzdG9tc1Byb2plY3RzLmZvckVhY2goZnVuY3Rpb24ocHJvamVjdEJ0bil7XG4gICAgICAgICAgICAgICAgaWYocHJvamVjdEJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ3NpZGVCYXJCdG4tLWFjdGl2ZScpKXtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdzaWRlQmFyQnRuLS1hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBDcmVhdGUgY29udGVudFxuXG59IiwiZXhwb3J0IGNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICAgICAgdGhpcy5fcHJvamVjdFRhc2tzID0gW107XG4gICAgfVxuXG4gICAgZ2V0IG5hbWUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgICB9XG4gIFxuICAgIHNldCBuYW1lKHZhbHVlKSB7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgXG4gICAgZ2V0IHByb2plY3RUYXNrcygpIHtcbiAgICAgIHJldHVybiB0aGlzLl9wcm9qZWN0VGFza3M7XG4gICAgfVxuICBcbiAgICBzZXQgcHJvamVjdFRhc2tzKHZhbHVlKSB7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fcHJvamVjdFRhc2tzLnB1c2godmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgVUkgfSBmcm9tIFwiLi9tb2R1bGVzL1VJXCI7XG5cblVJLmxvYWRQYWdlKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9