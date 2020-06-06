/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Constants.js":
/*!**************************!*\
  !*** ./src/Constants.js ***!
  \**************************/
/*! exports provided: DOMstrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DOMstrings\", function() { return DOMstrings; });\nconst DOMstrings = {\n  inputType: \".add__type\",\n  inputDescription: \".add__description\",\n  inputValue: \".add__value\",\n  inputButton: \".add__btn\",\n  incomeContainer: \".income__list\",\n  expensesContainer: \".expenses__list\",\n  budgetLabel: \".budget__value\",\n  incomeLabel: \".budget__income--value\",\n  expenseLabel: \".budget__expenses--value\",\n  percentageLabel: \".budget__expenses--percentage\",\n  container: \".container\",\n  expensesPercentageLabel: \".item__percentage\",\n  dateLabel: \".budget__title--month\",\n};\n\n\n//# sourceURL=webpack:///./src/Constants.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _functions_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/functions */ \"./src/functions/functions.js\");\n\n\nclass App {\n  constructor() {\n    console.log(\"Application has started\");\n    _functions_functions__WEBPACK_IMPORTED_MODULE_0__[\"UIctrl\"].displayMonth();\n\n    _functions_functions__WEBPACK_IMPORTED_MODULE_0__[\"UIctrl\"].displayBudget({\n      budget: 0,\n      totalInc: 0,\n      totalExp: 0,\n      percentage: -1,\n    });\n\n    this.EventListener();\n  }\n\n  EventListener() {\n    document\n      .querySelector(_functions_functions__WEBPACK_IMPORTED_MODULE_0__[\"DOMstrings\"].inputButton)\n      .addEventListener(\"click\", _functions_functions__WEBPACK_IMPORTED_MODULE_0__[\"addItem\"]);\n\n    document.addEventListener(\"keypress\", (e) => {\n      if (e.keyCode === 13 || e.which === 13) {\n        Object(_functions_functions__WEBPACK_IMPORTED_MODULE_0__[\"addItem\"])();\n      }\n    });\n\n    document\n      .querySelector(_functions_functions__WEBPACK_IMPORTED_MODULE_0__[\"DOMstrings\"].container)\n      .addEventListener(\"click\", _functions_functions__WEBPACK_IMPORTED_MODULE_0__[\"deleteItem\"]);\n\n    document\n      .querySelector(_functions_functions__WEBPACK_IMPORTED_MODULE_0__[\"DOMstrings\"].inputType)\n      .addEventListener(\"change\", _functions_functions__WEBPACK_IMPORTED_MODULE_0__[\"UIctrl\"].changedType);\n  }\n}\n\nnew App();\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/controller/Budget.js":
/*!**********************************!*\
  !*** ./src/controller/Budget.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Budget; });\n/* harmony import */ var _model_Expense__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/Expense */ \"./src/model/Expense.js\");\n/* harmony import */ var _model_Income__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/Income */ \"./src/model/Income.js\");\n/* harmony import */ var _model_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/model */ \"./src/model/model.js\");\n\n\n\n\nclass Budget {\n  calculateTotal(type) {\n    let sum = 0;\n    _model_model__WEBPACK_IMPORTED_MODULE_2__[\"data\"].allItems[type].forEach((current) => (sum += current.value));\n\n    _model_model__WEBPACK_IMPORTED_MODULE_2__[\"data\"].totals[type] = sum;\n  }\n\n  addItem(type, des, val) {\n    let newItem, ID;\n\n    // Create new ID\n    if (_model_model__WEBPACK_IMPORTED_MODULE_2__[\"data\"].allItems[type].length > 0) {\n      ID = _model_model__WEBPACK_IMPORTED_MODULE_2__[\"data\"].allItems[type][_model_model__WEBPACK_IMPORTED_MODULE_2__[\"data\"].allItems[type].length - 1].id + 1;\n    } else {\n      ID = 0;\n    }\n\n    //Create new item based on 'inc' or 'exp' type\n    if (type === \"exp\") {\n      newItem = new _model_Expense__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ID, des, val);\n    } else {\n      newItem = new _model_Income__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ID, des, val);\n    }\n\n    // Push it into our data structure\n    _model_model__WEBPACK_IMPORTED_MODULE_2__[\"data\"].allItems[type].push(newItem);\n\n    // Return the new element\n    return newItem;\n  }\n\n  calculateBudget() {\n    // calcualte total income and expenses\n    this.calculateTotal(\"exp\");\n    this.calculateTotal(\"inc\");\n\n    // calculate the budget: income - expenses\n    _model_model__WEBPACK_IMPORTED_MODULE_2__[\"data\"].budget = _model_model__WEBPACK_IMPORTED_MODULE_2__[\"data\"].totals.inc - _model_model__WEBPACK_IMPORTED_MODULE_2__[\"data\"].totals.exp;\n\n    // calculate the percentage of income that we spent\n    if (_model_model__WEBPACK_IMPORTED_MODULE_2__[\"data\"].totals.inc > 0) {\n      _model_model__WEBPACK_IMPORTED_MODULE_2__[\"data\"].percentage = Math.round((_model_model__WEBPACK_IMPORTED_MODULE_2__[\"data\"].totals.exp / _model_model__WEBPACK_IMPORTED_MODULE_2__[\"data\"].totals.inc) * 100);\n    } else {\n      _model_model__WEBPACK_IMPORTED_MODULE_2__[\"data\"].percentage = -1;\n    }\n  }\n\n  calculatePercentages() {\n    _model_model__WEBPACK_IMPORTED_MODULE_2__[\"data\"].allItems.exp.forEach((current) =>\n      current.calculatePercentage(_model_model__WEBPACK_IMPORTED_MODULE_2__[\"data\"].totals.inc)\n    );\n  }\n\n  getPercentages() {\n    const allPerc = _model_model__WEBPACK_IMPORTED_MODULE_2__[\"data\"].allItems.exp.map((current) => current.getPercentage());\n    return allPerc;\n  }\n\n  getBudget() {\n    return {\n      budget: _model_model__WEBPACK_IMPORTED_MODULE_2__[\"data\"].budget,\n      totalInc: _model_model__WEBPACK_IMPORTED_MODULE_2__[\"data\"].totals.inc,\n      totalExp: _model_model__WEBPACK_IMPORTED_MODULE_2__[\"data\"].totals.exp,\n      percentage: _model_model__WEBPACK_IMPORTED_MODULE_2__[\"data\"].percentage,\n    };\n  }\n  deleteItem(type, id) {\n    let index, ids;\n\n    ids = _model_model__WEBPACK_IMPORTED_MODULE_2__[\"data\"].allItems[type].map((current) => current.id);\n\n    index = ids.indexOf(id);\n\n    if (index !== -1) {\n      _model_model__WEBPACK_IMPORTED_MODULE_2__[\"data\"].allItems[type].splice(index, 1);\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./src/controller/Budget.js?");

/***/ }),

/***/ "./src/controller/Ui.js":
/*!******************************!*\
  !*** ./src/controller/Ui.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return UiControls; });\n/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants */ \"./src/Constants.js\");\n/* harmony import */ var _functions_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/functions */ \"./src/functions/functions.js\");\n\n\n\nclass UiControls {\n  getInput() {\n    return {\n      type: document.querySelector(_Constants__WEBPACK_IMPORTED_MODULE_0__[\"DOMstrings\"].inputType).value,\n      // will be either inc or exp\n\n      description: document.querySelector(_Constants__WEBPACK_IMPORTED_MODULE_0__[\"DOMstrings\"].inputDescription).value,\n\n      value: parseFloat(document.querySelector(_Constants__WEBPACK_IMPORTED_MODULE_0__[\"DOMstrings\"].inputValue).value),\n    };\n  }\n\n  addListItem(obj, type) {\n    let html, newHtml, element;\n    // 1. create HTML string with placeholder text\n    if (type === \"inc\") {\n      element = _Constants__WEBPACK_IMPORTED_MODULE_0__[\"DOMstrings\"].incomeContainer;\n      html = `<div class=\"item clearfix\" id=\"inc-%id%\">\n                  <div class=\"item__description\">%description%</div>\n                  <div class=\"right clearfix\">\n                    <div class=\"item__value\">%value%</div>\n                    <div class=\"item__delete\">\n                        <button class=\"item__delete--btn\"><i class=\"ion-ios-close-outline\"></i></button>\n                    </div>\n                </div>\n                </div>\n    `;\n    } else if (type === \"exp\") {\n      element = _Constants__WEBPACK_IMPORTED_MODULE_0__[\"DOMstrings\"].expensesContainer;\n      html = `<div class=\"item clearfix\" id=\"exp-%id%\">\n        <div class=\"item__description\">%description%</div>\n        <div class=\"right clearfix\">\n            <div class=\"item__value\">%value%</div>\n            <div class=\"item__percentage\">21%</div>\n            <div class=\"item__delete\">\n                <button class=\"item__delete--btn\"><i class=\"ion-ios-close-outline\"></i></button>\n            </div>\n        </div>\n    </div>\n      `;\n    }\n\n    // 2. replace the placeholder text with actual data\n    newHtml = html.replace(\"%id%\", obj.id);\n\n    newHtml = newHtml.replace(\"%description%\", obj.description);\n\n    newHtml = newHtml.replace(\"%value%\", Object(_functions_functions__WEBPACK_IMPORTED_MODULE_1__[\"formatNumber\"])(obj.value, type));\n\n    //3. insert the HTML into the DOM\n    document.querySelector(element).insertAdjacentHTML(\"beforeend\", newHtml);\n  }\n\n  deleteListItem(selectorId) {\n    const element = document.getElementById(selectorId);\n    element.parentNode.removeChild(element);\n  }\n\n  clearFields() {\n    //   const fieldsArray;\n    const fields = document.querySelectorAll(\n      _Constants__WEBPACK_IMPORTED_MODULE_0__[\"DOMstrings\"].inputDescription + \",\" + _Constants__WEBPACK_IMPORTED_MODULE_0__[\"DOMstrings\"].inputValue\n    );\n\n    fields.forEach((current, index, array) => {\n      current.value = \"\";\n    });\n\n    fields[0].focus();\n  }\n\n  displayBudget(obj) {\n    let type;\n\n    obj.budget > 0 ? (type = \"inc\") : (type = \"exp\");\n\n    document.querySelector(_Constants__WEBPACK_IMPORTED_MODULE_0__[\"DOMstrings\"].budgetLabel).textContent = Object(_functions_functions__WEBPACK_IMPORTED_MODULE_1__[\"formatNumber\"])(\n      obj.budget,\n      type\n    );\n    document.querySelector(_Constants__WEBPACK_IMPORTED_MODULE_0__[\"DOMstrings\"].incomeLabel).textContent = Object(_functions_functions__WEBPACK_IMPORTED_MODULE_1__[\"formatNumber\"])(\n      obj.totalInc,\n      \"inc\"\n    );\n    document.querySelector(_Constants__WEBPACK_IMPORTED_MODULE_0__[\"DOMstrings\"].expenseLabel).textContent = Object(_functions_functions__WEBPACK_IMPORTED_MODULE_1__[\"formatNumber\"])(\n      obj.totalExp,\n      \"exp\"\n    );\n\n    if (obj.percentage > 0) {\n      document.querySelector(_Constants__WEBPACK_IMPORTED_MODULE_0__[\"DOMstrings\"].percentageLabel).textContent =\n        obj.percentage + \"%\";\n    } else {\n      document.querySelector(_Constants__WEBPACK_IMPORTED_MODULE_0__[\"DOMstrings\"].percentageLabel).textContent = \"--\";\n    }\n  }\n\n  displayPercentages(percentages) {\n    const fields = document.querySelectorAll(\n      _Constants__WEBPACK_IMPORTED_MODULE_0__[\"DOMstrings\"].expensesPercentageLabel\n    );\n\n    Object(_functions_functions__WEBPACK_IMPORTED_MODULE_1__[\"nodeListForEach\"])(fields, function (current, index) {\n      if (percentages[index] > 0) {\n        current.textContent = percentages[index] + \"%\";\n      } else {\n        current.textContent = \"---\";\n      }\n    });\n  }\n\n  displayMonth() {\n    let now, month, year;\n\n    now = new Date();\n    months = [\n      \"January\",\n      \"Feburary\",\n      \"March\",\n      \"April\",\n      \"May\",\n      \"June\",\n      \"July\",\n      \"August\",\n      \"September\",\n      \"October\",\n      \"November\",\n      \"December\",\n    ];\n    month = now.getMonth();\n\n    year = now.getFullYear();\n    document.querySelector(_Constants__WEBPACK_IMPORTED_MODULE_0__[\"DOMstrings\"].dateLabel).textContent =\n      months[month] + \" \" + year;\n  }\n\n  changedType() {\n    var fields = document.querySelectorAll(\n      _Constants__WEBPACK_IMPORTED_MODULE_0__[\"DOMstrings\"].inputType +\n        \",\" +\n        _Constants__WEBPACK_IMPORTED_MODULE_0__[\"DOMstrings\"].inputDescription +\n        \",\" +\n        _Constants__WEBPACK_IMPORTED_MODULE_0__[\"DOMstrings\"].inputValue\n    );\n\n    Object(_functions_functions__WEBPACK_IMPORTED_MODULE_1__[\"nodeListForEach\"])(fields, function (cur) {\n      cur.classList.toggle(\"red-focus\");\n    });\n\n    document.querySelector(_Constants__WEBPACK_IMPORTED_MODULE_0__[\"DOMstrings\"].inputButton).classList.toggle(\"red\");\n  }\n}\n\n\n//# sourceURL=webpack:///./src/controller/Ui.js?");

/***/ }),

/***/ "./src/functions/functions.js":
/*!************************************!*\
  !*** ./src/functions/functions.js ***!
  \************************************/
/*! exports provided: formatNumber, nodeListForEach, addItem, deleteItem, UIctrl, DOMstrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formatNumber\", function() { return formatNumber; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"nodeListForEach\", function() { return nodeListForEach; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addItem\", function() { return addItem; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteItem\", function() { return deleteItem; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UIctrl\", function() { return UIctrl; });\n/* harmony import */ var _controller_Ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controller/Ui */ \"./src/controller/Ui.js\");\n/* harmony import */ var _controller_Budget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controller/Budget */ \"./src/controller/Budget.js\");\n/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Constants */ \"./src/Constants.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"DOMstrings\", function() { return _Constants__WEBPACK_IMPORTED_MODULE_2__[\"DOMstrings\"]; });\n\n\n\n\n\nconst UIctrl = new _controller_Ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nconst budgetCtrl = new _controller_Budget__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\nconst formatNumber = (num, type) => {\n  let numSplit, int, dec;\n  /**\n   * + or - before number\n   *\n   * exactly 2 decimal points\n   * comma separating the thousands\n   */\n\n  num = Math.abs(num);\n  num = num.toFixed(2);\n\n  numSplit = num.split(\".\");\n\n  int = numSplit[0];\n  dec = numSplit[1];\n\n  if (int.length > 3) {\n    int = int.substr(0, int.length - 3) + \",\" + int.substr(int.length - 3, 3); // input 2310, ouput 2,310\n  }\n\n  return (type === \"exp\" ? \"-\" : \"+\") + \" \" + int + \".\" + dec;\n};\n\nconst nodeListForEach = (list, callback) => {\n  for (let index = 0; index < list.length; index++) {\n    callback(list[index], index);\n  }\n};\n\nconst updatePercentages = () => {\n  // calculate the percentages\n  budgetCtrl.calculatePercentages();\n\n  // read percentages from the budgetControler\n  var percentages = budgetCtrl.getPercentages();\n\n  //update the UI with the new percentage\n\n  UIctrl.displayPercentages(percentages);\n};\n\nconst updateBudget = () => {\n  //1. calculate the budget\n  budgetCtrl.calculateBudget();\n\n  //2. return the budget\n  const budget = budgetCtrl.getBudget();\n\n  //3. Display the budget on the UI\n\n  UIctrl.displayBudget(budget);\n};\n\nconst addItem = () => {\n  let input, newItem;\n\n  // 1. Get the field input data\n  input = UIctrl.getInput();\n\n  if (input.description !== \"\" && !isNaN(input.value) && input.value > 0) {\n    //2. Add the item to the budget controller\n    newItem = budgetCtrl.addItem(input.type, input.description, input.value);\n\n    //3. Add the item to the UI\n    UIctrl.addListItem(newItem, input.type);\n\n    //4. Clear the fields\n    UIctrl.clearFields();\n\n    //5. Calculate and update budget\n    updateBudget();\n\n    //6. update percentages\n    updatePercentages();\n  }\n};\n\nconst deleteItem = () => {\n  let itemId, spiltId, type, ID;\n\n  itemId = e.target.parentNode.parentNode.parentNode.parentNode.id;\n\n  if (itemId) {\n    // inc-1\n    spiltId = itemId.split(\"-\");\n    type = spiltId[0];\n    ID = parseInt(spiltId[1]);\n\n    // Delete the item from the data structure\n    budgetCtrl.deleteItem(type, ID);\n\n    // Delete the item from the UI\n    UIctrl.deleteListItem(itemId);\n\n    // Update and show the new budget\n    updateBudget();\n\n    // calculate the percentages\n    updatePercentages();\n  }\n};\n\n\n\n\n//# sourceURL=webpack:///./src/functions/functions.js?");

/***/ }),

/***/ "./src/model/Expense.js":
/*!******************************!*\
  !*** ./src/model/Expense.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Expense; });\nclass Expense {\n  constructor(id, description, value) {\n    this.id = id;\n    this.description = description;\n    this.value = value;\n    this.percentage = -1;\n  }\n\n  calculatePercentage(totalIncome) {\n    if (totalIncome > 0) {\n      this.percentage = Math.round((this.value / totalIncome) * 100);\n    } else this.percentage = -1;\n  }\n\n  getPercentage() {\n    return this.percentage;\n  }\n}\n\n\n//# sourceURL=webpack:///./src/model/Expense.js?");

/***/ }),

/***/ "./src/model/Income.js":
/*!*****************************!*\
  !*** ./src/model/Income.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Income; });\nclass Income {\n  constructor(id, description, value) {\n    this.id = id;\n    this.description = description;\n    this.value = value;\n  }\n}\n\n\n//# sourceURL=webpack:///./src/model/Income.js?");

/***/ }),

/***/ "./src/model/model.js":
/*!****************************!*\
  !*** ./src/model/model.js ***!
  \****************************/
/*! exports provided: data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"data\", function() { return data; });\nconst data = {\n  allItems: {\n    exp: [],\n    inc: [],\n  },\n  totals: {\n    exp: 0,\n    inc: 0,\n  },\n  budget: 0,\n  percentage: -1,\n};\n\n\n//# sourceURL=webpack:///./src/model/model.js?");

/***/ })

/******/ });