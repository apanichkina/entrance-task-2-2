import template from './devices.tmpl.xml';
import Slider from '../Slider/slider';
import CircleSlider from '../CircleSlider/circleSlider';
import RadioGroup from '../RadioGroup/radioGroup';

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
  const radioGroup = new RadioGroup(popupActions);

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
    this.fest = template;
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
        const slider = new Slider(popupController);
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
        const sliderCircle = new CircleSlider(popupController, {
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

export default DevicesBlock;
