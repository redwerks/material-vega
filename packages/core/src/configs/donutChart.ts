import { Config } from 'vega-embed';
import { MaterialVegaOptions } from '../options';

/**
 * Create config common to donut chart types
 */
export const createDonutConfig = (options: MaterialVegaOptions): Config => {
  return {
    style: {
      percent: {
        font: options.font,
        fontWeight: 'normal',
        fill: options.textColor
      }
    }
  };
};
