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

export function scrollTo(element, change = 0, duration = 1000) {
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

export function proccessArrows(leftId, rightId, containerId) {
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

export function handelScroll(leftId, rightId, containerId, delta) {
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
