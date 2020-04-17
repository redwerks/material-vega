import React, { ReactElement } from 'react';
import { MuiVegaLite } from '../..';

export default { title: 'Vega Material UI Vega/Interactive/Hover Value' };

export const Basic = (): ReactElement => (
  <MuiVegaLite
    variant="lineChart"
    spec={{
      $schema: 'https://vega.github.io/schema/vega-lite/v4.json',
      data: {
        url: 'https://vega.github.io/vega-lite/examples/data/stocks.csv'
      },
      width: 400,
      height: 300,
      layer: [
        {
          encoding: {
            x: { field: 'date', type: 'temporal' },
            y: { field: 'price', type: 'quantitative' },
            color: { field: 'symbol', type: 'nominal' }
          },
          layer: [
            { mark: 'line' },
            {
              selection: {
                label: {
                  type: 'single',
                  nearest: true,
                  on: 'mouseover',
                  encodings: ['x'],
                  empty: 'none'
                }
              },
              mark: 'point',
              encoding: {
                opacity: {
                  condition: { selection: 'label', value: 1 },
                  value: 0
                }
              }
            }
          ]
        },
        {
          transform: [{ filter: { selection: 'label' } }],
          layer: [
            {
              mark: 'rule',
              encoding: {
                x: { type: 'temporal', field: 'date' }
              }
            },
            {
              encoding: {
                text: { type: 'quantitative', field: 'price' },
                x: { type: 'temporal', field: 'date' },
                y: { type: 'quantitative', field: 'price' }
              },
              layer: [
                {
                  mark: {
                    type: 'text',
                    stroke: 'white',
                    strokeWidth: 2,
                    align: 'left',
                    dx: 5,
                    dy: -5
                  }
                },
                {
                  mark: { type: 'text', align: 'left', dx: 5, dy: -5 },
                  encoding: {
                    color: { type: 'nominal', field: 'symbol' }
                  }
                }
              ]
            }
          ]
        }
      ]
    }}
  />
);

export const SingleValue = (): ReactElement => (
  <MuiVegaLite
    variant="areaLineChart"
    spec={{
      $schema: 'https://vega.github.io/schema/vega-lite/v4.json',
      width: 300,
      height: 200,
      data: {
        url:
          'https://vega.github.io/vega-lite/examples/data/unemployment-across-industries.json'
      },
      encoding: {
        x: {
          timeUnit: 'yearmonth',
          field: 'date',
          type: 'temporal',
          axis: { format: '%Y' }
        }
      },
      layer: [
        {
          encoding: {
            y: {
              aggregate: 'sum',
              field: 'count',
              type: 'quantitative'
            }
          },
          layer: [
            {
              mark: 'area'
            },
            {
              selection: {
                label: {
                  type: 'single',
                  nearest: true,
                  on: 'mouseover',
                  encodings: ['x'],
                  empty: 'none'
                }
              },
              mark: {
                type: 'point',
                fill: 'white',
                size: 100
              },
              encoding: {
                opacity: {
                  condition: { selection: 'label', value: 1 },
                  value: 0
                }
              }
            }
          ]
        },
        {
          transform: [{ filter: { selection: 'label' } }],
          layer: [
            {
              mark: 'rule'
            },
            {
              encoding: {
                text: {
                  aggregate: 'sum',
                  field: 'count',
                  type: 'quantitative'
                },
                y: {
                  aggregate: 'sum',
                  field: 'count',
                  type: 'quantitative'
                }
              },
              layer: [
                {
                  mark: {
                    type: 'text',
                    stroke: 'white',
                    strokeWidth: 2,
                    align: 'left',
                    dx: 5,
                    dy: -5
                  }
                },
                {
                  mark: { type: 'text', align: 'left', dx: 5, dy: -5 }
                }
              ]
            }
          ]
        }
      ]
    }}
  />
);
