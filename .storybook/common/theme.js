import { create } from '@storybook/theming';

function createTheme(pkg) {
  return create({
    base: 'light',
    brandTitle: pkg.name,
    brandUrl: pkg.homepage,
    brandImage: require('./horizontal-logo.png')
  });
}

export default createTheme;
