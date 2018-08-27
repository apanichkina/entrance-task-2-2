const { generateDevices, generateScenarios } = require('./data-generatior');

const devices = generateDevices(15);
const scenarios = generateScenarios(15);

exports.initBackendStub = function (app) {
  app.get('/api/devices', (req, res) => {
    res.json(devices);
  });

  app.get('/api/scenarios', (req, res) => {
    res.json(scenarios);
  });
};
