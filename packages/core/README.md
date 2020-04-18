# `@material-vega/core`

Material Design themes for [Vega Lite](https://vega.github.io/vega-lite/) and [Vega](https://vega.github.io/vega/).

Helps create Vega charts that look like Material Design's [data visualizations](https://material.io/design/communication/data-visualization.html#principles).

## Install

Using npm:

```shell
npm install vega vega-lite vega-embed @material-vega/core
```

Using yarn:

```shell
yarn add vega vega-lite vega-embed @material-vega/core
```

## Usage

### Usage with [Vega-Embed](https://www.npmjs.com/package/vega-embed)

```js
import vegaEmbed from 'vega-embed';
import { createTheme } from '@material-vega/core';

vegaEmbed(container, spec, {
  renderer: 'svg',
  config: createTheme(
    {
      // options
    },
    'verticalBarChart'
  )
});
```

### Usage with React-Vega

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { VegaLite } from 'react-vega';
import { createTheme } from '@material-vega/core';

const config = createTheme(
  {
    // options
  },
  'verticalBarChart'
);

ReactDOM.render(
  <VegaLite spec={spec} renderer="svg" config={config} />,
  document.getElementById('container')
);
```

### Usage with Material UI

Projects using Material UI should use the [@material-vega/material-ui](https://github.com/redwerks/material-vega/tree/master/packages/material-ui) package which integrates React-Vega and @material-vega/core with a wrapper that integrates with Material UI's theme.

## API

```js
createTheme(options, themeType);
```

### Options

Material Vega's settings can be customized, most of these are just Material Design constants which allow for overriding by another Material Design library.

- `font` (default=`'"Roboto", "Helvetica", "Arial", sans-serif'`): Font family to use for text
- `labelPadding` (default=`8`): Spacing between labels and the chart
- `barCornerRadius` (default=`2`): Corner radius to use for bars
- `textColor` (default=`'rgba(0, 0, 0, 0.87)'`): Primary text color
- `secondaryTextColor` (default=`'rgba(0, 0, 0, 0.54)'`): Secondary text color
- `dividerColor` (default=`'rgba(0, 0, 0, 0.12)'`): Divider color
- `color` (default=`undefined`): Default color for single marks
- `background` (default=`'transparent'`): Background color for charts
- `thickDomainLineWidth` (default=`2`): Bottom domain line thickness

### Theme Type

Material Vega has a limited set of themes targeted for specific types of visualizations. A `themeType` matching the type of Vega visualization you are rendering must be specified.

- `verticalBarChart`: Standard Vertical Bar Charts
- `focusedVerticalBarChart`: Vertical Bar Charts without axis labels and lines
- `horizontalBarChart`: Horizontal Bar Charts
- `lineChart`: Line Charts
- `areaChart`: Area Charts
- `areaLineChart`: Area Charts with a line and translucent area
- `pieChart`: Pie Charts (experimental)
- `donutChart`: Donut Charts (experimental)
- `scatterplotChart`: Scaterplot / Point Charts
