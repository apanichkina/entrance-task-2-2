import { getScenarios, getDevices } from './api';
import { handelScroll, proccessArrows } from './helpers';
import ScenariosBlock from './components/Scenarios/scenarios';
import DevicesBlock from './components/Devices/devices'; // TODO
import RadioGroup from './components/RadioGroup/radioGroup';
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

  //
  // Клипаем кнопки, навешиваем обработчики
  // filter.forEach((filterName) => {
  //   const button = document.createElement('input');
  //   button.textContent = filterName;
  //   button.setAttribute('class', 'filter');
  //   button.addEventListener('click', (evt) => {
  //     popup.filter(filterName);
  //   });
  //   const container = document.getElementById('radio-toolbar');
  //   container.appendChild(button);
  // });

  handelScroll('scroll-left', 'scroll-right', 'devices', 600); // сделать ширину страниицы вычисляемой
  proccessArrows('scroll-left', 'scroll-right', 'devices');

  const container = document.getElementById('devices');
  container.addEventListener('scroll', () => {
    setTimeout(() => {
      proccessArrows('scroll-left', 'scroll-right', 'devices');
    }, 250);
  });

  window.addEventListener('resize', () => {
    setTimeout(() => {
      proccessArrows('scroll-left', 'scroll-right', 'devices');
    }, 250);
  });


  // получаем все фильтры (можно заменить на отдельный конец api)
  const filter = new Set();
  filter.add('Все');
  data.forEach((el) => {
    el.group.forEach((gr) => {
      filter.add(gr);
    });
  });

  const radioGroupContainer = document.getElementById('radio-toolbar');
  const radioGroup = new RadioGroup(radioGroupContainer);
  const onClickCallback = (evt) => {
    if (evt && evt.target) {
      popup.filter(evt.target.value);
      proccessArrows('scroll-left', 'scroll-right', 'devices');
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
});
