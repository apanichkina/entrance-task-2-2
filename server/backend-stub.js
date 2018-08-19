const { generateDevices, generateScenarios } = require('./data-generatior');

const devices = generateDevices(20);
const scenarios = generateScenarios(20);

exports.initBackendStub = function (app) {
  app.get('/api/devices', (req, res) => {
    res.json(devices);
  });

  app.get('/api/scenarios', (req, res) => {
    res.json(scenarios);
  });
};
