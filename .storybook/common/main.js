const path = require('path');

function createMain(subpackage, opts = {}) {
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
      ...opts.addons
    ],
    webpackFinal: config => ({
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          // Alias local package to the src/ directories so TypeScript compilation is not necessary
          '@material-vega/core': '@material-vega/core/src',
          '@material-vega/material-ui': '@material-vega/material-ui/src'
        }
      }
    })
  };
}

module.exports = createMain;
