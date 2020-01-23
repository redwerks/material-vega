import { chart } from './_common.story';

export default { title: 'Line Chart' };

export const Basic = chart(
  {
    $schema: 'https://vega.github.io/schema/vega-lite/v4.json',
    description: "Google's stock price over time.",
    data: { url: 'https://vega.github.io/vega-lite/examples/data/stocks.csv' },
    transform: [{ filter: "datum.symbol==='GOOG'" }],
    mark: 'line',
    encoding: {
      x: { field: 'date', type: 'temporal' },
      y: {
        field: 'price',
        type: 'quantitative'
      }
    }
  },
  'lineChart'
);

export const WithLegend = chart(
  {
    $schema: 'https://vega.github.io/schema/vega-lite/v4.json',
    description: 'Stock prices of 5 Tech Companies over Time.',
    data: { url: 'https://vega.github.io/vega-lite/examples/data/stocks.csv' },
    mark: 'line',
    encoding: {
      x: {
        field: 'date',
        type: 'temporal'
      },
      y: {
        field: 'price',
        type: 'quantitative'
      },
      color: { field: 'symbol', type: 'nominal' }
    }
  },
  'lineChart'
);
