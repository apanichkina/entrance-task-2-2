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

/***/ "./public/app/components/CircleSlider/circleSlider.js":
/*!************************************************************!*\
  !*** ./public/app/components/CircleSlider/circleSlider.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _circleSlider_tmpl_xml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./circleSlider.tmpl.xml */ "./public/app/components/CircleSlider/circleSlider.tmpl.xml");


const CIRCLE_DEGREES = 360;
const CIRCLE_DEGREES_HALF = CIRCLE_DEGREES / 2;
const NS = 'http://www.w3.org/2000/svg';
const createSVG = (options, type = 'circle') => {
  if (typeof options !== 'object') {
    return null;
  }
  const circle = document.createElementNS(NS, type);
  Object.keys(options).forEach((key) => {
    circle.setAttribute(key, String(options[key]));
  });

  return circle;
};
const getTranslateX = (radius, deg = 1) => `${(radius - 27) * Math.sin(deg * Math.PI / CIRCLE_DEGREES_HALF) + radius}px`;

const getTranslateY = (radius, deg = 1) => `${(radius - 27) * -Math.cos(deg * Math.PI / CIRCLE_DEGREES_HALF) + radius}px`;

class CircleSliderBlock {
  constructor(root, options) {
    this.root = root;
    this.fest = _circleSlider_tmpl_xml__WEBPACK_IMPORTED_MODULE_0__["default"];

    this.mouseDown = false;
    this.options = options;
    this.options.rangeValue = options.range[1] - options.range[0];
    this.options.bottomMaskDegrees = CIRCLE_DEGREES * options.bottomMaskPercent / 100;
    this.options.insideRadius = options.radius - options.strokeWidth / 2;
    this.options.circumference = 2 * Math.PI * this.options.insideRadius;
    this.options.leftBorder = CIRCLE_DEGREES_HALF - this.options.bottomMaskDegrees / 2;
    this.options.rightBorder = CIRCLE_DEGREES_HALF + this.options.bottomMaskDegrees / 2;
  }

  create() {
    const {
      radius,
      bottomMaskDegrees,
      bottomMaskPercent,
      strokeWidth,
      color,
      insideRadius,
      circumference,
    } = this.options;
    this.sliderContainer = this.root.getElementsByClassName('circle-slider__container')[0];
    this.vatueText = this.root.getElementsByClassName('display__text')[0];

    const containerSize = String(radius * 2);
    const svg = createSVG({
      class: 'progress',
      width: containerSize,
      height: containerSize,
      xmlns: NS,
      viewBox: `0 0 ${containerSize} ${containerSize}`,
    }, 'svg');

    this.progressMeter = createSVG({
      class: 'progress__meter',
      cx: radius,
      cy: radius,
      r: insideRadius,
      'stroke-width': strokeWidth,
    });

    const strokeDasharray = `${circumference * (1 - bottomMaskPercent / 100)} ${circumference}`;
    const rotateSVGPart = `rotate(${(CIRCLE_DEGREES_HALF + bottomMaskDegrees) / 2}deg)`;
    this.bottomMask = createSVG({
      class: 'bottom__mask',
      cx: radius,
      cy: radius,
      r: insideRadius,
      'stroke-width': strokeWidth + 0.5, // чтобы не было обводки
      'stroke-dasharray': strokeDasharray,
      'stroke-dashoffset': circumference,
    });
    this.bottomMask.style.transform = rotateSVGPart;

    this.progressValue = createSVG({
      class: 'progress__value',
      cx: radius,
      cy: radius,
      r: insideRadius,
      'stroke-width': strokeWidth,
    });
    this.progressValue.style.stroke = color;
    this.progressValue.style.transform = rotateSVGPart;

    this.progressMask = createSVG({
      class: 'progress__mask progress__meter',
      cx: radius,
      cy: radius,
      r: insideRadius,
      'stroke-width': strokeWidth + 0.5, // чтобы не было обводки
      'stroke-dasharray': '4,1',
      'stroke-dashoffset': '30%',
    });

    this.dial = document.createElement('div');
    this.dial.setAttribute('class', 'dial');

    const displaySize = 2 * (radius - strokeWidth);
    const display = this.sliderContainer.getElementsByClassName('display')[0];
    display.style.top = `${strokeWidth}px`;
    display.style.left = `${strokeWidth}px`;
    display.style.height = `${displaySize}px`;
    display.style.width = `${displaySize}px`;

    svg.appendChild(this.progressMeter);
    svg.appendChild(this.progressValue);
    svg.appendChild(this.progressMask);
    svg.appendChild(this.bottomMask);
    this.sliderContainer.appendChild(svg);
    this.sliderContainer.appendChild(this.dial);
  }

  move(e) {
    const { radius, leftBorder, rightBorder } = this.options;
    let position;

    if (e.type === 'mouseup' || e.type === 'mousedown' || e.type === 'mousemove' || e.type === 'click') {
      position = { x: e.pageX, y: e.pageY };
    } else if (e.type === 'touchend' || e.type === 'touchstart' || e.type === 'touchmove') {
      e.preventDefault();
      position = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }

    const coords = {
      x: position.x - this.sliderContainer.getBoundingClientRect().left,
      y: position.y - this.sliderContainer.getBoundingClientRect().top,
    };

    const atan = Math.atan2(coords.x - radius, coords.y - radius);
    const deg = Math.ceil(-atan / (Math.PI / CIRCLE_DEGREES_HALF) + CIRCLE_DEGREES_HALF);

    let degEvaluate = deg;
    if (deg < leftBorder + 1 || deg > rightBorder - 1) {
      degEvaluate = deg;
    } else if ((leftBorder - deg) > (deg - rightBorder)) {
      degEvaluate = leftBorder;
    } else {
      degEvaluate = rightBorder;
    }

    this.dial.style.transform = `translate(${getTranslateX(radius, degEvaluate)},${getTranslateY(radius, degEvaluate)}) rotate(${degEvaluate}deg)`;
    this.progressDegrees(degEvaluate);
  }

  update(e) {
    if (e.type !== 'click' && (!this.mouseDown || this.options.range[1] === 0)) {
      return;
    }

    this.move(e);
  }

  progressDegrees(deg) {
    const {
      rangeValue, circumference, range, rightBorder, leftBorder,
    } = this.options;
    const degEvaluate = (deg + (CIRCLE_DEGREES - rightBorder)) % CIRCLE_DEGREES;
    const progress = degEvaluate / CIRCLE_DEGREES;
    const points = range[0]
      + Math.ceil((degEvaluate) * rangeValue / (CIRCLE_DEGREES - rightBorder + leftBorder));

    this.progressValue.style.strokeDashoffset = circumference * (1 - progress);
    this.vatueText.textContent = `${points > 0 ? '+' : ''}${points}`;
  }

  addListeners() {
    this.sliderContainer.addEventListener('mouseup', () => {
      this.mouseDown = false;
    });
    this.sliderContainer.addEventListener('touchend', () => {
      this.mouseDown = false;
    });
    this.sliderContainer.addEventListener('mousedown', () => {
      this.mouseDown = true;
    });
    this.sliderContainer.addEventListener('touchstart', () => {
      this.mouseDown = true;
    });
    this.progressMeter.addEventListener('click', this.update.bind(this));
    this.progressValue.addEventListener('click', this.update.bind(this));
    this.progressMask.addEventListener('click', this.update.bind(this));
    document.addEventListener('mousemove', this.update.bind(this));
    document.addEventListener('touchmove', this.update.bind(this), { passive: false });
  }

  render() {
    if (!this.root) {
      return this; // <---- внезапный выход
    }
    const { circumference, radius } = this.options;
    this.root.innerHTML = this.fest();
    this.create();
    this.addListeners();
    this.progressValue.style.strokeDasharray = circumference;
    this.progressDegrees(0);
    this.dial.style.transform = `translate(${getTranslateX(radius)},${getTranslateY(radius)}) rotate(1deg)`;

    return this;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (CircleSliderBlock);


/***/ }),

/***/ "./public/app/components/CircleSlider/circleSlider.tmpl.xml":
/*!******************************************************************!*\
  !*** ./public/app/components/CircleSlider/circleSlider.tmpl.xml ***!
  \******************************************************************/
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
	},i18n=__fest_self && typeof __fest_self.i18n === "function" ? __fest_self.i18n : function (str) {return str;},___fest_log_error;if(typeof __fest_error === "undefined"){___fest_log_error = (typeof console !== "undefined" && console.error) ? function(){return Function.prototype.apply.call(console.error, console, arguments)} : function(){};}else{___fest_log_error=__fest_error};function __fest_log_error(msg){___fest_log_error(msg+"\nin block \""+__fest_debug_block+"\" at line: "+__fest_debug_line+"\nfile: "+__fest_debug_file)}function __fest_call(fn, params,cp){if(cp)for(var i in params)if(typeof params[i]=="function"&&params[i].param)params[i]=params[i]();return fn.call(__fest_self,params)}__fest_buf+=("<div class=\"circle-slider__wrapper\"><div class=\"circle-slider__container\"><div class=\"display text__xxxl text__bold\"><span class=\"display__text\"></span></div></div></div>");__fest_to=__fest_chunks.length;if (__fest_to) {__fest_iterator = 0;for (;__fest_iterator<__fest_to;__fest_iterator++) {__fest_chunk=__fest_chunks[__fest_iterator];if (typeof __fest_chunk==="string") {__fest_html+=__fest_chunk;} else {__fest_fn=__fest_blocks[__fest_chunk.name];if (__fest_fn) __fest_html+=__fest_call(__fest_fn,__fest_chunk.params,__fest_chunk.cp);}}return __fest_html+__fest_buf;} else {return __fest_buf;}});

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
/* harmony import */ var _Slider_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Slider/slider */ "./public/app/components/Slider/slider.js");
/* harmony import */ var _CircleSlider_circleSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CircleSlider/circleSlider */ "./public/app/components/CircleSlider/circleSlider.js");
/* harmony import */ var _RadioGroup_radioGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../RadioGroup/radioGroup */ "./public/app/components/RadioGroup/radioGroup.js");





const path = '../../images/';

const getImg = (type, isActive) => {
  switch (type) {
    case 'Climate':
    case 'Degree':
      return `${path}icon_temperature${isActive ? '_2' : ''}.svg`;
    default:
      return `${path}icon_sun${isActive ? '_2' : ''}.svg`;
  }
};

const getSubtitle = (type, status) => {
  const {
    basicActive,
    isActive,
    startTime,
    endTime,
  } = status;

  if (!startTime && !endTime) {
    return isActive ? 'Включено' : 'Выключено';
  }

  if (startTime && endTime) {
    return '';
  }

  if (startTime) {
    return `${isActive ? 'Выключится' : 'Включится '} в ${startTime}`;
  }

  if (!isActive && basicActive && endTime) {
    return `Выключено до ${endTime}`;
  }

  return '';
};

const mapper = el => ({
  img: getImg(el.type, el.status.isActive),
  title: el.name,
  subtitle: getSubtitle(el.type, el.status),
  group: el.group,
  type: el.type,
});

const createPopupActions = (popupRoot, type) => {
  const actions = new Map();
  actions.set('Вручную', '');
  switch (type) {
    case 'Degree':
      actions.set('Тропики', 30);
      actions.set('Тепло', 25);
      actions.set('Холодно', 12);
      actions.set('Мороз', 0);
      break;
    case 'Light':
      actions.set('Дневной свет', 60);
      actions.set('Закат', 0);
      break;
    default:
      break;
  }
  const popupActions = popupRoot.getElementsByClassName('popup__actions')[0];
  popupActions.classList.remove('popup__actions_hide');
  const radioGroup = new _RadioGroup_radioGroup__WEBPACK_IMPORTED_MODULE_3__["default"](popupActions);

  radioGroup.render({
    hasSpaceStart: true,
    hasSpaceEnd: true,
    fields: actions,
    name: 'actions',
    onClick: (el) => {
      if (el.target.value) {
        popupRoot.querySelector('input.slider').value = el.target.value;
      }
    },
  });
}

class DevicesBlock {
  constructor(root) {
    this.root = root;
    this.fest = _devices_tmpl_xml__WEBPACK_IMPORTED_MODULE_0__["default"];
  }

  filter(type) {
    if (!this.params || this.type === type) {
      return this;
    }

    const cards = this.root.getElementsByClassName('card');

    for (let i = 0; i < cards.length; i++) {
      if (type && !cards[i].getAttribute('name').includes(type)) {
        cards[i].classList.add('card_hide');
      } else {
        cards[i].classList.remove('card_hide');
      }
    }

    this.type = type;

    return this;
  }

  render(params) {
    if (!this.root) {
      return this;
    }

    const { items, popup } = params;

    this.params = items.map(mapper);
    this.root.innerHTML = this.fest(this.params);

    this.initPopupContent(popup);

    return this;
  }

  initPopupContent(popup) {
    const renderPopup = (data) => {
      popup.render({
        title: data.title,
        subtitle: data.subtitle,
        onConfirm: () => console.log('confirm device'),
        onCancel: () => console.log('onCancel device'),
      });
      const popupRoot = popup.getElement();
      const popupController = popupRoot.getElementsByClassName('popup__controller')[0];

      if (['Degree', 'Light'].includes(data.type)) {
        const slider = new _Slider_slider__WEBPACK_IMPORTED_MODULE_1__["default"](popupController);
        let sliderData = {};
        if (data.type === 'Degree') {
          sliderData = {
            min: -10,
            max: 30,
            className: 'slider__degree',
          };
        } else if (data.type === 'Light') {
          sliderData = {
            iconMin: `${path}icon_sun_min.svg`,
            iconMax: `${path}icon_sun_max.svg`,
          };
        }
        slider.render({
          onInput: e => console.log(e.target.value),
          ...sliderData,
        });
        createPopupActions(popupRoot, data.type);
      } else {
        const sliderCircle = new _CircleSlider_circleSlider__WEBPACK_IMPORTED_MODULE_2__["default"](popupController, {
          color: 'rgb(241, 194, 124)',
          range: [-10, 30],
          radius: 111,
          strokeWidth: 22,
          bottomMaskPercent: 20,
        });
        sliderCircle.render();
      }

      popup.showPopup();
    };

    const cards = this.root.getElementsByClassName('card');
    for (let i = 0; i < cards.length; i++) {
      cards[i].addEventListener('click', () => renderPopup(this.params[i]));
    }
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
	},i18n=__fest_self && typeof __fest_self.i18n === "function" ? __fest_self.i18n : function (str) {return str;},___fest_log_error;if(typeof __fest_error === "undefined"){___fest_log_error = (typeof console !== "undefined" && console.error) ? function(){return Function.prototype.apply.call(console.error, console, arguments)} : function(){};}else{___fest_log_error=__fest_error};function __fest_log_error(msg){___fest_log_error(msg+"\nin block \""+__fest_debug_block+"\" at line: "+__fest_debug_line+"\nfile: "+__fest_debug_file)}function __fest_call(fn, params,cp){if(cp)for(var i in params)if(typeof params[i]=="function"&&params[i].param)params[i]=params[i]();return fn.call(__fest_self,params)}var params=__fest_context;(function(__fest_context){__fest_blocks.card=function(params){var __fest_buf="";try{__fest_attrs[0]=__fest_escapeHTML(params.group)}catch(e){__fest_attrs[0]=""; __fest_log_error(e.message);}__fest_buf+=("<div class=\"card\" name=\"" + __fest_attrs[0] + "\"><div class=\"card__content-top\">");try{__fest_attrs[0]=__fest_escapeHTML(params.img)}catch(e){__fest_attrs[0]=""; __fest_log_error(e.message);}__fest_buf+=("<img class=\"card__icon\" src=\"" + __fest_attrs[0] + "\"/></div><div class=\"card__content-bottom\"><div class=\"ellipsis text__bold\">");try{__fest_buf+=(__fest_escapeHTML(params.title))}catch(e){__fest_log_error(e.message + "7");}__fest_buf+=("</div>");try{__fest_if=params.subtitle}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<div class=\"text__xs text__secondary\">");try{__fest_buf+=(__fest_escapeHTML(params.subtitle))}catch(e){__fest_log_error(e.message + "9");}__fest_buf+=("</div>");}__fest_buf+=("</div></div>");return __fest_buf;};})(__fest_context);var i,card,__fest_to0,__fest_iterator0;try{__fest_iterator0=params || [];__fest_to0=__fest_iterator0.length;}catch(e){__fest_iterator0=[];__fest_to0=0;__fest_log_error(e.message);}for(i=0;i<__fest_to0;i++){card=__fest_iterator0[i];__fest_select="card";__fest_params={};try{__fest_params=card}catch(e){__fest_log_error(e.message)}__fest_chunks.push(__fest_buf,{name:__fest_select,params:__fest_params,cp:false});__fest_buf="";}__fest_buf+=("<div class=\"space__horizontal\"> </div>");__fest_to=__fest_chunks.length;if (__fest_to) {__fest_iterator = 0;for (;__fest_iterator<__fest_to;__fest_iterator++) {__fest_chunk=__fest_chunks[__fest_iterator];if (typeof __fest_chunk==="string") {__fest_html+=__fest_chunk;} else {__fest_fn=__fest_blocks[__fest_chunk.name];if (__fest_fn) __fest_html+=__fest_call(__fest_fn,__fest_chunk.params,__fest_chunk.cp);}}return __fest_html+__fest_buf;} else {return __fest_buf;}});

/***/ }),

/***/ "./public/app/components/Popup/popup.js":
/*!**********************************************!*\
  !*** ./public/app/components/Popup/popup.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _popup_tmpl_xml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup.tmpl.xml */ "./public/app/components/Popup/popup.tmpl.xml");


class Popup {
  constructor(root) {
    this.root = root;
    this.fest = _popup_tmpl_xml__WEBPACK_IMPORTED_MODULE_0__["default"];
    this.pageContainer = document.getElementsByClassName('root')[0];
  }

  render(params) {
    const {
      onConfirm,
      onCancel,
      ...rest
    } = params;

    this.params = {
      confirm: 'Применить',
      cancel: 'Закрыть',
      ...rest,
    };
    this.root.innerHTML = this.fest(this.params);
    this.handelButtons(onConfirm, onCancel);

    return this;
  }

  getElement() {
    return this.root;
  }

  handelButtons(onConfirm = () => null, onCancel = () => null) {
    const cancelButton = this.root.getElementsByClassName('button_cancel')[0];
    cancelButton.addEventListener('click', () => {
      onCancel();
      this.hidePopup();
    });
    const confirmButton = this.root.getElementsByClassName('button_confirm')[0];
    confirmButton.addEventListener('click', () => {
      onConfirm();
      this.hidePopup();
    });
  }

  showPopup() {
    this.root.classList.add('popup_show');
    this.pageContainer.classList.add('root_no-scroll');
  }

  hidePopup() {
    this.root.classList.remove('popup_show');
    this.pageContainer.classList.remove('root_no-scroll');

    return this;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Popup);


/***/ }),

/***/ "./public/app/components/Popup/popup.tmpl.xml":
/*!****************************************************!*\
  !*** ./public/app/components/Popup/popup.tmpl.xml ***!
  \****************************************************/
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
	},i18n=__fest_self && typeof __fest_self.i18n === "function" ? __fest_self.i18n : function (str) {return str;},___fest_log_error;if(typeof __fest_error === "undefined"){___fest_log_error = (typeof console !== "undefined" && console.error) ? function(){return Function.prototype.apply.call(console.error, console, arguments)} : function(){};}else{___fest_log_error=__fest_error};function __fest_log_error(msg){___fest_log_error(msg+"\nin block \""+__fest_debug_block+"\" at line: "+__fest_debug_line+"\nfile: "+__fest_debug_file)}function __fest_call(fn, params,cp){if(cp)for(var i in params)if(typeof params[i]=="function"&&params[i].param)params[i]=params[i]();return fn.call(__fest_self,params)}var params=__fest_context;__fest_buf+=("<div class=\"popup\"><div class=\"popup__content\"><div class=\"popup__head\"><div class=\"popup__title text__xl text__bold ellipsis\">");try{__fest_buf+=(__fest_escapeHTML(params.title))}catch(e){__fest_log_error(e.message + "5");}__fest_buf+=("</div><div class=\"popup__subtitle text__s ellipsis\">");try{__fest_buf+=(__fest_escapeHTML(params.subtitle))}catch(e){__fest_log_error(e.message + "8");}__fest_buf+=("</div><div class=\"popup__actions popup__actions_hide scrolling-wrapper\"></div></div><div class=\"popup__controller\"></div></div>");try{__fest_if=params.confirm && params.cancel}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<div class=\"popup__button__container\"><button class=\"button button_confirm button_accent text__bold text__l\">");try{__fest_buf+=(__fest_escapeHTML(params.confirm))}catch(e){__fest_log_error(e.message + "18");}__fest_buf+=("</button><div class=\"button_space\"></div><button class=\"button button_cancel text__bold text__l\">");try{__fest_buf+=(__fest_escapeHTML(params.cancel))}catch(e){__fest_log_error(e.message + "22");}__fest_buf+=("</button></div>");}__fest_buf+=("</div>");__fest_to=__fest_chunks.length;if (__fest_to) {__fest_iterator = 0;for (;__fest_iterator<__fest_to;__fest_iterator++) {__fest_chunk=__fest_chunks[__fest_iterator];if (typeof __fest_chunk==="string") {__fest_html+=__fest_chunk;} else {__fest_fn=__fest_blocks[__fest_chunk.name];if (__fest_fn) __fest_html+=__fest_call(__fest_fn,__fest_chunk.params,__fest_chunk.cp);}}return __fest_html+__fest_buf;} else {return __fest_buf;}});

/***/ }),

/***/ "./public/app/components/RadioGroup/radioGroup.js":
/*!********************************************************!*\
  !*** ./public/app/components/RadioGroup/radioGroup.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _radioGroup_tmpl_xml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./radioGroup.tmpl.xml */ "./public/app/components/RadioGroup/radioGroup.tmpl.xml");


class RadioGroupBlock {
  constructor(root) {
    this.root = root;
    this.fest = _radioGroup_tmpl_xml__WEBPACK_IMPORTED_MODULE_0__["default"];
  }

  render(params) {
    if (!this.root) {
      return this; // <---- внезапный выход
    }

    const {
      fields,
      name,
      onClick,
      hasSpaceStart = false,
      hasSpaceEnd = false,
      collapse = false,
    } = params;
    const templateData = {
      hasSpaceStart,
      hasSpaceEnd,
      collapse,
      items: [],
    };
    let index = 0;

    fields.forEach((value, key) => {
      templateData.items.push({
        name,
        value,
        id: [name, index += 1].join('_'),
        label: key,
        onClick,
      });
    });

    this.root.innerHTML = this.fest(templateData);

    if (onClick) {
      if (collapse) {
        this.select = this.root.querySelector('.select__container select');
        this.select.addEventListener('change', (evt) => {
          onClick(evt);

          const el = this.root.querySelector(`input[value=${evt.target.value}`);
          if (el) {
            el.checked = true;
          }
        });
      }

      document.getElementsByName(name).forEach((el, ind) => {
        if (!ind) {
          el.checked = true;
        }
        el.addEventListener('click', (evt) => {
          onClick(evt);

          if (this.select) {
            this.select.value = el.value;
          }
        });
      });
    }

    return this;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (RadioGroupBlock);


/***/ }),

/***/ "./public/app/components/RadioGroup/radioGroup.tmpl.xml":
/*!**************************************************************!*\
  !*** ./public/app/components/RadioGroup/radioGroup.tmpl.xml ***!
  \**************************************************************/
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
	},i18n=__fest_self && typeof __fest_self.i18n === "function" ? __fest_self.i18n : function (str) {return str;},___fest_log_error;if(typeof __fest_error === "undefined"){___fest_log_error = (typeof console !== "undefined" && console.error) ? function(){return Function.prototype.apply.call(console.error, console, arguments)} : function(){};}else{___fest_log_error=__fest_error};function __fest_log_error(msg){___fest_log_error(msg+"\nin block \""+__fest_debug_block+"\" at line: "+__fest_debug_line+"\nfile: "+__fest_debug_file)}function __fest_call(fn, params,cp){if(cp)for(var i in params)if(typeof params[i]=="function"&&params[i].param)params[i]=params[i]();return fn.call(__fest_self,params)}var params=__fest_context;(function(__fest_context){var params=__fest_context;__fest_blocks.radio=function(params){var __fest_buf="";try{__fest_attrs[0]=__fest_escapeHTML(params.id)}catch(e){__fest_attrs[0]=""; __fest_log_error(e.message);}try{__fest_attrs[1]=__fest_escapeHTML(params.name)}catch(e){__fest_attrs[1]=""; __fest_log_error(e.message);}try{__fest_attrs[2]=__fest_escapeHTML(params.value)}catch(e){__fest_attrs[2]=""; __fest_log_error(e.message);}try{__fest_attrs[3]=__fest_escapeHTML(params.onClick)}catch(e){__fest_attrs[3]=""; __fest_log_error(e.message);}__fest_buf+=("<input type=\"radio\" id=\"" + __fest_attrs[0] + "\" name=\"" + __fest_attrs[1] + "\" value=\"" + __fest_attrs[2] + "\" onClick=\"" + __fest_attrs[3] + "\"/>");try{__fest_attrs[0]=__fest_escapeHTML(params.id)}catch(e){__fest_attrs[0]=""; __fest_log_error(e.message);}__fest_buf+=("<label for=\"" + __fest_attrs[0] + "\" class=\"text__s text__bold\">");try{__fest_buf+=(__fest_escapeHTML(params.label))}catch(e){__fest_log_error(e.message + "3");}__fest_buf+=("</label>");return __fest_buf;};})(__fest_context);(function(__fest_context){var params=__fest_context;__fest_blocks.select=function(params){var __fest_buf="";__fest_buf+=("<div class=\"select__container\"><select class=\"text__s text__bold\">");var i,opt,__fest_to0,__fest_iterator0;try{__fest_iterator0=params.items || [];__fest_to0=__fest_iterator0.length;}catch(e){__fest_iterator0=[];__fest_to0=0;__fest_log_error(e.message);}for(i=0;i<__fest_to0;i++){opt=__fest_iterator0[i];try{__fest_attrs[0]=__fest_escapeHTML(opt.value)}catch(e){__fest_attrs[0]=""; __fest_log_error(e.message);}__fest_buf+=("<option value=\"" + __fest_attrs[0] + "\">");try{__fest_buf+=(__fest_escapeHTML(opt.label))}catch(e){__fest_log_error(e.message + "6");}__fest_buf+=("</option>");}__fest_buf+=("</select></div>");return __fest_buf;};})(__fest_context);__fest_blocks.radioGroup=function(params){var __fest_buf="";try{__fest_if=params.hasSpaceStart}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<div class=\"space__horizontal\"> </div>");}var i,btn,__fest_to0,__fest_iterator0;try{__fest_iterator0=params.items || [];__fest_to0=__fest_iterator0.length;}catch(e){__fest_iterator0=[];__fest_to0=0;__fest_log_error(e.message);}for(i=0;i<__fest_to0;i++){btn=__fest_iterator0[i];__fest_select="radio";__fest_params={};try{__fest_params=btn}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}try{__fest_if=params.hasSpaceEnd}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<div class=\"space__horizontal\"> </div>");}try{__fest_if=params.collapse}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_select="select";__fest_params={};try{__fest_params=params}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}return __fest_buf;};__fest_select="radioGroup";__fest_params={};try{__fest_params=params}catch(e){__fest_log_error(e.message)}__fest_chunks.push(__fest_buf,{name:__fest_select,params:__fest_params,cp:false});__fest_buf="";__fest_to=__fest_chunks.length;if (__fest_to) {__fest_iterator = 0;for (;__fest_iterator<__fest_to;__fest_iterator++) {__fest_chunk=__fest_chunks[__fest_iterator];if (typeof __fest_chunk==="string") {__fest_html+=__fest_chunk;} else {__fest_fn=__fest_blocks[__fest_chunk.name];if (__fest_fn) __fest_html+=__fest_call(__fest_fn,__fest_chunk.params,__fest_chunk.cp);}}return __fest_html+__fest_buf;} else {return __fest_buf;}});

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


const path = '../../images/';

const getImg = (type, isActive) => {
  switch (type) {
    case 'Climate':
    case 'Degree':
      return `${path}icon_temperature${isActive ? '_2' : ''}.svg`;
    case 'Other':
      return `${path}icon_scheduled.svg`;
    default:
      return `${path}icon_sun${isActive ? '_2' : ''}.svg`;
  }
};

const getSubtitle = (type, status) => {
  const {
    basicActive,
    isActive,
    startTime,
    endTime,
  } = status;

  if (!startTime && !endTime) {
    return isActive ? 'Включено' : 'Выключено';
  }

  if (startTime && endTime) {
    return '';
  }

  if (startTime) {
    return `${isActive ? 'Выключится' : 'Включится '} в ${startTime}`;
  }

  if (!isActive && basicActive && endTime) {
    return `Выключено до ${endTime}`;
  }

  return '';
};

const mapper = el => ({
  img: getImg(el.type, el.status.isActive),
  title: el.name,
  subtitle: getSubtitle(el.type, el.status),
});


class ScenariosBlock {
  constructor(root) {
    this.root = root;
    this.fest = _scenarios_tmpl_xml__WEBPACK_IMPORTED_MODULE_0__["default"];
  }

  reducer(accumulator, currentValue, currentIndex) {
    const index = Math.floor(currentIndex / this.pageSize);

    if (accumulator.length <= index) {
      accumulator[index] = [];
    }
    accumulator[index].push(currentValue);

    return accumulator;
  }

  render(params) {
    this.pageSize = params.pageSize;

    if (!this.root || !this.pageSize) {
      return this; // <---- внезапный выход
    }

    const pages = params.items.map(mapper).reduce(this.reducer.bind(this), []);
    this.root.innerHTML = this.fest(pages);

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
	},i18n=__fest_self && typeof __fest_self.i18n === "function" ? __fest_self.i18n : function (str) {return str;},___fest_log_error;if(typeof __fest_error === "undefined"){___fest_log_error = (typeof console !== "undefined" && console.error) ? function(){return Function.prototype.apply.call(console.error, console, arguments)} : function(){};}else{___fest_log_error=__fest_error};function __fest_log_error(msg){___fest_log_error(msg+"\nin block \""+__fest_debug_block+"\" at line: "+__fest_debug_line+"\nfile: "+__fest_debug_file)}function __fest_call(fn, params,cp){if(cp)for(var i in params)if(typeof params[i]=="function"&&params[i].param)params[i]=params[i]();return fn.call(__fest_self,params)}var params=__fest_context;(function(__fest_context){__fest_blocks.card=function(params){var __fest_buf="";try{__fest_attrs[0]=__fest_escapeHTML(params.group)}catch(e){__fest_attrs[0]=""; __fest_log_error(e.message);}__fest_buf+=("<div class=\"card\" name=\"" + __fest_attrs[0] + "\"><div class=\"card__content-top\">");try{__fest_attrs[0]=__fest_escapeHTML(params.img)}catch(e){__fest_attrs[0]=""; __fest_log_error(e.message);}__fest_buf+=("<img class=\"card__icon\" src=\"" + __fest_attrs[0] + "\"/></div><div class=\"card__content-bottom\"><div class=\"ellipsis text__bold\">");try{__fest_buf+=(__fest_escapeHTML(params.title))}catch(e){__fest_log_error(e.message + "7");}__fest_buf+=("</div>");try{__fest_if=params.subtitle}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<div class=\"text__xs text__secondary\">");try{__fest_buf+=(__fest_escapeHTML(params.subtitle))}catch(e){__fest_log_error(e.message + "9");}__fest_buf+=("</div>");}__fest_buf+=("</div></div>");return __fest_buf;};})(__fest_context);var i,page,__fest_to0,__fest_iterator0;try{__fest_iterator0=params || [];__fest_to0=__fest_iterator0.length;}catch(e){__fest_iterator0=[];__fest_to0=0;__fest_log_error(e.message);}for(i=0;i<__fest_to0;i++){page=__fest_iterator0[i];__fest_buf+=("<div class=\"group\">");var j,card,__fest_to1,__fest_iterator1;try{__fest_iterator1=page || [];__fest_to1=__fest_iterator1.length;}catch(e){__fest_iterator1=[];__fest_to1=0;__fest_log_error(e.message);}for(j=0;j<__fest_to1;j++){card=__fest_iterator1[j];__fest_select="card";__fest_params={};try{__fest_params=card}catch(e){__fest_log_error(e.message)}__fest_chunks.push(__fest_buf,{name:__fest_select,params:__fest_params,cp:false});__fest_buf="";}__fest_buf+=("</div>");}__fest_buf+=("<div class=\"space__horizontal\"> </div>");__fest_to=__fest_chunks.length;if (__fest_to) {__fest_iterator = 0;for (;__fest_iterator<__fest_to;__fest_iterator++) {__fest_chunk=__fest_chunks[__fest_iterator];if (typeof __fest_chunk==="string") {__fest_html+=__fest_chunk;} else {__fest_fn=__fest_blocks[__fest_chunk.name];if (__fest_fn) __fest_html+=__fest_call(__fest_fn,__fest_chunk.params,__fest_chunk.cp);}}return __fest_html+__fest_buf;} else {return __fest_buf;}});

/***/ }),

/***/ "./public/app/components/Slider/slider.js":
/*!************************************************!*\
  !*** ./public/app/components/Slider/slider.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _slider_tmpl_xml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider.tmpl.xml */ "./public/app/components/Slider/slider.tmpl.xml");


class SliderBlock {
  constructor(root) {
    this.root = root;
    this.fest = _slider_tmpl_xml__WEBPACK_IMPORTED_MODULE_0__["default"];
  }

  render(params) {
    if (!this.root) {
      return this; // <---- внезапный выход
    }

    const {
      name = 'slider',
      onInput,
      ...rest
    } = params;

    const templateData = {
      value: '10',
      min: '0',
      max: '100',
      name,
      ...rest,
    };

    this.root.innerHTML = this.fest(templateData);

    // add handlers
    if (onInput) {
      document.getElementsByName(name).forEach((el) => {
        el.addEventListener('input', onInput);
      });
    }

    return this;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (SliderBlock);


/***/ }),

/***/ "./public/app/components/Slider/slider.tmpl.xml":
/*!******************************************************!*\
  !*** ./public/app/components/Slider/slider.tmpl.xml ***!
  \******************************************************/
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
	},i18n=__fest_self && typeof __fest_self.i18n === "function" ? __fest_self.i18n : function (str) {return str;},___fest_log_error;if(typeof __fest_error === "undefined"){___fest_log_error = (typeof console !== "undefined" && console.error) ? function(){return Function.prototype.apply.call(console.error, console, arguments)} : function(){};}else{___fest_log_error=__fest_error};function __fest_log_error(msg){___fest_log_error(msg+"\nin block \""+__fest_debug_block+"\" at line: "+__fest_debug_line+"\nfile: "+__fest_debug_file)}function __fest_call(fn, params,cp){if(cp)for(var i in params)if(typeof params[i]=="function"&&params[i].param)params[i]=params[i]();return fn.call(__fest_self,params)}var params=__fest_context;__fest_blocks.slider=function(params){var __fest_buf="";__fest_buf+=("<div class=\"slide-container\" id=\"slider1\"><div class=\"slide-container__text_start text__l text__bold\">");try{__fest_if=params.iconMin}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_attrs[0]=__fest_escapeHTML(params.iconMin)}catch(e){__fest_attrs[0]=""; __fest_log_error(e.message);}__fest_buf+=("<img class=\"slider__icon\" src=\"" + __fest_attrs[0] + "\"/>");}try{__fest_if=!params.iconMin}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(__fest_escapeHTML(params.min))}catch(e){__fest_log_error(e.message + "8");}}__fest_buf+=("</div><div class=\"slide-container__text_end text__l text__bold\">");try{__fest_if=params.iconMax}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_attrs[0]=__fest_escapeHTML(params.iconMax)}catch(e){__fest_attrs[0]=""; __fest_log_error(e.message);}__fest_buf+=("<img class=\"slider__icon\" src=\"" + __fest_attrs[0] + "\"/>");}try{__fest_if=!params.iconMax}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){try{__fest_buf+=(__fest_escapeHTML(params.max))}catch(e){__fest_log_error(e.message + "16");}}__fest_buf+=("</div>");try{__fest_attrs[0]=__fest_escapeHTML(params.min)}catch(e){__fest_attrs[0]=""; __fest_log_error(e.message);}try{__fest_attrs[1]=__fest_escapeHTML(params.max)}catch(e){__fest_attrs[1]=""; __fest_log_error(e.message);}try{__fest_attrs[2]=__fest_escapeHTML(params.value)}catch(e){__fest_attrs[2]=""; __fest_log_error(e.message);}try{__fest_attrs[3]=__fest_escapeHTML(params.className)}catch(e){__fest_attrs[3]=""; __fest_log_error(e.message);}try{__fest_attrs[4]=__fest_escapeHTML(params.name)}catch(e){__fest_attrs[4]=""; __fest_log_error(e.message);}__fest_buf+=("<input type=\"range\" min=\"" + __fest_attrs[0] + "\" max=\"" + __fest_attrs[1] + "\" value=\"" + __fest_attrs[2] + "\" class=\"slider " + __fest_attrs[3] + "\" name=\"" + __fest_attrs[4] + "\"/></div>");return __fest_buf;};__fest_select="slider";__fest_params={};try{__fest_params=params}catch(e){__fest_log_error(e.message)}__fest_chunks.push(__fest_buf,{name:__fest_select,params:__fest_params,cp:false});__fest_buf="";__fest_to=__fest_chunks.length;if (__fest_to) {__fest_iterator = 0;for (;__fest_iterator<__fest_to;__fest_iterator++) {__fest_chunk=__fest_chunks[__fest_iterator];if (typeof __fest_chunk==="string") {__fest_html+=__fest_chunk;} else {__fest_fn=__fest_blocks[__fest_chunk.name];if (__fest_fn) __fest_html+=__fest_call(__fest_fn,__fest_chunk.params,__fest_chunk.cp);}}return __fest_html+__fest_buf;} else {return __fest_buf;}});

/***/ }),

/***/ "./public/app/helpers.js":
/*!*******************************!*\
  !*** ./public/app/helpers.js ***!
  \*******************************/
/*! exports provided: scrollTo, processArrows, handelScroll, processScrollableSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollTo", function() { return scrollTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processArrows", function() { return processArrows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handelScroll", function() { return handelScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processScrollableSection", function() { return processScrollableSection; });
/* harmony import */ var _components_RadioGroup_radioGroup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/RadioGroup/radioGroup */ "./public/app/components/RadioGroup/radioGroup.js");


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

function processArrows(section) {
  const left = section.getElementsByClassName('arrow-left')[0];
  const right = section.getElementsByClassName('arrow-right')[0];
  const container = section.getElementsByClassName('scrolling-wrapper')[0];

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

function handelScroll(section, delta) {
  const left = section.getElementsByClassName('arrow-left')[0];
  const right = section.getElementsByClassName('arrow-right')[0];
  const container = section.getElementsByClassName('scrolling-wrapper')[0];
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

function processScrollableSection(
  data, constructorFn, scrollRange, sectionId, hasFilter = false,
) {
  const section = document.getElementById(sectionId);
  const checkArrows = () => processArrows(section);
  const container = section.getElementsByClassName('scrolling-wrapper')[0];
  if (!container || !data) {
    return;
  }

  const block = constructorFn(container);
  block.render({
    ...data,
  });

  handelScroll(section, scrollRange);
  checkArrows();

  container.addEventListener('scroll', () => {
    setTimeout(() => {
      checkArrows();
    }, 250);
  });

  window.addEventListener('resize', () => {
    setTimeout(() => {
      checkArrows();
    }, 250);
  });

  if (hasFilter) {
    // получаем все фильтры (можно заменить на отдельный конец api)
    const filter = new Map();
    filter.set('Все', '');
    data.items.forEach((el) => {
      el.group.forEach((gr) => {
        filter.set(gr, gr);
      });
    });

    const radioGroupContainer = section.getElementsByClassName('radio-toolbar')[0];
    const radioGroup = new _components_RadioGroup_radioGroup__WEBPACK_IMPORTED_MODULE_0__["default"](radioGroupContainer);
    const onClickCallback = (evt) => {
      if (evt && evt.target) {
        block.filter(evt.target.value);
        checkArrows();
      }
    };

    radioGroup.render({
      collapse: true,
      fields: filter,
      name: sectionId,
      emptyValueName: 'Все',
      onClick: onClickCallback,
    });
  }
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
/* harmony import */ var _components_Devices_devices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Devices/devices */ "./public/app/components/Devices/devices.js");
/* harmony import */ var _components_Popup_popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Popup/popup */ "./public/app/components/Popup/popup.js");
/* harmony import */ var _components_Scenarios_scenarios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Scenarios/scenarios */ "./public/app/components/Scenarios/scenarios.js");
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css/index.css */ "./public/css/index.css");
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_index_css__WEBPACK_IMPORTED_MODULE_5__);


 // TODO




document.addEventListener('DOMContentLoaded', () => {
  Object(_api__WEBPACK_IMPORTED_MODULE_0__["getScenarios"])().then((data) => {
    const sectionData = {
      pageSize: 9,
      items: data,
    };
    Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["processScrollableSection"])(
      sectionData,
      params => (new _components_Scenarios_scenarios__WEBPACK_IMPORTED_MODULE_4__["default"](params)),
      215,
      'scenarios',
    );
  });

  const root = document.getElementsByClassName('root')[0];
  const popupContainer = document.createElement('div');
  popupContainer.classList.add('popup__substrate');
  const popup = new _components_Popup_popup__WEBPACK_IMPORTED_MODULE_3__["default"](popupContainer);
  document.body.insertBefore(popupContainer, root);

  Object(_api__WEBPACK_IMPORTED_MODULE_0__["getDevices"])().then((data) => {
    const sectionData = {
      popup,
      items: data,
    };

    Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["processScrollableSection"])(
      sectionData,
      params => (new _components_Devices_devices__WEBPACK_IMPORTED_MODULE_2__["default"](params)),
      600,
      'devices',
      true,
    );
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