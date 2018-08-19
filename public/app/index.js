import { getScenarios, getDevices } from './api';
import { handelScroll, proccessArrows } from './helpers';
import ScenariosBlock from './components/Scenarios/scenarios';
import DevicesBlock from './components/Devices/devices';
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
  const popup = new DevicesBlock(devicesContainer);
  popup.render(data);

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
}

document.addEventListener('DOMContentLoaded', () => {
  getScenarios().then((data) => {
    processScenarios(data);
  });
  getDevices().then((data) => {
    processDevices(data);
  });
});
