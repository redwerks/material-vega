import { Config } from 'vega-embed';
import { MaterialVegaOptions } from '../options';

/**
 * Create config common to scatterplot chart types
 */
export const createScatterplotConfig = (
  options: MaterialVegaOptions
): Config => {
  return {
    axis: {
      // Horizontal and vertical grid lines
      grid: true
    },
    axisY: {
      // Default the Y axis to left orientation
      orient: 'left',
      labelAlign: 'right',
      // Include domain line
      domain: true
    },
    point: {
      // Default to solid shapes
      filled: true
    }
  };
};
