import { MaterialVegaOptions, materialVegaOptionDefaults } from './options';
import { PatchFunc, Config } from 'vega-embed';
import { config } from './config';
import { patch } from './patch';

export class MaterialVegaTheme {
  private options: MaterialVegaOptions;
  patch: PatchFunc;
  config: Config;

  constructor(options: Partial<MaterialVegaOptions>) {
    this.options = Object.assign({}, materialVegaOptionDefaults, options);
    this.config = config(this.options);
    this.patch = patch(this.options);
  }
}
