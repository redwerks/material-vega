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
      x: { field: 'date', type: 'temporal', axis: { title: null } },
      y: {
        field: 'price',
        type: 'quantitative',
        axis: { orient: 'right', title: null }
      }
    }
  },
  'lineChart'
);
