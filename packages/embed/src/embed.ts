import merge from 'lodash.merge';
import vegaEmbed, { VisualizationSpec, Result, Config } from 'vega-embed';
import { MaterialVegaTheme } from '../../core/src';
import { MaterialEmbedOptions } from './interface';

export function embed(
  el: HTMLElement | string,
  spec: VisualizationSpec | string,
  opts: MaterialEmbedOptions = {}
): Promise<Result> {
  const theme = new MaterialVegaTheme(opts.themeOptions || {});

  return vegaEmbed(el, spec, {
    // Disable actions by default, but allow them to be enabled
    actions: false,
    ...opts,
    // Augment patch
    patch: spec => {
      spec = theme.patch(spec);

      if (typeof opts.patch === 'function') {
        spec = opts.patch(spec);
      }

      return spec;
    },
    // Augment config
    config: merge(theme.config, opts.config || {})
  });
}
