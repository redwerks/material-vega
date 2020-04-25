---
id: getting-started
title: Getting Started
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Basic Usage

<Tabs groupId="material-vega/" defaultValue="material-ui" values={[
{label: 'HTML (Vega-Embed)', value: 'vega-embed' },
{label: 'React-Vega', value: 'react-vega' },
{label: 'Material UI', value: 'material-ui' }
]}>
<TabItem value='vega-embed'>

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

</TabItem>
<TabItem value='react-vega'>

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

</TabItem>
<TabItem value='material-ui'>

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { MuiVegaLite } from '@material-vega/material-ui';

ReactDOM.render(
  <MuiVegaLite spec={spec} variant="verticalBarChart" />,
  document.getElementById('container')
);
```

</TabItem>
</Tabs>
