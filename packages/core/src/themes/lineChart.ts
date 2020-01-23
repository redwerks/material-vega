import { Config } from 'vega-embed';
import { mergeConfig } from 'vega';
import { MaterialVegaOptions, extendDefaults } from '../options';
import { createBarConfig } from './barChart';

/**
 * Create config common to line chart types
 */
export const createLineConfig = (options: MaterialVegaOptions): Config => {
  return mergeConfig(createBarConfig(options), {});
};

/**
 * Create a line chart theme
 */
export const createLineChartTheme = (
  options: Partial<MaterialVegaOptions>
): Config => {
  return createLineConfig(extendDefaults(options));
};
