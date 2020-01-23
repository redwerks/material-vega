import { create } from '@storybook/theming';

function createTheme(pkg) {
  return create({
    base: 'light',
    brandTitle: pkg.name,
    brandUrl: pkg.homepage
  });
}

export default createTheme;
