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
      // Grid lines (lighter than domain lines)
      gridColor: options.dividerColor,
      gridOpacity: 0.5,
      grid: false,
      // Label text
      labelColor: options.secondaryTextColor,
      // Apply a material padding between the label and chart
      labelPadding: options.labelPadding,
      // Do not angle label text
      labelAngle: 0,
      // Title text,
      titleColor: options.secondaryTextColor
    },
    axisY: {
      // No y-axis domain line or ticks
      domain: false,
      ticks: false
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
      // Label text
      labelColor: options.textColor
    }
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
