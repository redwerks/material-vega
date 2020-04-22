import * as vega from 'vega';
import { Config } from 'vega-embed';
import { MaterialVegaOptions } from '../options';

/**
 * Create config common to all Material chart types
 */
export const createCommonConfig = (options: MaterialVegaOptions): Config => {
  return {
    background: options.background,
    style: {
      'guide-label': {
        font: options.font,
        fontWeight: 'normal'
      },
      'guide-title': {
        font: options.font,
        fontWeight: 'normal'
      },
      'group-title': {
        font: options.font,
        fontWeight: 'normal'
      }
    },
    // Common colors
    arc: { fill: options.color },
    area: { fill: options.color },
    bar: { fill: options.color },
    line: { stroke: options.color },
    path: { stroke: options.color },
    point: { color: options.color },
    rect: { fill: options.color },
    shape: { stroke: options.color },
    symbol: { fill: options.color },
    axis: {
      // Domain lines
      domainColor: options.dividerColor,
      // Tick lines
      tickColor: options.dividerColor,
      // Grid lines (lighter than domain lines)
      gridColor: options.dividerColor,
      gridOpacity: 0.5,
      grid: false,
      // Label text
      labelColor: options.secondaryTextColor,
      labelFontSize: 12,
      // Apply a material padding between the label and chart
      labelPadding: options.labelPadding,
      // Do not angle label text
      labelAngle: 0,
      // Title text,
      titleColor: options.secondaryTextColor,
      titleFontSize: 12,
      // Disable the title by default
      title: null
    },
    axisY: {
      // Default the Y axis to right orientation
      orient: 'right',
      labelAlign: 'left',
      // No y-axis domain line or ticks
      domain: false,
      ticks: false
    },
    rule: {
      // Interactive rule line styles
      // @note The opacity doesn't actually work due to https://github.com/vega/vega-lite/issues/6296
      stroke: options.secondaryTextColor,
      strokeDash: [2, 2]
    },
    view: {
      // Hide the square chart border
      strokeWidth: 0
    },
    legend: {
      // Default to legends below the chart
      orient: 'bottom',
      // Title text (disabled by default)
      title: null,
      titleColor: options.textColor,
      titleFontSize: 12,
      // Label text
      labelColor: options.textColor,
      labelFontSize: 12
    },
    range: { category: vega.scheme('tableau10') }
  };
};

/**
 * Create config common to all vertical Material chart types
 */
export const createVerticalCommonConfig = (
  options: MaterialVegaOptions
): Config => {
  return {
    axisY: {
      grid: true
    }
  };
};
/**
 * Create config common to all left aligned horizontal Material chart types
 */
export const createHorizontalCommonConfig = (
  options: MaterialVegaOptions
): Config => {
  return {
    axisX: {
      grid: true
    }
  };
};
