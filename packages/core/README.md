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
