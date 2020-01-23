import { addons } from '@storybook/addons';
import createTheme from '../common/theme';
import pkg from '../../packages/core/package.json';

addons.setConfig({
  theme: createTheme(pkg)
});
