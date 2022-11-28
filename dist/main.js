/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/index.js":
/*!****************************!*\
  !*** ./assets/js/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'jquery'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\r\n\r\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'jquery'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())( document ).ready(function() {\r\n    Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'jquery'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('#searchBar').on('input', function() {\r\n        var i = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'jquery'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this).val().length;\r\n        if(i > 0){\r\n            Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'jquery'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('#search-icon').css(\"display\", \"none\");\r\n            Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'jquery'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('#arrow-icon').css(\"display\", \"block\");\r\n        }\r\n        else{\r\n            Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'jquery'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('#arrow-icon').css(\"display\", \"none\");\r\n            Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'jquery'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('#search-icon').css(\"display\", \"block\");\r\n        }\r\n    });\r\n\r\n    Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'jquery'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(\"#searchButton\").click(function(){\r\n\r\n        var moviesTitle = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'jquery'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('#searchBar').val();\r\n        var apiUrl = 'https://omdbapi.com/?apikey=2374f3c&s=' + moviesTitle;\r\n        Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'jquery'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(apiUrl, function(data){\r\n    \r\n            console.log(data)\r\n            var html = \"\";\r\n            for(i=0; i<data.Search.length; i++){\r\n                var movieItem = data.Search[i];\r\n                html += '<div class=\"row col-12 movieItem\">'\r\n                html += '<div class=\"col-md-6\">';\r\n                html += 'Title: '+ movieItem.Title +'<br />';\r\n                html += '</div>'\r\n                Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'jquery'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('#movieList').html(html);\r\n            }\r\n           \r\n            console.log(html)\r\n        })\r\n\r\n    })\r\n\r\n\r\n    \r\n}); \n\n//# sourceURL=webpack://nexum-case/./assets/js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./assets/js/index.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;