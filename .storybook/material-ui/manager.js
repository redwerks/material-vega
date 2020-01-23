import '../common/theme.css';
import { addons } from '@storybook/addons';
import createTheme from '../common/theme';
import pkg from '../../packages/material-ui/package.json';

addons.setConfig({
  theme: createTheme(pkg)
});
