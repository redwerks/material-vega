import React, { ReactElement } from 'react';
import { MuiVegaLite } from '../..';

export default { title: 'Vega Material UI/Interactive/Tooltip' };

export const SingleValue = (): ReactElement => (
  <MuiVegaLite
    variant="verticalBarChart"
    spec={{
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
          type: 'nominal',
          axis: {
            ticks: false
          },
          band: 0.5
        },
        y: {
          field: 'percent',
          type: 'quantitative',
          axis: {
            format: 'p'
          }
        },
        tooltip: {
          field: 'percent',
          type: 'quantitative',
          format: '.0p'
        }
      }
    }}
  />
);

export const MultiValue = (): ReactElement => (
  <MuiVegaLite
    variant="lineChart"
    spec={{
      $schema: 'https://vega.github.io/schema/vega-lite/v4.json',
      data: {
        url: 'https://vega.github.io/vega-lite/examples/data/stocks.csv'
      },
      width: 400,
      height: 300,
      encoding: { x: { field: 'date', type: 'temporal' } },
      layer: [
        {
          encoding: {
            color: { field: 'symbol', type: 'nominal' },
            y: { field: 'price', type: 'quantitative' }
          },
          layer: [
            { mark: 'line' },
            { transform: [{ filter: { selection: 'hover' } }], mark: 'point' }
          ]
        },
        {
          transform: [{ pivot: 'symbol', value: 'price', groupby: ['date'] }],
          mark: 'rule',
          encoding: {
            opacity: {
              condition: { value: 0.3, selection: 'hover' },
              value: 0
            },
            tooltip: [
              { field: 'AAPL', type: 'quantitative' },
              { field: 'AMZN', type: 'quantitative' },
              { field: 'GOOG', type: 'quantitative' },
              { field: 'IBM', type: 'quantitative' },
              { field: 'MSFT', type: 'quantitative' }
            ]
          },
          selection: {
            hover: {
              type: 'single',
              fields: ['date'],
              nearest: true,
              on: 'mouseover',
              empty: 'none',
              clear: 'mouseout'
            }
          }
        }
      ]
    }}
  />
);
