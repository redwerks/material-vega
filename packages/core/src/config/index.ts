import { Config } from 'vega-embed';
import { commonConfig } from './common';
import { MaterialVegaOptions } from '../options';
import { barConfig } from './bar';

export const config = (options: MaterialVegaOptions): Config => {
  return {
    ...commonConfig(options),
    bar: barConfig(options)
  };
};
