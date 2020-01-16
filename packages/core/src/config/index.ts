import merge from 'lodash.merge';
import { Config } from 'vega-embed';
import { commonConfig } from './common';
import { MaterialVegaOptions } from '../options';
import { barConfig } from './bar';
import { lineConfig } from './line';

export const config = (options: MaterialVegaOptions): Config => {
  return merge(
    {},
    commonConfig(options),
    { bar: barConfig(options) },
    lineConfig(options)
  );
};
