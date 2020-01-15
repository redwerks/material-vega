import { Config } from 'vega-embed';

export const config: Config = {
  bar: {},
  mark: {},
  axis: {
    domainOpacity: 0.3,
    // Hide all small tick marks
    ticks: false,
    gridOpacity: 0.6, // @fixme text color
    labelOpacity: 0.6, // @fixme text color
    // Apply a material padding between the label and chart
    labelPadding: 8,
    // Do not angle labels
    labelAngle: 0
  },
  axisBottom: {
    domainWidth: 2
  },
  axisY: {
    domain: false,
    // Add horizontal grid lines
    grid: true
  }
};
