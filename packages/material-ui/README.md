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

## API

### `<MuiVega>`

- **`variant`** (required): Material Vega has a limited set of themes targeted for specific types of visualizations. One of the Theme Types from `@material-vega/core` must be provided as the variant. ([See list](https://github.com/redwerks/material-vega/tree/master/packages/core#theme-type))
- **`color`** (default=`primary`, enum={`primary`, `secondary`, `error`, `warning`}): Default color for single value charts. This color will come from the MUI theme and can be switched between different parts of the palette.
- **`background`** (default=`transparent`, enum={`transparent`, `paper`, `default`}): Default color for the chart background. `paper` and `default` will take the respective color from `palette.background` in the MUI theme.
- **`themeOptions`**: Override options passed to @material-vega/core's createTheme options. ([See options](https://github.com/redwerks/material-vega/tree/master/packages/core#options))
- **`TooltipComponent`**: Override the built-in MuiVegaTooltipComponent with a different Tooltip component.
- Additional props are passed on to react-vega. See their documentation on what [props the `<Vega>` component accepts](https://www.npmjs.com/package/react-vega#api).

### `<MuiVegaLite>`

`<MuiVegaLite>` is a simple wrapper with the same options as `<MuiVega>` but takes Vega Lite visualizations instead of Vega visualizations.

## Theme / Options

Material Vega options will be automatically set based on properties from the Material UI theme. These primarily ensure your charts follow the MUI theme you create but there are also a few custom theme props that can be used to change chart options globally.

- **`font`:** `theme.typography.fontFamily`
- **`labelPadding`:** `theme.spacing(1)`
- **`textColor`:** `theme.palette.text.primary`
- **`secondaryTextColor`:** `theme.palette.text.secondary`
- **`dividerColor`:** `theme.palette.divider`
- **`color`:** `theme.palette[color].main` based on the `color` prop
- **`background`:** `theme.palette.background[background]` based on the `background` prop
- **`barCornerRadius`:** `theme.shape.barCornerRadius`

## Tooltip

`@material-vega/material-ui` includes a built-in Material UI based Tooltip component that replaces the default Vega Tooltip. `TooltipComponent` can be used to override the tooltip with a different React component. Or react-vega's `tooltip` prop can be used to override the tooltip with a non-React tooltip handler.
