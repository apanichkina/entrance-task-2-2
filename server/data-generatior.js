const DEVICE_BRAND = [
  'Xiaomi',
  'Xiaomi Mi',
  'D-Link',
  'Philips',
  'Elgato',
  'LIFX',
];

const DEVICE_SERIES = [
  'X10i',
  'A60 E27',
  '180',
  '2S',
  '666',
];

const DEVICE_NAME_BY_TYPE = {
  Degree: ['Cooler', 'Eve Degree'],
  Light: ['Yeelight LED Smart Bulb', 'Zhirui', 'Mini Day & Dusk', 'LED Ceiling Lamp'],
  Climate: ['Warm Floor', 'Mi Air Purifier'],
  // Cam: ['Smart Socket Power Plug', 'MiJia 360°'],
  // Socket: ['Smart Socket Power Plug', 'Smart plug'],
  // Other: ['Speaker', 'Door/Window Open sensor', 'Smoke alarm'],
};

const DEVICE_LOCATION = [
  'Кухня',
  'Сад',
  // 'Комната',
  // 'Санузел',
];

const SCENARIO_NAME_BY_TYPE = {
  Degree: ['Набрать горячую ванну', 'Сделать пол тёплым во всей квартире'],
  Light: ['Выключить весь свет в доме и во дворе', 'Включить свет  в коридоре', 'Включить свет на кухне'],
  Climate: ['Сделать прохладно'],
  Cam: ['Выключить все камеры'],
  Socket: ['Включить все розетки'],
  Other: [
    'Я ухожу',
    'В отпуск',
    'Ложимся спать',
    'Доброе утро',
    'Включить музыку',
    'Уложить ребенка',
    'Запустить уборку',
  ],
};

function randomIndex(max = 5) {
  let rand = Math.random() * (max + 1);
  rand = Math.floor(rand);

  return rand;
}

function getRandomElement(arr = []) {
  return arr[randomIndex(arr.length - 1)];
}

function formatTimeWithZero(i) {
  return i < 10 ? `0${i}` : i;
}

function getFutureTime(deltaH = 2, deltaM = 10) {
  const future = new Date();
  future.setHours(future.getHours() + deltaH);
  future.setMinutes(future.getMinutes() + deltaM);
  const hours = future.getHours();
  const minutes = future.getMinutes();
  const oClock = `${formatTimeWithZero(hours)}:${formatTimeWithZero(minutes)}`;

  return oClock;
}

function generateStatusData() {
  const random = Math.random();
  const futureTime = getFutureTime(random * 10, random * 20);
  const startTime = random > 0.5 ? futureTime : '';
  const endTime = !startTime && random > 0.4 ? futureTime : '';

  return {
    basicActive: Math.random() > 0.2,
    isActive: Math.random() > 0.3,
    startTime,
    endTime,
  };
}

function getDataFromMap(map) {
  const keys = Object.keys(map);
  const key = getRandomElement(keys);
  const values = map[key];
  const value = getRandomElement(values);

  return {
    key,
    value,
  };
}

function generateDeviceDetails() {
  const { key: type, value: name } = getDataFromMap(DEVICE_NAME_BY_TYPE);
  const group = [];

  switch (type) {
    case 'Degree':
      group.push('Погода');
      break;
    case 'Light':
      group.push('Свет');
      break;
    case 'Climate':
      group.push('Пол');
      break;
    default:
      break;
  }

  if (Math.random() > 0.03) {
    group.push(getRandomElement(DEVICE_LOCATION));
  }

  return {
    name: [getRandomElement(DEVICE_BRAND), name, getRandomElement(DEVICE_SERIES)].join(' '),
    type,
    group,
    isMain: Math.random() > 0.8,
  };
}

exports.generateDevices = function (count = 50) {
  const data = [];

  for (let i = 0; i < count; i++) {
    data.push({
      id: i,
      status: generateStatusData(),
      ...generateDeviceDetails(),
    });
  }

  return data;
};

function generateScenarioDetails() {
  const { key: type, value: name } = getDataFromMap(SCENARIO_NAME_BY_TYPE);

  return {
    name,
    type,
  };
}

exports.generateScenarios = function (count = 50) {
  const data = [];

  for (let i = 0; i < count; i++) {
    data.push({
      id: i,
      status: generateStatusData(),
      ...generateScenarioDetails(),
    });
  }

  return data;
};
