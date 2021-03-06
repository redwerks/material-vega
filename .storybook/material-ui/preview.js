import { addParameters, addDecorator } from '@storybook/react';
import { withContexts } from '@storybook/addon-contexts/react';
import { withChart } from '@material-vega/storybook-addon-chart-panels';
import { withOriginalPreview } from '@material-vega/storybook-addon-preview-original';
import { contexts } from './contexts';
import { overrideColorSchemes } from '../../packages/material-ui/src';

import './preview.css';

overrideColorSchemes();

addDecorator(withContexts(contexts));
addDecorator(withChart);
addDecorator(withOriginalPreview);

addParameters({
  options: {
    showRoots: true
  }
});
