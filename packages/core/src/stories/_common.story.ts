import { TopLevelSpec } from 'vega-lite';
import vegaEmbed from 'vega-embed';
import { ThemeTypes, createTheme } from '../theme';

export const chart = (
  spec: TopLevelSpec,
  theme: ThemeTypes
) => (): HTMLElement => {
  const div = document.createElement('div');

  vegaEmbed(div, spec, {
    actions: true,
    renderer: 'svg',
    config: createTheme({}, theme)
  });

  return div;
};
