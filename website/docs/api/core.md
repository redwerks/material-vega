---
title: '@material-vega/core'
---

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
