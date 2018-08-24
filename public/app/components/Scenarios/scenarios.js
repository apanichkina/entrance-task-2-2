import template from './scenarios.tmpl.xml';

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
    this.fest = template;
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

export default ScenariosBlock;
