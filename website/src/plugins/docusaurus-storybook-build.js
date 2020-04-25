/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const { spawn } = require('child_process');

const rootYarnRun = (cmd, args, { cwd }) =>
  new Promise((resolve, reject) => {
    spawn('yarn', ['run', cmd, ...args], {
      cwd,
      stdio: 'inherit'
    }).on('exit', code => {
      if (code === 0) resolve();
      else reject();
    });
  });

module.exports = function docusaurusStorybookBuild(context, options) {
  const { cwd } = options;
  return {
    name: 'docusaurus-storybook-build',
    async postBuild({ baseUrl, outDir }) {
      await rootYarnRun(
        'build-storybook-core',
        ['-o', path.join(outDir, 'storybook', 'core')],
        { cwd }
      );
      await rootYarnRun(
        'build-storybook-material-ui',
        ['-o', path.join(outDir, 'storybook', 'material-ui')],
        { cwd }
      );
    }
  };
};
