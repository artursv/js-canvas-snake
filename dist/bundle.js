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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/js/Fruit.js":
/*!*************************!*\
  !*** ./app/js/Fruit.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./app/js/constants.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar Fruit = /*#__PURE__*/function () {\n  function Fruit() {\n    _classCallCheck(this, Fruit);\n\n    _defineProperty(this, \"x\", void 0);\n\n    _defineProperty(this, \"y\", void 0);\n\n    _defineProperty(this, \"fruitColour\", 'darkred');\n  }\n\n  _createClass(Fruit, [{\n    key: \"generateNewFruit\",\n    value: function generateNewFruit(snake) {\n      var _this = this;\n\n      var possibleX = _constants__WEBPACK_IMPORTED_MODULE_0__[\"width\"] - _constants__WEBPACK_IMPORTED_MODULE_0__[\"snakeSize\"] - _constants__WEBPACK_IMPORTED_MODULE_0__[\"spacing\"];\n      var min = 1;\n      var max = possibleX / _constants__WEBPACK_IMPORTED_MODULE_0__[\"snakeSize\"];\n      var randomX = Math.floor(Math.random() * (max - min + 1)) + min;\n      var randomY = Math.floor(Math.random() * (max - min + 1)) + min;\n      this.x = randomX * _constants__WEBPACK_IMPORTED_MODULE_0__[\"snakeSize\"] + _constants__WEBPACK_IMPORTED_MODULE_0__[\"spacing\"];\n      this.y = randomY * _constants__WEBPACK_IMPORTED_MODULE_0__[\"snakeSize\"] + _constants__WEBPACK_IMPORTED_MODULE_0__[\"spacing\"];\n      var collidesWithSnake = false;\n      snake.parts.forEach(function (snakePart) {\n        if (snakePart.x === _this.x && snakePart.y === _this.y) {\n          collidesWithSnake = true;\n        }\n      });\n      if (collidesWithSnake) this.generateNewFruit();\n    }\n  }, {\n    key: \"draw\",\n    value: function draw(context) {\n      context.fillStyle = this.fruitColour;\n      context.fillRect(this.x, this.y, _constants__WEBPACK_IMPORTED_MODULE_0__[\"snakeSize\"], _constants__WEBPACK_IMPORTED_MODULE_0__[\"snakeSize\"]);\n    }\n  }]);\n\n  return Fruit;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Fruit);\n\n//# sourceURL=webpack:///./app/js/Fruit.js?");

/***/ }),

/***/ "./app/js/Snake.js":
/*!*************************!*\
  !*** ./app/js/Snake.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _SnakePart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SnakePart */ \"./app/js/SnakePart.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./app/js/constants.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar Snake = /*#__PURE__*/function () {\n  function Snake() {\n    _classCallCheck(this, Snake);\n\n    _defineProperty(this, \"initSnakeSize\", 5);\n\n    _defineProperty(this, \"snakeColour\", 'black');\n\n    _defineProperty(this, \"parts\", []);\n\n    _defineProperty(this, \"movingUp\", false);\n\n    _defineProperty(this, \"movingDown\", false);\n\n    _defineProperty(this, \"movingLeft\", false);\n\n    _defineProperty(this, \"movingRight\", false);\n\n    _defineProperty(this, \"collision\", false);\n\n    _defineProperty(this, \"eatFruit\", false);\n\n    _defineProperty(this, \"tick\", 300);\n  }\n\n  _createClass(Snake, [{\n    key: \"init\",\n    value: function init() {\n      this.resetMovement();\n      this.parts = [];\n      var i = 0;\n      var posX = 25;\n      var posY = 25;\n\n      while (i < this.initSnakeSize) {\n        this.parts.unshift(new _SnakePart__WEBPACK_IMPORTED_MODULE_0__[\"default\"](posX, posY));\n        posX += _constants__WEBPACK_IMPORTED_MODULE_1__[\"snakeSize\"] + _constants__WEBPACK_IMPORTED_MODULE_1__[\"spacing\"];\n        i++;\n      }\n    }\n  }, {\n    key: \"draw\",\n    value: function draw(context) {\n      var _this = this;\n\n      this.parts.forEach(function (snakePart) {\n        _this.drawSnakePart(context, snakePart);\n      });\n    }\n  }, {\n    key: \"drawSnakePart\",\n    value: function drawSnakePart(context, snakePart) {\n      context.fillStyle = this.snakeColour;\n      context.fillRect(snakePart.x, snakePart.y, _constants__WEBPACK_IMPORTED_MODULE_1__[\"snakeSize\"], _constants__WEBPACK_IMPORTED_MODULE_1__[\"snakeSize\"]);\n    }\n  }, {\n    key: \"advanceSnake\",\n    value: function advanceSnake() {\n      if (this.movingUp) {\n        var head = {\n          x: this.parts[0].x,\n          y: this.parts[0].y - (_constants__WEBPACK_IMPORTED_MODULE_1__[\"snakeSize\"] + _constants__WEBPACK_IMPORTED_MODULE_1__[\"spacing\"])\n        };\n        this.parts.unshift(head);\n        this.parts.pop();\n      }\n\n      if (this.movingRight) {\n        var _head = {\n          x: this.parts[0].x + (_constants__WEBPACK_IMPORTED_MODULE_1__[\"snakeSize\"] + _constants__WEBPACK_IMPORTED_MODULE_1__[\"spacing\"]),\n          y: this.parts[0].y\n        };\n        this.parts.unshift(_head);\n        this.parts.pop();\n      }\n\n      if (this.movingDown) {\n        var _head2 = {\n          x: this.parts[0].x,\n          y: this.parts[0].y + (_constants__WEBPACK_IMPORTED_MODULE_1__[\"snakeSize\"] + _constants__WEBPACK_IMPORTED_MODULE_1__[\"spacing\"])\n        };\n        this.parts.unshift(_head2);\n        this.parts.pop();\n      }\n\n      if (this.movingLeft) {\n        var _head3 = {\n          x: this.parts[0].x - (_constants__WEBPACK_IMPORTED_MODULE_1__[\"snakeSize\"] + _constants__WEBPACK_IMPORTED_MODULE_1__[\"spacing\"]),\n          y: this.parts[0].y\n        };\n        this.parts.unshift(_head3);\n        this.parts.pop();\n      }\n    }\n  }, {\n    key: \"resetMovement\",\n    value: function resetMovement() {\n      this.movingUp = false;\n      this.movingDown = false;\n      this.movingRight = false;\n      this.movingLeft = false;\n    }\n  }, {\n    key: \"detectCollisionWithWalls\",\n    value: function detectCollisionWithWalls() {\n      var head = this.parts[0];\n      var totalSize = _constants__WEBPACK_IMPORTED_MODULE_1__[\"snakeSize\"] + _constants__WEBPACK_IMPORTED_MODULE_1__[\"spacing\"];\n\n      if (head.x > _constants__WEBPACK_IMPORTED_MODULE_1__[\"width\"] - totalSize || head.y > _constants__WEBPACK_IMPORTED_MODULE_1__[\"height\"] - totalSize || head.y < 0 || head.x < 0) {\n        this.init();\n        this.movingRight = true;\n        this.collision = true;\n      }\n    }\n  }, {\n    key: \"detectCollisionWithFruit\",\n    value: function detectCollisionWithFruit(fruit, score) {\n      var head = this.parts[0];\n\n      if (head.x === fruit.x && head.y === fruit.y) {\n        this.eatFruit = true;\n        fruit.generateNewFruit(this);\n        var newHead = {};\n\n        if (this.movingUp) {\n          newHead.x = head.x;\n          newHead.y = head.y - _constants__WEBPACK_IMPORTED_MODULE_1__[\"snakeSize\"] - _constants__WEBPACK_IMPORTED_MODULE_1__[\"spacing\"];\n        }\n\n        if (this.movingDown) {\n          newHead.x = head.x;\n          newHead.y = head.y + _constants__WEBPACK_IMPORTED_MODULE_1__[\"snakeSize\"] + _constants__WEBPACK_IMPORTED_MODULE_1__[\"spacing\"];\n        }\n\n        if (this.movingRight) {\n          newHead.x = head.x + _constants__WEBPACK_IMPORTED_MODULE_1__[\"snakeSize\"] + _constants__WEBPACK_IMPORTED_MODULE_1__[\"spacing\"];\n          newHead.y = head.y;\n        }\n\n        if (this.movingLeft) {\n          newHead.x = head.x - _constants__WEBPACK_IMPORTED_MODULE_1__[\"snakeSize\"] - _constants__WEBPACK_IMPORTED_MODULE_1__[\"spacing\"];\n          newHead.y = head.y;\n        }\n\n        this.parts.unshift(newHead);\n        this.tick = this.tick - this.tick / 100 * 5;\n        return score + 1;\n      } else {\n        return score;\n      }\n    }\n  }, {\n    key: \"detectCollisionWithSelf\",\n    value: function detectCollisionWithSelf() {\n      var _this2 = this;\n\n      var head = this.parts[0];\n      var tail = this.parts;\n      tail = tail.slice(1);\n      tail.forEach(function (snakeSection) {\n        if (snakeSection.x === head.x && snakeSection.y === head.y) {\n          _this2.resetMovement();\n\n          _this2.init();\n\n          _this2.movingRight = true;\n          _this2.collision = true;\n        }\n      });\n    }\n  }]);\n\n  return Snake;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Snake);\n\n//# sourceURL=webpack:///./app/js/Snake.js?");

/***/ }),

/***/ "./app/js/SnakePart.js":
/*!*****************************!*\
  !*** ./app/js/SnakePart.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar SnakePart = function SnakePart(x, y) {\n  _classCallCheck(this, SnakePart);\n\n  this.x = x;\n  this.y = y;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SnakePart);\n\n//# sourceURL=webpack:///./app/js/SnakePart.js?");

/***/ }),

/***/ "./app/js/constants.js":
/*!*****************************!*\
  !*** ./app/js/constants.js ***!
  \*****************************/
/*! exports provided: width, height, snakeSize, spacing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"width\", function() { return width; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"height\", function() { return height; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"snakeSize\", function() { return snakeSize; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"spacing\", function() { return spacing; });\nvar width = 600;\nvar height = 600;\nvar snakeSize = 25;\nvar spacing = 0;\n\n//# sourceURL=webpack:///./app/js/constants.js?");

/***/ }),

/***/ "./app/js/main.js":
/*!************************!*\
  !*** ./app/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Snake__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Snake */ \"./app/js/Snake.js\");\n/* harmony import */ var _Fruit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Fruit */ \"./app/js/Fruit.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ \"./app/js/constants.js\");\n\n\n\n\"use strict\";\n\nwindow.onload = init;\nvar canvas;\nvar context;\nvar snake = new _Snake__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nvar fruit = new _Fruit__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nvar score = 0;\nvar bestScore = 0;\nvar rightPressed = false;\nvar leftPressed = false;\nvar upPressed = false;\nvar downPressed = false;\nvar gridColour = \"#eee\";\n\nfunction init() {\n  canvas = document.getElementById('canvas');\n  context = canvas.getContext('2d');\n  snake.movingRight = true;\n  snake.init();\n  snake.draw(context);\n  fruit.generateNewFruit(snake);\n  fruit.draw(context);\n  window.requestAnimationFrame(gameLoop);\n}\n\nfunction gameLoop() {\n  context.clearRect(0, 0, canvas.width, canvas.height);\n  context.font = \"20px Georgia\";\n  context.fillText(\"Score: \" + score, 20, 650);\n  context.fillText(\"Bestest score: \" + bestScore, 20, 680);\n  drawGrid();\n  fruit.draw(context);\n  snake.advanceSnake();\n  snake.detectCollisionWithWalls();\n  score = snake.detectCollisionWithFruit(fruit, score);\n  snake.detectCollisionWithSelf();\n  snake.draw(context);\n\n  if (snake.collision) {\n    snake.tick = 300;\n    snake.collision = false;\n\n    if (score > bestScore) {\n      bestScore = score;\n    }\n\n    score = 0;\n  }\n\n  snake.eatFruit = false;\n  setTimeout(function () {\n    window.requestAnimationFrame(gameLoop);\n  }, snake.tick);\n}\n\nfunction drawGrid() {\n  context.beginPath();\n  var drawX = _constants__WEBPACK_IMPORTED_MODULE_2__[\"snakeSize\"];\n  var drawY = _constants__WEBPACK_IMPORTED_MODULE_2__[\"snakeSize\"];\n\n  while (drawX <= _constants__WEBPACK_IMPORTED_MODULE_2__[\"width\"]) {\n    context.moveTo(drawX, 0);\n    context.lineTo(drawX, _constants__WEBPACK_IMPORTED_MODULE_2__[\"height\"]);\n    drawX += _constants__WEBPACK_IMPORTED_MODULE_2__[\"snakeSize\"];\n    context.strokeStyle = gridColour;\n    context.stroke();\n  }\n\n  while (drawY <= _constants__WEBPACK_IMPORTED_MODULE_2__[\"height\"]) {\n    context.moveTo(0, drawY);\n    context.lineTo(_constants__WEBPACK_IMPORTED_MODULE_2__[\"width\"], drawY);\n    drawY += _constants__WEBPACK_IMPORTED_MODULE_2__[\"snakeSize\"];\n    context.strokeStyle = gridColour;\n    context.stroke();\n  }\n}\n\nfunction keyPressed(e) {\n  switch (e.key) {\n    case 'ArrowLeft':\n      if (!leftPressed && !snake.movingRight) {\n        leftPressed = true;\n        snake.resetMovement();\n        snake.movingLeft = true;\n      }\n\n      break;\n\n    case 'ArrowUp':\n      if (!upPressed && !snake.movingDown) {\n        upPressed = true;\n        snake.resetMovement();\n        snake.movingUp = true;\n      }\n\n      break;\n\n    case 'ArrowRight':\n      if (!rightPressed && !snake.movingLeft) {\n        rightPressed = true;\n        snake.resetMovement();\n        snake.movingRight = true;\n      }\n\n      break;\n\n    case 'ArrowDown':\n      if (!downPressed && !snake.movingUp) {\n        downPressed = true;\n        snake.resetMovement();\n        snake.movingDown = true;\n      }\n\n      break;\n  }\n}\n\nfunction keyReleased(e) {\n  switch (e.key) {\n    case 'ArrowLeft':\n      leftPressed = false;\n      break;\n\n    case 'ArrowUp':\n      upPressed = false;\n      break;\n\n    case 'ArrowRight':\n      rightPressed = false;\n      break;\n\n    case 'ArrowDown':\n      downPressed = false;\n      break;\n  }\n}\n\ndocument.addEventListener('keydown', keyPressed);\ndocument.addEventListener('keyup', keyReleased);\n\n//# sourceURL=webpack:///./app/js/main.js?");

/***/ })

/******/ });