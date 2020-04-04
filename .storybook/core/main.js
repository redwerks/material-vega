const createMain = require('../common/main');

module.exports = createMain('core', {
  addons: [
    '@material-vega/storybook-addon-chart-panels',
    '@material-vega/storybook-addon-preview-original'
  ]
});
