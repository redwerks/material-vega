import { addParameters, addDecorator } from '@storybook/html';
import { withChart } from '@material-vega/storybook-addon-chart-panels';

addDecorator(withChart);

addParameters({
  options: {
    showRoots: true
  }
});
