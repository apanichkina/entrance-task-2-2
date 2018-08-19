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
/******/ 	__webpack_require__.p = "/Users/a.panichkina/entrance-task-2-2/public";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/app/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/app/api.js":
/*!***************************!*\
  !*** ./public/app/api.js ***!
  \***************************/
/*! exports provided: getDevices, getScenarios */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDevices", function() { return getDevices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScenarios", function() { return getScenarios; });
function getDevices() {
  return fetch('/api/devices')
    .then(response => response.json());
}

function getScenarios() {
  return fetch('/api/scenarios')
    .then(response => response.json());
}


/***/ }),

/***/ "./public/app/components/Devices/devices.js":
/*!**************************************************!*\
  !*** ./public/app/components/Devices/devices.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _devices_tmpl_xml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./devices.tmpl.xml */ "./public/app/components/Devices/devices.tmpl.xml");
/**
 *  @module components/DevicesBlock
 */



/**
 * Popup class to show pop-up block in case of win
 */
class DevicesBlock {
  /**
   * Create a block
   */
  constructor(root) {
    this.root = root;
    this.fest = _devices_tmpl_xml__WEBPACK_IMPORTED_MODULE_0__["default"];
  }

  /**
   * Render block
   * @param {object} params - description of the fields needed by the fest.
   * @return {DevicesBlock} current class instance.
   */
  render(params) {
    if (this.root) {
      this.root.innerHTML = this.fest(params);
    }

    return this;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (DevicesBlock);


/***/ }),

/***/ "./public/app/components/Devices/devices.tmpl.xml":
/*!********************************************************!*\
  !*** ./public/app/components/Devices/devices.tmpl.xml ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (__fest_context){"use strict";var __fest_self=this,__fest_buf="",__fest_chunks=[],__fest_chunk,__fest_attrs=[],__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn,__fest_html="",__fest_blocks={},__fest_params,__fest_element,__fest_debug_file="",__fest_debug_line="",__fest_debug_block="",__fest_element_stack = [],__fest_short_tags = {"area": true, "base": true, "br": true, "col": true, "command": true, "embed": true, "hr": true, "img": true, "input": true, "keygen": true, "link": true, "meta": true, "param": true, "source": true, "wbr": true},__fest_jschars = /[\\'"\/\n\r\t\b\f<>]/g,__fest_jschars_test = /[\\'"\/\n\r\t\b\f<>]/,__fest_htmlchars = /[&<>"]/g,__fest_htmlchars_test = /[&<>"]/,__fest_jshash = {"\"": "\\\"", "\\": "\\\\", "/": "\\/", "\n": "\\n", "\r": "\\r", "\t": "\\t", "\b": "\\b", "\f": "\\f", "'": "\\'", "<": "\\u003C", ">": "\\u003E"},__fest_htmlhash = {"&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;"},__fest_escapeJS = function __fest_escapeJS(value) {
		if (typeof value === 'string') {
			if (__fest_jschars_test.test(value)) {
				return value.replace(__fest_jschars, __fest_replaceJS);
			}
		}

		return value == null ? '' : value;
	},__fest_replaceJS = function __fest_replaceJS(chr) {
		return __fest_jshash[chr];
	},__fest_escapeHTML = function __fest_escapeHTML(value) {
		if (typeof value === 'string') {
			if (__fest_htmlchars_test.test(value)) {
				return value.replace(__fest_htmlchars, __fest_replaceHTML);
			}
		}

		return value == null ? '' : value;
	},__fest_replaceHTML = function __fest_replaceHTML(chr) {
		return __fest_htmlhash[chr];
	},__fest_extend = function __fest_extend(dest, src) {
		for (var key in src) {
			if (src.hasOwnProperty(key)) {
				dest[key] = src[key];
			}
		}
	},__fest_param = function __fest_param(fn) {
		fn.param = true;
		return fn;
	},i18n=__fest_self && typeof __fest_self.i18n === "function" ? __fest_self.i18n : function (str) {return str;},___fest_log_error;if(typeof __fest_error === "undefined"){___fest_log_error = (typeof console !== "undefined" && console.error) ? function(){return Function.prototype.apply.call(console.error, console, arguments)} : function(){};}else{___fest_log_error=__fest_error};function __fest_log_error(msg){___fest_log_error(msg+"\nin block \""+__fest_debug_block+"\" at line: "+__fest_debug_line+"\nfile: "+__fest_debug_file)}function __fest_call(fn, params,cp){if(cp)for(var i in params)if(typeof params[i]=="function"&&params[i].param)params[i]=params[i]();return fn.call(__fest_self,params)}var params=__fest_context;(function(__fest_context){__fest_blocks.card=function(params){var __fest_buf="";__fest_buf+=("<div class=\"card\"><img src=\"params.img\"/><div class=\"card__title\">");try{__fest_buf+=(__fest_escapeHTML(params.name))}catch(e){__fest_log_error(e.message + "4");}__fest_buf+=("</div>");try{__fest_if=params.subtitle}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<div class=\"subtitle\">");try{__fest_buf+=(__fest_escapeHTML(params.subtitle))}catch(e){__fest_log_error(e.message + "6");}__fest_buf+=("</div>");}__fest_buf+=("</div>");return __fest_buf;};})(__fest_context);var i,card,__fest_to0,__fest_iterator0;try{__fest_iterator0=params || [];__fest_to0=__fest_iterator0.length;}catch(e){__fest_iterator0=[];__fest_to0=0;__fest_log_error(e.message);}for(i=0;i<__fest_to0;i++){card=__fest_iterator0[i];__fest_select="card";__fest_params={};try{__fest_params=card}catch(e){__fest_log_error(e.message)}__fest_chunks.push(__fest_buf,{name:__fest_select,params:__fest_params,cp:false});__fest_buf="";}__fest_buf+=("<div class=\"space__horizontal\"> </div>");__fest_to=__fest_chunks.length;if (__fest_to) {__fest_iterator = 0;for (;__fest_iterator<__fest_to;__fest_iterator++) {__fest_chunk=__fest_chunks[__fest_iterator];if (typeof __fest_chunk==="string") {__fest_html+=__fest_chunk;} else {__fest_fn=__fest_blocks[__fest_chunk.name];if (__fest_fn) __fest_html+=__fest_call(__fest_fn,__fest_chunk.params,__fest_chunk.cp);}}return __fest_html+__fest_buf;} else {return __fest_buf;}});

/***/ }),

/***/ "./public/app/components/Scenarios/scenarios.js":
/*!******************************************************!*\
  !*** ./public/app/components/Scenarios/scenarios.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scenarios_tmpl_xml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scenarios.tmpl.xml */ "./public/app/components/Scenarios/scenarios.tmpl.xml");
/**
 *  @module components/ScenariosBlock
 */



/**
 * Popup class to show pop-up block in case of win
 */
class ScenariosBlock {
  /**
   * Create a block
   */
  constructor(root, cardPerPage = 0) {
    this.root = root;
    this.pageSize = cardPerPage;
    this.fest = _scenarios_tmpl_xml__WEBPACK_IMPORTED_MODULE_0__["default"];
  }

  /**
   * Render block
   * @param {object} params - description of the fields needed by the fest.
   * @return {ScenariosBlock} current class instance.
   */
  render(params) {
    const pages = [];
    let i = 0;
    const data = params;
    while (data.length) {
      pages[i] = data.splice(0, this.pageSize);
      i += 1;
    }
    console.log('res', pages, params);

    if (this.root) {
      this.root.innerHTML = this.fest(pages);
    }

    return this;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (ScenariosBlock);


/***/ }),

/***/ "./public/app/components/Scenarios/scenarios.tmpl.xml":
/*!************************************************************!*\
  !*** ./public/app/components/Scenarios/scenarios.tmpl.xml ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (__fest_context){"use strict";var __fest_self=this,__fest_buf="",__fest_chunks=[],__fest_chunk,__fest_attrs=[],__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn,__fest_html="",__fest_blocks={},__fest_params,__fest_element,__fest_debug_file="",__fest_debug_line="",__fest_debug_block="",__fest_element_stack = [],__fest_short_tags = {"area": true, "base": true, "br": true, "col": true, "command": true, "embed": true, "hr": true, "img": true, "input": true, "keygen": true, "link": true, "meta": true, "param": true, "source": true, "wbr": true},__fest_jschars = /[\\'"\/\n\r\t\b\f<>]/g,__fest_jschars_test = /[\\'"\/\n\r\t\b\f<>]/,__fest_htmlchars = /[&<>"]/g,__fest_htmlchars_test = /[&<>"]/,__fest_jshash = {"\"": "\\\"", "\\": "\\\\", "/": "\\/", "\n": "\\n", "\r": "\\r", "\t": "\\t", "\b": "\\b", "\f": "\\f", "'": "\\'", "<": "\\u003C", ">": "\\u003E"},__fest_htmlhash = {"&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;"},__fest_escapeJS = function __fest_escapeJS(value) {
		if (typeof value === 'string') {
			if (__fest_jschars_test.test(value)) {
				return value.replace(__fest_jschars, __fest_replaceJS);
			}
		}

		return value == null ? '' : value;
	},__fest_replaceJS = function __fest_replaceJS(chr) {
		return __fest_jshash[chr];
	},__fest_escapeHTML = function __fest_escapeHTML(value) {
		if (typeof value === 'string') {
			if (__fest_htmlchars_test.test(value)) {
				return value.replace(__fest_htmlchars, __fest_replaceHTML);
			}
		}

		return value == null ? '' : value;
	},__fest_replaceHTML = function __fest_replaceHTML(chr) {
		return __fest_htmlhash[chr];
	},__fest_extend = function __fest_extend(dest, src) {
		for (var key in src) {
			if (src.hasOwnProperty(key)) {
				dest[key] = src[key];
			}
		}
	},__fest_param = function __fest_param(fn) {
		fn.param = true;
		return fn;
	},i18n=__fest_self && typeof __fest_self.i18n === "function" ? __fest_self.i18n : function (str) {return str;},___fest_log_error;if(typeof __fest_error === "undefined"){___fest_log_error = (typeof console !== "undefined" && console.error) ? function(){return Function.prototype.apply.call(console.error, console, arguments)} : function(){};}else{___fest_log_error=__fest_error};function __fest_log_error(msg){___fest_log_error(msg+"\nin block \""+__fest_debug_block+"\" at line: "+__fest_debug_line+"\nfile: "+__fest_debug_file)}function __fest_call(fn, params,cp){if(cp)for(var i in params)if(typeof params[i]=="function"&&params[i].param)params[i]=params[i]();return fn.call(__fest_self,params)}var params=__fest_context;(function(__fest_context){__fest_blocks.card=function(params){var __fest_buf="";__fest_buf+=("<div class=\"card\"><img src=\"params.img\"/><div class=\"card__title\">");try{__fest_buf+=(__fest_escapeHTML(params.name))}catch(e){__fest_log_error(e.message + "4");}__fest_buf+=("</div>");try{__fest_if=params.subtitle}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<div class=\"subtitle\">");try{__fest_buf+=(__fest_escapeHTML(params.subtitle))}catch(e){__fest_log_error(e.message + "6");}__fest_buf+=("</div>");}__fest_buf+=("</div>");return __fest_buf;};})(__fest_context);var i,page,__fest_to0,__fest_iterator0;try{__fest_iterator0=params || [];__fest_to0=__fest_iterator0.length;}catch(e){__fest_iterator0=[];__fest_to0=0;__fest_log_error(e.message);}for(i=0;i<__fest_to0;i++){page=__fest_iterator0[i];__fest_buf+=("<div class=\"group\">");var j,card,__fest_to1,__fest_iterator1;try{__fest_iterator1=page || [];__fest_to1=__fest_iterator1.length;}catch(e){__fest_iterator1=[];__fest_to1=0;__fest_log_error(e.message);}for(j=0;j<__fest_to1;j++){card=__fest_iterator1[j];__fest_select="card";__fest_params={};try{__fest_params=card}catch(e){__fest_log_error(e.message)}__fest_chunks.push(__fest_buf,{name:__fest_select,params:__fest_params,cp:false});__fest_buf="";}__fest_buf+=("</div>");}__fest_buf+=("<div class=\"space__horizontal\"> </div>");__fest_to=__fest_chunks.length;if (__fest_to) {__fest_iterator = 0;for (;__fest_iterator<__fest_to;__fest_iterator++) {__fest_chunk=__fest_chunks[__fest_iterator];if (typeof __fest_chunk==="string") {__fest_html+=__fest_chunk;} else {__fest_fn=__fest_blocks[__fest_chunk.name];if (__fest_fn) __fest_html+=__fest_call(__fest_fn,__fest_chunk.params,__fest_chunk.cp);}}return __fest_html+__fest_buf;} else {return __fest_buf;}});

/***/ }),

/***/ "./public/app/helpers.js":
/*!*******************************!*\
  !*** ./public/app/helpers.js ***!
  \*******************************/
/*! exports provided: scrollTo, proccessArrows, handelScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollTo", function() { return scrollTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "proccessArrows", function() { return proccessArrows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handelScroll", function() { return handelScroll; });
function easeInOutQuad(t, b, c, d) {
  let time = t / (d / 2);
  let result = 0;

  if (time < 1) {
    result = c / 2 * time * time + b;
  } else {
    time -= 1;
    result = -c / 2 * (time * (time - 2) - 1) + b;
  }

  return result;
}

function scrollTo(element, change = 0, duration = 1000) {
  const start = element.scrollLeft;
  const increment = 20;
  let currentTime = 0;

  const animateScroll = (() => {
    currentTime += increment;

    const val = easeInOutQuad(currentTime, start, change, duration);

    element.scrollLeft = val; // eslint-disable-line no-param-reassign

    if (currentTime < duration) {
      setTimeout(animateScroll, increment);
    }
  });

  animateScroll();
}

function proccessArrows(leftId, rightId, containerId) {
  const left = document.getElementById(leftId);
  const right = document.getElementById(rightId);
  const container = document.getElementById(containerId);

  if (!right || !left || !container) {
    console.log('wrong params for proccessArrows: ', left, right, container);
  }

  const first = container.firstElementChild;
  const last = container.lastElementChild;
  const firstCheck = first.getBoundingClientRect().left < container.getBoundingClientRect().left;
  const lastCheck = last.getBoundingClientRect().right > container.getBoundingClientRect().right;

  if (!firstCheck && !lastCheck) {
    right.style.visibility = 'hidden';
    left.style.visibility = 'hidden';

    return; // <---- внезапный выход
  }
  right.style.visibility = 'visible';
  left.style.visibility = 'visible';


  if (lastCheck) {
    right.classList.add('arrow-right__active');
  } else {
    right.classList.remove('arrow-right__active');
  }
  if (firstCheck) {
    left.classList.add('arrow-left__active');
  } else {
    left.classList.remove('arrow-left__active');
  }
}

function handelScroll(leftId, rightId, containerId, delta) {
  const left = document.getElementById(leftId);
  const right = document.getElementById(rightId);
  const container = document.getElementById(containerId);
  const range = container.clientWidth || delta;

  left.addEventListener('click', () => {
    scrollTo(container, -1 * range, 1000);
    // container.scrollLeft -= 600
  });

  right.addEventListener('click', () => {
    scrollTo(container, range, 1000);
    // container.scrollLeft += 600
  });
}


/***/ }),

/***/ "./public/app/index.js":
/*!*****************************!*\
  !*** ./public/app/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./public/app/api.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./public/app/helpers.js");
/* harmony import */ var _components_Scenarios_scenarios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Scenarios/scenarios */ "./public/app/components/Scenarios/scenarios.js");
/* harmony import */ var _components_Devices_devices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Devices/devices */ "./public/app/components/Devices/devices.js");
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/index.css */ "./public/css/index.css");
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_index_css__WEBPACK_IMPORTED_MODULE_4__);






function processScenarios(data) {
  const scenariosContainer = document.getElementById('scenarios');
  if (!scenariosContainer || !data.length) {
    return;
  }
  const popup = new _components_Scenarios_scenarios__WEBPACK_IMPORTED_MODULE_2__["default"](scenariosContainer, 9);
  popup.render(data);

  Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["handelScroll"])('slide-left', 'slide-right', 'scenarios', 215);
  Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["proccessArrows"])('slide-left', 'slide-right', 'scenarios');

  const container = document.getElementById('scenarios');
  container.addEventListener('scroll', () => {
    setTimeout(() => {
      Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["proccessArrows"])('slide-left', 'slide-right', 'scenarios');
    }, 250);
  });

  window.addEventListener('resize', () => {
    setTimeout(() => {
      Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["proccessArrows"])('slide-left', 'slide-right', 'scenarios');
    }, 250);
  });
}

function processDevices(data) {
  const devicesContainer = document.getElementById('devices');
  if (!devicesContainer || !data.length) {
    return;
  }
  const popup = new _components_Devices_devices__WEBPACK_IMPORTED_MODULE_3__["default"](devicesContainer);
  popup.render(data);

  Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["handelScroll"])('scroll-left', 'scroll-right', 'devices', 600); // сделать ширину страниицы вычисляемой
  Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["proccessArrows"])('scroll-left', 'scroll-right', 'devices');

  const container = document.getElementById('devices');
  container.addEventListener('scroll', () => {
    setTimeout(() => {
      Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["proccessArrows"])('scroll-left', 'scroll-right', 'devices');
    }, 250);
  });

  window.addEventListener('resize', () => {
    setTimeout(() => {
      Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["proccessArrows"])('scroll-left', 'scroll-right', 'devices');
    }, 250);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  Object(_api__WEBPACK_IMPORTED_MODULE_0__["getScenarios"])().then((data) => {
    processScenarios(data);
  });
  Object(_api__WEBPACK_IMPORTED_MODULE_0__["getDevices"])().then((data) => {
    processDevices(data);
  });
});


/***/ }),

/***/ "./public/css/index.css":
/*!******************************!*\
  !*** ./public/css/index.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
    if(false) { var cssReload; }
  

/***/ })

/******/ });
//# sourceMappingURL=index.js.map