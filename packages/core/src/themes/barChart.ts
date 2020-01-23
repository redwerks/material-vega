import { Config } from 'vega-embed';
import { mergeConfig } from 'vega';
import { MaterialVegaOptions, extendDefaults } from '../options';
import { createCommonConfig } from './common';

/**
 * Create config common to bar chart types
 */
export const createBarConfig = (options: MaterialVegaOptions): Config => {
  return mergeConfig(createCommonConfig(options), {});
};

/**
 * Create config common to vertical bar chart types
 */
export const createVerticalBarConfig = (
  options: MaterialVegaOptions
): Config => {
  return mergeConfig(createBarConfig(options), {
    axisBottom: {
      // Extra thick bottom line
      domain: true,
      domainWidth: options.thickDomainLineWidth
    },
    bar: {
      cornerRadiusTopLeft: options.cornerRadius,
      cornerRadiusTopRight: options.cornerRadius
    }
  });
};

/**
 * Create config common to horizontal bar chart types
 */
export const createHorizontalBarConfig = (
  options: MaterialVegaOptions
): Config => {
  return mergeConfig(createBarConfig(options), {
    axisLeft: {
      // Extra thick left line
      domain: true,
      domainWidth: options.thickDomainLineWidth
    },
    bar: {
      cornerRadiusTopRight: options.cornerRadius,
      cornerRadiusBottomRight: options.cornerRadius
    }
  });
};

/**
 * Create a vertical bar chart theme
 */
export const createVerticalBarChartTheme = (
  options: Partial<MaterialVegaOptions>
): Config => {
  return createVerticalBarConfig(extendDefaults(options));
};

/**
 * Create a horizontal bar chart theme
 */
export const createHorizontalBarChartTheme = (
  options: Partial<MaterialVegaOptions>
): Config => {
  return createHorizontalBarConfig(extendDefaults(options));
};
