import { addParameters } from '@storybook/react';
import { withChart } from '@material-vega/storybook-addon-chart-panels';

addDecorator(withChart);

addParameters({
  options: {
    showRoots: true
  }
});
