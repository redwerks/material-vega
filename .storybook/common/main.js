const path = require('path');

function createMain(subpackage) {
  return {
    stories: [`../../packages/${subpackage}/src/**/*.story.{js,jsx,ts,tsx}`],
    addons: [
      {
        name: '@storybook/preset-typescript',
        options: {
          tsLoaderOptions: {
            configFile: path.resolve(__dirname, '../../tsconfig.json')
          },
          tsDocgenLoaderOptions: {
            tsconfigPath: path.resolve(__dirname, '../../tsconfig.json')
          },
          include: [path.resolve(__dirname, '../../packages')]
        }
      },
      '@material-vega/storybook-addon-chart-panels',
      '@material-vega/storybook-addon-preview-original'
    ]
  };
}

module.exports = createMain;
