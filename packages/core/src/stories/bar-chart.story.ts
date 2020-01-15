import vegaEmbed from 'vega-embed';
import { TopLevelSpec } from 'vega-lite';

export default { title: 'Bar Chart' };

export const Basic = (): HTMLElement => {
  const div = document.createElement('div');
  const spec: TopLevelSpec = {
    $schema: 'https://vega.github.io/schema/vega-lite/v4.json',
    width: 200,
    data: {
      values: [
        { quarter: 'Q1', percent: 0.2 },
        { quarter: 'Q2', percent: 0.28 },
        { quarter: 'Q3', percent: 0.32 },
        { quarter: 'Q4', percent: 0.39 }
      ]
    },
    mark: 'bar',
    encoding: {
      x: {
        field: 'quarter',
        type: 'nominal'
      },
      y: {
        field: 'percent',
        type: 'quantitative'
      }
    }
  };

  vegaEmbed(div, spec, { actions: false });

  return div;
};
