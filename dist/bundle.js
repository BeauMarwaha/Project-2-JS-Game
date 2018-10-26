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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/classes.js":
/*!***********************!*\
  !*** ./js/classes.js ***!
  \***********************/
/*! exports provided: createCircleSprites, createSquareSprites, createImageSprites, createLineSprites */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createCircleSprites\", function() { return createCircleSprites; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createSquareSprites\", function() { return createSquareSprites; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createImageSprites\", function() { return createImageSprites; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createLineSprites\", function() { return createLineSprites; });\n/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities.js */ \"./js/utilities.js\");\n\r\n\r\n\r\nclass sprite{\r\n\t\tconstructor(x,y,fwd,speed){\r\n\t\t\tthis.x = x;\r\n\t\t\tthis.y = y;\r\n\t\t\tthis.fwd = fwd;\r\n\t\t\tthis.speed = speed;\r\n\t\t}\r\n\t\t//  methods\r\n\t\tmove(){\r\n\t\t\t\tthis.x += this.fwd.x * this.speed;\r\n\t\t\t\tthis.y += this.fwd.y * this.speed;\r\n\t\t}\r\n\t\treflectX(){\r\n\t\t\tthis.fwd.x *= -1;\r\n\t\t}\r\n\t\treflectY(){\r\n\t\t\tthis.fwd.y *= -1;\r\n\t\t}\r\n}\r\n\r\nclass circleSprite extends sprite{\r\n\tconstructor(rect,radius,color)\r\n\t{\r\n\t\tsuper(Math.random() * rect.width + rect.left, Math.random() * rect.height + rect.top, Object(_utilities_js__WEBPACK_IMPORTED_MODULE_0__[\"getRandomUnitVector\"])(), 2);\r\n\t\tthis.radius = radius;\r\n\t\tthis.color = color;\r\n\t}\r\n\tdraw(ctx){\r\n\t\tctx.save();\r\n\t\tctx.beginPath();\r\n\t\tctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);\r\n\t\tctx.closePath();\r\n\t\tctx.fillStyle = this.color;\r\n\t\tctx.fill();\r\n\t\tctx.restore();\r\n\t}\r\n}\r\n\r\nclass squareSprite extends sprite{\r\n\tconstructor(rect,width,height,color){\r\n\t\tsuper(Math.random() * rect.width + rect.left, Math.random() * rect.height + rect.top, Object(_utilities_js__WEBPACK_IMPORTED_MODULE_0__[\"getRandomUnitVector\"])(), 2);\r\n\t\tthis.width = width;\r\n\t\tthis.height = height;\r\n\t\tthis.color = color;\r\n\t}\r\n\tdraw(ctx){ \r\n\t\tctx.save();\r\n\t\tctx.fillStyle = this.color;\r\n\t\tctx.fillRect(this.x, this.y, this.width, this.height);\r\n\t\tctx.restore();\r\n\t}\r\n}\r\n\r\nclass imageSprite extends sprite{\r\n\tconstructor(rect,width,height,image){\r\n\t\tsuper(Math.random() * rect.width + rect.left, Math.random() * rect.height + rect.top, Object(_utilities_js__WEBPACK_IMPORTED_MODULE_0__[\"getRandomUnitVector\"])(), 2);\r\n\t\tthis.width = width;\r\n\t\tthis.height = height;\r\n\t\tthis.image = image;\r\n\t}\r\n\tdraw(ctx){\r\n\t\tctx.save();\r\n\t\tctx.drawImage(this.image,this.x,this.y,this.width,this.height);\r\n\t\tctx.restore();\r\n\t}\r\n}\r\n\r\nclass lineSprite extends sprite{\r\n\tconstructor(rect,length,color){\r\n\t\tsuper(Math.random() * rect.width + rect.left, Math.random() * rect.height + rect.top, Object(_utilities_js__WEBPACK_IMPORTED_MODULE_0__[\"getRandomUnitVector\"])(), 2);\r\n\t\tthis.length = length;\r\n\t\tthis.height = 5;\r\n\t\tthis.color = color;\r\n\t}\r\n\tdraw(ctx){\r\n\t\tctx.save();\r\n\t\tctx.beginPath();\r\n\t\tctx.moveTo(this.x, this.y);\r\n\t\tctx.lineTo(this.x + this.length, this.y);\r\n\t\tctx.strokeStyle = this.color;\r\n\t\tctx.lineWidth = this.height;\r\n\t\tctx.stroke();\r\n\t\tctx.restore();\r\n\t}\r\n}\r\n\r\nfunction createCircleSprites(num=20, rect={left:0,top:0,width:300,height:300}, color=\"Blue\", radius=5){\r\n\tlet sprites = [];\r\n\tfor(let i=0;i<num;i++){\r\n\t\tsprites.push(new circleSprite(rect,radius,color));\r\n\t}\r\n\t\r\n\treturn sprites; \r\n}\r\n\r\nfunction createSquareSprites(num=20, rect={left:0,top:0,width:300,height:300}, color=\"Blue\", width=10, height=10){\r\n\tlet sprites = [];\r\n\tfor(let i=0;i<num;i++){\r\n\t\tsprites.push(new squareSprite(rect,width,height,color));\r\n\t}\r\n\t\r\n\treturn sprites; \r\n}\r\n\r\nfunction createImageSprites(num=20, rect={left:0,top:0,width:300,height:300}, width=30, height=30, url=\"images/Sean.png\"){\r\n\tlet sprites = [];\r\n\tlet image = new Image();\r\n\timage.src = url; \r\n\tfor(let i=0;i<num;i++){\r\n\t\tsprites.push(new imageSprite(rect,width,height,image));\r\n\t}\r\n\t\r\n\treturn sprites; \r\n}\r\n\r\nfunction createLineSprites(num=20, rect={left:0,top:0,width:300,height:300}, color=\"Blue\", length=10){\r\n\tlet sprites = [];\r\n\tfor(let i=0;i<num;i++){\r\n\t\tsprites.push(new lineSprite(rect,length,color));\r\n\t}\r\n\t\r\n\treturn sprites; \r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9jbGFzc2VzLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vanMvY2xhc3Nlcy5qcz9iZDZiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Z2V0UmFuZG9tVW5pdFZlY3Rvcn0gZnJvbSAnLi91dGlsaXRpZXMuanMnO1xyXG5leHBvcnQge2NyZWF0ZUNpcmNsZVNwcml0ZXMsY3JlYXRlU3F1YXJlU3ByaXRlcyxjcmVhdGVJbWFnZVNwcml0ZXMsY3JlYXRlTGluZVNwcml0ZXN9O1xyXG5cclxuY2xhc3Mgc3ByaXRle1xyXG5cdFx0Y29uc3RydWN0b3IoeCx5LGZ3ZCxzcGVlZCl7XHJcblx0XHRcdHRoaXMueCA9IHg7XHJcblx0XHRcdHRoaXMueSA9IHk7XHJcblx0XHRcdHRoaXMuZndkID0gZndkO1xyXG5cdFx0XHR0aGlzLnNwZWVkID0gc3BlZWQ7XHJcblx0XHR9XHJcblx0XHQvLyAgbWV0aG9kc1xyXG5cdFx0bW92ZSgpe1xyXG5cdFx0XHRcdHRoaXMueCArPSB0aGlzLmZ3ZC54ICogdGhpcy5zcGVlZDtcclxuXHRcdFx0XHR0aGlzLnkgKz0gdGhpcy5md2QueSAqIHRoaXMuc3BlZWQ7XHJcblx0XHR9XHJcblx0XHRyZWZsZWN0WCgpe1xyXG5cdFx0XHR0aGlzLmZ3ZC54ICo9IC0xO1xyXG5cdFx0fVxyXG5cdFx0cmVmbGVjdFkoKXtcclxuXHRcdFx0dGhpcy5md2QueSAqPSAtMTtcclxuXHRcdH1cclxufVxyXG5cclxuY2xhc3MgY2lyY2xlU3ByaXRlIGV4dGVuZHMgc3ByaXRle1xyXG5cdGNvbnN0cnVjdG9yKHJlY3QscmFkaXVzLGNvbG9yKVxyXG5cdHtcclxuXHRcdHN1cGVyKE1hdGgucmFuZG9tKCkgKiByZWN0LndpZHRoICsgcmVjdC5sZWZ0LCBNYXRoLnJhbmRvbSgpICogcmVjdC5oZWlnaHQgKyByZWN0LnRvcCwgZ2V0UmFuZG9tVW5pdFZlY3RvcigpLCAyKTtcclxuXHRcdHRoaXMucmFkaXVzID0gcmFkaXVzO1xyXG5cdFx0dGhpcy5jb2xvciA9IGNvbG9yO1xyXG5cdH1cclxuXHRkcmF3KGN0eCl7XHJcblx0XHRjdHguc2F2ZSgpO1xyXG5cdFx0Y3R4LmJlZ2luUGF0aCgpO1xyXG5cdFx0Y3R4LmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMsIDAsIE1hdGguUEkqMiwgZmFsc2UpO1xyXG5cdFx0Y3R4LmNsb3NlUGF0aCgpO1xyXG5cdFx0Y3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XHJcblx0XHRjdHguZmlsbCgpO1xyXG5cdFx0Y3R4LnJlc3RvcmUoKTtcclxuXHR9XHJcbn1cclxuXHJcbmNsYXNzIHNxdWFyZVNwcml0ZSBleHRlbmRzIHNwcml0ZXtcclxuXHRjb25zdHJ1Y3RvcihyZWN0LHdpZHRoLGhlaWdodCxjb2xvcil7XHJcblx0XHRzdXBlcihNYXRoLnJhbmRvbSgpICogcmVjdC53aWR0aCArIHJlY3QubGVmdCwgTWF0aC5yYW5kb20oKSAqIHJlY3QuaGVpZ2h0ICsgcmVjdC50b3AsIGdldFJhbmRvbVVuaXRWZWN0b3IoKSwgMik7XHJcblx0XHR0aGlzLndpZHRoID0gd2lkdGg7XHJcblx0XHR0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuXHRcdHRoaXMuY29sb3IgPSBjb2xvcjtcclxuXHR9XHJcblx0ZHJhdyhjdHgpeyBcclxuXHRcdGN0eC5zYXZlKCk7XHJcblx0XHRjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcclxuXHRcdGN0eC5maWxsUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG5cdFx0Y3R4LnJlc3RvcmUoKTtcclxuXHR9XHJcbn1cclxuXHJcbmNsYXNzIGltYWdlU3ByaXRlIGV4dGVuZHMgc3ByaXRle1xyXG5cdGNvbnN0cnVjdG9yKHJlY3Qsd2lkdGgsaGVpZ2h0LGltYWdlKXtcclxuXHRcdHN1cGVyKE1hdGgucmFuZG9tKCkgKiByZWN0LndpZHRoICsgcmVjdC5sZWZ0LCBNYXRoLnJhbmRvbSgpICogcmVjdC5oZWlnaHQgKyByZWN0LnRvcCwgZ2V0UmFuZG9tVW5pdFZlY3RvcigpLCAyKTtcclxuXHRcdHRoaXMud2lkdGggPSB3aWR0aDtcclxuXHRcdHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG5cdFx0dGhpcy5pbWFnZSA9IGltYWdlO1xyXG5cdH1cclxuXHRkcmF3KGN0eCl7XHJcblx0XHRjdHguc2F2ZSgpO1xyXG5cdFx0Y3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlLHRoaXMueCx0aGlzLnksdGhpcy53aWR0aCx0aGlzLmhlaWdodCk7XHJcblx0XHRjdHgucmVzdG9yZSgpO1xyXG5cdH1cclxufVxyXG5cclxuY2xhc3MgbGluZVNwcml0ZSBleHRlbmRzIHNwcml0ZXtcclxuXHRjb25zdHJ1Y3RvcihyZWN0LGxlbmd0aCxjb2xvcil7XHJcblx0XHRzdXBlcihNYXRoLnJhbmRvbSgpICogcmVjdC53aWR0aCArIHJlY3QubGVmdCwgTWF0aC5yYW5kb20oKSAqIHJlY3QuaGVpZ2h0ICsgcmVjdC50b3AsIGdldFJhbmRvbVVuaXRWZWN0b3IoKSwgMik7XHJcblx0XHR0aGlzLmxlbmd0aCA9IGxlbmd0aDtcclxuXHRcdHRoaXMuaGVpZ2h0ID0gNTtcclxuXHRcdHRoaXMuY29sb3IgPSBjb2xvcjtcclxuXHR9XHJcblx0ZHJhdyhjdHgpe1xyXG5cdFx0Y3R4LnNhdmUoKTtcclxuXHRcdGN0eC5iZWdpblBhdGgoKTtcclxuXHRcdGN0eC5tb3ZlVG8odGhpcy54LCB0aGlzLnkpO1xyXG5cdFx0Y3R4LmxpbmVUbyh0aGlzLnggKyB0aGlzLmxlbmd0aCwgdGhpcy55KTtcclxuXHRcdGN0eC5zdHJva2VTdHlsZSA9IHRoaXMuY29sb3I7XHJcblx0XHRjdHgubGluZVdpZHRoID0gdGhpcy5oZWlnaHQ7XHJcblx0XHRjdHguc3Ryb2tlKCk7XHJcblx0XHRjdHgucmVzdG9yZSgpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ2lyY2xlU3ByaXRlcyhudW09MjAsIHJlY3Q9e2xlZnQ6MCx0b3A6MCx3aWR0aDozMDAsaGVpZ2h0OjMwMH0sIGNvbG9yPVwiQmx1ZVwiLCByYWRpdXM9NSl7XHJcblx0bGV0IHNwcml0ZXMgPSBbXTtcclxuXHRmb3IobGV0IGk9MDtpPG51bTtpKyspe1xyXG5cdFx0c3ByaXRlcy5wdXNoKG5ldyBjaXJjbGVTcHJpdGUocmVjdCxyYWRpdXMsY29sb3IpKTtcclxuXHR9XHJcblx0XHJcblx0cmV0dXJuIHNwcml0ZXM7IFxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTcXVhcmVTcHJpdGVzKG51bT0yMCwgcmVjdD17bGVmdDowLHRvcDowLHdpZHRoOjMwMCxoZWlnaHQ6MzAwfSwgY29sb3I9XCJCbHVlXCIsIHdpZHRoPTEwLCBoZWlnaHQ9MTApe1xyXG5cdGxldCBzcHJpdGVzID0gW107XHJcblx0Zm9yKGxldCBpPTA7aTxudW07aSsrKXtcclxuXHRcdHNwcml0ZXMucHVzaChuZXcgc3F1YXJlU3ByaXRlKHJlY3Qsd2lkdGgsaGVpZ2h0LGNvbG9yKSk7XHJcblx0fVxyXG5cdFxyXG5cdHJldHVybiBzcHJpdGVzOyBcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlSW1hZ2VTcHJpdGVzKG51bT0yMCwgcmVjdD17bGVmdDowLHRvcDowLHdpZHRoOjMwMCxoZWlnaHQ6MzAwfSwgd2lkdGg9MzAsIGhlaWdodD0zMCwgdXJsPVwiaW1hZ2VzL1NlYW4ucG5nXCIpe1xyXG5cdGxldCBzcHJpdGVzID0gW107XHJcblx0bGV0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcblx0aW1hZ2Uuc3JjID0gdXJsOyBcclxuXHRmb3IobGV0IGk9MDtpPG51bTtpKyspe1xyXG5cdFx0c3ByaXRlcy5wdXNoKG5ldyBpbWFnZVNwcml0ZShyZWN0LHdpZHRoLGhlaWdodCxpbWFnZSkpO1xyXG5cdH1cclxuXHRcclxuXHRyZXR1cm4gc3ByaXRlczsgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUxpbmVTcHJpdGVzKG51bT0yMCwgcmVjdD17bGVmdDowLHRvcDowLHdpZHRoOjMwMCxoZWlnaHQ6MzAwfSwgY29sb3I9XCJCbHVlXCIsIGxlbmd0aD0xMCl7XHJcblx0bGV0IHNwcml0ZXMgPSBbXTtcclxuXHRmb3IobGV0IGk9MDtpPG51bTtpKyspe1xyXG5cdFx0c3ByaXRlcy5wdXNoKG5ldyBsaW5lU3ByaXRlKHJlY3QsbGVuZ3RoLGNvbG9yKSk7XHJcblx0fVxyXG5cdFxyXG5cdHJldHVybiBzcHJpdGVzOyBcclxufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./js/classes.js\n");

/***/ }),

/***/ "./js/init.js":
/*!********************!*\
  !*** ./js/init.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.js */ \"./js/main.js\");\n\r\n// 1) this script a good place to load fonts, images, sounds and other resources\r\n// 2) start up app\r\nObject(_main_js__WEBPACK_IMPORTED_MODULE_0__[\"init\"])();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9pbml0LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vanMvaW5pdC5qcz82OWJjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5pdH0gZnJvbSAnLi9tYWluLmpzJztcclxuLy8gMSkgdGhpcyBzY3JpcHQgYSBnb29kIHBsYWNlIHRvIGxvYWQgZm9udHMsIGltYWdlcywgc291bmRzIGFuZCBvdGhlciByZXNvdXJjZXNcclxuLy8gMikgc3RhcnQgdXAgYXBwXHJcbmluaXQoKTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./js/init.js\n");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! exports provided: init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"init\", function() { return init; });\n/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes.js */ \"./js/classes.js\");\n\r\n\r\n\r\nconst ctx = document.querySelector(\"canvas\").getContext(\"2d\");\r\nconst screenWidth = 600;\r\nconst screenHeight = 400;\r\nlet sprites = [];\r\n\r\nfunction init(){\r\n\tlet margin = 50;\r\n\tlet rect = {left: margin, top: margin, width: screenWidth - margin*2, height: screenHeight-margin*2}\r\n\tlet rect2 = {left: margin, top: margin, width: screenWidth - margin*2, height: screenHeight-margin*2 - 100}\r\n\tsprites = sprites.concat(\r\n        Object(_classes_js__WEBPACK_IMPORTED_MODULE_0__[\"createCircleSprites\"])(20,rect,\"Red\",10),\r\n        Object(_classes_js__WEBPACK_IMPORTED_MODULE_0__[\"createCircleSprites\"])(15,rect,\"Blue\",5),\r\n        Object(_classes_js__WEBPACK_IMPORTED_MODULE_0__[\"createSquareSprites\"])(10,rect,\"Green\",10,15),\r\n        Object(_classes_js__WEBPACK_IMPORTED_MODULE_0__[\"createSquareSprites\"])(10,rect,\"Gray\",5,5),\r\n        Object(_classes_js__WEBPACK_IMPORTED_MODULE_0__[\"createImageSprites\"])(10,rect2,50,100,\"images/Sean.png\"),\r\n        Object(_classes_js__WEBPACK_IMPORTED_MODULE_0__[\"createImageSprites\"])(10,rect2,50,50,\"https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Pac_Man.svg/1200px-Pac_Man.svg.png\"),\r\n        Object(_classes_js__WEBPACK_IMPORTED_MODULE_0__[\"createLineSprites\"])(5,rect,\"Orange\",30),\r\n        Object(_classes_js__WEBPACK_IMPORTED_MODULE_0__[\"createLineSprites\"])(5,rect,\"Purple\",50));\r\n\tloop();\r\n}\r\n\r\nfunction loop(){\r\n\t// schedule a call to loop() in 1/60th of a second\r\n\trequestAnimationFrame(loop);\r\n\t\r\n\t// draw background\r\n\tctx.fillRect(0,0,screenWidth,screenHeight)\r\n\t\r\n\t// loop through sprites\r\n\tfor (let s of sprites){\r\n\t\t// move sprites\r\n\t\ts.move();\r\n\t\t\r\n\t\t// check sides and bounce\r\n\t\tif(s.radius){\r\n            // a circle\r\n            if (s.x <= s.radius || s.x >= screenWidth-s.radius){\r\n                s.reflectX();\r\n                s.move();\r\n            }\r\n            if (s.y <= s.radius || s.y >= screenHeight-s.radius){\r\n                s.reflectY();\r\n                s.move();\r\n            }\r\n        }else{ // `s` is NOT a circle\r\n            // left and right\r\n            if (s.x <= 0 || s.x >= screenWidth-s.width){\r\n                s.reflectX();\r\n                s.move();\r\n            }\r\n            // top and bottom\r\n            if (s.y <= 0 || s.y >= screenHeight-s.height){\r\n                s.reflectY();\r\n                s.move();\r\n            }\r\n        } // end if s.radius\r\n\t\r\n\t    // draw sprites\r\n\t\ts.draw(ctx);\r\n\t} // end for\r\n} // end loop()//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9tYWluLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vanMvbWFpbi5qcz9lM2IxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlQ2lyY2xlU3ByaXRlcyxjcmVhdGVTcXVhcmVTcHJpdGVzLGNyZWF0ZUltYWdlU3ByaXRlcyxjcmVhdGVMaW5lU3ByaXRlc30gZnJvbSAnLi9jbGFzc2VzLmpzJztcclxuZXhwb3J0IHtpbml0fTtcclxuXHJcbmNvbnN0IGN0eCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJjYW52YXNcIikuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG5jb25zdCBzY3JlZW5XaWR0aCA9IDYwMDtcclxuY29uc3Qgc2NyZWVuSGVpZ2h0ID0gNDAwO1xyXG5sZXQgc3ByaXRlcyA9IFtdO1xyXG5cclxuZnVuY3Rpb24gaW5pdCgpe1xyXG5cdGxldCBtYXJnaW4gPSA1MDtcclxuXHRsZXQgcmVjdCA9IHtsZWZ0OiBtYXJnaW4sIHRvcDogbWFyZ2luLCB3aWR0aDogc2NyZWVuV2lkdGggLSBtYXJnaW4qMiwgaGVpZ2h0OiBzY3JlZW5IZWlnaHQtbWFyZ2luKjJ9XHJcblx0bGV0IHJlY3QyID0ge2xlZnQ6IG1hcmdpbiwgdG9wOiBtYXJnaW4sIHdpZHRoOiBzY3JlZW5XaWR0aCAtIG1hcmdpbioyLCBoZWlnaHQ6IHNjcmVlbkhlaWdodC1tYXJnaW4qMiAtIDEwMH1cclxuXHRzcHJpdGVzID0gc3ByaXRlcy5jb25jYXQoXHJcbiAgICAgICAgY3JlYXRlQ2lyY2xlU3ByaXRlcygyMCxyZWN0LFwiUmVkXCIsMTApLFxyXG4gICAgICAgIGNyZWF0ZUNpcmNsZVNwcml0ZXMoMTUscmVjdCxcIkJsdWVcIiw1KSxcclxuICAgICAgICBjcmVhdGVTcXVhcmVTcHJpdGVzKDEwLHJlY3QsXCJHcmVlblwiLDEwLDE1KSxcclxuICAgICAgICBjcmVhdGVTcXVhcmVTcHJpdGVzKDEwLHJlY3QsXCJHcmF5XCIsNSw1KSxcclxuICAgICAgICBjcmVhdGVJbWFnZVNwcml0ZXMoMTAscmVjdDIsNTAsMTAwLFwiaW1hZ2VzL1NlYW4ucG5nXCIpLFxyXG4gICAgICAgIGNyZWF0ZUltYWdlU3ByaXRlcygxMCxyZWN0Miw1MCw1MCxcImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvMC8wNi9QYWNfTWFuLnN2Zy8xMjAwcHgtUGFjX01hbi5zdmcucG5nXCIpLFxyXG4gICAgICAgIGNyZWF0ZUxpbmVTcHJpdGVzKDUscmVjdCxcIk9yYW5nZVwiLDMwKSxcclxuICAgICAgICBjcmVhdGVMaW5lU3ByaXRlcyg1LHJlY3QsXCJQdXJwbGVcIiw1MCkpO1xyXG5cdGxvb3AoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbG9vcCgpe1xyXG5cdC8vIHNjaGVkdWxlIGEgY2FsbCB0byBsb29wKCkgaW4gMS82MHRoIG9mIGEgc2Vjb25kXHJcblx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApO1xyXG5cdFxyXG5cdC8vIGRyYXcgYmFja2dyb3VuZFxyXG5cdGN0eC5maWxsUmVjdCgwLDAsc2NyZWVuV2lkdGgsc2NyZWVuSGVpZ2h0KVxyXG5cdFxyXG5cdC8vIGxvb3AgdGhyb3VnaCBzcHJpdGVzXHJcblx0Zm9yIChsZXQgcyBvZiBzcHJpdGVzKXtcclxuXHRcdC8vIG1vdmUgc3ByaXRlc1xyXG5cdFx0cy5tb3ZlKCk7XHJcblx0XHRcclxuXHRcdC8vIGNoZWNrIHNpZGVzIGFuZCBib3VuY2VcclxuXHRcdGlmKHMucmFkaXVzKXtcclxuICAgICAgICAgICAgLy8gYSBjaXJjbGVcclxuICAgICAgICAgICAgaWYgKHMueCA8PSBzLnJhZGl1cyB8fCBzLnggPj0gc2NyZWVuV2lkdGgtcy5yYWRpdXMpe1xyXG4gICAgICAgICAgICAgICAgcy5yZWZsZWN0WCgpO1xyXG4gICAgICAgICAgICAgICAgcy5tb3ZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHMueSA8PSBzLnJhZGl1cyB8fCBzLnkgPj0gc2NyZWVuSGVpZ2h0LXMucmFkaXVzKXtcclxuICAgICAgICAgICAgICAgIHMucmVmbGVjdFkoKTtcclxuICAgICAgICAgICAgICAgIHMubW92ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2V7IC8vIGBzYCBpcyBOT1QgYSBjaXJjbGVcclxuICAgICAgICAgICAgLy8gbGVmdCBhbmQgcmlnaHRcclxuICAgICAgICAgICAgaWYgKHMueCA8PSAwIHx8IHMueCA+PSBzY3JlZW5XaWR0aC1zLndpZHRoKXtcclxuICAgICAgICAgICAgICAgIHMucmVmbGVjdFgoKTtcclxuICAgICAgICAgICAgICAgIHMubW92ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIHRvcCBhbmQgYm90dG9tXHJcbiAgICAgICAgICAgIGlmIChzLnkgPD0gMCB8fCBzLnkgPj0gc2NyZWVuSGVpZ2h0LXMuaGVpZ2h0KXtcclxuICAgICAgICAgICAgICAgIHMucmVmbGVjdFkoKTtcclxuICAgICAgICAgICAgICAgIHMubW92ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSAvLyBlbmQgaWYgcy5yYWRpdXNcclxuXHRcclxuXHQgICAgLy8gZHJhdyBzcHJpdGVzXHJcblx0XHRzLmRyYXcoY3R4KTtcclxuXHR9IC8vIGVuZCBmb3JcclxufSAvLyBlbmQgbG9vcCgpIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./js/main.js\n");

/***/ }),

/***/ "./js/utilities.js":
/*!*************************!*\
  !*** ./js/utilities.js ***!
  \*************************/
/*! exports provided: getRandomUnitVector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRandomUnitVector\", function() { return getRandomUnitVector; });\n\r\n\r\n// these 2 helpers are used by classes.js\r\nfunction getRandomUnitVector(){\r\n\tlet x = getRandom(-1,1);\r\n\tlet y = getRandom(-1,1);\r\n\tlet length = Math.sqrt(x*x + y*y);\r\n\tif(length == 0){ // very unlikely\r\n\t\tx=1; // point right\r\n\t\ty=0;\r\n\t\tlength = 1;\r\n\t} else{\r\n\t\tx /= length;\r\n\t\ty /= length;\r\n\t}\r\n\r\n\treturn {x:x, y:y};\r\n}\r\n\r\nfunction getRandom(min, max) {\r\n\treturn Math.random() * (max - min) + min;\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy91dGlsaXRpZXMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy91dGlsaXRpZXMuanM/ZDc4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQge2dldFJhbmRvbVVuaXRWZWN0b3J9O1xyXG5cclxuLy8gdGhlc2UgMiBoZWxwZXJzIGFyZSB1c2VkIGJ5IGNsYXNzZXMuanNcclxuZnVuY3Rpb24gZ2V0UmFuZG9tVW5pdFZlY3Rvcigpe1xyXG5cdGxldCB4ID0gZ2V0UmFuZG9tKC0xLDEpO1xyXG5cdGxldCB5ID0gZ2V0UmFuZG9tKC0xLDEpO1xyXG5cdGxldCBsZW5ndGggPSBNYXRoLnNxcnQoeCp4ICsgeSp5KTtcclxuXHRpZihsZW5ndGggPT0gMCl7IC8vIHZlcnkgdW5saWtlbHlcclxuXHRcdHg9MTsgLy8gcG9pbnQgcmlnaHRcclxuXHRcdHk9MDtcclxuXHRcdGxlbmd0aCA9IDE7XHJcblx0fSBlbHNle1xyXG5cdFx0eCAvPSBsZW5ndGg7XHJcblx0XHR5IC89IGxlbmd0aDtcclxuXHR9XHJcblxyXG5cdHJldHVybiB7eDp4LCB5Onl9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRSYW5kb20obWluLCBtYXgpIHtcclxuXHRyZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xyXG59Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/utilities.js\n");

/***/ }),

/***/ 0:
/*!*************************************************************************!*\
  !*** multi ./js/init.js ./js/classes.js ./js/main.js ./js/utilities.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./js/init.js */"./js/init.js");
__webpack_require__(/*! ./js/classes.js */"./js/classes.js");
__webpack_require__(/*! ./js/main.js */"./js/main.js");
module.exports = __webpack_require__(/*! ./js/utilities.js */"./js/utilities.js");


/***/ })

/******/ });