import { addParameters, addDecorator } from '@storybook/html';
import { withChart } from '@material-vega/storybook-addon-chart-panels';
import { withOriginalPreview } from '@material-vega/storybook-addon-preview-original';

addDecorator(withChart);
addDecorator(withOriginalPreview);

addParameters({
  options: {
    showRoots: true
  }
});
