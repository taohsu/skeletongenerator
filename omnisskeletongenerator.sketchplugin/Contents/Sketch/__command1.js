var globalThis = this;
var global = this;
function __skpm_run (key, context) {
  globalThis.context = context;
  try {

var exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/command1.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/command1.js":
/*!*************************!*\
  !*** ./src/command1.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch */ "sketch");
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sketch__WEBPACK_IMPORTED_MODULE_0__);
 // documentation: https://developer.sketchapp.com/reference/api/

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var sketch = __webpack_require__(/*! sketch */ "sketch");

  var sketch = __webpack_require__(/*! sketch/dom */ "sketch/dom");

  var async = __webpack_require__(/*! sketch/async */ "sketch/async");

  var DataSupplier = __webpack_require__(/*! sketch/data-supplier */ "sketch/data-supplier");

  var UI = __webpack_require__(/*! sketch/ui */ "sketch/ui");

  var Settings = __webpack_require__(/*! sketch/settings */ "sketch/settings");

  var UI = __webpack_require__(/*! sketch/ui */ "sketch/ui");

  var Rectangle = __webpack_require__(/*! sketch/dom */ "sketch/dom").Rectangle;

  var document = sketch.getSelectedDocument();
  var selectedLayers = document.selectedLayers;
  var selectedCount = selectedLayers.length;
  var selection = document.selectedLayers.layers; //console.log(selectedLayers)
  //console.log(selectedCount)

  console.log(selection);
  var items = [];
  var ShapePath = sketch.ShapePath; //selection condition

  if (selectedCount === 0) {
    console.log('No layers are selected.');
    UI.message('No layers are selected.');
  } else {
    //Filter groups
    detach();
    degroup();
    console.log(selection.length);
    console.log(selection);
    makeit();
  } //end of execution
  //functions


  function detach() {
    for (var i = 0; i < selection.length; i++) {
      if (selection[i].type == 'SymbolInstance') {
        //selection[i] = selection[i].detach({ recursively: true, })
        selection[i] = selection[i].detach();
      }
    }
  }

  function degroup() {
    for (var i = 0; i < selection.length; i++) {
      if (selection[i].type == 'Group') {
        items = selection[i].layers; //console.log('GROUP')

        for (var c = 0; c < items.length; c++) {
          items[c].parent = selection[i].parent;
          items[c].frame.x = items[c].frame.x + selection[i].frame.x;
          items[c].frame.y = items[c].frame.y + selection[i].frame.y;
          items[c].selected = 'true';
          items[c].sketchObject.hasClippingMask = false;
        }

        selection[i].remove();
        selection = selection.concat(items);
      }
    }

    for (var n = 0; n < selection.length; n++) {
      var items2 = [];

      if (selection[n].type == 'Group') {
        items2.push(selection[n]);
      }
    }

    if (items2.length > 0) {
      degroup();
    } else {
      selection = selection.concat(items2);
    }
  } // end of function degroup


  function makeit() {
    for (var i = 0; i < selection.length; i++) {
      if (selection[i].hidden == 'true') {
        selection[i].remove();
      } else {
        if (selection[i].type == 'Text') {
          if (selection[i].frame.height < 2 * selection[i].style.fontSize) {
            var mySquare = new ShapePath({
              parent: selection[i].parent,
              frame: {
                x: selection[i].frame.x,
                y: selection[i].frame.y + (selection[i].frame.height - selection[i].style.fontSize) / 2,
                width: selection[i].frame.width,
                height: selection[i].style.fontSize
              },
              style: {
                fills: ['#000000'],
                opacity: ['0.04'],
                borders: []
              }
            });
            selection[i].remove();
          } else {
            var lines = parseInt(selection[i].frame.height / selection[i].style.lineHeight);

            for (var l = 0; l < lines; l++) {
              var _mySquare = new ShapePath({
                parent: selection[i].parent,
                frame: {
                  x: selection[i].frame.x,
                  y: selection[i].frame.y + l * selection[i].style.lineHeight,
                  width: selection[i].frame.width - Math.floor(Math.random() * (selection[i].frame.width / 2)),
                  height: selection[i].style.fontSize
                },
                style: {
                  fills: ['#000000'],
                  opacity: ['0.04'],
                  borders: []
                }
              });
            }

            selection[i].remove();
          }
        } else if (selection[i].type == 'ShapePath' || selection[i].type == 'Shape') {
          selection[i].style.opacity = '0.04';
          selection[i].style.fills = [{
            color: '#000000'
          }];
        } else {
          if (selection[i].frame.width == selection[i].frame.height && selection[i].frame.width <= 24) {
            var _mySquare2 = new ShapePath({
              shapeType: ShapePath.ShapeType.Oval,
              parent: selection[i].parent,
              frame: {
                x: selection[i].frame.x,
                y: selection[i].frame.y,
                width: selection[i].frame.width,
                height: selection[i].frame.height
              },
              style: {
                fills: ['#000000'],
                opacity: ['0.04']
              }
            });
          } else {
            var _mySquare3 = new ShapePath({
              parent: selection[i].parent,
              frame: {
                x: selection[i].frame.x,
                y: selection[i].frame.y,
                width: selection[i].frame.width,
                height: selection[i].frame.height
              },
              style: {
                fills: ['#000000'],
                opacity: ['0.04'],
                borders: []
              }
            });
          }

          selection[i].remove();
        }
      }
    } //end of for loop

  } //end of function makeit

});

/***/ }),

/***/ "sketch":
/*!*************************!*\
  !*** external "sketch" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch");

/***/ }),

/***/ "sketch/async":
/*!*******************************!*\
  !*** external "sketch/async" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/async");

/***/ }),

/***/ "sketch/data-supplier":
/*!***************************************!*\
  !*** external "sketch/data-supplier" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/data-supplier");

/***/ }),

/***/ "sketch/dom":
/*!*****************************!*\
  !*** external "sketch/dom" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/dom");

/***/ }),

/***/ "sketch/settings":
/*!**********************************!*\
  !*** external "sketch/settings" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/settings");

/***/ }),

/***/ "sketch/ui":
/*!****************************!*\
  !*** external "sketch/ui" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/ui");

/***/ })

/******/ });
    if (key === 'default' && typeof exports === 'function') {
      exports(context);
    } else if (typeof exports[key] !== 'function') {
      throw new Error('Missing export named "' + key + '". Your command should contain something like `export function " + key +"() {}`.');
    } else {
      exports[key](context);
    }
  } catch (err) {
    if (typeof process !== 'undefined' && process.listenerCount && process.listenerCount('uncaughtException')) {
      process.emit("uncaughtException", err, "uncaughtException");
    } else {
      throw err
    }
  }
}
globalThis['onRun'] = __skpm_run.bind(this, 'default')

//# sourceMappingURL=__command1.js.map