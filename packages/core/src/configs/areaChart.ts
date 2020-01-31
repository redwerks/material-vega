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
