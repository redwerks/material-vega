import { Config } from 'vega-embed';
import { MaterialVegaOptions } from '../options';

/**
 * Create config common to all bar chart types
 */
export const createBarConfig = (options: MaterialVegaOptions): Config => {
  return {};
};

/**
 * Create config common to vertical bar chart types
 */
export const createVerticalBarConfig = (
  options: MaterialVegaOptions
): Config => {
  return {
    axisBottom: {
      // Extra thick bottom line
      domain: true,
      domainWidth: options.thickDomainLineWidth
    },
    bar: {
      cornerRadiusTopLeft: options.cornerRadius,
      cornerRadiusTopRight: options.cornerRadius
    }
  };
};

/**
 * Create config common to horizontal bar chart types
 */
export const createHorizontalBarConfig = (
  options: MaterialVegaOptions
): Config => {
  return {
    axisLeft: {
      // Extra thick left line
      domain: true,
      domainWidth: options.thickDomainLineWidth
    },
    bar: {
      cornerRadiusTopRight: options.cornerRadius,
      cornerRadiusBottomRight: options.cornerRadius
    }
  };
};
