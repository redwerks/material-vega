import React, { ReactElement } from 'react';
import { MuiVegaLite } from '..';

export default { title: 'Vega Material UI Vega/Interactive' };

export const HoverValue = (): ReactElement => (
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

export const SingleHoverValue = (): ReactElement => (
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

export const SingleValueTooltip = (): ReactElement => (
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

export const MultiValueTooltip = (): ReactElement => (
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
