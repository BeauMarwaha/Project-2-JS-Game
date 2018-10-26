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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/init.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/classes.js":
/*!***********************!*\
  !*** ./js/classes.js ***!
  \***********************/
/*! exports provided: createCircleSprite, createSquareSprite, createImageSprite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createCircleSprite\", function() { return createCircleSprite; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createSquareSprite\", function() { return createSquareSprite; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createImageSprite\", function() { return createImageSprite; });\n/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities.js */ \"./js/utilities.js\");\n\r\n\r\n\r\nclass sprite{\r\n\t\tconstructor(x,y){\r\n\t\t\tthis.x = x;\r\n\t\t\tthis.y = y;\r\n\t\t}\r\n}\r\n\r\nclass circleSprite extends sprite{\r\n\tconstructor(x,y,radius,color)\r\n\t{\r\n\t\tsuper(x,y,radius,color);\r\n\t\tthis.radius = radius;\r\n\t\tthis.color = color;\r\n\t}\r\n\tdraw(ctx){\r\n\t\tctx.save();\r\n\t\tctx.beginPath();\r\n\t\tctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);\r\n\t\tctx.closePath();\r\n\t\tctx.fillStyle = this.color;\r\n\t\tctx.fill();\r\n\t\tctx.restore();\r\n\t}\r\n}\r\n\r\nclass squareSprite extends sprite{\r\n\tconstructor(x,y,width,height,color){\r\n\t\tsuper(x, y);\r\n\t\tthis.width = width;\r\n\t\tthis.height = height;\r\n\t\tthis.color = color;\r\n\t}\r\n\tdraw(ctx){ \r\n\t\tctx.save();\r\n\t\tctx.strokeStyle = this.color;\r\n\t\tctx.strokeRect(this.x, this.y, this.width, this.height);\r\n\t\tctx.restore();\r\n\t}\r\n}\r\n\r\nclass imageSprite extends sprite{\r\n\tconstructor(x,y,width,height,image){\r\n\t\tsuper(x,y);\r\n\t\tthis.width = width;\r\n\t\tthis.height = height;\r\n\t\tthis.image = image;\r\n\t}\r\n\tdraw(ctx){\r\n\t\tctx.save();\r\n\t\tctx.drawImage(this.image,this.x,this.y,this.width,this.height);\r\n\t\tctx.restore();\r\n\t}\r\n}\r\n\r\nfunction createCircleSprite(x=0, y=0, color=\"Blue\", radius=5){\r\n\treturn new circleSprite(x,y,radius,color); \r\n}\r\n\r\nfunction createSquareSprite(x=0, y=0, color=\"Blue\", width=10, height=10){\r\n\treturn new squareSprite(x,y,width,height,color); \r\n}\r\n\r\nfunction createImageSprite(x, y, width=30, height=30, url=\"images/Sean.png\"){\r\n\tlet image = new Image();\r\n\timage.src = url; \r\n\treturn new imageSprite(x,y,width,height,image); \r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9jbGFzc2VzLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vanMvY2xhc3Nlcy5qcz9iZDZiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7fSBmcm9tICcuL3V0aWxpdGllcy5qcyc7XHJcbmV4cG9ydCB7Y3JlYXRlQ2lyY2xlU3ByaXRlLGNyZWF0ZVNxdWFyZVNwcml0ZSxjcmVhdGVJbWFnZVNwcml0ZX07XHJcblxyXG5jbGFzcyBzcHJpdGV7XHJcblx0XHRjb25zdHJ1Y3Rvcih4LHkpe1xyXG5cdFx0XHR0aGlzLnggPSB4O1xyXG5cdFx0XHR0aGlzLnkgPSB5O1xyXG5cdFx0fVxyXG59XHJcblxyXG5jbGFzcyBjaXJjbGVTcHJpdGUgZXh0ZW5kcyBzcHJpdGV7XHJcblx0Y29uc3RydWN0b3IoeCx5LHJhZGl1cyxjb2xvcilcclxuXHR7XHJcblx0XHRzdXBlcih4LHkscmFkaXVzLGNvbG9yKTtcclxuXHRcdHRoaXMucmFkaXVzID0gcmFkaXVzO1xyXG5cdFx0dGhpcy5jb2xvciA9IGNvbG9yO1xyXG5cdH1cclxuXHRkcmF3KGN0eCl7XHJcblx0XHRjdHguc2F2ZSgpO1xyXG5cdFx0Y3R4LmJlZ2luUGF0aCgpO1xyXG5cdFx0Y3R4LmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMsIDAsIE1hdGguUEkqMiwgZmFsc2UpO1xyXG5cdFx0Y3R4LmNsb3NlUGF0aCgpO1xyXG5cdFx0Y3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XHJcblx0XHRjdHguZmlsbCgpO1xyXG5cdFx0Y3R4LnJlc3RvcmUoKTtcclxuXHR9XHJcbn1cclxuXHJcbmNsYXNzIHNxdWFyZVNwcml0ZSBleHRlbmRzIHNwcml0ZXtcclxuXHRjb25zdHJ1Y3Rvcih4LHksd2lkdGgsaGVpZ2h0LGNvbG9yKXtcclxuXHRcdHN1cGVyKHgsIHkpO1xyXG5cdFx0dGhpcy53aWR0aCA9IHdpZHRoO1xyXG5cdFx0dGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcblx0XHR0aGlzLmNvbG9yID0gY29sb3I7XHJcblx0fVxyXG5cdGRyYXcoY3R4KXsgXHJcblx0XHRjdHguc2F2ZSgpO1xyXG5cdFx0Y3R4LnN0cm9rZVN0eWxlID0gdGhpcy5jb2xvcjtcclxuXHRcdGN0eC5zdHJva2VSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcblx0XHRjdHgucmVzdG9yZSgpO1xyXG5cdH1cclxufVxyXG5cclxuY2xhc3MgaW1hZ2VTcHJpdGUgZXh0ZW5kcyBzcHJpdGV7XHJcblx0Y29uc3RydWN0b3IoeCx5LHdpZHRoLGhlaWdodCxpbWFnZSl7XHJcblx0XHRzdXBlcih4LHkpO1xyXG5cdFx0dGhpcy53aWR0aCA9IHdpZHRoO1xyXG5cdFx0dGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcblx0XHR0aGlzLmltYWdlID0gaW1hZ2U7XHJcblx0fVxyXG5cdGRyYXcoY3R4KXtcclxuXHRcdGN0eC5zYXZlKCk7XHJcblx0XHRjdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2UsdGhpcy54LHRoaXMueSx0aGlzLndpZHRoLHRoaXMuaGVpZ2h0KTtcclxuXHRcdGN0eC5yZXN0b3JlKCk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDaXJjbGVTcHJpdGUoeD0wLCB5PTAsIGNvbG9yPVwiQmx1ZVwiLCByYWRpdXM9NSl7XHJcblx0cmV0dXJuIG5ldyBjaXJjbGVTcHJpdGUoeCx5LHJhZGl1cyxjb2xvcik7IFxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTcXVhcmVTcHJpdGUoeD0wLCB5PTAsIGNvbG9yPVwiQmx1ZVwiLCB3aWR0aD0xMCwgaGVpZ2h0PTEwKXtcclxuXHRyZXR1cm4gbmV3IHNxdWFyZVNwcml0ZSh4LHksd2lkdGgsaGVpZ2h0LGNvbG9yKTsgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUltYWdlU3ByaXRlKHgsIHksIHdpZHRoPTMwLCBoZWlnaHQ9MzAsIHVybD1cImltYWdlcy9TZWFuLnBuZ1wiKXtcclxuXHRsZXQgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuXHRpbWFnZS5zcmMgPSB1cmw7IFxyXG5cdHJldHVybiBuZXcgaW1hZ2VTcHJpdGUoeCx5LHdpZHRoLGhlaWdodCxpbWFnZSk7IFxyXG59Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/classes.js\n");

/***/ }),

/***/ "./js/init.js":
/*!********************!*\
  !*** ./js/init.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.js */ \"./js/main.js\");\n\r\n// 1) this script a good place to load fonts, images, sounds and other resources\r\n\r\n// 2) start up app\r\nObject(_main_js__WEBPACK_IMPORTED_MODULE_0__[\"init\"])();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9pbml0LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vanMvaW5pdC5qcz82OWJjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5pdH0gZnJvbSAnLi9tYWluLmpzJztcclxuLy8gMSkgdGhpcyBzY3JpcHQgYSBnb29kIHBsYWNlIHRvIGxvYWQgZm9udHMsIGltYWdlcywgc291bmRzIGFuZCBvdGhlciByZXNvdXJjZXNcclxuXHJcbi8vIDIpIHN0YXJ0IHVwIGFwcFxyXG5pbml0KCk7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./js/init.js\n");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! exports provided: init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"init\", function() { return init; });\n/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes.js */ \"./js/classes.js\");\n\r\n\r\n\r\nconst canvas = document.querySelector(\"canvas\");\r\nconst ctx = canvas.getContext(\"2d\");\r\nconst screenWidth = canvas.width;\r\nconst screenHeight = canvas.height;\r\nlet sprites = [];\r\n\r\nfunction init(){\r\n    document.querySelector(\"#startButton\").onclick = startGame;\r\n}\r\n\r\nfunction startGame(){\r\n    // Hide the Main Menu\r\n    document.querySelector('#mainMenu').style.display = \"none\";\r\n\r\n    // Draw the initial sprites\r\n    sprites = sprites.concat(\r\n        Object(_classes_js__WEBPACK_IMPORTED_MODULE_0__[\"createCircleSprite\"])(20,20,\"Red\",10),\r\n        Object(_classes_js__WEBPACK_IMPORTED_MODULE_0__[\"createSquareSprite\"])(10,10,\"Gray\",5,5));\r\n\r\n    // Start updating the sprites\r\n\tupdate();\r\n}\r\n\r\nfunction update(){\r\n\t// schedule a call to update() in 1/60th of a second\r\n\trequestAnimationFrame(update);\r\n\t\r\n\t// draw the background\r\n\tctx.fillRect(0,0,screenWidth,screenHeight)\r\n\t\r\n\t// loop through sprites\r\n\tfor (let sprite of sprites){\r\n\t    // draw sprites\r\n\t\tsprite.draw(ctx);\r\n\t} \r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9tYWluLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vanMvbWFpbi5qcz9lM2IxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlQ2lyY2xlU3ByaXRlLGNyZWF0ZVNxdWFyZVNwcml0ZSxjcmVhdGVJbWFnZVNwcml0ZX0gZnJvbSAnLi9jbGFzc2VzLmpzJztcclxuZXhwb3J0IHtpbml0fTtcclxuXHJcbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJjYW52YXNcIik7XHJcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbmNvbnN0IHNjcmVlbldpZHRoID0gY2FudmFzLndpZHRoO1xyXG5jb25zdCBzY3JlZW5IZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xyXG5sZXQgc3ByaXRlcyA9IFtdO1xyXG5cclxuZnVuY3Rpb24gaW5pdCgpe1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdGFydEJ1dHRvblwiKS5vbmNsaWNrID0gc3RhcnRHYW1lO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzdGFydEdhbWUoKXtcclxuICAgIC8vIEhpZGUgdGhlIE1haW4gTWVudVxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW5NZW51Jykuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cclxuICAgIC8vIERyYXcgdGhlIGluaXRpYWwgc3ByaXRlc1xyXG4gICAgc3ByaXRlcyA9IHNwcml0ZXMuY29uY2F0KFxyXG4gICAgICAgIGNyZWF0ZUNpcmNsZVNwcml0ZSgyMCwyMCxcIlJlZFwiLDEwKSxcclxuICAgICAgICBjcmVhdGVTcXVhcmVTcHJpdGUoMTAsMTAsXCJHcmF5XCIsNSw1KSk7XHJcblxyXG4gICAgLy8gU3RhcnQgdXBkYXRpbmcgdGhlIHNwcml0ZXNcclxuXHR1cGRhdGUoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlKCl7XHJcblx0Ly8gc2NoZWR1bGUgYSBjYWxsIHRvIHVwZGF0ZSgpIGluIDEvNjB0aCBvZiBhIHNlY29uZFxyXG5cdHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpO1xyXG5cdFxyXG5cdC8vIGRyYXcgdGhlIGJhY2tncm91bmRcclxuXHRjdHguZmlsbFJlY3QoMCwwLHNjcmVlbldpZHRoLHNjcmVlbkhlaWdodClcclxuXHRcclxuXHQvLyBsb29wIHRocm91Z2ggc3ByaXRlc1xyXG5cdGZvciAobGV0IHNwcml0ZSBvZiBzcHJpdGVzKXtcclxuXHQgICAgLy8gZHJhdyBzcHJpdGVzXHJcblx0XHRzcHJpdGUuZHJhdyhjdHgpO1xyXG5cdH0gXHJcbn0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./js/main.js\n");

/***/ }),

/***/ "./js/utilities.js":
/*!*************************!*\
  !*** ./js/utilities.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy91dGlsaXRpZXMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy91dGlsaXRpZXMuanM/ZDc4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQge307XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/utilities.js\n");

/***/ })

/******/ });