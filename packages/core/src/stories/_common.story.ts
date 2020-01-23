import { TopLevelSpec } from 'vega-lite';
import vegaEmbed, { Config } from 'vega-embed';
import { MaterialVegaOptions } from '../options';

export const chart = (
  spec: TopLevelSpec,
  createConfig: (options: Partial<MaterialVegaOptions>) => Config
) => (): HTMLElement => {
  const div = document.createElement('div');

  vegaEmbed(div, spec, {
    actions: true,
    renderer: 'svg',
    config: createConfig({})
  });

  return div;
};
