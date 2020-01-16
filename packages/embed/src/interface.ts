import { EmbedOptions, Config } from 'vega-embed';
import { MaterialVegaOptions } from '../../core/src/options';

export type MaterialEmbedOptions = EmbedOptions & {
  themeOptions?: Partial<MaterialVegaOptions>;
  config?: Config;
};
