import { Config } from 'vega-embed';
import { MaterialVegaOptions } from '../options';

/**
 * Create config common to line chart types
 */
export const createLineConfig = (options: MaterialVegaOptions): Config => {
  return {
    line: {
      // Thin stroke lines
      strokeWidth: 1.5
    }
  };
};
