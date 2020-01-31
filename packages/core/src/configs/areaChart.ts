import { Config } from 'vega-embed';
import { MaterialVegaOptions } from '../options';

/**
 * Create config common to area chart types
 */
export const createAreaConfig = (options: MaterialVegaOptions): Config => {
  return {
    axis: {
      // Use dashed grid lines for common area charts
      gridDash: [4, 2]
    },
    axisBottom: {
      // Extra thick bottom line
      domain: true,
      domainWidth: options.thickDomainLineWidth
    }
  };
};

/**
 * Create config common to area-line chart types
 */
export const createAreaLineConfig = (options: MaterialVegaOptions): Config => {
  return {
    axisBottom: {
      // Extra thick bottom line
      domain: true,
      domainWidth: options.thickDomainLineWidth
    },
    line: {
      strokeWidth: 2
    },
    area: {
      line: true,
      fillOpacity: 0.3
    }
  };
};
