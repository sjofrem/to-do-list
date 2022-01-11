/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day (and year and month)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * var result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 * 
 * @example
 * // Are 4 September and 4 October in the same day?
 * var result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 * 
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * var result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */

function isSameDay(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfWeek/index.js */ "./node_modules/date-fns/esm/startOfWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isSameWeek
 * @category Week Helpers
 * @summary Are the given dates in the same week (and month and year)?
 *
 * @description
 * Are the given dates in the same week (and month and year)?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the dates are in the same week (and month and year)
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // Are 31 August 2014 and 4 September 2014 in the same week?
 * var result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))
 * //=> true
 *
 * @example
 * // If week starts with Monday,
 * // are 31 August 2014 and 4 September 2014 in the same week?
 * var result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {
 *   weekStartsOn: 1
 * })
 * //=> false
 * 
 * @example
 * // Are 1 January 2014 and 1 January 2015 in the same week?
 * var result = isSameWeek(new Date(2014, 0, 1), new Date(2015, 0, 1))
 * //=> false
 */
function isSameWeek(dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft, dirtyOptions);
  var dateRightStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight, dirtyOptions);
  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isThisWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isThisWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isThisWeek)
/* harmony export */ });
/* harmony import */ var _isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameWeek/index.js */ "./node_modules/date-fns/esm/isSameWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isThisWeek
 * @category Week Helpers
 * @summary Is the given date in the same week as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same week as the current date?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @param {Object} [options] - the object with options
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the date is in this week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // If today is 25 September 2014, is 21 September 2014 in this week?
 * var result = isThisWeek(new Date(2014, 8, 21))
 * //=> true
 *
 * @example
 * // If today is 25 September 2014 and week starts with Monday
 * // is 21 September 2014 in this week?
 * var result = isThisWeek(new Date(2014, 8, 21), { weekStartsOn: 1 })
 * //=> false
 */
function isThisWeek(dirtyDate, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now(), options);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isToday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isToday/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is today
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * var result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */

function isToday(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfWeek/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfWeek/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */

function startOfWeek(dirtyDate, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

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

            const newTask = new _task__WEBPACK_IMPORTED_MODULE_3__.Task(title, dueDate, priorirty, projectTitle);
            _storage__WEBPACK_IMPORTED_MODULE_2__.Storage.addTask(projectTitle,newTask);
            this.clearTasks();

            const tasks = _storage__WEBPACK_IMPORTED_MODULE_2__.Storage.getToDoList().getProject(projectTitle).getTasks();
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
        this.clearTasks();
        const tasks = _storage__WEBPACK_IMPORTED_MODULE_2__.Storage.getToDoList().getProject(title).getTasks();
        this.renderTasks(tasks, 'customTasks');
    }

    static renderAllTasks(){
        const projects = _storage__WEBPACK_IMPORTED_MODULE_2__.Storage.getToDoList().projects;
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

    static renderTodayTasks(){
        const projects = _storage__WEBPACK_IMPORTED_MODULE_2__.Storage.getToDoList().projects;
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
        const projects = _storage__WEBPACK_IMPORTED_MODULE_2__.Storage.getToDoList().projects;
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
                _storage__WEBPACK_IMPORTED_MODULE_2__.Storage.changeStatus(task.projectTitle, task.title);
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
                _storage__WEBPACK_IMPORTED_MODULE_2__.Storage.deleteTask(task.projectTitle, task.title);
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
                    const tasks = _storage__WEBPACK_IMPORTED_MODULE_2__.Storage.getToDoList().getProject(task.projectName).getTasks();
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

        _storage__WEBPACK_IMPORTED_MODULE_2__.Storage.changeTaskPriority(event.currentTarget.projectTitle, event.currentTarget.task.title, priority);
        _storage__WEBPACK_IMPORTED_MODULE_2__.Storage.changeTaskDueDate(event.currentTarget.projectTitle, event.currentTarget.task.title, newDueDate.value);
        _storage__WEBPACK_IMPORTED_MODULE_2__.Storage.changeTaskTitle(event.currentTarget.projectTitle, event.currentTarget.task.title, newTaskTitle.value);

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
            const tasks = _storage__WEBPACK_IMPORTED_MODULE_2__.Storage.getToDoList().getProject(event.currentTarget.projectTitle).getTasks();
            this.renderTasks(tasks, event.currentTarget.type);
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
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isThisWeek/index.js");


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

    getTasksToday(){
      return this.tasks.filter((task =>{
        const taskDate = new Date(task.getDateFormatted());
        if((0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(taskDate)){
          return task;
        }
      }));
    }

    getTasksWeek(){
      return this.tasks.filter((task =>{
        const taskDate = new Date(task.getDateFormatted());
        if((0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(taskDate)){
          return task;
        }
      }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBOztBQUVBLG1DQUFtQyw2Q0FBTztBQUMxQyxZQUFZLHdEQUFrQjs7QUFFOUI7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQSxnQ0FBZ0MsdUNBQUk7QUFDcEMsWUFBWSxxREFBZTtBQUMzQjs7QUFFQSwwQkFBMEIseURBQW1CO0FBQzdDOztBQUVBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZLDJEQUFxQjtBQUNqQztB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLEtBQUssR0FBRyxNQUFNLEdBQUcsSUFBSTtBQUN2QztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRThCO0FBQ007O0FBRTdCO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7O1VDbkNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOa0M7O0FBRWxDLG9EQUFXLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1NhbWVEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNTYW1lV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1RoaXNXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVG9kYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZkRheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL1VJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy90YXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy90b0RvTGlzdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cblxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsImltcG9ydCBzdGFydE9mRGF5IGZyb20gXCIuLi9zdGFydE9mRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1NhbWVEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciAwNjowMDowMCBhbmQgNCBTZXB0ZW1iZXIgMTg6MDA6MDAgaW4gdGhlIHNhbWUgZGF5P1xuICogdmFyIHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0LCA2LCAwKSwgbmV3IERhdGUoMjAxNCwgOCwgNCwgMTgsIDApKVxuICogLy89PiB0cnVlXG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgYW5kIDQgT2N0b2JlciBpbiB0aGUgc2FtZSBkYXk/XG4gKiB2YXIgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE0LCA5LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciwgMjAxNCBhbmQgNCBTZXB0ZW1iZXIsIDIwMTUgaW4gdGhlIHNhbWUgZGF5P1xuICogdmFyIHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNSwgOCwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTYW1lRGF5KGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZVJpZ2h0KTtcbiAgcmV0dXJuIGRhdGVMZWZ0U3RhcnRPZkRheS5nZXRUaW1lKCkgPT09IGRhdGVSaWdodFN0YXJ0T2ZEYXkuZ2V0VGltZSgpO1xufSIsImltcG9ydCBzdGFydE9mV2VlayBmcm9tIFwiLi4vc3RhcnRPZldlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNTYW1lV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSB3ZWVrIChhbmQgbW9udGggYW5kIHllYXIpP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSB3ZWVrIChhbmQgbW9udGggYW5kIHllYXIpP1xuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcilcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDMxIEF1Z3VzdCAyMDE0IGFuZCA0IFNlcHRlbWJlciAyMDE0IGluIHRoZSBzYW1lIHdlZWs/XG4gKiB2YXIgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCA3LCAzMSksIG5ldyBEYXRlKDIwMTQsIDgsIDQpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHdlZWsgc3RhcnRzIHdpdGggTW9uZGF5LFxuICogLy8gYXJlIDMxIEF1Z3VzdCAyMDE0IGFuZCA0IFNlcHRlbWJlciAyMDE0IGluIHRoZSBzYW1lIHdlZWs/XG4gKiB2YXIgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCA3LCAzMSksIG5ldyBEYXRlKDIwMTQsIDgsIDQpLCB7XG4gKiAgIHdlZWtTdGFydHNPbjogMVxuICogfSlcbiAqIC8vPT4gZmFsc2VcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSAxIEphbnVhcnkgMjAxNCBhbmQgMSBKYW51YXJ5IDIwMTUgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIHZhciByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDAsIDEpLCBuZXcgRGF0ZSgyMDE1LCAwLCAxKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTYW1lV2VlayhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCwgZGlydHlPcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnRTdGFydE9mV2VlayA9IHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZUxlZnQsIGRpcnR5T3B0aW9ucyk7XG4gIHZhciBkYXRlUmlnaHRTdGFydE9mV2VlayA9IHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZVJpZ2h0LCBkaXJ0eU9wdGlvbnMpO1xuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mV2Vlay5nZXRUaW1lKCkgPT09IGRhdGVSaWdodFN0YXJ0T2ZXZWVrLmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgaXNTYW1lV2VlayBmcm9tIFwiLi4vaXNTYW1lV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc1RoaXNXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgc2FtZSB3ZWVrIGFzIHRoZSBjdXJyZW50IGRhdGU/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHNhbWUgd2VlayBhcyB0aGUgY3VycmVudCBkYXRlP1xuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIHRoZSBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgaW4gdGhpcyB3ZWVrXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMjUgU2VwdGVtYmVyIDIwMTQsIGlzIDIxIFNlcHRlbWJlciAyMDE0IGluIHRoaXMgd2Vlaz9cbiAqIHZhciByZXN1bHQgPSBpc1RoaXNXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIxKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyAyNSBTZXB0ZW1iZXIgMjAxNCBhbmQgd2VlayBzdGFydHMgd2l0aCBNb25kYXlcbiAqIC8vIGlzIDIxIFNlcHRlbWJlciAyMDE0IGluIHRoaXMgd2Vlaz9cbiAqIHZhciByZXN1bHQgPSBpc1RoaXNXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIxKSwgeyB3ZWVrU3RhcnRzT246IDEgfSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUaGlzV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBpc1NhbWVXZWVrKGRpcnR5RGF0ZSwgRGF0ZS5ub3coKSwgb3B0aW9ucyk7XG59IiwiaW1wb3J0IGlzU2FtZURheSBmcm9tIFwiLi4vaXNTYW1lRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1RvZGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHRvZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDYgT2N0b2JlciAxNDowMDowMCB0b2RheT9cbiAqIHZhciByZXN1bHQgPSBpc1RvZGF5KG5ldyBEYXRlKDIwMTQsIDksIDYsIDE0LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVG9kYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gaXNTYW1lRGF5KGRpcnR5RGF0ZSwgRGF0ZS5ub3coKSk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDAyIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mRGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZldlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIHdlZWtcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gU3VuIEF1ZyAzMSAyMDE0IDAwOjAwOjAwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRoZSB3ZWVrIHN0YXJ0cyBvbiBNb25kYXksIHRoZSBzdGFydCBvZiB0aGUgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCksIHsgd2Vla1N0YXJ0c09uOiAxIH0pXG4gKiAvLz0+IE1vbiBTZXAgMDEgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgdmFyIGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlO1xuICB2YXIgbG9jYWxlV2Vla1N0YXJ0c09uID0gbG9jYWxlICYmIGxvY2FsZS5vcHRpb25zICYmIGxvY2FsZS5vcHRpb25zLndlZWtTdGFydHNPbjtcbiAgdmFyIGRlZmF1bHRXZWVrU3RhcnRzT24gPSBsb2NhbGVXZWVrU3RhcnRzT24gPT0gbnVsbCA/IDAgOiB0b0ludGVnZXIobG9jYWxlV2Vla1N0YXJ0c09uKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IG9wdGlvbnMud2Vla1N0YXJ0c09uID09IG51bGwgPyBkZWZhdWx0V2Vla1N0YXJ0c09uIDogdG9JbnRlZ2VyKG9wdGlvbnMud2Vla1N0YXJ0c09uKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXREYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgYXJndW1lbnQgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0LmlvL2ZqdWxlXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7IHRvRG9MaXN0IH0gZnJvbSBcIi4vdG9Eb0xpc3RcIjtcbmltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5pbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vdGFza1wiO1xuXG5leHBvcnQgY2xhc3MgVUl7XG4gICAgXG4gICAgc3RhdGljIGxvYWRQYWdlKCl7XG4gICAgICAgIHRoaXMuaW5pdE1vYmlsZU1lbnVCdG4oKTtcbiAgICAgICAgdGhpcy5pbml0UHJvamVjdEJ0bnMoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJDdXN0b21Qcm9qZWN0QnRucygpO1xuICAgICAgICB0aGlzLmluaXROZXdUYXNrQnRuKCk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIC8vRXZlbnQgbGlzdGVuZXJzXG4gICAgc3RhdGljIGluaXRNb2JpbGVNZW51QnRuKCl7XG4gICAgICAgIGNvbnN0IGJ0bk5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG5OYXYnKTtcbiAgICAgICAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGVCYXInKTtcbiAgICAgICAgYnRuTmF2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XG4gICAgICAgICAgICBjb25zdCBpc0FjdGl2ZSA9IG5hdi5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgaWYoaXNBY3RpdmUpe1xuICAgICAgICAgICAgICAgIG5hdi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgbmF2LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIHN0YXRpYyBpbml0UHJvamVjdEJ0bnMoKXtcbiAgICAgICAgY29uc3QgYWxsVGFza3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWxsVGFza3NCdG4nKTtcbiAgICAgICAgY29uc3QgdG9kYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kYXlCdG4nKTtcbiAgICAgICAgY29uc3Qgd2VlayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWVrQnRuJyk7XG4gICAgICAgIGNvbnN0IGNyZWF0ZVByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlUHJvamVjdCcpO1xuICAgICAgICBjb25zdCBjbG9zZVByb2plY3RNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZVByb2plY3RNb2RhbCcpO1xuICAgICAgICBjb25zdCBjbG9zZU5ld1Rhc2tNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZU5ld1Rhc2tNb2RhbCcpO1xuICAgICAgICBjb25zdCBjbG9zZUVkaXRUYXNrTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2VFZGl0VGFza01vZGFsJyk7XG4gICAgICAgIGNvbnN0IGFkZFByb2plY3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFByb2plY3RGb3JtJyk7XG4gICAgICAgIGNvbnN0IG5ld1Rhc2tGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Rhc2tGb3JtJyk7XG4gICAgICAgIFxuICAgICAgICBhbGxUYXNrcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xuICAgICAgICAgICAgY29uc3QgaXNBY3RpdmUgPSBhbGxUYXNrcy5jbGFzc0xpc3QuY29udGFpbnMoJ3NpZGVCYXJCdG4tLWFjdGl2ZScpO1xuICAgICAgICAgICAgaWYoIWlzQWN0aXZlKXtcbiAgICAgICAgICAgICAgICB0aGlzLmRlYWN0aXZhdGVQcm9qZWN0QnRucygpO1xuICAgICAgICAgICAgICAgIGFsbFRhc2tzLmNsYXNzTGlzdC5hZGQoJ3NpZGVCYXJCdG4tLWFjdGl2ZScpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdENvbnRlbnQnKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0Q29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgY29udGVudE5hdmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGNvbnRlbnROYXZiYXIuY2xhc3NMaXN0LmFkZCgnY29udGVudE5hdmJhcicpO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICAgICAgICAgIHByb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKCdjdXJyZW50UHJvamVjdFRpdGxlJyk7XG4gICAgICAgICAgICAgICAgcHJvamVjdFRpdGxlLmlubmVyVGV4dCA9ICdBbGwgVGFza3MnO1xuICAgICAgICAgICAgICAgIGNvbnRlbnROYXZiYXIuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0Q29udGVudC5hcHBlbmRDaGlsZChjb250ZW50TmF2YmFyKTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgdG9Eb0xpc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICB0b0RvTGlzdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b0RvTGlzdCcpO1xuICAgICAgICAgICAgICAgIHByb2plY3RDb250ZW50LmFwcGVuZENoaWxkKHRvRG9MaXN0Q29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckFsbFRhc2tzKCk7XG5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRvZGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XG4gICAgICAgICAgICBjb25zdCBpc0FjdGl2ZSA9IHRvZGF5LmNsYXNzTGlzdC5jb250YWlucygnc2lkZUJhckJ0bi0tYWN0aXZlJyk7XG4gICAgICAgICAgICBpZighaXNBY3RpdmUpe1xuICAgICAgICAgICAgICAgIHRoaXMuZGVhY3RpdmF0ZVByb2plY3RCdG5zKCk7XG4gICAgICAgICAgICAgICAgdG9kYXkuY2xhc3NMaXN0LmFkZCgnc2lkZUJhckJ0bi0tYWN0aXZlJyk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0Q29udGVudCcpO1xuICAgICAgICAgICAgICAgIHByb2plY3RDb250ZW50LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBjb250ZW50TmF2YmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgY29udGVudE5hdmJhci5jbGFzc0xpc3QuYWRkKCdjb250ZW50TmF2YmFyJyk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgICAgICAgICAgcHJvamVjdFRpdGxlLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnRQcm9qZWN0VGl0bGUnKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0VGl0bGUuaW5uZXJUZXh0ID0gJ1RvZGF5JztcbiAgICAgICAgICAgICAgICBjb250ZW50TmF2YmFyLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG4gICAgICAgICAgICAgICAgcHJvamVjdENvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGVudE5hdmJhcik7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IHRvRG9MaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgdG9Eb0xpc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9Eb0xpc3QnKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0Q29udGVudC5hcHBlbmRDaGlsZCh0b0RvTGlzdENvbnRhaW5lcik7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclRvZGF5VGFza3MoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHdlZWsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcbiAgICAgICAgICAgIGNvbnN0IGlzQWN0aXZlID0gd2Vlay5jbGFzc0xpc3QuY29udGFpbnMoJ3NpZGVCYXJCdG4tLWFjdGl2ZScpO1xuICAgICAgICAgICAgaWYoIWlzQWN0aXZlKXtcbiAgICAgICAgICAgICAgICB0aGlzLmRlYWN0aXZhdGVQcm9qZWN0QnRucygpO1xuICAgICAgICAgICAgICAgIHdlZWsuY2xhc3NMaXN0LmFkZCgnc2lkZUJhckJ0bi0tYWN0aXZlJyk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0Q29udGVudCcpO1xuICAgICAgICAgICAgICAgIHByb2plY3RDb250ZW50LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBjb250ZW50TmF2YmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgY29udGVudE5hdmJhci5jbGFzc0xpc3QuYWRkKCdjb250ZW50TmF2YmFyJyk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgICAgICAgICAgcHJvamVjdFRpdGxlLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnRQcm9qZWN0VGl0bGUnKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0VGl0bGUuaW5uZXJUZXh0ID0gJ1dlZWsnO1xuICAgICAgICAgICAgICAgIGNvbnRlbnROYXZiYXIuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0Q29udGVudC5hcHBlbmRDaGlsZChjb250ZW50TmF2YmFyKTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgdG9Eb0xpc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICB0b0RvTGlzdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b0RvTGlzdCcpO1xuICAgICAgICAgICAgICAgIHByb2plY3RDb250ZW50LmFwcGVuZENoaWxkKHRvRG9MaXN0Q29udGFpbmVyKTtcblxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyV2Vla1Rhc2tzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBjcmVhdGVQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XG4gICAgICAgICAgICBjb25zdCBjcmVhdGVQcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlUHJvamVjdE1vZGFsJyk7XG4gICAgICAgICAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ292ZXJsYXknKTtcblxuICAgICAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGNyZWF0ZVByb2plY3RNb2RhbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNsb3NlUHJvamVjdE1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XG4gICAgICAgICAgICB0aGlzLmhpZGVDcmVhdGVQcm9qZWN0TW9kYWwoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNsb3NlTmV3VGFza01vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XG4gICAgICAgICAgICB0aGlzLmhpZGVOZXdUYXNrTW9kYWwoKTtcbiAgICAgICAgfSlcbiAgICAgICAgY2xvc2VFZGl0VGFza01vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XG4gICAgICAgICAgICB0aGlzLmhpZGVFZGl0VGFza01vZGFsKCk7XG4gICAgICAgIH0pXG4gICAgICAgIGFkZFByb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PntcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RUaXRsZScpLnZhbHVlO1xuXG4gICAgICAgICAgICB0aGlzLmhpZGVDcmVhdGVQcm9qZWN0TW9kYWwoKTtcblxuICAgICAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KHRpdGxlKTtcbiAgICAgICAgICAgIFN0b3JhZ2UuYWRkUHJvamVjdChuZXdQcm9qZWN0KTtcblxuICAgICAgICAgICAgYWRkUHJvamVjdEZvcm0ucmVzZXQoKTtcblxuICAgICAgICAgICAgdGhpcy5yZW5kZXJDdXN0b21Qcm9qZWN0QnRucygpO1xuICAgICAgICB9KTtcbiAgICAgICAgbmV3VGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+e1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza1RpdGxlJykudmFsdWU7XG4gICAgICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZURhdGUnKS52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IHByaW9yaXJ0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJwcmlvcml0eVwiXTpjaGVja2VkJykudmFsdWU7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudFByb2plY3RUaXRsZScpLnRleHRDb250ZW50O1xuXG5cbiAgICAgICAgICAgIHRoaXMuaGlkZU5ld1Rhc2tNb2RhbCgpO1xuXG4gICAgICAgICAgICBjb25zdCBuZXdUYXNrID0gbmV3IFRhc2sodGl0bGUsIGR1ZURhdGUsIHByaW9yaXJ0eSwgcHJvamVjdFRpdGxlKTtcbiAgICAgICAgICAgIFN0b3JhZ2UuYWRkVGFzayhwcm9qZWN0VGl0bGUsbmV3VGFzayk7XG4gICAgICAgICAgICB0aGlzLmNsZWFyVGFza3MoKTtcblxuICAgICAgICAgICAgY29uc3QgdGFza3MgPSBTdG9yYWdlLmdldFRvRG9MaXN0KCkuZ2V0UHJvamVjdChwcm9qZWN0VGl0bGUpLmdldFRhc2tzKCk7XG4gICAgICAgICAgICB0aGlzLnJlbmRlclRhc2tzKHRhc2tzLCAnY3VzdG9tVGFza3MnKTtcblxuICAgICAgICAgICAgbmV3VGFza0Zvcm0ucmVzZXQoKTtcblxuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIGNsZWFyVGFza3MoKXtcbiAgICAgICAgY29uc3QgdG9Eb0xpc3RTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvRG9MaXN0Jyk7XG4gICAgICAgIHRvRG9MaXN0U2VjdGlvbi5pbm5lckhUTUwgPSAnJztcbiAgICB9XG5cbiAgICBzdGF0aWMgaW5pdE5ld1Rhc2tCdG4oKXtcbiAgICAgICAgY29uc3QgbmV3VGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdUYXNrQnRuJyk7XG4gICAgICAgIG5ld1Rhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdUYXNrTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3VGFza01vZGFsJyk7XG4gICAgICAgICAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ292ZXJsYXknKTtcblxuICAgICAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIG5ld1Rhc2tNb2RhbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGhpZGVDcmVhdGVQcm9qZWN0TW9kYWwoKXtcbiAgICAgICAgY29uc3QgY3JlYXRlUHJvamVjdE1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZVByb2plY3RNb2RhbCcpO1xuICAgICAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ292ZXJsYXknKTtcblxuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICBjcmVhdGVQcm9qZWN0TW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGhpZGVOZXdUYXNrTW9kYWwoKXtcbiAgICAgICAgY29uc3QgbmV3VGFza01vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Rhc2tNb2RhbCcpO1xuICAgICAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ292ZXJsYXknKTtcblxuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICBuZXdUYXNrTW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGhpZGVFZGl0VGFza01vZGFsKCl7XG4gICAgICAgIGNvbnN0IGVkaXRUYXNrTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdFRhc2tNb2RhbCcpO1xuICAgICAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ292ZXJsYXknKTtcblxuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICBlZGl0VGFza01vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVDdXN0b21Qcm9qZWN0QnRuKHRpdGxlKXtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjb25zdCBkaXZDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGNvbnN0IGRpdkNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXG4gICAgICAgIG5ld1Byb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnc2lkZUJhckJ0bicpO1xuICAgICAgICBuZXdQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbVByb2plY3RCdG4nKTtcblxuICAgICAgICBpY29uLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLWljb25zJyk7XG4gICAgICAgIGljb24uaW5uZXJUZXh0ID0gJ2Fzc2lnbm1lbnQnO1xuICAgICAgICBkaXZDb250ZW50LmFwcGVuZENoaWxkKGljb24pO1xuXG4gICAgICAgIHRleHQuY2xhc3NMaXN0LmFkZCgncHJvamVjdFRpdGxlJyk7XG4gICAgICAgIHRleHQuaW5uZXJUZXh0ID0gdGl0bGU7XG4gICAgICAgIGRpdkNvbnRlbnQuYXBwZW5kQ2hpbGQodGV4dCk7XG5cbiAgICAgICAgY2xvc2UuY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtaWNvbnMnKTtcbiAgICAgICAgY2xvc2UuY2xhc3NMaXN0LmFkZCgnZGVsZXRlUHJvamVjdEJ0bicpO1xuICAgICAgICBjbG9zZS5pbm5lclRleHQgPSAnY2xvc2UnO1xuICAgICAgICBkaXZDbG9zZS5hcHBlbmRDaGlsZChjbG9zZSk7XG5cbiAgICAgICAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBTdG9yYWdlLmRlbGV0ZVByb2plY3QodGl0bGUpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJDdXN0b21Qcm9qZWN0QnRucygpO1xuICAgICAgICB9KTtcblxuICAgICAgICBuZXdQcm9qZWN0QnV0dG9uLmFwcGVuZENoaWxkKGRpdkNvbnRlbnQpO1xuICAgICAgICBuZXdQcm9qZWN0QnV0dG9uLmFwcGVuZENoaWxkKGRpdkNsb3NlKTtcbiAgICAgICAgcmV0dXJuIG5ld1Byb2plY3RCdXR0b247XG4gICAgfVxuXG4gICAgc3RhdGljIHJlbmRlclByb2plY3RDb250ZW50KHRpdGxlKXtcbiAgICAgICAgY29uc3QgcHJvamVjdENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdENvbnRlbnQnKTtcbiAgICAgICAgcHJvamVjdENvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG5cbiAgICAgICAgY29uc3QgY29udGVudE5hdmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250ZW50TmF2YmFyLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnROYXZiYXInKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICBwcm9qZWN0VGl0bGUuY2xhc3NMaXN0LmFkZCgnY3VycmVudFByb2plY3RUaXRsZScpO1xuICAgICAgICBwcm9qZWN0VGl0bGUuaW5uZXJUZXh0ID0gdGl0bGU7XG4gICAgICAgIGNvbnRlbnROYXZiYXIuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcblxuICAgICAgICBjb25zdCBuZXdUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIG5ld1Rhc2tCdG4uc2V0QXR0cmlidXRlKCdpZCcsJ25ld1Rhc2tCdG4nKTtcblxuICAgICAgICBjb25zdCBkaXZUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHRleHQuaW5uZXJUZXh0ID0gJ05ldyBUYXNrJztcbiAgICAgICAgZGl2VGV4dC5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICAgICAgbmV3VGFza0J0bi5hcHBlbmRDaGlsZChkaXZUZXh0KTtcblxuICAgICAgICBjb25zdCBkaXZJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBpbWcuY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtaWNvbnMnKTtcbiAgICAgICAgaW1nLmlubmVyVGV4dCA9ICdhZGQnO1xuICAgICAgICBkaXZJbWcuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICAgICAgbmV3VGFza0J0bi5hcHBlbmRDaGlsZChkaXZJbWcpO1xuICAgICAgICBjb250ZW50TmF2YmFyLmFwcGVuZENoaWxkKG5ld1Rhc2tCdG4pO1xuICAgICAgICBwcm9qZWN0Q29udGVudC5hcHBlbmRDaGlsZChjb250ZW50TmF2YmFyKTtcblxuICAgICAgICBjb25zdCB0b0RvTGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0b0RvTGlzdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b0RvTGlzdCcpO1xuICAgICAgICBwcm9qZWN0Q29udGVudC5hcHBlbmRDaGlsZCh0b0RvTGlzdENvbnRhaW5lcik7XG5cbiAgICAgICAgdGhpcy5pbml0TmV3VGFza0J0bigpO1xuICAgICAgICB0aGlzLmNsZWFyVGFza3MoKTtcbiAgICAgICAgY29uc3QgdGFza3MgPSBTdG9yYWdlLmdldFRvRG9MaXN0KCkuZ2V0UHJvamVjdCh0aXRsZSkuZ2V0VGFza3MoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJUYXNrcyh0YXNrcywgJ2N1c3RvbVRhc2tzJyk7XG4gICAgfVxuXG4gICAgc3RhdGljIHJlbmRlckFsbFRhc2tzKCl7XG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gU3RvcmFnZS5nZXRUb0RvTGlzdCgpLnByb2plY3RzO1xuICAgICAgICBsZXQgYWxsVGFza3NMaXN0ID0gW107XG4gICAgICAgIHRoaXMuY2xlYXJUYXNrcygpO1xuICAgICAgICBmb3IgKGNvbnN0IHByb2plY3RJbmRleCBpbiBwcm9qZWN0cyl7XG4gICAgICAgICAgICBjb25zdCB0YXNrcyA9IHByb2plY3RzW3Byb2plY3RJbmRleF0udGFza3M7XG4gICAgICAgICAgICBmb3IoY29uc3QgdGFza0luZGV4IGluIHRhc2tzKXtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrID0gdGFza3NbdGFza0luZGV4XTtcbiAgICAgICAgICAgICAgICBhbGxUYXNrc0xpc3QucHVzaCh0YXNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBTb3J0IHRhc2tzIGJ5IGRhdGVcbiAgICAgICAgYWxsVGFza3NMaXN0LnNvcnQoZnVuY3Rpb24gY29tcGFyZShhLCBiKSB7XG4gICAgICAgICAgICB2YXIgZGF0ZUEgPSBuZXcgRGF0ZShhLmdldERhdGVGb3JtYXR0ZWQoKSk7XG4gICAgICAgICAgICB2YXIgZGF0ZUIgPSBuZXcgRGF0ZShiLmdldERhdGVGb3JtYXR0ZWQoKSk7XG4gICAgICAgICAgICByZXR1cm4gZGF0ZUEgLSBkYXRlQjtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucmVuZGVyVGFza3MoYWxsVGFza3NMaXN0LCAnYWxsVGFza3MnKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcmVuZGVyVG9kYXlUYXNrcygpe1xuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IFN0b3JhZ2UuZ2V0VG9Eb0xpc3QoKS5wcm9qZWN0cztcbiAgICAgICAgbGV0IHRvZGF5VGFza3NMaXN0ID0gW107XG4gICAgICAgIHRoaXMuY2xlYXJUYXNrcygpO1xuICAgICAgICBmb3IgKGNvbnN0IHByb2plY3RJbmRleCBpbiBwcm9qZWN0cyl7XG4gICAgICAgICAgICBjb25zdCB0YXNrcyA9IHByb2plY3RzW3Byb2plY3RJbmRleF0uZ2V0VGFza3NUb2RheSgpO1xuICAgICAgICAgICAgZm9yKGNvbnN0IHRhc2tJbmRleCBpbiB0YXNrcyl7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFzayA9IHRhc2tzW3Rhc2tJbmRleF07XG4gICAgICAgICAgICAgICAgdG9kYXlUYXNrc0xpc3QucHVzaCh0YXNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbmRlclRhc2tzKHRvZGF5VGFza3NMaXN0LCAndG9kYXlUYXNrcycpO1xuICAgIH1cblxuICAgIHN0YXRpYyByZW5kZXJXZWVrVGFza3MoKXtcbiAgICAgICAgY29uc3QgcHJvamVjdHMgPSBTdG9yYWdlLmdldFRvRG9MaXN0KCkucHJvamVjdHM7XG4gICAgICAgIGxldCB3ZWVrVGFza3NMaXN0ID0gW107XG4gICAgICAgIHRoaXMuY2xlYXJUYXNrcygpO1xuICAgICAgICBmb3IgKGNvbnN0IHByb2plY3RJbmRleCBpbiBwcm9qZWN0cyl7XG4gICAgICAgICAgICBjb25zdCB0YXNrcyA9IHByb2plY3RzW3Byb2plY3RJbmRleF0uZ2V0VGFza3NXZWVrKCk7XG4gICAgICAgICAgICBmb3IoY29uc3QgdGFza0luZGV4IGluIHRhc2tzKXtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrID0gdGFza3NbdGFza0luZGV4XTtcbiAgICAgICAgICAgICAgICB3ZWVrVGFza3NMaXN0LnB1c2godGFzayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gU29ydCB0YXNrcyBieSBkYXRlXG4gICAgICAgIHdlZWtUYXNrc0xpc3Quc29ydChmdW5jdGlvbiBjb21wYXJlKGEsIGIpIHtcbiAgICAgICAgICAgIHZhciBkYXRlQSA9IG5ldyBEYXRlKGEuZ2V0RGF0ZUZvcm1hdHRlZCgpKTtcbiAgICAgICAgICAgIHZhciBkYXRlQiA9IG5ldyBEYXRlKGIuZ2V0RGF0ZUZvcm1hdHRlZCgpKTtcbiAgICAgICAgICAgIHJldHVybiBkYXRlQSAtIGRhdGVCO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5yZW5kZXJUYXNrcyh3ZWVrVGFza3NMaXN0LCAnd2Vla1Rhc2tzJyk7XG4gICAgfVxuXG4gICAgc3RhdGljIHJlbmRlclRhc2tzKHRhc2tzLCB0eXBlKXtcbiAgICAgICAgY29uc3QgdG9Eb0xpc3RTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvRG9MaXN0Jyk7XG4gICAgICAgIGZvcihjb25zdCBpbmRleCBpbiB0YXNrcyl7XG4gICAgICAgICAgICBjb25zdCB0YXNrID0gdGFza3NbaW5kZXhdO1xuXG4gICAgICAgICAgICBjb25zdCB0YXNrSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGFza0l0ZW0uY2xhc3NMaXN0LmFkZCgndGFza0l0ZW0nKTtcblxuICAgICAgICAgICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ2NoZWNrQm94Jyk7XG4gICAgICAgICAgICBpZih0YXNrLnN0YXR1cyl7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICAgICAgY2hlY2suY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtaWNvbnMnKTtcbiAgICAgICAgICAgICAgICBjaGVjay5jbGFzc0xpc3QuYWRkKCdjaGVjaycpO1xuICAgICAgICAgICAgICAgIGNoZWNrLmlubmVyVGV4dCA9ICdkb25lJztcbiAgICAgICAgICAgICAgICBjaGVja2JveC5hcHBlbmRDaGlsZChjaGVjayk7XG4gICAgICAgICAgICAgICAgdGFza0l0ZW0uc3R5bGUub3BhY2l0eSA9IFwiMC42XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0YXNrSXRlbS5hcHBlbmRDaGlsZChjaGVja2JveCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFza0NvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICBjb25zdCB0YXNrSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGFza0luZm8uY2xhc3NMaXN0LmFkZCgndGFza0luZm8nKTtcblxuICAgICAgICAgICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICAgICAgICAgIHRhc2tUaXRsZS5pbm5lclRleHQgPSB0YXNrLnRpdGxlO1xuICAgICAgICAgICAgdGFza0luZm8uYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcblxuICAgICAgICAgICAgY29uc3QgdGFza0RldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRhc2tEZXRhaWxzLmNsYXNzTGlzdC5hZGQoJ3Rhc2tJdGVtLS1kZXRhaWxzJyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eScpO1xuICAgICAgICAgICAgcHJpb3JpdHkuc2V0QXR0cmlidXRlKCdpZCcsYHByaW9yaXR5JHt0YXNrLnByaW9yaXR5fWApO1xuICAgICAgICAgICAgdGFza0RldGFpbHMuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuXG4gICAgICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoJ2R1ZURhdGUnKTtcbiAgICAgICAgICAgIGR1ZURhdGUuaW5uZXJUZXh0ID0gYCB8ICR7dGFzay5kdWVEYXRlfWA7XG4gICAgICAgICAgICB0YXNrRGV0YWlscy5hcHBlbmRDaGlsZChkdWVEYXRlKTtcbiAgICAgICAgICAgIHRhc2tJbmZvLmFwcGVuZENoaWxkKHRhc2tEZXRhaWxzKTtcbiAgICAgICAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0luZm8pO1xuXG4gICAgICAgICAgICBjb25zdCB0YXNrT3B0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGFza09wdGlvbnMuY2xhc3NMaXN0LmFkZCgndGFza09wdGlvbnMnKTtcblxuICAgICAgICAgICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgZWRpdEJ0bi5jbGFzc0xpc3QuYWRkKCd0YXNrT3B0aW9uQnRuJyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGVkaXRJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICBlZGl0SW1nLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLWljb25zJyk7XG4gICAgICAgICAgICBlZGl0SW1nLmlubmVyVGV4dCA9ICdlZGl0JztcbiAgICAgICAgICAgIGVkaXRCdG4uYXBwZW5kQ2hpbGQoZWRpdEltZyk7XG4gICAgICAgICAgICB0YXNrT3B0aW9ucy5hcHBlbmRDaGlsZChlZGl0QnRuKTtcblxuICAgICAgICAgICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgndGFza09wdGlvbkJ0bicpO1xuXG4gICAgICAgICAgICBjb25zdCBkZWxldGVJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICBkZWxldGVJbWcuY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtaWNvbnMnKTtcbiAgICAgICAgICAgIGRlbGV0ZUltZy5pbm5lclRleHQgPSAnZGVsZXRlJztcbiAgICAgICAgICAgIGRlbGV0ZUJ0bi5hcHBlbmRDaGlsZChkZWxldGVJbWcpO1xuICAgICAgICAgICAgdGFza09wdGlvbnMuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcbiAgICAgICAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza09wdGlvbnMpO1xuICAgICAgICAgICAgdGFza0l0ZW0uYXBwZW5kQ2hpbGQodGFza0NvbnRhaW5lcik7XG4gICAgICAgICAgICB0b0RvTGlzdFNlY3Rpb24uYXBwZW5kQ2hpbGQodGFza0l0ZW0pO1xuXG4gICAgICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBTdG9yYWdlLmNoYW5nZVN0YXR1cyh0YXNrLnByb2plY3RUaXRsZSwgdGFzay50aXRsZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hlY2sgPSBjaGVja2JveC5xdWVyeVNlbGVjdG9yKCcuY2hlY2snKTtcbiAgICAgICAgICAgICAgICBpZihjaGVjayl7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrYm94LnJlbW92ZUNoaWxkKGNoZWNrKTtcbiAgICAgICAgICAgICAgICAgICAgdGFza0l0ZW0uc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2suY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtaWNvbnMnKTtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2suY2xhc3NMaXN0LmFkZCgnY2hlY2snKTtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2suaW5uZXJUZXh0ID0gJ2RvbmUnO1xuICAgICAgICAgICAgICAgICAgICBjaGVja2JveC5hcHBlbmRDaGlsZChjaGVjayk7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tJdGVtLnN0eWxlLm9wYWNpdHkgPSBcIjAuNlwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVkaXRUYXNrTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdFRhc2tNb2RhbCcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3ZlcmxheScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGVkaXRUYXNrRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0VGFza0Zvcm0nKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1Rhc2tUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdUYXNrVGl0bGUnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdEdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld0R1ZURhdGUnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdQcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBucCR7dGFzay5wcmlvcml0eX1gKTtcblxuICAgICAgICAgICAgICAgIG5ld1Rhc2tUaXRsZS52YWx1ZSA9IHRhc2sudGl0bGU7XG4gICAgICAgICAgICAgICAgbmV3RHVlRGF0ZS52YWx1ZSA9IHRhc2suZHVlRGF0ZTtcbiAgICAgICAgICAgICAgICBuZXdQcmlvcml0eS5jaGVja2VkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgZWRpdFRhc2tNb2RhbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblxuXG4gICAgICAgICAgICAgICAgZWRpdFRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHRoaXMudXBkYXRlVGFzay5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgICAgICBlZGl0VGFza0Zvcm0udGFzayA9IHRhc2s7XG4gICAgICAgICAgICAgICAgZWRpdFRhc2tGb3JtLnByb2plY3RUaXRsZSA9IHRhc2sucHJvamVjdFRpdGxlO1xuICAgICAgICAgICAgICAgIGVkaXRUYXNrRm9ybS50eXBlID0gdHlwZTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgU3RvcmFnZS5kZWxldGVUYXNrKHRhc2sucHJvamVjdFRpdGxlLCB0YXNrLnRpdGxlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyVGFza3MoKVxuICAgICAgICAgICAgICAgIGlmKHR5cGUgPT0gJ2FsbFRhc2tzJyl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyQWxsVGFza3MoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZih0eXBlID09ICd0b2RheVRhc2tzJyl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyVG9kYXlUYXNrcygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmKHR5cGUgPT0gJ3dlZWtUYXNrcycpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcldlZWtUYXNrcygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXNrcyA9IFN0b3JhZ2UuZ2V0VG9Eb0xpc3QoKS5nZXRQcm9qZWN0KHRhc2sucHJvamVjdE5hbWUpLmdldFRhc2tzKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyVGFza3ModGFza3MsIHR5cGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgdXBkYXRlVGFzayhldmVudCl7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGVkaXRUYXNrRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0VGFza0Zvcm0nKTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwibmV3UHJpb3JpdHlcIl06Y2hlY2tlZCcpLnZhbHVlO1xuICAgICAgICBjb25zdCBuZXdUYXNrVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3VGFza1RpdGxlJyk7XG4gICAgICAgIGNvbnN0IG5ld0R1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3RHVlRGF0ZScpO1xuXG4gICAgICAgIFN0b3JhZ2UuY2hhbmdlVGFza1ByaW9yaXR5KGV2ZW50LmN1cnJlbnRUYXJnZXQucHJvamVjdFRpdGxlLCBldmVudC5jdXJyZW50VGFyZ2V0LnRhc2sudGl0bGUsIHByaW9yaXR5KTtcbiAgICAgICAgU3RvcmFnZS5jaGFuZ2VUYXNrRHVlRGF0ZShldmVudC5jdXJyZW50VGFyZ2V0LnByb2plY3RUaXRsZSwgZXZlbnQuY3VycmVudFRhcmdldC50YXNrLnRpdGxlLCBuZXdEdWVEYXRlLnZhbHVlKTtcbiAgICAgICAgU3RvcmFnZS5jaGFuZ2VUYXNrVGl0bGUoZXZlbnQuY3VycmVudFRhcmdldC5wcm9qZWN0VGl0bGUsIGV2ZW50LmN1cnJlbnRUYXJnZXQudGFzay50aXRsZSwgbmV3VGFza1RpdGxlLnZhbHVlKTtcblxuICAgICAgICB0aGlzLmhpZGVFZGl0VGFza01vZGFsKCk7XG5cbiAgICAgICAgZWRpdFRhc2tGb3JtLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHRoaXMudXBkYXRlVGFzayk7XG4gICAgICAgIHRoaXMuY2xlYXJUYXNrcygpO1xuICAgICAgICBpZihldmVudC5jdXJyZW50VGFyZ2V0LnR5cGUgPT0gJ2FsbFRhc2tzJyl7XG4gICAgICAgICAgICB0aGlzLnJlbmRlckFsbFRhc2tzKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihldmVudC5jdXJyZW50VGFyZ2V0LnR5cGUgPT0gJ3RvZGF5VGFza3MnKXtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyVG9kYXlUYXNrcygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoZXZlbnQuY3VycmVudFRhcmdldC50eXBlID09ICd3ZWVrVGFza3MnKXtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyV2Vla1Rhc2tzKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tzID0gU3RvcmFnZS5nZXRUb0RvTGlzdCgpLmdldFByb2plY3QoZXZlbnQuY3VycmVudFRhcmdldC5wcm9qZWN0VGl0bGUpLmdldFRhc2tzKCk7XG4gICAgICAgICAgICB0aGlzLnJlbmRlclRhc2tzKHRhc2tzLCBldmVudC5jdXJyZW50VGFyZ2V0LnR5cGUpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBzdGF0aWMgcmVuZGVyQ3VzdG9tUHJvamVjdEJ0bnMoKXtcbiAgICAgICAgY29uc3QgY3VzdG9tUHJvamVjdHNCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1c3RvbVByb2plY3RzQnRucycpO1xuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IFN0b3JhZ2UuZ2V0VG9Eb0xpc3QoKS5nZXRQcm9qZWN0cygpO1xuICAgICAgICBjdXN0b21Qcm9qZWN0c0J0bnMuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgICAgICBmb3IoY29uc3QgaW5kZXggaW4gcHJvamVjdHMpe1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBwcm9qZWN0c1tpbmRleF0ubmFtZTtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQ3VzdG9tUHJvamVjdEJ0bihwcm9qZWN0TmFtZSk7XG4gICAgICAgICAgICBjb25zdCBuZXdQcm9qZWN0QnV0dG9uID0gdGhpcy5jcmVhdGVDdXN0b21Qcm9qZWN0QnRuKHByb2plY3ROYW1lKTtcbiAgICAgICAgICAgIGN1c3RvbVByb2plY3RzQnRucy5hcHBlbmRDaGlsZChuZXdQcm9qZWN0QnV0dG9uKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjdXN0b21zUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY3VzdG9tUHJvamVjdEJ0bicpO1xuICAgICAgICBjdXN0b21zUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdEJ0bikgPT4ge1xuICAgICAgICAgICAgcHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IHByb2plY3RCdG4ucXVlcnlTZWxlY3RvcignLnByb2plY3RUaXRsZScpLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgIGNvbnN0IGlzQWN0aXZlID0gcHJvamVjdEJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ3NpZGVCYXJCdG4tLWFjdGl2ZScpO1xuICAgICAgICAgICAgICAgIGlmKCFpc0FjdGl2ZSl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVhY3RpdmF0ZVByb2plY3RCdG5zKCk7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RCdG4uY2xhc3NMaXN0LmFkZCgnc2lkZUJhckJ0bi0tYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyUHJvamVjdENvbnRlbnQodGl0bGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZGVhY3RpdmF0ZVByb2plY3RCdG5zKCl7XG4gICAgICAgIGNvbnN0IGFsbFRhc2tzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FsbFRhc2tzQnRuJyk7XG4gICAgICAgIGNvbnN0IHRvZGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZGF5QnRuJyk7XG4gICAgICAgIGNvbnN0IHdlZWsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2Vla0J0bicpO1xuICAgICAgICBjb25zdCBjdXN0b21zUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY3VzdG9tUHJvamVjdEJ0bicpO1xuXG4gICAgICAgIGlmKGFsbFRhc2tzLmNsYXNzTGlzdC5jb250YWlucygnc2lkZUJhckJ0bi0tYWN0aXZlJykpe1xuICAgICAgICAgICAgYWxsVGFza3MuY2xhc3NMaXN0LnJlbW92ZSgnc2lkZUJhckJ0bi0tYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZih0b2RheS5jbGFzc0xpc3QuY29udGFpbnMoJ3NpZGVCYXJCdG4tLWFjdGl2ZScpKXtcbiAgICAgICAgICAgIHRvZGF5LmNsYXNzTGlzdC5yZW1vdmUoJ3NpZGVCYXJCdG4tLWFjdGl2ZScpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYod2Vlay5jbGFzc0xpc3QuY29udGFpbnMoJ3NpZGVCYXJCdG4tLWFjdGl2ZScpKXtcbiAgICAgICAgICAgIHdlZWsuY2xhc3NMaXN0LnJlbW92ZSgnc2lkZUJhckJ0bi0tYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGN1c3RvbXNQcm9qZWN0cy5mb3JFYWNoKGZ1bmN0aW9uKHByb2plY3RCdG4pe1xuICAgICAgICAgICAgICAgIGlmKHByb2plY3RCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdzaWRlQmFyQnRuLS1hY3RpdmUnKSl7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RCdG4uY2xhc3NMaXN0LnJlbW92ZSgnc2lkZUJhckJ0bi0tYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbn0iLCJpbXBvcnQgeyB0b0RhdGUsIGlzVG9kYXksIGlzVGhpc1dlZWsgLCBmb3JtYXR9IGZyb20gJ2RhdGUtZm5zJztcblxuZXhwb3J0IGNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICB0aGlzLnRhc2tzID0gW107XG4gICAgfVxuXG4gICAgZ2V0TmFtZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfVxuICBcbiAgICBzZXROYW1lKG5hbWUpIHtcbiAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICB9XG4gICAgfVxuICBcbiAgICBnZXRUYXNrcygpIHtcbiAgICAgIHJldHVybiB0aGlzLnRhc2tzO1xuICAgIH1cbiAgXG4gICAgc2V0VGFza3ModGFza3MpIHtcbiAgICAgIHRoaXMudGFza3MgPSB0YXNrcztcbiAgICB9XG5cbiAgICBnZXRUYXNrKHRhc2tUaXRsZSkge1xuICAgICAgcmV0dXJuIHRoaXMudGFza3MuZmluZCgodGFzaykgPT4gdGFzay5nZXRUaXRsZSgpID09PSB0YXNrVGl0bGUpXG4gICAgfVxuICBcbiAgICBjb250YWlucyh0YXNrVGl0bGUpIHtcbiAgICAgIHJldHVybiB0aGlzLnRhc2tzLnNvbWUoKHRhc2spID0+IHRhc2suZ2V0VGl0bGUoKSA9PT0gdGFza1RpdGxlKVxuICAgIH1cbiAgXG4gICAgYWRkVGFzayhuZXdUYXNrKSB7XG4gICAgICBpZiAodGhpcy50YXNrcy5maW5kKCh0YXNrKSA9PiB0YXNrLmdldFRpdGxlKCkgPT09IG5ld1Rhc2submFtZSkpIHJldHVyblxuICAgICAgdGhpcy50YXNrcy5wdXNoKG5ld1Rhc2spXG4gICAgfVxuICBcbiAgICBkZWxldGVUYXNrKHRhc2tUaXRsZSkge1xuICAgICAgdGhpcy50YXNrcyA9IHRoaXMudGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmdldFRpdGxlKCkgIT09IHRhc2tUaXRsZSlcbiAgICB9XG5cbiAgICBnZXRUYXNrc1RvZGF5KCl7XG4gICAgICByZXR1cm4gdGhpcy50YXNrcy5maWx0ZXIoKHRhc2sgPT57XG4gICAgICAgIGNvbnN0IHRhc2tEYXRlID0gbmV3IERhdGUodGFzay5nZXREYXRlRm9ybWF0dGVkKCkpO1xuICAgICAgICBpZihpc1RvZGF5KHRhc2tEYXRlKSl7XG4gICAgICAgICAgcmV0dXJuIHRhc2s7XG4gICAgICAgIH1cbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBnZXRUYXNrc1dlZWsoKXtcbiAgICAgIHJldHVybiB0aGlzLnRhc2tzLmZpbHRlcigodGFzayA9PntcbiAgICAgICAgY29uc3QgdGFza0RhdGUgPSBuZXcgRGF0ZSh0YXNrLmdldERhdGVGb3JtYXR0ZWQoKSk7XG4gICAgICAgIGlmKGlzVGhpc1dlZWsodGFza0RhdGUpKXtcbiAgICAgICAgICByZXR1cm4gdGFzaztcbiAgICAgICAgfVxuICAgICAgfSkpO1xuICAgIH1cbiAgfSIsImltcG9ydCB7IHRvRG9MaXN0IH0gZnJvbSBcIi4vdG9Eb0xpc3RcIjtcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vdGFza1wiO1xuZXhwb3J0IGNsYXNzIFN0b3JhZ2V7XG5cbiAgICBzdGF0aWMgc2F2ZVRvRG9MaXN0KGRhdGEpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvRG9MaXN0JywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRUb0RvTGlzdCgpe1xuICAgICAgICBjb25zdCBzdG9yZWRMaXN0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvRG9MaXN0Jyk7XG4gICAgICAgIGlmKHN0b3JlZExpc3Qpe1xuICAgICAgICAgICAgY29uc3QgbGlzdCA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICAgICAgbmV3IHRvRG9MaXN0KCksXG4gICAgICAgICAgICAgICAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9Eb0xpc3QnKSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBsaXN0LnNldFByb2plY3RzKFxuICAgICAgICAgICAgICAgIGxpc3RcbiAgICAgICAgICAgICAgICAgIC5nZXRQcm9qZWN0cygpXG4gICAgICAgICAgICAgICAgICAubWFwKChwcm9qZWN0KSA9PiBPYmplY3QuYXNzaWduKG5ldyBQcm9qZWN0KCksIHByb2plY3QpKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgXG4gICAgICAgICAgICBsaXN0LmdldFByb2plY3RzKClcbiAgICAgICAgICAgICAgICAuZm9yRWFjaCgocHJvamVjdCkgPT5cbiAgICAgICAgICAgICAgICAgIHByb2plY3Quc2V0VGFza3MoXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3QuZ2V0VGFza3MoKS5tYXAoKHRhc2spID0+IE9iamVjdC5hc3NpZ24obmV3IFRhc2soKSwgdGFzaykpXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBsaXN0O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGxpc3QgPSBuZXcgdG9Eb0xpc3QoKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvRG9MaXN0JyxKU09OLnN0cmluZ2lmeShsaXN0KSk7XG5cbiAgICAgICAgcmV0dXJuIGxpc3Q7XG4gICAgfVxuXG4gICAgc3RhdGljIGFkZFByb2plY3QocHJvamVjdCl7XG4gICAgICAgIGNvbnN0IGxpc3QgPSB0aGlzLmdldFRvRG9MaXN0KCk7XG4gICAgICAgIGxpc3QuYWRkUHJvamVjdChwcm9qZWN0KTtcbiAgICAgICAgdGhpcy5zYXZlVG9Eb0xpc3QobGlzdCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGRlbGV0ZVByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICAgICAgY29uc3QgdG9Eb0xpc3QgPSBTdG9yYWdlLmdldFRvRG9MaXN0KCk7XG4gICAgICAgIHRvRG9MaXN0LmRlbGV0ZVByb2plY3QocHJvamVjdE5hbWUpO1xuICAgICAgICBTdG9yYWdlLnNhdmVUb0RvTGlzdCh0b0RvTGlzdCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGFkZFRhc2socHJvamVjdE5hbWUsIG5ld1Rhc2spe1xuICAgICAgICBjb25zdCB0b0RvTGlzdCA9IFN0b3JhZ2UuZ2V0VG9Eb0xpc3QoKTtcbiAgICAgICAgdG9Eb0xpc3QuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSkuYWRkVGFzayhuZXdUYXNrKTtcbiAgICAgICAgU3RvcmFnZS5zYXZlVG9Eb0xpc3QodG9Eb0xpc3QpO1xuICAgIH1cblxuICAgIHN0YXRpYyBkZWxldGVUYXNrKHByb2plY3ROYW1lLCB0YXNrVGl0bGUpIHtcbiAgICAgICAgY29uc3QgdG9Eb0xpc3QgPSBTdG9yYWdlLmdldFRvRG9MaXN0KCk7XG4gICAgICAgIHRvRG9MaXN0LmdldFByb2plY3QocHJvamVjdE5hbWUpLmRlbGV0ZVRhc2sodGFza1RpdGxlKTtcbiAgICAgICAgU3RvcmFnZS5zYXZlVG9Eb0xpc3QodG9Eb0xpc3QpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjaGFuZ2VUYXNrVGl0bGUocHJvamVjdE5hbWUsIHRhc2tUaXRsZSwgbmV3VGFza1RpdGxlKXtcbiAgICAgICAgY29uc3QgdG9Eb0xpc3QgPSBTdG9yYWdlLmdldFRvRG9MaXN0KCk7XG4gICAgICAgIHRvRG9MaXN0LmdldFByb2plY3QocHJvamVjdE5hbWUpLmdldFRhc2sodGFza1RpdGxlKS5zZXRUaXRsZShuZXdUYXNrVGl0bGUpO1xuICAgICAgICBTdG9yYWdlLnNhdmVUb0RvTGlzdCh0b0RvTGlzdCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNoYW5nZVRhc2tEdWVEYXRlKHByb2plY3ROYW1lLCB0YXNrVGl0bGUsIG5ld0R1ZURhdGUpe1xuICAgICAgICBjb25zdCB0b0RvTGlzdCA9IFN0b3JhZ2UuZ2V0VG9Eb0xpc3QoKTtcbiAgICAgICAgdG9Eb0xpc3QuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSkuZ2V0VGFzayh0YXNrVGl0bGUpLnNldER1ZURhdGUobmV3RHVlRGF0ZSk7XG4gICAgICAgIFN0b3JhZ2Uuc2F2ZVRvRG9MaXN0KHRvRG9MaXN0KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY2hhbmdlVGFza1ByaW9yaXR5KHByb2plY3ROYW1lLCB0YXNrVGl0bGUsIG5ld1ByaW9yaXR5KXtcbiAgICAgICAgY29uc3QgdG9Eb0xpc3QgPSBTdG9yYWdlLmdldFRvRG9MaXN0KCk7XG4gICAgICAgIHRvRG9MaXN0LmdldFByb2plY3QocHJvamVjdE5hbWUpLmdldFRhc2sodGFza1RpdGxlKS5zZXRQcmlvcml0eShuZXdQcmlvcml0eSk7XG4gICAgICAgIFN0b3JhZ2Uuc2F2ZVRvRG9MaXN0KHRvRG9MaXN0KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY2hhbmdlU3RhdHVzKHByb2plY3ROYW1lLCB0YXNrVGl0bGUpe1xuICAgICAgICBjb25zdCB0b0RvTGlzdCA9IFN0b3JhZ2UuZ2V0VG9Eb0xpc3QoKTtcbiAgICAgICAgdG9Eb0xpc3QuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSkuZ2V0VGFzayh0YXNrVGl0bGUpLmNoYW5nZVN0YXR1cygpO1xuICAgICAgICBTdG9yYWdlLnNhdmVUb0RvTGlzdCh0b0RvTGlzdCk7XG4gICAgfVxufSIsIlxuZXhwb3J0IGNsYXNzIFRhc2t7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0VGl0bGUpe1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wcm9qZWN0VGl0bGUgPSBwcm9qZWN0VGl0bGU7XG4gICAgfVxuXG4gICAgZ2V0VGl0bGUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMudGl0bGU7XG4gICAgfVxuXG4gICAgc2V0VGl0bGUodGl0bGUpe1xuICAgICAgICBpZih0aXRsZSl7XG4gICAgICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXREdWVEYXRlKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmR1ZURhdGU7XG4gICAgfVxuXG4gICAgc2V0RHVlRGF0ZShkdWVEYXRlKXtcbiAgICAgICAgaWYoZHVlRGF0ZSl7XG4gICAgICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0UHJpb3JpdHkoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJpb3JpdHk7XG4gICAgfVxuXG4gICAgc2V0UHJpb3JpdHkocHJpb3JpcnR5KXtcbiAgICAgICAgaWYocHJpb3JpcnR5KXtcbiAgICAgICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcmlydHk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRTdGF0dXMoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdHVzO1xuICAgIH1cblxuICAgIGNoYW5nZVN0YXR1cygpe1xuICAgICAgICB0aGlzLnN0YXR1cyA9ICF0aGlzLnN0YXR1cztcbiAgICB9XG5cbiAgICBnZXRQcm9qZWN0VGl0bGUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdFRpdGxlO1xuICAgIH1cblxuICAgIHNldFByb2plY3RUaXRsZShwcm9qZWN0VGl0bGUpe1xuICAgICAgICBpZihwcm9qZWN0VGl0bGUpe1xuICAgICAgICAgICAgdGhpcy5wcm9qZWN0VGl0bGUgPSBwcm9qZWN0VGl0bGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXREYXRlRm9ybWF0dGVkKCkge1xuICAgICAgICBjb25zdCBkYXkgPSB0aGlzLmR1ZURhdGUuc3BsaXQoJy0nKVsyXTtcbiAgICAgICAgY29uc3QgbW9udGggPSB0aGlzLmR1ZURhdGUuc3BsaXQoJy0nKVsxXTtcbiAgICAgICAgY29uc3QgeWVhciA9IHRoaXMuZHVlRGF0ZS5zcGxpdCgnLScpWzBdO1xuICAgICAgICByZXR1cm4gYCR7eWVhcn0vJHttb250aH0vJHtkYXl9YDtcbiAgICB9XG4gICAgXG59IiwiaW1wb3J0IHsgVGFzayB9IGZyb20gXCIuL3Rhc2tcIjtcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5cbmV4cG9ydCBjbGFzcyB0b0RvTGlzdHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLnByb2plY3RzID0gW107XG4gICAgfVxuXG4gICAgc2V0UHJvamVjdHMocHJvamVjdHMpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0cyA9IHByb2plY3RzO1xuICAgIH1cbiAgICBcbiAgICBnZXRQcm9qZWN0cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdHM7XG4gICAgfVxuICAgIFxuICAgIGdldFByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5uYW1lID09PSBwcm9qZWN0TmFtZSk7XG4gICAgfVxuICAgIFxuICAgIGNvbnRhaW5zKHByb2plY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RzLnNvbWUoKHByb2plY3QpID0+IHByb2plY3QubmFtZSA9PT0gcHJvamVjdE5hbWUpO1xuICAgIH1cbiAgICBcbiAgICBhZGRQcm9qZWN0KG5ld1Byb2plY3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcbiAgICB9XG5cbiAgICBkZWxldGVQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RUb0RlbGV0ZSA9IHRoaXMucHJvamVjdHMuZmluZChcbiAgICAgICAgICAocHJvamVjdCkgPT4gcHJvamVjdC5uYW1lID09PSBwcm9qZWN0TmFtZVxuICAgICAgICApXG4gICAgICAgIHRoaXMucHJvamVjdHMuc3BsaWNlKHRoaXMucHJvamVjdHMuaW5kZXhPZihwcm9qZWN0VG9EZWxldGUpLCAxKVxuICAgIH1cblxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgVUkgfSBmcm9tIFwiLi9tb2R1bGVzL1VJXCI7XG5cblVJLmxvYWRQYWdlKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9