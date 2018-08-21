/**
 *  @module components/DevicesBlock
 */

import template from './devices.tmpl.xml';

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
});

/**
 * Popup class to show pop-up block in case of win
 */
class DevicesBlock {
  /**
   * Create a block
   */
  constructor(root) {
    this.root = root;
    this.fest = template;
  }

  filter(type) {
    if (!this.params) {
      return this;
    }

    const data = this.type === type
      ? this.params
      : this.params.filter(el => el.group.includes(type));

    this.root.innerHTML = this.fest(data);
    this.type = type;

    return this;
  }

  /**
   * Render block
   * @param {object} params - description of the fields needed by the fest.
   * @return {DevicesBlock} current class instance.
   */
  render(params) {
    if (!this.root) {
      return this;
    }

    this.params = params.map(mapper);
    this.root.innerHTML = this.fest(this.params);

    return this;
  }
}

export default DevicesBlock;
