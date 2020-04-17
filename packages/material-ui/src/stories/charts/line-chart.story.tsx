import React, { ReactElement } from 'react';
import { MuiVegaLite } from '../..';

export default { title: 'Vega Material UI/Charts/Line Chart' };

export const Basic = (): ReactElement => (
  <MuiVegaLite
    variant="lineChart"
    spec={{
      $schema: 'https://vega.github.io/schema/vega-lite/v4.json',
      description: "Google's stock price over time.",
      data: {
        url: 'https://vega.github.io/vega-lite/examples/data/stocks.csv'
      },
      transform: [{ filter: "datum.symbol==='GOOG'" }],
      mark: 'line',
      encoding: {
        x: { field: 'date', type: 'temporal' },
        y: {
          field: 'price',
          type: 'quantitative'
        }
      }
    }}
  />
);

export const LabeledLines = (): ReactElement => (
  <MuiVegaLite
    variant="lineChart"
    spec={{
      $schema: 'https://vega.github.io/schema/vega-lite/v4.json',
      description: 'Multi-series line chart with labels.',
      data: {
        url: 'https://vega.github.io/vega-lite/examples/data/stocks.csv'
      },
      transform: [{ filter: "datum.symbol!=='IBM'" }],
      encoding: { color: { field: 'symbol', type: 'nominal', legend: null } },
      layer: [
        {
          mark: 'line',
          encoding: {
            x: { field: 'date', type: 'temporal', title: 'date' },
            y: { field: 'price', type: 'quantitative', title: 'price' }
          }
        },
        {
          encoding: {
            x: { aggregate: 'max', field: 'date', type: 'temporal' },
            y: {
              aggregate: { argmax: 'date' },
              field: 'price',
              type: 'quantitative',
              axis: {
                orient: 'left',
                labelAlign: 'right'
              }
            }
          },
          layer: [
            { mark: { type: 'circle' } },
            {
              mark: { type: 'text', align: 'left', dx: 4 },
              encoding: { text: { field: 'symbol', type: 'nominal' } }
            }
          ]
        }
      ]
    }}
  />
);
