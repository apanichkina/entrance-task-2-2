import RadioGroup from './components/RadioGroup/radioGroup';

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

export function processArrows(section) {
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

export function handelScroll(section, delta) {
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

export function processScrollableSection(
  data, constructorFn, scrollRange, sectionId, hasFilter = false, vertical = false,
) {
  const section = document.getElementById(sectionId);
  const checkArrows = () => processArrows(section);
  const containerClass = vertical ? 'scrolling-wrapper__vertical' : 'scrolling-wrapper';
  const container = section.getElementsByClassName(containerClass)[0];
  if (!container || !data) {
    return;
  }

  const block = constructorFn(container);

  if (hasFilter) {
    // получаем все фильтры (можно заменить на отдельный конец api)
    const filter = new Map();
    const emptyValue = 'Все';

    filter.set(emptyValue, emptyValue);
    data.items.forEach((el) => {
      el.group.forEach((gr) => {
        el.group.push(emptyValue);
        filter.set(gr, gr);
      });
    });

    const radioGroupContainer = section.getElementsByClassName('radio-toolbar')[0];
    const radioGroup = new RadioGroup(radioGroupContainer);
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
      onClick: onClickCallback,
    });
  }

  block.render({
    ...data,
  });

  if (!vertical) {
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
  }
}
