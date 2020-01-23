import { Config } from 'vega-embed';
import { MaterialVegaOptions } from '../options';

/**
 * Create config common to all Material chart types
 */
export const createCommonConfig = (options: MaterialVegaOptions): Config => {
  return {
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
    axis: {
      // Domain lines
      domainColor: options.dividerColor,
      // Tick lines
      tickColor: options.dividerColor,
      // Grid lines
      gridColor: options.dividerColor,
      grid: true,
      // Label text
      labelColor: options.secondaryTextColor,
      // Apply a material padding between the label and chart
      labelPadding: options.labelPadding,
      // Do not angle label text
      labelAngle: 0,
      // Title text,
      titleColor: options.secondaryTextColor
    },
    axisBand: {
      // Hide grid lines parallel to bars
      grid: false
    },
    axisY: {
      // No y-axis domain line or ticks
      domain: false,
      ticks: false
    },
    view: {
      // Hide the square chart border
      strokeWidth: 0
    }
  };
};

/**
 * Create config common to all vertical Material chart types
 */
export const createVerticalCommonConfig = (
  options: MaterialVegaOptions
): Config => {
  return {};
};
/**
 * Create config common to all left aligned horizontal Material chart types
 */
export const createHorizontalCommonConfig = (
  options: MaterialVegaOptions
): Config => {
  return {};
};
