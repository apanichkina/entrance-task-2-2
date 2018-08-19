export function getDevices() {
  return fetch('/api/devices')
    .then(response => response.json());
}

export function getScenarios() {
  return fetch('/api/scenarios')
    .then(response => response.json());
}
