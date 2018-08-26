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

/***/ "./public/app/circle.js":
/*!******************************!*\
  !*** ./public/app/circle.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return processCircle; });
const circleDegrees = 360;
const halfCircleDegrees = circleDegrees / 2;

function CircularSlider(options) {
  let mouseDown = false;

  const insideradius = options.radius - options.strokewidth / 2;
  const circumference = 2 * Math.PI * (insideradius);

  const bottomMaskDegrees = circleDegrees * options.bottommaskpercent / 100;
  console.log(bottomMaskDegrees);
  const leftBorder = halfCircleDegrees - bottomMaskDegrees / 2;
  const rightBorder = halfCircleDegrees + bottomMaskDegrees / 2;

  const sliderContainer = options.container.getElementsByClassName('sliderContainer')[0];

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('class', 'progress');
  svg.setAttribute('width', options.radius * 2);
  svg.setAttribute('height', options.radius * 2);
  svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  svg.setAttribute(
    'viewBox',
    `0 0 ${options.radius * 2} ${options.radius * 2}`,
  );

  const progressMeter = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'circle',
  );
  progressMeter.setAttribute('class', 'progress__meter');
  progressMeter.setAttribute('cx', options.radius);
  progressMeter.setAttribute('cy', options.radius);
  progressMeter.setAttribute('r', insideradius);
  progressMeter.setAttribute('stroke-width', options.strokewidth);

  const bottomMask = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'circle',
  );
  bottomMask.setAttribute('class', 'bottom__mask');
  bottomMask.setAttribute('cx', options.radius);
  bottomMask.setAttribute('cy', options.radius);
  bottomMask.setAttribute('r', insideradius);
  bottomMask.setAttribute('stroke-width', options.strokewidth);
  bottomMask.setAttribute('stroke-dasharray', `${circumference * (1 - options.bottommaskpercent / 100)} ${circumference}`);
  bottomMask.setAttribute('stroke-dashoffset', circumference);
  bottomMask.style.transform = `rotate(${(halfCircleDegrees + bottomMaskDegrees) / 2}deg)`;

  const progressValue = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'circle',
  );
  progressValue.setAttribute('class', 'progress__value');
  progressValue.setAttribute('cx', options.radius);
  progressValue.setAttribute('cy', options.radius);
  progressValue.setAttribute('r', insideradius);
  progressValue.setAttribute('stroke-width', options.strokewidth);
  progressValue.style.stroke = options.color;
  progressValue.style.transform = `rotate(${(halfCircleDegrees + bottomMaskDegrees) / 2}deg)`;

  const dial = document.createElement('div');
  dial.setAttribute('class', 'dial');

  // var bottomMask = document.createElement('div');
  // dial.setAttribute('class', 'bottom__mask');

  // var input = document.createElement("input");
  // input.setAttribute("type", "range");
  // input.setAttribute("id", "control");
  // input.setAttribute("name", "points");
  // input.setAttribute("min", options.range[0]);
  // input.setAttribute("max", options.range[1]);
  // input.setAttribute("step", options.step);
  // input.setAttribute("value", "0");
  // input.addEventListener("input", function(event) {
  //   this.progress(event.target.valueAsNumber);
  // });

  const progressMask = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'circle',
  );
  progressMask.setAttribute('class', 'progress__mask progress__meter');
  progressMask.setAttribute('cx', options.radius);
  progressMask.setAttribute('cy', options.radius);
  progressMask.setAttribute('r', insideradius);
  progressMask.setAttribute('stroke-width', options.strokewidth + 0.5); // to remove borders
  // progressMask.setAttribute('stroke-miterlimit', 50);
  progressMask.setAttribute('stroke-dasharray', '4,1');
  progressMask.setAttribute('stroke-dashoffset', '30%');
  // var pricing = document.createElement("span");
  // pricing.setAttribute('class', 'pricing');
  // pricing.textContent = "$" + options.range[0];
  //
  // var box = document.createElement("span");
  // box.setAttribute('class', 'box');
  // box.setAttribute("style", "background-color: " + options.color);
  //
  // var text = document.createElement("span");
  // text.setAttribute('class', 'text');
  // text.textContent = options.text;
  //
  // var div = document.createElement("div");
  // div.setAttribute('class', 'textContainer');

  svg.appendChild(progressMeter);
  svg.appendChild(progressValue);
  svg.appendChild(progressMask);
  svg.appendChild(bottomMask);

  sliderContainer.appendChild(svg);
  sliderContainer.appendChild(dial);
  // sliderContainer.appendChild(input);

  // div.appendChild(pricing);
  // div.appendChild(box);
  // div.appendChild(text);
  // document.querySelector('.price').appendChild(div);


  this.handleInput = () => {
    sliderContainer.addEventListener('mouseup', (e) => {
      e.path[1].style.zIndex = '0';
      mouseDown = false;
    });
    sliderContainer.addEventListener('touchend', (e) => {
      e.path[1].style.zIndex = '0';
      mouseDown = false;
    });
    sliderContainer.addEventListener('mousedown', (e) => {
      e.path[1].style.zIndex = '123';
      mouseDown = true;
    });
    sliderContainer.addEventListener('touchstart', (e) => {
      e.path[1].style.zIndex = '123';
      mouseDown = true;
    });
    progressMeter.addEventListener('click', this.update);
    progressValue.addEventListener('click', this.update);
    progressMask.addEventListener('click', this.update);
    document.addEventListener('mousemove', this.update);
    document.addEventListener('touchmove', this.update, { passive: false });
  };

  this.update = (e) => {
    if (e.type !== 'click') {
      if (!mouseDown || options.range[1] === 0) return;
      this.move(e);
    } else {
      this.move(e);
    }
  };

  this.move = (e) => {
    e.path[1].style.zIndex = '123';

    // console.log('Event: ' + e.type);
    let position;
    if (e.type === 'mouseup' || e.type === 'mousedown' || e.type === 'mousemove' || e.type === 'click') {
      position = { x: e.pageX, y: e.pageY };
    } else if (e.type === 'touchend' || e.type === 'touchstart' || e.type === 'touchmove') {
      e.preventDefault();
      position = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }

    const coords = {
      x: position.x - sliderContainer.getBoundingClientRect().left,
      y: position.y - sliderContainer.getBoundingClientRect().top,
    };
    const atan = Math.atan2(coords.x - options.radius, coords.y - options.radius);
    const deg = Math.ceil(-atan / (Math.PI / halfCircleDegrees) + halfCircleDegrees);

    // console.log(deg);
    if (deg < leftBorder + 1 || deg > rightBorder - 1) {
      const x = `${(options.radius - 27) * Math.sin(deg * Math.PI / halfCircleDegrees) + options.radius}px`;
      const y = `${(options.radius - 27) * -Math.cos(deg * Math.PI / halfCircleDegrees) + options.radius}px`;

      dial.style.transform = `translate(${x},${y}) rotate(${deg}deg)`;

      // pricing.textContent = "$" + points;
      this.progressDegrees(deg);
    }
  };
  //
  // this.progress = (value) => {
  //   // console.log('Value: ' + value);
  //   var progress = value / options.range[1];
  //   var dashoffset = CIRCUMFERENCE * (1 - progress);
  //   // console.log('dashoffset: ' + dashoffset);
  //   progressValue.style.strokeDashoffset = dashoffset;
  // };

  this.progressDegrees = (deg) => {
    // console.log('Value: ' + value);

    deg = (deg + (circleDegrees - rightBorder)) % circleDegrees;

    const progress = (deg) / circleDegrees;
    const dashoffset = circumference * (1 - progress);
    // console.log('dashoffset: ' + dashoffset);
    progressValue.style.strokeDashoffset = dashoffset;

    const points = Math.ceil((deg) * options.range[1] / (circleDegrees - rightBorder + leftBorder));
    console.log('points: ', points);
  };

  progressValue.style.strokeDasharray = circumference;
  // this.progress(input.value);

  const xx = `${(options.radius - 27) * Math.sin(Math.PI / halfCircleDegrees) + options.radius}px`;
  const yy = `${(options.radius - 27) * -Math.cos(Math.PI / halfCircleDegrees) + options.radius}px`;
  dial.style.transform = `translate(${xx},${yy}) rotate(1deg)`;
}


function processCircle() {
  // const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  // svg.setAttribute('class', 'progress');
  // svg.setAttribute('width', 500);
  // svg.setAttribute('height', 500);
  // svg.setAttribute('viewBox', `0 0 ${500} ${500}`);
  // svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  const container = document.getElementById('container');
  const slider = new CircularSlider({
    container,
    color: '#FF7D36',
    range: [0, 1567],
    step: 1,
    radius: 111,
    text: 'Entertainment',
    strokewidth: 22,
    bottommaskpercent: 20,
  });
  slider.handleInput();

  // document.querySelector('.sliderContainer').appendChild(svg);
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
/* harmony import */ var _Slider_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Slider/slider */ "./public/app/components/Slider/slider.js");
/* harmony import */ var _RadioGroup_radioGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../RadioGroup/radioGroup */ "./public/app/components/RadioGroup/radioGroup.js");
/* harmony import */ var _circle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../circle */ "./public/app/circle.js");





const path = '../../images_transparent/';

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
  title: `${el.name} ${el.group.toString()}`,
  subtitle: getSubtitle(el.type, el.status),
  group: el.group,
  type: el.type,
});

const createPopupActions = (popupRoot, type) => {
  const actions = new Map();
  actions.set('Вручную', '');
  switch (type) {
    case 'Degree':
      actions.set('Тепло', 25);
      actions.set('Холодно', 12);
      break;
    case 'Light':
      actions.set('Дневной свет', 60);
      actions.set('Закат', 0);
      break;
    default:
      break;
  }
  const popupActions = popupRoot.getElementsByClassName('popup__actions')[0];
  const radioGroup = new _RadioGroup_radioGroup__WEBPACK_IMPORTED_MODULE_2__["default"](popupActions);

  radioGroup.render({
    fields: actions,
    name: 'actions',
    onClick: (el) => {
      if (el.target.value) {
        popupRoot.querySelectorAll('input.slider')[0].value = el.target.value;
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
      console.log(data)
      popup.render({
        title: data.title,
        subtitle: data.subtitle,
        onConfirm: () => console.log('confirm device'),
        onCancel: () => console.log('onCancel device'),
      });

      if (['Degree', 'Light'].includes(data.type)) {
        const popupRoot = popup.getElement();
        const popupController = popupRoot.getElementsByClassName('popup__controller')[0];
        const slider = new _Slider_slider__WEBPACK_IMPORTED_MODULE_1__["default"](popupController);
        let sliderData = {};
        if (data.type === 'Degree') {
          sliderData = {
            min: -10,
            max: 30,
            className: 'slider__degree',
          };
        } else {
          sliderData = {
            iconMin: '../../images_transparent/icon_sun_min.svg',
            iconMax: '../../images_transparent/icon_sun_max.svg',
          };
        }
        slider.render({
          onInput: e => console.log(e.target.value),
          ...sliderData,
        });
        createPopupActions(popupRoot, data.type);
      } else {
        Object(_circle__WEBPACK_IMPORTED_MODULE_3__["default"])();
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
	},i18n=__fest_self && typeof __fest_self.i18n === "function" ? __fest_self.i18n : function (str) {return str;},___fest_log_error;if(typeof __fest_error === "undefined"){___fest_log_error = (typeof console !== "undefined" && console.error) ? function(){return Function.prototype.apply.call(console.error, console, arguments)} : function(){};}else{___fest_log_error=__fest_error};function __fest_log_error(msg){___fest_log_error(msg+"\nin block \""+__fest_debug_block+"\" at line: "+__fest_debug_line+"\nfile: "+__fest_debug_file)}function __fest_call(fn, params,cp){if(cp)for(var i in params)if(typeof params[i]=="function"&&params[i].param)params[i]=params[i]();return fn.call(__fest_self,params)}var params=__fest_context;(function(__fest_context){__fest_blocks.card=function(params){var __fest_buf="";try{__fest_attrs[0]=__fest_escapeHTML(params.group)}catch(e){__fest_attrs[0]=""; __fest_log_error(e.message);}__fest_buf+=("<div class=\"card\" name=\"" + __fest_attrs[0] + "\"><div class=\"card__content-top\">");try{__fest_attrs[0]=__fest_escapeHTML(params.img)}catch(e){__fest_attrs[0]=""; __fest_log_error(e.message);}__fest_buf+=("<img class=\"card__icon\" src=\"" + __fest_attrs[0] + "\"/></div><div class=\"card__content-bottom\"><div class=\"text__bold\">");try{__fest_buf+=(__fest_escapeHTML(params.title))}catch(e){__fest_log_error(e.message + "7");}__fest_buf+=("</div>");try{__fest_if=params.subtitle}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<div class=\"text__xs text__secondary\">");try{__fest_buf+=(__fest_escapeHTML(params.subtitle))}catch(e){__fest_log_error(e.message + "9");}__fest_buf+=("</div>");}__fest_buf+=("</div></div>");return __fest_buf;};})(__fest_context);var i,card,__fest_to0,__fest_iterator0;try{__fest_iterator0=params || [];__fest_to0=__fest_iterator0.length;}catch(e){__fest_iterator0=[];__fest_to0=0;__fest_log_error(e.message);}for(i=0;i<__fest_to0;i++){card=__fest_iterator0[i];__fest_select="card";__fest_params={};try{__fest_params=card}catch(e){__fest_log_error(e.message)}__fest_chunks.push(__fest_buf,{name:__fest_select,params:__fest_params,cp:false});__fest_buf="";}__fest_buf+=("<div class=\"space__horizontal\"> </div>");__fest_to=__fest_chunks.length;if (__fest_to) {__fest_iterator = 0;for (;__fest_iterator<__fest_to;__fest_iterator++) {__fest_chunk=__fest_chunks[__fest_iterator];if (typeof __fest_chunk==="string") {__fest_html+=__fest_chunk;} else {__fest_fn=__fest_blocks[__fest_chunk.name];if (__fest_fn) __fest_html+=__fest_call(__fest_fn,__fest_chunk.params,__fest_chunk.cp);}}return __fest_html+__fest_buf;} else {return __fest_buf;}});

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
	},i18n=__fest_self && typeof __fest_self.i18n === "function" ? __fest_self.i18n : function (str) {return str;},___fest_log_error;if(typeof __fest_error === "undefined"){___fest_log_error = (typeof console !== "undefined" && console.error) ? function(){return Function.prototype.apply.call(console.error, console, arguments)} : function(){};}else{___fest_log_error=__fest_error};function __fest_log_error(msg){___fest_log_error(msg+"\nin block \""+__fest_debug_block+"\" at line: "+__fest_debug_line+"\nfile: "+__fest_debug_file)}function __fest_call(fn, params,cp){if(cp)for(var i in params)if(typeof params[i]=="function"&&params[i].param)params[i]=params[i]();return fn.call(__fest_self,params)}var params=__fest_context;__fest_buf+=("<div class=\"popup\"><div class=\"popup__content\"><div class=\"popup__head\"><div class=\"popup__title text__l text__bold\">");try{__fest_buf+=(__fest_escapeHTML(params.title))}catch(e){__fest_log_error(e.message + "5");}__fest_buf+=("</div><div class=\"popup__subtitle text__xs\">");try{__fest_buf+=(__fest_escapeHTML(params.subtitle))}catch(e){__fest_log_error(e.message + "8");}__fest_buf+=("</div><div class=\"popup__actions\"></div></div><div class=\"popup__controller\"><div id=\"container\"><div class=\"sliderContainer\"></div></div></div></div>");try{__fest_if=params.confirm && params.cancel}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<div class=\"popup__button__container\"><button class=\"button button_confirm button_accent text__bold text__l\">");try{__fest_buf+=(__fest_escapeHTML(params.confirm))}catch(e){__fest_log_error(e.message + "21");}__fest_buf+=("</button><div class=\"button_space\"></div><button class=\"button button_cancel text__bold text__l\">");try{__fest_buf+=(__fest_escapeHTML(params.cancel))}catch(e){__fest_log_error(e.message + "25");}__fest_buf+=("</button></div>");}__fest_buf+=("</div>");__fest_to=__fest_chunks.length;if (__fest_to) {__fest_iterator = 0;for (;__fest_iterator<__fest_to;__fest_iterator++) {__fest_chunk=__fest_chunks[__fest_iterator];if (typeof __fest_chunk==="string") {__fest_html+=__fest_chunk;} else {__fest_fn=__fest_blocks[__fest_chunk.name];if (__fest_fn) __fest_html+=__fest_call(__fest_fn,__fest_chunk.params,__fest_chunk.cp);}}return __fest_html+__fest_buf;} else {return __fest_buf;}});

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
    } = params;
    const templateData = [];
    let index = 0;

    fields.forEach((value, key) => {
      templateData.push({
        name,
        value,
        id: [name, index += 1].join('_'),
        label: key,
        onClick,
      });
    });

    this.root.innerHTML = this.fest(templateData);

    if (onClick) {
      document.getElementsByName(name).forEach((el, ind) => {
        if (!ind) {
          el.checked = true;
        }
        el.addEventListener('click', onClick);
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
	},i18n=__fest_self && typeof __fest_self.i18n === "function" ? __fest_self.i18n : function (str) {return str;},___fest_log_error;if(typeof __fest_error === "undefined"){___fest_log_error = (typeof console !== "undefined" && console.error) ? function(){return Function.prototype.apply.call(console.error, console, arguments)} : function(){};}else{___fest_log_error=__fest_error};function __fest_log_error(msg){___fest_log_error(msg+"\nin block \""+__fest_debug_block+"\" at line: "+__fest_debug_line+"\nfile: "+__fest_debug_file)}function __fest_call(fn, params,cp){if(cp)for(var i in params)if(typeof params[i]=="function"&&params[i].param)params[i]=params[i]();return fn.call(__fest_self,params)}var params=__fest_context;(function(__fest_context){var params=__fest_context;__fest_blocks.radio=function(params){var __fest_buf="";try{__fest_attrs[0]=__fest_escapeHTML(params.id)}catch(e){__fest_attrs[0]=""; __fest_log_error(e.message);}try{__fest_attrs[1]=__fest_escapeHTML(params.name)}catch(e){__fest_attrs[1]=""; __fest_log_error(e.message);}try{__fest_attrs[2]=__fest_escapeHTML(params.value)}catch(e){__fest_attrs[2]=""; __fest_log_error(e.message);}try{__fest_attrs[3]=__fest_escapeHTML(params.onClick)}catch(e){__fest_attrs[3]=""; __fest_log_error(e.message);}__fest_buf+=("<input type=\"radio\" id=\"" + __fest_attrs[0] + "\" name=\"" + __fest_attrs[1] + "\" value=\"" + __fest_attrs[2] + "\" onClick=\"" + __fest_attrs[3] + "\"/>");try{__fest_attrs[0]=__fest_escapeHTML(params.id)}catch(e){__fest_attrs[0]=""; __fest_log_error(e.message);}__fest_buf+=("<label for=\"" + __fest_attrs[0] + "\" class=\"text__s text__bold\">");try{__fest_buf+=(__fest_escapeHTML(params.label))}catch(e){__fest_log_error(e.message + "3");}__fest_buf+=("</label>");return __fest_buf;};})(__fest_context);__fest_blocks.radioGroup=function(params){var __fest_buf="";var i,btn,__fest_to0,__fest_iterator0;try{__fest_iterator0=params || [];__fest_to0=__fest_iterator0.length;}catch(e){__fest_iterator0=[];__fest_to0=0;__fest_log_error(e.message);}for(i=0;i<__fest_to0;i++){btn=__fest_iterator0[i];__fest_select="radio";__fest_params={};try{__fest_params=btn}catch(e){__fest_log_error(e.message)}__fest_fn=__fest_blocks[__fest_select];if (__fest_fn)__fest_buf+=__fest_call(__fest_fn,__fest_params,false);}return __fest_buf;};__fest_select="radioGroup";__fest_params={};try{__fest_params=params}catch(e){__fest_log_error(e.message)}__fest_chunks.push(__fest_buf,{name:__fest_select,params:__fest_params,cp:false});__fest_buf="";__fest_to=__fest_chunks.length;if (__fest_to) {__fest_iterator = 0;for (;__fest_iterator<__fest_to;__fest_iterator++) {__fest_chunk=__fest_chunks[__fest_iterator];if (typeof __fest_chunk==="string") {__fest_html+=__fest_chunk;} else {__fest_fn=__fest_blocks[__fest_chunk.name];if (__fest_fn) __fest_html+=__fest_call(__fest_fn,__fest_chunk.params,__fest_chunk.cp);}}return __fest_html+__fest_buf;} else {return __fest_buf;}});

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


const path = '../../images_transparent/';

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
	},i18n=__fest_self && typeof __fest_self.i18n === "function" ? __fest_self.i18n : function (str) {return str;},___fest_log_error;if(typeof __fest_error === "undefined"){___fest_log_error = (typeof console !== "undefined" && console.error) ? function(){return Function.prototype.apply.call(console.error, console, arguments)} : function(){};}else{___fest_log_error=__fest_error};function __fest_log_error(msg){___fest_log_error(msg+"\nin block \""+__fest_debug_block+"\" at line: "+__fest_debug_line+"\nfile: "+__fest_debug_file)}function __fest_call(fn, params,cp){if(cp)for(var i in params)if(typeof params[i]=="function"&&params[i].param)params[i]=params[i]();return fn.call(__fest_self,params)}var params=__fest_context;(function(__fest_context){__fest_blocks.card=function(params){var __fest_buf="";try{__fest_attrs[0]=__fest_escapeHTML(params.group)}catch(e){__fest_attrs[0]=""; __fest_log_error(e.message);}__fest_buf+=("<div class=\"card\" name=\"" + __fest_attrs[0] + "\"><div class=\"card__content-top\">");try{__fest_attrs[0]=__fest_escapeHTML(params.img)}catch(e){__fest_attrs[0]=""; __fest_log_error(e.message);}__fest_buf+=("<img class=\"card__icon\" src=\"" + __fest_attrs[0] + "\"/></div><div class=\"card__content-bottom\"><div class=\"text__bold\">");try{__fest_buf+=(__fest_escapeHTML(params.title))}catch(e){__fest_log_error(e.message + "7");}__fest_buf+=("</div>");try{__fest_if=params.subtitle}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<div class=\"text__xs text__secondary\">");try{__fest_buf+=(__fest_escapeHTML(params.subtitle))}catch(e){__fest_log_error(e.message + "9");}__fest_buf+=("</div>");}__fest_buf+=("</div></div>");return __fest_buf;};})(__fest_context);var i,page,__fest_to0,__fest_iterator0;try{__fest_iterator0=params || [];__fest_to0=__fest_iterator0.length;}catch(e){__fest_iterator0=[];__fest_to0=0;__fest_log_error(e.message);}for(i=0;i<__fest_to0;i++){page=__fest_iterator0[i];__fest_buf+=("<div class=\"group\">");var j,card,__fest_to1,__fest_iterator1;try{__fest_iterator1=page || [];__fest_to1=__fest_iterator1.length;}catch(e){__fest_iterator1=[];__fest_to1=0;__fest_log_error(e.message);}for(j=0;j<__fest_to1;j++){card=__fest_iterator1[j];__fest_select="card";__fest_params={};try{__fest_params=card}catch(e){__fest_log_error(e.message)}__fest_chunks.push(__fest_buf,{name:__fest_select,params:__fest_params,cp:false});__fest_buf="";}__fest_buf+=("</div>");}__fest_buf+=("<div class=\"space__horizontal\"> </div>");__fest_to=__fest_chunks.length;if (__fest_to) {__fest_iterator = 0;for (;__fest_iterator<__fest_to;__fest_iterator++) {__fest_chunk=__fest_chunks[__fest_iterator];if (typeof __fest_chunk==="string") {__fest_html+=__fest_chunk;} else {__fest_fn=__fest_blocks[__fest_chunk.name];if (__fest_fn) __fest_html+=__fest_call(__fest_fn,__fest_chunk.params,__fest_chunk.cp);}}return __fest_html+__fest_buf;} else {return __fest_buf;}});

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