import { getScenarios, getDevices } from './api';
import { handelScroll, proccessArrows } from './helpers';
import ScenariosBlock from './components/Scenarios/scenarios';
import DevicesBlock from './components/Devices/devices'; // TODO
import RadioGroup from './components/RadioGroup/radioGroup';
import Popup from './components/Popup/popup';
import Slider from './components/Slider/slider';
import '../css/index.css';

function processScenarios(data) {
  const scenariosContainer = document.getElementById('scenarios');
  if (!scenariosContainer || !data.length) {
    return;
  }
  const popup = new ScenariosBlock(scenariosContainer, 9);
  popup.render(data);

  handelScroll('slide-left', 'slide-right', 'scenarios', 215);
  proccessArrows('slide-left', 'slide-right', 'scenarios');

  const container = document.getElementById('scenarios');
  container.addEventListener('scroll', () => {
    setTimeout(() => {
      proccessArrows('slide-left', 'slide-right', 'scenarios');
    }, 250);
  });

  window.addEventListener('resize', () => {
    setTimeout(() => {
      proccessArrows('slide-left', 'slide-right', 'scenarios');
    }, 250);
  });
}

function processDevices(data) {
  const devicesContainer = document.getElementById('devices');
  if (!devicesContainer || !data.length) {
    return;
  }

  const popup = new DevicesBlock(devicesContainer);// TODO
  // const popup = new ScenariosBlock(devicesContainer);
  popup.render(data);

  const checkDevicesArrows = () => proccessArrows('scroll-left', 'scroll-right', 'devices');
  handelScroll('scroll-left', 'scroll-right', 'devices', 600); // сделать ширину страниицы вычисляемой
  checkDevicesArrows();

  const container = document.getElementById('devices');
  container.addEventListener('scroll', () => {
    setTimeout(() => {
      checkDevicesArrows();
    }, 250);
  });

  window.addEventListener('resize', () => {
    setTimeout(() => {
      checkDevicesArrows();
    }, 250);
  });


  // получаем все фильтры (можно заменить на отдельный конец api)
  const filter = new Map();
  filter.set('Все', '');
  data.forEach((el) => {
    el.group.forEach((gr) => {
      filter.set(gr, gr);
    });
  });

  const radioGroupContainer = document.getElementById('radio-toolbar');
  const radioGroup = new RadioGroup(radioGroupContainer);
  const onClickCallback = (evt) => {
    if (evt && evt.target) {
      popup.filter(evt.target.value);
      checkDevicesArrows();
    }
  };

  radioGroup.render({
    fields: filter,
    name: 'devices',
    emptyValueName: 'Все',
    onClick: onClickCallback,
  });
}

document.addEventListener('DOMContentLoaded', () => {
  getScenarios().then((data) => {
    processScenarios(data);
  });
  getDevices().then((data) => {
    processDevices(data);
  });
  const root = document.getElementsByClassName('root')[0];

  const popupContainer = document.createElement('div');
  popupContainer.classList.add('popup__substrate');
  popupContainer.classList.add('popup_show');
  document.body.insertBefore(popupContainer, root);
  const popup = new Popup(popupContainer);
  const actions = new Map();
  actions.set('Вручную', '');
  actions.set('Тепло', 60);
  actions.set('Холодно', 0);
  popup.render({
    confirm: 'Применить',
    cancel: 'Закрыть',
    title: 'Xiaomi Yeelight LED Smart Bulb',
    subtitle: 'Включится в 17:00',
    actions,
  });

  const popupTarget = document.getElementsByClassName('logo')[0];
  popupTarget.addEventListener('click', () => {
    popupContainer.classList.add('popup_show');
  });

  const popupContent = document.getElementsByClassName('popup__controller')[0];
  const slider = new Slider(popupContent);
  slider.render({
    onInput: e => console.log(e.target.value),
    // iconMin: '../../images_transparent/icon_sun_min.svg',
    // iconMax: '../../images_transparent/icon_sun_max.svg',
  });
});
