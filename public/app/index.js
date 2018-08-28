import { getScenarios, getDevices } from './api';
import { processScrollableSection } from './helpers';
import DevicesBlock from './components/Devices/devices';
import Popup from './components/Popup/popup';
import ScenariosBlock from './components/Scenarios/scenarios';
import '../css/index.css';

document.addEventListener('DOMContentLoaded', () => {
  getScenarios().then((data) => {
    const sectionData = {
      pageSize: 9,
      items: data,
    };
    processScrollableSection(
      sectionData,
      params => (new ScenariosBlock(params)),
      215,
      'scenarios',
    );
  });

  const root = document.getElementsByClassName('root')[0];
  const popupContainer = document.createElement('div');
  popupContainer.classList.add('popup__substrate');
  const popup = new Popup(popupContainer);
  document.body.insertBefore(popupContainer, root);

  getDevices().then((data) => {
    const allDevicesData = {
      popup,
      items: data,
    };

    processScrollableSection(
      allDevicesData,
      params => (new DevicesBlock(params)),
      600,
      'devices',
      true,
    );

    const mainDevicesData = {
      popup,
      items: data.filter(el => el.isMain),
    };

    processScrollableSection(
      mainDevicesData,
      params => (new DevicesBlock(params)),
      600,
      'mainDevices',
      false,
      true,
    );
  });
});
