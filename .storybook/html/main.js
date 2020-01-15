const path = require('path');

module.exports = {
  stories: ['../../packages/core/src/**/*.story.{js,jsx,ts,tsx}'],
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
        include: [path.resolve(__dirname, '../../packages/core')]
      }
    }
  ]
};
