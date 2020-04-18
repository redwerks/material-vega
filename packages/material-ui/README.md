# `@material-vega/material-ui`

Render [Vega Lite](https://vega.github.io/vega-lite/) and [Vega](https://vega.github.io/vega/) charts with Material Design themes in [Material UI](https://material-ui.com/) projects.

- Wraps [React-Vega](https://www.npmjs.com/package/react-vega) and [@material-vega/core](https://github.com/redwerks/material-vega/tree/master/packages/core) with a Material UI integration
- Includes a Material UI based Vega Tooltip implementation

Helps create Vega charts that look like Material Design's [data visualizations](https://material.io/design/communication/data-visualization.html#principles).

## Install

Using npm:

```shell
npm install react vega vega-lite react-vega @material-ui/core @material-vega/core @material-vega/material-ui
```

Using yarn:

```shell
yarn add react vega vega-lite react-vega @material-ui/core @material-vega/core @material-vega/material-ui
```

## Usage

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { MuiVegaLite } from '@material-vega/material-ui';

ReactDOM.render(
  <MuiVegaLite spec={spec} variant="verticalBarChart" config={config} />,
  document.getElementById('container')
);
```
