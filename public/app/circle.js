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


export default function processCircle() {
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
