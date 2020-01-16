import { TopLevelSpec } from 'vega-lite';
import vegaEmbed from '..';

export const chart = (spec: TopLevelSpec) => (): HTMLElement => {
  const div = document.createElement('div');

  vegaEmbed(div, spec, {
    actions: true,
    renderer: 'svg',
    patch: spec => {
      console.log(spec);
      return spec;
    }
  });

  return div;
};
