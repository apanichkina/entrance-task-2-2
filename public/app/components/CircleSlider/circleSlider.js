import template from './circleSlider.tmpl.xml';

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
    this.fest = template;

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

export default CircleSliderBlock;
