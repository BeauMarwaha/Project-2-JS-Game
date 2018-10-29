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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"init\", function() { return init; });\n/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes.js */ \"./js/classes.js\");\n\r\n\r\n\r\nconst canvas = document.querySelector(\"canvas\");\r\nconst ctx = canvas.getContext(\"2d\");\r\nconst screenWidth = canvas.width;\r\nconst screenHeight = canvas.height;\r\nlet gameBoard;\r\nconst rows = 8;\r\nconst rowWidth = 50;\r\nconst cols = 8;\r\nconst colWidth = 50;\r\nlet dots = [];\r\nlet endPoints = [];\r\n\r\n// Calculate the top and left spacing to have the game board centered in the bottom middle of the canvas\r\nconst topSpacing = screenHeight - (rows * rowWidth);\r\nconst leftSpacing = screenWidth - ((cols * colWidth) * 1.5);\r\n\r\nfunction init(){\r\n    document.querySelector(\"#startButton\").onclick = startGame;\r\n}\r\n\r\nfunction startGame(){\r\n    // Hide the Main Menu\r\n    document.querySelector('#mainMenu').style.display = \"none\";\r\n\r\n    // Initialize empty 2D array of the specified size\r\n    gameBoard = createArray(rows, cols);\r\n\r\n    // Start loading the level from an external file and call the levelLoaded function when complete\r\n    readTextFile(\"levels/level-1.txt\", levelLoaded);\r\n}\r\n\r\nfunction levelLoaded(levelGuide)\r\n{\r\n    // Remove all whitespace from the loaded text\r\n    levelGuide = levelGuide.replace(/\\s+/g, ''); \r\n    \r\n    // Populate the game board using the text file's contents\r\n    initializeLevel(levelGuide)\r\n\r\n    // Start updating the game board\r\n\tupdate();\r\n}\r\n\r\nfunction update(){\r\n\t// Schedule a call to update() in 1/60th of a second\r\n\trequestAnimationFrame(update);\r\n\t\r\n    // Clear the background\r\n    ctx.save();\r\n    ctx.fillStyle = \"#FFFFFF\";\r\n\tctx.fillRect(0,0,screenWidth,screenHeight)\r\n    ctx.restore();\r\n\r\n    // Draw a square around the game board\r\n    ctx.save();\r\n    ctx.strokeStyle = \"#000000\";\r\n\tctx.strokeRect(topSpacing, leftSpacing, rows * rowWidth, cols * colWidth)\r\n    ctx.restore();\r\n    \r\n    // Loop through the game board sections and draw them\r\n    for (let i = 0; i < rows; i++)\r\n    {\r\n        for (let j = 0; j < cols; j++)\r\n        {\r\n            // If the game board tile exists draw it\r\n            if(gameBoard[i][j] != null)\r\n            {\r\n                gameBoard[i][j].draw(ctx);\r\n            }\r\n        }\r\n    }\r\n\r\n    // Loop through the dots and end points and draw them\r\n    dots.forEach(function(dot) {\r\n        dot.draw(ctx);\r\n    });\r\n    endPoints.forEach(function(endPoint) {\r\n        endPoint.draw(ctx);\r\n    });\r\n}\r\n\r\nfunction initializeLevel(levelGuide)\r\n{\r\n    // Populate the game board using the level guide string\r\n    let location = 0;\r\n    for (let j = 0; j < cols; j++)\r\n    {\r\n        for (let i = 0; i < rows; i++)\r\n        {\r\n            if (levelGuide.charAt(location) == 0) // Empty Space \r\n            {\r\n                // No piece to add to the game board\r\n                //gameBoard[j][i] = createSquareSprite((i * colWidth) + leftSpacing, (j * rowWidth) + topSpacing, \"Gray\", colWidth, rowWidth);\r\n            }\r\n            else if (levelGuide.charAt(location) == 1) // Empty Tile \r\n            {\r\n                gameBoard[j][i] = Object(_classes_js__WEBPACK_IMPORTED_MODULE_0__[\"createSquareSprite\"])((i * colWidth) + leftSpacing, (j * rowWidth) + topSpacing, \"Black\", colWidth, rowWidth);\r\n            }\r\n            else if (levelGuide.charAt(location) == 2) // Tile with ball\r\n            {\r\n                gameBoard[j][i] = Object(_classes_js__WEBPACK_IMPORTED_MODULE_0__[\"createSquareSprite\"])((i * colWidth) + leftSpacing, (j * rowWidth) + topSpacing, \"Black\", colWidth, rowWidth);\r\n                dots.push(Object(_classes_js__WEBPACK_IMPORTED_MODULE_0__[\"createCircleSprite\"])((i * colWidth) + leftSpacing + (colWidth / 2), (j * rowWidth) + topSpacing + (rowWidth / 2), \"Green\", colWidth / 2.5));\r\n            }\r\n            else if (levelGuide.charAt(location) == 3) // Tile with end goal\r\n            {\r\n                gameBoard[j][i] = Object(_classes_js__WEBPACK_IMPORTED_MODULE_0__[\"createSquareSprite\"])((i * colWidth) + leftSpacing, (j * rowWidth) + topSpacing, \"Black\", colWidth, rowWidth);\r\n                dots.push(Object(_classes_js__WEBPACK_IMPORTED_MODULE_0__[\"createCircleSprite\"])((i * colWidth) + leftSpacing + (colWidth / 2), (j * rowWidth) + topSpacing + (rowWidth / 2), \"Purple\", colWidth / 2.5));\r\n            }\r\n            location++;\r\n        }\r\n    }\r\n}\r\n\r\n// Array initialization code SOURCED from https://stackoverflow.com/a/966938\r\nfunction createArray(length) {\r\n    var arr = new Array(length || 0),\r\n        i = length;\r\n\r\n    if (arguments.length > 1) {\r\n        var args = Array.prototype.slice.call(arguments, 1);\r\n        while(i--) arr[length-1 - i] = createArray.apply(this, args);\r\n    }\r\n\r\n    return arr;\r\n}\r\n\r\n// Text file reading code MODIFIED from https://medium.freecodecamp.org/javascript-from-callbacks-to-async-await-1cc090ddad99\r\nfunction readTextFile(file, callback) {\r\n    const rawFile = new XMLHttpRequest();\r\n    rawFile.timeout = 2000;\r\n    rawFile.responseType = 'text';\r\n    rawFile.onreadystatechange = function(e) {\r\n        if (rawFile.readyState === 4) {\r\n            if (rawFile.status === 200 || rawFile.status == 0) {\r\n                callback(rawFile.responseText)\r\n            } \r\n        }\r\n    }\r\n    rawFile.ontimeout = function () {\r\n        console.log('Timeout on loading text file: ' + file)\r\n    }\r\n    rawFile.open('GET', file, true)\r\n    rawFile.send();\r\n  }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9tYWluLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vanMvbWFpbi5qcz9lM2IxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlQ2lyY2xlU3ByaXRlLGNyZWF0ZVNxdWFyZVNwcml0ZSxjcmVhdGVJbWFnZVNwcml0ZX0gZnJvbSAnLi9jbGFzc2VzLmpzJztcclxuZXhwb3J0IHtpbml0fTtcclxuXHJcbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJjYW52YXNcIik7XHJcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbmNvbnN0IHNjcmVlbldpZHRoID0gY2FudmFzLndpZHRoO1xyXG5jb25zdCBzY3JlZW5IZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xyXG5sZXQgZ2FtZUJvYXJkO1xyXG5jb25zdCByb3dzID0gODtcclxuY29uc3Qgcm93V2lkdGggPSA1MDtcclxuY29uc3QgY29scyA9IDg7XHJcbmNvbnN0IGNvbFdpZHRoID0gNTA7XHJcbmxldCBkb3RzID0gW107XHJcbmxldCBlbmRQb2ludHMgPSBbXTtcclxuXHJcbi8vIENhbGN1bGF0ZSB0aGUgdG9wIGFuZCBsZWZ0IHNwYWNpbmcgdG8gaGF2ZSB0aGUgZ2FtZSBib2FyZCBjZW50ZXJlZCBpbiB0aGUgYm90dG9tIG1pZGRsZSBvZiB0aGUgY2FudmFzXHJcbmNvbnN0IHRvcFNwYWNpbmcgPSBzY3JlZW5IZWlnaHQgLSAocm93cyAqIHJvd1dpZHRoKTtcclxuY29uc3QgbGVmdFNwYWNpbmcgPSBzY3JlZW5XaWR0aCAtICgoY29scyAqIGNvbFdpZHRoKSAqIDEuNSk7XHJcblxyXG5mdW5jdGlvbiBpbml0KCl7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N0YXJ0QnV0dG9uXCIpLm9uY2xpY2sgPSBzdGFydEdhbWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0YXJ0R2FtZSgpe1xyXG4gICAgLy8gSGlkZSB0aGUgTWFpbiBNZW51XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbk1lbnUnKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblxyXG4gICAgLy8gSW5pdGlhbGl6ZSBlbXB0eSAyRCBhcnJheSBvZiB0aGUgc3BlY2lmaWVkIHNpemVcclxuICAgIGdhbWVCb2FyZCA9IGNyZWF0ZUFycmF5KHJvd3MsIGNvbHMpO1xyXG5cclxuICAgIC8vIFN0YXJ0IGxvYWRpbmcgdGhlIGxldmVsIGZyb20gYW4gZXh0ZXJuYWwgZmlsZSBhbmQgY2FsbCB0aGUgbGV2ZWxMb2FkZWQgZnVuY3Rpb24gd2hlbiBjb21wbGV0ZVxyXG4gICAgcmVhZFRleHRGaWxlKFwibGV2ZWxzL2xldmVsLTEudHh0XCIsIGxldmVsTG9hZGVkKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbGV2ZWxMb2FkZWQobGV2ZWxHdWlkZSlcclxue1xyXG4gICAgLy8gUmVtb3ZlIGFsbCB3aGl0ZXNwYWNlIGZyb20gdGhlIGxvYWRlZCB0ZXh0XHJcbiAgICBsZXZlbEd1aWRlID0gbGV2ZWxHdWlkZS5yZXBsYWNlKC9cXHMrL2csICcnKTsgXHJcbiAgICBcclxuICAgIC8vIFBvcHVsYXRlIHRoZSBnYW1lIGJvYXJkIHVzaW5nIHRoZSB0ZXh0IGZpbGUncyBjb250ZW50c1xyXG4gICAgaW5pdGlhbGl6ZUxldmVsKGxldmVsR3VpZGUpXHJcblxyXG4gICAgLy8gU3RhcnQgdXBkYXRpbmcgdGhlIGdhbWUgYm9hcmRcclxuXHR1cGRhdGUoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlKCl7XHJcblx0Ly8gU2NoZWR1bGUgYSBjYWxsIHRvIHVwZGF0ZSgpIGluIDEvNjB0aCBvZiBhIHNlY29uZFxyXG5cdHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpO1xyXG5cdFxyXG4gICAgLy8gQ2xlYXIgdGhlIGJhY2tncm91bmRcclxuICAgIGN0eC5zYXZlKCk7XHJcbiAgICBjdHguZmlsbFN0eWxlID0gXCIjRkZGRkZGXCI7XHJcblx0Y3R4LmZpbGxSZWN0KDAsMCxzY3JlZW5XaWR0aCxzY3JlZW5IZWlnaHQpXHJcbiAgICBjdHgucmVzdG9yZSgpO1xyXG5cclxuICAgIC8vIERyYXcgYSBzcXVhcmUgYXJvdW5kIHRoZSBnYW1lIGJvYXJkXHJcbiAgICBjdHguc2F2ZSgpO1xyXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gXCIjMDAwMDAwXCI7XHJcblx0Y3R4LnN0cm9rZVJlY3QodG9wU3BhY2luZywgbGVmdFNwYWNpbmcsIHJvd3MgKiByb3dXaWR0aCwgY29scyAqIGNvbFdpZHRoKVxyXG4gICAgY3R4LnJlc3RvcmUoKTtcclxuICAgIFxyXG4gICAgLy8gTG9vcCB0aHJvdWdoIHRoZSBnYW1lIGJvYXJkIHNlY3Rpb25zIGFuZCBkcmF3IHRoZW1cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93czsgaSsrKVxyXG4gICAge1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY29sczsgaisrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gSWYgdGhlIGdhbWUgYm9hcmQgdGlsZSBleGlzdHMgZHJhdyBpdFxyXG4gICAgICAgICAgICBpZihnYW1lQm9hcmRbaV1bal0gIT0gbnVsbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZ2FtZUJvYXJkW2ldW2pdLmRyYXcoY3R4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBMb29wIHRocm91Z2ggdGhlIGRvdHMgYW5kIGVuZCBwb2ludHMgYW5kIGRyYXcgdGhlbVxyXG4gICAgZG90cy5mb3JFYWNoKGZ1bmN0aW9uKGRvdCkge1xyXG4gICAgICAgIGRvdC5kcmF3KGN0eCk7XHJcbiAgICB9KTtcclxuICAgIGVuZFBvaW50cy5mb3JFYWNoKGZ1bmN0aW9uKGVuZFBvaW50KSB7XHJcbiAgICAgICAgZW5kUG9pbnQuZHJhdyhjdHgpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRpYWxpemVMZXZlbChsZXZlbEd1aWRlKVxyXG57XHJcbiAgICAvLyBQb3B1bGF0ZSB0aGUgZ2FtZSBib2FyZCB1c2luZyB0aGUgbGV2ZWwgZ3VpZGUgc3RyaW5nXHJcbiAgICBsZXQgbG9jYXRpb24gPSAwO1xyXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb2xzOyBqKyspXHJcbiAgICB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzOyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAobGV2ZWxHdWlkZS5jaGFyQXQobG9jYXRpb24pID09IDApIC8vIEVtcHR5IFNwYWNlIFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvLyBObyBwaWVjZSB0byBhZGQgdG8gdGhlIGdhbWUgYm9hcmRcclxuICAgICAgICAgICAgICAgIC8vZ2FtZUJvYXJkW2pdW2ldID0gY3JlYXRlU3F1YXJlU3ByaXRlKChpICogY29sV2lkdGgpICsgbGVmdFNwYWNpbmcsIChqICogcm93V2lkdGgpICsgdG9wU3BhY2luZywgXCJHcmF5XCIsIGNvbFdpZHRoLCByb3dXaWR0aCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAobGV2ZWxHdWlkZS5jaGFyQXQobG9jYXRpb24pID09IDEpIC8vIEVtcHR5IFRpbGUgXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGdhbWVCb2FyZFtqXVtpXSA9IGNyZWF0ZVNxdWFyZVNwcml0ZSgoaSAqIGNvbFdpZHRoKSArIGxlZnRTcGFjaW5nLCAoaiAqIHJvd1dpZHRoKSArIHRvcFNwYWNpbmcsIFwiQmxhY2tcIiwgY29sV2lkdGgsIHJvd1dpZHRoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChsZXZlbEd1aWRlLmNoYXJBdChsb2NhdGlvbikgPT0gMikgLy8gVGlsZSB3aXRoIGJhbGxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZ2FtZUJvYXJkW2pdW2ldID0gY3JlYXRlU3F1YXJlU3ByaXRlKChpICogY29sV2lkdGgpICsgbGVmdFNwYWNpbmcsIChqICogcm93V2lkdGgpICsgdG9wU3BhY2luZywgXCJCbGFja1wiLCBjb2xXaWR0aCwgcm93V2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgZG90cy5wdXNoKGNyZWF0ZUNpcmNsZVNwcml0ZSgoaSAqIGNvbFdpZHRoKSArIGxlZnRTcGFjaW5nICsgKGNvbFdpZHRoIC8gMiksIChqICogcm93V2lkdGgpICsgdG9wU3BhY2luZyArIChyb3dXaWR0aCAvIDIpLCBcIkdyZWVuXCIsIGNvbFdpZHRoIC8gMi41KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAobGV2ZWxHdWlkZS5jaGFyQXQobG9jYXRpb24pID09IDMpIC8vIFRpbGUgd2l0aCBlbmQgZ29hbFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBnYW1lQm9hcmRbal1baV0gPSBjcmVhdGVTcXVhcmVTcHJpdGUoKGkgKiBjb2xXaWR0aCkgKyBsZWZ0U3BhY2luZywgKGogKiByb3dXaWR0aCkgKyB0b3BTcGFjaW5nLCBcIkJsYWNrXCIsIGNvbFdpZHRoLCByb3dXaWR0aCk7XHJcbiAgICAgICAgICAgICAgICBkb3RzLnB1c2goY3JlYXRlQ2lyY2xlU3ByaXRlKChpICogY29sV2lkdGgpICsgbGVmdFNwYWNpbmcgKyAoY29sV2lkdGggLyAyKSwgKGogKiByb3dXaWR0aCkgKyB0b3BTcGFjaW5nICsgKHJvd1dpZHRoIC8gMiksIFwiUHVycGxlXCIsIGNvbFdpZHRoIC8gMi41KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbG9jYXRpb24rKztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIEFycmF5IGluaXRpYWxpemF0aW9uIGNvZGUgU09VUkNFRCBmcm9tIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS85NjY5MzhcclxuZnVuY3Rpb24gY3JlYXRlQXJyYXkobGVuZ3RoKSB7XHJcbiAgICB2YXIgYXJyID0gbmV3IEFycmF5KGxlbmd0aCB8fCAwKSxcclxuICAgICAgICBpID0gbGVuZ3RoO1xyXG5cclxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcclxuICAgICAgICB3aGlsZShpLS0pIGFycltsZW5ndGgtMSAtIGldID0gY3JlYXRlQXJyYXkuYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGFycjtcclxufVxyXG5cclxuLy8gVGV4dCBmaWxlIHJlYWRpbmcgY29kZSBNT0RJRklFRCBmcm9tIGh0dHBzOi8vbWVkaXVtLmZyZWVjb2RlY2FtcC5vcmcvamF2YXNjcmlwdC1mcm9tLWNhbGxiYWNrcy10by1hc3luYy1hd2FpdC0xY2MwOTBkZGFkOTlcclxuZnVuY3Rpb24gcmVhZFRleHRGaWxlKGZpbGUsIGNhbGxiYWNrKSB7XHJcbiAgICBjb25zdCByYXdGaWxlID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICByYXdGaWxlLnRpbWVvdXQgPSAyMDAwO1xyXG4gICAgcmF3RmlsZS5yZXNwb25zZVR5cGUgPSAndGV4dCc7XHJcbiAgICByYXdGaWxlLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBpZiAocmF3RmlsZS5yZWFkeVN0YXRlID09PSA0KSB7XHJcbiAgICAgICAgICAgIGlmIChyYXdGaWxlLnN0YXR1cyA9PT0gMjAwIHx8IHJhd0ZpbGUuc3RhdHVzID09IDApIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJhd0ZpbGUucmVzcG9uc2VUZXh0KVxyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJhd0ZpbGUub250aW1lb3V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUaW1lb3V0IG9uIGxvYWRpbmcgdGV4dCBmaWxlOiAnICsgZmlsZSlcclxuICAgIH1cclxuICAgIHJhd0ZpbGUub3BlbignR0VUJywgZmlsZSwgdHJ1ZSlcclxuICAgIHJhd0ZpbGUuc2VuZCgpO1xyXG4gIH0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./js/main.js\n");

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